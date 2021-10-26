// const {SECRET_KEY,TOKEN_EXPIRE} = require('../configuration/Config');
const jwt = require("jsonwebtoken")
//  console.log(process.env.SEC);
module.exports.CreateToken = (user)=>{
    console.log("create",user._id);
    return jwt.sign({user_id:user._id},'verySecret',{
        expiresIn:'1hr'
    })
}