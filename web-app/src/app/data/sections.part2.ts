import type { SectionContent } from './sections.data';

export const SECTIONS_PART2: SectionContent[] = [
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
    conceptDescriptionsAr: [
      'التعليق السطري يبدأ بـ // ويغطي سطرًا واحدًا فقط، ويُستخدم لشرح سريع للسطر المجاور.',
      'التعليق المتعدد الأسطر يُكتب بين /* و */ ويُستخدم لشرح مقاطع كبيرة أو إخفاء كود مؤقتًا.',
      'توثيق الكود يعني كتابة تعليقات تشرح الغرض من الدوال والمتغيرات لمساعدة المطورين الآخرين.',
      'الكود الجيد يكون واضحًا بنفسه لكن التعليقات تُساعد عند وجود منطق معقد أو قرارات غير واضحة.',
    ],
    conceptDescriptionsEn: [
      'A single-line comment starts with // and covers one line only, used for a quick explanation next to that line.',
      'A multi-line comment is written between /* and */ and is used to explain large sections or temporarily hide code.',
      'Code documentation means writing comments that explain the purpose of functions and variables to help other developers.',
      'Good code is self-explanatory, but comments help when logic is complex or decisions are not immediately obvious.',
    ],
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
    quiz: [
      {
        questionAr: 'ما رمز التعليق في Python؟',
        questionEn: 'What is the comment symbol in Python?',
        options: ['//', '#', '--', '/*'],
        correctIndex: 1,
        explanationAr: 'في Python يبدأ التعليق بعلامة # وينتهي بنهاية السطر.',
        explanationEn: 'In Python, comments start with # and end at the end of the line.',
      },
      {
        questionAr: 'هل يؤثر التعليق على تنفيذ البرنامج؟',
        questionEn: 'Does a comment affect program execution?',
        options: ['نعم / Yes', 'لا / No', 'أحياناً / Sometimes', 'يعتمد على اللغة / Depends on language'],
        correctIndex: 1,
        explanationAr: 'التعليقات يتجاهلها الحاسوب تماماً ولا تؤثر على البرنامج.',
        explanationEn: 'Comments are completely ignored by the computer and don\'t affect the program.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: أضف تعليقات لكودك',
        titleEn: 'Challenge: Add Comments to Your Code',
        taskAr: 'اكتب برنامجاً يحسب مجموع رقمين وأضف تعليقاً يشرح كل سطر.',
        taskEn: 'Write a program that adds two numbers and add a comment explaining each line.',
        hintAr: 'استخدم # للتعليق في Python أو // في JavaScript',
        hintEn: 'Use # for comments in Python or // in JavaScript',
        solutionPython: `# تعريف الأرقام\na = 5\nb = 3\n\n# حساب المجموع\nresult = a + b\n\n# طباعة النتيجة\nprint(result)  # الناتج: 8`,
        solutionJs: `// Define the numbers\nlet a = 5;\nlet b = 3;\n\n// Calculate the sum\nlet result = a + b;\n\n// Print the result\nconsole.log(result); // Output: 8`,
        expectedOutput: '8',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'استخدام // للتعليق في Python بدلاً من #',
        mistakeEn: 'Using // for comments in Python instead of #',
        fixAr: 'في Python استخدم # وليس // — أما // فهي لـ JavaScript و C++',
        fixEn: 'In Python use # not // — // is for JavaScript and C++',
      },
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
    conceptDescriptionsAr: [
      'تعريف المتغير يعني إخبار الحاسوب باسم المتغير ونوعه، كـ let age في JavaScript.',
      'اسم المتغير يجب أن يكون وصفيًا ويبدأ بحرف، واصطلاح camelCase شائع مثل firstName.',
      'التعيين يعني وضع قيمة داخل المتغير باستخدام علامة = مثل age = 25.',
      'بعد التعريف والتعيين يمكنك استخدام المتغير في أي مكان بكتابة اسمه فقط.',
    ],
    conceptDescriptionsEn: [
      'Variable declaration tells the computer the name of the variable, like let age in JavaScript.',
      'Variable names should be descriptive and start with a letter; camelCase like firstName is the common convention.',
      'Assignment means placing a value into the variable using the = sign, for example age = 25.',
      'After declaring and assigning, you can use the variable anywhere in your code just by writing its name.',
    ],
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
    quiz: [
      {
        questionAr: 'ما الرمز الذي يُستخدم لتعيين قيمة لمتغير؟',
        questionEn: 'Which symbol is used to assign a value to a variable?',
        options: ['==', '=', ':=', '=>'],
        correctIndex: 1,
        explanationAr: 'الرمز = يُستخدم للتعيين، بينما == يُستخدم للمقارنة.',
        explanationEn: '= is for assignment, while == is for comparison.',
      },
      {
        questionAr: 'ما قيمة score بعد تنفيذ: score = 5; score = score + 3؟',
        questionEn: 'What is the value of score after: score = 5; score = score + 3?',
        options: ['5', '3', '8', '53'],
        correctIndex: 2,
        explanationAr: 'score = 5 ثم نضيف 3 فتصبح 8.',
        explanationEn: 'score starts at 5, then 5 + 3 = 8.',
      },
      {
        questionAr: 'أي من التالي اسم متغير صحيح؟',
        questionEn: 'Which of the following is a valid variable name?',
        options: ['2name', 'my-name', 'myName', 'my name'],
        correctIndex: 2,
        explanationAr: 'أسماء المتغيرات لا تبدأ برقم ولا تحتوي على مسافات أو شرطات.',
        explanationEn: 'Variable names cannot start with a number or contain spaces or hyphens.',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'استخدام اسم متغير يبدأ بأرقام: let 2name = "Sara"',
        mistakeEn: 'Using a variable name that starts with a number: let 2name = "Sara"',
        fixAr: 'أسماء المتغيرات يجب أن تبدأ بحرف أو _  مثل: let name2 = "Sara"',
        fixEn: 'Variable names must start with a letter or _ like: let name2 = "Sara"',
      },
      {
        mistakeAr: 'الخلط بين = و == : if (x = 5) بدلاً من if (x == 5)',
        mistakeEn: 'Confusing = with == : if (x = 5) instead of if (x == 5)',
        fixAr: '= يُعيّن قيمة، أما == أو === فيُقارن قيمتين',
        fixEn: '= assigns a value, while == or === compares two values',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: صف عن نفسك',
        titleEn: 'Challenge: Describe Yourself',
        taskAr: 'أنشئ 3 متغيرات: اسمك، عمرك، ومدينتك، ثم اطبعها.',
        taskEn: 'Create 3 variables: your name, age, and city, then print them.',
        hintAr: 'استخدم name = "..." و age = ... و city = "..."',
        hintEn: 'Use name = "..." and age = ... and city = "..."',
        solutionPython: `name = "Sara"\nage = 22\ncity = "Riyadh"\n\nprint(name)\nprint(age)\nprint(city)`,
        solutionJs: `let name = "Sara";\nlet age = 22;\nlet city = "Riyadh";\n\nconsole.log(name);\nconsole.log(age);\nconsole.log(city);`,
      },
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
    conceptDescriptionsAr: [
      'Number يمثل أي قيمة رقمية صحيحة أو عشرية مثل 42 أو 3.14، ويدعم العمليات الحسابية مباشرة.',
      'String هو أي نص بين علامات اقتباس مثل "مرحبا"، ويمكن دمجه أو البحث فيه أو تقطيعه.',
      'Boolean يحمل قيمة واحدة من اثنتين فقط: true أو false، ويُستخدم في الشروط والمقارنات.',
      'Null تعني "قيمة فارغة مقصودة"، بينما Undefined تعني "لم تُعطَ قيمة بعد".',
      'Array مصفوفة تُخزّن قائمة مرتبة من القيم يمكن الوصول إليها بالفهرس مثل [0] و[1].',
      'Object كائن يُخزّن بيانات كأزواج مفتاح-قيمة مثل { name: "Sara", age: 25 }.',
    ],
    conceptDescriptionsEn: [
      'Number represents any integer or decimal value like 42 or 3.14, and directly supports arithmetic operations.',
      'String is any text wrapped in quotes like "hello", and can be concatenated, searched, or sliced.',
      'Boolean holds one of only two values: true or false, and is used in conditions and comparisons.',
      'Null means "intentionally empty value", while Undefined means "no value has been assigned yet".',
      'Array stores an ordered list of values accessible by index like [0] and [1].',
      'Object stores data as key-value pairs like { name: "Sara", age: 25 }.',
    ],
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
    quiz: [
      {
        questionAr: 'ما نوع القيمة "مرحبا"؟',
        questionEn: 'What is the type of "مرحبا"?',
        options: ['Number', 'Boolean', 'String', 'Array'],
        correctIndex: 2,
        explanationAr: 'أي نص بين علامات اقتباس هو من نوع String.',
        explanationEn: 'Any text wrapped in quotes is of type String.',
      },
      {
        questionAr: 'ما نوع القيمة true؟',
        questionEn: 'What is the type of true?',
        options: ['String', 'Number', 'Boolean', 'Null'],
        correctIndex: 2,
        explanationAr: 'true و false هما القيمتان الوحيدتان لنوع Boolean.',
        explanationEn: 'true and false are the only two values of type Boolean.',
      },
      {
        questionAr: 'ما نوع القيمة 42؟',
        questionEn: 'What is the type of 42?',
        options: ['String', 'Number', 'Boolean', 'Object'],
        correctIndex: 1,
        explanationAr: 'الأرقام الصحيحة والعشرية كلها من نوع Number.',
        explanationEn: 'Integer and decimal numbers are all of type Number.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: معرّف الأنواع',
        titleEn: 'Challenge: Type Identifier',
        taskAr: 'أنشئ متغيرات لكل نوع (رقم، نص، منطقي) ثم اطبع نوع كل منها باستخدام typeof.',
        taskEn: 'Create a variable of each type (number, string, boolean) then print the type of each using typeof.',
        hintAr: 'استخدم typeof myVariable لمعرفة النوع',
        hintEn: 'Use typeof myVariable to find the type',
        solutionPython: `age = 25\nname = "Sara"\nis_student = True\n\nprint(type(age))        # <class 'int'>\nprint(type(name))       # <class 'str'>\nprint(type(is_student)) # <class 'bool'>`,
        solutionJs: `let age = 25;\nlet name = "Sara";\nlet isStudent = true;\n\nconsole.log(typeof age);       // "number"\nconsole.log(typeof name);      // "string"\nconsole.log(typeof isStudent); // "boolean"`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'كتابة النص بدون علامات اقتباس: let name = Sara',
        mistakeEn: 'Writing text without quotes: let name = Sara',
        fixAr: 'النص دائماً بين علامات اقتباس: let name = "Sara"',
        fixEn: 'Text always needs quotes: let name = "Sara"',
      },
      {
        mistakeAr: 'الخلط بين null و undefined — كلاهما يعني "لا قيمة" لكن لأسباب مختلفة',
        mistakeEn: 'Confusing null and undefined — both mean "no value" but for different reasons',
        fixAr: 'null = أنت اخترت أنه فارغ. undefined = لم تُعطَ قيمة بعد.',
        fixEn: 'null = you chose to leave it empty. undefined = no value assigned yet.',
      },
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
    conceptDescriptionsAr: [
      'const يُعرّف ثابتًا لا يمكن إعادة تعيينه بعد تحديد قيمته الأولى.',
      'let تسمح بتغيير القيمة لاحقًا، أما const فتمنع أي إعادة تعيين وتسبب خطأً.',
      'استخدم const كخيار افتراضي وانتقل إلى let فقط عندما تعرف أن القيمة ستتغير.',
      'في Python لا يوجد كلمة مفتاحية للثوابت، لكن الاصطلاح يقضي بكتابة الاسم بأحرف كبيرة مثل MAX_SIZE.',
    ],
    conceptDescriptionsEn: [
      'const defines a constant that cannot be reassigned after its initial value is set.',
      'let allows changing the value later, while const prevents any reassignment and throws an error.',
      'Use const as your default choice and switch to let only when you know the value will change.',
      'Python has no constant keyword, but convention is to write the name in UPPER_CASE like MAX_SIZE.',
    ],
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
    quiz: [
      {
        questionAr: 'ما الفرق بين let و const؟',
        questionEn: 'What is the difference between let and const?',
        options: [
          'لا فرق / No difference',
          'let قابل للتغيير، const ثابت / let is changeable, const is fixed',
          'const أسرع / const is faster',
          'let أكبر حجماً / let is larger in size',
        ],
        correctIndex: 1,
        explanationAr: 'let يسمح بتغيير القيمة، بينما const تمنع إعادة التعيين نهائياً.',
        explanationEn: 'let allows changing the value, while const prevents any reassignment.',
      },
      {
        questionAr: 'ما الاصطلاح الصحيح لتسمية الثابت MAX_SIZE؟',
        questionEn: 'What naming convention is correct for the constant MAX_SIZE?',
        options: ['maxSize', 'max_size', 'MAX_SIZE', 'MaxSize'],
        correctIndex: 2,
        explanationAr: 'الثوابت تُكتب بأحرف كبيرة مع فصل الكلمات بـ _ حسب الاصطلاح.',
        explanationEn: 'Constants are written in UPPER_CASE with _ separating words by convention.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: ثوابت التطبيق',
        titleEn: 'Challenge: App Constants',
        taskAr: 'أنشئ ثوابت لاسم التطبيق ونسخته وعدد المستخدمين الأقصى، ثم اطبعها.',
        taskEn: 'Create constants for the app name, version, and max users, then print them.',
        hintAr: 'استخدم const APP_NAME = "..." و const VERSION = ...',
        hintEn: 'Use const APP_NAME = "..." and const VERSION = ...',
        solutionPython: `APP_NAME = "MyApp"\nVERSION = 1.0\nMAX_USERS = 100\n\nprint(APP_NAME)\nprint(VERSION)\nprint(MAX_USERS)`,
        solutionJs: `const APP_NAME = "MyApp";\nconst VERSION = 1.0;\nconst MAX_USERS = 100;\n\nconsole.log(APP_NAME);\nconsole.log(VERSION);\nconsole.log(MAX_USERS);`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'محاولة تغيير قيمة const: const PI = 3.14; PI = 3;',
        mistakeEn: 'Trying to change a const value: const PI = 3.14; PI = 3;',
        fixAr: 'إذا احتجت تغيير القيمة استخدم let بدلاً من const',
        fixEn: 'If you need to change the value, use let instead of const',
      },
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
    conceptDescriptionsAr: [
      'يمكن إنشاء النص بعلامات اقتباس مفردة \' \'، مزدوجة \" \"، أو خلفية ` ` لدعم التعبيرات.',
      'دمج النصوص يعني ربطها معًا باستخدام + مثل "Hello" + " " + "World".',
      '.length خاصية تُعطيك عدد الأحرف في النص بما فيها المسافات.',
      '.includes() تُرجع true إذا وُجد النص المبحوث عنه داخل النص الأصلي.',
      'Template Literals تُتيح تضمين متغيرات داخل النص مباشرة بصيغة ${variable}.',
    ],
    conceptDescriptionsEn: [
      'Strings can be created with single \' \', double \" \", or backtick ` ` quotes — backticks support expressions.',
      'Concatenation means joining strings together using + like "Hello" + " " + "World".',
      '.length is a property that gives you the number of characters in the string, including spaces.',
      '.includes() returns true if the searched text exists inside the original string.',
      'Template Literals let you embed variables directly inside a string using ${variable} syntax.',
    ],
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
    quiz: [
      {
        questionAr: 'ما ناتج "Hello" + " " + "World"؟',
        questionEn: 'What is the result of "Hello" + " " + "World"?',
        options: ['"HelloWorld"', '"Hello World"', 'خطأ / Error', '"Hello" "World"'],
        correctIndex: 1,
        explanationAr: 'عملية + تدمج النصوص معاً مع الحفاظ على المسافة.',
        explanationEn: 'The + operator concatenates strings while preserving the space.',
      },
      {
        questionAr: 'ما طول النص "مرحبا"؟ (5 أحرف)',
        questionEn: 'What is the length of "hello"?',
        options: ['4', '5', '6', '0'],
        correctIndex: 1,
        explanationAr: '"hello" يحتوي على 5 أحرف.',
        explanationEn: '"hello" contains 5 characters.',
      },
      {
        questionAr: 'كيف تكتب متغيراً داخل نص بـ Template Literal؟',
        questionEn: 'How do you embed a variable in a Template Literal?',
        options: ['${name}', '#{name}', '{name}', '$(name)'],
        correctIndex: 0,
        explanationAr: 'Template Literals تستخدم ${} لتضمين المتغيرات.',
        explanationEn: 'Template Literals use ${} to embed variables.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: بطاقة تعريف',
        titleEn: 'Challenge: ID Card',
        taskAr: 'أنشئ متغيرات لاسمك وعمرك ومدينتك ثم اطبع جملة واحدة تجمعهم باستخدام Template Literal.',
        taskEn: 'Create variables for your name, age, and city, then print one sentence combining them using a Template Literal.',
        hintAr: 'استخدم: `اسمي ${name} وعمري ${age} وأسكن في ${city}`',
        hintEn: 'Use: `My name is ${name}, I am ${age} and I live in ${city}`',
        solutionPython: `name = "Sara"\nage = 22\ncity = "Riyadh"\n\nprint(f"اسمي {name} وعمري {age} وأسكن في {city}")`,
        solutionJs: `let name = "Sara";\nlet age = 22;\nlet city = "Riyadh";\n\nconsole.log(\`My name is \${name}, I am \${age} and I live in \${city}\`);`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان إغلاق علامة الاقتباس: let name = "Sara',
        mistakeEn: 'Forgetting to close the quote: let name = "Sara',
        fixAr: 'كل علامة اقتباس فتح يجب أن يقابلها إغلاق: let name = "Sara"',
        fixEn: 'Every opening quote must have a closing quote: let name = "Sara"',
      },
      {
        mistakeAr: 'استخدام + بدلاً من ${} داخل Template Literal: `Hello + name`',
        mistakeEn: 'Using + instead of ${} inside Template Literal: `Hello + name`',
        fixAr: 'داخل backticks استخدم ${name} وليس + name',
        fixEn: 'Inside backticks use ${name} not + name',
      },
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
    conceptDescriptionsAr: [
      'العمليات الحسابية تشمل + - * / % ** وتعمل على الأرقام مثل الرياضيات تمامًا.',
      'عمليات المقارنة مثل === و!== و> و< تُقارن قيمتين وتُعيد دائمًا true أو false.',
      'العمليات المنطقية && و|| و! تُدمج شروطًا متعددة في تعبير واحد.',
      'أولوية العمليات تحدد أيها تُنفَّذ أولًا — الضرب والقسمة قبل الجمع والطرح.',
    ],
    conceptDescriptionsEn: [
      'Arithmetic operators include + - * / % ** and work on numbers exactly like in mathematics.',
      'Comparison operators like === !== > < compare two values and always return true or false.',
      'Logical operators && || ! combine multiple conditions into a single expression.',
      'Operator precedence determines which operation runs first — multiplication and division before addition and subtraction.',
    ],
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
    quiz: [
      {
        questionAr: 'ما ناتج 10 % 3؟',
        questionEn: 'What is the result of 10 % 3?',
        options: ['3', '1', '0', '3.33'],
        correctIndex: 1,
        explanationAr: '10 % 3 = 1 لأن 10 = 3×3 + 1، فالباقي هو 1.',
        explanationEn: '10 % 3 = 1 because 10 = 3×3 + 1, so the remainder is 1.',
      },
      {
        questionAr: 'ما الفرق بين == و ===؟',
        questionEn: 'What is the difference between == and ===?',
        options: [
          'لا فرق / No difference',
          '=== يقارن القيمة والنوع، == يقارن القيمة فقط / === compares value and type, == compares value only',
          '== أدق / == is more precise',
          '=== للنصوص فقط / === is for strings only',
        ],
        correctIndex: 1,
        explanationAr: '=== يتحقق من القيمة والنوع معاً — أكثر دقة وأفضل استخداماً.',
        explanationEn: '=== checks both value and type — more precise and better to use.',
      },
      {
        questionAr: 'ما ناتج true && false؟',
        questionEn: 'What is the result of true && false?',
        options: ['true', 'false', 'null', 'undefined'],
        correctIndex: 1,
        explanationAr: 'AND (&&) يُعطي true فقط إذا كلا الطرفين true.',
        explanationEn: 'AND (&&) gives true only when both sides are true.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: آلة حاسبة بسيطة',
        titleEn: 'Challenge: Simple Calculator',
        taskAr: 'أنشئ متغيرين a=15 و b=4 ثم اطبع ناتج الجمع والطرح والضرب والقسمة والباقي.',
        taskEn: 'Create two variables a=15 and b=4, then print the result of addition, subtraction, multiplication, division, and remainder.',
        hintAr: 'استخدم +، -، *، /، % بالترتيب',
        hintEn: 'Use +, -, *, /, % in order',
        solutionPython: `a = 15\nb = 4\n\nprint(a + b)  # 19\nprint(a - b)  # 11\nprint(a * b)  # 60\nprint(a / b)  # 3.75\nprint(a % b)  # 3`,
        solutionJs: `let a = 15;\nlet b = 4;\n\nconsole.log(a + b); // 19\nconsole.log(a - b); // 11\nconsole.log(a * b); // 60\nconsole.log(a / b); // 3.75\nconsole.log(a % b); // 3`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'استخدام = للمقارنة بدلاً من == أو ===',
        mistakeEn: 'Using = for comparison instead of == or ===',
        fixAr: '= للتعيين فقط، استخدم === للمقارنة: if (x === 5)',
        fixEn: '= is for assignment only, use === for comparison: if (x === 5)',
      },
      {
        mistakeAr: 'نسيان أن القسمة قد تعطي عدداً عشرياً: 10 / 3 = 3.33',
        mistakeEn: 'Forgetting division may give a decimal: 10 / 3 = 3.33',
        fixAr: 'إذا أردت القسمة الصحيحة استخدم Math.floor() أو // في Python',
        fixEn: 'For integer division use Math.floor() in JS or // in Python',
      },
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
    conceptDescriptionsAr: [
      'التحويل الصريح يعني أنت تطلبه بوضوح مثل Number("42") أو String(99).',
      'التحويل الضمني يحدث تلقائيًا مثل "5" + 1 يُعطي "51" لأن JavaScript تحوّل الرقم لنص.',
      'String() تُحوّل أي قيمة إلى نص بما فيها الأرقام والقيم المنطقية.',
      'Number() تُحوّل النص إلى رقم، وتُعيد NaN إذا كان النص غير رقمي.',
      'parseInt() تأخذ الجزء الصحيح فقط، و parseFloat() تأخذ الرقم بكامل خانات العشرية.',
    ],
    conceptDescriptionsEn: [
      'Explicit conversion means you request it directly, like Number("42") or String(99).',
      'Implicit conversion happens automatically, like "5" + 1 gives "51" because JavaScript converts the number to a string.',
      'String() converts any value to a string, including numbers and booleans.',
      'Number() converts a string to a number, and returns NaN if the string is not numeric.',
      'parseInt() takes only the integer part, while parseFloat() keeps all decimal digits.',
    ],
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
    quiz: [
      {
        questionAr: 'ما ناتج Number("42")؟',
        questionEn: 'What is the result of Number("42")?',
        options: ['"42"', '42', 'NaN', 'undefined'],
        correctIndex: 1,
        explanationAr: 'Number() يحول النص الرقمي إلى رقم حقيقي.',
        explanationEn: 'Number() converts a numeric string to an actual number.',
      },
      {
        questionAr: 'ما ناتج Number("hello")؟',
        questionEn: 'What is the result of Number("hello")?',
        options: ['0', '"hello"', 'NaN', 'خطأ / Error'],
        correctIndex: 2,
        explanationAr: 'إذا لم يكن النص رقماً تُعيد Number() القيمة NaN (ليس رقماً).',
        explanationEn: 'If the string is not numeric, Number() returns NaN (Not a Number).',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: تحويل وحساب',
        titleEn: 'Challenge: Convert and Calculate',
        taskAr: 'لديك عمر كنص: age = "25". حوّله لرقم ثم أضف 5 إليه واطبع النتيجة.',
        taskEn: 'You have an age as string: age = "25". Convert it to a number, add 5, and print the result.',
        hintAr: 'استخدم int() في Python أو Number() في JavaScript',
        hintEn: 'Use int() in Python or Number() in JavaScript',
        solutionPython: `age = "25"\nage_num = int(age)\nresult = age_num + 5\nprint(result)  # 30`,
        solutionJs: `let age = "25";\nlet ageNum = Number(age);\nlet result = ageNum + 5;\nconsole.log(result); // 30`,
        expectedOutput: '30',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'إضافة رقم لنص: "5" + 1 = "51" وليس 6',
        mistakeEn: 'Adding a number to a string: "5" + 1 = "51" not 6',
        fixAr: 'حوّل النص لرقم أولاً: Number("5") + 1 = 6',
        fixEn: 'Convert the string first: Number("5") + 1 = 6',
      },
      {
        mistakeAr: 'الاعتماد على تحويل ضمني غير متوقع',
        mistakeEn: 'Relying on unexpected implicit conversion',
        fixAr: 'استخدم دائماً التحويل الصريح مثل Number() و String() لتجنب المفاجآت',
        fixEn: 'Always use explicit conversion like Number() and String() to avoid surprises',
      },
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
    conceptDescriptionsAr: [
      'console.log() تطبع أي قيمة في وحدة تحكم المطور وهي الأداة الأساسية لتتبع سير البرنامج.',
      'prompt() تفتح نافذة حوار في المتصفح تطلب نصًا من المستخدم وتُعيده كـ String.',
      'alert() تعرض رسالة في نافذة منبثقة بالمتصفح وتنتظر المستخدم حتى يغلقها.',
      'في Node.js يمكن قراءة الإدخال عبر readline أو مكتبات خارجية لأن prompt() غير متاحة.',
      'في Python تستخدم دالة input() لقراءة نص من المستخدم في سطر الأوامر وتُعيده دائمًا كـ str.',
    ],
    conceptDescriptionsEn: [
      'console.log() prints any value to the developer console and is the primary tool for tracking program flow.',
      'prompt() opens a dialog box in the browser asking the user for text and returns it as a String.',
      'alert() displays a message in a browser popup and waits for the user to close it.',
      'In Node.js, input is read via readline or external libraries since prompt() is not available.',
      'In Python, the input() function reads text from the user on the command line and always returns a str.',
    ],
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
    quiz: [
      {
        questionAr: 'ما نوع القيمة التي تُعيدها input() في Python؟',
        questionEn: 'What type does Python\'s input() always return?',
        options: ['Number', 'Boolean', 'String', 'يعتمد / Depends'],
        correctIndex: 2,
        explanationAr: 'input() تُعيد دائماً String — حتى لو كتب المستخدم رقماً.',
        explanationEn: 'input() always returns a String — even if the user types a number.',
      },
      {
        questionAr: 'ما الفرق بين console.log() و alert()؟',
        questionEn: 'What is the difference between console.log() and alert()?',
        options: [
          'لا فرق / No difference',
          'console.log في وحدة التحكم، alert نافذة منبثقة / console.log in console, alert in popup',
          'alert أسرع / alert is faster',
          'console.log للأخطاء فقط / console.log is for errors only',
        ],
        correctIndex: 1,
        explanationAr: 'console.log تطبع في وحدة التحكم بينما alert تفتح نافذة منبثقة.',
        explanationEn: 'console.log prints in the console while alert opens a popup window.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: احسب عمرك',
        titleEn: 'Challenge: Calculate Your Age',
        taskAr: 'اطلب من المستخدم سنة ميلاده ثم احسب عمره واطبعه.',
        taskEn: 'Ask the user for their birth year, then calculate and print their age.',
        hintAr: 'العمر = 2025 - سنة الميلاد. تذكر تحويل الإدخال لرقم!',
        hintEn: 'Age = 2025 - birth year. Remember to convert input to a number!',
        solutionPython: `birth_year = int(input("أدخل سنة ميلادك: "))\nage = 2025 - birth_year\nprint(f"عمرك هو {age} سنة")`,
        solutionJs: `let birthYear = Number(prompt("Enter your birth year:"));\nlet age = 2025 - birthYear;\nconsole.log("Your age is " + age);`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'محاولة جمع مدخل رقمي مباشرة: age = input(); total = age + 5',
        mistakeEn: 'Trying to add numeric input directly: age = input(); total = age + 5',
        fixAr: 'حوّل المدخل لرقم أولاً: age = int(input()) ثم total = age + 5',
        fixEn: 'Convert input to number first: age = int(input()) then total = age + 5',
      },
    ],
  },
];
