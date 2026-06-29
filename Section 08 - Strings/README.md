# Section 8: Strings

> **Introduction to Programming** — Section 8 of 25
> Estimated time: ~35 minutes · Level: Absolute Beginner

Text is everywhere in programs — names, messages, emails, addresses, error messages, labels. Strings are how programs handle text. This section covers all the essential string operations you'll use in almost every program you write.

---

## Table of Contents

1. [What Is a String?](#1-what-is-a-string)
2. [Creating Strings](#2-creating-strings)
3. [String Concatenation (Joining Text)](#3-string-concatenation-joining-text)
4. [String Length](#4-string-length)
5. [Accessing Characters](#5-accessing-characters)
6. [Common String Operations](#6-common-string-operations)
7. [Escape Characters](#7-escape-characters)
8. [Template Strings (Overview)](#8-template-strings-overview)
9. [Practice: Build a User Message](#9-practice-build-a-user-message)

---

## 1. What Is a String?

A **string** is a sequence of characters — any text, including letters, numbers, spaces, punctuation, and symbols.

The word "string" comes from stringing characters together, like beads on a necklace.

```
H  e  l  l  o
0  1  2  3  4   ← position of each character (starts at 0)
```

Each character has a position (called an **index**), starting from 0.

### Strings vs other types

```javascript
let age = 25;          // Number — for math
let name = "Sara";     // String — for text
let code = "25";       // String — looks like a number, but it's text
```

`25` and `"25"` are different. One is a number you can add. One is text you can join.

---

## 2. Creating Strings

Strings are created by wrapping text in quotes. Most languages support both single and double quotes.

### Double quotes

```javascript
let name = "Sara Ahmed";
let message = "Hello, World!";
```

### Single quotes

```javascript
let city = 'Cairo';
let greeting = 'Good morning!';
```

### When to use which

Single and double quotes work the same in most languages. The rule: be consistent. If you use double quotes, use them everywhere. Pick one and stick with it.

**Exception:** if the text itself contains one type of quote, use the other:

```javascript
let sentence = "It's a great day!";   // text has ' → use ""
let html = '<div class="box"></div>'; // text has " → use ''
```

### Empty string

```javascript
let empty = "";    // valid — a string with no characters
let space = " ";   // also valid — a string with one space character
```

---

## 3. String Concatenation (Joining Text)

**Concatenation** means joining strings together. Use the `+` operator.

```javascript
let firstName = "Sara";
let lastName = "Ahmed";
let fullName = firstName + " " + lastName;

console.log(fullName); // "Sara Ahmed"
```

Notice the `" "` — a string containing just a space. Without it:
```javascript
let fullName = firstName + lastName;
console.log(fullName); // "SaraAhmed" ← no space
```

### Joining strings and numbers

```javascript
let name = "Sara";
let age = 25;
let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); // "My name is Sara and I am 25 years old."
```

When you use `+` with a string and a number, the number is automatically converted to text and joined.

### Building longer messages

```javascript
let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;

let receipt = "Product: " + product + "\nPrice: " + price + "\nTotal: " + total;
console.log(receipt);
```

Output:
```
Product: Laptop
Price: 999
Total: 1998
```

(`\n` is a newline character — covered in the Escape Characters section.)

---

## 4. String Length

The **length** of a string is the number of characters in it (including spaces and punctuation).

```javascript
let name = "Sara";
console.log(name.length); // 4

let city = "New York";
console.log(city.length); // 8 (space counts!)

let empty = "";
console.log(empty.length); // 0
```

### In Python

```python
name = "Sara"
print(len(name))  # 4
```

### Practical use: password validation

```javascript
const MIN_PASSWORD_LENGTH = 8;
let password = "abc123";

if (password.length < MIN_PASSWORD_LENGTH) {
    console.log("Password too short!");
}
```

---

## 5. Accessing Characters

You can get any single character from a string using its **index** (position), starting from 0.

```javascript
let name = "Sara";
//          S  a  r  a
//          0  1  2  3   ← index positions

console.log(name[0]); // "S"
console.log(name[1]); // "a"
console.log(name[2]); // "r"
console.log(name[3]); // "a"
```

### Getting the last character

```javascript
let name = "Sara";
let last = name[name.length - 1];
console.log(last); // "a"
```

Why `name.length - 1`? Because `length` is 4, but indexes go from 0 to 3. The last valid index is always `length - 1`.

### Out of bounds

```javascript
let name = "Sara";
console.log(name[10]); // undefined (no character at position 10)
```

---

## 6. Common String Operations

Most languages give strings a set of built-in tools (called methods):

### Uppercase / Lowercase

```javascript
let name = "Sara Ahmed";
console.log(name.toUpperCase()); // "SARA AHMED"
console.log(name.toLowerCase()); // "sara ahmed"
```

Useful for case-insensitive comparisons:
```javascript
// Check if user typed "yes" regardless of case
if (answer.toLowerCase() === "yes") { ... }
```

### Trim (remove extra spaces)

```javascript
let input = "   Sara   ";
console.log(input.trim()); // "Sara"
```

Users often type extra spaces by accident. Trimming before processing prevents bugs.

### Check if string contains text

```javascript
let email = "sara@example.com";
console.log(email.includes("@")); // true
console.log(email.includes("gmail")); // false
```

### Replace text

```javascript
let message = "Hello, World!";
let newMessage = message.replace("World", "Sara");
console.log(newMessage); // "Hello, Sara!"
```

### Split a string into parts

```javascript
let csv = "Sara,Omar,Ali,Nour";
let names = csv.split(",");
console.log(names); // ["Sara", "Omar", "Ali", "Nour"]
```

### Extract part of a string (slice)

```javascript
let text = "Hello, World!";
let part = text.slice(7, 12);
console.log(part); // "World"
// slice(startIndex, endIndex) — endIndex is not included
```

---

## 7. Escape Characters

Sometimes you need to include special characters inside a string. You do this with a **backslash** `\` — called an **escape character**.

| Escape sequence | Meaning |
| --- | --- |
| `\n` | New line |
| `\t` | Tab (indent) |
| `\"` | Double quote inside a double-quoted string |
| `\'` | Single quote inside a single-quoted string |
| `\\` | A literal backslash |

### Examples

```javascript
// New line
console.log("Line 1\nLine 2\nLine 3");
// Line 1
// Line 2
// Line 3

// Tab
console.log("Name:\tSara");
// Name:	Sara

// Quote inside string
console.log("She said \"Hello!\"");
// She said "Hello!"

// Backslash
console.log("C:\\Users\\Sara");
// C:\Users\Sara
```

---

## 8. Template Strings (Overview)

Concatenation with `+` works, but it gets messy with long strings. **Template strings** (also called template literals) offer a cleaner way to embed variables in text.

### JavaScript (template literals)

Use backticks `` ` `` instead of quotes, and `${variable}` to embed values:

```javascript
let name = "Sara";
let age = 25;

// Old way — concatenation
let message1 = "Hello, " + name + "! You are " + age + " years old.";

// New way — template literal
let message2 = `Hello, ${name}! You are ${age} years old.`;

console.log(message2); // "Hello, Sara! You are 25 years old."
```

You can also put expressions directly inside `${}`:

```javascript
let price = 100;
let tax = 0.14;
console.log(`Total with tax: ${price * (1 + tax)}`); // "Total with tax: 114"
```

### Python (f-strings)

```python
name = "Sara"
age = 25
message = f"Hello, {name}! You are {age} years old."
print(message)
```

Template strings/f-strings are modern and preferred. Start using them — they make your code much easier to read.

---

## 9. Practice: Build a User Message

**Task:** Using the variables below, build and display a formatted user profile message.

```javascript
let firstName = "Sara";
let lastName = "Ahmed";
let age = 28;
let city = "Cairo";
let email = "sara@example.com";
let isPremium = true;
```

**Your output should look like:**
```
============================
  User Profile
============================
Name:    Sara Ahmed
Age:     28
City:    Cairo
Email:   sara@example.com
Premium: true
============================
```

**Also practice:**
1. Display the user's full name in ALL CAPS.
2. Display only the first character of their first name followed by a `.` and their last name (e.g., `S. Ahmed`).
3. Check if their email contains `@` and print a message saying whether it's valid.

---

## ✅ Section 8 Recap

You now know:
- A **string** is a sequence of characters — any text, wrapped in quotes.
- **Concatenation** joins strings with `+`.
- **Length** gives you the number of characters (`name.length` or `len(name)`).
- **Indexing** lets you access individual characters starting from position `0`.
- Common operations: `toUpperCase()`, `toLowerCase()`, `trim()`, `includes()`, `replace()`, `split()`, `slice()`.
- **Escape characters** like `\n` (new line) and `\t` (tab) add special formatting.
- **Template strings** (`` `Hello ${name}` ``) are a cleaner way to embed variables in text.

### Knowledge check

1. What is the index of the first character in a string?
2. What does `"Sara".length` return?
3. Write a template string that produces: `"Sara is 25 years old"`

<details>
<summary>Show answers</summary>

1. Index `0` — string indexes always start at zero.
2. `4` — S, a, r, a = four characters.
3. `` `${name} is ${age} years old` `` where `name = "Sara"` and `age = 25`.

</details>

---

**Next up → [Section 9: Operators](../Section%2009%20-%20Operators/README.md)**
Learn all the symbols that let you calculate, compare, and combine values in your programs. ➕
