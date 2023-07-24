const mongoose = require('mongoose')

// user model
const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String
    }
)
const userModel = new mongoose.model("User",userSchema)
module.exports = userModel