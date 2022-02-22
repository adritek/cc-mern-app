const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colour: String,
  price: {
    type: Number,
    required: true,
  },
  imageFilePath: {
    type: String,
    required: true,
  },
  screen: String,
  processor: String,
  ram: Number,
});

module.exports = mongoose.model('Posts', PostSchema);
