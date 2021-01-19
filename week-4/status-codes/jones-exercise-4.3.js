/*
==========================================
; Title: Assign. 4.3 - HTTP Status Codes
; Author: Kevin Jones
; Date: 19 January 2021
; Description: This assignment displays
; how to create HTTP status codes in Node.js.
; ========================================
*/

// Import our libraries
const express = require("express");
const http = require("http");

// Initialize app
const app = express();

// Create GET request
app.get("/not-found", function (req, res) {
  res.status(404); // Set status code
  // JSON response
  res.json({
    error: "Resource not found, kid.",
  });
});

// Create GET request
app.get("/ok", function (req, res) {
  res.status(200); // Set status code
  // JSON response
  res.json({
    message: "Page loaded correctly, son.",
  });
});

// Create GET request
app.get("/server-error", function (req, res) {
  res.status(500); // Set status code
  // JSON response
  res.json({
    error: "Internal server error, money.",
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000!");
});
