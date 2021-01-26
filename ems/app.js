/*
==========================================
; Title: Assignment 5.4 - EMS
; Author: Kevin Jones
; Date: 26 January 2021
; Description: This exercise is Milestone
; 1 for Employee Records application
; ========================================
*/

// Import libraries
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Initialize app
const app = express();

// Tell Express where the views are
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Log with Morgan's short format
app.use(logger("short"));

// Handle the response to the index page
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000!");
});