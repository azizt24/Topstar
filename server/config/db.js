const mongoose = require("mongoose");

const connectDB = async () => {
  const connectPromise = await mongoose.connect(process.env.DB_URL, {});
};

module.exports = connectDB;
