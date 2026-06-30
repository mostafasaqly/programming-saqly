import type { SectionContent } from './sections.data';

export const SECTIONS_PART7: SectionContent[] = [
  {
    id: 23,
    part: 7,
    partTitleAr: 'مشاريع صغيرة',
    partTitleEn: 'Mini Projects',
    titleAr: 'مشروع: نظام درجات الطلاب',
    titleEn: 'Mini Project: Student Grade System',
    descriptionAr: 'طبّق ما تعلمته في مشروع حقيقي — نظام لإدخال درجات الطلاب وحساب المعدل وتحديد التقدير.',
    descriptionEn: 'Apply what you\'ve learned in a real project — a system to enter student grades, calculate averages, and determine letter grades.',
    estimatedTime: '60 min',
    level: 'intermediate',
    icon: '🎓',
    color: '#3fb950',
    conceptsAr: ['المصفوفات', 'الحلقات', 'الشروط', 'الدوال', 'تنسيق الإخراج'],
    conceptsEn: ['Arrays', 'Loops', 'Conditions', 'Functions', 'Output formatting'],
    conceptDescriptionsAr: [
      'المصفوفات تُخزّن درجات كل طالب في قائمة منظمة يمكن التكرار عليها.',
      'الحلقات تُمرّ على كل درجة في المصفوفة لجمعها وحساب المعدل.',
      'الشروط تُحدد التقدير الحرفي (A/B/C/D/F) بناءً على المعدل المحسوب.',
      'الدوال تُقسّم المشروع إلى وحدات مستقلة لكل منها مسؤولية واحدة.',
      'تنسيق الإخراج يُظهر التقرير بشكل منظم وقابل للقراءة باستخدام console.log.',
    ],
    conceptDescriptionsEn: [
      'Arrays store each student\'s grades in an organized list that can be iterated over.',
      'Loops go through every grade in the array to sum them up and calculate the average.',
      'Conditions determine the letter grade (A/B/C/D/F) based on the calculated average.',
      'Functions split the project into independent units, each with a single responsibility.',
      'Output formatting displays the report in an organized, readable way using console.log.',
    ],
    diagramType: 'project',
    codeExamples: [
      {
        language: 'javascript',
        code: `function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

function printReport(studentName, grades) {
  const avg = calculateAverage(grades);
  const letter = getLetterGrade(avg);
  console.log("=== Student Report ===");
  console.log("Name:    " + studentName);
  console.log("Grades:  " + grades.join(", "));
  console.log("Average: " + avg.toFixed(2));
  console.log("Grade:   " + letter);
}

printReport("Sara Ahmed", [92, 78, 85, 90, 88]);
printReport("Ali Hassan", [65, 72, 58, 70, 68]);`,
        descriptionAr: 'نظام تقرير درجات الطلاب الكامل',
        descriptionEn: 'Complete student grade report system',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'هذا المشروع يجمع: المصفوفات والحلقات والشروط والدوال',
      'حاول إضافة ميزات جديدة: ترتيب الطلاب، أعلى درجة، أدنى درجة',
      'يمكنك تطويره ليقرأ الدرجات من المستخدم بدلًا من كتابتها',
      'هذا هو نوع المشاريع التي تبنيها في الوظيفة الحقيقية',
    ],
    keyPointsEn: [
      'This project combines: arrays, loops, conditions, and functions',
      'Try adding features: ranking students, highest grade, lowest grade',
      'You can extend it to read grades from user input',
      'This is the type of project you\'ll build in real jobs',
    ],
    quiz: [
      {
        questionAr: 'ما الدالة المستخدمة لحساب المعدل؟',
        questionEn: 'What does the calculateAverage function do?',
        options: [
          'تطبع الدرجات / Prints grades',
          'تجمع الدرجات وتقسمها على عددها / Sums grades and divides by count',
          'ترتب الطلاب / Ranks students',
          'تحذف الدرجات / Deletes grades',
        ],
        correctIndex: 1,
        explanationAr: 'calculateAverage تجمع كل الدرجات ثم تقسمها على عدد الدرجات للحصول على المعدل.',
        explanationEn: 'calculateAverage sums all grades then divides by the count to get the average.',
      },
    ],
    challenges: [
      {
        titleAr: 'الخطوة 1: دالة التقدير الحرفي',
        titleEn: 'Step 1: Letter Grade Function',
        taskAr: 'ابدأ بكتابة دالة getLetterGrade تأخذ درجة وتُعيد A/B/C/D/F.',
        taskEn: 'Start by writing a getLetterGrade function that takes a score and returns A/B/C/D/F.',
        hintAr: '90+ = A، 80+ = B، 70+ = C، 60+ = D، أقل = F',
        hintEn: '90+ = A, 80+ = B, 70+ = C, 60+ = D, below = F',
        solutionPython: `def get_letter_grade(score):\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    if score >= 60: return "D"\n    return "F"\n\nprint(get_letter_grade(92))  # A\nprint(get_letter_grade(75))  # C`,
        solutionJs: `function getLetterGrade(score) {\n    if (score >= 90) return "A";\n    if (score >= 80) return "B";\n    if (score >= 70) return "C";\n    if (score >= 60) return "D";\n    return "F";\n}\n\nconsole.log(getLetterGrade(92)); // A\nconsole.log(getLetterGrade(75)); // C`,
      },
      {
        titleAr: 'الخطوة 2: دالة حساب المعدل',
        titleEn: 'Step 2: Average Calculator',
        taskAr: 'اكتب دالة calculateAverage تأخذ مصفوفة درجات وتُعيد المعدل.',
        taskEn: 'Write a calculateAverage function that takes an array of grades and returns the average.',
        hintAr: 'اجمع كل الدرجات ثم اقسمها على عدد الدرجات',
        hintEn: 'Sum all grades then divide by the count',
        solutionPython: `def calculate_average(grades):\n    total = sum(grades)\n    return total / len(grades)\n\ngrades = [85, 90, 78, 92, 88]\nprint(calculate_average(grades))  # 86.6`,
        solutionJs: `function calculateAverage(grades) {\n    let sum = 0;\n    for (let grade of grades) sum += grade;\n    return sum / grades.length;\n}\n\nlet grades = [85, 90, 78, 92, 88];\nconsole.log(calculateAverage(grades)); // 86.6`,
      },
      {
        titleAr: 'الخطوة 3: التقرير الكامل',
        titleEn: 'Step 3: Full Report',
        taskAr: 'الآن ادمج الدالتين في دالة printReport تطبع تقريراً كاملاً للطالب.',
        taskEn: 'Now combine both functions in a printReport function that prints a full student report.',
        hintAr: 'استدعِ calculateAverage ثم getLetterGrade ثم اطبع كل شيء',
        hintEn: 'Call calculateAverage, then getLetterGrade, then print everything',
        solutionPython: `def get_letter_grade(score):\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    if score >= 60: return "D"\n    return "F"\n\ndef calculate_average(grades):\n    return sum(grades) / len(grades)\n\ndef print_report(name, grades):\n    avg = calculate_average(grades)\n    letter = get_letter_grade(avg)\n    print(f"الطالب: {name}")\n    print(f"الدرجات: {grades}")\n    print(f"المعدل: {avg:.2f}")\n    print(f"التقدير: {letter}")\n\nprint_report("سارة أحمد", [92, 78, 85, 90, 88])`,
        solutionJs: `function getLetterGrade(score) {\n    if (score >= 90) return "A";\n    if (score >= 80) return "B";\n    if (score >= 70) return "C";\n    if (score >= 60) return "D";\n    return "F";\n}\n\nfunction calculateAverage(grades) {\n    let sum = 0;\n    for (let g of grades) sum += g;\n    return sum / grades.length;\n}\n\nfunction printReport(name, grades) {\n    const avg = calculateAverage(grades);\n    const letter = getLetterGrade(avg);\n    console.log("Student: " + name);\n    console.log("Grades: " + grades.join(", "));\n    console.log("Average: " + avg.toFixed(2));\n    console.log("Grade: " + letter);\n}\n\nprintReport("Sara Ahmed", [92, 78, 85, 90, 88]);`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان قسمة المجموع على عدد الدرجات عند حساب المعدل',
        mistakeEn: 'Forgetting to divide the sum by the count when calculating average',
        fixAr: 'المعدل = مجموع الدرجات ÷ عدد الدرجات',
        fixEn: 'Average = sum of grades ÷ number of grades',
      },
    ],
  },
  {
    id: 24,
    part: 7,
    partTitleAr: 'مشاريع صغيرة',
    partTitleEn: 'Mini Projects',
    titleAr: 'مشروع: نظام بنكي بسيط',
    titleEn: 'Mini Project: Simple Banking System',
    descriptionAr: 'ابنِ نظامًا بنكيًا بسيطًا يتيح الإيداع والسحب وعرض الرصيد.',
    descriptionEn: 'Build a simple banking system that allows deposits, withdrawals, and balance checking.',
    estimatedTime: '60 min',
    level: 'intermediate',
    icon: '🏦',
    color: '#58a6ff',
    conceptsAr: ['الكائنات (Objects)', 'الدوال', 'التحقق من الشروط', 'إدارة الحالة'],
    conceptsEn: ['Objects', 'Functions', 'Condition validation', 'State management'],
    conceptDescriptionsAr: [
      'الكائنات تُجمّع بيانات الحساب (الرصيد، الاسم، العمليات) في بنية واحدة متماسكة.',
      'الدوال تُعبّر عن كل عملية بنكية (إيداع، سحب، كشف) كدالة مستقلة قابلة لإعادة الاستخدام.',
      'التحقق من الشروط يضمن رفض المبالغ السالبة والسحب الزائد عن الرصيد قبل التنفيذ.',
      'إدارة الحالة تعني تحديث رصيد الحساب وسجل العمليات بشكل صحيح عند كل تغيير.',
    ],
    conceptDescriptionsEn: [
      'Objects group the account data (balance, name, transactions) into one cohesive structure.',
      'Functions represent each banking operation (deposit, withdrawal, statement) as an independent, reusable unit.',
      'Condition validation ensures negative amounts and overdrafts are rejected before executing the operation.',
      'State management means correctly updating the account balance and transaction log on every change.',
    ],
    diagramType: 'project',
    codeExamples: [
      {
        language: 'javascript',
        code: `function createAccount(owner, initialBalance = 0) {
  return {
    owner: owner,
    balance: initialBalance,
    transactions: []
  };
}

function deposit(account, amount) {
  if (amount <= 0) {
    console.log("Invalid amount!");
    return;
  }
  account.balance += amount;
  account.transactions.push({ type: "deposit", amount });
  console.log(\`Deposited $\${amount}. Balance: $\${account.balance}\`);
}

function withdraw(account, amount) {
  if (amount <= 0) {
    console.log("Invalid amount!");
    return;
  }
  if (amount > account.balance) {
    console.log("Insufficient funds!");
    return;
  }
  account.balance -= amount;
  account.transactions.push({ type: "withdrawal", amount });
  console.log(\`Withdrew $\${amount}. Balance: $\${account.balance}\`);
}

function printStatement(account) {
  console.log(\`\\n=== Account: \${account.owner} ===\`);
  console.log(\`Balance: $\${account.balance}\`);
  console.log("Transactions:");
  for (let t of account.transactions) {
    console.log(\`  \${t.type}: $\${t.amount}\`);
  }
}

let myAccount = createAccount("Sara", 1000);
deposit(myAccount, 500);
withdraw(myAccount, 200);
withdraw(myAccount, 2000); // Will fail
printStatement(myAccount);`,
        descriptionAr: 'نظام بنكي بسيط مع إيداع وسحب وكشف حساب',
        descriptionEn: 'Simple banking system with deposit, withdrawal, and statement',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'الكائنات (Objects) تُجمّع البيانات والدوال المرتبطة بها',
      'تحقق دائمًا من صحة المدخلات قبل تنفيذ العملية',
      'سجّل العمليات في مصفوفة للرجوع إليها لاحقًا',
      'يمكنك تطوير هذا المشروع باستخدام OOP',
    ],
    keyPointsEn: [
      'Objects group related data and functions together',
      'Always validate inputs before performing the operation',
      'Keep a log of transactions in an array for future reference',
      'You can extend this project using OOP principles',
    ],
    quiz: [
      {
        questionAr: 'لماذا نتحقق من amount > account.balance قبل السحب؟',
        questionEn: 'Why do we check amount > account.balance before withdrawing?',
        options: [
          'لزيادة السرعة / To increase speed',
          'لمنع السحب أكثر من الرصيد / To prevent overdraft',
          'لطباعة النتيجة / To print the result',
          'لإضافة الرصيد / To add balance',
        ],
        correctIndex: 1,
        explanationAr: 'نتحقق من الرصيد لمنع السحب الزائد عن الرصيد المتاح.',
        explanationEn: 'We check the balance to prevent withdrawing more than the available balance.',
      },
    ],
    challenges: [
      {
        titleAr: 'الخطوة 1: إنشاء الحساب',
        titleEn: 'Step 1: Create Account',
        taskAr: 'ابدأ بكتابة كائن حساب بنكي يحتوي على: الاسم، الرصيد، وقائمة العمليات.',
        taskEn: 'Start by writing a bank account object containing: name, balance, and a list of transactions.',
        hintAr: 'استخدم dictionary في Python أو object literal في JS',
        hintEn: 'Use a dictionary in Python or object literal in JS',
        solutionPython: `account = {\n    "owner": "سارة",\n    "balance": 1000,\n    "transactions": []\n}\n\nprint(account["owner"])   # سارة\nprint(account["balance"]) # 1000`,
        solutionJs: `let account = {\n    owner: "Sara",\n    balance: 1000,\n    transactions: []\n};\n\nconsole.log(account.owner);   // Sara\nconsole.log(account.balance); // 1000`,
      },
      {
        titleAr: 'الخطوة 2: دالة الإيداع',
        titleEn: 'Step 2: Deposit Function',
        taskAr: 'اكتب دالة deposit تضيف مبلغاً للرصيد مع التحقق أن المبلغ موجب.',
        taskEn: 'Write a deposit function that adds an amount to the balance, checking that it is positive.',
        hintAr: 'إذا amount <= 0 اطبع خطأ، وإلا أضف للرصيد',
        hintEn: 'If amount <= 0 print an error, otherwise add to balance',
        solutionPython: `def deposit(account, amount):\n    if amount <= 0:\n        print("مبلغ غير صالح")\n        return\n    account["balance"] += amount\n    account["transactions"].append({"type": "إيداع", "amount": amount})\n    print(f"تم إيداع {amount}. الرصيد: {account['balance']}")\n\ndeposit(account, 500)  # تم إيداع 500. الرصيد: 1500`,
        solutionJs: `function deposit(account, amount) {\n    if (amount <= 0) {\n        console.log("Invalid amount");\n        return;\n    }\n    account.balance += amount;\n    account.transactions.push({ type: "deposit", amount });\n    console.log(\`Deposited \${amount}. Balance: \${account.balance}\`);\n}\n\ndeposit(account, 500); // Deposited 500. Balance: 1500`,
      },
      {
        titleAr: 'الخطوة 3: دالة السحب وكشف الحساب',
        titleEn: 'Step 3: Withdraw and Print Statement',
        taskAr: 'أضف دالة withdraw مع التحقق من الرصيد، ودالة printStatement لطباعة جميع العمليات.',
        taskEn: 'Add a withdraw function with balance validation, and a printStatement function to print all transactions.',
        hintAr: 'تحقق أن amount <= balance قبل السحب',
        hintEn: 'Check that amount <= balance before withdrawing',
        solutionPython: `def withdraw(account, amount):\n    if amount <= 0:\n        print("مبلغ غير صالح")\n        return\n    if amount > account["balance"]:\n        print("رصيد غير كافٍ")\n        return\n    account["balance"] -= amount\n    account["transactions"].append({"type": "سحب", "amount": amount})\n    print(f"تم سحب {amount}. الرصيد: {account['balance']}")\n\ndef print_statement(account):\n    print(f"\\nالحساب: {account['owner']}")\n    print(f"الرصيد: {account['balance']}")\n    for t in account["transactions"]:\n        print(f"  {t['type']}: {t['amount']}")\n\nwithdraw(account, 200)\nwithdraw(account, 5000)  # سيفشل\nprint_statement(account)`,
        solutionJs: `function withdraw(account, amount) {\n    if (amount <= 0) { console.log("Invalid"); return; }\n    if (amount > account.balance) { console.log("Insufficient funds"); return; }\n    account.balance -= amount;\n    account.transactions.push({ type: "withdrawal", amount });\n    console.log(\`Withdrew \${amount}. Balance: \${account.balance}\`);\n}\n\nfunction printStatement(account) {\n    console.log(\`Account: \${account.owner}\`);\n    console.log(\`Balance: \${account.balance}\`);\n    for (let t of account.transactions) {\n        console.log(\`  \${t.type}: \${t.amount}\`);\n    }\n}\n\nwithdraw(account, 200);\nwithdraw(account, 5000); // Will fail\nprintStatement(account);`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان التحقق من صحة المدخلات — سحب مبلغ سالب أو صفر',
        mistakeEn: 'Forgetting input validation — withdrawing a negative or zero amount',
        fixAr: 'تحقق دائماً: if amount <= 0 قبل أي عملية',
        fixEn: 'Always check: if amount <= 0 before any operation',
      },
    ],
  },
];
