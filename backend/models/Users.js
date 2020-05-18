const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  routine: {
    time: String,
    string: String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
