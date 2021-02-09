/*
============================================
; Title:  Exercise 7.3 - Mocha and Chai
; Author: Professor Krasso
; Date:   9 February 2021
; Modified by: Kevin Jones
; Description: Demonstrate how to write a Chai test.
;===========================================
*/

// Import the file with the function
const fruits = require("../jones-fruits");

// Import Chai and the assert module
const chai = require("chai");
const assert = require("assert");

// Test function
describe("fruits", function () {
  it("should return an array of fruits", function () {
    let f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
