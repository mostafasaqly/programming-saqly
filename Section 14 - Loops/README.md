# Section 14: Loops

> **Introduction to Programming** — Section 14 of 25
> Estimated time: ~45 minutes · Level: Absolute Beginner

If conditions make programs smart, loops make them powerful. A loop runs the same block of code multiple times — automatically. Without loops, printing 100 numbers would require writing 100 lines of code. With a loop, it takes three.

---

## Table of Contents

1. [What Is a Loop?](#1-what-is-a-loop)
2. [Why Do We Use Loops?](#2-why-do-we-use-loops)
3. [The `for` Loop](#3-the-for-loop)
4. [The `while` Loop](#4-the-while-loop)
5. [The `do while` Loop](#5-the-do-while-loop)
6. [Loop Counter](#6-loop-counter)
7. [Break and Continue](#7-break-and-continue)
8. [Infinite Loops (and How to Avoid Them)](#8-infinite-loops-and-how-to-avoid-them)
9. [Nested Loops](#9-nested-loops)
10. [Practice: Print Numbers and Patterns](#10-practice-print-numbers-and-patterns)

---

## 1. What Is a Loop?

A **loop** is a control structure that repeats a block of code multiple times.

```
REPEAT 10 times:
    print "Hello"
```

Instead of writing `console.log("Hello")` ten times, you write it once and tell the loop to repeat.

### The loop cycle

Every loop has the same structure:
1. **Start** — initialize any needed variables
2. **Condition** — check if the loop should run again
3. **Body** — the code that runs each time
4. **Update** — change something so the condition eventually becomes false

If the condition never becomes false, the loop runs forever (an infinite loop — see Section 8).

---

## 2. Why Do We Use Loops?

### Without loops — repetitive and unscalable

```javascript
console.log("Student 1: Sara - Score: 85");
console.log("Student 2: Omar - Score: 92");
console.log("Student 3: Ali - Score: 78");
// ... 97 more lines for 100 students
```

### With loops — clean and scalable

```javascript
let students = ["Sara", "Omar", "Ali"];
let scores = [85, 92, 78];

for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i+1}: ${students[i]} - Score: ${scores[i]}`);
}
```

This works for 3 students or 3 million students — the code doesn't change.

---

## 3. The `for` Loop

The `for` loop is the most common loop. Use it when you know **how many times** to repeat.

### Syntax

```javascript
for (initialization; condition; update) {
    // body — runs each iteration
}
```

- **Initialization**: runs once before the loop starts (`let i = 0`)
- **Condition**: checked before each iteration; loop stops when false
- **Update**: runs after each iteration (`i++`)

### Example: count from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
```

### Trace through it step by step

| Iteration | i value | Condition (i <= 5) | Output | After update |
| --- | --- | --- | --- | --- |
| 1 | 1 | true | 1 | i = 2 |
| 2 | 2 | true | 2 | i = 3 |
| 3 | 3 | true | 3 | i = 4 |
| 4 | 4 | true | 4 | i = 5 |
| 5 | 5 | true | 5 | i = 6 |
| 6 | 6 | false | — | loop ends |

### Looping through an array

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i + ": " + fruits[i]);
}
// 0: apple
// 1: banana
// 2: cherry
```

### Counting down

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

### Python `for` loop

```python
for i in range(1, 6):   # range(1, 6) gives 1, 2, 3, 4, 5
    print(i)

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

---

## 4. The `while` Loop

The `while` loop repeats **as long as** a condition is true. Use it when you don't know in advance how many times to loop.

### Syntax

```javascript
while (condition) {
    // body
    // update — must eventually make condition false!
}
```

### Example: count from 1 to 5

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++; // don't forget this — otherwise loops forever
}
// 1, 2, 3, 4, 5
```

### When `while` is better than `for`

```javascript
// Keep asking until user enters a valid number
let input = "";
while (isNaN(Number(input)) || input === "") {
    input = prompt("Enter a number:");
}
console.log("You entered: " + Number(input));
```

You don't know how many times the user will enter invalid input — so `while` is the right choice.

### Python

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

---

## 5. The `do while` Loop

The `do while` loop is like `while`, but it **always runs at least once** — it checks the condition after the first execution.

### Syntax

```javascript
do {
    // body runs at least once
} while (condition);
```

### Example

```javascript
let count = 10;

do {
    console.log(count); // runs even though count > 5
    count++;
} while (count <= 5);

// Output: 10
// The body ran once even though the condition was false from the start
```

### Practical use: menu systems

```javascript
let choice;

do {
    choice = prompt("Menu:\n1. Option A\n2. Option B\n3. Exit\n\nChoice:");
    
    if (choice === "1") console.log("You chose A");
    else if (choice === "2") console.log("You chose B");
} while (choice !== "3");

console.log("Goodbye!");
```

The menu always shows at least once. If the user chooses "3" immediately, the loop ends.

---

## 6. Loop Counter

The loop counter (usually `i`, `j`, `k`) controls how many times the loop runs and tracks the current iteration.

### Common patterns

```javascript
// Every item
for (let i = 0; i < array.length; i++) { ... }

// Every other item (step by 2)
for (let i = 0; i < array.length; i += 2) { ... }

// Reverse order
for (let i = array.length - 1; i >= 0; i--) { ... }

// Count up by 5
for (let i = 0; i <= 100; i += 5) {
    console.log(i); // 0, 5, 10, 15 ... 100
}
```

### Accumulator pattern

A very common pattern: use a variable outside the loop to accumulate results:

```javascript
let scores = [85, 92, 78, 90, 88];
let total = 0;

for (let i = 0; i < scores.length; i++) {
    total += scores[i]; // add each score to total
}

let average = total / scores.length;
console.log("Total: " + total);     // 433
console.log("Average: " + average); // 86.6
```

---

## 7. Break and Continue

Two special keywords give you control inside a loop.

### `break` — exit the loop immediately

```javascript
let numbers = [1, 4, 7, 2, 9, 3, 8];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 9) {
        console.log("Found 9 at index " + i);
        break; // stop looking — we found it
    }
}
// "Found 9 at index 4"
// Loop stops here
```

### `continue` — skip this iteration, go to the next

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i); // only prints odd numbers
}
// 1, 3, 5, 7, 9
```

### When to use them

- `break`: when you've found what you were looking for and don't need to continue
- `continue`: when you want to skip certain items but keep going through the rest

---

## 8. Infinite Loops (and How to Avoid Them)

An **infinite loop** runs forever because the condition never becomes false. This freezes or crashes your program.

### Accidental infinite loops

```javascript
// ❌ Infinite loop — forgot to update i
let i = 0;
while (i < 5) {
    console.log(i);
    // missing i++ — i stays 0 forever
}

// ❌ Infinite loop — condition is always true
for (let i = 0; i >= 0; i++) {
    // i grows forever, always >= 0
}
```

### How to avoid them

1. **Always update the counter** inside a `while` loop.
2. **Check your condition** — make sure it can eventually become false.
3. **Test with small values** — before running a big loop, trace through it manually.

### Intentional infinite loops (with a way out)

Sometimes you want a loop that runs until something happens:

```javascript
while (true) {
    let input = prompt("Enter 'quit' to stop:");
    if (input === "quit") {
        break; // exit the infinite loop
    }
    console.log("You said: " + input);
}
```

This is a valid pattern — but always make sure there's a `break` condition.

---

## 9. Nested Loops

A loop inside another loop. Each complete run of the inner loop counts as one iteration of the outer loop.

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// i=2, j=2
// i=2, j=3
// i=3, j=1
// i=3, j=2
// i=3, j=3
```

### Multiplication table

```javascript
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j).toString().padStart(4);
    }
    console.log(row);
}
// Output:
//    1   2   3   4   5
//    2   4   6   8  10
//    3   6   9  12  15
//    4   8  12  16  20
//    5  10  15  20  25
```

---

## 10. Practice: Print Numbers and Patterns

**Task 1:** Print all even numbers from 2 to 20.

**Task 2:** Calculate the sum of all numbers from 1 to 100.
```
Expected: 5050
```

**Task 3:** Print this triangle pattern using nested loops:
```
*
**
***
****
*****
```

**Task 4:** Given an array of scores, find:
- The highest score
- The lowest score
- The average score
```javascript
let scores = [72, 88, 95, 61, 78, 83, 90, 55, 74, 82];
```

**Bonus:** Find the first score above 90 and stop searching once found.

---

## ✅ Section 14 Recap

You now know:
- A **loop** repeats a block of code automatically.
- **`for` loop** — best when you know how many times to repeat. Uses initialization, condition, and update.
- **`while` loop** — best when you don't know how many times; repeats while condition is true.
- **`do while`** — like `while`, but always runs at least once.
- **Loop counter** — tracks the current iteration; common patterns include accumulator and step.
- **`break`** — exits the loop immediately.
- **`continue`** — skips the current iteration and moves to the next.
- **Infinite loops** happen when the condition never becomes false — always ensure an exit.
- **Nested loops** — a loop inside a loop; essential for grids, tables, and patterns.

### Knowledge check

1. What are the three parts of a `for` loop?
2. When would you use `while` instead of `for`?
3. What does `break` do inside a loop?

<details>
<summary>Show answers</summary>

1. Initialization (e.g., `let i = 0`), condition (e.g., `i < 10`), and update (e.g., `i++`).
2. When you don't know in advance how many times the loop should run — for example, looping until a user enters valid input.
3. `break` immediately exits the loop — no more iterations run, and execution continues after the loop.

</details>

---

**Next up → [Section 15: Functions](../Section%2015%20-%20Functions/README.md)**
Package your code into reusable named blocks — the foundation of organized programming. 📦
