// ─────────────────────────────────────────────
//  routes/resultRoutes.js
// ─────────────────────────────────────────────

const express = require("express");
const router  = express.Router();
const {
  getAllResults,
  getResultById,
  getResultsByStudent,
  getReportCard,
  createResult,
  updateResult,
  deleteResult,
} = require("../controllers/resultController");

// Special routes first (before /:id to avoid conflicts)
router.get("/student/:studentId",        getResultsByStudent);
router.get("/student/:studentId/report", getReportCard);

// Standard CRUD
router.route("/").get(getAllResults).post(createResult);
router.route("/:id").get(getResultById).put(updateResult).delete(deleteResult);

module.exports = router;
