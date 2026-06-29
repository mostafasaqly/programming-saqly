# Section 17: Recursion *(Optional)*

> **Introduction to Programming** — Section 17 of 25
> Estimated time: ~35 minutes · Level: Intermediate
> ⚠️ **Optional section** — come back to this once functions and loops feel comfortable.

Recursion is one of the most elegant ideas in programming — a function that solves a problem by calling itself. It's not required for beginners, but once it clicks, it changes how you see certain problems.

---

## Table of Contents

1. [What Is Recursion?](#1-what-is-recursion)
2. [A Recursive Function](#2-a-recursive-function)
3. [The Base Case](#3-the-base-case)
4. [The Recursive Case](#4-the-recursive-case)
5. [Recursion vs Loops](#5-recursion-vs-loops)
6. [Common Recursion Mistakes](#6-common-recursion-mistakes)
7. [Practice: Countdown Function](#7-practice-countdown-function)
8. [Practice: Factorial Function](#8-practice-factorial-function)

---

## 1. What Is Recursion?

**Recursion** is when a function calls itself as part of its own definition.

### Real-life analogy

Imagine you're standing in a long queue and you want to know what position you are. You can't see the front. So you ask the person in front of you: "What's your position?" They don't know either, so they ask the person in front of them. This continues until it reaches the first person, who says "I'm number 1." That answer flows back — person 2 says "I'm 2," person 3 says "I'm 3" — until you get your answer.

Each person solved the problem the same way: "I'm one more than the person in front of me." That's recursion.

### In programming

```javascript
function problem(input) {
    // solve a smaller version of the same problem
    return problem(smallerInput);
}
```

A recursive function breaks a problem into a slightly smaller version of itself, calls itself on that smaller version, and combines the results.

---

## 2. A Recursive Function

Here's the simplest recursive function — counting down:

```javascript
function countdown(n) {
    console.log(n);
    countdown(n - 1); // calls itself with a smaller value
}

countdown(5);
// 5
// 4
// 3
// 2
// 1
// 0
// -1
// -2 ... forever (infinite recursion — needs a base case!)
```

This runs forever. We need a way to stop it.

---

## 3. The Base Case

The **base case** is the condition that stops the recursion. Without it, the function calls itself forever and the program crashes.

```javascript
function countdown(n) {
    if (n <= 0) {
        console.log("Done!"); // base case — stop here
        return;
    }
    console.log(n);
    countdown(n - 1); // recursive case
}

countdown(5);
// 5
// 4
// 3
// 2
// 1
// Done!
```

### The two essential parts of every recursive function

1. **Base case** — the condition that stops recursion (returns without calling itself)
2. **Recursive case** — the call to itself with a simpler/smaller input

---

## 4. The Recursive Case

The **recursive case** is the call to the same function with a smaller problem.

### Example: sum from 1 to n

**Problem:** Calculate the sum of all numbers from 1 to n.

```
sum(5) = 5 + 4 + 3 + 2 + 1 = 15
```

**Recursive thinking:** `sum(n) = n + sum(n - 1)` → "the sum up to n is n plus the sum up to n-1"

```javascript
function sum(n) {
    if (n <= 0) return 0; // base case: sum of nothing is 0

    return n + sum(n - 1); // recursive case
}

console.log(sum(5)); // 15
```

### How it executes step by step

```
sum(5)
  = 5 + sum(4)
  = 5 + 4 + sum(3)
  = 5 + 4 + 3 + sum(2)
  = 5 + 4 + 3 + 2 + sum(1)
  = 5 + 4 + 3 + 2 + 1 + sum(0)
  = 5 + 4 + 3 + 2 + 1 + 0
  = 15
```

The function builds up a chain of calls until it hits the base case, then unwinds — each call returns its result to the one above it.

---

## 5. Recursion vs Loops

Most things you can do with recursion, you can also do with a loop — and vice versa.

### Sum using a loop

```javascript
function sumLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

### Sum using recursion

```javascript
function sumRecursive(n) {
    if (n <= 0) return 0;
    return n + sumRecursive(n - 1);
}
```

### Which should you use?

| Situation | Prefer |
| --- | --- |
| Simple counting, summing, iterating | Loop (simpler, faster) |
| Tree structures (folder hierarchies, menus) | Recursion (naturally matches the structure) |
| Problems that divide into identical sub-problems | Recursion (merge sort, binary search) |
| When you're unsure | Loop |

> 💡 **Rule for beginners:** If a loop solves it easily, use a loop. Recursion is the right tool for problems where the structure is naturally recursive (like trees or nested data).

---

## 6. Common Recursion Mistakes

### Mistake 1: Missing the base case (infinite recursion)

```javascript
function countdown(n) {
    console.log(n);
    countdown(n - 1); // ❌ no base case — runs forever, crashes with "Maximum call stack exceeded"
}
```

Always define a base case that stops the recursion.

### Mistake 2: Base case that's never reached

```javascript
function countdown(n) {
    if (n === 0) return; // base case
    countdown(n - 1);
}

countdown(0.5); // n goes 0.5, -0.5, -1.5, -2.5... never hits exactly 0!
```

Fix: use `n <= 0` instead of `n === 0` to handle edge cases.

### Mistake 3: Not moving toward the base case

```javascript
function broken(n) {
    if (n <= 0) return;
    broken(n + 1); // ❌ n grows — never reaches base case!
}
```

The recursive call must always move toward the base case.

### Mistake 4: Using recursion where a loop is simpler

```javascript
// Recursion for simple sum — works but unnecessary
function sum(n) { ... }

// A loop is clearer and faster for this
let total = (n * (n + 1)) / 2; // even better — just a formula!
```

---

## 7. Practice: Countdown Function

Write a recursive function that counts down from n to 1 and then prints "Blast off!".

```javascript
countdown(5);
// Expected output:
// 5
// 4
// 3
// 2
// 1
// Blast off!
```

**Requirements:**
- Must use recursion (not a loop)
- Must have a base case
- Must stop at 1 (not 0)

---

## 8. Practice: Factorial Function

The factorial of n (written n!) is the product of all positive integers up to n:
```
5! = 5 × 4 × 3 × 2 × 1 = 120
```

**Recursive definition:** `n! = n × (n-1)!` and `0! = 1`

```javascript
function factorial(n) {
    // write the base case
    // write the recursive case
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
```

**Bonus:** Write the same function using a loop and compare the two versions.

---

## ✅ Section 17 Recap

You now know:
- **Recursion** is a function that calls itself.
- Every recursive function needs a **base case** (stops the recursion) and a **recursive case** (calls itself with a smaller problem).
- Without a base case, recursion is infinite and crashes the program.
- Recursion naturally fits problems that break into identical sub-problems (trees, nested structures, divide-and-conquer).
- For simple repetition, **loops are usually clearer and faster** than recursion.

### Knowledge check

1. What are the two required parts of every recursive function?
2. What happens if you forget the base case?
3. When should you prefer recursion over a loop?

<details>
<summary>Show answers</summary>

1. The base case (stops the recursion) and the recursive case (calls itself with a simpler input).
2. The function calls itself infinitely until the program runs out of memory and crashes with a "Maximum call stack exceeded" error.
3. When the problem has a naturally recursive structure — like trees, nested folders, or divide-and-conquer algorithms. For simple iteration, a loop is usually better.

</details>

---

**Next up → [Section 18: Problem Solving Basics](../Section%2018%20-%20Problem%20Solving%20Basics/README.md)**
Learn how to approach any programming problem — the thinking process that makes everything easier. 🧠
