const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  cover: {
    type: String,
  },
  url: {
    type: String,
  },
  author: {
    type: String,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  price: {
    type: Number,
  },
  stock:{
    type: Number,
  }
});

module.exports = mongoose.model("BookDetail", bookSchema);
