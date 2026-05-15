// ─────────────────────────────────────────────
//  models/resultModel.js
// ─────────────────────────────────────────────

const { results } = require("../data/store");
const { v4: uuidv4 } = require("uuid");

// Helper: calculate grade from percentage
function calculateGrade(marks, maxMarks) {
  const percent = (marks / maxMarks) * 100;
  if (percent >= 90) return "O";   // Outstanding
  if (percent >= 80) return "A+";
  if (percent >= 70) return "A";
  if (percent >= 60) return "B+";
  if (percent >= 50) return "B";
  if (percent >= 40) return "C";
  return "F";                       // Fail
}

const ResultModel = {
  getAll() {
    return results;
  },

  getById(id) {
    return results.find((r) => r.id === id) || null;
  },

  // Get all results for a specific student
  getByStudentId(studentId) {
    return results.filter((r) => r.studentId === studentId);
  },

  // Get all results for a specific subject
  getBySubjectId(subjectId) {
    return results.filter((r) => r.subjectId === subjectId);
  },

  create({ studentId, subjectId, marks, maxMarks, semester }) {
    const newResult = {
      id: uuidv4(),
      studentId,
      subjectId,
      marks:    Number(marks),
      maxMarks: Number(maxMarks) || 100,
      semester: Number(semester),
      grade:    calculateGrade(marks, maxMarks || 100),
    };
    results.push(newResult);
    return newResult;
  },

  update(id, updates) {
    const index = results.findIndex((r) => r.id === id);
    if (index === -1) return null;
    results[index] = { ...results[index], ...updates };
    // Recalculate grade if marks were updated
    results[index].grade = calculateGrade(
      results[index].marks,
      results[index].maxMarks
    );
    return results[index];
  },

  delete(id) {
    const index = results.findIndex((r) => r.id === id);
    if (index === -1) return false;
    results.splice(index, 1);
    return true;
  },

  // Generate a full report card for a student
  getReportCard(studentId) {
    const studentResults = results.filter((r) => r.studentId === studentId);
    if (studentResults.length === 0) return null;

    const totalMarks    = studentResults.reduce((sum, r) => sum + r.marks, 0);
    const totalMaxMarks = studentResults.reduce((sum, r) => sum + r.maxMarks, 0);
    const percentage    = ((totalMarks / totalMaxMarks) * 100).toFixed(2);
    const overallGrade  = calculateGrade(totalMarks, totalMaxMarks);

    return {
      results: studentResults,
      summary: {
        totalSubjects: studentResults.length,
        totalMarks,
        totalMaxMarks,
        percentage: `${percentage}%`,
        overallGrade,
        status: overallGrade === "F" ? "FAIL" : "PASS",
      },
    };
  },
};

module.exports = ResultModel;
