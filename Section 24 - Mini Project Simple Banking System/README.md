# Section 24: Mini Project — Simple Banking System

> **Introduction to Programming** — Section 24 of 25
> Estimated time: ~60 minutes · Level: Beginner
> 🎯 **Project section** — your second complete program.

You've already built a grade report. Now build something more interactive — a banking system that lets you deposit money, withdraw money, validates operations, and always shows a clear account summary.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Define Account Balance](#2-define-account-balance)
3. [Deposit Money](#3-deposit-money)
4. [Withdraw Money](#4-withdraw-money)
5. [Validate User Operations](#5-validate-user-operations)
6. [Use Conditions](#6-use-conditions)
7. [Use Functions](#7-use-functions)
8. [Display Account Summary](#8-display-account-summary)
9. [Final Project Review](#9-final-project-review)

---

## 1. Project Overview

**What you'll build:** A banking program that simulates an account — deposit, withdraw, check balance, and view transaction history.

**What it does:**
- Holds an account owner name and balance
- Accepts deposits (validates amount > 0)
- Accepts withdrawals (validates amount > 0 and doesn't exceed balance)
- Records every transaction with a description
- Displays a full account statement at any time

**Final output will look like:**
```
====================================
      ACCOUNT STATEMENT
====================================
Account:     Sara Ahmed
====================================
Date         Description      Amount
------------------------------------
Opening      Initial deposit  +1000.00
2024-01-05   Salary           +3000.00
2024-01-07   Rent             -1200.00
2024-01-10   Groceries        -250.00
2024-01-12   Freelance work   +500.00
------------------------------------
Total In:    +4500.00
Total Out:   -1450.00
Balance:     $3050.00
====================================
```

---

## 2. Define Account Balance

Set up the account data:

```javascript
// Account information
let ownerName   = "Sara Ahmed";
let balance     = 0;

// Transaction history — each entry is an object with description and amount
let transactions = [];

// Constants
const MIN_DEPOSIT    = 1;
const MIN_WITHDRAWAL = 1;
const OVERDRAFT_LIMIT = 0; // no overdraft — can't go below 0
```

### Initialize with an opening balance

```javascript
function openAccount(owner, initialDeposit) {
    ownerName = owner;
    balance   = initialDeposit;

    transactions.push({
        description: "Account opened",
        amount: initialDeposit,
        type: "credit"
    });

    console.log(`Account opened for ${ownerName} with $${initialDeposit.toFixed(2)}`);
}

openAccount("Sara Ahmed", 1000);
```

---

## 3. Deposit Money

```javascript
function deposit(amount, description = "Deposit") {
    // Validation
    if (isNaN(amount) || amount <= 0) {
        console.log("Error: Deposit amount must be a positive number.");
        return false;
    }

    // Update balance
    balance += amount;

    // Record transaction
    transactions.push({
        description: description,
        amount: amount,
        type: "credit"
    });

    console.log(`Deposited: $${amount.toFixed(2)} | New Balance: $${balance.toFixed(2)}`);
    return true;
}

deposit(3000, "Salary");
deposit(500, "Freelance work");
```

---

## 4. Withdraw Money

```javascript
function withdraw(amount, description = "Withdrawal") {
    // Validation: amount must be positive
    if (isNaN(amount) || amount <= 0) {
        console.log("Error: Withdrawal amount must be a positive number.");
        return false;
    }

    // Validation: sufficient funds
    if (amount > balance) {
        console.log(`Error: Insufficient funds. Balance: $${balance.toFixed(2)}, Requested: $${amount.toFixed(2)}`);
        return false;
    }

    // Update balance
    balance -= amount;

    // Record transaction
    transactions.push({
        description: description,
        amount: amount,
        type: "debit"
    });

    console.log(`Withdrawn: $${amount.toFixed(2)} | New Balance: $${balance.toFixed(2)}`);
    return true;
}

withdraw(1200, "Rent");
withdraw(250, "Groceries");
withdraw(5000, "Vacation"); // should fail — insufficient funds
```

---

## 5. Validate User Operations

Validation is the core of a banking system. A deposit or withdrawal that doesn't validate is a bug (or a fraud risk).

### Validation rules

| Operation | Validation |
| --- | --- |
| Deposit | Amount must be a number, greater than 0 |
| Withdraw | Amount must be a number, greater than 0, less than or equal to balance |
| Transfer | Same as both deposit and withdrawal |

### Centralized validation function

```javascript
function isValidAmount(amount) {
    if (typeof amount !== "number") {
        console.log("Error: Amount must be a number.");
        return false;
    }
    if (isNaN(amount)) {
        console.log("Error: Invalid number.");
        return false;
    }
    if (amount <= 0) {
        console.log("Error: Amount must be greater than zero.");
        return false;
    }
    return true;
}
```

Use this in both `deposit` and `withdraw` to keep validation in one place.

---

## 6. Use Conditions

Conditions appear everywhere in this system:

```javascript
// Is the amount valid?
if (!isValidAmount(amount)) return false;

// Can the withdrawal happen?
if (amount > balance) {
    console.log("Insufficient funds");
    return false;
}

// Is this a credit or debit? (for display)
let sign = transaction.type === "credit" ? "+" : "-";

// Is the balance healthy?
if (balance < 100) {
    console.log("Warning: Low balance!");
}
```

Each condition handles a specific scenario. Clear, one-purpose conditions are easy to read and maintain.

---

## 7. Use Functions

The complete function set:

```javascript
function isValidAmount(amount) {
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
}

function openAccount(owner, initialDeposit) {
    ownerName = owner;
    balance   = 0;
    transactions = [];
    deposit(initialDeposit, "Initial deposit");
    console.log(`Account opened for ${ownerName}`);
}

function deposit(amount, description = "Deposit") {
    if (!isValidAmount(amount)) {
        console.log("Error: Invalid deposit amount.");
        return false;
    }
    balance += amount;
    transactions.push({ description, amount, type: "credit" });
    return true;
}

function withdraw(amount, description = "Withdrawal") {
    if (!isValidAmount(amount)) {
        console.log("Error: Invalid withdrawal amount.");
        return false;
    }
    if (amount > balance) {
        console.log(`Error: Insufficient funds. Available: $${balance.toFixed(2)}`);
        return false;
    }
    balance -= amount;
    transactions.push({ description, amount, type: "debit" });
    return true;
}

function getBalance() {
    return balance;
}

function displayStatement() {
    // See next section
}
```

Each function has one responsibility. They're short, readable, and testable.

---

## 8. Display Account Summary

```javascript
function displayStatement() {
    const LINE    = "====================================";
    const DIVIDER = "------------------------------------";

    let totalIn  = 0;
    let totalOut = 0;

    console.log(LINE);
    console.log("      ACCOUNT STATEMENT");
    console.log(LINE);
    console.log("Account:     " + ownerName);
    console.log(LINE);
    console.log("Description          Amount");
    console.log(DIVIDER);

    for (let i = 0; i < transactions.length; i++) {
        let t    = transactions[i];
        let sign = t.type === "credit" ? "+" : "-";
        let desc = t.description.padEnd(21);
        let amt  = sign + "$" + t.amount.toFixed(2);

        console.log(desc + amt);

        if (t.type === "credit") totalIn  += t.amount;
        else                     totalOut += t.amount;
    }

    console.log(DIVIDER);
    console.log("Total In:    +$" + totalIn.toFixed(2));
    console.log("Total Out:   -$" + totalOut.toFixed(2));
    console.log("Balance:      $" + balance.toFixed(2));
    console.log(LINE);

    if (balance < 100) {
        console.log("⚠ Warning: Your balance is low.");
    }
}
```

---

## 9. Final Project Review

### Complete program

```javascript
// ─── State ───────────────────────────────────────────────
let ownerName    = "";
let balance      = 0;
let transactions = [];

// ─── Functions ───────────────────────────────────────────
function isValidAmount(amount) {
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
}

function openAccount(owner, initialDeposit) {
    ownerName    = owner;
    balance      = 0;
    transactions = [];
    if (!isValidAmount(initialDeposit)) {
        console.log("Invalid initial deposit.");
        return;
    }
    balance = initialDeposit;
    transactions.push({ description: "Initial deposit", amount: initialDeposit, type: "credit" });
}

function deposit(amount, description = "Deposit") {
    if (!isValidAmount(amount)) { console.log("Invalid deposit."); return false; }
    balance += amount;
    transactions.push({ description, amount, type: "credit" });
    return true;
}

function withdraw(amount, description = "Withdrawal") {
    if (!isValidAmount(amount)) { console.log("Invalid amount."); return false; }
    if (amount > balance) { console.log("Insufficient funds."); return false; }
    balance -= amount;
    transactions.push({ description, amount, type: "debit" });
    return true;
}

function displayStatement() {
    const L = "====================================";
    const D = "------------------------------------";
    let totalIn = 0, totalOut = 0;

    console.log(L);
    console.log("      ACCOUNT STATEMENT");
    console.log(L);
    console.log("Account:     " + ownerName);
    console.log(L);
    console.log("Description          Amount");
    console.log(D);

    for (let t of transactions) {
        let sign = t.type === "credit" ? "+" : "-";
        console.log(t.description.padEnd(21) + sign + "$" + t.amount.toFixed(2));
        if (t.type === "credit") totalIn  += t.amount;
        else                     totalOut += t.amount;
    }

    console.log(D);
    console.log("Total In:    +$" + totalIn.toFixed(2));
    console.log("Total Out:   -$" + totalOut.toFixed(2));
    console.log("Balance:      $" + balance.toFixed(2));
    console.log(L);
}

// ─── Run ─────────────────────────────────────────────────
openAccount("Sara Ahmed", 1000);
deposit(3000, "Salary");
withdraw(1200, "Rent");
withdraw(250, "Groceries");
deposit(500, "Freelance work");
withdraw(5000, "Vacation");   // fails — insufficient funds

displayStatement();
```

### Concepts used

| Concept | Where used |
| --- | --- |
| Variables | ownerName, balance |
| Arrays | transactions array |
| Loops | `for...of` loop to display transactions |
| Conditions | Validation checks, credit/debit type check |
| Functions | deposit, withdraw, displayStatement, etc. |
| Strings | Formatting the statement |
| Booleans | Return values from deposit/withdraw |
| Type casting | `.toFixed(2)` for currency display |

### Extension challenges

1. **Transfer between accounts:** Create two accounts and add a `transfer(amount, targetAccount)` function.
2. **Interest:** Add a monthly interest calculation. Savings accounts earn 3% per month.
3. **Transaction limit:** Limit withdrawals to 3 per day. Add a counter that resets daily.
4. **Account history search:** Add a function to find all transactions matching a description.

```javascript
function searchTransactions(keyword) {
    return transactions.filter(t =>
        t.description.toLowerCase().includes(keyword.toLowerCase())
    );
}

let salaryTx = searchTransactions("salary");
console.log(salaryTx);
```

---

## ✅ Section 24 Recap

You built a fully functional banking system that:
- Manages state (balance) with proper validation
- Records every transaction in an array
- Handles errors gracefully with clear messages
- Displays a professional formatted statement
- Uses functions to organize all logic cleanly

This is significantly more complex than the grade system — and you built it using the same fundamental concepts: variables, arrays, loops, conditions, and functions.

---

**Next up → [Section 25: Final Review and Next Steps](../Section%2025%20-%20Final%20Review%20and%20Next%20Steps/README.md)**
Recap everything, celebrate your progress, and plan your next move. 🚀
