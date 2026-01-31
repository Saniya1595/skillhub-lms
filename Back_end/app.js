const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const courses = require("./routes/courses");
const auth = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courses);
app.use("/api/auth", auth);

mongoose.connect("mongodb://127.0.0.1:27017/lms")
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
