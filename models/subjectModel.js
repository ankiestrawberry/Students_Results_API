// ─────────────────────────────────────────────
//  models/subjectModel.js
// ─────────────────────────────────────────────

const { subjects } = require("../data/store");
const { v4: uuidv4 } = require("uuid");

const SubjectModel = {
  getAll() {
    return subjects;
  },

  getById(id) {
    return subjects.find((s) => s.id === id) || null;
  },

  getByCode(code) {
    return subjects.find((s) => s.code === code) || null;
  },

  create({ name, code, credits }) {
    const newSubject = { id: uuidv4(), name, code, credits: Number(credits) };
    subjects.push(newSubject);
    return newSubject;
  },

  update(id, updates) {
    const index = subjects.findIndex((s) => s.id === id);
    if (index === -1) return null;
    subjects[index] = { ...subjects[index], ...updates };
    return subjects[index];
  },

  delete(id) {
    const index = subjects.findIndex((s) => s.id === id);
    if (index === -1) return false;
    subjects.splice(index, 1);
    return true;
  },
};

module.exports = SubjectModel;
