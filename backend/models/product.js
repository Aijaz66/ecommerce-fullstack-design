const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide product name"],
  },

  description: {
    type: String,
    required: [true, "Provide product description"],
  },

  price: {
    type: Number,
    required: [true, "Provide product price"],
  },

  category: {
    type: String,
    enum: ["electronics", "furniture", "clothing", "home & kitchen", "beauty", "sports", "toys", "books"],
    required:true
  },

  images: [
    {
      type:String,
      required:true
      
    }
  ],

  stock: {
    type: Number,
    required: [true, "Provide product stock quantity"],
    default: 0,
  },

}, { timestamps: true });

// Model
const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
