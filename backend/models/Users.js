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
  time_span: {
    start: Number,
    end: Number,
    string: String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
