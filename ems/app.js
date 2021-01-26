/*
==========================================
; Title: Assignment 5.4 - EMS
; Author: Kevin Jones
; Date: 26 January 2021
; Description: This exercise is Milestone
; 1 for Employee Records application
; ========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

const app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
  });
});

http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000!");
});
