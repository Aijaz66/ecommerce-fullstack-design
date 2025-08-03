const userModel=require('../models/user.js')
const jwt=require('jsonwebtoken')

async function registerUserController(req,res) {

    try{
        let user;
        const {name, email, password}=req.body
        if (!name || !email || !password){
            return res.status(400).json({
                message: "Please provide complete details",
                error: true,
                success: false,
            }) }

         user= await userModel.findOne({email:email})
        if (user){
            return res.json({
                message: "Email already registered",
                error: true,
                succes: false
            })
        }

         user= new userModel({
            email: email,
            password: password,
            name: name,
        })

        const save = await user.save()

        const token= jwt.sign(
            
           {email:user.email, id: user._id},
           process.env.JWT_SECRET_KEY
        )
        
        

        return res.status(200).json({
            success: true,
            error:false,
            message:"user registered successfully",
            token:token,
            data:save
        })

    } catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
}



async function loginUserController(req, res) {
  try {
    const { email, password } = req.body; // Get email and password from request body

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide both email and password.",
        error: true,
        success: false,
      });
    }

    // Check if user exists in the database
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        error: true,
        success: false,
      });
    }

    // Compare plain-text password
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid credentials.",
        error: true,
        success: false,
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5h" } 
    );

    res.cookie('auth_token', token, {
    httpOnly: true,  // Prevent client-side JS from accessing the cookie
    secure: process.env.NODE_ENV === 'production',  // Ensure secure cookies are used only in production (HTTPS)
    maxAge: 604800000,  // Cookie will expire in 7 days (604800000 milliseconds)
});

    // Send success response with token
    return res.status(200).json({
      success: true,
      error: false,
      message: "Login successful.",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


const logoutUserController = (req, res) => {
  try {
    // Clear the auth_token cookie
    res.clearCookie('auth_token', { 
      httpOnly: true,  // Prevent client-side JS from accessing the cookie
      secure: process.env.NODE_ENV === 'production',  // Secure cookies in production (HTTPS)
      maxAge: 0,  // Expire immediately
    });

    // Send a response indicating successful logout
    return res.status(200).json({
      success: true,
      message: 'User logged out successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while logging out',
      error: error.message,
    });
  }
};


module.exports={registerUserController,
    loginUserController,
    logoutUserController
    
}