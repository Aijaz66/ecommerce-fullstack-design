const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Provide name"]
    },

    email:{
        type: String,
        required: [true,"Provide email"],
        unique:true, 
    },

    password:{
        type: String,
        required: [true,"Provide password"],
        
    },
    avatar:{
        type:String,
        default:""
    },
    mobile: {
        type: Number,
        default:null
    },
    cart:{
        type: mongoose.Schema.ObjectId,
        ref:"cartProduct"

    },
   
    status:{
        type:String,
        enum: ["Active", "Inactive","Suspended"],
        default: "Active",

    },
    
    
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default: "USER"
    }
},{timestamps:true})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel