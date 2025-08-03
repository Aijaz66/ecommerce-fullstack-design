const cartProductModel = require('../models/cartProduct');
const userModel = require('../models/user');
const productModel = require('../models/product');

async function addToCart(req, res) {
  try {
    const { productId,} = req.body;
    const userId = req.user.id; // Get the userId from the authenticated user

    if (!productId || !userId) {
      return res.status(400).json({
        message: "Please provide productId, and userId",
        success: false,
        error: true
      });
    }
    

    // Check if the product exists in the products collection
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        error: true
      });
    }

    // Check if the product is already in the user's cart
    let cartProduct = await cartProductModel.findOne({ userId, productId });

    if (cartProduct) {
      // If product exists in cart, update the quantity
      

      return res.json({
        message: "item already in cart",
        success: true,
        cartProduct
      });
    } else {
      // If the product is not in the cart, create a new cart entry
      cartProduct = new cartProductModel({
        productId,
        quantity,
        userId
      });

      await cartProduct.save(); // Save the new cart product

      // Add the new cart product reference to the user's cart
      await userModel.updateOne(
        { _id: userId },
        { $push: { cart: cartProduct._id } }
      );

      return res.status(201).json({
        message: "Product added to cart successfully",
        success: true,
        cartProduct
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error adding product to cart",
      success: false,
      error: true
    });
  }
}
 async function getCart(req,res) {
    try {

        const userId=req.user.id

        const cartItem= await cartProductModel.find({userId:userId}).populate('productId')

        return res.status(200).json({
            data: cartItem,
            error:false,
            success:true

        })
        
    } catch (error) {
        return res.status(500).json({
      message: error.message || "Error getting",
      success: false,
      error: true
    });
    }
    
 }

 async function updateCartItem(req,res) {
    try {
        const userId=req.user.id
        const {_id,quantity}=req.body
        
        if(!_id ||!quantity){
            return res.status(400).json({
                message:"please provide id and quantity",
                succes:false,
                error:true,
            })
        }

        const updateCart= await cartProductModel.updateOne({_id:_id,userId:userId},{quantity:quantity})
        return res.status(200).json({
            message:"cart updated",
            success:true,
            error:false,
            data:updateCart

        })
    } catch (error) {
        return res.status(500).json({
      message: error.message || "Error getting",
      success: false,
      error: true
    });
    }
    
 }

 async function deleteCartItem(req,res) {
    try {
        const userId=req.user.id
        const {_id}=req.body

        

        if(!_id){
            return res.status(400).json({
                message:"please prove _id",
                success:false,
                error:true
            })
        }

        const deleteCart= await cartProductModel.deleteOne({_id:_id,userId:userId})

        if (!deleteCart){
            return res.status(400).json({
                message:"cart not found",
                succes:false,
                error:true,
            })
        }

        return res.status(200).json({
            message:"Cart item deleted",
            success:true,
            error:false
        })

    
    } catch (error) {
        return res.status(500).json({
      message: error.message || "Error getting",
      success: false,
      error: true
    });
    }
    
 }

module.exports = { addToCart,getCart,updateCartItem,deleteCartItem };
