# Section 13: Arrays

> **Introduction to Programming** — Section 13 of 25
> Estimated time: ~40 minutes · Level: Absolute Beginner

So far, each variable holds one piece of data. But what if you have 30 students, 100 products, or 1000 transactions? You can't create 1000 variables. Arrays solve this — they store multiple values in one named container.

---

## Table of Contents

1. [What Is an Array?](#1-what-is-an-array)
2. [Why Do We Use Arrays?](#2-why-do-we-use-arrays)
3. [Creating Arrays](#3-creating-arrays)
4. [Accessing Array Items](#4-accessing-array-items)
5. [Updating Array Items](#5-updating-array-items)
6. [Adding Items](#6-adding-items)
7. [Removing Items](#7-removing-items)
8. [Looping Through Arrays (Preview)](#8-looping-through-arrays-preview)
9. [Practice: Student List App](#9-practice-student-list-app)

---

## 1. What Is an Array?

An **array** is an ordered list of values stored under a single variable name. Each value is called an **element**, and each element has a numbered position called an **index** — starting from `0`.

```
students = ["Sara", "Omar", "Ali", "Nour"]
            index 0  index 1  index 2  index 3
```

Think of an array like a numbered shelf: each slot has a number, and each slot holds one item.

```
┌────┬────┬────┬──────┐
│  0 │  1 │  2 │   3  │
├────┼────┼────┼──────┤
│Sara│Omar│ Ali│ Nour │
└────┴────┴────┴──────┘
```

---

## 2. Why Do We Use Arrays?

### Without arrays — chaos

```javascript
let student1 = "Sara";
let student2 = "Omar";
let student3 = "Ali";
let student4 = "Nour";
// 30 students = 30 variables. Unmanageable.
```

### With arrays — clean

```javascript
let students = ["Sara", "Omar", "Ali", "Nour"];
// 30 students still = 1 variable
```

Arrays also let you:
- Process all items automatically using loops
- Find items, sort them, filter them
- Add and remove items dynamically

---

## 3. Creating Arrays

### JavaScript

```javascript
// Array of strings
let fruits = ["apple", "banana", "cherry"];

// Array of numbers
let scores = [95, 87, 72, 61, 88];

// Array of booleans
let answers = [true, false, true, true];

// Mixed types (allowed in dynamic languages)
let mixed = ["Sara", 25, true, null];

// Empty array
let empty = [];

// Array with one item
let single = ["only one"];
```

### Python

```python
fruits = ["apple", "banana", "cherry"]
scores = [95, 87, 72, 61, 88]
empty = []
```

### Java

```java
// Fixed size — must declare type and size
String[] fruits = {"apple", "banana", "cherry"};
int[] scores = {95, 87, 72, 61, 88};
```

### C

```c
char* fruits[] = {"apple", "banana", "cherry"};
int scores[] = {95, 87, 72, 61, 88};
```

---

## 4. Accessing Array Items

Access items using their **index** inside square brackets `[]`. Remember: indexes start at `0`.

```javascript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
console.log(fruits[3]); // undefined — no item at index 3
```

### Getting the last item

```javascript
let fruits = ["apple", "banana", "cherry"];
let last = fruits[fruits.length - 1];
console.log(last); // "cherry"
```

`fruits.length` is `3`. The last valid index is `3 - 1 = 2`.

### Array length

```javascript
let scores = [95, 87, 72, 61, 88];
console.log(scores.length); // 5
```

Length always equals the number of elements. The last valid index is always `length - 1`.

---

## 5. Updating Array Items

Assign a new value to a specific index:

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "mango"; // replace "banana" with "mango"

console.log(fruits); // ["apple", "mango", "cherry"]
```

---

## 6. Adding Items

### Add to the end

```javascript
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### Add to the beginning

```javascript
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "cherry"]
```

### Python equivalents

```python
fruits = ["apple", "banana"]
fruits.append("cherry")    # add to end
fruits.insert(0, "kiwi")   # insert at index 0
```

---

## 7. Removing Items

### Remove from the end

```javascript
let fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop(); // removes and returns "cherry"

console.log(fruits);  // ["apple", "banana"]
console.log(removed); // "cherry"
```

### Remove from the beginning

```javascript
let first = fruits.shift(); // removes and returns "apple"
console.log(fruits); // ["banana"]
```

### Remove by index

```javascript
let fruits = ["apple", "banana", "cherry", "mango"];
fruits.splice(1, 2); // start at index 1, remove 2 items

console.log(fruits); // ["apple", "mango"]
```

`splice(startIndex, deleteCount)` — powerful for removing one or more items anywhere.

### Python equivalents

```python
fruits = ["apple", "banana", "cherry"]
fruits.pop()          # remove last
fruits.pop(0)         # remove at index 0
fruits.remove("banana") # remove by value
del fruits[1]         # remove by index
```

### Check if item exists

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false
```

### Find the index of an item

```javascript
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("mango"));  // -1 (not found)
```

---

## 8. Looping Through Arrays (Preview)

The real power of arrays comes when combined with loops (Section 14). Here's a preview:

### `for` loop with index

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// apple
// banana
// cherry
```

### `for...of` loop (simpler)

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
// apple
// banana
// cherry
```

### `forEach` method

```javascript
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

All three produce the same output. We'll cover loops in depth in Section 14.

### Common array operations (preview)

```javascript
let numbers = [5, 2, 8, 1, 9, 3];

// Sort (modifies the original array)
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8, 9]

// Find the maximum
let max = Math.max(...numbers); // 9

// Sum all numbers
let total = numbers.reduce((sum, n) => sum + n, 0); // 28

// Filter — keep only items that match a condition
let bigNumbers = numbers.filter(n => n > 4); // [5, 8, 9]
```

These are covered in more detail as you advance. For now, just know they exist.

---

## 9. Practice: Student List App

Build a program that manages a list of student names.

**Tasks:**
```javascript
// 1. Create an array with 5 student names
let students = ["Sara", "Omar", "Ali", "Nour", "Layla"];

// 2. Display the full list with their positions (1, 2, 3...)
// Output:
// 1. Sara
// 2. Omar
// 3. Ali
// 4. Nour
// 5. Layla

// 3. Display the first and last student

// 4. Add a new student "Kareem" to the end of the list

// 5. Remove the second student (index 1)

// 6. Check if "Ali" is still in the list after removals

// 7. Display the final list and its length

// 8. Update the first student's name to "Fatima"

// 9. Display the updated list
```

---

## ✅ Section 13 Recap

You now know:
- An **array** is an ordered list of values under one variable name.
- Indexes **start at 0** — the first item is at index `0`, not `1`.
- **Access** items with `array[index]`.
- **Update** items with `array[index] = newValue`.
- **Add** to end: `push()`. Add to start: `unshift()`.
- **Remove** from end: `pop()`. From start: `shift()`. By index: `splice()`.
- **Check** existence: `includes()`. Find position: `indexOf()`.
- The real power of arrays is combining them with **loops** — coming in Section 14.

### Knowledge check

1. What index does the first element of an array have?
2. What does `fruits.push("mango")` do?
3. If an array has 5 elements, what is the index of the last element?

<details>
<summary>Show answers</summary>

1. Index `0` — arrays always start counting from zero.
2. It adds "mango" to the end of the array and increases its length by 1.
3. Index `4` — because the last index is always `length - 1`, and `5 - 1 = 4`.

</details>

---

**Next up → [Section 14: Loops](../Section%2014%20-%20Loops/README.md)**
Stop writing repetitive code — let loops do the repeating for you. 🔁
