# Section 3: Setting Up & Running Your First Code

> **Introduction to Programming** — Section 3 of 25
> Estimated time: ~25 minutes · Level: Absolute Beginner

Theory is important, but nothing beats actually running code. In this section you'll write and execute your very first program — with no installation required. You'll also learn how to read error messages so they don't scare you.

---

## Table of Contents

1. [Where Does Code Actually Run?](#1-where-does-code-actually-run)
2. [Using a Free Online Code Editor — No Installation Needed](#2-using-a-free-online-code-editor--no-installation-needed)
3. [Writing and Running Your First Instruction ("Hello, World")](#3-writing-and-running-your-first-instruction-hello-world)
4. [What Output Looks Like](#4-what-output-looks-like)
5. [Don't Panic: How to Read an Error Message](#5-dont-panic-how-to-read-an-error-message)
6. [Practice: Make the Computer Say Hello](#6-practice-make-the-computer-say-hello)

---

## 1. Where Does Code Actually Run?

When you write code, it has to run somewhere. There are three common places:

### On your computer (local environment)

You install a programming language and a code editor on your machine. Your code runs directly on your CPU. This is what professional developers do.

**Tools:** VS Code (editor) + Node.js (JavaScript) or Python — downloaded and installed.

**Pros:** Full control, works offline, fast.
**Cons:** Setup takes time and can go wrong.

### In a web browser

JavaScript code can run directly inside any web browser (Chrome, Firefox, Edge). Open the browser, press F12, click "Console" — and you have a live JavaScript environment with nothing to install.

**Pros:** Zero setup, always available.
**Cons:** Only JavaScript.

### Online "Try It" editors

Websites that give you a code editor and a run button in your browser. You write code on the left, click Run, see output on the right. No installation needed. Works with many languages.

**Examples:**
- [replit.com](https://replit.com) — supports Python, JavaScript, Java, C, and many more
- [jsfiddle.net](https://jsfiddle.net) — JavaScript focused
- [pythontutor.com](https://pythontutor.com) — great for visualizing code step by step

> 💡 **For this course:** Use an online editor. You can switch to a local setup later once you're comfortable. Don't let setup be a barrier to learning.

---

## 2. Using a Free Online Code Editor — No Installation Needed

We'll use the browser console for JavaScript examples (since every computer already has a browser), but any online editor works.

### Option A — Browser Console (JavaScript only)

1. Open any web browser (Chrome, Firefox, Edge).
2. Press **F12** (or right-click → "Inspect").
3. Click the **Console** tab.
4. Click next to the `>` symbol.
5. Type your code and press **Enter**.

You're now running JavaScript live. Nothing to install.

### Option B — Replit (any language)

1. Go to [replit.com](https://replit.com).
2. Click **Create Repl**.
3. Choose a language (Python, JavaScript, etc.).
4. Type code in the left panel.
5. Click the green **Run** button.
6. See output in the right panel.

Free accounts have some limits but are more than enough for learning.

### Option C — Python Anywhere (Python only)

1. Go to [pythonanywhere.com](https://www.pythonanywhere.com).
2. Open a Python console — no account needed for quick tests.

---

## 3. Writing and Running Your First Instruction ("Hello, World")

Every programmer's first program is "Hello, World" — a program that simply displays that phrase. It's a tradition that goes back to 1974. It proves your environment is working.

### In JavaScript (browser console)

```javascript
console.log("Hello, World!");
```

Type this in the browser console and press Enter. You'll see:

```
Hello, World!
```

### In Python

```python
print("Hello, World!")
```

### In Java

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### In C

```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

Notice: the idea is identical in all four. We want the computer to display text. Only the spelling changes.

### What just happened?

When you ran that one line, here's what happened behind the scenes:

```
You typed code
  → interpreter/compiler read it
  → found the "print output" instruction
  → sent "Hello, World!" to the output area
  → displayed it on screen
```

That's a complete program. Simple, but real. You just wrote and ran code.

---

## 4. What Output Looks Like

**Output** is anything your program sends to the screen for you to see. There are two main output destinations:

### Console output

The console (also called the terminal or command line) is a text-only area where programs print messages. This is where most beginner programs show their results.

```javascript
console.log("My name is Sara");
console.log("I am 25 years old");
console.log("I love programming");
```

Output:
```
My name is Sara
I am 25 years old
I love programming
```

Each `console.log` prints one line. The next one starts on a new line automatically.

### Multiple outputs

You can output as many lines as you want. The program runs top to bottom and prints each in order:

```python
print("Line 1")
print("Line 2")
print("Line 3")
```

Output:
```
Line 1
Line 2
Line 3
```

> 🧠 **Mental model:** Think of output as the computer "talking back" to you. Your program runs silently inside the machine — output is how it reports what it's doing.

---

## 5. Don't Panic: How to Read an Error Message

You will see error messages. Every programmer does, every single day. An error message is not a failure — it is the computer telling you exactly what went wrong. Learning to read them is a fundamental skill.

### Anatomy of an error message

```
Uncaught ReferenceError: messag is not defined
    at <anonymous>:1:1
```

Breaking this down:

| Part | What it means |
| --- | --- |
| `Uncaught` | The error wasn't handled by your program |
| `ReferenceError` | The type of error — you used something that doesn't exist |
| `messag is not defined` | The specific problem — you typed `messag` instead of `message` |
| `at <anonymous>:1:1` | Location — line 1, column 1 |

### Common error types

| Error type | Plain meaning | Common cause |
| --- | --- | --- |
| `SyntaxError` | You broke the grammar rules | Missing bracket, quote, or semicolon |
| `ReferenceError` | You used a name that doesn't exist | Typo in a variable name |
| `TypeError` | You used the wrong type of data | Calling a number like a function |
| `RangeError` | A value is out of allowed range | Infinite recursion, invalid array length |

### The process for fixing errors

1. **Read the error message.** Don't close it. Don't panic.
2. **Find the line number.** Go to that line in your code.
3. **Read that line carefully.** Look for typos, missing quotes, unclosed brackets.
4. **Fix one thing at a time.** Don't change five things at once.
5. **Run again.** See if the error changed or disappeared.

### Example

You write:
```javascript
console.log("Hello World)
```

You get:
```
Uncaught SyntaxError: Invalid or unexpected token
```

The fix: the closing `"` is missing. It should be:
```javascript
console.log("Hello World")
```

> 💡 **Rule:** Every error message is a clue, not a verdict. Read it, locate the problem, fix it. This is the core debugging loop you'll use for the rest of your programming life.

---

## 6. Practice: Make the Computer Say Hello

Open your browser console or an online editor and complete these tasks:

**Task 1:** Print your own name.
```javascript
console.log("My name is ___");
```

**Task 2:** Print three lines — your name, your age, your city.

**Task 3:** Intentionally break your code. Remove a closing quote, then run it. Read the error message. Then fix it.

**Task 4:** Print this exact output (two lines):
```
Hello, World!
I wrote my first program.
```

**Bonus:** Try the same in Python if you have access to an online Python editor. Notice how similar (or different) the syntax is.

---

## ✅ Section 3 Recap

You now know:
- Code can run **locally** (installed on your machine), **in the browser**, or **in an online editor** — for now, online is the easiest.
- The **browser console** gives you a free JavaScript environment with no setup.
- Every programmer's first program is **"Hello, World"** — it proves the environment works.
- **Output** is how your program communicates results back to you.
- **Error messages** are clues, not failures. Read the type, find the line, fix one thing at a time.

### Knowledge check

1. Name two ways to run code without installing anything on your computer.
2. What does `console.log()` do?
3. What should you do first when you see an error message?

<details>
<summary>Show answers</summary>

1. Any two of: browser console, online editor (Replit, etc.), browser DevTools.
2. It prints (outputs) whatever is inside the parentheses to the console.
3. Read it — find the error type and line number, then go to that line and look for the problem.

</details>

---

**Next up → [Section 4: Comments](../Section%2004%20-%20Comments/README.md)**
Learn how to leave notes in your code — for yourself and for anyone else who reads it. 📝
