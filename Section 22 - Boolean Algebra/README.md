# Section 22: Boolean Algebra *(Optional Deep-Dive)*

> **Introduction to Programming** — Section 22 of 25
> Estimated time: ~30 minutes · Level: Optional
> ℹ️ You've already used boolean logic in conditions. This section explains the math behind it — and why it's more powerful than it looks.

Boolean algebra is the mathematics of true and false. Every condition in every program, every digital circuit in every computer, operates on these rules. Understanding them makes you a better logical thinker.

---

## Table of Contents

1. [What Is Boolean Logic?](#1-what-is-boolean-logic)
2. [True and False](#2-true-and-false)
3. [The AND Operator](#3-the-and-operator)
4. [The OR Operator](#4-the-or-operator)
5. [The NOT Operator](#5-the-not-operator)
6. [Combining Boolean Expressions](#6-combining-boolean-expressions)
7. [Boolean Logic in Conditions](#7-boolean-logic-in-conditions)
8. [Practice: Build Login Access Logic](#8-practice-build-login-access-logic)

---

## 1. What Is Boolean Logic?

**Boolean logic** (named after mathematician George Boole, 1815-1864) is a system of algebra where variables have exactly two possible values: **true** or **false**.

Boolean Boole invented this mathematics over 150 years ago, long before computers. When computers were invented, engineers realized boolean logic mapped perfectly onto electronic circuits: on = true, off = false.

Today, every computer processor contains billions of logic gates — tiny circuits that implement AND, OR, and NOT on electrical signals. Every program you write ultimately runs on these gates.

---

## 2. True and False

In boolean algebra:
- **True** = 1 = on = yes
- **False** = 0 = off = no

```javascript
let a = true;
let b = false;
```

Boolean values come from:
- Direct assignment: `let isActive = true`
- Comparisons: `let isAdult = age >= 18`
- Function results: `let hasItem = items.includes("apple")`

---

## 3. The AND Operator

**AND** returns true only if **both** inputs are true.

### Truth table

| A | B | A AND B |
| --- | --- | --- |
| false | false | **false** |
| false | true | **false** |
| true | false | **false** |
| true | true | **true** |

"All must be true."

### In programming

```javascript
// && in JavaScript, 'and' in Python
let a = true;
let b = false;

console.log(a && b); // false — b is false
console.log(a && a); // true  — both true
```

### Real-world example

```javascript
let isLoggedIn = true;
let hasActiveSubscription = true;
let isNotBanned = true;

// Must satisfy ALL three conditions to access premium content
let canAccessPremium = isLoggedIn && hasActiveSubscription && isNotBanned;
console.log(canAccessPremium); // true
```

### AND with three inputs

```
A AND B AND C = true only when A=true, B=true, C=true
```

Add any false input and the result becomes false immediately. AND is strict.

---

## 4. The OR Operator

**OR** returns true if **at least one** input is true.

### Truth table

| A | B | A OR B |
| --- | --- | --- |
| false | false | **false** |
| false | true | **true** |
| true | false | **true** |
| true | true | **true** |

"At least one must be true."

### In programming

```javascript
let a = false;
let b = true;

console.log(a || b); // true  — b is true
console.log(a || a); // false — both false
```

### Real-world example

```javascript
let isMember = false;
let hasPromoCode = true;
let isFirstTimeCustomer = false;

// Any ONE of these is enough to get a discount
let getsDiscount = isMember || hasPromoCode || isFirstTimeCustomer;
console.log(getsDiscount); // true — hasPromoCode is true
```

### OR is inclusive

OR includes the case where both are true. In English "or" sometimes means "one but not both" (exclusive or). In programming, OR means "one or both" — it's inclusive.

---

## 5. The NOT Operator

**NOT** flips the value — true becomes false, false becomes true.

### Truth table

| A | NOT A |
| --- | --- |
| false | **true** |
| true | **false** |

### In programming

```javascript
let isLoggedIn = false;
let isGuest = !isLoggedIn;  // !false = true

console.log(isGuest); // true
console.log(!true);   // false
console.log(!false);  // true
```

### Double NOT

Applying NOT twice returns to the original:

```javascript
let x = true;
console.log(!!x);  // true — !true = false, !false = true (back to start)
```

`!!` is sometimes used to convert a truthy/falsy value to a strict boolean:

```javascript
let name = "Sara";
console.log(!!name);  // true (non-empty string is truthy)

let empty = "";
console.log(!!empty); // false (empty string is falsy)
```

---

## 6. Combining Boolean Expressions

Real programs combine AND, OR, and NOT in complex ways. Parentheses control the order of evaluation.

### Example: access control system

```javascript
let isAdmin = true;
let isEditor = false;
let isModerator = true;
let isBanned = false;

// Can delete posts: (admin OR editor OR moderator) AND NOT banned
let canDelete = (isAdmin || isEditor || isModerator) && !isBanned;
console.log(canDelete); // true
```

### De Morgan's Laws

A fundamental rule of boolean algebra:

```
NOT (A AND B) = (NOT A) OR (NOT B)
NOT (A OR B)  = (NOT A) AND (NOT B)
```

### In code

```javascript
let a = true;
let b = false;

// These are equivalent:
console.log(!(a && b));      // true
console.log(!a || !b);       // true  ← De Morgan's Law

// These are equivalent:
console.log(!(a || b));      // false
console.log(!a && !b);       // false ← De Morgan's Law
```

### Why it matters

De Morgan's Laws let you simplify complex conditions:

```javascript
// "User cannot access if NOT logged in AND NOT admin"
// Hard to read:
if (!(!isLoggedIn && !isAdmin)) { ... }

// Apply De Morgan: NOT (A AND B) = (NOT A) OR (NOT B)
// Becomes: if (isLoggedIn OR isAdmin)
if (isLoggedIn || isAdmin) { ... } // much cleaner
```

### Operator precedence

NOT (`!`) > AND (`&&`) > OR (`||`)

```javascript
// Without parentheses — can be confusing
let result = true || false && false;
// Evaluated as: true || (false && false) = true || false = true

// With parentheses — explicit
let result = true || (false && false); // clearer intent
```

> 💡 **Rule:** When combining AND and OR, always use parentheses to make the intent explicit.

---

## 7. Boolean Logic in Conditions

Everything you've learned here is what powers every `if` statement you've ever written.

### Simple conditions

```javascript
if (age >= 18) { ... }           // comparison → boolean
if (isLoggedIn) { ... }          // direct boolean
if (!isEmpty) { ... }            // NOT operator
```

### Combined conditions

```javascript
// AND — all must be true
if (age >= 18 && hasID && !isBanned) {
    console.log("Access granted");
}

// OR — any can be true
if (isAdmin || isModerator || isOwner) {
    console.log("Moderator panel available");
}

// Complex combination
if ((isPremium || hasGiftCard) && !isExpired && remainingBalance > 0) {
    console.log("Purchase allowed");
}
```

### Short-circuit evaluation

AND and OR use **short-circuit evaluation** — they stop evaluating as soon as the result is determined.

```javascript
// AND — if first is false, second is never checked
let user = null;
if (user && user.isAdmin) {  // ✅ safe — if user is null, stops at 'user'
    console.log("Admin");
}

// OR — if first is true, second is never checked
let name = savedName || "Guest"; // if savedName is falsy, use "Guest"
```

Short-circuit evaluation is a common pattern in JavaScript — using `||` to provide defaults and `&&` to safely access properties.

---

## 8. Practice: Build Login Access Logic

Build an access control system for a website with different user roles.

**Setup:**
```javascript
let isLoggedIn = true;
let userRole = "editor";   // "admin", "editor", "viewer", or "guest"
let isAccountActive = true;
let isEmailVerified = true;
let isBanned = false;
```

**Build boolean expressions for these access rules:**

```javascript
// 1. Can view public content:
//    Any user, logged in or not
let canViewPublic = true; // always true

// 2. Can view private content:
//    Must be logged in, active, and not banned
let canViewPrivate = /* your expression */;

// 3. Can create posts:
//    Must be logged in, active, verified, not banned,
//    AND role is "admin" or "editor"
let canCreatePosts = /* your expression */;

// 4. Can delete any post:
//    Must be logged in, active, not banned,
//    AND role is "admin"
let canDeletePosts = /* your expression */;

// 5. Can access admin panel:
//    Role is "admin" AND logged in AND active AND not banned
let canAccessAdmin = /* your expression */;

// Display all permissions:
console.log("View public:", canViewPublic);
console.log("View private:", canViewPrivate);
console.log("Create posts:", canCreatePosts);
console.log("Delete posts:", canDeletePosts);
console.log("Admin panel:", canAccessAdmin);
```

**Test with different values of `userRole` and the other variables to verify each rule works correctly.**

---

## ✅ Section 22 Recap

You now know:
- **Boolean algebra** is the mathematics of true and false — the foundation of all computer logic.
- **AND** (`&&`): true only when ALL inputs are true. Strict.
- **OR** (`||`): true when AT LEAST ONE input is true. Permissive.
- **NOT** (`!`): flips the value. True → false, false → true.
- **De Morgan's Laws**: `!(A && B)` = `!A || !B`; `!(A || B)` = `!A && !B`.
- **Short-circuit evaluation**: AND stops at the first false; OR stops at the first true.
- Boolean logic powers every condition in every program ever written.

### Knowledge check

1. When does `A AND B` return true?
2. What does NOT do to a boolean value?
3. Apply De Morgan's Law: simplify `!(isActive && isVerified)`

<details>
<summary>Show answers</summary>

1. `A AND B` returns true only when both A is true AND B is true. Any false input makes the result false.
2. NOT flips the value — true becomes false, false becomes true.
3. `!(isActive && isVerified)` = `!isActive || !isVerified` (De Morgan's Law: NOT of AND = OR of NOTs).

</details>

---

**Next up → [Section 23: Mini Project — Student Grade System](../Section%2023%20-%20Mini%20Project%20Student%20Grade%20System/README.md)**
Put everything together — build your first complete, real program. 🎓
