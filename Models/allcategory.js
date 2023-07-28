const mongoose = require('mongoose')

// user model
const allCategorySchema = new mongoose.Schema(
    {
        title: String,
        img: String
    }
)
const allCategoryModel = new mongoose.model("allCategory",allCategorySchema)
module.exports = allCategoryModel