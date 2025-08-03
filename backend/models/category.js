const mongoose = require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        enum: ["Electronics", "Furniture", "Clothing", "Home & Kitchen", "Beauty", "Sports", "Toys", "Books"],
        trim:true,
    },
    images:[
        {
            type:String,
        }
    ],
    parentCatName:{
        type:String,
    },
    parentCatId:{
        type:mongoose.Schema.ObjectId,
        ref:"category",
        default:null
    },

},{timestamps:true})

const categoryModel= mongoose.model("category",categorySchema)
 module.exports=categoryModel