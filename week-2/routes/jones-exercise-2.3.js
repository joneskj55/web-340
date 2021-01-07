/*
==========================================
; Title: Exercise 2.3 - Routes
; Author: Kevin Jones
; Date: 7 January 2021
; Description: This exercise displays how
; Express routing works.
; ========================================
*/

const express = require("express");
const http = require("http");

const app = express();

app.get("/", function (request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function (request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function (request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(8080);
