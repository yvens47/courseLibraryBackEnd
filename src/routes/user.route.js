var express = require("express");
var router = express.Router();
// controllers
const UserController = require("../controllers/user.controller");

// define the home page route
router.post("/login", UserController.login);
//router.get("/:id", UserController.read);
router.post("/register", UserController.signup);
router.post("/logout", UserController.logout);

module.exports = router;
