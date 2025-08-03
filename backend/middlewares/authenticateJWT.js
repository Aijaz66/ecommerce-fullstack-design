const jwt = require('jsonwebtoken');

const authenticateJWT = async(req, res, next) => {
  const token = req.cookies.auth_token || req?.headers?.authorization?.split(" ")[1]
  // Get the token from the cookie

  if (!token) {
    return res.status(401).json({
      message: "Access Denied, No token provided.",
      error: true,
      success: false,
    });
  }

  try {
    const decoded =await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(400).json({
      message: "Invalid or expired token.",
      error: true,
      success: false,
    });
  }
};

module.exports = authenticateJWT;
