# Section 9: Operators

> **Introduction to Programming** — Section 9 of 25
> Estimated time: ~40 minutes · Level: Absolute Beginner

Operators are the symbols that let you perform actions on values — calculate, compare, assign, combine. You already used some (like `+` and `=`). This section covers all the essential operator types with clear examples.

---

## Table of Contents

1. [What Are Operators?](#1-what-are-operators)
2. [Arithmetic Operators](#2-arithmetic-operators)
3. [Assignment Operators](#3-assignment-operators)
4. [Comparison Operators](#4-comparison-operators)
5. [Logical Operators](#5-logical-operators)
6. [Bitwise Operators (Overview — Optional)](#6-bitwise-operators-overview--optional)
7. [Operator Precedence](#7-operator-precedence)
8. [Common Operator Mistakes](#8-common-operator-mistakes)
9. [Practice: Build a Simple Calculator](#9-practice-build-a-simple-calculator)

---

## 1. What Are Operators?

An **operator** is a symbol that performs an operation on one or more values.

```javascript
5 + 3    // + is the operator, 5 and 3 are the operands, result is 8
x > 10   // > is the operator, result is true or false
a && b   // && is the operator, result is true or false
```

The values an operator acts on are called **operands**.

---

## 2. Arithmetic Operators

Arithmetic operators perform math calculations.

| Operator | Name | Example | Result |
| --- | --- | --- | --- |
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `15 / 4` | `3.75` |
| `%` | Modulo (remainder) | `15 % 4` | `3` |
| `**` | Exponentiation | `2 ** 8` | `256` |

### Examples

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333...
console.log(a % b);  // 1 (10 divided by 3 = 3 remainder 1)
console.log(a ** 2); // 100 (10 squared)
```

### The modulo operator (%)

Modulo gives you the **remainder** after division. It's more useful than it looks:

```javascript
// Is a number even or odd?
console.log(8 % 2);  // 0 — even (no remainder)
console.log(7 % 2);  // 1 — odd (remainder of 1)

// What minute within an hour? (seconds → minutes)
let totalSeconds = 130;
let minutes = Math.floor(totalSeconds / 60); // 2
let seconds = totalSeconds % 60;             // 10
console.log(`${minutes}m ${seconds}s`);      // "2m 10s"
```

### Integer division

In some languages, dividing two integers gives an integer (truncates the decimal):

```python
# Python 3
print(15 / 4)   # 3.75  ← regular division
print(15 // 4)  # 3     ← floor division (drops the decimal)
```

---

## 3. Assignment Operators

Assignment operators store values in variables. You've seen `=` — but there are shortcuts for common operations.

| Operator | Meaning | Example | Equivalent to |
| --- | --- | --- | --- |
| `=` | Assign | `x = 5` | — |
| `+=` | Add and assign | `x += 3` | `x = x + 3` |
| `-=` | Subtract and assign | `x -= 2` | `x = x - 2` |
| `*=` | Multiply and assign | `x *= 4` | `x = x * 4` |
| `/=` | Divide and assign | `x /= 2` | `x = x / 2` |
| `%=` | Modulo and assign | `x %= 3` | `x = x % 3` |

### Examples

```javascript
let score = 10;

score += 5;  // score is now 15
score -= 3;  // score is now 12
score *= 2;  // score is now 24
score /= 4;  // score is now 6

console.log(score); // 6
```

### Increment and decrement

Two very common shortcuts:

```javascript
let count = 0;
count++;  // count is now 1 (increment by 1)
count++;  // count is now 2
count--;  // count is now 1 (decrement by 1)
```

`count++` is shorthand for `count = count + 1`. You'll see this constantly in loops.

---

## 4. Comparison Operators

Comparison operators compare two values and always return a **boolean** (`true` or `false`).

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `==` | Equal to (loose) | `5 == "5"` | `true` |
| `===` | Equal to (strict) | `5 === "5"` | `false` |
| `!=` | Not equal (loose) | `5 != 3` | `true` |
| `!==` | Not equal (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 1` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

### Strict vs loose equality (JavaScript)

In JavaScript, `==` converts types before comparing (loose). `===` does not (strict).

```javascript
console.log(5 == "5");   // true  — "5" is converted to 5 before comparing
console.log(5 === "5");  // false — different types, so not equal
```

> 💡 **Best practice:** Always use `===` (strict equality) in JavaScript. It avoids hard-to-find bugs caused by unexpected type conversion.

In Python, Java, and C — there is no `===`. The `==` operator already checks type and value.

### Comparison results are booleans

```javascript
let age = 20;
let isAdult = age >= 18;    // true
let isChild = age < 12;     // false
let isExact20 = age === 20; // true
```

---

## 5. Logical Operators

Logical operators combine multiple boolean conditions.

| Operator | Name | Returns true when… |
| --- | --- | --- |
| `&&` | AND | **Both** conditions are true |
| `\|\|` | OR | **At least one** condition is true |
| `!` | NOT | The condition is **false** (flips the value) |

### AND (`&&`)

```javascript
let age = 25;
let hasID = true;

// Both must be true to enter
let canEnter = age >= 18 && hasID;
console.log(canEnter); // true
```

Truth table for AND:

| A | B | A && B |
| --- | --- | --- |
| true | true | **true** |
| true | false | false |
| false | true | false |
| false | false | false |

### OR (`||`)

```javascript
let isMember = false;
let hasCoupon = true;

// Either is enough to get a discount
let getsDiscount = isMember || hasCoupon;
console.log(getsDiscount); // true
```

Truth table for OR:

| A | B | A \|\| B |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | **false** |

### NOT (`!`)

```javascript
let isLoggedIn = false;
let isGuest = !isLoggedIn;
console.log(isGuest); // true (flips false → true)

let isVerified = true;
console.log(!isVerified); // false (flips true → false)
```

### Combining them

```javascript
let age = 22;
let hasTicket = true;
let isVIP = false;

// Must be 18+ AND have ticket, OR be VIP
let canEnter = (age >= 18 && hasTicket) || isVIP;
console.log(canEnter); // true
```

---

## 6. Bitwise Operators (Overview — Optional)

Bitwise operators work at the binary (bit) level. They're rarely needed by beginners but good to know exist.

| Operator | Name | Example |
| --- | --- | --- |
| `&` | Bitwise AND | `5 & 3` → `1` |
| `\|` | Bitwise OR | `5 \| 3` → `7` |
| `^` | Bitwise XOR | `5 ^ 3` → `6` |
| `~` | Bitwise NOT | `~5` → `-6` |
| `<<` | Left shift | `5 << 1` → `10` |
| `>>` | Right shift | `5 >> 1` → `2` |

These work on the binary representation of numbers. They're covered more in Section 20 (Binary Numbers). Skip for now if this is your first time seeing them.

---

## 7. Operator Precedence

When multiple operators appear in one expression, which one runs first? Programming follows the same rules as math: **PEMDAS / BODMAS**.

```
Parentheses → Exponents → Multiply/Divide → Add/Subtract
```

```javascript
let result = 2 + 3 * 4;
console.log(result); // 14, not 20 — multiplication runs first

let result2 = (2 + 3) * 4;
console.log(result2); // 20 — parentheses force addition first
```

### Full precedence order (simplified)

1. `()` — Parentheses
2. `**` — Exponentiation
3. `*`, `/`, `%` — Multiplication, Division, Modulo
4. `+`, `-` — Addition, Subtraction
5. `>`, `<`, `>=`, `<=` — Comparison
6. `===`, `!==` — Equality
7. `&&` — Logical AND
8. `||` — Logical OR
9. `=`, `+=`, `-=` … — Assignment

> 💡 **Rule:** When in doubt, use parentheses. They make your intent explicit and prevent bugs.

```javascript
// Unclear
let x = a + b * c - d / e;

// Clear
let x = a + (b * c) - (d / e);
```

---

## 8. Common Operator Mistakes

### Mistake 1: Using `=` instead of `==` or `===` in conditions

```javascript
let x = 5;
if (x = 10) { ... } // ❌ This assigns 10 to x — always true!
if (x === 10) { ... } // ✅ This compares x to 10
```

### Mistake 2: Forgetting operator precedence

```javascript
let result = 100 / 10 + 5 * 2; // is this (100/10) + (5*2) = 10+10 = 20?
// Yes. But be explicit: (100 / 10) + (5 * 2)
```

### Mistake 3: Using `+` on mixed types

```javascript
console.log("5" + 3);   // "53" — string concatenation, not addition
console.log(5 + "3");   // "53" — same
console.log(5 - "3");   // 2   — subtraction forces numeric conversion
```

### Mistake 4: Confusing AND and OR

```javascript
// "Only admins OR managers can delete"
if (role === "admin" || role === "manager") { ... } // ✅

// This is WRONG — no one can be both at the same time
if (role === "admin" && role === "manager") { ... } // ❌ always false
```

---

## 9. Practice: Build a Simple Calculator

Write a program that uses all arithmetic operators.

**Task:**
```javascript
let a = 20;
let b = 6;

// Calculate and display:
// 1. Sum
// 2. Difference
// 3. Product
// 4. Quotient (result of division)
// 5. Remainder
// 6. a to the power of 2

// Then:
// 7. Check if a is greater than b — display true or false
// 8. Check if a is even (use modulo)
// 9. Check if both a > 10 AND b > 10 — display result
// 10. Check if a > 50 OR b > 5 — display result
```

**Expected output:**
```
Sum: 26
Difference: 14
Product: 120
Quotient: 3.3333333333333335
Remainder: 2
Power: 400
a > b: true
a is even: true
Both > 10: false
At least one > threshold: true
```

---

## ✅ Section 9 Recap

You now know:
- **Arithmetic operators**: `+`, `-`, `*`, `/`, `%`, `**` — for calculations.
- **Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`, `++`, `--` — for storing values.
- **Comparison operators**: `===`, `!==`, `>`, `<`, `>=`, `<=` — always return a boolean.
- **Logical operators**: `&&` (AND), `||` (OR), `!` (NOT) — for combining conditions.
- **Operator precedence**: multiplication/division before addition/subtraction; use parentheses to be explicit.
- Common mistakes: `=` vs `===`, mixed-type `+`, wrong logic with AND/OR.

### Knowledge check

1. What does `15 % 4` return and why?
2. What is the difference between `==` and `===` in JavaScript?
3. What does `true && false` return?

<details>
<summary>Show answers</summary>

1. `3` — because 15 divided by 4 is 3 with a remainder of 3.
2. `==` converts types before comparing (loose); `===` requires the same type AND value (strict). `5 == "5"` is true, `5 === "5"` is false.
3. `false` — AND requires BOTH conditions to be true.

</details>

---

**Next up → [Section 10: Type Casting](../Section%2010%20-%20Type%20Casting/README.md)**
Learn how to convert values from one type to another — a skill you'll use constantly. 🔄
