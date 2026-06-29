# Section 5: Variables

> **Introduction to Programming** — Section 5 of 25
> Estimated time: ~35 minutes · Level: Absolute Beginner

Variables are the most fundamental building block in all of programming. Every program you will ever write uses them. This section explains what they are, how to create them, and how to use them well.

---

## Table of Contents

1. [What Is Data?](#1-what-is-data)
2. [What Is a Variable?](#2-what-is-a-variable)
3. [Why Do We Use Variables?](#3-why-do-we-use-variables)
4. [Creating Variables](#4-creating-variables)
5. [Naming Variables](#5-naming-variables)
6. [Changing Variable Values](#6-changing-variable-values)
7. [Variables in Real-Life Examples](#7-variables-in-real-life-examples)
8. [Common Variable Mistakes](#8-common-variable-mistakes)
9. [Practice: Store and Display User Data](#9-practice-store-and-display-user-data)

---

## 1. What Is Data?

**Data** is any piece of information. In programming, data is anything a program needs to work with.

Examples of data:
- A person's name: `"Sara"`
- Someone's age: `25`
- A product price: `19.99`
- Whether a user is logged in: `true`
- A list of students: `["Sara", "Omar", "Ali"]`

Programs receive data, process data, and produce data as output. Everything a program does revolves around data.

---

## 2. What Is a Variable?

A **variable** is a named container that stores a piece of data.

### Real-life analogy

Imagine a labeled box. You write "AGE" on the outside of the box and put the number 25 inside. Later, you can look at the label "AGE" to find out the number inside — and you can replace the number if it changes.

```
┌─────────────┐
│     AGE     │  ← the label (the variable name)
│─────────────│
│     25      │  ← the value stored inside
└─────────────┘
```

In programming, a variable is that box — a label pointing to a stored value.

### In code

```javascript
let age = 25;
```

- `let` — tells the computer: "I'm creating a variable"
- `age` — the name (the label on the box)
- `=` — means "store this value in that variable" (not "equals" in the math sense)
- `25` — the value being stored

Once you create this variable, you can use the name `age` anywhere in your program and the computer knows it means `25`.

```javascript
console.log(age); // prints: 25
```

---

## 3. Why Do We Use Variables?

### Reason 1: Avoid repeating yourself

Without variables:
```javascript
console.log("Hello, Sara!");
console.log("Sara has logged in.");
console.log("Welcome back, Sara.");
```

If the name changes, you must find and update every single line. With a variable:

```javascript
let name = "Sara";
console.log("Hello, " + name + "!");
console.log(name + " has logged in.");
console.log("Welcome back, " + name + ".");
```

Now you only update one place — the variable.

### Reason 2: Store results of calculations

```javascript
let price = 50;
let quantity = 3;
let total = price * quantity; // 150
console.log(total);
```

Without the `total` variable, you'd have to recalculate every time you need it.

### Reason 3: Make code readable

```javascript
// Hard to read
if (temperature > 37.5) { ... }

// Easy to read
let bodyTemperature = 37.5;
let feverThreshold = 37.5;
if (bodyTemperature > feverThreshold) { ... }
```

A named variable tells you *what* the value represents, not just what it is.

---

## 4. Creating Variables

Different languages use slightly different syntax, but the idea is identical.

### JavaScript

```javascript
let name = "Sara";      // text
let age = 25;           // whole number
let height = 1.75;      // decimal number
let isStudent = true;   // true or false
```

### Python

```python
name = "Sara"       # no keyword needed
age = 25
height = 1.75
is_student = True
```

### Java

```java
String name = "Sara";    // must declare the type
int age = 25;
double height = 1.75;
boolean isStudent = true;
```

### C

```c
char name[] = "Sara";
int age = 25;
float height = 1.75;
int isStudent = 1;   // C uses 1 for true, 0 for false
```

Notice the pattern in all of them: **name = value**. The language keyword and type syntax differ, but the concept is always the same.

---

## 5. Naming Variables

Naming is one of the most important skills in programming. Good names make code readable. Bad names make it a mystery.

### Rules (must follow — these are enforced by the language)

- Names can contain letters, numbers, and underscores `_`
- Names **cannot** start with a number
- Names **cannot** contain spaces
- Names **cannot** be reserved words (`if`, `while`, `let`, etc.)

```javascript
let name = "Sara";       // ✅ valid
let age25 = 25;          // ✅ valid (number not at start)
let user_name = "Sara";  // ✅ valid
let 25age = 25;          // ❌ invalid — starts with number
let user name = "Sara";  // ❌ invalid — contains space
let if = "Sara";         // ❌ invalid — reserved word
```

### Conventions (best practice — not enforced, but important)

**camelCase** — most common in JavaScript:
```javascript
let firstName = "Sara";
let totalPrice = 150;
let isLoggedIn = true;
```

**snake_case** — most common in Python:
```python
first_name = "Sara"
total_price = 150
is_logged_in = True
```

**PascalCase** — used for class names in many languages:
```javascript
class UserAccount { ... }
```

### Good vs bad names

| Bad | Good | Why |
| --- | --- | --- |
| `x` | `age` | Describes what it stores |
| `n` | `userName` | Self-explanatory |
| `data` | `productPrice` | Specific, not vague |
| `temp` | `temperatureCelsius` | Clear unit and meaning |
| `flag` | `isEmailVerified` | Obvious true/false meaning |

> 💡 **Rule:** Name your variable so that someone reading the code for the first time immediately knows what it holds.

---

## 6. Changing Variable Values

The "variable" in "variable" means it *varies* — you can change the value stored in it.

```javascript
let score = 0;
console.log(score); // 0

score = 10;
console.log(score); // 10

score = 25;
console.log(score); // 25
```

The variable `score` holds different values at different points in the program. The most recent assignment is always the current value.

### The assignment operator

`=` in programming means **"store this value in this variable"**, not "is equal to".

```javascript
let x = 5;
x = x + 1; // take the current value of x (5), add 1, store back in x
console.log(x); // 6
```

This line would be nonsense in math (`x = x + 1` has no solution), but in programming it's very common — it means "increment x by 1".

---

## 7. Variables in Real-Life Examples

### Example 1: User profile

```javascript
let firstName = "Sara";
let lastName = "Ahmed";
let age = 28;
let email = "sara@example.com";
let isPremiumMember = true;

console.log("Name: " + firstName + " " + lastName);
console.log("Age: " + age);
console.log("Email: " + email);
console.log("Premium: " + isPremiumMember);
```

Output:
```
Name: Sara Ahmed
Age: 28
Email: sara@example.com
Premium: true
```

### Example 2: Shopping cart

```javascript
let productName = "Laptop";
let price = 999;
let quantity = 2;
let discount = 0.1;             // 10% discount

let subtotal = price * quantity;        // 1998
let discountAmount = subtotal * discount; // 199.8
let total = subtotal - discountAmount;  // 1798.2

console.log("Product: " + productName);
console.log("Total: " + total);
```

---

## 8. Common Variable Mistakes

### Mistake 1: Using a variable before creating it

```javascript
console.log(name); // ❌ Error: name is not defined
let name = "Sara";
```

Fix: always declare the variable before using it.

### Mistake 2: Typo in the variable name

```javascript
let userName = "Sara";
console.log(username); // ❌ Error: username is not defined
```

Fix: variable names are case-sensitive. `userName` and `username` are different variables.

### Mistake 3: Forgetting that `=` means assignment, not equality

```javascript
let x = 5;
x = 10; // This doesn't compare x to 10 — it replaces the value with 10
```

Use `==` or `===` for comparison (covered in Section 9).

### Mistake 4: Using a reserved word as a name

```javascript
let if = "test";    // ❌ SyntaxError
let return = 5;     // ❌ SyntaxError
```

---

## 9. Practice: Store and Display User Data

Create variables to store the following information and then display it:

**Your task:**
```javascript
// 1. Create a variable for your first name
// 2. Create a variable for your last name
// 3. Create a variable for your age
// 4. Create a variable for your city
// 5. Create a variable for whether you are a student (true/false)

// 6. Display all five values using console.log
// 7. Then change your age to a different value and display it again
```

**Expected output format:**
```
First name: Sara
Last name: Ahmed
Age: 25
City: Cairo
Student: true
Updated age: 26
```

---

## ✅ Section 5 Recap

You now know:
- **Data** is any piece of information a program works with.
- A **variable** is a named container that stores a value.
- Variables let you **avoid repetition**, store calculation results, and make code readable.
- **Creating** a variable: `let name = value;` (syntax varies by language, concept is the same).
- **Naming rules**: no spaces, no starting with numbers, no reserved words.
- **Naming conventions**: use camelCase (JS) or snake_case (Python), be descriptive.
- Variables can **change** — the `=` operator stores a new value.
- Common mistakes: using before creating, typos, confusing `=` with equality.

### Knowledge check

1. What is a variable in plain words?
2. Why is `x` a bad variable name compared to `totalPrice`?
3. What does `score = score + 1` do?

<details>
<summary>Show answers</summary>

1. A variable is a named container that stores a piece of data — like a labeled box holding a value.
2. `x` gives no information about what the variable stores. `totalPrice` immediately tells you it represents a price total.
3. It reads the current value of `score`, adds 1 to it, and stores the result back in `score`. If score was 5, it becomes 6.

</details>

---

**Next up → [Section 6: Data Types](../Section%2006%20-%20Data%20Types/README.md)**
Not all data is the same — numbers, text, and true/false are fundamentally different. Learn why it matters. 🔢
