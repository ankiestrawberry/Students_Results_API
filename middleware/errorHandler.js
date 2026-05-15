// ─────────────────────────────────────────────
//  middleware/errorHandler.js
//
//  Middleware = a function that runs between
//  the request and the response.
//
//  This one catches any unexpected server errors
//  and sends a clean JSON response instead of
//  crashing the app.
// ─────────────────────────────────────────────

const errorHandler = (err, req, res, next) => {
  console.error("Unexpected error:", err.message);

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
    error: err.message,
  });
};

module.exports = errorHandler;
