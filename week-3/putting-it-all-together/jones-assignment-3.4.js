/*
==========================================
; Title: Assign. 3.4 - Putting it all together
; Author: Kevin Jones
; Date: 13 January 2021
; Description: This assignment displays the
; how to configure a working Express app.
; ========================================
*/

// Requires variables
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Create/ initialize Express app
const app = express();

// Tell Express where the views are located
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Tell Morgan how to format the log
app.use(logger("short"));

// Handle response to home page
app.get("/", function (request, response) {
  response.render("index", {
    message: "home page"
  });
});

// Handle response to about page
app.get("/about", function (request, response) {
  response.render("about", {
    message: "about page",
  });
});

// Handle response to contact page
app.get("/contact", function (request, response) {
  response.render("contact", {
    message: "contact page",
  });
});

// Handle response to products page
app.get("/products", function (request, response) {
  response.render("products", {
    message: "products page",
  });
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
