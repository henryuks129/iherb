const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// CONFIGURATIONS
require("dotenv").config();

// CORS MIDDLEWARE
app.use(cors());

// MIDDLEWARE(FOR JSON USAGE)
app.use(express.json());

// ENVIRONMENTAL VARIABLES

// MONGO-DB CONNECTION 

// ROUTES
app.get('/', (req,res)=>{
    res.send("Welcome")
})

app.listen(3000, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`)
})