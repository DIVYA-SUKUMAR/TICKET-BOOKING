const {SECRET_KEY} = require('../configuration/Config');
const jwt = require("jsonwebtoken")
module.exports.checkPermission = () => {
    return async (req, res, next) => {
      const token = req.headers.authorization.split(' ')[1]
     console.log("token",token);
      if (!token) {
       
        return res.status(401).json({ error: "Unauthorized Request" });
      }
  
      try {
        const verified = await jwt.verify(token, 'verySecret');
        console.log("verification",verified);
       req.user_id = verified.user_id;
        next();
      } catch (error) {
        res.status(400).json({ error: "Authentication Error: Invalid Token" });
      }
    };
  };