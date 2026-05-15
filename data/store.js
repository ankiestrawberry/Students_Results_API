// ─────────────────────────────────────────────
//  data/store.js  –  In-memory "database"
//
//  In a real project you'd replace this with
//  a database like MongoDB or PostgreSQL.
//  For learning, plain arrays work perfectly!
// ─────────────────────────────────────────────

const students = [
  { id: "s1", name: "Priya Sharma",  rollNo: "CSE2021001", branch: "CSE", year: 3 },
  { id: "s2", name: "Arjun Mehta",   rollNo: "CSE2021002", branch: "CSE", year: 3 },
  { id: "s3", name: "Sneha Patil",   rollNo: "CSE2021003", branch: "CSE", year: 3 },
];

const subjects = [
  { id: "sub1", name: "Data Structures",       code: "CS301", credits: 4 },
  { id: "sub2", name: "Operating Systems",     code: "CS302", credits: 4 },
  { id: "sub3", name: "Database Management",   code: "CS303", credits: 3 },
  { id: "sub4", name: "Computer Networks",     code: "CS304", credits: 3 },
];

// Each result links a student → subject → marks
const results = [
  { id: "r1", studentId: "s1", subjectId: "sub1", marks: 88, maxMarks: 100, semester: 5 },
  { id: "r2", studentId: "s1", subjectId: "sub2", marks: 74, maxMarks: 100, semester: 5 },
  { id: "r3", studentId: "s2", subjectId: "sub1", marks: 91, maxMarks: 100, semester: 5 },
  { id: "r4", studentId: "s2", subjectId: "sub2", marks: 65, maxMarks: 100, semester: 5 },
  { id: "r5", studentId: "s3", subjectId: "sub3", marks: 55, maxMarks: 100, semester: 5 },
];

module.exports = { students, subjects, results };
