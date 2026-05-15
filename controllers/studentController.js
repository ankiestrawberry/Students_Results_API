// ─────────────────────────────────────────────
//  controllers/studentController.js
//
//  Controllers handle the logic of each route:
//  - Read request data
//  - Call the model
//  - Send back a response
// ─────────────────────────────────────────────

const StudentModel = require("../models/studentModel");

// GET /api/students
const getAllStudents = (req, res) => {
  const students = StudentModel.getAll();
  res.json({ success: true, count: students.length, data: students });
};

// GET /api/students/:id
const getStudentById = (req, res) => {
  const student = StudentModel.getById(req.params.id);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.json({ success: true, data: student });
};

// POST /api/students
const createStudent = (req, res) => {
  const { name, rollNo, branch, year } = req.body;

  // Basic validation
  if (!name || !rollNo || !branch || !year) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, rollNo, branch, and year",
    });
  }

  // Check duplicate roll number
  if (StudentModel.getByRollNo(rollNo)) {
    return res.status(409).json({
      success: false,
      message: `Roll number ${rollNo} already exists`,
    });
  }

  const newStudent = StudentModel.create({ name, rollNo, branch, year });
  res.status(201).json({ success: true, data: newStudent });
};

// PUT /api/students/:id
const updateStudent = (req, res) => {
  const updated = StudentModel.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.json({ success: true, data: updated });
};

// DELETE /api/students/:id
const deleteStudent = (req, res) => {
  const deleted = StudentModel.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.json({ success: true, message: "Student deleted successfully" });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
