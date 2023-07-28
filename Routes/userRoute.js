const path = require('path') // import path

const express = require('express') // import express
const router = express.Router() // router

const reqAuth = require('../Auth/authIndex')

const userController = require("../Controllers/UserController")
const allCategories = require("../Controllers/AllCategories")

router.post("/createuser",userController.create_user)
router.post("/loginuser", userController.user_login)

router.get("/maincategories", allCategories.get_all_category)

module.exports = router



