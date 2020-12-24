import mongoose from 'mongoose'
const express = require('express')
const { Mongoose } = require('mongoose')
const app = express()
const port  = process.env.PORT || 9000

// API routes

app.get('/',(req,res)=>res.status(200).send("Hello"))


//DB cong

const config_url ='mongodb+srv://admin:9sxDYsa6Jidk69nx@cluster0.rcal8.mongodb.net/chatappdb?retryWrites=true&w=majority'
mongoose.connect(config_url,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//listen

app.listen(port,()=>console.log(`Listening on Port:${port}`))