/*
==========================================
; Title: Assign. 5.2 - EJS Templates
; Author: Kevin Jones
; Date: 26 January 2021
; Description: This assignment displays
; how to use EJS Templates & if/else in EJS.
; ========================================
*/

// Import libraries
const express = require("express");
const http = require("http");
const path = require("path");

// Initialize app
const app = express();

// Tell Express where the views are
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Declare an array of names
var names = ["RZA", "ODB", "Raekwon", "Ghost"];

// Handle the response to the index page
app.get("/", function (request, response) {
  response.render("index", {
    names: names,
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000!");
});
