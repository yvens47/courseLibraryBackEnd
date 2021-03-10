const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
//const { sendMail } = require("../utils/email");

signup = async (req, res) => {
  try {
    //await User.syncIndexes();
    // create a new user and save to db
    const doc = await User.create(req.body);
    res.status(201).json({
      doc,
      success: true
    });
  } catch (e) {
    // unable to create and save user
    console.log(e);

    res.json({ error: e.message }).end();
  }
};

login = async (req, res) => {
  const { email, password } = req.body;
  // check if user is in db
  try {
    User.findOne(
      {
        email: email
      },
      function (err, u) {
        if (err || !u) {
          return res.status(401).json({
            error: "email does not exist"
          });
        }
        // check if user password matches one found from database
        u.checkPassword(password).then(function (result) {
          if (result) {
            const { _id, email, name, picture, phone } = u;

            // set token
            const token = jwt.sign(
              {
                id: _id
              },
              "secret",
              {
                expiresIn: 60 * 60
              }
            );

            // set cookie
            res.cookie("t", token, {
              expires: new Date(Date.now() + 900000),
              httpOnly: true
            });

            return res.json({
              token,
              user: {
                id: _id,
                email: email,
                name: name,
                picture: picture,
                phone: phone
              }
            });
          } else {
            return res.json({
              error: " Invalid email or password"
            });
          }
        });
      }
    );

    // res.json(req.body);
  } catch (error) {
    res.json({
      error
    });
  }
};

logout = async (req, res) => {
  // destroy cookie
  res.clearCookie("t");
  res.json({
    message: "signed out"
  });
};

module.exports = userController = {
  logout,
  login,
  signup
};
