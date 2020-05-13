const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, autherization denied.' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};
