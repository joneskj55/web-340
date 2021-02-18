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
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const Employee = require("./models/employee");

// Setup csrf protection
const csrfProtection = csrf({ cookie: true });

// Connect to MongoDB
var mongoDB = "mongodb://localhost:3333653/testerson";
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

// Use statements
app.use(helmet.xssFilter());
app.use(logger("short"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  const token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

// Tell Express where the views are
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Set the port
app.set("port", process.env.PORT || 3000);

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
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    if (employees.length > 0)
      response.render("list", {
        title: "Employee List",
        employees: employees,
      });
  });
});

// Post request for form
app.post("/process", function (request, response) {
  //console.log(request.body.txtName);
  if (!request.body.firstName && !request.body.lastName) {
    response.status(400).send("Entries must have a name");
    return;
  }

  // get the request's form data
  const employeeName = request.body.firstName + request.body.lastName;
  console.log(employeeName);

  // create an employee model
  const employee = new Employee({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + " saved successfully!");
      response.redirect("/");
    }
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application started on port 3000!");
});
