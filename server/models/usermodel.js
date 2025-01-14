const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image:{
        type:String,
        required:true
    }
  });
  const Product = mongoose.model('product', productSchema);
  module.exports = Product ;