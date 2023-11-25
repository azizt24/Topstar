const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
