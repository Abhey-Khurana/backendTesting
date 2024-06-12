require('dotenv').config()
const express=require('express');

const app=express();



app.get("/abhey",(req,res)=>{
    // console.log(process.env)
    res.send("HELLO ABHEY KHURANA");
})

app.get("/test",(req,res)=>{
    res.send("Working");
})

app.listen(process.env.PORT,()=>{
    console.log(`LISTENING AT PORT ${process.env.PORT}`)
})