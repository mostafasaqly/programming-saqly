# Section 18: Problem Solving Basics

> **Introduction to Programming** — Section 18 of 25
> Estimated time: ~40 minutes · Level: Absolute Beginner

Writing code is the easy part. Understanding the problem and designing the solution is where beginners struggle most. This section teaches the thinking process — how to approach any programming problem systematically before writing a single line of code.

---

## Table of Contents

1. [What Is Problem Solving?](#1-what-is-problem-solving)
2. [Understanding the Problem](#2-understanding-the-problem)
3. [Breaking Problems into Steps](#3-breaking-problems-into-steps)
4. [Writing Pseudocode](#4-writing-pseudocode)
5. [Drawing Flowcharts](#5-drawing-flowcharts)
6. [The Dry Run Technique](#6-the-dry-run-technique)
7. [Debugging Thinking](#7-debugging-thinking)
8. [Practice: Solve a Real Problem Step by Step](#8-practice-solve-a-real-problem-step-by-step)

---

## 1. What Is Problem Solving?

**Problem solving** in programming is the ability to take a real-world task, understand it completely, break it into steps a computer can follow, and then translate those steps into code.

Most beginner frustration comes not from failing to write code — it comes from trying to write code before understanding the problem. The result is code that runs but does the wrong thing.

### The process

```
1. Understand the problem
2. Break it into steps
3. Write pseudocode
4. (Optional) Draw a flowchart
5. Write real code
6. Test and debug
```

Following this process turns a confusing problem into a series of small, manageable tasks.

---

## 2. Understanding the Problem

Before writing any code, you must fully understand what you're trying to build.

### The three questions

1. **What is the input?** — What data does the program receive?
2. **What is the output?** — What should the program produce?
3. **What is the process?** — How does input become output?

### Example problem

> "Write a program that reads a student's score and tells them whether they passed or failed. A score of 60 or above is a pass."

Applying the three questions:

| Question | Answer |
| --- | --- |
| Input | A number (the score) |
| Output | "Pass" or "Fail" |
| Process | If score >= 60: Pass. Otherwise: Fail. |

Now you understand the problem. Only now do you start coding.

### Another example

> "Write a program that calculates the average of three test scores."

| Question | Answer |
| --- | --- |
| Input | Three numbers (score1, score2, score3) |
| Output | One number (the average) |
| Process | Add the three scores, divide by 3 |

Simple when you break it down. Confusing if you just start typing.

### Clarify edge cases

Always ask: "What if…?"

- What if the score is 0? (valid — still works)
- What if the score is negative? (invalid — should we handle this?)
- What if the user enters text instead of a number? (needs validation)

The more edge cases you think of before coding, the fewer bugs you'll encounter.

---

## 3. Breaking Problems into Steps

After understanding the problem, break the solution into small, ordered steps — like a recipe.

### Example: ATM withdrawal

**Problem:** Build a program where a user enters how much money to withdraw. Validate the amount. Deduct from balance if valid.

**Breaking it down:**
```
1. Display current balance
2. Ask user how much to withdraw
3. Read the amount
4. Validate: is it a valid number?
5. Validate: is it greater than 0?
6. Validate: is it less than or equal to the balance?
7. If all validations pass: deduct from balance
8. Display the new balance
9. If any validation fails: display an error message
```

Now each step is small enough to translate directly to code. Nothing is vague.

### Decomposition: breaking big problems into small ones

Large problems are just many small problems combined. Learn to ask:
- "What sub-tasks make up this task?"
- "What does this step depend on?"
- "Can I solve just this one piece first?"

---

## 4. Writing Pseudocode

**Pseudocode** is a plain-English description of your program's logic — not real code, but structured like code. It's a thinking tool.

### Why pseudocode?

- Forces you to think through the logic before worrying about syntax
- Language-agnostic — works for any language
- Easy to review and fix before writing actual code
- Great for communicating ideas with others

### Pseudocode for the pass/fail example

```
START

  READ score from user

  IF score is not a valid number THEN
    DISPLAY "Please enter a valid number"
    STOP
  END IF

  IF score >= 60 THEN
    DISPLAY "Result: Pass"
  ELSE
    DISPLAY "Result: Fail"
  END IF

STOP
```

### Pseudocode for averaging three scores

```
START

  READ score1, score2, score3

  total = score1 + score2 + score3
  average = total / 3

  DISPLAY "Average: " + average

  IF average >= 60 THEN
    DISPLAY "Overall: Pass"
  ELSE
    DISPLAY "Overall: Fail"
  END IF

STOP
```

Now translating this to JavaScript is straightforward — you're just converting English to code syntax.

---

## 5. Drawing Flowcharts

A **flowchart** is a visual diagram of a program's logic. Different shapes represent different actions:

| Shape | Meaning |
| --- | --- |
| Oval | Start / End |
| Rectangle | Action (process) |
| Diamond | Decision (yes/no question) |
| Parallelogram | Input / Output |
| Arrow | Flow direction |

### Flowchart for pass/fail

```
    ┌─────────┐
    │  START  │
    └────┬────┘
         │
    ┌────▼──────────┐
    │ Read score    │
    └────┬──────────┘
         │
    ┌────▼──────────────┐
    │ Is score >= 60?   │
    └────┬──────────┬───┘
       YES          NO
         │          │
    ┌────▼─────┐ ┌──▼──────┐
    │  "Pass"  │ │ "Fail"  │
    └────┬─────┘ └──┬──────┘
         │          │
    ┌────▼──────────▼───┐
    │       END         │
    └───────────────────┘
```

You don't need special software to draw flowcharts — pencil and paper work fine.

### When flowcharts help

- When there are many decision branches
- When explaining the program to others
- When the logic is complex and you want a bird's-eye view

---

## 6. The Dry Run Technique

A **dry run** (also called desk checking) means tracing through your code (or pseudocode) manually with specific values, step by step — without running it on a computer.

### Why it's valuable

- Catches logical errors before you even write real code
- Helps you understand what your code actually does vs what you intended
- Essential for debugging

### Example: dry run of a grade function

**Code to trace:**
```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}
```

**Trace with score = 85:**

| Step | Line | Variable | Result |
| --- | --- | --- | --- |
| 1 | `score >= 90` | 85 >= 90 | false — skip |
| 2 | `score >= 80` | 85 >= 80 | true — return "B" |
| 3 | function ends | — | returns "B" |

**Trace with score = 65:**

| Step | Line | Variable | Result |
| --- | --- | --- | --- |
| 1 | `score >= 90` | 65 >= 90 | false — skip |
| 2 | `score >= 80` | 65 >= 80 | false — skip |
| 3 | `score >= 70` | 65 >= 70 | false — skip |
| 4 | `return "F"` | — | returns "F" ← bug! 65 should be "D" |

The dry run revealed a missing case (60-69 = "D").

---

## 7. Debugging Thinking

When code doesn't work, systematic thinking is more valuable than random guessing.

### The debugging process

1. **Reproduce the problem** — what exact input causes the bug?
2. **Isolate the section** — which part of the code is responsible?
3. **Form a hypothesis** — "I think the bug is at line X because Y"
4. **Test the hypothesis** — add a `console.log` to check the value
5. **Fix and verify** — make one change, test again

### Using console.log to debug

```javascript
function calculateTotal(price, quantity, discount) {
    let subtotal = price * quantity;
    console.log("subtotal:", subtotal); // check this value

    let discountAmount = subtotal * discount;
    console.log("discountAmount:", discountAmount); // check this

    let total = subtotal - discountAmount;
    console.log("total:", total); // check the final result

    return total;
}
```

Adding `console.log` at each step lets you see exactly where the value goes wrong.

### Common logic bugs

- Off-by-one errors (`< 10` vs `<= 10`)
- Wrong operator (`&&` instead of `||`)
- Wrong order of operations
- Forgetting to handle an edge case (empty input, zero, negative numbers)
- Variable shadowing (using the wrong variable accidentally)

---

## 8. Practice: Solve a Real Problem Step by Step

**Problem:** Build a simple shopping cart total calculator.

A user will enter:
- The price of an item
- The quantity
- Whether they have a discount code (yes/no)
- A 14% tax is always applied
- A 10% discount applies if they have a discount code
- Shipping is free if the subtotal exceeds 500, otherwise it's 30

**Follow the process:**

**Step 1 — Three questions:**
- Input: price, quantity, has discount code (yes/no)
- Output: itemized receipt with total
- Process: calculate subtotal → apply discount if applicable → add tax → add shipping

**Step 2 — Break into steps:**
```
1. Read price, quantity, discount code
2. Validate inputs (numbers > 0, discount = "yes" or "no")
3. Calculate subtotal = price × quantity
4. If discount code = "yes", discount = subtotal × 0.10, else discount = 0
5. Apply discount: afterDiscount = subtotal - discount
6. Calculate tax = afterDiscount × 0.14
7. Calculate shipping = afterDiscount > 500 ? 0 : 30
8. Total = afterDiscount + tax + shipping
9. Display receipt
```

**Step 3 — Write pseudocode** (write this yourself before coding)

**Step 4 — Write the code:**
```javascript
// Write your solution here, following your pseudocode
```

**Step 5 — Dry run** with these values and verify manually:
- price = 200, quantity = 3, discount = "yes"
- Expected: subtotal = 600, discount = -60, tax = 75.6, shipping = 0, total = 615.6

---

## ✅ Section 18 Recap

You now know:
- Problem solving is a **process**: understand → break down → pseudocode → code → test.
- Always answer the **three questions** first: input, output, process.
- **Decompose** large problems into smaller steps.
- **Pseudocode** is plain-English logic — write it before real code.
- **Flowcharts** visualize decision branches and flow.
- **Dry runs** trace through code manually to find logic errors before running.
- **Debugging** is systematic: reproduce → isolate → hypothesize → test → fix.

### Knowledge check

1. What are the three questions to ask when you first encounter a programming problem?
2. What is pseudocode and why is it useful?
3. What is a dry run?

<details>
<summary>Show answers</summary>

1. What is the input? What is the output? What is the process (how does input become output)?
2. Pseudocode is a plain-English description of your program's logic, structured like code. It's useful because it lets you think through the logic without worrying about syntax, and it works for any programming language.
3. A dry run is manually tracing through your code step by step with specific values, without running it on a computer. It helps catch logical errors early.

</details>

---

**Next up → [Section 19: Bits and Bytes (Optional)](../Section%2019%20-%20Bits%20and%20Bytes/README.md)**
Peek under the hood — how computers actually store everything at the binary level. 🔧
