const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/Users');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email address').isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users/me
// @desc    Get user profile by user id
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findOne({
      user: req.user.id
    }).populate('user', ['image', 'time_span']);

    if (!user) {
      return res
        .status(400)
        .json({ msg: 'There is no profile for this user.' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
