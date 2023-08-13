const mongoose = require("mongoose");
const article = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});
const login = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    unique: true,
    maxLength: [20],
  },
  password: {
    type: String,
    // required: true,
  },
  bookmark: {
    type: [article],
  },
});

const auth = mongoose.model("login", login);
module.exports = auth;
