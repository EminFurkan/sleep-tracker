const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
