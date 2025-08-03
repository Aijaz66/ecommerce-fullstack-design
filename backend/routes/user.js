const { Router}=require('express')
const {registerUserController, loginUserController, logoutUserController}=require('../controllers/user.js');
const authenticateJWT = require('../middlewares/authenticateJWT.js');

const userRouter=Router()

userRouter.post('/register',registerUserController)
userRouter.post('/login', loginUserController);  
userRouter.post('/logout', authenticateJWT, logoutUserController)



module.exports=userRouter