const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  videoUrl: { type: String, default: "" }
});

module.exports = mongoose.model("Course", CourseSchema);
