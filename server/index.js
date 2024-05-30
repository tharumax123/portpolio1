const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users')

const app=express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/portpolio")





app.post("/contacts", (req,res)=>{
UserModel.create(req.body)
.then(user=>res.json(user))
.catch(err=>res.json(err))
})

app.listen(5000,()=>{
    console.log("server is running")
})
