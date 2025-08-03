
const categoryModel=require("../models/category.js")
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();






cloudinary.config({
  cloud_name: process.env.Cloudinary_Cloud_name,
  api_key: process.env.Cloudinary_API_KEY,
  api_secret: process.env.Cloudinary_API_SECRET
});

var imagesArr=[]

async function uploadImages(req,res) {
    try {
        imagesArr=[]
        
        const image = req.files;

        const options={
            use_filename:true,
            unique_name:false,
            overwrite:false

        }

        for(let i=0;i<image?.length;i++){
            const img=await cloudinary.uploader.upload(
                image[i].path,
                options,
                function(error,result){
                    imagesArr.push(result.secure_url)
                    fs.unlinkSync(image[i].path)
                }
            )

        }
        
        
        
        return res.status(200).json({
            images:imagesArr
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}

async function createCategory(req,res) {
    try {
        let Category= new categoryModel({
            name: req.body.name,
            images: imagesArr,
            parentId: req.body.parentId,
            parentCatName: req.body.parentCatName
        })

        if (!Category){
            return res.status(500).json({
            message: "Category not created",
            error: true,
            success: false
        })

        }
        Category= await Category.save()
        imagesArr=[]
        
        return res.status(200).json({
            message: "category created",
            error:false,
            success:true,
            Category:Category
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}

module.exports={createCategory, uploadImages}