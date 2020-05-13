// require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Database Connected.');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
