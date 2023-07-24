const userModel = require("../Models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { use } = require("../Routes/userRoute")
const maxtime = 2 * 24 * 60 * 60



//     IQResponseAccept    = 1,
//     IQResponseError     = 2,
//     IQResponseReject    = 3


module.exports.create_user = async (req,res,next) => {
    const {email, password} = req.body
    if (email.length == 0 && password.length < 5){
        return res.status(200).json({
            "response" : {
                "status": 2,
                "reason": "invalid email or password"
            }
        })
    }
    try {
        const oldUser = await userModel.findOne({email:email})
        if (oldUser){
            return res.status(200).json({
                "response" : {
                    "status": 2,
                    "reason": "Already has account with this email"
                }
            })
        }
        encryptedPassword = await bcrypt.hash(password,10)
        const newUser = new userModel({
            email,
            password: encryptedPassword
        })
        await newUser.save()
        return res.status(200).json({
            "response": {
                "status": 1,
                "reason": "Account created successfully!"
            }
        })
    } catch (error) {
        return res.status(200).json({
             "response" : {
                "status": 2,
                "reason": error.message
            }
        })
    }
}

// login user
module.exports.user_login = async (req,res,next) => {
    const {email, password} = req.body
    if (email.length == 0 && password.length < 5){
        return res.status(200).json({
            "response": {
                "status": 2,
                "reason": "invalid email or password"
            }
        })
    }
    try {
        const user = await userModel.findOne({email:email})
        console.log("user",user);
        if (user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign({user}, "useAnySecretKeyHere", { expiresIn: maxtime })
            res.cookie('jwt', token, { httpOnly: true, maxtime: maxtime * 1000 })
            return res.status(200).json({
                "response": {
                    "status": 1,
                    "reason": "User loged in!",
                    "token": token,
                    "user": user.email
                }
            })
        }else{
            return res.status(200).json({
                "response": {
                    "status" : 2,
                    "reason": "Invalid credentials"
                }
            })
        }
    } catch (error) {
        return res.status(200).json({
            "response": {
                "status" : 2,
                "reason": error.message
            }
        })
    }


}