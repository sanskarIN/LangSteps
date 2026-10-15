window.LANGSTEPS_COURSE = {
  "slug": "sql",
  "title": "SQL Mastery",
  "summary": "15 PostgreSQL-oriented SQL lessons covering design, querying, transactions, security, and performance. Queries are shown for study, not executed in this static browser page.",
  "lessons": [
    {
      "id": "tables",
      "category": "Foundations",
      "title": "Tables and primary keys",
      "summary": "Design a table with consistent types and identifiers.",
      "explanation": "A primary key uniquely identifies a row. The examples use PostgreSQL-flavored SQL; consult your database's syntax for dialect differences.",
      "code": "CREATE TABLE students (\n  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  points INTEGER NOT NULL DEFAULT 0\n);",
      "challenge": "Add an email column with a UNIQUE constraint.",
      "level": "Beginner"
    },
    {
      "id": "insert",
      "category": "Foundations",
      "title": "INSERT and safe values",
      "summary": "Add rows with explicit column lists.",
      "explanation": "Listing columns makes statements resilient to schema additions. Application values should use bound parameters, not string concatenation.",
      "code": "INSERT INTO students (name, points)\nVALUES ('Mina', 15), ('Alex', 20);",
      "challenge": "Insert one more student and query the new row.",
      "level": "Beginner"
    },
    {
      "id": "select",
      "category": "Queries",
      "title": "SELECT, WHERE, ORDER BY",
      "summary": "Filter and sort rows.",
      "explanation": "SQL operates on sets of rows; WHERE filters before ORDER BY. LIMIT controls the number of returned records.",
      "code": "SELECT name, points\nFROM students\nWHERE points >= 10\nORDER BY points DESC\nLIMIT 5;",
      "challenge": "Sort alphabetically and change the points threshold.",
      "level": "Beginner"
    },
    {
      "id": "null",
      "category": "Queries",
      "title": "NULL and three-valued logic",
      "summary": "Understand unknown values and IS NULL.",
      "explanation": "NULL is not equal to any value, even another NULL. Use IS NULL and IS NOT NULL rather than = NULL.",
      "code": "SELECT id, name\nFROM students\nWHERE name IS NOT NULL;",
      "challenge": "Experiment with COALESCE(points, 0).",
      "level": "Beginner"
    },
    {
      "id": "update",
      "category": "Data changes",
      "title": "UPDATE and DELETE safely",
      "summary": "Modify records with explicit predicates.",
      "explanation": "Omitting WHERE can affect every row. Run a matching SELECT inside a transaction before a production UPDATE or DELETE.",
      "code": "UPDATE students\nSET points = points + 5\nWHERE id = 1;\nSELECT * FROM students WHERE id = 1;",
      "challenge": "Write a preview SELECT for a DELETE before executing it.",
      "level": "Intermediate"
    },
    {
      "id": "joins",
      "category": "Queries",
      "title": "INNER JOIN and LEFT JOIN",
      "summary": "Combine rows across related tables.",
      "explanation": "INNER JOIN keeps matching pairs; LEFT JOIN also keeps unmatched left-side rows. Join using keys instead of unbounded Cartesian products.",
      "code": "SELECT s.name, e.course_id\nFROM students AS s\nLEFT JOIN enrollments AS e ON e.student_id = s.id;",
      "challenge": "Explain what happens when a student has no enrollment.",
      "level": "Intermediate"
    },
    {
      "id": "group",
      "category": "Queries",
      "title": "GROUP BY and HAVING",
      "summary": "Summarize data with aggregate functions.",
      "explanation": "WHERE filters input rows; HAVING filters the resulting groups. COUNT(*) counts rows, including ones with NULL columns.",
      "code": "SELECT course_id, COUNT(*) AS students\nFROM enrollments\nGROUP BY course_id\nHAVING COUNT(*) >= 2;",
      "challenge": "Add an ORDER BY for the largest group first.",
      "level": "Intermediate"
    },
    {
      "id": "subquery",
      "category": "Queries",
      "title": "Subqueries and EXISTS",
      "summary": "Test related conditions without duplicating results.",
      "explanation": "EXISTS answers whether a matching row exists and avoids extra rows from one-to-many joins when only existence matters.",
      "code": "SELECT s.name\nFROM students AS s\nWHERE EXISTS (\n  SELECT 1 FROM enrollments AS e\n  WHERE e.student_id = s.id\n);",
      "challenge": "Change EXISTS to NOT EXISTS.",
      "level": "Intermediate"
    },
    {
      "id": "ctes",
      "category": "Queries",
      "title": "Common table expressions",
      "summary": "Split complex queries into named steps.",
      "explanation": "WITH gives intermediate query results names. It improves readability and enables recursion where supported.",
      "code": "WITH top_students AS (\n  SELECT name, points FROM students WHERE points >= 20\n)\nSELECT name FROM top_students ORDER BY name;",
      "challenge": "Add another CTE calculating a maximum score.",
      "level": "Intermediate"
    },
    {
      "id": "windows",
      "category": "Analytics",
      "title": "Window functions",
      "summary": "Rank rows while retaining detail.",
      "explanation": "Unlike GROUP BY, a window function can return a value for each original row. Ties affect RANK versus ROW_NUMBER.",
      "code": "SELECT name, points,\n  DENSE_RANK() OVER (ORDER BY points DESC) AS position\nFROM students;",
      "challenge": "Try ROW_NUMBER and compare how ties behave.",
      "level": "Advanced"
    },
    {
      "id": "transactions",
      "category": "Reliability",
      "title": "Transactions and rollback",
      "summary": "Apply multiple changes as one unit.",
      "explanation": "A transaction lets you commit consistent work together. ROLLBACK discards uncommitted changes when an error occurs.",
      "code": "BEGIN;\nUPDATE students SET points = points - 5 WHERE id = 1;\nUPDATE students SET points = points + 5 WHERE id = 2;\nCOMMIT;",
      "challenge": "Describe a condition where you should ROLLBACK.",
      "level": "Intermediate"
    },
    {
      "id": "indexes",
      "category": "Performance",
      "title": "Indexes and query plans",
      "summary": "Accelerate predicates with suitable indexes.",
      "explanation": "Indexes speed some reads but add write and storage cost. Use EXPLAIN to verify real plans instead of assuming every index helps.",
      "code": "CREATE INDEX idx_students_points ON students(points);\nEXPLAIN SELECT * FROM students WHERE points >= 100;",
      "challenge": "Test an index for a frequently joined foreign key.",
      "level": "Advanced"
    },
    {
      "id": "constraints",
      "category": "Schema",
      "title": "Foreign keys and data integrity",
      "summary": "Encode relationships in the database.",
      "explanation": "Foreign keys help prevent orphan records. Think carefully about deletion behavior (RESTRICT, CASCADE, SET NULL).",
      "code": "CREATE TABLE enrollments (\n  student_id INTEGER REFERENCES students(id),\n  course_id INTEGER NOT NULL,\n  PRIMARY KEY (student_id, course_id)\n);",
      "challenge": "Consider whether ON DELETE CASCADE fits the domain.",
      "level": "Intermediate"
    },
    {
      "id": "injection",
      "category": "Security",
      "title": "Parameterized SQL",
      "summary": "Separate data values from query syntax.",
      "explanation": "Never assemble SQL queries by interpolating untrusted input. The placeholders below are PostgreSQL-style parameters supplied by the application's database driver.",
      "code": "-- SQL text passed to a database driver:\nSELECT id, name FROM students WHERE name = $1;\n-- Bind the user-provided name as parameter 1.",
      "challenge": "Explain why replacing $1 with a concatenated string is unsafe.",
      "level": "Advanced"
    },
    {
      "id": "pagination",
      "category": "Performance",
      "title": "Stable pagination",
      "summary": "Page consistently through ordered results.",
      "explanation": "OFFSET works for small datasets but gets slower on deep pages. Keyset pagination uses the last seen sort key for predictable results.",
      "code": "SELECT id, name\nFROM students\nWHERE id > 100\nORDER BY id\nLIMIT 20;",
      "challenge": "Compare keyset pagination to OFFSET 100 LIMIT 20.",
      "level": "Advanced"
    }
  ]
};
