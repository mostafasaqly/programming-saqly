# Section 11: Input and Output

> **Introduction to Programming** — Section 11 of 25
> Estimated time: ~30 minutes · Level: Absolute Beginner

A program that can't communicate with the outside world is useless. Input is how data enters the program; output is how the program responds. This section covers how to read from the user and display results — the core of interactive programs.

---

## Table of Contents

1. [What Is Input?](#1-what-is-input)
2. [What Is Output?](#2-what-is-output)
3. [Reading User Input](#3-reading-user-input)
4. [Displaying Output](#4-displaying-output)
5. [Console Output](#5-console-output)
6. [Browser Output (Overview)](#6-browser-output-overview)
7. [Input Validation Basics](#7-input-validation-basics)
8. [Practice: Simple Interactive Program](#8-practice-simple-interactive-program)

---

## 1. What Is Input?

**Input** is any data that enters the program from the outside world.

### Sources of input

| Source | Examples |
| --- | --- |
| **Keyboard** | User typing their name, age, or password |
| **Mouse** | Button click, form submission |
| **File** | Reading a text file or CSV |
| **Network** | Data received from an API |
| **Sensors** | Camera, microphone, GPS |
| **Database** | Querying stored records |

For now, we focus on the simplest kind: **text typed by the user**.

---

## 2. What Is Output?

**Output** is any data the program sends back to the outside world.

### Destinations of output

| Destination | Examples |
| --- | --- |
| **Console / Terminal** | Print messages for the developer or user |
| **Screen** | A website, app UI, graph, dialog box |
| **File** | Writing results to a text or CSV file |
| **Network** | Sending data to a server or API |
| **Printer** | Printed documents |

For now, we focus on **console output** — printing text to the terminal or browser console.

---

## 3. Reading User Input

### JavaScript (in the browser)

The simplest way to get user input in a browser is `prompt()` — it shows a popup asking for text.

```javascript
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
```

The user sees a popup, types something, clicks OK, and that text is stored in `name`.

> ⚠️ `prompt()` always returns a string. Convert it if you need a number.

```javascript
let ageInput = prompt("How old are you?");
let age = Number(ageInput); // convert to number
console.log("Next year you'll be " + (age + 1));
```

### Python

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

```python
age_input = input("How old are you? ")
age = int(age_input)  # convert to integer
print("Next year you'll be", age + 1)
```

### Java

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
System.out.print("What is your name? ");
String name = scanner.nextLine();
System.out.println("Hello, " + name + "!");
```

### C

```c
#include <stdio.h>
char name[100];
printf("What is your name? ");
scanf("%s", name);
printf("Hello, %s!\n", name);
```

The syntax differs significantly between languages, but the concept is identical: pause, wait for the user to type, store what they typed.

---

## 4. Displaying Output

You've already seen `console.log()`. Here's the full picture across languages.

### JavaScript — multiple output methods

```javascript
// Console (for developers / testing)
console.log("Hello");
console.log("Value:", 42);
console.log("Name:", name, "Age:", age); // multiple values

// Alert box (shows a popup to the user)
alert("Your order has been placed!");

// Writing to a web page
document.write("Hello, World!");
document.getElementById("output").textContent = "Hello, World!";
```

### Python

```python
print("Hello")
print("Value:", 42)
print("Name:", name, "Age:", age)  # multiple values separated by space
print(f"Hello, {name}! You are {age} years old.")  # f-string
```

### Java

```java
System.out.println("Hello");           // print + new line
System.out.print("Hello");             // print, no new line
System.out.printf("Hello, %s!%n", name); // formatted output
```

### Formatting output

Neat formatting makes output readable:

```javascript
let name = "Sara Ahmed";
let age = 28;
let salary = 5500.50;

console.log("========================");
console.log("  Employee Profile");
console.log("========================");
console.log("Name:    " + name);
console.log("Age:     " + age);
console.log("Salary:  $" + salary.toFixed(2));
console.log("========================");
```

Output:
```
========================
  Employee Profile
========================
Name:    Sara Ahmed
Age:     28
Salary:  $5500.50
========================
```

---

## 5. Console Output

The console is a text area where your program's output appears. As a beginner, almost all your output will go here.

### `console.log` variations (JavaScript)

```javascript
console.log("Regular message");          // standard output
console.error("Something went wrong!");  // shows in red (errors)
console.warn("This might be a problem"); // shows in yellow (warnings)
console.table([                          // displays as a table
    { name: "Sara", age: 28 },
    { name: "Omar", age: 32 }
]);
```

### Multiple values on one line

```javascript
let name = "Sara";
let age = 28;

console.log(name, age);           // Sara 28
console.log("Name:", name, "Age:", age); // Name: Sara Age: 28
```

### Logging objects

```javascript
let user = { name: "Sara", age: 28 };
console.log(user);      // { name: 'Sara', age: 28 }
console.log(user.name); // Sara
```

---

## 6. Browser Output (Overview)

When building web pages, output goes to the **HTML document**, not just the console.

### Writing to the page

```html
<!-- HTML -->
<p id="message">Loading...</p>

<script>
  // JavaScript changes the content of the paragraph
  document.getElementById("message").textContent = "Hello, Sara!";
</script>
```

This is what web development looks like. The program finds an element by its ID and changes its text.

### Creating elements dynamically

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "This was created by JavaScript!";
document.body.appendChild(newParagraph);
```

We won't go deep into browser/DOM output in this course — that's the territory of HTML, CSS, and web development. But know that it exists. Console output is our focus for now.

---

## 7. Input Validation Basics

Never trust user input. Users make typos, leave fields empty, or enter the wrong type of data. Always validate before using.

### Check if input is empty

```javascript
let name = prompt("Enter your name:");

if (name === "" || name === null) {
    console.log("Name cannot be empty!");
} else {
    console.log("Hello, " + name + "!");
}
```

### Check if a number is valid

```javascript
let input = prompt("Enter your age:");
let age = Number(input);

if (isNaN(age)) {
    console.log("Please enter a valid number.");
} else if (age < 0 || age > 150) {
    console.log("Age must be between 0 and 150.");
} else {
    console.log("Your age is: " + age);
}
```

### Check if input meets requirements

```javascript
let password = prompt("Create a password:");

if (password.length < 8) {
    console.log("Password must be at least 8 characters.");
} else {
    console.log("Password accepted!");
}
```

### The validation pattern

Every time you receive input:
1. **Check if it's empty** — don't process empty input
2. **Check the type** — is it the right kind of data?
3. **Check the range** — is the value within acceptable limits?
4. **Then process it**

This pattern appears in every real program. Get in the habit early.

---

## 8. Practice: Simple Interactive Program

Write a program that asks the user for information and displays a formatted profile.

**Task:**
```javascript
// 1. Ask the user for their name (prompt)
// 2. Ask for their age
// 3. Ask for their city
// 4. Convert age to a number
// 5. Validate: if name is empty, display "Name required" and stop
// 6. Validate: if age is not a number or age < 0 or age > 120, display "Invalid age" and stop
// 7. If all valid, display a formatted profile:

// ========================
//   Your Profile
// ========================
// Name:  [name]
// Age:   [age]
// City:  [city]
// Born:  [current year - age]  ← calculate birth year
// ========================
```

**Bonus:** Ask the user "Are you a student? (yes/no)" and display `Student: true` or `Student: false` based on their answer.

---

## ✅ Section 11 Recap

You now know:
- **Input** is data coming into the program (keyboard, file, network, etc.).
- **Output** is data going out (console, screen, file, etc.).
- **Reading input**: `prompt()` in browser JS, `input()` in Python, `Scanner` in Java.
- **Displaying output**: `console.log()` in JS, `print()` in Python, `System.out.println()` in Java.
- **Console output** is your primary output method for learning programs.
- **Browser output** goes to the HTML document (DOM manipulation — covered in web development).
- **Input validation**: always check for empty input, correct type, and valid range before processing.

### Knowledge check

1. What does `prompt()` always return, regardless of what the user types?
2. Name the three things to validate about user input.
3. What is `console.error()` used for?

<details>
<summary>Show answers</summary>

1. A string — even if the user types a number, `prompt()` returns it as text. You must convert it with `Number()` or `parseInt()` to use it in math.
2. Empty check (not blank), type check (is it the right kind of data?), range check (is the value within acceptable limits?).
3. Logging error messages — they appear in red in the browser console, making them easy to spot.

</details>

---

**Next up → [Section 12: Conditions and If Statements](../Section%2012%20-%20Conditions%20and%20If%20Statements/README.md)**
Teach your programs to make decisions — the single most powerful concept in programming. 🔀
