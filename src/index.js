const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 8080;

// routes
const courseRoute = require("./routes/course.route");
// connection to DB
mongoose.connect(
  "mongodb+srv://jyvenspierre:yvenstij43gt@cluster0.sjcbu.mongodb.net/A&P?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("we are connected!");
});

app.use(cors());
app.use(morgan("combined"));
app.use("/courses", courseRoute);

app.get("/", (req, res) => {
  res.json({ message: "Main Page" });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
