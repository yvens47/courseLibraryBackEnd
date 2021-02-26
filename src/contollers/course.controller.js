const User = require("../models/user.model");
const Course = require("../models/course.model");
//const jwt = require("jsonwebtoken");
//const nodemailer = require("nodemailer");
//const { sendMail } = require("../utils/email");
//const Crud = require("../utils/crud");
courses = (req, res) => {
  res.json({ message: "course route" });
};

module.exports = Course = {
  courses
};
