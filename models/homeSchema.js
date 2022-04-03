const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        recquired:true
    },
    password:{
        type:String,
        required:true
    }
    
})
module.exports=mongoose.model('Registeruser',userSchema)