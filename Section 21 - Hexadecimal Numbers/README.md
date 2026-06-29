# Section 21: Hexadecimal Numbers *(Optional Deep-Dive)*

> **Introduction to Programming** — Section 21 of 25
> Estimated time: ~25 minutes · Level: Optional
> ℹ️ You will see hex values in CSS colors, memory addresses, and encoding. This section explains them.

Binary is great for computers but painful for humans to read. A single byte (8 bits) already takes 8 digits in binary. Hexadecimal solves this — it represents the same values in a much more compact form.

---

## Table of Contents

1. [What Is Hexadecimal?](#1-what-is-hexadecimal)
2. [Decimal vs Binary vs Hexadecimal](#2-decimal-vs-binary-vs-hexadecimal)
3. [Why Hexadecimal Is Used](#3-why-hexadecimal-is-used)
4. [Hexadecimal in Colors](#4-hexadecimal-in-colors)
5. [Hexadecimal in Memory Addresses](#5-hexadecimal-in-memory-addresses)
6. [Convert Hexadecimal to Decimal](#6-convert-hexadecimal-to-decimal)
7. [Practice: Read Hex Color Codes](#7-practice-read-hex-color-codes)

---

## 1. What Is Hexadecimal?

**Hexadecimal** (hex) is a base-16 number system. It uses 16 symbols:

```
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

When the digits run out (after 9), letters continue:
- A = 10
- B = 11
- C = 12
- D = 13
- E = 14
- F = 15

### Notation

Hex values are often prefixed with `0x` or `#` to show they're hexadecimal:

```
0xFF      ← common in programming (C, JavaScript, Python)
#FF6600   ← common in CSS colors
FF        ← common in memory dumps
```

---

## 2. Decimal vs Binary vs Hexadecimal

The same number in all three systems:

| Decimal | Binary | Hexadecimal |
| --- | --- | --- |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 15 | 1111 | F |
| 16 | 0001 0000 | 10 |
| 255 | 1111 1111 | FF |
| 256 | 0001 0000 0000 | 100 |

Notice: **one hex digit = exactly 4 binary bits**. This is why hex is so convenient — it directly maps to groups of 4 bits.

```
Binary:  1111  1111
Hex:       F     F
Decimal: 255
```

`FF` in hex = `11111111` in binary = `255` in decimal.

---

## 3. Why Hexadecimal Is Used

### Reason 1: Compact representation of binary

Binary `11111111 00110101 10110010` is hard to read.
Hexadecimal `FF35B2` is much shorter — and each hex pair directly represents one byte.

### Reason 2: One hex digit = 4 bits (nibble)

Two hex digits = 8 bits = one byte. This makes it easy to work with memory values.

```
1 byte → 2 hex digits
4 bytes → 8 hex digits
Memory address: 0x7FFF5FBF8A50
```

### Reason 3: Widely used in computing

- **CSS colors**: `#FF6600` (orange)
- **Memory addresses**: `0x00007FFF5FBF8A50`
- **Character encoding**: `U+0041` is Unicode for 'A'
- **File signatures**: JPEG files start with bytes `FF D8 FF`
- **Cryptographic hashes**: `SHA-256: 2c624232...`

---

## 4. Hexadecimal in Colors

CSS uses hex to represent RGB colors. Each color is 3 bytes: Red, Green, Blue — each 0-255.

### Format

```
#RRGGBB
  ││└── Blue  (00 to FF)
  │└─── Green (00 to FF)
  └──── Red   (00 to FF)
```

### Examples

| Hex color | R | G | B | Color |
| --- | --- | --- | --- | --- |
| `#FF0000` | 255 | 0 | 0 | Red |
| `#00FF00` | 0 | 255 | 0 | Green |
| `#0000FF` | 0 | 0 | 255 | Blue |
| `#FFFFFF` | 255 | 255 | 255 | White |
| `#000000` | 0 | 0 | 0 | Black |
| `#FF6600` | 255 | 102 | 0 | Orange |
| `#1E90FF` | 30 | 144 | 255 | Dodger Blue |

### Reading hex colors

`#FF6600`:
- `FF` = 255 red (full red)
- `66` = 102 green (some green)
- `00` = 0 blue (no blue)
→ Orange

### JavaScript color example

```javascript
// CSS hex in JavaScript
let element = document.getElementById("box");
element.style.backgroundColor = "#FF6600"; // orange

// Convert hex to RGB
function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRgb("#FF6600")); // "rgb(255, 102, 0)"
```

---

## 5. Hexadecimal in Memory Addresses

When you open a debugger or look at a crash report, you'll see memory addresses like:

```
0x00007FFF5FBF8A50
0x000000000040012D
```

These are locations in the computer's RAM, expressed in hex. Each address points to a specific byte in memory.

### Why hex for addresses?

A 64-bit memory address in binary: `0000000000000000011111111111111101011111101111111000101001010000`
The same address in hex: `00007FFF5FBF8A50`

Much more readable. Same exact value.

---

## 6. Convert Hexadecimal to Decimal

Like binary, each hex position represents a power of its base (16).

```
Position values (right to left): 1, 16, 256, 4096...
                                  16⁰, 16¹, 16², 16³
```

### Example: convert `FF` to decimal

```
F F
│ └── F × 16⁰ = 15 × 1  =  15
└──── F × 16¹ = 15 × 16 = 240
                           ───
                           255
```

`FF` hex = `255` decimal.

### Example: convert `1A3` to decimal

```
1 A 3
│ │ └── 3 × 16⁰ = 3 × 1   =   3
│ └──── A × 16¹ = 10 × 16 = 160
└────── 1 × 16² = 1 × 256 = 256
                             ───
                             419
```

`1A3` hex = `419` decimal.

### In JavaScript

```javascript
// Convert hex string to decimal
parseInt("FF", 16);   // 255 (parse "FF" as base 16)
parseInt("1A3", 16);  // 419
parseInt("0A", 16);   // 10

// Convert decimal to hex string
(255).toString(16);   // "ff"
(419).toString(16);   // "1a3"
(255).toString(16).toUpperCase(); // "FF"
```

---

## 7. Practice: Read Hex Color Codes

**Task 1:** Convert these hex color codes to RGB:
1. `#FF0000`
2. `#00FFFF`
3. `#808080`
4. `#1A2B3C`

**Task 2:** Write a function that takes R, G, B values (0-255) and returns the hex color code:

```javascript
function rgbToHex(r, g, b) {
    // Convert each value to hex (2 digits)
    // Hint: use .toString(16).padStart(2, '0').toUpperCase()
    // Return "#RRGGBB"
}

console.log(rgbToHex(255, 102, 0)); // "#FF6600"
console.log(rgbToHex(0, 0, 0));     // "#000000"
console.log(rgbToHex(255, 255, 255)); // "#FFFFFF"
```

**Task 3:** Convert these hex numbers to decimal:
1. `0xFF`
2. `0x1F`
3. `0xA0`

<details>
<summary>Show answers</summary>

Task 1:
1. `#FF0000` → R:255 G:0 B:0 — Red
2. `#00FFFF` → R:0 G:255 B:255 — Cyan
3. `#808080` → R:128 G:128 B:128 — Gray
4. `#1A2B3C` → R:26 G:43 B:60 — Dark navy

Task 2 solution:
```javascript
function rgbToHex(r, g, b) {
    return "#" +
        r.toString(16).padStart(2, '0').toUpperCase() +
        g.toString(16).padStart(2, '0').toUpperCase() +
        b.toString(16).padStart(2, '0').toUpperCase();
}
```

Task 3:
1. `0xFF` = 15×16 + 15 = **255**
2. `0x1F` = 1×16 + 15 = **31**
3. `0xA0` = 10×16 + 0 = **160**

</details>

---

## ✅ Section 21 Recap

You now know:
- **Hexadecimal** is base-16 — uses digits 0-9 and letters A-F (where A=10 through F=15).
- **One hex digit = 4 bits**; two hex digits = one byte.
- Hex is more compact than binary — `FF` vs `11111111` for the same value.
- CSS colors use `#RRGGBB` hex format — each pair is one color channel (0-255).
- Memory addresses are written in hex.
- Convert hex to decimal: multiply each digit by its power of 16 and sum.
- JavaScript: `parseInt("FF", 16)` parses hex → decimal; `.toString(16)` formats decimal → hex.

### Knowledge check

1. What does the letter `A` represent in hexadecimal?
2. Why is hexadecimal useful compared to binary?
3. What color does `#FF0000` represent?

<details>
<summary>Show answers</summary>

1. `A` = 10 in decimal.
2. Hexadecimal is much more compact — one hex digit represents 4 binary bits. A byte (8 bits) takes 8 binary digits but only 2 hex digits, making it far easier for humans to read.
3. Red — `FF` red, `00` green, `00` blue.

</details>

---

**Next up → [Section 22: Boolean Algebra](../Section%2022%20-%20Boolean%20Algebra/README.md)**
The math behind true/false — and why AND, OR, NOT are more powerful than they look. 🧮
