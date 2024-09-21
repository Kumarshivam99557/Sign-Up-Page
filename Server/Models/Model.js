const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Signup-form")
.then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("failed")
})

const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection = mongoose.model("collection",userSchema)

module.exports=collection