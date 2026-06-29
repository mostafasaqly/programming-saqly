# Section 10: Type Casting

> **Introduction to Programming** — Section 10 of 25
> Estimated time: ~25 minutes · Level: Absolute Beginner

Programs constantly receive data in one form and need it in another. A user types a number, but input always arrives as text. A price in cents needs to become a decimal. This is type casting — converting values from one type to another.

---

## Table of Contents

1. [What Is Type Casting?](#1-what-is-type-casting)
2. [Implicit Type Conversion](#2-implicit-type-conversion)
3. [Explicit Type Conversion](#3-explicit-type-conversion)
4. [String to Number](#4-string-to-number)
5. [Number to String](#5-number-to-string)
6. [Boolean Conversion](#6-boolean-conversion)
7. [Common Type Casting Mistakes](#7-common-type-casting-mistakes)
8. [Practice: Convert User Input](#8-practice-convert-user-input)

---

## 1. What Is Type Casting?

**Type casting** (also called type conversion) is the process of converting a value from one data type to another.

### Why you need it

Programs constantly mix types:
- A user types their age → arrives as a string `"25"` → you need the number `25` to do math
- You calculate a price → result is a number `19.99` → you need text `"$19.99"` to display it
- You check if a value exists → need a `true`/`false` from any type

Without type conversion, this breaks:
```javascript
let ageInput = "25";  // came from user input
let nextYear = ageInput + 1;
console.log(nextYear); // "251" — string concatenation, not addition!
```

With type conversion:
```javascript
let ageInput = "25";
let age = Number(ageInput); // convert to number
let nextYear = age + 1;
console.log(nextYear); // 26 ✅
```

---

## 2. Implicit Type Conversion

**Implicit** conversion happens automatically — the language converts without you asking.

### JavaScript examples

```javascript
// String + Number → String (concatenation wins)
console.log("5" + 3);    // "53"
console.log(5 + "3");    // "53"

// String - Number → Number (math operators convert)
console.log("10" - 2);   // 8
console.log("10" * 2);   // 20
console.log("10" / 2);   // 5

// Boolean in math context
console.log(true + 1);   // 2 (true converts to 1)
console.log(false + 1);  // 1 (false converts to 0)
```

### The problem with implicit conversion

Implicit conversion is unpredictable and varies by language. It causes bugs that are hard to find.

```javascript
let a = "10";
let b = 5;
console.log(a + b);  // "105" — you expected 15
console.log(a - b);  // 5    — works (math forces conversion)
console.log(a * b);  // 50   — works
console.log(a / b);  // 2    — works
```

`+` with strings concatenates. All other math operators force numeric conversion. This inconsistency trips up beginners constantly.

> 💡 **Best practice:** Don't rely on implicit conversion. Always convert explicitly when you need a different type.

---

## 3. Explicit Type Conversion

**Explicit** conversion is when you deliberately convert a value using built-in functions.

### JavaScript conversion functions

| Convert to | Function | Example |
| --- | --- | --- |
| Number | `Number(x)` | `Number("25")` → `25` |
| Number (integer) | `parseInt(x)` | `parseInt("25.7")` → `25` |
| Number (decimal) | `parseFloat(x)` | `parseFloat("25.7")` → `25.7` |
| String | `String(x)` | `String(25)` → `"25"` |
| Boolean | `Boolean(x)` | `Boolean(0)` → `false` |

### Python conversion functions

```python
int("25")       # → 25
float("25.7")   # → 25.7
str(25)         # → "25"
bool(0)         # → False
```

---

## 4. String to Number

This is the most common conversion — user input is always text.

### JavaScript

```javascript
let input = "42";          // string from user

let num1 = Number(input);  // 42 — cleanest, converts whole string
let num2 = parseInt(input); // 42 — parses integer portion
let num3 = parseFloat("3.14"); // 3.14

console.log(num1 + 10); // 52 ✅
```

### What about non-numeric strings?

```javascript
let bad = Number("hello"); // NaN — "Not a Number"
let partial = parseInt("42abc"); // 42 — parses until it hits non-numeric
let nothing = parseInt("abc42"); // NaN — starts with non-numeric

console.log(isNaN(bad)); // true — check if a value is NaN
```

`NaN` (Not a Number) is a special value that means "this conversion failed." Always check for it when converting user input.

### Python

```python
age_input = "25"
age = int(age_input)    # 25
print(age + 1)          # 26 ✅

# If conversion fails, Python raises an error
int("hello")  # ValueError: invalid literal for int()
```

---

## 5. Number to String

Convert numbers to strings when you need to display, format, or combine with text.

### JavaScript

```javascript
let price = 19.99;

let str1 = String(price);        // "19.99"
let str2 = price.toString();     // "19.99"
let str3 = price.toFixed(2);     // "19.99" — always 2 decimal places

let bigNum = 1000000;
let str4 = bigNum.toLocaleString(); // "1,000,000" — formatted with commas
```

### Formatting decimals

```javascript
let price = 19.9;
console.log(price.toFixed(2)); // "19.90" — pads to exactly 2 decimals
```

Useful for displaying prices, which should always show 2 decimal places.

### Python

```python
price = 19.99
text = str(price)     # "19.99"
formatted = f"${price:.2f}"  # "$19.99" — f-string with 2 decimal format
```

---

## 6. Boolean Conversion

Converting other types to `true` or `false`. Every value in most languages has a "truthiness."

### Falsy values (convert to `false`)

In JavaScript:

| Value | Boolean result |
| --- | --- |
| `0` | `false` |
| `""` (empty string) | `false` |
| `null` | `false` |
| `undefined` | `false` |
| `NaN` | `false` |
| `false` | `false` |

Everything else is **truthy** (converts to `true`).

```javascript
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true (empty array is truthy!)
console.log(Boolean(-1));        // true (any non-zero number is truthy)
```

### Practical use

```javascript
let username = "";

if (Boolean(username)) {
    console.log("Hello, " + username);
} else {
    console.log("Please enter a username"); // runs — empty string is falsy
}
```

More commonly written without explicit `Boolean()`:
```javascript
if (username) { ... }   // same as if (Boolean(username))
if (!username) { ... }  // same as if (!Boolean(username))
```

---

## 7. Common Type Casting Mistakes

### Mistake 1: Not converting input before doing math

```javascript
let input = "10";           // from user
let result = input * 2;     // 20 — works (implicit conversion)
let broken = input + 5;     // "105" — string concatenation!

// Fix: always convert first
let num = Number(input);
let correct = num + 5;      // 15 ✅
```

### Mistake 2: Not checking for NaN

```javascript
let input = "hello";
let num = Number(input); // NaN
let result = num + 10;   // NaN — any math with NaN gives NaN

// Fix: always check
if (isNaN(num)) {
    console.log("Invalid number input");
} else {
    console.log(num + 10);
}
```

### Mistake 3: Using `parseInt` when you need a decimal

```javascript
let price = parseInt("19.99"); // 19 — drops the decimal!
// Fix:
let price = parseFloat("19.99"); // 19.99 ✅
```

### Mistake 4: Expecting `Boolean([])` to be false

```javascript
let emptyArray = [];
console.log(Boolean(emptyArray)); // true — arrays are always truthy in JS!
// Use .length instead:
console.log(Boolean(emptyArray.length)); // false ✅
```

---

## 8. Practice: Convert User Input

Simulate receiving user input as strings and converting it for use.

**Task:**
```javascript
// Simulate user input (in a real program these would come from a form)
let inputAge = "28";
let inputPrice = "49.99";
let inputQuantity = "3";
let inputName = "  Sara  "; // extra spaces from user

// 1. Convert inputAge to a number and calculate what age they'll be in 10 years
// 2. Convert inputPrice and inputQuantity to numbers and calculate total cost
// 3. Trim inputName and display it in uppercase
// 4. Check if the total cost is valid (not NaN) before displaying

// Expected output:
// Age in 10 years: 38
// Total cost: 149.97
// Name: SARA
// Valid total: true
```

---

## ✅ Section 10 Recap

You now know:
- **Type casting** converts values from one type to another.
- **Implicit** conversion happens automatically — avoid relying on it, it's unpredictable.
- **Explicit** conversion uses functions like `Number()`, `parseInt()`, `parseFloat()`, `String()`, `Boolean()`.
- **String to number**: use `Number()` or `parseFloat()` — check for `NaN` if input may be invalid.
- **Number to string**: use `String()` or `.toString()` — use `.toFixed(2)` for price formatting.
- **Boolean conversion**: 0, empty string, null, undefined, NaN → false. Everything else → true.
- Always convert user input before using it in calculations.

### Knowledge check

1. What does `Number("hello")` return?
2. What is the difference between `parseInt` and `parseFloat`?
3. Which of these values is falsy: `0`, `"0"`, `[]`, `null`?

<details>
<summary>Show answers</summary>

1. `NaN` (Not a Number) — because "hello" cannot be converted to a number.
2. `parseInt` converts to an integer (drops the decimal). `parseFloat` preserves the decimal portion.
3. `0` and `null` are falsy. `"0"` is truthy (non-empty string). `[]` is truthy (arrays are always truthy in JavaScript).

</details>

---

**Next up → [Section 11: Input and Output](../Section%2011%20-%20Input%20and%20Output/README.md)**
Make your programs interactive — read what the user types and display results back to them. 💬
