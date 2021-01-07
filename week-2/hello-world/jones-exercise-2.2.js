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

const express = require("express");
const http = require("http");

const app = express();

app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080);
