# Section 7: Constants

> **Introduction to Programming** — Section 7 of 25
> Estimated time: ~20 minutes · Level: Absolute Beginner

Variables can change. But some values in your programs should never change — the number of days in a week, the tax rate, the maximum allowed retries. For these, you use a **constant**. This section explains the difference and when to use each.

---

## Table of Contents

1. [What Is a Constant?](#1-what-is-a-constant)
2. [Variables vs Constants](#2-variables-vs-constants)
3. [When to Use Constants](#3-when-to-use-constants)
4. [Naming Constants](#4-naming-constants)
5. [Real-Life Examples of Constants](#5-real-life-examples-of-constants)
6. [Common Constant Mistakes](#6-common-constant-mistakes)
7. [Practice: Calculate Values Using Constants](#7-practice-calculate-values-using-constants)

---

## 1. What Is a Constant?

A **constant** is like a variable — it stores a named value — but its value **cannot be changed** after it's set.

```javascript
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
const MAX_LOGIN_ATTEMPTS = 3;
```

Once you set a constant, it stays that value for the entire program. If you try to change it, you get an error.

```javascript
const PI = 3.14159;
PI = 3; // ❌ Error: Assignment to constant variable
```

### In different languages

```python
# Python — no built-in constant keyword, but convention uses UPPER_CASE
PI = 3.14159          # treated as a constant by agreement
MAX_RETRIES = 3
```

```java
// Java — uses 'final' keyword
final double PI = 3.14159;
final int DAYS_IN_WEEK = 7;
```

```javascript
// JavaScript — uses 'const'
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
```

```c
// C — uses #define or const
#define PI 3.14159
const int DAYS_IN_WEEK = 7;
```

---

## 2. Variables vs Constants

| | Variable | Constant |
| --- | --- | --- |
| **Keyword (JS)** | `let` | `const` |
| **Value can change?** | Yes | No |
| **Use when** | Value will change during the program | Value will never change |
| **Example** | User's score | Tax rate |

### Side by side

```javascript
// Variable — changes as the game progresses
let playerScore = 0;
playerScore = 10;   // ✅ allowed
playerScore = 25;   // ✅ allowed

// Constant — never changes
const MAX_SCORE = 100;
MAX_SCORE = 200;    // ❌ Error
```

---

## 3. When to Use Constants

Use a constant when:

1. **The value is fixed by definition** — PI is always 3.14159, a week always has 7 days.
2. **The value is a configuration setting** — tax rate, app version, maximum upload size.
3. **The value is used in multiple places** — define it once as a constant so you only need to update it in one place.
4. **Changing the value would be a bug** — if something should never change, make it a constant so the language enforces it.

### The "magic number" problem

```javascript
// Bad — what is 0.15? Why 500? These are "magic numbers"
let tax = price * 0.15;
if (total > 500) { applyDiscount(); }
```

```javascript
// Good — constants give numbers meaning
const TAX_RATE = 0.15;
const DISCOUNT_THRESHOLD = 500;

let tax = price * TAX_RATE;
if (total > DISCOUNT_THRESHOLD) { applyDiscount(); }
```

Now when the tax rate changes, you update it in one place — not scattered through the code.

---

## 4. Naming Constants

By convention, constants are written in **UPPER_SNAKE_CASE** — all uppercase letters with underscores between words.

```javascript
const PI = 3.14159;
const MAX_PASSWORD_LENGTH = 20;
const API_BASE_URL = "https://api.example.com";
const DAYS_IN_WEEK = 7;
const DEFAULT_TIMEOUT_MS = 3000;
```

This convention is used in JavaScript, Python, Java, C, and most other languages. It immediately signals to anyone reading the code: "this value doesn't change."

> 💡 **Why ALL_CAPS?** It's a visual signal. When you see `MAX_RETRIES` vs `maxRetries`, you immediately know the first is a constant. It's a convention agreed on by the programming community, not a language requirement (except in some languages).

---

## 5. Real-Life Examples of Constants

### Math

```javascript
const PI = 3.14159265358979;
const E = 2.71828182845905;   // Euler's number

let circleArea = PI * radius * radius;
```

### E-commerce

```javascript
const TAX_RATE = 0.14;           // 14% VAT
const FREE_SHIPPING_MIN = 200;   // orders over $200 get free shipping
const MAX_CART_ITEMS = 50;

let tax = subtotal * TAX_RATE;
let shipping = subtotal >= FREE_SHIPPING_MIN ? 0 : 15;
```

### Security

```javascript
const MAX_LOGIN_ATTEMPTS = 3;
const SESSION_TIMEOUT_MINUTES = 30;
const MIN_PASSWORD_LENGTH = 8;
```

### Application config

```javascript
const APP_NAME = "MyApp";
const VERSION = "2.4.1";
const SUPPORT_EMAIL = "help@myapp.com";
```

---

## 6. Common Constant Mistakes

### Mistake 1: Trying to reassign a constant

```javascript
const score = 100;
score = 200; // ❌ Error — constants cannot be reassigned
```

Fix: if the value needs to change, use `let` instead of `const`.

### Mistake 2: Using a constant for something that changes

```javascript
const userAge = 25;
// ... later ...
userAge = 26; // ❌ Error — age changes, should be a variable
```

Fix: use `const` only for values that genuinely never change.

### Mistake 3: Not using constants for magic numbers

```javascript
// Magic number — confusing
if (attempts > 3) { lockAccount(); }

// Clear constant
const MAX_ATTEMPTS = 3;
if (attempts > MAX_ATTEMPTS) { lockAccount(); }
```

Always define repeated or meaningful numbers as constants.

---

## 7. Practice: Calculate Values Using Constants

Write a program that uses constants for fixed values and variables for calculated results.

**Task:**
```javascript
// Define these as constants:
// - TAX_RATE = 0.14 (14%)
// - SHIPPING_FEE = 25
// - DISCOUNT_RATE = 0.10 (10% for orders over 500)
// - FREE_SHIPPING_MIN = 500

// Define these as variables (they may change):
// - productName = "Laptop"
// - price = 800
// - quantity = 2

// Calculate:
// - subtotal = price * quantity
// - discount = subtotal * DISCOUNT_RATE (if subtotal > FREE_SHIPPING_MIN, else 0)
// - shipping = 0 (if subtotal >= FREE_SHIPPING_MIN, else SHIPPING_FEE)
// - tax = subtotal * TAX_RATE
// - total = subtotal - discount + tax + shipping

// Display a receipt showing all values
```

**Expected output:**
```
Product: Laptop
Subtotal: 1600
Discount: -160
Shipping: 0
Tax: 224
Total: 1664
```

---

## ✅ Section 7 Recap

You now know:
- A **constant** stores a named value that **cannot change** after it's set.
- Use `const` (JS), `final` (Java), `#define` (C), or UPPER_CASE convention (Python).
- Use constants for: fixed values, config settings, values used in multiple places.
- Use variables (`let`) for values that will change during the program.
- Name constants in **UPPER_SNAKE_CASE** — it's a universal convention.
- Constants prevent "magic numbers" — unnamed values scattered through code.

### Knowledge check

1. What happens if you try to reassign a constant?
2. Name two situations where you should use a constant instead of a variable.
3. Why is `const TAX_RATE = 0.14` better than using `0.14` directly in your calculation?

<details>
<summary>Show answers</summary>

1. You get an error — the language prevents reassignment of constants.
2. Any two of: fixed mathematical values (PI), configuration settings (tax rate, max retries), values used in multiple places, values where change would indicate a bug.
3. It gives the value a name so the code is readable, and if the tax rate changes you only update it in one place instead of hunting through the entire file.

</details>

---

**Next up → [Section 8: Strings](../Section%2008%20-%20Strings/README.md)**
Text is everywhere in programs. Learn all the essential string operations you'll use daily. 📝
