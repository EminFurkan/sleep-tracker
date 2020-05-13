const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Event = require('../../models/Event');

// @route   POST api/event
// @desc    Validate you're awake by creating an event
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const newEvent = new Event({
      user: req.user.id,
      is_checked: true
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

// @route   GET api/event
// @desc    Get all events
// access   Private
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });

    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;