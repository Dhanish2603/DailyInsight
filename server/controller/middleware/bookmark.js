const jwt = require("jsonwebtoken");

const bookmark = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    const decode = jwt.verify(token, "secret_key");

    // console.log(decode);
    res.send(decode);
    next();
  } catch (error) {
    res.status(404).json("unauthorised");
  }
};
module.exports = bookmark;
