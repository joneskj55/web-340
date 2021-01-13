/*
==========================================
; Title: Assignment 2.4 - EJS Views
; Author: Kevin Jones
; Date: 7 January 2021
; Description: This assignment creates a Node
; server and returns the index page.
; ========================================
*/

const http = require("http"); // Require http
const express = require("express"); // Require Express
const path = require("path"); // Require path

// Create/ initialize the Express app.
const app = express();

// Tell Express where the views are located.
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS view engine.
app.set("view engine", "ejs");

// Get the response and render it in the browser.
app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Kevin",
    lastName: "Jones",
    address: "123 Nunya Bizness Dr.",
  });
});

// Create server and listen on port 8080.
http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port 8080.");
});
