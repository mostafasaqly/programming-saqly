# Section 23: Mini Project — Student Grade System

> **Introduction to Programming** — Section 23 of 25
> Estimated time: ~60 minutes · Level: Beginner
> 🎯 **Project section** — this is where concepts become a real, working program.

This is your first complete project. You'll build a Student Grade System that takes a student's scores, calculates their average, assigns a letter grade, and displays a full result report. Every concept used here was taught in the previous sections.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Define Project Requirements](#2-define-project-requirements)
3. [Create Student Variables](#3-create-student-variables)
4. [Calculate Total Marks](#4-calculate-total-marks)
5. [Calculate Average](#5-calculate-average)
6. [Check Pass or Fail](#6-check-pass-or-fail)
7. [Assign Grade](#7-assign-grade)
8. [Display Final Result](#8-display-final-result)
9. [Refactor Using Functions](#9-refactor-using-functions)
10. [Final Project Review](#10-final-project-review)

---

## 1. Project Overview

**What you'll build:** A program that processes a student's exam scores and produces a complete grade report.

**What it does:**
- Stores the student's name and subject scores
- Calculates total and average
- Determines pass or fail
- Assigns a letter grade
- Displays a formatted report

**Concepts used:** Variables, constants, arrays, arithmetic operators, conditions, functions, strings, type casting, output.

**Final output will look like:**
```
====================================
         GRADE REPORT
====================================
Student:  Sara Ahmed
====================================
Subject          Score
------------------------------------
Mathematics      85
Science          92
English          78
History          88
Computer         95
------------------------------------
Total:           438 / 500
Average:         87.6%
Grade:           B
Result:          PASS
====================================
```

---

## 2. Define Project Requirements

Before coding, define what the program must do. This is the requirements phase.

### Functional requirements

1. Accept a student name and 5 subject scores
2. Each subject is out of 100 (maximum total = 500)
3. Calculate the total of all scores
4. Calculate the average (total / number of subjects)
5. Determine pass/fail: average >= 60 is a pass
6. Assign a letter grade based on average:
   - A: 90-100
   - B: 80-89
   - C: 70-79
   - D: 60-69
   - F: below 60
7. Display a formatted report

### Constants to define

```javascript
const MAX_SCORE_PER_SUBJECT = 100;
const NUMBER_OF_SUBJECTS = 5;
const PASS_THRESHOLD = 60;
const MAX_TOTAL = MAX_SCORE_PER_SUBJECT * NUMBER_OF_SUBJECTS; // 500
```

---

## 3. Create Student Variables

Start by defining the student's data:

```javascript
// Student information
let studentName = "Sara Ahmed";

// Subject names
let subjects = ["Mathematics", "Science", "English", "History", "Computer"];

// Subject scores (must match order above)
let scores = [85, 92, 78, 88, 95];
```

**Validation check:** Make sure scores array length matches subjects array length.

```javascript
if (scores.length !== subjects.length) {
    console.log("Error: Scores and subjects count do not match!");
}
```

---

## 4. Calculate Total Marks

Use a loop to sum all scores:

```javascript
let total = 0;

for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

console.log("Total: " + total); // 438
```

**Alternative using a function:**

```javascript
function calculateTotal(scoresArray) {
    let sum = 0;
    for (let i = 0; i < scoresArray.length; i++) {
        sum += scoresArray[i];
    }
    return sum;
}

let total = calculateTotal(scores); // 438
```

---

## 5. Calculate Average

```javascript
let average = total / scores.length;
console.log("Average: " + average.toFixed(1)); // 87.6
```

**As a function:**

```javascript
function calculateAverage(total, count) {
    return total / count;
}

let average = calculateAverage(total, scores.length); // 87.6
```

---

## 6. Check Pass or Fail

```javascript
const PASS_THRESHOLD = 60;

let isPassing = average >= PASS_THRESHOLD;
let result = isPassing ? "PASS" : "FAIL";

console.log("Result: " + result);
```

**As a function:**

```javascript
function determineResult(average) {
    return average >= PASS_THRESHOLD ? "PASS" : "FAIL";
}
```

---

## 7. Assign Grade

```javascript
function assignGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

let grade = assignGrade(average); // "B"
```

---

## 8. Display Final Result

Build a formatted report:

```javascript
function displayReport(name, subjects, scores, total, average, grade, result) {
    const LINE = "====================================";
    const DIVIDER = "------------------------------------";

    console.log(LINE);
    console.log("         GRADE REPORT");
    console.log(LINE);
    console.log("Student:  " + name);
    console.log(LINE);
    console.log("Subject          Score");
    console.log(DIVIDER);

    for (let i = 0; i < subjects.length; i++) {
        let subjectName = subjects[i].padEnd(17); // align columns
        console.log(subjectName + scores[i]);
    }

    console.log(DIVIDER);
    console.log("Total:           " + total + " / " + MAX_TOTAL);
    console.log("Average:         " + average.toFixed(1) + "%");
    console.log("Grade:           " + grade);
    console.log("Result:          " + result);
    console.log(LINE);
}
```

---

## 9. Refactor Using Functions

Now bring it all together in a clean, function-based structure:

```javascript
// ─── Constants ───────────────────────────────────────────
const MAX_SCORE_PER_SUBJECT = 100;
const PASS_THRESHOLD = 60;

// ─── Functions ───────────────────────────────────────────
function calculateTotal(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum;
}

function calculateAverage(total, count) {
    return total / count;
}

function assignGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

function determineResult(average) {
    return average >= PASS_THRESHOLD ? "PASS" : "FAIL";
}

function displayReport(name, subjects, scores) {
    const maxTotal = MAX_SCORE_PER_SUBJECT * subjects.length;
    const total   = calculateTotal(scores);
    const average = calculateAverage(total, scores.length);
    const grade   = assignGrade(average);
    const result  = determineResult(average);

    const LINE    = "====================================";
    const DIVIDER = "------------------------------------";

    console.log(LINE);
    console.log("         GRADE REPORT");
    console.log(LINE);
    console.log("Student:  " + name);
    console.log(LINE);
    console.log("Subject          Score");
    console.log(DIVIDER);

    for (let i = 0; i < subjects.length; i++) {
        console.log(subjects[i].padEnd(17) + scores[i]);
    }

    console.log(DIVIDER);
    console.log("Total:           " + total + " / " + maxTotal);
    console.log("Average:         " + average.toFixed(1) + "%");
    console.log("Grade:           " + grade);
    console.log("Result:          " + result);
    console.log(LINE);
}

// ─── Data ────────────────────────────────────────────────
let studentName = "Sara Ahmed";
let subjects    = ["Mathematics", "Science", "English", "History", "Computer"];
let scores      = [85, 92, 78, 88, 95];

// ─── Run ─────────────────────────────────────────────────
displayReport(studentName, subjects, scores);
```

---

## 10. Final Project Review

### What you built

A complete program that:
- Stores structured data in variables and arrays
- Processes the data using loops and arithmetic
- Makes decisions using conditions and functions
- Formats and displays a professional output

### Concepts used

| Concept | Where used |
| --- | --- |
| Variables | Student name, score storage |
| Constants | Pass threshold, max score |
| Arrays | Subjects list, scores list |
| Loops | Summing scores, displaying each subject |
| Conditions | Pass/fail, grade assignment |
| Functions | calculateTotal, assignGrade, displayReport |
| Strings | Formatting the report output |
| Type casting | `.toFixed(1)` for display |
| Operators | `+=`, `>=`, `/`, ternary `? :` |

### Extension challenges

1. **Add more students:** Create an array of student objects and generate a report for each.
2. **Find the highest scorer:** After processing all students, display who got the highest average.
3. **Lowest and highest score per student:** Also show which subject they scored best and worst in.
4. **Class statistics:** Calculate the class average and how many students passed.

```javascript
// Extension: Array of students
let classData = [
    { name: "Sara Ahmed",  scores: [85, 92, 78, 88, 95] },
    { name: "Omar Hassan", scores: [72, 68, 80, 75, 65] },
    { name: "Ali Salem",   scores: [95, 98, 92, 97, 99] },
];

for (let student of classData) {
    displayReport(student.name, subjects, student.scores);
    console.log(""); // blank line between reports
}
```

---

## ✅ Section 23 Recap

You built your first complete, real program. You:
- Defined requirements before coding
- Organized data using variables, constants, and arrays
- Processed data using loops and arithmetic
- Made decisions using conditions
- Organized logic into reusable functions
- Formatted and displayed a professional output

This is real programming — not just toy examples. Every concept used here appears in production software every day.

---

**Next up → [Section 24: Mini Project — Simple Banking System](../Section%2024%20-%20Mini%20Project%20Simple%20Banking%20System/README.md)**
Build a banking system that handles deposits, withdrawals, and account validation. 🏦
