// ─────────────────────────────────────────────
//  controllers/subjectController.js
// ─────────────────────────────────────────────

const SubjectModel = require("../models/subjectModel");

const getAllSubjects = (req, res) => {
  const subjects = SubjectModel.getAll();
  res.json({ success: true, count: subjects.length, data: subjects });
};

const getSubjectById = (req, res) => {
  const subject = SubjectModel.getById(req.params.id);
  if (!subject) {
    return res.status(404).json({ success: false, message: "Subject not found" });
  }
  res.json({ success: true, data: subject });
};

const createSubject = (req, res) => {
  const { name, code, credits } = req.body;

  if (!name || !code || !credits) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, code, and credits",
    });
  }

  if (SubjectModel.getByCode(code)) {
    return res.status(409).json({
      success: false,
      message: `Subject code ${code} already exists`,
    });
  }

  const newSubject = SubjectModel.create({ name, code, credits });
  res.status(201).json({ success: true, data: newSubject });
};

const updateSubject = (req, res) => {
  const updated = SubjectModel.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: "Subject not found" });
  }
  res.json({ success: true, data: updated });
};

const deleteSubject = (req, res) => {
  const deleted = SubjectModel.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: "Subject not found" });
  }
  res.json({ success: true, message: "Subject deleted successfully" });
};

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};
