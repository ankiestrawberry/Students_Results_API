// ─────────────────────────────────────────────
//  server.js  –  Entry point of the application
// ─────────────────────────────────────────────

const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const resultRoutes  = require("./routes/resultRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const errorHandler  = require("./middleware/errorHandler");

const app  = express();
const PORT = 3000;

// Middleware: parses incoming JSON request bodies
app.use(express.json());

// ── Routes ──────────────────────────────────
app.use("/api/students", studentRoutes);
app.use("/api/results",  resultRoutes);
app.use("/api/subjects", subjectRoutes);

// Root health-check
app.get("/", (req, res) => {
  res.json({
    message: "🎓 Student Result Management API is running!",
    endpoints: {
      students: "/api/students",
      subjects: "/api/subjects",
      results:  "/api/results",
    },
  });
});

// Global error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
