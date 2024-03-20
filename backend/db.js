const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowerCase:true,
        minLength:3,
        maxLength:30

    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
})
const user= mongoose.model('User',userSchema)
module.exports={
    userSchema
};