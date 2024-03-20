const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true,
        trim:true,
        
    },
    password:String,
    firstName:String,
    lastName:String,
})
const user= mongoose.model('User',userSchema)
module.exports={
    userSchema
};