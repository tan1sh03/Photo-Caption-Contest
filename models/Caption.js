const mongoose = require('mongoose');

// Define a schema for the Caption model
const captionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Caption model
const Caption = mongoose.model('Caption', captionSchema);
module.exports = Caption;
