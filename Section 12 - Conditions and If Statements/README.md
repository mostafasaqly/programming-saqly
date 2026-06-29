# Section 12: Conditions and If Statements

> **Introduction to Programming** — Section 12 of 25
> Estimated time: ~40 minutes · Level: Absolute Beginner

Decision-making is what separates programs from simple calculators. With conditions, a program can choose different paths based on data. This is where programs start feeling truly intelligent — even though they're just following very precise rules.

---

## Table of Contents

1. [What Is Decision Making in Programming?](#1-what-is-decision-making-in-programming)
2. [The `if` Statement](#2-the-if-statement)
3. [The `else` Statement](#3-the-else-statement)
4. [The `else if` Statement](#4-the-else-if-statement)
5. [Nested Conditions](#5-nested-conditions)
6. [Conditions with Comparison Operators](#6-conditions-with-comparison-operators)
7. [Conditions with Logical Operators](#7-conditions-with-logical-operators)
8. [Truthy and Falsy Values](#8-truthy-and-falsy-values)
9. [Practice: Grade Calculator](#9-practice-grade-calculator)

---

## 1. What Is Decision Making in Programming?

In real life, you make decisions constantly:

> "If it's raining, take an umbrella. Otherwise, wear sunglasses."

Programs do the same thing — they check a condition and run different code depending on whether it's true or false.

```
IF condition is true:
    do this
ELSE:
    do that
```

This is the most fundamental control structure in programming. Every meaningful program uses it.

---

## 2. The `if` Statement

The `if` statement runs a block of code **only if** a condition is `true`.

### Syntax

```javascript
if (condition) {
    // code that runs only when condition is true
}
```

### Example

```javascript
let temperature = 35;

if (temperature > 30) {
    console.log("It's hot today!");
}
// Output: "It's hot today!"
```

If `temperature` were `25`, nothing would print — the block is skipped.

### In Python

```python
temperature = 35

if temperature > 30:
    print("It's hot today!")
```

Notice Python uses `:` and indentation instead of `{}`. The idea is identical.

### The condition must be a boolean

The condition inside `if ()` must evaluate to `true` or `false`.

```javascript
if (true) { console.log("Always runs"); }
if (false) { console.log("Never runs"); }
if (10 > 5) { console.log("10 is greater than 5"); }   // true
if (3 > 100) { console.log("This won't run"); }         // false
```

---

## 3. The `else` Statement

`else` provides the **alternative** path — the code that runs when the `if` condition is false.

```javascript
if (condition) {
    // runs when true
} else {
    // runs when false
}
```

### Example

```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}
// Output: "You cannot vote yet."
```

Exactly one of the two blocks always runs. Never both. Never neither.

### Python

```python
age = 15

if age >= 18:
    print("You can vote.")
else:
    print("You cannot vote yet.")
```

---

## 4. The `else if` Statement

When there are more than two possible outcomes, use `else if` to check multiple conditions in sequence.

```javascript
if (first condition) {
    // runs if first is true
} else if (second condition) {
    // runs if first is false AND second is true
} else if (third condition) {
    // runs if first and second are false AND third is true
} else {
    // runs if ALL conditions above are false
}
```

### Example: grade system

```javascript
let score = 72;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: "Grade: C"
```

The computer checks conditions top to bottom. As soon as one is true, it runs that block and skips the rest.

### Python

```python
score = 72

if score >= 90:
    print("Grade: A")
elif score >= 80:       # Note: Python uses 'elif', not 'else if'
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
```

---

## 5. Nested Conditions

You can put an `if` statement inside another `if` statement. This is called **nesting**.

```javascript
if (outer condition) {
    if (inner condition) {
        // runs when BOTH outer AND inner are true
    }
}
```

### Example: access control

```javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Welcome back!");

    if (isAdmin) {
        console.log("You have admin access.");
    } else {
        console.log("You have standard access.");
    }
} else {
    console.log("Please log in.");
}
// Output:
// "Welcome back!"
// "You have standard access."
```

### When to use nesting vs `&&`

Sometimes nesting can be replaced with logical operators:

```javascript
// Nested
if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin panel");
    }
}

// Equivalent using &&
if (isLoggedIn && isAdmin) {
    console.log("Admin panel");
}
```

Use whichever is more readable. Avoid nesting more than 2-3 levels deep — it becomes hard to follow.

---

## 6. Conditions with Comparison Operators

Comparison operators (from Section 9) are the building blocks of conditions.

```javascript
let price = 150;
let budget = 200;

if (price <= budget) {
    console.log("You can afford it.");
}

if (price === 150) {
    console.log("Exact match!");
}

if (price !== 100) {
    console.log("Price is not 100.");
}
```

### Practical examples

```javascript
// Login check
if (username === "admin" && password === "secret") {
    console.log("Login successful!");
}

// Age check
let age = Number(prompt("Enter your age:"));
if (age >= 0 && age <= 120) {
    console.log("Valid age");
} else {
    console.log("Invalid age");
}

// Range check
let temperature = 22;
if (temperature >= 20 && temperature <= 25) {
    console.log("Comfortable temperature");
}
```

---

## 7. Conditions with Logical Operators

You already saw `&&` and `||` in Section 9. Here they are in realistic conditions:

### AND (`&&`) — all conditions must be true

```javascript
let hasTicket = true;
let isOver18 = true;
let isOnGuestList = false;

// Must have ticket AND be over 18
if (hasTicket && isOver18) {
    console.log("Entry granted!");
}
```

### OR (`||`) — at least one must be true

```javascript
let isMember = false;
let hasCoupon = true;

// Either is enough for a discount
if (isMember || hasCoupon) {
    console.log("Discount applied!");
}
```

### NOT (`!`) — flip the condition

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in to continue.");
}
```

### Combining all three

```javascript
let age = 22;
let hasID = true;
let isBanned = false;

// (Must be 18+ AND have ID) AND NOT banned
if ((age >= 18 && hasID) && !isBanned) {
    console.log("Welcome!");
} else {
    console.log("Access denied.");
}
```

---

## 8. Truthy and Falsy Values

In JavaScript (and many dynamic languages), `if` doesn't need an explicit `true`/`false` — any value can be used as a condition. The language converts it to boolean automatically.

**Falsy values** — treated as `false`:
```javascript
if (0)         { /* skipped */ }
if ("")        { /* skipped */ }
if (null)      { /* skipped */ }
if (undefined) { /* skipped */ }
if (NaN)       { /* skipped */ }
```

**Truthy values** — treated as `true`:
```javascript
if (1)         { /* runs */ }
if ("hello")   { /* runs */ }
if ([])        { /* runs */ }  // empty array is truthy!
if ({})        { /* runs */ }  // empty object is truthy!
```

### Practical use

```javascript
let username = "";
if (username) {
    console.log("Hello, " + username);
} else {
    console.log("Please enter a username"); // runs — empty string is falsy
}

let items = [1, 2, 3];
if (items.length) {  // 3 is truthy
    console.log("Cart has items");
}
```

---

## 9. Practice: Grade Calculator

Build a grade calculator that takes a score and outputs a letter grade and a message.

**Requirements:**
- Score 90-100: Grade A — "Excellent!"
- Score 80-89: Grade B — "Very Good"
- Score 70-79: Grade C — "Good"
- Score 60-69: Grade D — "Needs Improvement"
- Score 0-59: Grade F — "Failed"
- Score below 0 or above 100: "Invalid score"

```javascript
let score = Number(prompt("Enter your score (0-100):"));

// Write your if / else if / else chain here
// Validate first, then determine grade, then display result

// Expected output for score = 85:
// Grade: B
// Result: Very Good

// Expected output for score = 150:
// Invalid score entered
```

**Bonus challenge:** After displaying the grade, also display:
- Whether the student passed (score >= 60)
- How many points away from the next grade they are

---

## ✅ Section 12 Recap

You now know:
- **`if`** — runs code only when a condition is true.
- **`else`** — runs code when the `if` condition is false.
- **`else if`** — checks additional conditions when previous ones are false.
- **Nested conditions** — an `if` inside another `if`.
- Conditions use **comparison operators** (`===`, `>`, `<`, etc.) and **logical operators** (`&&`, `||`, `!`).
- **Truthy/falsy**: in dynamic languages, any value can be used as a condition.

### Knowledge check

1. What is the difference between `if` and `else if`?
2. If a condition is `false`, which block runs — the `if` block or the `else` block?
3. Can you put an `if` statement inside another `if`? What is it called?

<details>
<summary>Show answers</summary>

1. `if` starts a decision chain and is always checked. `else if` is only checked if the previous `if` (or `else if`) was false. You can chain as many `else if` as you need.
2. The `else` block — if the `if` condition is false and there's an `else`, the `else` code runs.
3. Yes — it's called a nested condition. Use it when an inner decision only makes sense after an outer condition is confirmed true.

</details>

---

**Next up → [Section 13: Arrays](../Section%2013%20-%20Arrays/README.md)**
Store and manage collections of data — the foundation of working with lists of anything. 📋
