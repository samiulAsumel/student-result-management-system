# Student Result Management System

A small Node.js script that calculates a student's total, average, grade, and pass/fail result from exactly 10 subject marks.

## Prerequisites

- Node.js (tested on v22.21.0)

## Usage

Edit `studentName` and `marks` at the top of `index.js`, then run:

```bash
node index.js
```

Example output for the default data:

```
Student: Samiul
Total: 826
Average: 82.60
Grade: A+
Result: PASS
```

## Rules

- Exactly 10 marks are required.
- Each mark must be a finite number from 0 to 100; otherwise `Invalid marks` is printed.
- Any single mark below 33 means FAIL, grade `F`.
- Grade is based on the average:

| Average | Grade |
| ------- | ----- |
| >= 80   | A+    |
| >= 70   | A     |
| >= 60   | A-    |
| >= 50   | B     |
| >= 40   | C     |
| >= 33   | D     |
| < 33    | F     |

The grading scale is a learning-exercise assumption, not an official board scale.

## Limitations

- Marks are hardcoded; there is no file, CLI, or database input.
- There are no automated tests yet.
