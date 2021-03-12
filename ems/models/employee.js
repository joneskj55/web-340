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
  position: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
});

// Export the model; Define the model
module.exports = mongoose.model("Employee", employeeSchema);
