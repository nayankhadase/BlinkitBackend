const mongoose = require('mongoose') // import mongoose

const express = require('express') // import express
const app = express() // create instance
const port = 3000 // create port
// it will create server at localhost with port 3000

const uRoutes = require('./Routes/userRoute')

// connect to mongodb
const url =  "mongodb://localhost:27017/blinkitBackend";
mongoose.connect(url).then(()=>{console.log("mongod connected successfully")})
.catch((err)=>{console.log(err)});

app.use(express.json()) // parse request body as JSON

app.use("/user",uRoutes)

// app listening on port 3000 
  app.listen(port, () => {
    console.log(`blinkit backend app listening on port ${port}`)
  })

  // to run nodenon:  nodemon start index