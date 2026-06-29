# Section 16: Scope

> **Introduction to Programming** — Section 16 of 25
> Estimated time: ~30 minutes · Level: Absolute Beginner

Scope determines **where** a variable exists and **where** it can be accessed. Understanding scope prevents a whole class of bugs — the kind where a variable seems to disappear or unexpectedly hold the wrong value.

---

## Table of Contents

1. [What Is Scope?](#1-what-is-scope)
2. [Global Scope](#2-global-scope)
3. [Local Scope](#3-local-scope)
4. [Block Scope](#4-block-scope)
5. [Function Scope](#5-function-scope)
6. [Variable Lifetime](#6-variable-lifetime)
7. [Common Scope Mistakes](#7-common-scope-mistakes)
8. [Practice: Fix Scope Problems](#8-practice-fix-scope-problems)

---

## 1. What Is Scope?

**Scope** is the region of your code where a variable is accessible.

### Real-life analogy

Think of a library. Books in the **main hall** (global) are available to everyone. Books in a **private reading room** (local) are only available to people in that room. Someone in the main hall can't access the private room's books.

Variables work the same way. A variable defined inside a function only exists inside that function. A variable defined outside all functions exists everywhere.

---

## 2. Global Scope

A variable is in the **global scope** if it's defined outside of any function or block. It can be accessed from anywhere in the program.

```javascript
let globalName = "Sara"; // global scope

function greet() {
    console.log(globalName); // can access global variable
}

function showInfo() {
    console.log("Name is: " + globalName); // also accessible here
}

greet();    // "Sara"
showInfo(); // "Name is: Sara"
```

### When to use global variables

Use them sparingly. Global variables are accessible everywhere — which also means they can be changed from anywhere, making bugs hard to trace.

Good uses for global variables:
- **Constants** — values that never change (`const MAX_RETRIES = 3`)
- **Configuration** — app-wide settings
- **Shared state** — data genuinely needed everywhere

---

## 3. Local Scope

A variable is in the **local scope** if it's defined inside a function. It only exists within that function and cannot be accessed from outside.

```javascript
function greet() {
    let localMessage = "Hello!"; // local to this function
    console.log(localMessage);   // ✅ accessible here
}

greet();

console.log(localMessage); // ❌ Error: localMessage is not defined
```

The variable `localMessage` is created when `greet()` runs and destroyed when it finishes. It does not exist outside of `greet`.

### Why local scope is good

Local variables don't "pollute" the rest of the program. Two functions can each have their own `total` variable without conflicting:

```javascript
function calculateOrderTotal() {
    let total = 0; // this total
    // ...
    return total;
}

function calculateCartTotal() {
    let total = 0; // different total — no conflict
    // ...
    return total;
}
```

Both use a variable called `total`, but they're completely separate because they're in different function scopes.

---

## 4. Block Scope

A **block** is any code inside `{}`. Variables declared with `let` or `const` are block-scoped — they only exist within the block they're declared in.

```javascript
if (true) {
    let blockVar = "I'm inside the block";
    console.log(blockVar); // ✅ works
}

console.log(blockVar); // ❌ Error: blockVar is not defined
```

### Loop variables

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // ✅ accessible inside the loop
}

console.log(i); // ❌ Error: i is not defined outside the loop
```

This is intentional — `i` only makes sense inside the loop. Keeping it contained prevents accidental use.

### `var` vs `let` (JavaScript-specific)

`var` (old way) is **function-scoped**, not block-scoped. This causes confusing behavior:

```javascript
if (true) {
    var oldStyle = "I escape the block!";
}
console.log(oldStyle); // "I escape the block!" — accessible outside (confusing!)

if (true) {
    let newStyle = "I stay in the block.";
}
console.log(newStyle); // ❌ Error — stays inside (correct behavior!)
```

> 💡 **Always use `let` and `const`**, never `var`. Block scope behavior is predictable and prevents bugs.

---

## 5. Function Scope

Variables declared inside a function are scoped to that function. Parameters are also function-scoped.

```javascript
function calculateArea(width, height) {
    let area = width * height; // function-scoped
    return area;
}

// Neither 'width', 'height', nor 'area' exist here
console.log(area);   // ❌ Error
console.log(width);  // ❌ Error
```

### Nested functions (inner scope can access outer scope)

```javascript
function outer() {
    let outerVar = "I'm outside";

    function inner() {
        console.log(outerVar); // ✅ inner can access outer's variables
    }

    inner();
}

outer(); // "I'm outside"
```

This works because inner functions can look "up" into their enclosing scope. This behavior is called **closure** — you'll learn more about it later.

The reverse does NOT work:

```javascript
function outer() {
    function inner() {
        let innerVar = "I'm inside";
    }
    inner();
    console.log(innerVar); // ❌ Error — outer can't access inner's variables
}
```

---

## 6. Variable Lifetime

Every variable has a **lifetime** — when it's created and when it's destroyed.

| Scope | Created when | Destroyed when |
| --- | --- | --- |
| Global | Program starts | Program ends |
| Function | Function is called | Function returns |
| Block | Block is entered (`{`) | Block is exited (`}`) |

### Example

```javascript
let globalCounter = 0; // created at program start

function increment() {
    let step = 1; // created each time increment() is called
    globalCounter += step;
    console.log(globalCounter);
    // step is destroyed when function returns
}

increment(); // 1 — step created (1), globalCounter updated, step destroyed
increment(); // 2 — step created again (1), globalCounter updated, step destroyed
increment(); // 3
```

`globalCounter` persists across calls. `step` is created fresh each time.

---

## 7. Common Scope Mistakes

### Mistake 1: Accessing a variable outside its scope

```javascript
function calculate() {
    let result = 42;
}
calculate();
console.log(result); // ❌ Error — result is local to calculate()
```

Fix: return the value and store it outside.

```javascript
function calculate() {
    let result = 42;
    return result; // ✅ return it
}
let result = calculate(); // ✅ store the returned value
console.log(result); // 42
```

### Mistake 2: Accidentally creating a global variable

```javascript
function setName() {
    name = "Sara"; // ❌ no 'let' — accidentally creates a global variable!
}
```

Fix: always use `let` or `const` when declaring variables.

```javascript
function setName() {
    let name = "Sara"; // ✅ local — stays inside the function
}
```

### Mistake 3: Assuming a loop variable exists outside the loop

```javascript
for (let i = 0; i < 5; i++) {
    // i exists here
}
console.log(i); // ❌ Error — i doesn't exist here
```

Fix: declare `i` before the loop if you need it after.

```javascript
let i;
for (i = 0; i < 5; i++) { }
console.log(i); // 5 — now accessible
```

### Mistake 4: Shadowing a variable (using the same name in inner scope)

```javascript
let name = "Sara"; // global

function greet() {
    let name = "Omar"; // local — shadows the global
    console.log(name);  // "Omar" — uses local, not global
}

greet();
console.log(name); // "Sara" — global unchanged
```

This is allowed but can be confusing. Avoid naming local variables the same as global ones.

---

## 8. Practice: Fix Scope Problems

Find and fix the scope errors in these programs:

**Problem 1:**
```javascript
function double(n) {
    result = n * 2; // missing let
}
double(5);
console.log(result); // unexpectedly works — but creates a global variable!
// Fix: make result local and return it
```

**Problem 2:**
```javascript
for (let i = 0; i < 3; i++) {
    let message = "Iteration " + i;
}
console.log(message); // Error: message is not defined
// Fix: display message inside the loop, or move declaration outside
```

**Problem 3:**
```javascript
let total = 100;

function addTax() {
    let taxRate = 0.14;
    total = total + (total * taxRate); // modifies global — side effect!
}

addTax();
console.log(total); // 114 — but this modified a global unexpectedly
// Fix: pass total as parameter and return the result
```

**Correct version for Problem 3:**
```javascript
function addTax(amount, rate) {
    return amount + (amount * rate);
}
let total = 100;
let totalWithTax = addTax(total, 0.14);
console.log(totalWithTax); // 114
console.log(total);        // still 100 — unchanged
```

---

## ✅ Section 16 Recap

You now know:
- **Scope** determines where a variable can be accessed.
- **Global scope** — accessible everywhere; use sparingly.
- **Local scope** — defined inside a function; only accessible within it.
- **Block scope** — defined inside `{}` with `let`/`const`; only accessible within that block.
- **Variable lifetime** — local variables are created when their scope is entered and destroyed when it's exited.
- Common mistakes: accessing variables outside scope, forgetting `let` (creates global accidentally), shadowing.
- **Always use `let` and `const`** — never `var`.

### Knowledge check

1. Can a function access a variable defined outside it (global)?
2. Can code outside a function access a variable defined inside it?
3. What is "shadowing" a variable?

<details>
<summary>Show answers</summary>

1. Yes — a function can read and modify global variables. (Though modifying globals from inside functions is generally bad practice.)
2. No — variables defined inside a function are local to that function and don't exist outside it.
3. Shadowing is when a local variable has the same name as an outer/global variable. Inside the scope, the local variable "shadows" (hides) the outer one.

</details>

---

**Next up → [Section 17: Recursion (Optional)](../Section%2017%20-%20Recursion/README.md)**
A function that calls itself — a beautiful but tricky concept. Come back once functions feel comfortable. 🔄
