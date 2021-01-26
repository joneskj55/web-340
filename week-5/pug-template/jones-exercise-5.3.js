/*
==========================================
; Title: Exercise 5.3 - Pug Templates
; Author: Kevin Jones
; Date: 26 January 2021
; Description: This exercise displays
; how to use Pug Templates.
; ========================================
*/

// Import libraries
const express = require("express");
const http = require("http");
const pug = require("pug");
const path = require("path");

// Initialize app
const app = express();

// Tell Express where the views are
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use Pug
app.set("view engine", "pug");

// Handle the response to the index page
app.get("/", function (request, response) {
  response.render("index", {
    message: "Let's Pugging Gooooo!",
  });
});

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application running on port 3000!");
});
