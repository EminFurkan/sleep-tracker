const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  is_checked: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Event = mongoose.model('event', EventSchema);
