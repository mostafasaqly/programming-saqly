# Section 20: Binary Numbers *(Optional Deep-Dive)*

> **Introduction to Programming** — Section 20 of 25
> Estimated time: ~30 minutes · Level: Optional
> ℹ️ You do **not** need this to write programs. Read it to understand how computers count.

Computers count in binary — using only 0 and 1 — because that's what transistors do. Understanding binary isn't required, but it makes concepts like data types, bitwise operations, and memory much clearer.

---

## Table of Contents

1. [What Is the Binary System?](#1-what-is-the-binary-system)
2. [Decimal vs Binary](#2-decimal-vs-binary)
3. [Why Computers Use Binary](#3-why-computers-use-binary)
4. [Convert Binary to Decimal](#4-convert-binary-to-decimal)
5. [Convert Decimal to Binary](#5-convert-decimal-to-binary)
6. [Binary Examples in Programming](#6-binary-examples-in-programming)
7. [Practice: Binary Conversion](#7-practice-binary-conversion)

---

## 1. What Is the Binary System?

The **binary system** (base-2) is a number system that uses only two digits: **0** and **1**.

The number system you use every day is **decimal** (base-10) — it uses ten digits: 0 through 9.

| System | Base | Digits used |
| --- | --- | --- |
| Decimal | 10 | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 |
| Binary | 2 | 0, 1 |
| Hexadecimal | 16 | 0-9, A, B, C, D, E, F |

---

## 2. Decimal vs Binary

### Decimal (base-10)

In decimal, each position represents a power of 10:

```
Number: 4 2 5
         │ │ └── 5 × 10⁰ = 5 × 1   =   5
         │ └──── 2 × 10¹ = 2 × 10  =  20
         └────── 4 × 10² = 4 × 100 = 400
                                     ─────
                                      425
```

### Binary (base-2)

In binary, each position represents a power of 2:

```
Number: 1 1 0 1
         │ │ │ └── 1 × 2⁰ = 1 × 1 =  1
         │ │ └──── 0 × 2¹ = 0 × 2 =  0
         │ └────── 1 × 2² = 1 × 4 =  4
         └──────── 1 × 2³ = 1 × 8 =  8
                                    ───
                                     13
```

So binary `1101` = decimal `13`.

### Powers of 2

| Power | Value |
| --- | --- |
| 2⁰ | 1 |
| 2¹ | 2 |
| 2² | 4 |
| 2³ | 8 |
| 2⁴ | 16 |
| 2⁵ | 32 |
| 2⁶ | 64 |
| 2⁷ | 128 |

---

## 3. Why Computers Use Binary

Electronic components have two stable states:
- A transistor: **open** (no current) or **closed** (current flowing)
- A capacitor: **charged** or **discharged**
- A magnetic domain: **north** or **south**

It's physically easy and reliable to distinguish two states. It's much harder to reliably distinguish ten states (0-9) in hardware. So binary was the natural choice for electronic computers.

Once you have binary hardware, all of mathematics, text, images, and audio can be encoded as patterns of 0s and 1s.

---

## 4. Convert Binary to Decimal

To convert binary to decimal: multiply each bit by its place value (power of 2) and sum the results.

### Method

Write out the powers of 2 from right to left, multiply by each bit, sum up.

```
Binary: 10110

Position:  4  3  2  1  0   ← bit position (starts from right at 0)
Power:    16  8  4  2  1   ← 2^position
Bit:       1  0  1  1  0

1×16 + 0×8 + 1×4 + 1×2 + 0×1
=  16 +  0 +  4 +  2 +  0
= 22
```

Binary `10110` = Decimal `22`

### More examples

```
Binary: 1111
= 1×8 + 1×4 + 1×2 + 1×1 = 8+4+2+1 = 15

Binary: 10000000
= 1×128 + 0+0+0+0+0+0+0 = 128

Binary: 01000001
= 0+1×64+0+0+0+0+0+1 = 65 ← ASCII code for 'A'
```

---

## 5. Convert Decimal to Binary

To convert decimal to binary: **repeatedly divide by 2 and record the remainders**, then read them bottom to top.

### Method

```
Convert 25 to binary:

25 ÷ 2 = 12, remainder 1  ← least significant bit
12 ÷ 2 =  6, remainder 0
 6 ÷ 2 =  3, remainder 0
 3 ÷ 2 =  1, remainder 1
 1 ÷ 2 =  0, remainder 1  ← most significant bit

Read remainders bottom to top: 11001
```

25 in decimal = **11001** in binary

### Verify

```
11001 = 1×16 + 1×8 + 0×4 + 0×2 + 1×1
      = 16 + 8 + 0 + 0 + 1
      = 25 ✅
```

### Another example: convert 100

```
100 ÷ 2 = 50, remainder 0
 50 ÷ 2 = 25, remainder 0
 25 ÷ 2 = 12, remainder 1
 12 ÷ 2 =  6, remainder 0
  6 ÷ 2 =  3, remainder 0
  3 ÷ 2 =  1, remainder 1
  1 ÷ 2 =  0, remainder 1

Bottom to top: 1100100
```

100 decimal = **1100100** binary

---

## 6. Binary Examples in Programming

### Integer types and their binary capacity

```
8-bit integer:  can store values 0 to 255 (2⁸ = 256 values)
16-bit integer: can store values 0 to 65,535
32-bit integer: can store values 0 to ~4 billion
```

### Integer overflow

If you try to store a number too large for the data type:

```python
# Python handles this automatically with big integers
# In other languages:

# C — 8-bit unsigned integer
uint8_t x = 255;
x = x + 1;  // overflows! becomes 0 (wraps around)
```

This is why choosing the right data type matters.

### Bitwise operators in context

```javascript
// Bitwise AND — tests if a specific bit is set
let flags = 0b1011; // binary literal: bit pattern 1011
let mask  = 0b0010; // check if bit 1 is set

if (flags & mask) {
    console.log("Bit 1 is set"); // 1011 & 0010 = 0010 (truthy)
}

// Left shift — multiply by powers of 2
let x = 3;
console.log(x << 1); // 6 (3 × 2)
console.log(x << 2); // 12 (3 × 4)
```

Bitwise operators are common in systems programming, game development, and compression algorithms.

### Checking even/odd with binary

Any even number has `0` as its last bit. Any odd number has `1` as its last bit.

```javascript
function isEven(n) {
    return (n & 1) === 0; // check last bit
}

console.log(isEven(6));  // true  (binary: 110 — last bit is 0)
console.log(isEven(7));  // false (binary: 111 — last bit is 1)
```

This is faster than `n % 2 === 0` — a micro-optimization used in performance-critical code.

---

## 7. Practice: Binary Conversion

**Task 1:** Convert these binary numbers to decimal:
1. `1010`
2. `11111111`
3. `00100000`
4. `10000001`

**Task 2:** Convert these decimal numbers to binary:
1. `10`
2. `64`
3. `200`
4. `255`

**Task 3:** Write a function that converts decimal to binary:

```javascript
function decimalToBinary(n) {
    if (n === 0) return "0";

    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary; // prepend the remainder
        n = Math.floor(n / 2);
    }
    return binary;
}

console.log(decimalToBinary(25));  // "11001"
console.log(decimalToBinary(100)); // "1100100"
console.log(decimalToBinary(0));   // "0"
```

<details>
<summary>Show answers for Tasks 1 and 2</summary>

Task 1 — Binary to Decimal:
1. `1010` = 8+0+2+0 = **10**
2. `11111111` = 128+64+32+16+8+4+2+1 = **255** (maximum 8-bit value)
3. `00100000` = 32 = **32**
4. `10000001` = 128+1 = **129**

Task 2 — Decimal to Binary:
1. 10 = **1010**
2. 64 = **1000000**
3. 200 = **11001000**
4. 255 = **11111111**

</details>

---

## ✅ Section 20 Recap

You now know:
- **Binary** is base-2 — uses only 0 and 1.
- Each position in a binary number represents a **power of 2** (1, 2, 4, 8, 16 …).
- **Binary to decimal**: multiply each bit by its place value, sum the results.
- **Decimal to binary**: divide by 2 repeatedly, read remainders bottom to top.
- Computers use binary because hardware switches have exactly **two stable states**.
- Data types have binary size limits — exceeding them causes **overflow**.

### Knowledge check

1. What does binary `1010` equal in decimal?
2. What does decimal `8` look like in binary?
3. Why do computers use binary instead of decimal?

<details>
<summary>Show answers</summary>

1. 1×8 + 0×4 + 1×2 + 0×1 = **10**.
2. 8 = 2³ = **1000** in binary.
3. Electronic hardware can reliably distinguish two states (on/off, charged/uncharged). Distinguishing ten reliable states is much harder in hardware.

</details>

---

**Next up → [Section 21: Hexadecimal Numbers](../Section%2021%20-%20Hexadecimal%20Numbers/README.md)**
A compact way to write binary — used everywhere in programming (colors, memory addresses, character codes). 🎨
