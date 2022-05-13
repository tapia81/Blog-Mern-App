const mongoose = require("mongoose");
let MONGODB_URI =
  process.env.PROD_MONGODB || process.env.MONGODB_URI || "Your Address";

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection Error", err.message);
  });

const db = mongoose.connection;
module.exports = db;
