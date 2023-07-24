const path = require('path') // import path

const express = require('express') // import express
const router = express.Router() // router

const reqAuth = require('../Auth/authIndex')

const userController = require("../Controllers/UserController")

router.post("/createuser",userController.create_user)
router.post("/loginuser", userController.user_login)

module.exports = router



