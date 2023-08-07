const bcrypt = require("bcryptjs");

const auth = require("../model/login");

exports.signIn = (req, res) => {
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

exports.login = (req, res) => {
  try {
    const data = req.body;
    auth.findOne({ username: data.username }).then((userDoc) => {
      if (!userDoc) {
        return res.redirect("/register");
      }
      bcrypt
        .compare(data.password, userDoc.password)
        .then((doMatch) => {
          if (doMatch) return res.redirect("/");
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.sample = (req, res) => {
  try {
    const authData = req.body;
    auth.create(authData);
    res.send("completed")
  } catch (error) {
    res.status(404).send({ error: "error no register succesfully" });
  }
};
