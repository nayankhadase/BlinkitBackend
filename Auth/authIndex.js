const jwt = require('jsonwebtoken');

const reqAuth = (req,res,next) => {
    const token = req.headers.authorization
    console.log("checking auth: token", token);
    if (token) {
        jwt.verify(token, 'useAnySecretKeyHere', (error, decodeToken) => {
            if (error) {
                console.log("routerauth==", error.message);
                // res.redirect('/login');
                return res.status(200).json({
                    "response":{
                        "status": 2,
                        "reason": error.message
                    }
                })
            }
            else {
                // console.log(decodeToken);
                next();
            }
        })
    }
    else {
        // res.redirect('/login');
        return res.status(200).json({
            "response":{
                "status": 2,
                "reason": "A token is required."
            }
        })
    }
}

module.exports = reqAuth
