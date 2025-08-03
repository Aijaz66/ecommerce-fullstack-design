const { Router } = require('express');
const authenticateJWT = require('../middlewares/authenticateJWT.js');
const { addToCart, getCart,updateCartItem,deleteCartItem } = require('../controllers/cart.js');

const cartRouter = Router();

// POST route for adding product to cart
cartRouter.post("/addToCart", authenticateJWT, addToCart);
cartRouter.get("/getCart", authenticateJWT, getCart);
cartRouter.put("/updateCartItem", authenticateJWT, updateCartItem);
cartRouter.delete("/deleteCartItem", authenticateJWT, deleteCartItem);
module.exports = cartRouter;
