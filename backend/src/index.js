const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.get("/hello-world", (req, res) => {
  res.send("hello-world");
});
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log("err" + err);
  });
app.listen(process.env.PORT, () => {
  console.log("backend server started" + process.env.PORT);
});
