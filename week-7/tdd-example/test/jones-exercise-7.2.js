/*
============================================
; Title:  Exercise 7.2 - TDD in Action
; Author: Professor Krasso
; Date:   9 February 2021
; Modified by: Kevin Jones
; Description: Demonstrate how to write a test.
;===========================================
*/

// Include the assert module
const assert = require("assert");

// Test function
describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
