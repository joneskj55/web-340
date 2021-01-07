/*
==========================================
; Title: Exercise 2.2 - Hello World with
; Express
; Author: Kevin Jones
; Date: 7 January 2021
; Description: This exercise creates a
; server and listens on port 8080.
; ========================================
*/

const express = require("express"); // Require Express
const http = require("http"); // Require http

const app = express(); // Create/ initialize Express app

// Mount the specified middleware function(s) at the path which is being specified.
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

// Create server and listen on port 8080.
http.createServer(app).listen(8080);
