// const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define UserSchema
const CourseSchema = new mongoose.Schema(
  {
    name: String,
    sections: [],
    author: String
  },
  { timestamps: true }
);

// model
module.exports = mongoose.model("Course", CourseSchema);
