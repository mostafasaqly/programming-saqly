import type { SectionContent } from './sections.data';

export const SECTIONS_PART4: SectionContent[] = [
  {
    id: 15,
    part: 4,
    partTitleAr: 'تنظيم الكود',
    partTitleEn: 'Organizing Code',
    titleAr: 'الدوال (Functions)',
    titleEn: 'Functions',
    descriptionAr: 'الدوال تُتيح لك تجميع مجموعة من التعليمات في كتلة واحدة قابلة لإعادة الاستخدام.',
    descriptionEn: 'Functions let you group a set of instructions into a reusable block of code.',
    estimatedTime: '40 min',
    level: 'beginner',
    icon: '⚙️',
    color: '#58a6ff',
    conceptsAr: ['تعريف الدالة', 'المعاملات (Parameters)', 'القيمة المُعادة (Return)', 'دوال السهم', 'إعادة الاستخدام'],
    conceptsEn: ['Function definition', 'Parameters', 'Return value', 'Arrow functions', 'Reusability'],
    conceptDescriptionsAr: [
      'تُعرَّف الدالة بكلمة function ثم الاسم والأقواس والكتلة مثل function greet() { }.',
      'المعاملات هي متغيرات وهمية في تعريف الدالة تستقبل القيم الفعلية عند استدعائها.',
      'return تُعيد قيمة من الدالة إلى مكان الاستدعاء وتوقف تنفيذ الدالة فورًا.',
      'دوال السهم (=>) صيغة أحدث وأقصر مثل const add = (a, b) => a + b.',
      'إعادة الاستخدام تعني كتابة الكود مرة واحدة واستدعاؤه في أماكن متعددة بدلًا من التكرار.',
    ],
    conceptDescriptionsEn: [
      'A function is defined with the function keyword, then its name, parentheses, and a block like function greet() { }.',
      'Parameters are placeholder variables in the function definition that receive actual values when the function is called.',
      'return sends a value back to the caller and immediately stops the function\'s execution.',
      'Arrow functions (=>) are a newer, shorter syntax like const add = (a, b) => a + b.',
      'Reusability means writing code once and calling it in multiple places instead of repeating it.',
    ],
    diagramType: 'function-box',
    codeExamples: [
      {
        language: 'javascript',
        code: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Sara"));  // Hello, Sara!
console.log(greet("Ahmed")); // Hello, Ahmed!`,
        descriptionAr: 'دالة بسيطة تستقبل اسمًا وترجع تحية',
        descriptionEn: 'A simple function that takes a name and returns a greeting',
      },
      {
        language: 'javascript',
        code: `// Function with multiple parameters
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(3, 5));      // 8
console.log(multiply(4, 6)); // 24

// Arrow function (modern syntax)
const square = (n) => n * n;
console.log(square(7)); // 49`,
        descriptionAr: 'دوال بمعاملات متعددة ودوال السهم',
        descriptionEn: 'Functions with multiple parameters and arrow functions',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'الدالة تُعرَّف مرة واحدة وتُستدعى عدة مرات',
      'المعاملات هي المدخلات التي تستقبلها الدالة',
      'return تُوقف الدالة وترجع قيمة',
      'دوال السهم (=>) هي طريقة أحدث وأقصر لكتابة الدوال',
    ],
    keyPointsEn: [
      'A function is defined once and called many times',
      'Parameters are the inputs the function receives',
      'return stops the function and sends back a value',
      'Arrow functions (=>) are a newer, shorter way to write functions',
    ],
    quiz: [
      {
        questionAr: 'ما الكلمة المفتاحية لتعريف دالة في Python؟',
        questionEn: 'What keyword defines a function in Python?',
        options: ['function', 'def', 'fn', 'func'],
        correctIndex: 1,
        explanationAr: 'في Python نستخدم def متبوعة باسم الدالة.',
        explanationEn: 'In Python we use def followed by the function name.',
      },
      {
        questionAr: 'ما قيمة: add(3, 4) إذا كانت: def add(a, b): return a + b؟',
        questionEn: 'What is the value of add(3, 4) if: def add(a, b): return a + b?',
        options: ['34', '7', 'خطأ / Error', '12'],
        correctIndex: 1,
        explanationAr: '3 + 4 = 7',
        explanationEn: '3 + 4 = 7',
      },
      {
        questionAr: 'ماذا تفعل return داخل دالة؟',
        questionEn: 'What does return do inside a function?',
        options: ['تُكرر الدالة / Repeats the function', 'تُوقف الدالة وتُرجع قيمة / Stops the function and returns a value', 'تطبع على الشاشة / Prints to screen', 'تحذف الدالة / Deletes the function'],
        correctIndex: 1,
        explanationAr: 'return توقف تنفيذ الدالة وترسل القيمة إلى مكان الاستدعاء.',
        explanationEn: 'return stops the function and sends the value back to the caller.',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'استدعاء الدالة قبل تعريفها في Python',
        mistakeEn: 'Calling a function before defining it in Python',
        fixAr: 'في Python يجب تعريف الدالة قبل استدعائها في الكود',
        fixEn: 'In Python the function must be defined before it is called',
      },
      {
        mistakeAr: 'نسيان return: الدالة لا تُعيد شيئاً',
        mistakeEn: 'Forgetting return: function returns nothing',
        fixAr: 'إذا أردت استخدام نتيجة الدالة تأكد من إضافة return',
        fixEn: 'If you want to use the result, make sure to add return',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: دالة الحساب',
        titleEn: 'Challenge: Calculator Function',
        taskAr: 'اكتب دالة تحسب مساحة المستطيل (الطول × العرض) وتعيد النتيجة.',
        taskEn: 'Write a function that calculates the area of a rectangle (length × width) and returns the result.',
        hintAr: 'def area(length, width): return ...',
        hintEn: 'def area(length, width): return ...',
        solutionPython: `def area(length, width):\n    return length * width\n\nprint(area(5, 3))   # 15\nprint(area(10, 4))  # 40`,
        solutionJs: `function area(length, width) {\n    return length * width;\n}\n\nconsole.log(area(5, 3));   // 15\nconsole.log(area(10, 4));  // 40`,
        expectedOutput: '15\n40',
      },
    ],
  },
  {
    id: 16,
    part: 4,
    partTitleAr: 'تنظيم الكود',
    partTitleEn: 'Organizing Code',
    titleAr: 'النطاق (Scope)',
    titleEn: 'Scope',
    descriptionAr: 'النطاق يحدد أين يمكنك الوصول إلى متغير معين. تعلم الفرق بين النطاق المحلي والعام.',
    descriptionEn: 'Scope defines where you can access a variable. Learn the difference between local and global scope.',
    estimatedTime: '25 min',
    level: 'intermediate',
    icon: '🔭',
    color: '#d29922',
    conceptsAr: ['النطاق العام (Global)', 'النطاق المحلي (Local)', 'نطاق الكتلة (Block)', 'رفع المتغيرات (Hoisting)'],
    conceptsEn: ['Global scope', 'Local scope', 'Block scope', 'Hoisting'],
    conceptDescriptionsAr: [
      'المتغير العام مُعرَّف خارج أي دالة أو كتلة ويمكن الوصول إليه من أي مكان في الملف.',
      'المتغير المحلي مُعرَّف داخل دالة ولا يمكن الوصول إليه من خارجها — يُتلف عند انتهاء الدالة.',
      'let و const لها نطاق الكتلة {} بمعنى لا يمكن الوصول إليها خارج الأقواس التي عُرّفت فيها.',
      'Hoisting هي سلوك JavaScript التلقائي بنقل تعريفات var والدوال إلى أعلى نطاقها — تجنّب الاعتماد عليه.',
    ],
    conceptDescriptionsEn: [
      'A global variable is defined outside any function or block and can be accessed from anywhere in the file.',
      'A local variable is defined inside a function and cannot be accessed from outside it — it is destroyed when the function ends.',
      'let and const have block scope {}, meaning they cannot be accessed outside the braces where they were defined.',
      'Hoisting is JavaScript\'s automatic behavior of moving var declarations and function definitions to the top of their scope — avoid relying on it.',
    ],
    diagramType: 'scope-diagram',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Global scope
let globalVar = "I'm global";

function showScope() {
  // Local scope
  let localVar = "I'm local";
  console.log(globalVar); // works: "I'm global"
  console.log(localVar);  // works: "I'm local"
}

showScope();
console.log(globalVar); // works
// console.log(localVar); // ERROR! Not accessible here`,
        descriptionAr: 'مثال على النطاق العام والمحلي',
        descriptionEn: 'Example of global and local scope',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'المتغير العام يمكن الوصول إليه من أي مكان في البرنامج',
      'المتغير المحلي يمكن الوصول إليه فقط داخل الدالة أو الكتلة التي عُرّف فيها',
      'let و const لها نطاق الكتلة {}',
      'تجنّب المتغيرات العامة قدر الإمكان',
    ],
    keyPointsEn: [
      'Global variables are accessible from anywhere in the program',
      'Local variables are only accessible inside the function or block where they\'s defined',
      'let and const have block scope {}',
      'Avoid global variables as much as possible',
    ],
    quiz: [
      {
        questionAr: 'أين يمكن الوصول للمتغير المحلي؟',
        questionEn: 'Where can a local variable be accessed?',
        options: [
          'في أي مكان / Anywhere',
          'داخل الدالة التي عُرّف فيها فقط / Only inside the function where it was defined',
          'في الملف كله / Throughout the file',
          'في الكلاسات فقط / Only in classes',
        ],
        correctIndex: 1,
        explanationAr: 'المتغير المحلي يمكن الوصول إليه فقط من داخل الدالة أو الكتلة التي عُرّف فيها.',
        explanationEn: 'A local variable can only be accessed from inside the function or block where it was defined.',
      },
      {
        questionAr: 'ماذا يحدث عند محاولة الوصول لمتغير محلي من خارج دالته؟',
        questionEn: 'What happens when you try to access a local variable from outside its function?',
        options: ['يُعيد null', 'يُعيد 0', 'خطأ ReferenceError / ReferenceError', 'يعمل بشكل طبيعي'],
        correctIndex: 2,
        explanationAr: 'ستحصل على ReferenceError لأن المتغير غير معرّف في هذا النطاق.',
        explanationEn: 'You get a ReferenceError because the variable is not defined in that scope.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: النطاق في الممارسة',
        titleEn: 'Challenge: Scope in Practice',
        taskAr: 'اكتب دالة تحسب ضريبة 15% على سعر ما. المتغير "tax_rate" يجب أن يكون داخل الدالة (محلي).',
        taskEn: 'Write a function that calculates 15% tax on a price. The "tax_rate" variable should be local to the function.',
        hintAr: 'عرّف tax_rate داخل الدالة نفسها',
        hintEn: 'Define tax_rate inside the function itself',
        solutionPython: `def calculate_tax(price):\n    tax_rate = 0.15  # متغير محلي\n    return price * tax_rate\n\nprint(calculate_tax(100))  # 15.0\nprint(calculate_tax(200))  # 30.0`,
        solutionJs: `function calculateTax(price) {\n    const taxRate = 0.15; // local variable\n    return price * taxRate;\n}\n\nconsole.log(calculateTax(100)); // 15\nconsole.log(calculateTax(200)); // 30`,
        expectedOutput: '15\n30',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الاعتماد على متغيرات عامة كثيرة — يجعل الكود صعب الفهم والتصحيح',
        mistakeEn: 'Relying on many global variables — makes code hard to understand and debug',
        fixAr: 'مرّر القيم كمعاملات للدوال بدلاً من استخدام متغيرات عامة',
        fixEn: 'Pass values as function parameters instead of using global variables',
      },
    ],
  },
  {
    id: 17,
    part: 4,
    partTitleAr: 'تنظيم الكود',
    partTitleEn: 'Organizing Code',
    titleAr: 'التكرار الذاتي (Recursion)',
    titleEn: 'Recursion',
    descriptionAr: 'التكرار الذاتي هو عندما تستدعي الدالة نفسها. مفهوم قوي لحل المشكلات التي تتكرر بطبيعتها.',
    descriptionEn: 'Recursion is when a function calls itself. A powerful concept for solving problems that repeat by nature.',
    estimatedTime: '40 min',
    level: 'intermediate',
    icon: '🌀',
    color: '#bc8cff',
    conceptsAr: ['الحالة الأساسية (Base Case)', 'الاستدعاء الذاتي', 'مكدس الاستدعاء', 'مقارنة مع الحلقات'],
    conceptsEn: ['Base case', 'Recursive call', 'Call stack', 'Comparison with loops'],
    conceptDescriptionsAr: [
      'الحالة الأساسية هي الشرط الذي يُوقف التكرار الذاتي — بدونه تستمر الدالة إلى الأبد.',
      'الاستدعاء الذاتي هو قيام الدالة بنداء نفسها بمعاملات أصغر في كل مرة حتى تصل للحالة الأساسية.',
      'مكدس الاستدعاء يتتبع كل استدعاء معلق — تراكم كثير من الاستدعاءات يُسبب Stack Overflow.',
      'التكرار الذاتي أنيق للمشكلات كالمضروب وشجرة المجلدات، بينما الحلقات أكثر كفاءة في الذاكرة.',
    ],
    conceptDescriptionsEn: [
      'The base case is the condition that stops the recursion — without it the function runs forever.',
      'The recursive call is the function calling itself with smaller arguments each time until the base case is reached.',
      'The call stack tracks every pending call — too many stacked calls causes a Stack Overflow error.',
      'Recursion is elegant for problems like factorial and folder trees, while loops are more memory-efficient.',
    ],
    diagramType: 'recursion',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1`,
        descriptionAr: 'حساب المضروب بالتكرار الذاتي',
        descriptionEn: 'Calculating factorial using recursion',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'كل دالة تكرارية يجب أن تحتوي على حالة أساسية تُوقف التكرار',
      'بدون الحالة الأساسية ستحصل على حلقة لانهائية (Stack Overflow)',
      'التكرار الذاتي مفيد للمشكلات كالمضروب وأعداد فيبوناتشي',
      'معظم المشكلات التكرارية يمكن حلها بحلقات أيضًا',
    ],
    keyPointsEn: [
      'Every recursive function must have a base case that stops the recursion',
      'Without a base case you\'ll get infinite recursion (Stack Overflow)',
      'Recursion is useful for problems like factorial and Fibonacci numbers',
      'Most recursive problems can also be solved with loops',
    ],
    quiz: [
      {
        questionAr: 'ما الحالة الأساسية (Base Case) في التكرار الذاتي؟',
        questionEn: 'What is the base case in recursion?',
        options: [
          'أول استدعاء للدالة / The first function call',
          'الشرط الذي يوقف التكرار / The condition that stops the recursion',
          'الاستدعاء الذاتي / The self-call',
          'قيمة العودة / The return value',
        ],
        correctIndex: 1,
        explanationAr: 'الحالة الأساسية هي الشرط الذي يُوقف التكرار الذاتي — بدونها ستحصل على حلقة لانهائية.',
        explanationEn: 'The base case is the condition that stops the recursion — without it you get infinite recursion.',
      },
      {
        questionAr: 'ما ناتج factorial(4) إذا كانت factorial(n) = n * factorial(n-1)؟',
        questionEn: 'What is factorial(4) if factorial(n) = n * factorial(n-1)?',
        options: ['12', '16', '24', '8'],
        correctIndex: 2,
        explanationAr: '4! = 4 × 3 × 2 × 1 = 24',
        explanationEn: '4! = 4 × 3 × 2 × 1 = 24',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: مجموع تكراري',
        titleEn: 'Challenge: Recursive Sum',
        taskAr: 'اكتب دالة تكرارية تحسب مجموع الأرقام من 1 إلى n.',
        taskEn: 'Write a recursive function that calculates the sum of numbers from 1 to n.',
        hintAr: 'sum(n) = n + sum(n-1), الحالة الأساسية: sum(0) = 0',
        hintEn: 'sum(n) = n + sum(n-1), base case: sum(0) = 0',
        solutionPython: `def sum_to_n(n):\n    if n == 0:  # Base case\n        return 0\n    return n + sum_to_n(n - 1)\n\nprint(sum_to_n(5))  # 15 (1+2+3+4+5)`,
        solutionJs: `function sumToN(n) {\n    if (n === 0) return 0; // Base case\n    return n + sumToN(n - 1);\n}\n\nconsole.log(sumToN(5)); // 15`,
        expectedOutput: '15',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان الحالة الأساسية — تسبب Stack Overflow',
        mistakeEn: 'Forgetting the base case — causes Stack Overflow',
        fixAr: 'كل دالة تكرارية يجب أن تحتوي على شرط إيقاف واضح',
        fixEn: 'Every recursive function must have a clear stopping condition',
      },
    ],
  },
];
