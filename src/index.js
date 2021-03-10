const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");
const morgan = require("morgan");
var bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = 8080;

// routes
const courseRoute = require("./routes/course.route");

const userRoute = require("./routes/user.route");
// connection to DB
mongoose.connect(
  `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.sjcbu.mongodb.net/A&P?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("we are connected!");
});

//mongoose.connection.dropDatabase();

// Rebuild all indexes

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// parse application/json
app.use(bodyParser.json());
app.use("/courses", courseRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Main Page" });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
