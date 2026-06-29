# Section 4: Comments

> **Introduction to Programming** — Section 4 of 25
> Estimated time: ~20 minutes · Level: Absolute Beginner

Comments are lines in your code that the computer ignores. They exist purely for humans — to explain what the code does, why a decision was made, or to leave notes for yourself or teammates. Learning to write good comments from day one is a habit that will make you a better programmer.

---

## Table of Contents

1. [What Are Comments?](#1-what-are-comments)
2. [Why Comments Matter](#2-why-comments-matter)
3. [Single-Line Comments](#3-single-line-comments)
4. [Multi-Line Comments](#4-multi-line-comments)
5. [Good Comments vs Bad Comments](#5-good-comments-vs-bad-comments)
6. [Using Comments to Learn](#6-using-comments-to-learn)
7. [Practice: Document Your First Program](#7-practice-document-your-first-program)

---

## 1. What Are Comments?

A **comment** is text inside your code file that is completely ignored by the computer when the program runs. It is there for humans only.

```javascript
// This line is a comment. The computer skips it entirely.
console.log("This line runs."); // This part after // is also a comment.
```

When you run the code above, you see:
```
This line runs.
```

The comment text never appears in the output — the computer never even reads it.

### How to write comments (syntax varies by language)

| Language | Single-line comment | Multi-line comment |
| --- | --- | --- |
| JavaScript | `// comment` | `/* comment */` |
| Python | `# comment` | `""" comment """` |
| Java | `// comment` | `/* comment */` |
| C | `// comment` | `/* comment */` |

The idea is identical in all of them. Only the symbol changes.

---

## 2. Why Comments Matter

### Reason 1: Your future self forgets

You write code today. In three weeks, you'll open that file and have no idea what you were thinking. A comment takes 10 seconds to write and saves 10 minutes of confusion later.

### Reason 2: Others need to read your code

In real projects, code is read by teammates, reviewed by instructors, or maintained by someone who wasn't there when it was written. Comments make code a conversation, not a puzzle.

### Reason 3: They help while learning

When you're learning, writing a comment that explains what each line does forces you to understand it. If you can't explain it in plain words, you don't fully understand it yet.

### Reason 4: Temporarily disabling code

You can "comment out" a line to stop it from running — useful when testing or debugging — without deleting it.

```javascript
console.log("Line 1");
// console.log("Line 2");  ← disabled, won't run
console.log("Line 3");
```

Output:
```
Line 1
Line 3
```

---

## 3. Single-Line Comments

A single-line comment starts with a special symbol and runs to the end of that line.

### JavaScript / Java / C

```javascript
// This is a single-line comment
console.log("Hello"); // This comment is after code on the same line
```

### Python

```python
# This is a single-line comment
print("Hello")  # This comment is after code on the same line
```

### When to use

Single-line comments are best for:
- Short explanations of a single line or statement.
- Quick notes to yourself.
- Labeling sections of code.

```javascript
// Calculate the total price
let total = price * quantity;

// Apply discount if customer is a member
if (isMember) {
    total = total * 0.9;
}
```

---

## 4. Multi-Line Comments

When your explanation needs more than one line, use a multi-line (block) comment.

### JavaScript / Java / C

```javascript
/*
  This program calculates the final price of a product.
  It takes the base price, multiplies by quantity,
  then applies a 10% discount for members.
*/
let total = price * quantity;
```

### Python (using triple quotes)

```python
"""
This program calculates the final price of a product.
It takes the base price, multiplies by quantity,
then applies a 10% discount for members.
"""
total = price * quantity
```

### When to use

Multi-line comments are best for:
- Describing what an entire block of code does.
- Explaining a complex algorithm or decision.
- Adding context at the top of a file.

---

## 5. Good Comments vs Bad Comments

Not all comments are helpful. Bad comments add noise without adding value. Good comments explain the **why**, not the **what** (the code itself usually shows the what).

### Bad comments

```javascript
// Add 1 to x
x = x + 1;

// Print the name
console.log(name);

// Set age to 25
let age = 25;
```

These comments just repeat what the code already clearly says. They add nothing.

### Good comments

```javascript
// Increment the retry counter (max 3 retries allowed)
retryCount = retryCount + 1;

// Prices are stored in cents to avoid floating-point errors
let price = 1999; // $19.99

// Using index 0 because the API always returns most recent item first
let latestItem = results[0];
```

These explain **why** the code is written this way — information that is not obvious from reading the code alone.

### The rule

> Write comments to explain things that the code **cannot explain itself**.
> If the code is clear enough to speak for itself, let it.

---

## 6. Using Comments to Learn

While you're learning, comments are also a powerful study tool. Use them to:

### Explain code to yourself

```javascript
let name = "Sara";       // create a variable called name, store the text "Sara"
let age = 25;            // create a variable called age, store the number 25
console.log(name);       // print the value of name to the console
console.log(age);        // print the value of age to the console
```

If you can write this explanation without thinking, you understand the code. If you struggle to write it, re-read the section.

### Mark questions

```javascript
let result = total * 0.9;  // TODO: why 0.9? (answer: 10% discount = keep 90%)
```

When something confuses you, leave a comment with your question. Come back to it.

### Track your progress

```javascript
// DONE: variables and output
// DONE: arithmetic operators
// TODO: conditions (next)
```

---

## 7. Practice: Document Your First Program

Take the Hello World program from Section 3 and add comments to it.

**Start with this:**
```javascript
console.log("Hello, World!");
console.log("My name is Sara");
console.log("I am learning to program");
```

**Add a block comment at the top explaining what the program does, and a single-line comment on each line:**

```javascript
/*
  My First Program
  This program prints a greeting and some information about me.
  Written as a practice exercise for Section 4.
*/

console.log("Hello, World!");          // greet the world
console.log("My name is Sara");        // print my name
console.log("I am learning to program"); // print what I'm doing
```

**Practice tasks:**
1. Write the commented version above in your editor and run it. Confirm the output is unchanged.
2. Comment out one of the `console.log` lines. Run it again. Confirm that line no longer appears.
3. Add your own 4th line with a comment explaining it.

---

## ✅ Section 4 Recap

You now know:
- A **comment** is text the computer ignores — it's there for humans only.
- **Single-line comments** use `//` (JS/Java/C) or `#` (Python).
- **Multi-line comments** use `/* */` (JS/Java/C) or `""" """` (Python).
- **Good comments** explain the *why*, not the *what*.
- **Bad comments** just repeat what the code already says.
- Comments are a powerful **learning tool** — use them to explain code to yourself.

### Knowledge check

1. Does the computer ever execute comment lines?
2. What is the difference between a good comment and a bad comment?
3. How can you temporarily stop a line of code from running without deleting it?

<details>
<summary>Show answers</summary>

1. No — the computer skips comments entirely. They are for humans only.
2. A good comment explains *why* the code is written that way. A bad comment just repeats *what* the code already clearly shows.
3. Comment it out — put the comment symbol (`//` or `#`) at the start of the line.

</details>

---

**Next up → [Section 5: Variables](../Section%2005%20-%20Variables/README.md)**
Learn how to store data in your programs — the most fundamental building block of all programming. 📦
