/*
==========================================
; Title: Assignment 1.5 - Hello World
; Author: Professor Krasso
; Date: 4 January 2021
; Modified by: Kevin Jones
; Description: This exercise creates a Node.js
; server
; ========================================
*/

const http = require("http"); // Require http

function processRequest(req, res) {
  const body = "Happy New Year!!!";
  const contentLength = body.length;

  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain",
  });

  res.end(body);
}

const s = http.createServer(processRequest);
s.listen(3000);
