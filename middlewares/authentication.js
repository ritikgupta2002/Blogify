const { validateToken } = require("../services/authentication.js");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];
    if (!token) {
     return  next();
    }
    try {
      const userPayload = validateToken(token);
      req.user=userPayload;
    } catch (error) {}
   return  next();
  };
}

module.exports = {  checkForAuthenticationCookie };
