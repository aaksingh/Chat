import mongoose from 'mongoose'
import express  from 'express'
const app = express()
import Pusher from 'pusher'
const port  = process.env.PORT || 3001
import Message from './dbMessages.js'

const pusher = new Pusher({
    appId: "1128617",
    key: "f4795fbbb47df9e292a1",
    secret: "4d48fbbb544e43a29358",
    cluster: "ap2",
    useTLS: true
  });

//Middlewares
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Allow-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*")
    next()
});

//DB cong

const config_url ='mongodb+srv://admin:9sxDYsa6Jidk69nx@cluster0.rcal8.mongodb.net/chatappdb?retryWrites=true&w=majority'
mongoose.connect(config_url,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.once('open',()=>{
    const msgCollection = db.collection("messagecontents")
    const changeStreamm = msgCollection.watch()

    changeStreamm.on("change",(change)=>{
     if(change.operationType === 'insert'){
         const messageDetails = change.fullDocument;
         pusher.trigger('messages','inserted',{
             name : messageDetails.user,
             message : messageDetails.message,
         })
     }else{
         console.log('Error')
     }
    });
});

// API routes

app.get('/',(req,res)=>res.status(200).send("Hello"))

app.get('/messages/sync',(req,res)=>{
    Message.find((err,data)=>{
        if(err){
           
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const messagedb = req.body

    Message.create(messagedb,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})




//listen

app.listen(port,()=>console.log(`Listening on Port:${port}`))