const mongoose = require("mongoose")
const login = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        maxLength:[20]
    },
    password:{
        type:String,
        required:true,
    }
});
const auth = mongoose.model("login",login);
module.exports = auth;