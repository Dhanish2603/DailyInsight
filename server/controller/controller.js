const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../model/login");

exports.signUp = (req, res) => {
  try {
    const authData = req.body;
    auth.findOne({ username: req.body.username }).then((userdoc) => {
      if (userdoc) {
        return res.send("already exists");
      }
      return bcrypt.hash(authData.password, 12).then((userAdd) => {
        authData.password = userAdd;
        auth.create(authData);
        res.status(200).send(authData);
      });
    });
  } catch (error) {
    res.status(404).send({ error: "error no register succesfully" });
  }
};

exports.signIn = async (req, res) => {
  try {
    const data = req.body;
    const dataCheck = await auth.findOne({ username: data.username });
    const dataCheck = await auth.findOne({ username: data.username });
    if (!dataCheck) {
      res.status(201).send("go to signin page");
    }

    const isPasswordValid = await bcrypt.compare(data.password, dataCheck.password);
        if(isPasswordValid){
        const token =  jwt.sign({
            username:dataCheck.username,
          },'secret_key')
          return res.status(200).json({  token: token })
        }else{
          return res.status(401).send("user not exist")
        }
   
  } catch (error) {
    console.log(error);
  }
};

// exports.sample = (req, res) => {
//   try {
//     const authData = req.body;
//     auth.create(authData);
//     res.send("completed")
//   } catch (error) {
//     res.status(404).send({ error: "error no register succesfully" });
//   }
// };

exports.cookieCheck = (req,res)=>{
  const token = req.cookies.token;
  console.log(token)
  if(token){
     res.status(200).send("true")
  }
  else{
     res.status(201).send(false) 
  }
}  