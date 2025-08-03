const { Router}=require('express')
const authenticateJWT = require('../middlewares/authenticateJWT.js');
const upload = require('../middlewares/multer.js');
const {createCategory,uploadImages} = require('../controllers/category.js');


const categoryRouter=Router()

categoryRouter.post("/uploadImages", authenticateJWT,upload.array('images'), uploadImages)

categoryRouter.post("/createCategory", authenticateJWT, createCategory)
module.exports=categoryRouter