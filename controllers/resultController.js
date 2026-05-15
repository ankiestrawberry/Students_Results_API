// ─────────────────────────────────────────────
//  controllers/resultController.js
// ─────────────────────────────────────────────

const ResultModel  = require("../models/resultModel");
const StudentModel = require("../models/studentModel");
const SubjectModel = require("../models/subjectModel");

// GET /api/results
const getAllResults = (req, res) => {
  const results = ResultModel.getAll();
  res.json({ success: true, count: results.length, data: results });
};

// GET /api/results/:id
const getResultById = (req, res) => {
  const result = ResultModel.getById(req.params.id);
  if (!result) {
    return res.status(404).json({ success: false, message: "Result not found" });
  }
  res.json({ success: true, data: result });
};

// GET /api/results/student/:studentId  →  all results for one student
const getResultsByStudent = (req, res) => {
  const student = StudentModel.getById(req.params.studentId);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  const results = ResultModel.getByStudentId(req.params.studentId);
  res.json({ success: true, student: student.name, count: results.length, data: results });
};

// GET /api/results/student/:studentId/report  →  full report card
const getReportCard = (req, res) => {
  const student = StudentModel.getById(req.params.studentId);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  const report = ResultModel.getReportCard(req.params.studentId);
  if (!report) {
    return res.status(404).json({
      success: false,
      message: "No results found for this student",
    });
  }

  res.json({ success: true, student, ...report });
};

// POST /api/results
const createResult = (req, res) => {
  const { studentId, subjectId, marks, maxMarks = 100, semester } = req.body;

  if (!studentId || !subjectId || marks === undefined || !semester) {
    return res.status(400).json({
      success: false,
      message: "Please provide studentId, subjectId, marks, and semester",
    });
  }

  // Make sure student and subject actually exist
  if (!StudentModel.getById(studentId)) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  if (!SubjectModel.getById(subjectId)) {
    return res.status(404).json({ success: false, message: "Subject not found" });
  }

  if (marks < 0 || marks > maxMarks) {
    return res.status(400).json({
      success: false,
      message: `Marks must be between 0 and ${maxMarks}`,
    });
  }

  const newResult = ResultModel.create({ studentId, subjectId, marks, maxMarks, semester });
  res.status(201).json({ success: true, data: newResult });
};

// PUT /api/results/:id
const updateResult = (req, res) => {
  const updated = ResultModel.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: "Result not found" });
  }
  res.json({ success: true, data: updated });
};

// DELETE /api/results/:id
const deleteResult = (req, res) => {
  const deleted = ResultModel.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: "Result not found" });
  }
  res.json({ success: true, message: "Result deleted successfully" });
};

module.exports = {
  getAllResults,
  getResultById,
  getResultsByStudent,
  getReportCard,
  createResult,
  updateResult,
  deleteResult,
};
