/*
==========================================
; Title: Exercise 3.3 - Advanced Routing
; Author: Kevin Jones
; Date: 13 January 2021
; Description: This exercise shows the
; routing features of Express
; ========================================
*/

// Requires variables
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Create/ initialize Express application
const app = express();

// Tell Express where the views are
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Tell Morgan the logging format that we want
app.use(logger("short"));

// Handle response
app.get("/:employeeId", function (request, response) {
  let employeeId = parseInt(request.params.employeeId, 10);
  response.render("index", {
    employeeId: employeeId
  });
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
