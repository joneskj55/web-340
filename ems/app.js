/*
==========================================
; Title: Employee Management Assignment
; Author: Kevin Jones
; Date: 26 January 2021 - Until complete
; Description: This exercise is UI Development
; for the Employee Records application
; ========================================
*/

// Import libraries
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const Employee = require("./models/employee");

// Connect to MongoDB
var mongoDB = "mongodb+srv://fakeurl";
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// Initialize app
const app = express();

// Employee model
const employee = new Employee({
  firstName: "Steve",
  lastName: "Stevenson",
});

// Use statements
app.use(helmet.xssFilter());

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
    message: "XSS Prevention Example",
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
