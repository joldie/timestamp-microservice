require("dotenv").config();
var express = require("express");
var app = express();

// Enable CORS
var cors = require("cors");
app.use(cors());

// Default landing page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "Hello World!" });
});

// Listen for requests
var listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});
