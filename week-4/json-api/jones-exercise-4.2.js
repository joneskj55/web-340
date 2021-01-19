/*
==========================================
; Title: Assign. 4.2 - JSON APIs
; Author: Kevin Jones
; Date: 19 January 2021
; Description: This assignment displays
; how to return JSON from a Node.js server.
; ========================================
*/

// Import our libraries
const express = require("express");
const http = require("http");

// Initialize app
const app = express();

// Create our get request
app.get("/player/:number", function (req, res) {
  // Grab number that is passed to url
  let number = parseInt(req.params.number, 10);

  // Our JSON response
  res.json({
    firstName: "Deion",
    lastName: "Sanders",
    number: number,
    position: "cornerback",
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000");
});
