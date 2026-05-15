# 🎓 Student Result Management API

A beginner-friendly REST API built with **Node.js + Express** to manage student results.  
No database needed — data lives in memory while the server runs.

---

## 📁 Project Structure

```
student-result-api/
│
├── server.js                  ← App entry point, ties everything together
│
├── data/
│   └── store.js               ← In-memory "database" (arrays of students, subjects, results)
│
├── models/
│   ├── studentModel.js        ← Functions to read/write student data
│   ├── subjectModel.js        ← Functions to read/write subject data
│   └── resultModel.js        ← Functions to read/write result data + grade logic
│
├── controllers/
│   ├── studentController.js   ← Handles HTTP logic for student routes
│   ├── subjectController.js   ← Handles HTTP logic for subject routes
│   └── resultController.js    ← Handles HTTP logic for result routes
│
├── routes/
│   ├── studentRoutes.js       ← URL paths for /api/students
│   ├── subjectRoutes.js       ← URL paths for /api/subjects
│   └── resultRoutes.js        ← URL paths for /api/results
│
└── middleware/
    └── errorHandler.js        ← Catches unexpected errors globally
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
# Normal start
npm start

# Auto-restart on file changes (great for development)
npm run dev
```

### 3. Open your browser or Postman and visit:
```
http://localhost:3000
```

---

## 📡 API Endpoints

### Students

| Method | URL                     | Description            |
|--------|-------------------------|------------------------|
| GET    | /api/students           | Get all students       |
| GET    | /api/students/:id       | Get one student        |
| POST   | /api/students           | Add a new student      |
| PUT    | /api/students/:id       | Update a student       |
| DELETE | /api/students/:id       | Delete a student       |

**POST body example:**
```json
{
  "name": "Rahul Verma",
  "rollNo": "CSE2021004",
  "branch": "CSE",
  "year": 3
}
```

---

### Subjects

| Method | URL                     | Description            |
|--------|-------------------------|------------------------|
| GET    | /api/subjects           | Get all subjects       |
| GET    | /api/subjects/:id       | Get one subject        |
| POST   | /api/subjects           | Add a new subject      |
| PUT    | /api/subjects/:id       | Update a subject       |
| DELETE | /api/subjects/:id       | Delete a subject       |

**POST body example:**
```json
{
  "name": "Algorithms",
  "code": "CS305",
  "credits": 4
}
```

---

### Results

| Method | URL                                    | Description                    |
|--------|----------------------------------------|--------------------------------|
| GET    | /api/results                           | Get all results                |
| GET    | /api/results/:id                       | Get one result                 |
| GET    | /api/results/student/:studentId        | Get all results for a student  |
| GET    | /api/results/student/:studentId/report | Get full report card           |
| POST   | /api/results                           | Add a new result               |
| PUT    | /api/results/:id                       | Update a result                |
| DELETE | /api/results/:id                       | Delete a result                |

**POST body example:**
```json
{
  "studentId": "s1",
  "subjectId": "sub3",
  "marks": 78,
  "maxMarks": 100,
  "semester": 5
}
```

---

## 🏆 Grade Scale

| Grade | Percentage  |
|-------|-------------|
| O     | 90% – 100%  |
| A+    | 80% – 89%   |
| A     | 70% – 79%   |
| B+    | 60% – 69%   |
| B     | 50% – 59%   |
| C     | 40% – 49%   |
| F     | Below 40%   |

---

## 💡 Concepts You'll Learn

- **REST API** — standard way to build web APIs
- **Express Router** — organizing routes cleanly
- **MVC Pattern** — Model / View / Controller separation
- **Middleware** — functions that run between request and response
- **HTTP Status Codes** — 200 OK, 201 Created, 400 Bad Request, 404 Not Found, etc.
- **JSON** — the data format used in APIs

---

## 🔮 Next Steps (to level up!)

1. **Add a real database** — try MongoDB with Mongoose, or SQLite
2. **Add authentication** — use JWT tokens so only logged-in users can access data
3. **Input validation** — use the `joi` or `express-validator` package
4. **Environment variables** — store PORT and secrets in a `.env` file using `dotenv`
5. **Deploy it** — try Railway, Render, or Heroku (all free tiers available)
