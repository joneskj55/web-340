/*
============================================
; Title:  Employee Model
; Author: Professor Krasso
; Date:   9 February 2021
; Modified by: Kevin Jones
; Description: This is our employee model.
;===========================================
*/

// Require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Define the model
let Employee = mongoose.model("Employee", employeeSchema);

// Export the model
module.exports = Employee;
