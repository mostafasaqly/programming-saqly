# Section 6: Data Types

> **Introduction to Programming** — Section 6 of 25
> Estimated time: ~35 minutes · Level: Absolute Beginner

Not all data is the same. The number `25`, the text `"Sara"`, and the value `true` are fundamentally different kinds of information. Programming languages categorize data into **types** — and knowing the difference is essential for writing correct programs.

---

## Table of Contents

1. [What Are Data Types?](#1-what-are-data-types)
2. [Numbers](#2-numbers)
3. [Strings](#3-strings)
4. [Booleans](#4-booleans)
5. [Arrays and Collections (Quick Overview)](#5-arrays-and-collections-quick-overview)
6. [Null and Undefined Values](#6-null-and-undefined-values)
7. [Dynamic vs Static Typing (Gentle Intro)](#7-dynamic-vs-static-typing-gentle-intro)
8. [Choosing the Right Data Type](#8-choosing-the-right-data-type)
9. [Practice: Identify Data Types](#9-practice-identify-data-types)

---

## 1. What Are Data Types?

A **data type** is a classification that tells the computer what kind of value a variable holds — and what you can do with it.

### Why it matters

You can add two numbers: `5 + 3 = 8`.
You can join two pieces of text: `"Hello" + "Sara" = "HelloSara"`.
But what happens if you add a number and text? It depends on the language — and it's often surprising.

Data types exist so the computer knows **how to store** the value and **what operations are valid** on it.

### The core types (exist in almost every language)

| Type | Example values | Represents |
| --- | --- | --- |
| **Number** | `25`, `3.14`, `-10` | Numeric values |
| **String** | `"Sara"`, `"Hello"` | Text |
| **Boolean** | `true`, `false` | Yes/no, on/off |
| **Array** | `[1, 2, 3]` | Ordered list of values |
| **Null / Undefined** | `null`, `undefined` | The absence of a value |

---

## 2. Numbers

Numbers are exactly what they sound like — numeric values. Most languages have two kinds:

### Integers (whole numbers)

```javascript
let age = 25;
let score = -10;
let year = 2024;
```

### Floating-point numbers (decimals)

```javascript
let price = 19.99;
let temperature = 36.6;
let pi = 3.14159;
```

### What you can do with numbers

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 — addition
console.log(a - b);  // 7  — subtraction
console.log(a * b);  // 30 — multiplication
console.log(a / b);  // 3.333... — division
console.log(a % b);  // 1  — remainder (modulo)
```

### A common trap: numbers vs number-strings

```javascript
let x = 5;        // a number
let y = "5";      // a string that looks like a number

console.log(x + 1);  // 6   (number arithmetic)
console.log(y + 1);  // "51" (string joined with 1 — not what you expected!)
```

This is one of the most common beginner mistakes. We'll cover how to convert between them in Section 10.

---

## 3. Strings

A **string** is a sequence of characters — any text. Strings are wrapped in quotes.

```javascript
let name = "Sara";
let city = 'Cairo';       // single quotes work too
let message = "Hello!";
let empty = "";            // an empty string (no characters)
```

### What you can do with strings

```javascript
let firstName = "Sara";
let lastName = "Ahmed";

// Joining (concatenation)
let fullName = firstName + " " + lastName;
console.log(fullName); // "Sara Ahmed"

// Length
console.log(firstName.length); // 4

// Accessing a character (by position, starting from 0)
console.log(firstName[0]); // "S"
console.log(firstName[1]); // "a"
```

### Strings are not numbers

```javascript
let a = "10";
let b = "5";
console.log(a + b); // "105" — joined as text, not added as numbers
```

Even though `"10"` and `"5"` look like numbers, they're strings. The `+` operator joins them instead of adding.

---

## 4. Booleans

A **boolean** has exactly two possible values: `true` or `false`. Named after mathematician George Boole.

```javascript
let isLoggedIn = true;
let hasPaid = false;
let isOver18 = true;
let isEmailVerified = false;
```

### Where booleans come from

Booleans are often the result of comparisons:

```javascript
let age = 20;
let isAdult = age >= 18;   // true (because 20 is greater than or equal to 18)

let score = 45;
let isPassing = score >= 50; // false (45 is not >= 50)
```

### Why booleans are essential

Booleans power all decision-making in programs. Every `if` statement depends on a boolean value:

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}
```

Without booleans, programs could not make decisions.

---

## 5. Arrays and Collections (Quick Overview)

An **array** is an ordered list of values. Instead of creating separate variables for each item, you group them in one place.

```javascript
// Without an array — messy
let student1 = "Sara";
let student2 = "Omar";
let student3 = "Ali";

// With an array — clean
let students = ["Sara", "Omar", "Ali"];
```

### Accessing items

Items in an array are numbered starting from **0** (called the index):

```javascript
let students = ["Sara", "Omar", "Ali"];
console.log(students[0]); // "Sara"
console.log(students[1]); // "Omar"
console.log(students[2]); // "Ali"
```

Arrays are covered in depth in Section 13. This is just a preview so you know the type exists.

---

## 6. Null and Undefined Values

These two special values represent the **absence** of a value.

### `null` — intentionally empty

`null` means "this variable exists, but it has no value on purpose."

```javascript
let selectedProduct = null; // no product selected yet
```

It's like an empty box with a label. The box exists, but nothing is in it.

### `undefined` — not yet assigned

`undefined` means "this variable was declared but never given a value."

```javascript
let userName;
console.log(userName); // undefined
```

### The difference

| | `null` | `undefined` |
| --- | --- | --- |
| **Meaning** | Intentionally empty | Not yet set |
| **Set by** | You (the programmer) | The language (automatically) |
| **Use when** | You want to clear a value | Rarely — usually a sign something wasn't initialized |

---

## 7. Dynamic vs Static Typing (Gentle Intro)

Different languages handle types differently. This is a key distinction between them.

### Static typing

You must declare the type of a variable when you create it, and it **cannot change**.

```java
// Java — statically typed
int age = 25;       // age is always an integer
age = "Sara";       // ❌ Error — can't store text in an int variable
```

**Languages:** Java, C, C++, Go, Rust, TypeScript.

**Benefit:** The compiler catches type mismatches before the program runs — fewer runtime surprises.

### Dynamic typing

The type is determined **automatically** when you assign a value, and it **can change**.

```python
# Python — dynamically typed
age = 25          # age is a number
age = "Sara"      # now age is a string — this is allowed
```

```javascript
// JavaScript — dynamically typed
let value = 42;        // number
value = "hello";       // string — allowed
value = true;          // boolean — allowed
```

**Languages:** Python, JavaScript, Ruby, PHP.

**Benefit:** More flexible and faster to write. **Risk:** Type errors only appear when the program runs.

> 💡 **As a beginner:** Don't worry too much about this yet. Just know the concept exists. You'll feel the difference naturally as you write more code.

---

## 8. Choosing the Right Data Type

Picking the right type is part of good programming. Here's a guide:

| Data | Use this type | Reason |
| --- | --- | --- |
| Someone's name | String | It's text |
| Age | Integer (number) | Whole number |
| Price | Float (number) | Needs decimal places |
| Is subscribed? | Boolean | Yes or no |
| List of items | Array | Multiple values |
| Empty/not selected | Null | Intentional absence |
| Phone number | String | Needs leading zeros, no math |

### Common mistake: phone numbers as numbers

```javascript
let phone = 0501234567;   // ❌ Bad — loses leading zero, can't do arithmetic on it
let phone = "0501234567"; // ✅ Good — stores it as text, keeps the format
```

Phone numbers look like numbers but should be strings. You never add or multiply phone numbers — you display and compare them.

---

## 9. Practice: Identify Data Types

For each value below, identify the correct data type (Number, String, Boolean, Array, Null):

1. `"Hello, World!"`
2. `42`
3. `true`
4. `3.14`
5. `["red", "green", "blue"]`
6. `null`
7. `"25"` ← careful, look at the quotes
8. `false`
9. `0`
10. `""`

**Then write code:** Create one variable of each type (Number, String, Boolean, Array) and print them all.

<details>
<summary>Show answers for identification</summary>

1. String (has quotes)
2. Number (integer)
3. Boolean
4. Number (float)
5. Array
6. Null
7. String (has quotes — even though it looks like a number)
8. Boolean
9. Number (zero is still a number)
10. String (empty string — still a string type)

</details>

---

## ✅ Section 6 Recap

You now know:
- A **data type** tells the computer what kind of value is stored and what operations are valid.
- **Numbers** — integers and floats — for any numeric value.
- **Strings** — text wrapped in quotes — for names, messages, any text.
- **Booleans** — `true` or `false` — power all decision-making in programs.
- **Arrays** — ordered lists of values (covered in depth in Section 13).
- **Null** = intentionally empty; **undefined** = not yet set.
- **Static typing** declares types explicitly; **dynamic typing** figures them out automatically.
- Choosing the right type (e.g., phone number as string, not number) matters.

### Knowledge check

1. What is the difference between `25` and `"25"`?
2. When would you use a boolean?
3. What is the difference between `null` and `undefined`?

<details>
<summary>Show answers</summary>

1. `25` is a number — you can do arithmetic on it. `"25"` is a string — it's treated as text. Adding `"25" + 1` gives `"251"`, not `26`.
2. When you need to represent a yes/no, true/false, on/off condition — like `isLoggedIn`, `hasPaid`, `isActive`.
3. `null` is intentionally empty (set by you). `undefined` means the variable was declared but never assigned a value (set automatically by the language).

</details>

---

**Next up → [Section 7: Constants](../Section%2007%20-%20Constants/README.md)**
Some values should never change. Learn when and why to use constants instead of variables. 🔒
