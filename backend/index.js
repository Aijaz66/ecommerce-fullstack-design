const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser=require('cookie-parser')
const userRouter=require("./routes/user.js");
const categoryRouter = require("./routes/category.js");
const productRouter = require("./routes/product.js");
const cartRouter = require("./routes/cart.js");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


// Middlewares

app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add allowed methods
  allowedHeaders: ['Content-Type', 'Authorization','Accept'], // Add allowed headers
  credentials: true,  // Allow credentials like cookies
}));

app.use(express.json());
app.use(cookieParser()); 

// Connect to DB
connectDB();

// Routes
app.get("/", (req,res)=>{
    res.json({message:"server started"})
});

app.use("/api/user",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
