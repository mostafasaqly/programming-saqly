export interface CodeExample {
  language: string;
  code: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface EditorLink {
  label: string;
  url: string;
  language: string;
}

export interface SectionContent {
  id: number;
  part: number;
  partTitleAr: string;
  partTitleEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  estimatedTime: string;
  level: 'beginner' | 'intermediate';
  conceptsAr: string[];
  conceptsEn: string[];
  diagramType: string;
  codeExamples: CodeExample[];
  editorLinks: EditorLink[];
  keyPointsAr: string[];
  keyPointsEn: string[];
  icon: string;
  color: string;
}

export const COURSE_SECTIONS: SectionContent[] = [
  {
    id: 1,
    part: 1,
    partTitleAr: 'البداية',
    partTitleEn: 'Getting Started',
    titleAr: 'كيف تعمل هذه الدورة؟',
    titleEn: 'How This Course Works',
    descriptionAr: 'تعرف على هيكل الدورة التدريبية وما ستتعلمه في كل قسم، وكيف تستفيد من المحتوى بأفضل طريقة ممكنة.',
    descriptionEn: 'Learn how this course is structured, what you\'ll cover in each section, and how to get the most out of the learning experience.',
    estimatedTime: '10 min',
    level: 'beginner',
    icon: '🎯',
    color: '#58a6ff',
    conceptsAr: ['هيكل الدورة', 'طريقة التعلم', 'الأهداف', 'الأدوات المطلوبة'],
    conceptsEn: ['Course structure', 'Learning approach', 'Goals', 'Required tools'],
    diagramType: 'course-map',
    codeExamples: [],
    editorLinks: [],
    keyPointsAr: [
      'الدورة مقسمة إلى 8 أجزاء رئيسية تغطي أساسيات البرمجة',
      'كل قسم يحتوي على شرح نظري وأمثلة عملية',
      'يمكنك تجربة الكود مباشرة من خلال الروابط المتوفرة',
      'الدورة مناسبة للمبتدئين تمامًا بدون خلفية مسبقة',
    ],
    keyPointsEn: [
      'The course is split into 8 parts covering programming fundamentals',
      'Each section has theory explanations and practical examples',
      'You can try code directly through the provided online editor links',
      'The course is suitable for absolute beginners with no prior background',
    ],
  },
  {
    id: 2,
    part: 1,
    partTitleAr: 'البداية',
    partTitleEn: 'Getting Started',
    titleAr: 'ما هي البرمجة حقًا؟',
    titleEn: 'What Is Programming Really?',
    descriptionAr: 'اكتشف ما تعنيه البرمجة فعلًا — كيف تتحدث مع الحاسوب وتعطيه تعليمات لحل المشكلات.',
    descriptionEn: 'Discover what programming really means — how you communicate with a computer and give it instructions to solve problems.',
    estimatedTime: '15 min',
    level: 'beginner',
    icon: '💡',
    color: '#d29922',
    conceptsAr: ['ما هي البرمجة', 'لماذا نتعلم البرمجة', 'كيف يفكر الحاسوب', 'الخوارزمية'],
    conceptsEn: ['What is programming', 'Why learn to code', 'How computers think', 'Algorithm'],
    diagramType: 'human-computer',
    codeExamples: [],
    editorLinks: [],
    keyPointsAr: [
      'البرمجة هي إعطاء تعليمات دقيقة للحاسوب خطوة بخطوة',
      'الحاسوب يفهم فقط التعليمات الواضحة والمحددة',
      'الخوارزمية هي مجموعة خطوات لحل مشكلة معينة',
      'البرمجة تُستخدم في كل مكان: التطبيقات، المواقع، الألعاب، والذكاء الاصطناعي',
    ],
    keyPointsEn: [
      'Programming is giving precise step-by-step instructions to a computer',
      'Computers only understand clear and specific instructions',
      'An algorithm is a set of steps to solve a specific problem',
      'Programming is used everywhere: apps, websites, games, and AI',
    ],
  },
  {
    id: 3,
    part: 1,
    partTitleAr: 'البداية',
    partTitleEn: 'Getting Started',
    titleAr: 'الإعداد وتشغيل أول كود',
    titleEn: 'Setting Up & Running Your First Code',
    descriptionAr: 'تعلم كيف تهيئ بيئة العمل وتكتب وتشغّل أول برنامج لك.',
    descriptionEn: 'Learn how to set up your environment and write and run your very first program.',
    estimatedTime: '20 min',
    level: 'beginner',
    icon: '🚀',
    color: '#3fb950',
    conceptsAr: ['بيئة التطوير', 'المحرر النصي', 'تشغيل الكود', 'Hello World'],
    conceptsEn: ['Development environment', 'Text editor', 'Running code', 'Hello World'],
    diagramType: 'setup',
    codeExamples: [
      {
        language: 'javascript',
        code: `console.log("Hello, World!");`,
        descriptionAr: 'أول برنامج — يطبع رسالة ترحيب في الشاشة',
        descriptionEn: 'First program — prints a welcome message to the screen',
      },
      {
        language: 'python',
        code: `print("Hello, World!")`,
        descriptionAr: 'نفس البرنامج بلغة بايثون',
        descriptionEn: 'Same program in Python',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
      { label: 'Programiz Python Editor', url: 'https://www.programiz.com/python-programming/online-compiler/', language: 'python' },
    ],
    keyPointsAr: [
      'يمكنك البدء بالبرمجة بدون تثبيت أي شيء — استخدم المحررات الإلكترونية',
      'console.log() في JavaScript يُستخدم لعرض النتائج',
      'print() في Python تؤدي نفس الوظيفة',
      'Hello World هو تقليد قديم لأول برنامج تكتبه بأي لغة',
    ],
    keyPointsEn: [
      'You can start coding without installing anything — use online editors',
      'console.log() in JavaScript is used to display output',
      'print() in Python does the same thing',
      'Hello World is a classic tradition for the first program you write in any language',
    ],
  },
  {
    id: 4,
    part: 1,
    partTitleAr: 'البداية',
    partTitleEn: 'Getting Started',
    titleAr: 'التعليقات',
    titleEn: 'Comments',
    descriptionAr: 'تعلم كيف تضيف تعليقات في الكود لتوضيح ما تفعله، وهي مهمة للعمل ضمن فريق أو لمراجعة الكود لاحقًا.',
    descriptionEn: 'Learn how to add comments in code to explain what you\'re doing — vital for teamwork and future code review.',
    estimatedTime: '10 min',
    level: 'beginner',
    icon: '💬',
    color: '#bc8cff',
    conceptsAr: ['التعليق السطري', 'التعليق المتعدد الأسطر', 'توثيق الكود', 'قابلية القراءة'],
    conceptsEn: ['Single-line comment', 'Multi-line comment', 'Code documentation', 'Readability'],
    diagramType: 'comments',
    codeExamples: [
      {
        language: 'javascript',
        code: `// This is a single-line comment

/* This is a
   multi-line comment */

let name = "Sara"; // inline comment
console.log(name);`,
        descriptionAr: 'أنواع التعليقات في JavaScript',
        descriptionEn: 'Types of comments in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'التعليقات لا يراها الحاسوب ولا تؤثر على تنفيذ البرنامج',
      '// للتعليق على سطر واحد في JS و Python و C++',
      '/* */ للتعليق على عدة أسطر',
      'التعليقات الجيدة تجعل الكود سهل الفهم للآخرين',
    ],
    keyPointsEn: [
      'Comments are ignored by the computer and don\'t affect program execution',
      '// is for single-line comments in JS, Python, and C++',
      '/* */ is for multi-line comments',
      'Good comments make code easy to understand for others',
    ],
  },
  {
    id: 5,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'المتغيرات',
    titleEn: 'Variables',
    descriptionAr: 'المتغيرات هي صناديق تخزين البيانات. تعلم كيف تُعرّف متغيرًا وتخزن فيه قيمة وتستخدمه في برنامجك.',
    descriptionEn: 'Variables are storage boxes for data. Learn how to declare a variable, store a value, and use it in your program.',
    estimatedTime: '25 min',
    level: 'beginner',
    icon: '📦',
    color: '#58a6ff',
    conceptsAr: ['تعريف المتغير', 'التسمية', 'التعيين', 'الاستخدام'],
    conceptsEn: ['Variable declaration', 'Naming', 'Assignment', 'Usage'],
    diagramType: 'variable-box',
    codeExamples: [
      {
        language: 'javascript',
        code: `let name = "Sara";
let age = 25;
let isStudent = true;

console.log(name);      // Sara
console.log(age);       // 25
console.log(isStudent); // true`,
        descriptionAr: 'إنشاء متغيرات وطباعة قيمها',
        descriptionEn: 'Creating variables and printing their values',
      },
      {
        language: 'javascript',
        code: `// Changing a variable's value
let score = 0;
console.log(score); // 0

score = 10;
console.log(score); // 10

score = score + 5;
console.log(score); // 15`,
        descriptionAr: 'تغيير قيمة المتغير',
        descriptionEn: 'Changing the variable value',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'المتغير = اسم + قيمة (كالصندوق مع ملصق عليه)',
      'let يُستخدم لإنشاء متغير قابل للتغيير في JavaScript',
      'اسم المتغير يجب أن يكون وصفيًا ويبدأ بحرف',
      'يمكنك تغيير قيمة المتغير في أي وقت',
    ],
    keyPointsEn: [
      'Variable = name + value (like a labeled box)',
      'let is used to create a changeable variable in JavaScript',
      'Variable names should be descriptive and start with a letter',
      'You can change the variable\'s value at any time',
    ],
  },
  {
    id: 6,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'أنواع البيانات',
    titleEn: 'Data Types',
    descriptionAr: 'اكتشف الأنواع المختلفة للبيانات: الأرقام، النصوص، القيم المنطقية، وغيرها.',
    descriptionEn: 'Discover the different types of data: numbers, strings, booleans, and more.',
    estimatedTime: '30 min',
    level: 'beginner',
    icon: '🔢',
    color: '#d29922',
    conceptsAr: ['Number (رقم)', 'String (نص)', 'Boolean (منطقي)', 'Null & Undefined', 'Array (مصفوفة)', 'Object (كائن)'],
    conceptsEn: ['Number', 'String', 'Boolean', 'Null & Undefined', 'Array', 'Object'],
    diagramType: 'data-types',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Number
let age = 25;
let price = 9.99;

// String
let name = "Sara";
let city = 'Riyadh';

// Boolean
let isActive = true;
let hasAccount = false;

// Null & Undefined
let empty = null;
let notDefined;

console.log(typeof age);       // "number"
console.log(typeof name);      // "string"
console.log(typeof isActive);  // "boolean"
console.log(typeof empty);     // "object"
console.log(typeof notDefined);// "undefined"`,
        descriptionAr: 'جميع أنواع البيانات الأساسية في JavaScript',
        descriptionEn: 'All basic data types in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'Number: أي رقم صحيح أو عشري',
      'String: أي نص بين علامات اقتباس',
      'Boolean: قيمة منطقية true أو false فقط',
      'typeof يُخبرك بنوع البيانات لأي قيمة',
    ],
    keyPointsEn: [
      'Number: any integer or decimal',
      'String: any text wrapped in quotes',
      'Boolean: logical value — only true or false',
      'typeof tells you the data type of any value',
    ],
  },
  {
    id: 7,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'الثوابت',
    titleEn: 'Constants',
    descriptionAr: 'الثوابت مثل المتغيرات لكن قيمتها لا تتغير. تعلم متى تستخدم const بدلًا من let.',
    descriptionEn: 'Constants are like variables but their value cannot change. Learn when to use const instead of let.',
    estimatedTime: '15 min',
    level: 'beginner',
    icon: '🔒',
    color: '#f85149',
    conceptsAr: ['const في JavaScript', 'الفرق بين let و const', 'متى تستخدم كل منهما', 'الثوابت في Python'],
    conceptsEn: ['const in JavaScript', 'Difference between let and const', 'When to use each', 'Constants in Python'],
    diagramType: 'constant-lock',
    codeExamples: [
      {
        language: 'javascript',
        code: `const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log(PI);       // 3.14159
console.log(MAX_USERS);// 100

// This will cause an ERROR:
// PI = 3; // TypeError: Assignment to constant variable`,
        descriptionAr: 'تعريف الثوابت وما يحدث عند محاولة تغييرها',
        descriptionEn: 'Defining constants and what happens when you try to change them',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'const تُعرّف ثابتًا لا يمكن إعادة تعيينه',
      'استخدم const بشكل افتراضي، وغيّر إلى let عند الحاجة',
      'الثوابت تجعل الكود أكثر وضوحًا وأمانًا',
      'الاصطلاح: اكتب أسماء الثوابت بأحرف كبيرة مثل MAX_SIZE',
    ],
    keyPointsEn: [
      'const defines a constant that cannot be reassigned',
      'Use const by default, switch to let when you need to change the value',
      'Constants make code clearer and safer',
      'Convention: write constant names in UPPER_CASE like MAX_SIZE',
    ],
  },
  {
    id: 8,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'النصوص (Strings)',
    titleEn: 'Strings',
    descriptionAr: 'النص هو سلسلة من الأحرف. تعلم كيف تنشئ النصوص وتعدّلها وتدمجها.',
    descriptionEn: 'A string is a sequence of characters. Learn how to create, modify, and combine strings.',
    estimatedTime: '30 min',
    level: 'beginner',
    icon: '📝',
    color: '#bc8cff',
    conceptsAr: ['إنشاء النص', 'دمج النصوص', 'طول النص', 'البحث داخل النص', 'Template Literals'],
    conceptsEn: ['Creating strings', 'Concatenation', 'String length', 'Searching strings', 'Template Literals'],
    diagramType: 'string-chars',
    codeExamples: [
      {
        language: 'javascript',
        code: `let firstName = "Sara";
let lastName  = "Ahmed";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName); // Sara Ahmed

// Template literal (modern way)
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting); // Hello, Sara!

// String properties and methods
console.log(fullName.length);        // 10
console.log(fullName.toUpperCase()); // SARA AHMED
console.log(fullName.toLowerCase()); // sara ahmed
console.log(fullName.includes("Sara")); // true`,
        descriptionAr: 'العمليات الشائعة على النصوص',
        descriptionEn: 'Common string operations',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'النص يُكتب بين علامات اقتباس مفردة أو مزدوجة أو خلفية',
      'دمج النصوص باستخدام + أو Template Literals',
      '.length يُعطيك عدد الأحرف في النص',
      'النصوص في JavaScript غير قابلة للتغيير مباشرة',
    ],
    keyPointsEn: [
      'Strings are written between single, double, or backtick quotes',
      'Concatenate strings using + or Template Literals',
      '.length gives you the number of characters in the string',
      'Strings in JavaScript are immutable (you create new ones)',
    ],
  },
  {
    id: 9,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'العمليات الحسابية والمنطقية',
    titleEn: 'Operators',
    descriptionAr: 'تعلم المعاملات الحسابية والمقارنة والمنطقية التي تُمكّنك من إجراء العمليات في برامجك.',
    descriptionEn: 'Learn arithmetic, comparison, and logical operators that let you perform operations in your programs.',
    estimatedTime: '30 min',
    level: 'beginner',
    icon: '➕',
    color: '#3fb950',
    conceptsAr: ['العمليات الحسابية', 'عمليات المقارنة', 'العمليات المنطقية', 'أولوية العمليات'],
    conceptsEn: ['Arithmetic operators', 'Comparison operators', 'Logical operators', 'Operator precedence'],
    diagramType: 'operators',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Arithmetic
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (remainder)
console.log(a ** b); // 1000 (power)

// Comparison (returns boolean)
console.log(a > b);   // true
console.log(a === b); // false
console.log(a !== b); // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false`,
        descriptionAr: 'جميع أنواع المعاملات في JavaScript',
        descriptionEn: 'All types of operators in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      '% هو باقي القسمة — مفيد جدًا في البرمجة',
      '=== يتحقق من القيمة والنوع معًا (أفضل من ==)',
      '&& يعني "و"، || يعني "أو"، ! يعني "ليس"',
      'العمليات الحسابية لها أولوية مثل الرياضيات',
    ],
    keyPointsEn: [
      '% is the remainder — very useful in programming',
      '=== checks value AND type (better than ==)',
      '&& means "and", || means "or", ! means "not"',
      'Arithmetic operators follow the same precedence as math',
    ],
  },
  {
    id: 10,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'تحويل الأنواع',
    titleEn: 'Type Casting',
    descriptionAr: 'تعلم كيف تحوّل البيانات من نوع إلى آخر — من رقم إلى نص وبالعكس.',
    descriptionEn: 'Learn how to convert data from one type to another — from number to string and back.',
    estimatedTime: '20 min',
    level: 'beginner',
    icon: '🔄',
    color: '#58a6ff',
    conceptsAr: ['التحويل الصريح', 'التحويل الضمني', 'String()', 'Number()', 'parseInt() و parseFloat()'],
    conceptsEn: ['Explicit conversion', 'Implicit conversion', 'String()', 'Number()', 'parseInt() and parseFloat()'],
    diagramType: 'type-cast',
    codeExamples: [
      {
        language: 'javascript',
        code: `// To Number
let str = "42";
let num = Number(str);
console.log(num, typeof num); // 42 "number"

let int = parseInt("3.7");
console.log(int); // 3

let float = parseFloat("3.7");
console.log(float); // 3.7

// To String
let age = 25;
let ageStr = String(age);
console.log(ageStr, typeof ageStr); // "25" "string"

// To Boolean
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean(1));   // true
console.log(Boolean("hi")); // true`,
        descriptionAr: 'تحويل الأنواع في JavaScript',
        descriptionEn: 'Type conversion in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'Number("42") يحول النص "42" إلى رقم 42',
      'String(25) يحول الرقم 25 إلى نص "25"',
      'القيم الفارغة (0, "", null) تتحول إلى false',
      'parseInt تأخذ الجزء الصحيح فقط من النص الرقمي',
    ],
    keyPointsEn: [
      'Number("42") converts the string "42" to number 42',
      'String(25) converts number 25 to string "25"',
      'Empty values (0, "", null) convert to false',
      'parseInt takes only the integer part of a numeric string',
    ],
  },
  {
    id: 11,
    part: 2,
    partTitleAr: 'اللبنات الأساسية',
    partTitleEn: 'Core Building Blocks',
    titleAr: 'الإدخال والإخراج',
    titleEn: 'Input and Output',
    descriptionAr: 'تعلم كيف تتلقى مدخلات من المستخدم وتعرض نتائج على الشاشة.',
    descriptionEn: 'Learn how to receive input from the user and display results on the screen.',
    estimatedTime: '20 min',
    level: 'beginner',
    icon: '⌨️',
    color: '#d29922',
    conceptsAr: ['console.log()', 'prompt()', 'alert()', 'الإدخال في Node.js', 'الإدخال في Python'],
    conceptsEn: ['console.log()', 'prompt()', 'alert()', 'Input in Node.js', 'Input in Python'],
    diagramType: 'io',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Output
console.log("Hello, World!");
console.log("Sum:", 2 + 3);

// In a browser — get user input
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

// Show a popup
alert("Welcome!");`,
        descriptionAr: 'الإدخال والإخراج في المتصفح',
        descriptionEn: 'Input and output in the browser',
      },
      {
        language: 'python',
        code: `# Output
print("Hello, World!")
print("Sum:", 2 + 3)

# Input
name = input("What is your name? ")
print("Hello,", name + "!")`,
        descriptionAr: 'الإدخال والإخراج في Python',
        descriptionEn: 'Input and output in Python',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
      { label: 'Programiz Python Editor', url: 'https://www.programiz.com/python-programming/online-compiler/', language: 'python' },
    ],
    keyPointsAr: [
      'console.log() يطبع في وحدة التحكم (console)',
      'prompt() يفتح نافذة لإدخال نص في المتصفح',
      'input() في Python يقرأ نصًا من المستخدم',
      'جميع مدخلات prompt() و input() تُرجع نصًا — حوّلها إذا احتجت رقمًا',
    ],
    keyPointsEn: [
      'console.log() prints to the developer console',
      'prompt() opens a dialog to get text input in the browser',
      'input() in Python reads text from the user',
      'All prompt() and input() values are strings — convert them if you need a number',
    ],
  },
  {
    id: 12,
    part: 3,
    partTitleAr: 'اتخاذ القرارات والتكرار',
    partTitleEn: 'Making Decisions & Repeating Work',
    titleAr: 'الشروط وجمل if',
    titleEn: 'Conditions and If Statements',
    descriptionAr: 'تعلم كيف تجعل برنامجك يتخذ قرارات بناءً على شروط معينة باستخدام if/else.',
    descriptionEn: 'Learn how to make your program take decisions based on conditions using if/else.',
    estimatedTime: '35 min',
    level: 'beginner',
    icon: '🔀',
    color: '#f85149',
    conceptsAr: ['if', 'else', 'else if', 'التعبيرات الشرطية', 'switch'],
    conceptsEn: ['if', 'else', 'else if', 'Conditional expressions', 'switch'],
    diagramType: 'flowchart',
    codeExamples: [
      {
        language: 'javascript',
        code: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B`,
        descriptionAr: 'نظام درجات باستخدام if/else if/else',
        descriptionEn: 'Grading system using if/else if/else',
      },
      {
        language: 'javascript',
        code: `// Ternary operator (short if/else)
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult`,
        descriptionAr: 'العامل الثلاثي — طريقة مختصرة لـ if/else',
        descriptionEn: 'Ternary operator — a shorthand for if/else',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'if ينفّذ الكود فقط إذا كان الشرط صحيحًا (true)',
      'else ينفّذ الكود إذا كان الشرط خاطئًا (false)',
      'else if يتيح فحص شروط إضافية',
      'العامل الثلاثي ? : مفيد للحالات البسيطة',
    ],
    keyPointsEn: [
      'if executes code only when the condition is true',
      'else executes code when the condition is false',
      'else if lets you check additional conditions',
      'The ternary operator ? : is useful for simple cases',
    ],
  },
  {
    id: 13,
    part: 3,
    partTitleAr: 'اتخاذ القرارات والتكرار',
    partTitleEn: 'Making Decisions & Repeating Work',
    titleAr: 'المصفوفات',
    titleEn: 'Arrays',
    descriptionAr: 'المصفوفة تُخزّن عدة قيم في متغير واحد. تعلم كيف تنشئها وتصل إلى عناصرها وتعدّلها.',
    descriptionEn: 'An array stores multiple values in one variable. Learn how to create, access, and modify arrays.',
    estimatedTime: '35 min',
    level: 'beginner',
    icon: '📋',
    color: '#bc8cff',
    conceptsAr: ['إنشاء المصفوفة', 'الفهرسة', 'إضافة وحذف عناصر', 'التكرار على المصفوفة', 'طرق المصفوفات'],
    conceptsEn: ['Creating arrays', 'Indexing', 'Adding and removing elements', 'Iterating arrays', 'Array methods'],
    diagramType: 'array-visual',
    codeExamples: [
      {
        language: 'javascript',
        code: `let fruits = ["Apple", "Banana", "Orange"];

// Accessing elements (0-indexed)
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange

// Array length
console.log(fruits.length); // 3

// Add to end
fruits.push("Mango");
console.log(fruits); // ["Apple","Banana","Orange","Mango"]

// Remove from end
fruits.pop();
console.log(fruits); // ["Apple","Banana","Orange"]

// Loop through array
for (let fruit of fruits) {
  console.log(fruit);
}`,
        descriptionAr: 'العمليات الأساسية على المصفوفات',
        descriptionEn: 'Basic array operations',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'المصفوفة تبدأ بالفهرس 0 وليس 1',
      'push() يضيف عنصرًا في النهاية، pop() يحذف من النهاية',
      '.length يُعطيك عدد العناصر في المصفوفة',
      'يمكنك تخزين أنواع مختلفة في نفس المصفوفة',
    ],
    keyPointsEn: [
      'Arrays are 0-indexed (first element is at index 0, not 1)',
      'push() adds to the end, pop() removes from the end',
      '.length gives you the number of elements',
      'You can store different types in the same array',
    ],
  },
  {
    id: 14,
    part: 3,
    partTitleAr: 'اتخاذ القرارات والتكرار',
    partTitleEn: 'Making Decisions & Repeating Work',
    titleAr: 'الحلقات التكرارية',
    titleEn: 'Loops',
    descriptionAr: 'الحلقات تُتيح لك تكرار تنفيذ الكود عدة مرات. تعلم for وwhile وكيف تختار المناسب.',
    descriptionEn: 'Loops let you repeat code multiple times. Learn for and while loops and how to choose the right one.',
    estimatedTime: '40 min',
    level: 'beginner',
    icon: '🔁',
    color: '#3fb950',
    conceptsAr: ['for loop', 'while loop', 'do...while', 'break و continue', 'التكرار على المصفوفات'],
    conceptsEn: ['for loop', 'while loop', 'do...while', 'break and continue', 'Iterating arrays'],
    diagramType: 'loop-diagram',
    codeExamples: [
      {
        language: 'javascript',
        code: `// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5`,
        descriptionAr: 'حلقة for — تُعدّ من 1 إلى 5',
        descriptionEn: 'for loop — counts from 1 to 5',
      },
      {
        language: 'javascript',
        code: `// while loop
let count = 0;
while (count < 3) {
  console.log("Repeat #" + count);
  count++;
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 6) break;    // stop at 6
  console.log(i);
}
// 0, 1, 2, 4, 5`,
        descriptionAr: 'حلقة while و استخدام break وcontinue',
        descriptionEn: 'while loop and using break and continue',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'for مناسبة عندما تعرف عدد التكرارات مسبقًا',
      'while مناسبة عندما تتكرر حتى تتحقق حالة معينة',
      'break يوقف الحلقة كليًا',
      'continue يتجاوز التكرار الحالي وينتقل للتالي',
    ],
    keyPointsEn: [
      'for is best when you know the number of iterations in advance',
      'while is best when you repeat until a condition is met',
      'break stops the loop entirely',
      'continue skips the current iteration and moves to the next',
    ],
  },
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
      'Local variables are only accessible inside the function or block where they\'re defined',
      'let and const have block scope {}',
      'Avoid global variables as much as possible',
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
  },
  {
    id: 18,
    part: 5,
    partTitleAr: 'التفكير كمبرمج',
    partTitleEn: 'Thinking Like a Programmer',
    titleAr: 'أساسيات حل المشكلات',
    titleEn: 'Problem Solving Basics',
    descriptionAr: 'تعلم منهجية التفكير في المشكلات البرمجية وكيف تحوّل متطلبات إلى كود يعمل.',
    descriptionEn: 'Learn how to think about programming problems and convert requirements into working code.',
    estimatedTime: '45 min',
    level: 'intermediate',
    icon: '🧩',
    color: '#3fb950',
    conceptsAr: ['تحليل المشكلة', 'تقسيم المشكلة', 'Pseudocode', 'اختبار الحل', 'تحسين الكود'],
    conceptsEn: ['Problem analysis', 'Breaking down problems', 'Pseudocode', 'Testing solutions', 'Code optimization'],
    diagramType: 'problem-solving',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Problem: Find the largest number in an array
// Step 1: Start with first element as largest
// Step 2: Compare with each element
// Step 3: Update if larger found

function findMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let nums = [3, 7, 2, 9, 1, 5];
console.log(findMax(nums)); // 9`,
        descriptionAr: 'حل مشكلة إيجاد أكبر رقم في مصفوفة خطوة بخطوة',
        descriptionEn: 'Solving the "find max number" problem step by step',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'افهم المشكلة أولًا قبل أن تكتب أي كود',
      'قسّم المشكلة الكبيرة إلى مشكلات صغيرة أبسط',
      'اكتب Pseudocode (كود وهمي) لتنظيم أفكارك',
      'اختبر الحل بحالات مختلفة منها حالات الحافة',
    ],
    keyPointsEn: [
      'Understand the problem first before writing any code',
      'Break large problems into smaller, simpler sub-problems',
      'Write Pseudocode to organize your thoughts',
      'Test your solution with different cases including edge cases',
    ],
  },
  {
    id: 19,
    part: 6,
    partTitleAr: 'خلف الكواليس (اختياري)',
    partTitleEn: 'Under the Hood (Optional)',
    titleAr: 'البتات والبايتات',
    titleEn: 'Bits and Bytes',
    descriptionAr: 'اكتشف كيف يخزن الحاسوب كل شيء كأرقام ثنائية — بتات وبايتات.',
    descriptionEn: 'Discover how computers store everything as binary numbers — bits and bytes.',
    estimatedTime: '30 min',
    level: 'intermediate',
    icon: '💾',
    color: '#f85149',
    conceptsAr: ['البت (Bit)', 'البايت (Byte)', 'الكيلوبايت والميجابايت', 'تمثيل البيانات'],
    conceptsEn: ['Bit', 'Byte', 'Kilobyte and Megabyte', 'Data representation'],
    diagramType: 'bits-bytes',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Convert number to binary
let num = 42;
console.log(num.toString(2)); // "101010"

// Convert binary string to number
let binary = "101010";
console.log(parseInt(binary, 2)); // 42

// Bitwise operators
console.log(5 & 3);  // 1  (AND)
console.log(5 | 3);  // 7  (OR)
console.log(5 ^ 3);  // 6  (XOR)
console.log(~5);      // -6 (NOT)`,
        descriptionAr: 'التعامل مع الأرقام الثنائية في JavaScript',
        descriptionEn: 'Working with binary numbers in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'البت هو أصغر وحدة للبيانات: 0 أو 1',
      '8 بتات = 1 بايت، 1024 بايت = 1 كيلوبايت',
      'الحروف والأرقام والصور كلها مخزنة كبتات',
      'ASCII هو معيار تحويل الأحرف إلى أرقام',
    ],
    keyPointsEn: [
      'A bit is the smallest unit of data: 0 or 1',
      '8 bits = 1 byte, 1024 bytes = 1 kilobyte',
      'Characters, numbers, and images are all stored as bits',
      'ASCII is a standard for converting characters to numbers',
    ],
  },
  {
    id: 20,
    part: 6,
    partTitleAr: 'خلف الكواليس (اختياري)',
    partTitleEn: 'Under the Hood (Optional)',
    titleAr: 'الأرقام الثنائية',
    titleEn: 'Binary Numbers',
    descriptionAr: 'تعلم نظام الأعداد الثنائية (القاعدة 2) وكيف تحوّل بينه وبين النظام العشري.',
    descriptionEn: 'Learn the binary number system (base 2) and how to convert between binary and decimal.',
    estimatedTime: '35 min',
    level: 'intermediate',
    icon: '01',
    color: '#58a6ff',
    conceptsAr: ['القاعدة 2', 'التحويل من عشري إلى ثنائي', 'التحويل من ثنائي إلى عشري', 'الجمع الثنائي'],
    conceptsEn: ['Base 2', 'Decimal to binary', 'Binary to decimal', 'Binary addition'],
    diagramType: 'binary-converter',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Binary to Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Decimal to Binary
function decimalToBinary(decimal) {
  return decimal.toString(2);
}

console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("1111")); // 15
console.log(decimalToBinary(10));     // "1010"
console.log(decimalToBinary(255));    // "11111111"`,
        descriptionAr: 'تحويل بين النظام الثنائي والعشري',
        descriptionEn: 'Converting between binary and decimal',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'النظام الثنائي يستخدم رقمين فقط: 0 و 1',
      'كل خانة في النظام الثنائي تمثل قوة من قوى 2',
      '1010 بالثنائي = 10 بالعشري',
      '11111111 بالثنائي = 255 بالعشري (أكبر قيمة في بايت واحد)',
    ],
    keyPointsEn: [
      'Binary system uses only two digits: 0 and 1',
      'Each position in binary represents a power of 2',
      '1010 in binary = 10 in decimal',
      '11111111 in binary = 255 in decimal (max value in one byte)',
    ],
  },
  {
    id: 21,
    part: 6,
    partTitleAr: 'خلف الكواليس (اختياري)',
    partTitleEn: 'Under the Hood (Optional)',
    titleAr: 'الأرقام السداسية عشرية',
    titleEn: 'Hexadecimal Numbers',
    descriptionAr: 'النظام السداسي عشري (القاعدة 16) يُستخدم كثيرًا في البرمجة للتعامل مع الذاكرة والألوان.',
    descriptionEn: 'Hexadecimal (base 16) is widely used in programming for memory addresses and colors.',
    estimatedTime: '30 min',
    level: 'intermediate',
    icon: '🎨',
    color: '#d29922',
    conceptsAr: ['القاعدة 16', 'أرقام A-F', 'التحويل', 'الألوان في CSS', 'عناوين الذاكرة'],
    conceptsEn: ['Base 16', 'Digits A-F', 'Conversion', 'Colors in CSS', 'Memory addresses'],
    diagramType: 'hex-colors',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Hex to Decimal
console.log(parseInt("FF", 16)); // 255
console.log(parseInt("1A", 16)); // 26

// Decimal to Hex
console.log((255).toString(16)); // "ff"
console.log((26).toString(16));  // "1a"

// Hex colors in JS (as used in CSS)
const red   = "#FF0000";
const green = "#00FF00";
const blue  = "#0000FF";
console.log(\`Red: \${parseInt("FF",16)}, Green: 0, Blue: 0\`);`,
        descriptionAr: 'التعامل مع الأرقام السداسية في JavaScript',
        descriptionEn: 'Working with hexadecimal in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'النظام السداسي عشري يستخدم 16 رمزًا: 0-9 و A-F',
      'FF بالسداسي = 255 بالعشري',
      'ألوان CSS كـ #FF5733 مكتوبة بالنظام السداسي',
      'البرامجيون يستخدمونه لأنه أقصر من الثنائي',
    ],
    keyPointsEn: [
      'Hex uses 16 symbols: 0-9 and A-F',
      'FF in hex = 255 in decimal',
      'CSS colors like #FF5733 are written in hexadecimal',
      'Programmers use it because it\'s shorter than binary',
    ],
  },
  {
    id: 22,
    part: 6,
    partTitleAr: 'خلف الكواليس (اختياري)',
    partTitleEn: 'Under the Hood (Optional)',
    titleAr: 'الجبر المنطقي',
    titleEn: 'Boolean Algebra',
    descriptionAr: 'الجبر المنطقي هو أساس كيف تتخذ الدوائر الإلكترونية قرارات. تعلم بوابات AND وOR وNOT.',
    descriptionEn: 'Boolean algebra is the foundation of how electronic circuits make decisions. Learn AND, OR, and NOT gates.',
    estimatedTime: '35 min',
    level: 'intermediate',
    icon: '⚡',
    color: '#bc8cff',
    conceptsAr: ['AND Gate', 'OR Gate', 'NOT Gate', 'XOR Gate', 'جداول الحقيقة'],
    conceptsEn: ['AND Gate', 'OR Gate', 'NOT Gate', 'XOR Gate', 'Truth tables'],
    diagramType: 'logic-gates',
    codeExamples: [
      {
        language: 'javascript',
        code: `// Truth Tables in JavaScript
// AND: true only when BOTH are true
console.log(true  && true);  // true
console.log(true  && false); // false
console.log(false && true);  // false
console.log(false && false); // false

// OR: true when AT LEAST ONE is true
console.log(true  || true);  // true
console.log(true  || false); // true
console.log(false || false); // false

// NOT: flips the value
console.log(!true);  // false
console.log(!false); // true

// XOR: true when EXACTLY ONE is true
const xor = (a, b) => a !== b;
console.log(xor(true, false)); // true
console.log(xor(true, true));  // false`,
        descriptionAr: 'جداول الحقيقة للعمليات المنطقية في JavaScript',
        descriptionEn: 'Truth tables for boolean operations in JavaScript',
      },
    ],
    editorLinks: [
      { label: 'Programiz JS Editor', url: 'https://www.programiz.com/javascript/online-compiler/', language: 'javascript' },
    ],
    keyPointsAr: [
      'AND تُعطي true فقط إذا كلا الطرفين true',
      'OR تُعطي true إذا طرف واحد على الأقل true',
      'NOT تعكس القيمة المنطقية',
      'هذه العمليات تُشكّل أساس المعالج في الحاسوب',
    ],
    keyPointsEn: [
      'AND gives true only when BOTH sides are true',
      'OR gives true when at least ONE side is true',
      'NOT flips the boolean value',
      'These operations form the foundation of computer processors',
    ],
  },
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
  },
  {
    id: 25,
    part: 8,
    partTitleAr: 'الخلاصة والخطوات القادمة',
    partTitleEn: 'Wrap Up',
    titleAr: 'المراجعة النهائية والخطوات القادمة',
    titleEn: 'Final Review and Next Steps',
    descriptionAr: 'راجع كل ما تعلمته واكتشف الخطوات التالية في مسيرتك البرمجية.',
    descriptionEn: 'Review everything you\'ve learned and discover the next steps in your programming journey.',
    estimatedTime: '30 min',
    level: 'beginner',
    icon: '🏆',
    color: '#d29922',
    conceptsAr: ['مراجعة المفاهيم', 'أين تذهب بعد ذلك', 'لغات البرمجة المختلفة', 'موارد التعلم'],
    conceptsEn: ['Concepts review', 'Where to go next', 'Different programming languages', 'Learning resources'],
    diagramType: 'roadmap',
    codeExamples: [],
    editorLinks: [],
    keyPointsAr: [
      'لقد تعلمت المتغيرات، أنواع البيانات، الشروط، الحلقات، والدوال',
      'الخطوة القادمة: تعلّم لغة كـ JavaScript أو Python بشكل أعمق',
      'ابنِ مشاريع شخصية — هذا أفضل طريقة للتعلم',
      'انضم لمجتمعات البرمجة وتواصل مع مبرمجين آخرين',
    ],
    keyPointsEn: [
      'You\'ve learned variables, data types, conditions, loops, and functions',
      'Next step: dive deeper into JavaScript or Python',
      'Build personal projects — that\'s the best way to learn',
      'Join programming communities and connect with other developers',
    ],
  },
];

export const PARTS = [
  { part: 1, titleAr: 'البداية', titleEn: 'Getting Started', color: '#58a6ff' },
  { part: 2, titleAr: 'اللبنات الأساسية', titleEn: 'Core Building Blocks', color: '#d29922' },
  { part: 3, titleAr: 'اتخاذ القرارات والتكرار', titleEn: 'Making Decisions & Repeating Work', color: '#f85149' },
  { part: 4, titleAr: 'تنظيم الكود', titleEn: 'Organizing Code', color: '#bc8cff' },
  { part: 5, titleAr: 'التفكير كمبرمج', titleEn: 'Thinking Like a Programmer', color: '#3fb950' },
  { part: 6, titleAr: 'خلف الكواليس (اختياري)', titleEn: 'Under the Hood (Optional)', color: '#f85149' },
  { part: 7, titleAr: 'مشاريع صغيرة', titleEn: 'Mini Projects', color: '#3fb950' },
  { part: 8, titleAr: 'الخلاصة', titleEn: 'Wrap Up', color: '#d29922' },
];
