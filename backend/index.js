const express = require('express');

const app = express();

// Connect database

// Init middleware

app.get('/', (req, res) => res.send('API running'));

// Define routes

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
