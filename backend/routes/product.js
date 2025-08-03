const { Router}=require('express')
const authenticateJWT = require('../middlewares/authenticateJWT.js');
const upload = require('../middlewares/multer.js');
const { uploadImages, createProduct,getAllProducts,getProductsByCategory,deleteProduct,getProduct,updateProduct } = require('../controllers/product.js');


const productRouter=Router()

productRouter.post("/uploadImages", authenticateJWT,upload.array('images'), uploadImages)
productRouter.post("/createProduct", authenticateJWT, createProduct)
productRouter.get("/getAllProducts", getAllProducts)
productRouter.get("/getProductsByCategory", getProductsByCategory)
productRouter.get("/:id",getProduct)
productRouter.delete("/:id",deleteProduct)
productRouter.put("/:id",updateProduct)

module.exports=productRouter