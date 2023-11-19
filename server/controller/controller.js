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
    if (!dataCheck) {
      res.status(201).send("go to signin page");
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      dataCheck.password
    );
    if (isPasswordValid) {
      console.log("working");
      const token = jwt.sign(
        {
          username: dataCheck.username,
        },
        "secret_key"
      );
      console.log(token);
      return res
        .status(200)
        .cookie("token", token, { httpOnly: true })
        .send({ token: token });
    } else {
      return res.status(401).send("user not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.signOut = async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    console.log("sign out succesfully");
    return res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .send("deleted");
  } else {
    res.send("already signout");
    console.log("already sign out");
  }
};
exports.bookmark = async (req, res) => {
  try {
    const token = req.cookies.token;
    const verified = jwt.verify(token, "secret_key");
    if (verified) {
      const authData = req.body;
      console.log(authData);

      const booked = await auth.findOne({
        username: verified.username,
        "bookmark.title": authData.title,
      });

      if (booked) {
        await auth
          .findOneAndUpdate(
            { username: verified.username },
            { $push: { bookmark: [authData] } }
          )
          .then((user) => {
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      res.send("completed");
    }
  } catch (error) {
    res.status(404).send({ error: "error no register succesfully" });
  }
};

exports.cookieCheck = async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    return res.send("true");
  } else {
    return res.send("false");
  }
};

exports.show = async (req, res) => {
  try {
    const token = req.cookies.token;
    const verified = jwt.verify(token, "secret_key");

    if (verified) {
      const authData = req.body;
      console.log(authData);
      await auth
        .findOne({ username: verified.username })
        .then((user) => {
          console.log(user);
          res.json(user.bookmark);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
};
