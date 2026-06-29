# Section 15: Functions

> **Introduction to Programming** — Section 15 of 25
> Estimated time: ~45 minutes · Level: Absolute Beginner

Functions are how you organize code into reusable, named blocks. Instead of writing the same logic ten times, you write it once as a function and call it ten times. Functions are the single most important tool for writing clean, maintainable code.

---

## Table of Contents

1. [What Is a Function?](#1-what-is-a-function)
2. [Why Do We Use Functions?](#2-why-do-we-use-functions)
3. [Creating a Function](#3-creating-a-function)
4. [Calling a Function](#4-calling-a-function)
5. [Function Parameters](#5-function-parameters)
6. [Return Values](#6-return-values)
7. [Reusable Logic](#7-reusable-logic)
8. [Function Naming Best Practices](#8-function-naming-best-practices)
9. [Practice: Build Reusable Calculations](#9-practice-build-reusable-calculations)

---

## 1. What Is a Function?

A **function** is a named, reusable block of code that performs a specific task.

### Real-life analogy

A **recipe** is a function. The recipe for "make tea" defines the steps once. Every time you want tea, you follow the same recipe — you don't reinvent the steps.

```
FUNCTION makeTea:
    boil water
    put tea bag in cup
    pour water
    wait 3 minutes
    remove tea bag
    add sugar
```

In programming, you define a function once and can call (run) it as many times as you need, from anywhere in your code.

---

## 2. Why Do We Use Functions?

### Reason 1: Avoid repetition (DRY — Don't Repeat Yourself)

```javascript
// Without functions — repeated logic
let price1 = 100;
let tax1 = price1 * 0.14;
let total1 = price1 + tax1;

let price2 = 250;
let tax2 = price2 * 0.14;
let total2 = price2 + tax2;

// With functions — write once, use anywhere
function calculateTotal(price) {
    let tax = price * 0.14;
    return price + tax;
}

let total1 = calculateTotal(100); // 114
let total2 = calculateTotal(250); // 285
```

### Reason 2: Organize code into logical blocks

Instead of one giant list of 200 lines, you break it into named functions:

```javascript
function getUserInput() { ... }
function validateInput(input) { ... }
function calculateResult(data) { ... }
function displayResult(result) { ... }
```

Each function has one job. The code is easy to read and navigate.

### Reason 3: Easy to fix and update

If the tax rate changes, you update it in **one function** — not in 30 places throughout the code.

---

## 3. Creating a Function

### JavaScript — function declaration

```javascript
function functionName() {
    // code to run
}
```

### Simple example

```javascript
function greet() {
    console.log("Hello, World!");
}
```

This creates the function but **does not run it yet**. Functions are defined first, called later.

### Python

```python
def greet():
    print("Hello, World!")
```

### Java

```java
static void greet() {
    System.out.println("Hello, World!");
}
```

### C

```c
void greet() {
    printf("Hello, World!\n");
}
```

The keyword changes (`function`, `def`, `void`), but the concept is the same: define a named block of code.

---

## 4. Calling a Function

**Calling** a function means telling it to run. You call it by writing its name followed by parentheses `()`.

```javascript
// Define
function greet() {
    console.log("Hello, World!");
}

// Call
greet(); // runs the function
greet(); // runs it again
greet(); // runs it a third time
```

Output:
```
Hello, World!
Hello, World!
Hello, World!
```

One definition, called three times. This is the power of functions.

### Functions must be defined before they're called (in most cases)

```javascript
greet(); // ❌ Error in some languages — greet isn't defined yet

function greet() {
    console.log("Hello!");
}
```

In JavaScript, function declarations are **hoisted** (moved to the top automatically), so this actually works. But it's better practice to define before calling.

---

## 5. Function Parameters

**Parameters** let you pass data into a function so it can work with different values each time.

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Sara");   // "Hello, Sara!"
greet("Omar");   // "Hello, Omar!"
greet("World");  // "Hello, World!"
```

`name` is the **parameter** — it's like a variable that gets its value when the function is called.
`"Sara"` is the **argument** — the actual value passed in.

### Multiple parameters

```javascript
function introduce(name, age, city) {
    console.log(`My name is ${name}, I am ${age} years old, from ${city}.`);
}

introduce("Sara", 28, "Cairo");
introduce("Omar", 32, "Dubai");
```

Output:
```
My name is Sara, I am 28 years old, from Cairo.
My name is Omar, I am 32 years old, from Dubai.
```

### Default parameters

If a value isn't provided, use a default:

```javascript
function greet(name = "stranger") {
    console.log("Hello, " + name + "!");
}

greet("Sara");  // "Hello, Sara!"
greet();        // "Hello, stranger!"  ← default used
```

### Python

```python
def greet(name, age):
    print(f"Hello, {name}! You are {age} years old.")

greet("Sara", 28)
```

---

## 6. Return Values

Functions can **return** a value back to whoever called them. This is how functions produce results.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8
```

The `return` statement:
1. Sends a value back to the caller
2. Immediately **exits** the function (nothing after `return` runs)

### Without return — `undefined`

```javascript
function add(a, b) {
    let sum = a + b; // calculated but not returned
}

let result = add(5, 3);
console.log(result); // undefined — nothing was returned
```

### Return vs console.log

```javascript
// This just prints — can't use the result elsewhere
function addAndPrint(a, b) {
    console.log(a + b);
}

// This returns — you can store and use the result
function add(a, b) {
    return a + b;
}

let total = add(10, 5) * 2; // 30 — can do math with returned value
```

Always use `return` when the function produces a result that needs to be used elsewhere.

### Multiple return points

```javascript
function grade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F"; // if none of the above matched
}

console.log(grade(85)); // "B"
console.log(grade(55)); // "F"
```

As soon as a `return` is hit, the function stops. This is clean and readable.

---

## 7. Reusable Logic

Functions shine when the same logic needs to run in multiple places.

### Example: price calculator

```javascript
function applyDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    return price - discount;
}

function addTax(price, taxRate) {
    return price + (price * taxRate);
}

function calculateFinalPrice(basePrice) {
    const TAX_RATE = 0.14;
    const DISCOUNT = 10; // 10%

    let discounted = applyDiscount(basePrice, DISCOUNT);
    let withTax = addTax(discounted, TAX_RATE);
    return withTax.toFixed(2);
}

console.log(calculateFinalPrice(100)); // "102.60"
console.log(calculateFinalPrice(500)); // "513.00"
```

Each function does one specific job. They can be combined, tested, and updated independently.

### Functions calling functions

```javascript
function square(n) {
    return n * n;
}

function sumOfSquares(a, b) {
    return square(a) + square(b); // function calls another function
}

console.log(sumOfSquares(3, 4)); // 9 + 16 = 25
```

---

## 8. Function Naming Best Practices

Good function names make code read like plain English.

### Use verbs — functions do things

```javascript
// ❌ Bad — nouns
function username() { }
function data() { }
function result() { }

// ✅ Good — verbs
function getUsername() { }
function fetchData() { }
function calculateResult() { }
```

### Be specific

```javascript
// ❌ Vague
function process() { }

// ✅ Specific
function calculateMonthlyPayment() { }
function validateEmailFormat() { }
function formatCurrency(amount) { }
```

### Common verb prefixes

| Prefix | Use for |
| --- | --- |
| `get` | Retrieve a value |
| `set` | Store a value |
| `calculate` | Perform math |
| `validate` | Check if something is valid |
| `format` | Convert to display format |
| `is` / `has` | Return a boolean (`isAdult`, `hasPermission`) |
| `display` / `show` | Output something |

---

## 9. Practice: Build Reusable Calculations

Write functions for a simple store checkout system.

```javascript
// Write these functions:

// 1. calculateSubtotal(price, quantity)
//    Returns: price * quantity

// 2. applyDiscount(amount, discountPercent)
//    Returns: amount minus the discount
//    Example: applyDiscount(200, 10) → 180

// 3. calculateTax(amount, taxRate)
//    Returns: amount * taxRate
//    Example: calculateTax(180, 0.14) → 25.2

// 4. calculateTotal(price, quantity, discountPercent, taxRate)
//    Uses the three functions above
//    Returns: final total after discount and tax

// 5. displayReceipt(productName, price, quantity, discountPercent, taxRate)
//    Calls calculateTotal and displays a formatted receipt

// Test with:
displayReceipt("Laptop", 1200, 1, 5, 0.14);
displayReceipt("Headphones", 150, 2, 10, 0.14);

// Expected output for Laptop:
// ========================
// Product:   Laptop
// Price:     $1200.00
// Quantity:  1
// Discount:  -$60.00 (5%)
// Tax:       $159.60 (14%)
// Total:     $1299.60
// ========================
```

---

## ✅ Section 15 Recap

You now know:
- A **function** is a named, reusable block of code that performs a specific task.
- **Create** a function with `function name() { }` (JS), `def name():` (Python).
- **Call** a function by writing its name with `()`.
- **Parameters** let you pass values into a function.
- **Return** sends a value back to the caller — functions without return give `undefined`.
- Functions can call other functions — build complex logic from simple pieces.
- Name functions with **verbs** and be specific: `calculateTotal`, not `stuff`.

### Knowledge check

1. What is the difference between a parameter and an argument?
2. What does `return` do?
3. If a function has no `return` statement, what does it return?

<details>
<summary>Show answers</summary>

1. A parameter is the variable name in the function definition (e.g., `name` in `function greet(name)`). An argument is the actual value passed when calling the function (e.g., `"Sara"` in `greet("Sara")`).
2. `return` sends a value back to the caller and immediately exits the function.
3. It returns `undefined` — the language's way of saying "nothing was returned."

</details>

---

**Next up → [Section 16: Scope](../Section%2016%20-%20Scope/README.md)**
Learn where variables live and why the same name can mean different things in different places. 🗺️
