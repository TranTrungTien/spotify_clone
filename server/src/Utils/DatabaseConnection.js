const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function (err) {
        if (err) {
          console.log("error to connect db");
        } else {
          console.log("connect to db successfully");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
