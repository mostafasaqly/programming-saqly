# Section 19: Bits and Bytes *(Optional Deep-Dive)*

> **Introduction to Programming** — Section 19 of 25
> Estimated time: ~25 minutes · Level: Optional
> ℹ️ You do **not** need this to write programs. Read it to understand how computers store everything.

Every piece of data in a computer — your name, a photo, a video, a program — is ultimately stored as ones and zeros. This section explains how.

---

## Table of Contents

1. [How Computers Store Data](#1-how-computers-store-data)
2. [What Is a Bit?](#2-what-is-a-bit)
3. [What Is a Byte?](#3-what-is-a-byte)
4. [Bits, Bytes, KB, MB, GB](#4-bits-bytes-kb-mb-gb)
5. [Why Programmers Should Understand Memory](#5-why-programmers-should-understand-memory)
6. [Text, Numbers, and Binary Storage](#6-text-numbers-and-binary-storage)
7. [Practice: Convert Storage Units](#7-practice-convert-storage-units)

---

## 1. How Computers Store Data

At the hardware level, computers are built from billions of tiny electronic switches. Each switch has exactly two states: **on** or **off**.

- **On** = 1
- **Off** = 0

That's it. Everything stored in a computer — every character, every pixel, every instruction — is ultimately a pattern of 1s and 0s. The computer reads these patterns and interprets them as numbers, text, colors, or instructions depending on context.

---

## 2. What Is a Bit?

A **bit** is the smallest unit of data in a computer. It holds exactly one value: either **0** or **1**.

The word "bit" comes from **b**inary dig**it**.

```
Bit examples:
0
1
```

One bit can represent two things: yes/no, on/off, true/false.

### What you can store with bits

| Number of bits | Possible combinations | What you can represent |
| --- | --- | --- |
| 1 bit | 2 (0 or 1) | True/False |
| 2 bits | 4 (00, 01, 10, 11) | Four options |
| 4 bits | 16 | 16 options |
| 8 bits | 256 | One byte |
| 16 bits | 65,536 | Larger numbers |

Each added bit doubles the number of possible values. With n bits, you can store 2ⁿ different values.

---

## 3. What Is a Byte?

A **byte** is a group of **8 bits**. It's the basic unit of storage in computing.

```
1 byte = 8 bits
Example byte: 01001000
```

With 8 bits, you can have 2⁸ = **256** different values (0 through 255).

### Why 8 bits?

8-bit groupings became the standard in the 1960s-70s because:
- 8 bits can represent all basic characters in the English alphabet (A-Z, a-z, numbers, punctuation)
- Powers of 2 work naturally with binary hardware

### One byte in practice

A single character — like the letter `A` — takes one byte of storage in ASCII encoding:
- `A` = 65 in decimal = `01000001` in binary

---

## 4. Bits, Bytes, KB, MB, GB

Storage is measured in multiples of bytes:

| Unit | Symbol | Value |
| --- | --- | --- |
| Bit | b | 0 or 1 |
| Byte | B | 8 bits |
| Kilobyte | KB | 1,024 bytes |
| Megabyte | MB | 1,024 KB = 1,048,576 bytes |
| Gigabyte | GB | 1,024 MB = ~1 billion bytes |
| Terabyte | TB | 1,024 GB = ~1 trillion bytes |

> ⚠️ Note: In computing, 1 KB = 1,024 bytes (not 1,000) because we use powers of 2. In marketing (hard drive labels), 1 KB is sometimes defined as 1,000 bytes. This is why your 1 TB drive shows as ~931 GB in Windows.

### Practical sizes

| File type | Typical size |
| --- | --- |
| Text file (this section) | ~15 KB |
| High-resolution photo | ~5 MB |
| 3-minute MP3 song | ~3-5 MB |
| Full HD movie (2 hours) | ~4-15 GB |
| Modern video game | ~50-100 GB |

---

## 5. Why Programmers Should Understand Memory

You won't need to manually count bytes in most modern programming. But understanding memory helps you:

### 1. Choose the right data type

```java
// Java — different number types use different amounts of memory
byte b = 127;      // 1 byte — values -128 to 127
short s = 32000;   // 2 bytes — values -32,768 to 32,767
int i = 2000000;   // 4 bytes — values up to ~2 billion
long l = 9000000000000L; // 8 bytes — very large numbers
```

Choosing an `int` for a counter that never exceeds 10 wastes memory. Choosing a `byte` for a number that needs to reach 300 causes an overflow error.

### 2. Understand performance limits

- Loading a 2 GB file into RAM for processing — will it fit?
- Sending 10 MB images over a slow connection — how long will it take?
- Storing 100 million user records — how much disk space?

### 3. Understand encoding

Text is stored as numbers. The letter `A` is stored as `65`. `Z` is `90`. `a` is `97`. This system is called **ASCII** (American Standard Code for Information Interchange).

```javascript
// JavaScript
console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // "A"
```

Modern systems use **Unicode** (which supports all languages, emoji, and special symbols), but the underlying idea is the same — each character maps to a number.

---

## 6. Text, Numbers, and Binary Storage

### How numbers are stored

The number `25` stored in a byte:

```
Decimal: 25
Binary:  00011001
```

(Binary number system is explained fully in Section 20.)

### How text is stored

Each character is stored as a number using a lookup table (like ASCII or Unicode):

```
"Hi" stored as:
H = 72 = 01001000
i = 105 = 01101001

So "Hi" = 01001000 01101001 (2 bytes)
```

### How images are stored

Images are grids of pixels. Each pixel is a color. Each color is usually stored as 3 bytes (Red, Green, Blue — 0-255 each):

```
Pixel color (255, 128, 0) = orange
Stored as: 11111111 10000000 00000000 (3 bytes)
```

A 1920×1080 pixel image with no compression = 1920 × 1080 × 3 bytes = ~6 MB.

### Everything is numbers

- Text → character codes (numbers)
- Images → pixel color values (numbers)
- Audio → sound wave samples (numbers)
- Video → sequences of image frames (numbers)
- Programs → machine code instructions (numbers)

The computer doesn't "know" the difference — it's all just patterns of bits. The context (file format, data type) tells software how to interpret the bits.

---

## 7. Practice: Convert Storage Units

**Task 1:** Convert the following to bytes:
1. 5 KB
2. 2.5 MB
3. 0.5 GB

**Task 2:** If a text file contains 50,000 characters (each 1 byte in ASCII), what is its size in KB?

**Task 3:** A photo is 3,000 × 2,000 pixels. Each pixel takes 3 bytes. What is the uncompressed size?
- In bytes?
- In MB?

**Task 4:** Write a small function that converts bytes to KB, MB, and GB:

```javascript
function convertStorage(bytes) {
    const KB = 1024;
    const MB = 1024 * KB;
    const GB = 1024 * MB;

    // Display all three conversions
}

convertStorage(5242880); // 5 MB
// Expected output:
// 5,242,880 bytes
// 5,120 KB
// 5 MB
// 0.005 GB
```

<details>
<summary>Show answers for Tasks 1-3</summary>

1. 5 KB = 5 × 1024 = **5,120 bytes**
2. 2.5 MB = 2.5 × 1024 × 1024 = **2,621,440 bytes**
3. 0.5 GB = 0.5 × 1024 × 1024 × 1024 = **536,870,912 bytes**

Task 2: 50,000 bytes ÷ 1024 ≈ **48.8 KB**

Task 3:
- 3000 × 2000 × 3 = **18,000,000 bytes**
- ÷ 1024 ÷ 1024 ≈ **17.2 MB**

</details>

---

## ✅ Section 19 Recap

You now know:
- A **bit** is the smallest unit of data — either 0 or 1.
- A **byte** is 8 bits — the basic storage unit.
- Storage scales: 1024 bytes = 1 KB, 1024 KB = 1 MB, 1024 MB = 1 GB.
- Everything in a computer — text, images, audio, code — is stored as numbers (bits and bytes).
- Characters are stored using **ASCII** or **Unicode** — a number-to-character lookup table.
- Understanding memory helps you choose the right data types and understand performance.

### Knowledge check

1. How many bits are in a byte?
2. How many bytes are in 1 MB?
3. What is ASCII?

<details>
<summary>Show answers</summary>

1. 8 bits = 1 byte.
2. 1 MB = 1024 KB = 1024 × 1024 = **1,048,576 bytes**.
3. ASCII (American Standard Code for Information Interchange) is a standard that maps characters (letters, numbers, punctuation) to numbers. For example, `A` = 65, `B` = 66, etc. It allows computers to store and communicate text as numbers.

</details>

---

**Next up → [Section 20: Binary Numbers](../Section%2020%20-%20Binary%20Numbers/README.md)**
Learn the base-2 number system that all computers use internally. 🔢
