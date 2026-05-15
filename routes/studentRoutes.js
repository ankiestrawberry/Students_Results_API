// ─────────────────────────────────────────────
//  routes/studentRoutes.js
//
//  Routes define WHAT URL maps to WHICH controller.
//  Think of it like a switchboard.
// ─────────────────────────────────────────────

const express = require("express");
const router  = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// GET    /api/students         → list all students
// POST   /api/students         → add a new student
router.route("/").get(getAllStudents).post(createStudent);

// GET    /api/students/:id     → get one student
// PUT    /api/students/:id     → update a student
// DELETE /api/students/:id     → remove a student
router.route("/:id").get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;
