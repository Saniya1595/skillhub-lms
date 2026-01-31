const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add course
router.post("/", async (req, res) => {
  const { title, price, videoUrl } = req.body;

  const course = new Course({
    title,
    price,
    videoUrl
  });

  await course.save();
  res.json(course);
});

module.exports = router;
