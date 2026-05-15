// ─────────────────────────────────────────────
//  models/studentModel.js
//
//  "Model" = functions that talk to the data
//  layer. If you switch to a real DB later,
//  you only change this file — not the routes!
// ─────────────────────────────────────────────

const { students } = require("../data/store");
const { v4: uuidv4 } = require("uuid");

const StudentModel = {
  // Return all students
  getAll() {
    return students;
  },

  // Find one student by their id
  getById(id) {
    return students.find((s) => s.id === id) || null;
  },

  // Find by roll number (must be unique)
  getByRollNo(rollNo) {
    return students.find((s) => s.rollNo === rollNo) || null;
  },

  // Add a new student
  create({ name, rollNo, branch, year }) {
    const newStudent = {
      id:     uuidv4(),
      name,
      rollNo,
      branch,
      year: Number(year),
    };
    students.push(newStudent);
    return newStudent;
  },

  // Update fields of an existing student
  update(id, updates) {
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) return null;
    students[index] = { ...students[index], ...updates };
    return students[index];
  },

  // Remove a student
  delete(id) {
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) return false;
    students.splice(index, 1);
    return true;
  },
};

module.exports = StudentModel;
