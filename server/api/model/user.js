const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    name:String,
    role:{
        type :String,
        default:"visitor"
    }
})

const usermodel = mongoose.model('user',userschema);

module.exports=usermodel;