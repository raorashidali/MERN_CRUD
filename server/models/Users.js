
const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures email is unique
  },
  fatherName:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  age: {
    type: Number,
    required: true
  }
});

// Create User model
const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;