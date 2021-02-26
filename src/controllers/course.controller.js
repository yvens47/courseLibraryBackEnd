const User = require("../models/user.model");
const Course = require("../models/course.model");
//const jwt = require("jsonwebtoken");
//const nodemailer = require("nodemailer");
//const { sendMail } = require("../utils/email");
//const Crud = require("../utils/crud");

courses = async (req, res) => {
  try {
    const c = Course.find({}, (error, docs) => {
      res.json(docs);
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = CourseControllert = {
  courses
};
