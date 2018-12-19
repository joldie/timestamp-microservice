"use strict";

require("dotenv").config();

// Express.js server
const express = require("express");
const app = express();

// Package for handling dates reliably
const moment = require("moment");

// Enable CORS
const cors = require("cors");
app.use(cors());

// Default landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint
app.get(
  "/api/timestamp/:date_string?",
  (req, res, next) => {
    if (typeof req.params.date_string === "undefined") {
      // If no input supplied, return current time
      req.unix = moment().unix();
      req.utc = new Date().toUTCString();
    } else {
      // Else, try to parse input into valid Date object
      if (moment(req.params.date_string).isValid()) {
        req.unix = moment(req.params.date_string).unix();
        req.utc = new Date(req.params.date_string).toUTCString();
      } else {
        req.unix = 0;
        req.utc = 0;
      }
    }
    next();
  },
  (req, res) => {
    res.json({ unix: req.unix, utc: req.utc });
  }
);

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
  console.log("Listening on port " + listener.address().port);
});
