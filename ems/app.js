/*
==========================================
; Title: Assignment 5.4 - EMS Milestone 1
; Author: Kevin Jones
; Date: 26 January 2021
; Description: This exercise is UI Development
; for the Employee Records application
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

// Handle the response to the view page
app.get("/view", function (request, response) {
  response.render("view", {
    title: "Manage",
  });
});

// Handle the response to the new page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "Add Employee",
  });
});

// Handle the response to the list page
app.get("/list", function (request, response) {
  response.render("list", {
    title: "View Employees",
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000!");
});
