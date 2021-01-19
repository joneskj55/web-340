/*
==========================================
; Title: Assign. 4.4 - cURL
; Author: Professor Krasso
; Date: 19 January 2021
; Modified by: Kevin Jones
; Description: This assignment demonstrates
; CRUD operations in a Node.js API.
; ========================================
*/

// Import our libraries
const express = require("express");
const http = require("http");

// Initialize app
const app = express();

// GET request
app.get("/", function (request, response) {
  response.send("GET request sent, friend!!!.");
});

// PUT request
app.put("/", function (request, response) {
  response.send("And you just executed a PUT, buddy!");
});

// POST request
app.post("/", function (request, response) {
  response.send("Nice POST request!");
});

// DELETE request
app.delete("/", function (request, response) {
  response.send("Wow, DELETE? Really?");
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
