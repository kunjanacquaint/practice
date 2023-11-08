const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/PRODUCTDB').then((success)=>{
    console.log("Connection done to database")
}).catch(error=>{
    console.log({error})
})