const productModel=require("../models/product.js")
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const dotenv = require('dotenv');
const { error } = require("console");
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

 async function createProduct(req,res) {
    try {
        const category = req.body.category.toLowerCase();
        let Product= new productModel({
            name: req.body.name,
            description:req.body.description,
            images: imagesArr,
            price:req.body.price,
            category:category,
            stock:req.body.stock
        })

        if (!Product){
            return res.status(500).json({
            message: "Product not created",
            error: true,
            success: false
        })
        }

        Product= await Product.save()
        imagesArr=[]

         return res.status(200).json({
            message: "Product created",
            error:false,
            success:true,
            product:Product
        })




        
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }

    
}


async function getAllProducts(req,res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 100;
        const totalPosts = await productModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages) {
    return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
    });

        

}

        const products = await productModel.find()
    .populate("category")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();




        

        if (!products){
            return res.status(500).json({
                error: true,
                success:false
            })
        }

        return res.status(200).json({
            error: false,
            success:true,
            products:products,
            totalPages: totalPages,
            page:page
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}

async function getProductsByCategory(req,res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 100;
        const totalPosts = await productModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages) {
    return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
    });

        

}

        const products = await productModel.find({category: { $regex: new RegExp(req.query.category, 'i') }})
    .populate("category")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();




        

        if (!products){
            return res.status(500).json({
                error: true,
                success:false
            })
        }

        return res.status(200).json({
            error: false,
            success:true,
            products:products,
            totalPages: totalPages,
            page:page
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}


async function getProduct(req,res) {
    try {
        const Product= await productModel.findById(req.params.id).populate('category')

        if (!Product){
            return res.status(404).json({
                message: "product not found",
                error:true,
                success: false
            })
        }
        return res.status(200).json({
            message:"product found",
            product: Product,
            erro:false,
            success:true
        })

    } catch (error) {
         return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}

async function deleteProduct(req, res) {
    try {
        
        

        // Check if the product exists
        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }

        // Delete the product
        await productModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error deleting product",
            error: true,
            success: false,
        });
    }
}
async function updateProduct(req,res) {
    try {
        const category=req.body.category.toLowerCase()
        const Product= await productModel.findByIdAndUpdate(req.params.id,
            {
            name: req.body.name,
            description:req.body.description,
            images: req.body.images,
            price:req.body.price,
            category:category,
            stock:req.body.stock

            },{new:true}

        )
     if (!Product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error updating product",
            error: true,
            success: false,
        });
        
    }
    
}

module.exports={
    createProduct,
    uploadImages,
    getAllProducts,
    getProductsByCategory,
    getProduct,
    deleteProduct,
    updateProduct
}