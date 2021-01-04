/*
==========================================
; Title: Exercise 1.3 - Modules
; Author: Kevin Jones
; Date: 4 January 2021
; Description: This exercise parses a url
; using Node.js
; ========================================
*/

let url = require("url");

let parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
