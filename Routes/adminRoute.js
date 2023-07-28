const path = require('path') // import path

const express = require('express') // import express
const router = express.Router() // router

const adminController = require("../Controllers/AdminController")

const multer = require('multer')

var Storage = multer.diskStorage({
    destination:"./public/images",
    filename: (req,file,cb)=>{
        cb(null,  Date.now() + file.originalname)
        }
})
var upload = multer({  
    storage:Storage
}).single('img')


router.post("/addcategory",upload,adminController.add_main_category)

module.exports = router