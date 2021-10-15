const mongoose = require("mongoose");
const config = require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/furbook", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
