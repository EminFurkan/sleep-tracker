const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/event', require('./routes/api/event'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('./frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
