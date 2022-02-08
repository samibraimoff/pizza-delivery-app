const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI;

const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB is connected!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;
