const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const {createTokenForUser} = require("../services/authentication.js");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "../public/images/default.png",
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  this.salt = salt;
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.password = hashedPassword;
  next();
});

userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const hashedPassword = user.password;
  const inputHash = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");
   if (inputHash != hashedPassword){
    throw new Error("Password is not correct");
   }
  const token=createTokenForUser(user);
  return token;

});

const User = model("User", userSchema);

module.exports = User;
