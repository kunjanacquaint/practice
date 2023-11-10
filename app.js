//import express module to create server
const express = require('express')
const dotenv = require('dotenv')
require('./database/connection')
const { Customer } = require('./database/customers.model')
const customer = new Customer({ name: "testing customer" })
dotenv.config()// config .env file 
const app = express()
//#region test user endpoint
app.post('/user', async (req, res) => {
  console.log("REQ hitting 1111 ")
  const customer = new Customer({ name: "testing customer" })
  const savedUser = await customer.save()
  return res.send({ data: savedUser, "message": "Hello client!" })

})
//#endregion


const port = process.env.PORT || 8080 //port
//create server
app.listen(port, () => {
  console.log(`Service is running on ${port}`)
})