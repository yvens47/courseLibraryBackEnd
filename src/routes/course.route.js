var express = require("express");
var router = express.Router();
// controllers
const CourseController = require("../controllers/course.controller");
const Course = require("../models/course.model");

// define the home page route
router.get("/", CourseController.courses);
module.exports = router;
