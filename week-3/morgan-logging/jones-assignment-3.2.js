/*
==========================================
; Title: Exercise 3.2 - Logging
; Author: Kevin Jones
; Date: 13 January 2021
; Description: This exercise using the npm
; package, morgan, in order to log events
; ========================================
*/

// Requires variables
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Create Express application
const app = express();

// Tell Express where the views are located
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Tell Morgan the logging format that we want
app.use(logger("short"));

// Handle our response
app.get("/", function (request, response) {
  response.render("index", {
    message: "Log it!",
  });
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
