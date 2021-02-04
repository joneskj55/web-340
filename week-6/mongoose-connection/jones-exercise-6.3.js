/*
==========================================
; Title: Exercise 6.3 - Mongoose
; Author: Kevin Jones
; Date: 3 February 2021
; Description: This exercise connects
; to MongoDB using Mongoose
; ========================================
*/

// Import dependencies
const express = require("express");
const http = require("http");
const logger = require("morgan");
const mongoose = require("mongoose");

// Connect to MongoDB ** This uri is not real for security purposes **
var mongoDB =
  "mongodb+srv://someusername:apasswordhere@buwebdev-cluster-1.a6jtu.mongodb.net/test";
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
app.use(logger("short"));

// Create server and listen on port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application connected to port 3000!");
});

/// NOTE FOR PROFESSOR: The console log that verifies connection to the DB takes a little while to show. Also, if actual URI is needed for grading please let me know. ///
