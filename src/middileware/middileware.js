const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel')




const jwtauth = async function(req,res,next){

    
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()


}

const userExist = async function(req,res,next){

    
    let userId = req.params.userId;
    if(!userId){return res.send({msg:"please give userId"})}
  
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
    
    next()

}



module.exports.userExist = userExist
module.exports.jwtauth = jwtauth


// If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself