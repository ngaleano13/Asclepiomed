const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name : String,
    lastname: String,
    mail: String,
    document: Number,
    password: String
})

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel;