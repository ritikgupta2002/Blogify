const jwt=require("jsonwebtoken");
const secret="$!2sundayholiday$$";

function createTokenForUser(user){
    const payload={
        id:user._id,
        email:user.email,
        role:user.role,
        profileIamgeUrl:user.profileImageUrl
    }
    const token=jwt.sign(payload,secret,{expiresIn:"5h"});
    return token;
}

function validateToken(token){
    const payload=jwt.verify(token,secret);
    return payload;
}

module.exports={
    createTokenForUser,
    validateToken
}