const mongoose=require('mongoose')
mongoose.connect('mongodb://mongodb:27017/containerDB').then((success)=>{
    console.log("Connection done to database")
}).catch(error=>{
    console.log({error})
})