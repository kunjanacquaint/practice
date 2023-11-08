const mongoose=require('mongoose')
const customer=new mongoose.Schema({
    name: String
  })

const Customer=mongoose.model('Customer',customer)
module.exports.Customer=Customer