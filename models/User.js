const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Pre-save middleware to hash the password before saving a user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password during login
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
