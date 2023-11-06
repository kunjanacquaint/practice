 //import express module to create server
const express =require('express')
const dotenv=require('dotenv')

dotenv.config()// config .env file 
const app=express()
//#region test user endpoint
app.post('/user',(req,res)=>{
  return res.send({"message":"Hello client!"})
})
//#endregion


const port=process.env.PORT||8080 //port
//create server
app.listen(port,()=>{
    console.log(`Service is running on ${port}`)
})