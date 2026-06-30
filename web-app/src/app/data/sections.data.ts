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

export interface MultiLangExample {
  titleAr: string;
  titleEn: string;
  tabs: {
    id: 'python' | 'javascript' | 'java' | 'cpp';
    code: string;
    descriptionAr: string;
    descriptionEn: string;
  }[];
}

export interface QuizQuestion {
  questionAr: string;
  questionEn: string;
  options: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

export interface Challenge {
  titleAr: string;
  titleEn: string;
  taskAr: string;
  taskEn: string;
  hintAr: string;
  hintEn: string;
  solutionPython: string;
  solutionJs: string;
  expectedOutput?: string;
}

export interface CommonMistake {
  mistakeAr: string;
  mistakeEn: string;
  fixAr: string;
  fixEn: string;
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
  conceptDescriptionsAr?: string[];
  conceptDescriptionsEn?: string[];
  diagramType: string;
  codeExamples: CodeExample[];
  multiLangExamples?: MultiLangExample[];
  editorLinks: EditorLink[];
  keyPointsAr: string[];
  keyPointsEn: string[];
  icon: string;
  color: string;
  quiz?: QuizQuestion[];
  challenges?: Challenge[];
  commonMistakes?: CommonMistake[];
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
    conceptDescriptionsAr: [
      'الدورة مقسمة إلى 8 أجزاء تبدأ من أساسيات البرمجة وتصل إلى مشاريع تطبيقية متكاملة.',
      'كل قسم يجمع بين الشرح النظري والأمثلة العملية لتعزيز الفهم وتثبيت المعلومات.',
      'الهدف هو بناء أساس برمجي متين يُمكّنك من الانتقال بثقة إلى لغات وتخصصات أكثر تقدمًا.',
      'لا تحتاج إلى تثبيت أي برنامج — متصفح الويب وحده يكفي للبدء فورًا.',
    ],
    conceptDescriptionsEn: [
      'The course is divided into 8 parts, starting from programming basics and building up to complete hands-on projects.',
      'Each section combines theory and practical examples to reinforce understanding and retention.',
      'The goal is to build a solid programming foundation so you can confidently move on to more advanced languages and specializations.',
      'No software installation needed — a web browser alone is enough to get started right away.',
    ],
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
    quiz: [
      {
        questionAr: 'كم عدد الأجزاء الرئيسية في هذه الدورة؟',
        questionEn: 'How many main parts does this course have?',
        options: ['5', '6', '8', '10'],
        correctIndex: 2,
        explanationAr: 'الدورة مقسمة إلى 8 أجزاء تبدأ من الأساسيات وتصل إلى المشاريع التطبيقية.',
        explanationEn: 'The course is divided into 8 parts, from basics to applied projects.',
      },
      {
        questionAr: 'هل تحتاج إلى تثبيت برامج لبدء هذه الدورة؟',
        questionEn: 'Do you need to install software to start this course?',
        options: ['نعم / Yes', 'لا / No', 'ربما / Maybe', 'أحياناً / Sometimes'],
        correctIndex: 1,
        explanationAr: 'يكفي متصفح الويب — لا تحتاج إلى تثبيت أي شيء.',
        explanationEn: 'A web browser is enough — no installation needed.',
      },
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
    conceptDescriptionsAr: [
      'البرمجة هي كتابة تعليمات دقيقة للحاسوب لأداء مهمة معينة، مثلما تكتب وصفة طبخ خطوة بخطوة.',
      'البرمجة تفتح أبواب التوظيف والإبداع وبناء المنتجات، وتُستخدم في كل مجال من الطب إلى الفضاء.',
      'الحاسوب يُنفّذ التعليمات بالترتيب الحرفي دون تفسير — لذا يجب أن تكون التعليمات واضحة تمامًا.',
      'الخوارزمية هي سلسلة خطوات منطقية لحل مشكلة، كخطوات البحث عن كلمة في قاموس.',
    ],
    conceptDescriptionsEn: [
      'Programming is writing precise instructions for a computer to perform a task — like writing a recipe step by step.',
      'Coding opens doors to jobs, creativity, and product building, and is used in every field from medicine to space exploration.',
      'Computers execute instructions in exact order with no interpretation — so instructions must be completely unambiguous.',
      'An algorithm is a logical sequence of steps to solve a problem, like the steps to look up a word in a dictionary.',
    ],
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
    quiz: [
      {
        questionAr: 'ما تعريف البرمجة؟',
        questionEn: 'What is programming?',
        options: [
          'تصميم واجهات / Designing interfaces',
          'إعطاء تعليمات دقيقة للحاسوب / Giving precise instructions to a computer',
          'استخدام الإنترنت / Using the internet',
          'تصليح الأعطال / Fixing hardware',
        ],
        correctIndex: 1,
        explanationAr: 'البرمجة هي كتابة تعليمات دقيقة للحاسوب لأداء مهمة محددة.',
        explanationEn: 'Programming is writing precise instructions for a computer to perform a specific task.',
      },
      {
        questionAr: 'ما هي الخوارزمية؟',
        questionEn: 'What is an algorithm?',
        options: [
          'لغة برمجة / A programming language',
          'سلسلة خطوات منطقية لحل مشكلة / A logical sequence of steps to solve a problem',
          'برنامج حاسوبي / A computer program',
          'شاشة عرض / A display screen',
        ],
        correctIndex: 1,
        explanationAr: 'الخوارزمية هي سلسلة خطوات منطقية لحل مشكلة معينة.',
        explanationEn: 'An algorithm is a logical sequence of steps to solve a specific problem.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: صف خوارزمية',
        titleEn: 'Challenge: Describe an Algorithm',
        taskAr: 'اكتب خطوات خوارزمية لعمل كوب شاي (بالكلام العادي، لا تحتاج كود).',
        taskEn: 'Write the steps of an algorithm to make a cup of tea (plain language, no code needed).',
        hintAr: 'فكّر: ما المدخلات؟ ما الخطوات؟ ما النتيجة؟',
        hintEn: 'Think: What are the inputs? What are the steps? What is the result?',
        solutionPython: `# خوارزمية عمل كوب شاي:\n# 1. اغلِ الماء\n# 2. ضع كيس الشاي في الكوب\n# 3. صبّ الماء الساخن\n# 4. انتظر 3 دقائق\n# 5. أزل كيس الشاي\n# 6. أضف السكر حسب الرغبة\nprint("الشاي جاهز!")`,
        solutionJs: `// Algorithm: Make a cup of tea\n// 1. Boil water\n// 2. Place tea bag in cup\n// 3. Pour hot water\n// 4. Wait 3 minutes\n// 5. Remove tea bag\n// 6. Add sugar if desired\nconsole.log("Tea is ready!");`,
      },
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
    conceptDescriptionsAr: [
      'بيئة التطوير هي المكان الذي تكتب فيه وتُشغّل الكود، وتشمل المحرر النصي والمتصفح أو المحطة الطرفية.',
      'المحرر النصي كـ VS Code يُميّز الكلمات بألوان ويساعدك على اكتشاف الأخطاء قبل تشغيل البرنامج.',
      'تشغيل الكود يعني تسليمه للحاسوب لتنفيذه وإظهار نتيجته على الشاشة.',
      'Hello World هو أبسط برنامج ممكن، ويُستخدم تقليديًا للتأكد أن البيئة تعمل بشكل صحيح.',
    ],
    conceptDescriptionsEn: [
      'A development environment is where you write and run code — it includes a text editor and a browser or terminal.',
      'A text editor like VS Code highlights keywords with colors and helps you spot errors before running the program.',
      'Running code means handing it to the computer to execute and display its result on the screen.',
      'Hello World is the simplest possible program, traditionally used to confirm that your environment is working correctly.',
    ],
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
    quiz: [
      {
        questionAr: 'كيف تطبع "Hello" في Python؟',
        questionEn: 'How do you print "Hello" in Python?',
        options: ['console.log("Hello")', 'echo("Hello")', 'print("Hello")', 'write("Hello")'],
        correctIndex: 2,
        explanationAr: 'في Python نستخدم print() لطباعة أي نص أو قيمة.',
        explanationEn: 'In Python we use print() to display any text or value.',
      },
      {
        questionAr: 'كيف تطبع "Hello" في JavaScript؟',
        questionEn: 'How do you print "Hello" in JavaScript?',
        options: ['print("Hello")', 'console.log("Hello")', 'System.out("Hello")', 'echo "Hello"'],
        correctIndex: 1,
        explanationAr: 'في JavaScript نستخدم console.log() لطباعة القيم في وحدة التحكم.',
        explanationEn: 'In JavaScript we use console.log() to print values to the console.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: برنامجك الأول',
        titleEn: 'Challenge: Your First Program',
        taskAr: 'اكتب برنامجاً يطبع اسمك على الشاشة.',
        taskEn: 'Write a program that prints your name to the screen.',
        hintAr: 'استخدم print() في Python أو console.log() في JavaScript',
        hintEn: 'Use print() in Python or console.log() in JavaScript',
        solutionPython: `print("سارة")  # ضع اسمك هنا`,
        solutionJs: `console.log("Sara"); // Put your name here`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان علامات الاقتباس حول النص: print(Hello)',
        mistakeEn: 'Forgetting quotes around text: print(Hello)',
        fixAr: 'النص يجب أن يكون بين علامات اقتباس: print("Hello")',
        fixEn: 'Text must be wrapped in quotes: print("Hello")',
      },
      {
        mistakeAr: 'الخطأ في كتابة الدالة: Print("Hello") بحرف كبير',
        mistakeEn: 'Wrong capitalization: Print("Hello") with capital P',
        fixAr: 'Python حساسة لحالة الأحرف — اكتب print بأحرف صغيرة',
        fixEn: 'Python is case-sensitive — write print in lowercase',
      },
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
    conceptDescriptionsAr: [
      'if تُنفّذ كتلة الكود فقط إذا كان الشرط بين القوسين يُقيَّم إلى true.',
      'else تُنفّذ كتلة بديلة عندما يكون شرط if خاطئًا، وهي اختيارية.',
      'else if تُتيح فحص شروط إضافية بالترتيب حتى يتحقق أحدها أو تُنفَّذ else في النهاية.',
      'العامل الثلاثي condition ? valueIfTrue : valueIfFalse مختصر مناسب للشروط البسيطة.',
      'switch يُقارن متغيرًا بقائمة قيم ثابتة وينتقل إلى الحالة المطابقة مباشرة.',
    ],
    conceptDescriptionsEn: [
      'if executes a block of code only when the condition in parentheses evaluates to true.',
      'else runs an alternative block when the if condition is false, and is optional.',
      'else if lets you check additional conditions in order until one matches, or else runs at the end.',
      'The ternary operator condition ? valueIfTrue : valueIfFalse is a compact form suited for simple conditions.',
      'switch compares a variable against a list of fixed values and jumps directly to the matching case.',
    ],
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
    quiz: [
      {
        questionAr: 'ماذا يُنفّذ الكود داخل else؟',
        questionEn: 'When does the code inside else execute?',
        options: ['دائماً / Always', 'عندما يكون الشرط صحيحاً / When condition is true', 'عندما يكون الشرط خاطئاً / When condition is false', 'لا يُنفّذ أبداً / Never'],
        correctIndex: 2,
        explanationAr: 'else يعمل فقط عندما يكون شرط if خاطئاً (false).',
        explanationEn: 'else runs only when the if condition is false.',
      },
      {
        questionAr: 'ما ناتج: x = 15; "كبير" if x > 10 else "صغير"؟',
        questionEn: 'What is the output of: x = 15; "big" if x > 10 else "small"?',
        options: ['"صغير" / "small"', '"كبير" / "big"', 'خطأ / Error', '15'],
        correctIndex: 1,
        explanationAr: '15 > 10 صحيحة فيُرجع "كبير".',
        explanationEn: '15 > 10 is true so it returns "big".',
      },
      {
        questionAr: 'كم شرطاً يمكنك إضافة بـ else if؟',
        questionEn: 'How many else if conditions can you add?',
        options: ['واحد فقط / Only one', 'اثنان فقط / Only two', 'ثلاثة / Three', 'بلا حد / Unlimited'],
        correctIndex: 3,
        explanationAr: 'يمكنك إضافة أي عدد من else if حسب الحاجة.',
        explanationEn: 'You can add as many else if blocks as needed.',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'نسيان النقطتين : بعد if في Python: if x > 5',
        mistakeEn: 'Forgetting the colon : after if in Python: if x > 5',
        fixAr: 'في Python يجب وضع : بعد الشرط: if x > 5:',
        fixEn: 'In Python the colon is required after the condition: if x > 5:',
      },
      {
        mistakeAr: 'استخدام = بدلاً من == في الشرط: if (x = 5)',
        mistakeEn: 'Using = instead of == in the condition: if (x = 5)',
        fixAr: 'الشرط يحتاج == أو === وليس = : if (x === 5)',
        fixEn: 'Conditions need == or === not = : if (x === 5)',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: فاحص العمر',
        titleEn: 'Challenge: Age Checker',
        taskAr: 'اكتب برنامجاً يحدد إذا كان الشخص طفلاً (أقل من 13)، مراهقاً (13-17)، أو بالغاً (18+).',
        taskEn: 'Write a program that determines if a person is a child (under 13), teen (13-17), or adult (18+).',
        hintAr: 'استخدم if / elif / else مع عمر محدد',
        hintEn: 'Use if / elif / else with a specific age value',
        solutionPython: `age = 16\n\nif age < 13:\n    print("طفل / Child")\nelif age < 18:\n    print("مراهق / Teen")\nelse:\n    print("بالغ / Adult")`,
        solutionJs: `let age = 16;\n\nif (age < 13) {\n    console.log("Child");\n} else if (age < 18) {\n    console.log("Teen");\n} else {\n    console.log("Adult");\n}`,
        expectedOutput: 'Teen',
      },
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
    conceptDescriptionsAr: [
      'تُنشأ المصفوفة بوضع القيم بين قوسين مربعين مثل ["Apple", "Banana", "Orange"].',
      'الفهرسة تبدأ من 0، فالعنصر الأول في fruits[0] والثاني في fruits[1].',
      'push() يُضيف عنصرًا في النهاية، pop() يحذف من النهاية، وunshift/shift يعملان على البداية.',
      'حلقة for...of تُمرّر عبر كل عنصر بالترتيب وهي أسهل طريقة للتكرار على مصفوفة.',
      'طرق مثل .map() و.filter() و.find() تُتيح تحويل المصفوفة أو تصفيتها بكود أقل.',
    ],
    conceptDescriptionsEn: [
      'An array is created by placing values inside square brackets like ["Apple", "Banana", "Orange"].',
      'Indexing starts at 0, so the first element is at fruits[0] and the second at fruits[1].',
      'push() adds to the end, pop() removes from the end, while unshift/shift work on the beginning.',
      'A for...of loop iterates over every element in order and is the easiest way to loop through an array.',
      'Methods like .map(), .filter(), and .find() let you transform or filter an array with less code.',
    ],
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
    quiz: [
      {
        questionAr: 'ما فهرس العنصر الأول في المصفوفة؟',
        questionEn: 'What is the index of the first element in an array?',
        options: ['1', '0', '-1', 'يعتمد / Depends'],
        correctIndex: 1,
        explanationAr: 'المصفوفات تبدأ بالفهرس 0، فأول عنصر في fruits[0].',
        explanationEn: 'Arrays are 0-indexed, so the first element is at fruits[0].',
      },
      {
        questionAr: 'ما الدالة التي تضيف عنصراً في نهاية المصفوفة؟',
        questionEn: 'Which method adds an element to the end of an array?',
        options: ['add()', 'append()', 'push()', 'insert()'],
        correctIndex: 2,
        explanationAr: 'push() تضيف عنصراً في نهاية المصفوفة في JavaScript.',
        explanationEn: 'push() adds an element to the end of an array in JavaScript.',
      },
      {
        questionAr: 'ما طول المصفوفة [1, 2, 3, 4]؟',
        questionEn: 'What is the length of [1, 2, 3, 4]?',
        options: ['3', '4', '5', '0'],
        correctIndex: 1,
        explanationAr: 'المصفوفة تحتوي على 4 عناصر لذا .length = 4.',
        explanationEn: 'The array has 4 elements so .length = 4.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: قائمة المهام',
        titleEn: 'Challenge: Task List',
        taskAr: 'أنشئ مصفوفة بـ 3 مهام، أضف مهمة رابعة، احذف الأولى، ثم اطبع جميع المهام.',
        taskEn: 'Create an array with 3 tasks, add a 4th task, remove the first one, then print all tasks.',
        hintAr: 'استخدم push() للإضافة و pop() للحذف من النهاية أو shift() للحذف من البداية',
        hintEn: 'Use push() to add and pop() to remove from end or shift() to remove from beginning',
        solutionPython: `tasks = ["قراءة", "تمرين", "مذاكرة"]\ntasks.append("نوم")\ntasks.pop(0)  # حذف الأول\n\nfor task in tasks:\n    print(task)`,
        solutionJs: `let tasks = ["Read", "Exercise", "Study"];\ntasks.push("Sleep");\ntasks.shift(); // Remove first\n\nfor (let task of tasks) {\n    console.log(task);\n}`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الوصول لعنصر بفهرس غير موجود: fruits[5] في مصفوفة بـ 3 عناصر',
        mistakeEn: 'Accessing element with out-of-range index: fruits[5] in a 3-element array',
        fixAr: 'ستحصل على undefined — تحقق من .length قبل الوصول بفهرس',
        fixEn: 'You get undefined — check .length before accessing by index',
      },
      {
        mistakeAr: 'البدء بالفهرس 1: fruits[1] للعنصر الأول',
        mistakeEn: 'Starting at index 1: fruits[1] for the first element',
        fixAr: 'المصفوفات تبدأ من 0 — العنصر الأول دائماً في [0]',
        fixEn: 'Arrays start at 0 — the first element is always at [0]',
      },
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
    conceptDescriptionsAr: [
      'حلقة for تُعرّف متغير عداد وشرط إيقاف وخطوة تحديث في سطر واحد مثل for(let i=0; i<5; i++).',
      'حلقة while تتكرر طالما الشرط صحيح — مفيدة حين لا تعرف عدد التكرارات مسبقًا.',
      'do...while تُنفّذ الكتلة مرة واحدة على الأقل ثم تتحقق من الشرط في كل تكرار تالٍ.',
      'break يُخرجك من الحلقة فورًا، وcontinue يتجاوز التكرار الحالي وينتقل للتالي.',
      'for...of تُكرر على عناصر المصفوفة مباشرة دون الحاجة لمتغير عداد.',
    ],
    conceptDescriptionsEn: [
      'A for loop defines a counter variable, a stop condition, and an update step all in one line like for(let i=0; i<5; i++).',
      'A while loop repeats as long as the condition is true — useful when you don\'t know the number of iterations in advance.',
      'do...while executes the block at least once, then checks the condition on each subsequent iteration.',
      'break exits the loop immediately, while continue skips the current iteration and moves to the next one.',
      'for...of iterates over array elements directly without needing a counter variable.',
    ],
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
    quiz: [
      {
        questionAr: 'كم مرة تتكرر: for i in range(3)?',
        questionEn: 'How many times does: for i in range(3) repeat?',
        options: ['2', '3', '4', '0'],
        correctIndex: 1,
        explanationAr: 'range(3) يُنتج 0, 1, 2 — أي 3 تكرارات.',
        explanationEn: 'range(3) produces 0, 1, 2 — that is 3 iterations.',
      },
      {
        questionAr: 'ما الفرق بين break وcontinue؟',
        questionEn: 'What is the difference between break and continue?',
        options: ['لا فرق / No difference', 'break يوقف الحلقة، continue يتخطى التكرار الحالي / break stops the loop, continue skips current', 'continue يوقف الحلقة / continue stops the loop', 'break يُكرر / break repeats'],
        correctIndex: 1,
        explanationAr: 'break يخرج من الحلقة كلياً، continue يتخطى فقط التكرار الحالي.',
        explanationEn: 'break exits the entire loop; continue only skips the current iteration.',
      },
      {
        questionAr: 'متى نستخدم while بدلاً من for؟',
        questionEn: 'When do we use while instead of for?',
        options: ['دائماً / Always', 'عندما لا نعرف عدد التكرارات مسبقاً / When we don\'t know the count in advance', 'عندما نعرف العدد / When we know the count', 'أبداً / Never'],
        correctIndex: 1,
        explanationAr: 'while مناسبة عندما تكون حالة التوقف غير معروفة مسبقاً.',
        explanationEn: 'while is ideal when the stopping condition is not known in advance.',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'حلقة لانهائية: while True بدون break',
        mistakeEn: 'Infinite loop: while True without break',
        fixAr: 'تأكد دائماً أن شرط الإيقاف سيتحقق في النهاية',
        fixEn: 'Always make sure the stop condition will eventually be met',
      },
      {
        mistakeAr: 'نسيان تحديث متغير العداد في while: count لا يتغير',
        mistakeEn: 'Forgetting to update the counter in while: count never changes',
        fixAr: 'تذكر زيادة العداد: count++ أو count += 1',
        fixEn: 'Remember to increment: count++ or count += 1',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: اطبع الأرقام الزوجية',
        titleEn: 'Challenge: Print Even Numbers',
        taskAr: 'اطبع جميع الأرقام الزوجية من 1 إلى 20.',
        taskEn: 'Print all even numbers from 1 to 20.',
        hintAr: 'استخدم for مع range(1, 21) وشرط if num % 2 == 0',
        hintEn: 'Use for with range(1, 21) and check if num % 2 == 0',
        solutionPython: `for num in range(1, 21):\n    if num % 2 == 0:\n        print(num)`,
        solutionJs: `for (let num = 1; num <= 20; num++) {\n    if (num % 2 === 0) {\n        console.log(num);\n    }\n}`,
      },
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
    conceptDescriptionsAr: [
      'تحليل المشكلة يعني فهم المدخلات والمخرجات المطلوبة والقيود قبل كتابة أي سطر كود.',
      'تقسيم المشكلة يعني تجزئتها إلى مهام صغيرة يمكن حل كل منها على حدة ثم تجميعها.',
      'Pseudocode هو وصف شبه-برمجي باللغة الطبيعية يُساعدك على التخطيط قبل الكتابة الفعلية.',
      'اختبار الحل يشمل تجربة حالات طبيعية وحالات حافة مثل مدخل فارغ أو رقم سالب.',
      'تحسين الكود يعني تقليل التكرار والتعقيد بعد أن يعمل الحل الأولي بشكل صحيح.',
    ],
    conceptDescriptionsEn: [
      'Problem analysis means understanding the required inputs, outputs, and constraints before writing any line of code.',
      'Breaking down problems means splitting them into small tasks, solving each one separately, then assembling the solution.',
      'Pseudocode is a semi-programming description in natural language that helps you plan before actual writing.',
      'Testing the solution includes trying normal cases and edge cases like empty input or a negative number.',
      'Code optimization means reducing repetition and complexity after the initial solution is working correctly.',
    ],
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
    quiz: [
      {
        questionAr: 'ما هو Pseudocode؟',
        questionEn: 'What is Pseudocode?',
        options: [
          'لغة برمجة جديدة / A new programming language',
          'وصف للخوارزمية بلغة طبيعية / Algorithm description in natural language',
          'كود لا يعمل / Code that does not work',
          'رسم بياني / A diagram',
        ],
        correctIndex: 1,
        explanationAr: 'Pseudocode هو وصف شبه-برمجي باللغة الطبيعية يُساعدك على التخطيط.',
        explanationEn: 'Pseudocode is a natural language algorithm description that helps you plan.',
      },
      {
        questionAr: 'ما أول خطوة في حل أي مشكلة برمجية؟',
        questionEn: 'What is the first step in solving any programming problem?',
        options: [
          'اكتب الكود مباشرة / Write code immediately',
          'ابحث في Google / Search Google',
          'افهم المشكلة أولاً / Understand the problem first',
          'اختر اللغة / Choose the language',
        ],
        correctIndex: 2,
        explanationAr: 'فهم المشكلة هو أساس أي حل صحيح — اقرأ المتطلبات جيداً قبل أي شيء.',
        explanationEn: 'Understanding the problem is the foundation of any correct solution — read the requirements carefully first.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: اكتب Pseudocode',
        titleEn: 'Challenge: Write Pseudocode',
        taskAr: 'اكتب Pseudocode لبرنامج يجد أكبر عدد في قائمة، ثم نفّذه.',
        taskEn: 'Write Pseudocode for a program that finds the largest number in a list, then implement it.',
        hintAr: 'ابدأ بـ: "افتراض أن أول عنصر هو الأكبر، ثم قارن كل عنصر..."',
        hintEn: 'Start with: "Assume the first element is the largest, then compare each element..."',
        solutionPython: `# Pseudocode:\n# 1. ضع أول عنصر كـ max\n# 2. لكل عنصر في القائمة\n#    إذا كان أكبر من max: حدّث max\n# 3. أعد max\n\ndef find_max(numbers):\n    max_val = numbers[0]\n    for num in numbers:\n        if num > max_val:\n            max_val = num\n    return max_val\n\nprint(find_max([3, 7, 2, 9, 1]))  # 9`,
        solutionJs: `// Pseudocode:\n// 1. Set first element as max\n// 2. For each element in array\n//    If larger than max: update max\n// 3. Return max\n\nfunction findMax(numbers) {\n    let max = numbers[0];\n    for (let num of numbers) {\n        if (num > max) max = num;\n    }\n    return max;\n}\n\nconsole.log(findMax([3, 7, 2, 9, 1])); // 9`,
        expectedOutput: '9',
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الكتابة مباشرة بدون تخطيط — ينتج كود صعب التصحيح',
        mistakeEn: 'Coding immediately without planning — results in hard-to-debug code',
        fixAr: 'خصص دقيقتين لكتابة Pseudocode — توفّر وقتاً أطول في التصحيح',
        fixEn: 'Spend 2 minutes writing Pseudocode — it saves more time in debugging',
      },
      {
        mistakeAr: 'عدم اختبار الحالات الحافة مثل قائمة فارغة أو رقم سالب',
        mistakeEn: 'Not testing edge cases like empty list or negative number',
        fixAr: 'اختبر دائماً: المدخل الفارغ، القيم الكبيرة، والقيم السالبة',
        fixEn: 'Always test: empty input, large values, and negative values',
      },
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
    conceptDescriptionsAr: [
      'البت هو أصغر وحدة بيانات في الحاسوب ولا يمكنه تخزين سوى قيمة واحدة من اثنتين: 0 أو 1.',
      'البايت يتكون من 8 بتات ويمكنه تمثيل 256 قيمة مختلفة من 0 إلى 255، ويكفي لتخزين حرف واحد.',
      'الكيلوبايت = 1024 بايت، والميجابايت = 1024 كيلوبايت — هذه الوحدات تصف حجم الملفات والذاكرة.',
      'كل ما يخزّنه الحاسوب — نصوص وصور وصوت — يُحوَّل في النهاية إلى سلسلة من 0 و1.',
    ],
    conceptDescriptionsEn: [
      'A bit is the smallest unit of data in a computer and can only store one of two values: 0 or 1.',
      'A byte consists of 8 bits and can represent 256 different values from 0 to 255 — enough to store a single character.',
      'A kilobyte = 1024 bytes, and a megabyte = 1024 kilobytes — these units describe file and memory sizes.',
      'Everything a computer stores — text, images, audio — is ultimately converted into a sequence of 0s and 1s.',
    ],
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
    quiz: [
      {
        questionAr: 'كم بت يساوي بايت واحد؟',
        questionEn: 'How many bits equal one byte?',
        options: ['4', '8', '16', '32'],
        correctIndex: 1,
        explanationAr: 'البايت يتكون من 8 بتات — هذا معيار ثابت في علم الحاسوب.',
        explanationEn: 'A byte consists of 8 bits — this is a fixed standard in computer science.',
      },
      {
        questionAr: 'ما أكبر قيمة يمكن تمثيلها في بايت واحد؟',
        questionEn: 'What is the maximum value representable in one byte?',
        options: ['128', '256', '255', '127'],
        correctIndex: 2,
        explanationAr: 'بايت واحد = 8 بتات = 2^8 = 256 قيمة من 0 إلى 255.',
        explanationEn: 'One byte = 8 bits = 2^8 = 256 values from 0 to 255.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: العمليات على البتات',
        titleEn: 'Challenge: Bitwise Operations',
        taskAr: 'استخدم عملية AND الثنائية على 5 و 3 ثم اطبع النتيجة وفسّرها.',
        taskEn: 'Use bitwise AND on 5 and 3, print the result and explain why.',
        hintAr: '5 = 101 و 3 = 011 بالثنائي. AND تضع 1 فقط حيث كلاهما 1',
        hintEn: '5 = 101 and 3 = 011 in binary. AND puts 1 only where both are 1',
        solutionPython: `a = 5   # 101 بالثنائي\nb = 3   # 011 بالثنائي\n\nresult = a & b  # 001 = 1\nprint(result)   # 1\nprint(bin(a))   # 0b101\nprint(bin(b))   # 0b011\nprint(bin(result))  # 0b1`,
        solutionJs: `let a = 5;  // 101 in binary\nlet b = 3;  // 011 in binary\n\nlet result = a & b; // 001 = 1\nconsole.log(result);      // 1\nconsole.log(a.toString(2)); // "101"\nconsole.log(b.toString(2)); // "011"`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الخلط بين الكيلوبايت (1024) والكيلو (1000) في السياقات المختلفة',
        mistakeEn: 'Confusing kilobyte (1024) and kilo (1000) in different contexts',
        fixAr: 'في علم الحاسوب: 1 كيلوبايت = 1024 بايت. في التسويق أحياناً يستخدمون 1000.',
        fixEn: 'In computer science: 1 KB = 1024 bytes. In marketing they sometimes use 1000.',
      },
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
    conceptDescriptionsAr: [
      'النظام الثنائي قاعدته 2 — كل خانة تمثل ضعف الخانة التي على يمينها (1، 2، 4، 8، 16...).',
      'لتحويل عشري إلى ثنائي قسّم الرقم على 2 باستمرار واجمع باقيات القسمة من الأخير للأول.',
      'لتحويل ثنائي إلى عشري اضرب كل رقم بقوة 2 المقابلة لخانته ثم اجمع النتائج.',
      'الجمع الثنائي يعمل كالجمع العشري لكن يحمل 1 عند تجاوز 1+1 (لأن 2 بالثنائي = 10).',
    ],
    conceptDescriptionsEn: [
      'The binary system has base 2 — each position represents double the position to its right (1, 2, 4, 8, 16...).',
      'To convert decimal to binary, repeatedly divide by 2 and collect the remainders from last to first.',
      'To convert binary to decimal, multiply each digit by its corresponding power of 2 then sum the results.',
      'Binary addition works like decimal addition but carries 1 when 1+1 is reached (since 2 in binary = 10).',
    ],
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
    quiz: [
      {
        questionAr: 'ما قيمة 1010 بالنظام الثنائي بالعشري؟',
        questionEn: 'What is the decimal value of binary 1010?',
        options: ['2', '8', '10', '12'],
        correctIndex: 2,
        explanationAr: '1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10',
        explanationEn: '1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10',
      },
      {
        questionAr: 'ما تمثيل الرقم 5 بالنظام الثنائي؟',
        questionEn: 'What is the binary representation of 5?',
        options: ['100', '101', '110', '111'],
        correctIndex: 1,
        explanationAr: '5 = 4 + 1 = 1×4 + 0×2 + 1×1 = 101 بالثنائي',
        explanationEn: '5 = 4 + 1 = 1×4 + 0×2 + 1×1 = 101 in binary',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: محوّل ثنائي/عشري',
        titleEn: 'Challenge: Binary/Decimal Converter',
        taskAr: 'اكتب دالتين: الأولى تحول من عشري لثنائي، والثانية بالعكس. اختبرهما بالأرقام 10 و 255.',
        taskEn: 'Write two functions: one converts decimal to binary, and one converts binary to decimal. Test them with 10 and 255.',
        hintAr: 'استخدم bin() في Python أو toString(2) في JavaScript',
        hintEn: 'Use bin() in Python or toString(2) in JavaScript',
        solutionPython: `def to_binary(n):\n    return bin(n)[2:]  # نزيل الـ 0b من البداية\n\ndef to_decimal(b):\n    return int(b, 2)\n\nprint(to_binary(10))   # "1010"\nprint(to_binary(255))  # "11111111"\nprint(to_decimal("1010"))   # 10\nprint(to_decimal("11111111"))  # 255`,
        solutionJs: `function toBinary(n) {\n    return n.toString(2);\n}\n\nfunction toDecimal(b) {\n    return parseInt(b, 2);\n}\n\nconsole.log(toBinary(10));    // "1010"\nconsole.log(toBinary(255));   // "11111111"\nconsole.log(toDecimal("1010"));    // 10\nconsole.log(toDecimal("11111111")); // 255`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الخلط بين موضع الأرقام — أهم خانة هي اليسار',
        mistakeEn: 'Confusing digit positions — the most significant bit is on the left',
        fixAr: 'في 1010: اليسار = 8، ثم 4، ثم 2، ثم 1 (من اليسار لليمين)',
        fixEn: 'In 1010: left = 8, then 4, then 2, then 1 (left to right)',
      },
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
    conceptDescriptionsAr: [
      'النظام السداسي عشري قاعدته 16 — كل خانة تمثل 16 ضعف الخانة التي على يمينها.',
      'الأرقام 10–15 تُمثَّل بالحروف A–F، إذ A=10 وB=11 حتى F=15 لتوفير رمز واحد لكل قيمة.',
      'FF بالسداسي يساوي 255 بالعشري — سهل التحويل عبر parseInt("FF", 16) في JavaScript.',
      'ألوان CSS كـ #FF5733 مكوّنة من ثلاثة أزواج سداسية تُمثّل قنوات الأحمر والأخضر والأزرق.',
      'عناوين الذاكرة وقيم الذاكرة تُعرض عادةً بالسداسي لأنه أقصر من الثنائي وأسهل قراءةً.',
    ],
    conceptDescriptionsEn: [
      'The hexadecimal system has base 16 — each position represents 16 times the position to its right.',
      'Numbers 10–15 are represented by letters A–F, where A=10 and B=11 up to F=15, giving one symbol per value.',
      'FF in hex equals 255 in decimal — easy to convert via parseInt("FF", 16) in JavaScript.',
      'CSS colors like #FF5733 consist of three hex pairs representing the Red, Green, and Blue channels.',
      'Memory addresses and register values are usually shown in hex because it\'s shorter than binary and easier to read.',
    ],
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
    quiz: [
      {
        questionAr: 'ما قيمة F بالنظام السداسي بالعشري؟',
        questionEn: 'What is the decimal value of F in hexadecimal?',
        options: ['14', '15', '16', '10'],
        correctIndex: 1,
        explanationAr: 'في النظام السداسي: A=10، B=11، C=12، D=13، E=14، F=15.',
        explanationEn: 'In hex: A=10, B=11, C=12, D=13, E=14, F=15.',
      },
      {
        questionAr: 'ما قيمة FF بالعشري؟',
        questionEn: 'What is the decimal value of FF?',
        options: ['200', '240', '255', '256'],
        correctIndex: 2,
        explanationAr: 'FF = 15×16 + 15 = 240 + 15 = 255.',
        explanationEn: 'FF = 15×16 + 15 = 240 + 15 = 255.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: محلل الألوان',
        titleEn: 'Challenge: Color Analyzer',
        taskAr: 'اكتب كوداً يأخذ لون CSS مثل #FF5733 ويطبع قيم R وG وB بالعشري.',
        taskEn: 'Write code that takes a CSS color like #FF5733 and prints the R, G, B values in decimal.',
        hintAr: '#FF5733: أول زوج = R، ثاني زوج = G، ثالث زوج = B. استخدم parseInt("FF", 16)',
        hintEn: '#FF5733: first pair = R, second = G, third = B. Use parseInt("FF", 16)',
        solutionPython: `color = "#FF5733"\nr = int(color[1:3], 16)\ng = int(color[3:5], 16)\nb = int(color[5:7], 16)\nprint(f"R={r}, G={g}, B={b}")  # R=255, G=87, B=51`,
        solutionJs: `let color = "#FF5733";\nlet r = parseInt(color.slice(1,3), 16);\nlet g = parseInt(color.slice(3,5), 16);\nlet b = parseInt(color.slice(5,7), 16);\nconsole.log(\`R=\${r}, G=\${g}, B=\${b}\`); // R=255, G=87, B=51`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الخلط بين الأرقام والحروف: هل A رقم أم حرف في السداسي؟',
        mistakeEn: 'Confusing numbers and letters: is A a digit or letter in hex?',
        fixAr: 'في النظام السداسي A-F هي أرقام تمثل 10-15 وليست حروفاً عادية',
        fixEn: 'In hex, A-F are digits representing 10-15, not regular letters',
      },
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
    conceptDescriptionsAr: [
      'بوابة AND تُخرج 1 فقط عندما يكون كلا الطرفين 1 — تُقابل && في البرمجة.',
      'بوابة OR تُخرج 1 عندما يكون طرف واحد على الأقل 1 — تُقابل || في البرمجة.',
      'بوابة NOT تعكس الإشارة: 0 تصبح 1، و1 تصبح 0 — تُقابل ! في البرمجة.',
      'بوابة XOR تُخرج 1 فقط عندما يختلف الطرفان — مفيدة في التشفير والكشف عن الأخطاء.',
      'جدول الحقيقة يُدرج جميع تركيبات المدخلات ومخرجاتها لتحليل أي دالة منطقية بشكل كامل.',
    ],
    conceptDescriptionsEn: [
      'AND gate outputs 1 only when both inputs are 1 — equivalent to && in programming.',
      'OR gate outputs 1 when at least one input is 1 — equivalent to || in programming.',
      'NOT gate inverts the signal: 0 becomes 1 and 1 becomes 0 — equivalent to ! in programming.',
      'XOR gate outputs 1 only when the two inputs differ — useful in encryption and error detection.',
      'A truth table lists all input combinations and their outputs to fully analyze any logical function.',
    ],
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
    quiz: [
      {
        questionAr: 'ما ناتج false OR true؟',
        questionEn: 'What is the result of false OR true?',
        options: ['false', 'true', 'null', 'undefined'],
        correctIndex: 1,
        explanationAr: 'OR يُعطي true إذا كان طرف واحد على الأقل true.',
        explanationEn: 'OR gives true when at least one side is true.',
      },
      {
        questionAr: 'ما ناتج NOT true؟',
        questionEn: 'What is the result of NOT true?',
        options: ['true', 'false', '0', '1'],
        correctIndex: 1,
        explanationAr: 'NOT يعكس القيمة المنطقية: NOT true = false.',
        explanationEn: 'NOT inverts the boolean value: NOT true = false.',
      },
      {
        questionAr: 'ما البوابة التي تعطي true فقط عندما يختلف الطرفان؟',
        questionEn: 'Which gate gives true only when the two inputs differ?',
        options: ['AND', 'OR', 'NOT', 'XOR'],
        correctIndex: 3,
        explanationAr: 'XOR تعطي true فقط عندما يكون أحد الطرفين true والآخر false.',
        explanationEn: 'XOR gives true only when one side is true and the other is false.',
      },
    ],
    challenges: [
      {
        titleAr: 'تحدي: نظام دخول',
        titleEn: 'Challenge: Login System',
        taskAr: 'اكتب شرطاً: المستخدم يدخل إذا كان اسم المستخدم "admin" AND كلمة المرور "1234".',
        taskEn: 'Write a condition: user logs in if username is "admin" AND password is "1234".',
        hintAr: 'استخدم && (AND) للتحقق من الشرطين معاً',
        hintEn: 'Use && (AND) to check both conditions together',
        solutionPython: `username = "admin"\npassword = "1234"\n\nif username == "admin" and password == "1234":\n    print("مرحباً! تم الدخول بنجاح")\nelse:\n    print("خطأ في اسم المستخدم أو كلمة المرور")`,
        solutionJs: `let username = "admin";\nlet password = "1234";\n\nif (username === "admin" && password === "1234") {\n    console.log("Welcome! Login successful");\n} else {\n    console.log("Wrong username or password");\n}`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'الخلط بين AND و OR في الشروط المركبة',
        mistakeEn: 'Confusing AND and OR in compound conditions',
        fixAr: 'AND: يجب أن يكون كلاهما صحيحاً. OR: يكفي أن يكون أحدهما صحيحاً.',
        fixEn: 'AND: both must be true. OR: at least one must be true.',
      },
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
    conceptDescriptionsAr: [
      'تعلّمت المتغيرات والثوابت وأنواع البيانات والعمليات والشروط والحلقات والدوال والمصفوفات.',
      'الخطوة القادمة هي التعمق في لغة واحدة كـ JavaScript أو Python وبناء مشاريع حقيقية.',
      'كل لغة لها مجال قوة: Python للذكاء الاصطناعي، JavaScript للويب، Swift لـ iOS، Kotlin لـ Android.',
      'موارد مجانية ممتازة: MDN Web Docs، freeCodeCamp، CS50 Harvard، وYouTube.',
    ],
    conceptDescriptionsEn: [
      'You\'ve learned variables, constants, data types, operators, conditions, loops, functions, and arrays.',
      'The next step is to go deeper into one language like JavaScript or Python and build real projects.',
      'Each language has a strength area: Python for AI, JavaScript for the web, Swift for iOS, Kotlin for Android.',
      'Excellent free resources: MDN Web Docs, freeCodeCamp, CS50 Harvard, and YouTube.',
    ],
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
    quiz: [
      {
        questionAr: 'ما أفضل طريقة لتعلم البرمجة بعد هذه الدورة؟',
        questionEn: 'What is the best way to learn programming after this course?',
        options: [
          'قراءة المزيد من الكتب / Reading more books',
          'بناء مشاريع شخصية / Building personal projects',
          'حفظ القواعد / Memorizing rules',
          'مشاهدة الفيديوهات فقط / Only watching videos',
        ],
        correctIndex: 1,
        explanationAr: 'بناء المشاريع هو أفضل طريقة للتعلم — تواجه مشكلات حقيقية وتحلها.',
        explanationEn: 'Building projects is the best way to learn — you face real problems and solve them.',
      },
      {
        questionAr: 'أي لغة مناسبة للذكاء الاصطناعي؟',
        questionEn: 'Which language is best suited for AI?',
        options: ['JavaScript', 'Python', 'Swift', 'Kotlin'],
        correctIndex: 1,
        explanationAr: 'Python هي اللغة الأكثر استخداماً في مجال الذكاء الاصطناعي وتعلم الآلة.',
        explanationEn: 'Python is the most widely used language in AI and machine learning.',
      },
    ],
    challenges: [
      {
        titleAr: 'التحدي النهائي: مشروعك الخاص',
        titleEn: 'Final Challenge: Your Own Project',
        taskAr: 'استخدم كل ما تعلمته واكتب مشروعاً صغيراً من اختيارك: آلة حاسبة، لعبة تخمين رقم، أو قائمة مهام.',
        taskEn: 'Use everything you learned and write a small project of your choice: a calculator, number guessing game, or task list.',
        hintAr: 'مثال: لعبة تخمين — اختر رقماً بين 1-10 واطلب من المستخدم التخمين',
        hintEn: 'Example: guessing game — pick a number between 1-10 and ask user to guess',
        solutionPython: `# لعبة تخمين الرقم\nimport random\n\nsecret = random.randint(1, 10)\nguess = int(input("خمّن رقماً بين 1 و 10: "))\n\nif guess == secret:\n    print("صحيح! أنت رائع!")\nelif guess < secret:\n    print(f"الرقم أكبر. الرقم الصحيح هو {secret}")\nelse:\n    print(f"الرقم أصغر. الرقم الصحيح هو {secret}")`,
        solutionJs: `// Number guessing game\nlet secret = Math.floor(Math.random() * 10) + 1;\nlet guess = Number(prompt("Guess a number between 1 and 10:"));\n\nif (guess === secret) {\n    console.log("Correct! Amazing!");\n} else if (guess < secret) {\n    console.log(\`Too low. The number was \${secret}\`);\n} else {\n    console.log(\`Too high. The number was \${secret}\`);\n}`,
      },
    ],
    commonMistakes: [
      {
        mistakeAr: 'التوقف عن التعلم بعد إتمام الدورة',
        mistakeEn: 'Stopping learning after completing the course',
        fixAr: 'هذه الدورة هي البداية فقط — ابنِ مشاريع واستمر في تعلم لغة واحدة بعمق',
        fixEn: 'This course is just the beginning — build projects and keep learning one language deeply',
      },
      {
        mistakeAr: 'محاولة تعلم كل اللغات في نفس الوقت',
        mistakeEn: 'Trying to learn all languages at the same time',
        fixAr: 'اختر لغة واحدة (Python أو JavaScript) وأتقنها أولاً قبل الانتقال لأخرى',
        fixEn: 'Pick one language (Python or JavaScript) and master it first before moving to another',
      },
      {
        mistakeAr: 'الخوف من الأخطاء وعدم التجريب',
        mistakeEn: 'Fear of errors and not experimenting',
        fixAr: 'الأخطاء جزء طبيعي من البرمجة — كل مبرمج محترف يخطئ ويتعلم منها',
        fixEn: 'Errors are a natural part of programming — every professional developer makes mistakes and learns from them',
      },
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

// ─── Multi-language tab examples (Python · JavaScript · Java · C++) ───────────
// Keyed by section id. Merged at runtime in CourseService.
export const MULTI_LANG_EXAMPLES: Record<number, MultiLangExample[]> = {

  // ── Section 3: Hello World ─────────────────────────────────────────────────
  3: [{
    titleAr: 'برنامج Hello World بأربع لغات',
    titleEn: 'Hello World in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# هذا هو أول برنامج — نطبع جملة على الشاشة
print("Hello, World!")
# الناتج: Hello, World!`,
        descriptionAr: 'الإخراج في Python',
        descriptionEn: 'Output in Python',
      },
      {
        id: 'javascript',
        code: `console.log("Hello, World!");`,
        descriptionAr: 'الإخراج في JavaScript',
        descriptionEn: 'Output in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        descriptionAr: 'الإخراج في Java',
        descriptionEn: 'Output in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        descriptionAr: 'الإخراج في C++',
        descriptionEn: 'Output in C++',
      },
    ],
  }],

  // ── Section 4: Comments ───────────────────────────────────────────────────
  4: [{
    titleAr: 'التعليقات بأربع لغات',
    titleEn: 'Comments in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# This is a single-line comment

# Python does not have multi-line comment syntax
# so you chain # lines like this

name = "Sara"  # inline comment
print(name)`,
        descriptionAr: 'التعليقات في Python',
        descriptionEn: 'Comments in Python',
      },
      {
        id: 'javascript',
        code: `// This is a single-line comment

/* This is a
   multi-line comment */

let name = "Sara"; // inline comment
console.log(name);`,
        descriptionAr: 'التعليقات في JavaScript',
        descriptionEn: 'Comments in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Single-line comment

        /* Multi-line
           comment */

        String name = "Sara"; // inline comment
        System.out.println(name);
    }
}`,
        descriptionAr: 'التعليقات في Java',
        descriptionEn: 'Comments in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    // Single-line comment

    /* Multi-line
       comment */

    string name = "Sara"; // inline comment
    cout << name << endl;
    return 0;
}`,
        descriptionAr: 'التعليقات في C++',
        descriptionEn: 'Comments in C++',
      },
    ],
  }],

  // ── Section 5: Variables ──────────────────────────────────────────────────
  5: [{
    titleAr: 'المتغيرات بأربع لغات',
    titleEn: 'Variables in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# نُنشئ متغيرات تحمل قيماً مختلفة
name = "Sara"       # نص (String)
age = 25            # رقم صحيح (Integer)
is_student = True   # قيمة منطقية (Boolean)

# نطبع قيمة كل متغير
print(name)       # Sara
print(age)        # 25
print(is_student) # True

# يمكن تغيير قيمة المتغير في أي وقت
score = 0         # نبدأ بالصفر
score = 10        # نغيّر القيمة
score = score + 5 # نضيف 5 على القيمة الحالية
print(score)      # 15`,
        descriptionAr: 'إنشاء المتغيرات وتغيير قيمها في Python',
        descriptionEn: 'Creating and changing variables in Python',
      },
      {
        id: 'javascript',
        code: `let name = "Sara";
let age = 25;
let isStudent = true;

console.log(name);      // Sara
console.log(age);       // 25
console.log(isStudent); // true

// Changing a variable
let score = 0;
score = 10;
score = score + 5;
console.log(score);     // 15`,
        descriptionAr: 'إنشاء المتغيرات وتغيير قيمها في JavaScript',
        descriptionEn: 'Creating and changing variables in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int age = 25;
        boolean isStudent = true;

        System.out.println(name);       // Sara
        System.out.println(age);        // 25
        System.out.println(isStudent);  // true

        // Changing a variable
        int score = 0;
        score = 10;
        score = score + 5;
        System.out.println(score);      // 15
    }
}`,
        descriptionAr: 'إنشاء المتغيرات وتغيير قيمها في Java',
        descriptionEn: 'Creating and changing variables in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Sara";
    int age = 25;
    bool isStudent = true;

    cout << name << endl;       // Sara
    cout << age << endl;        // 25
    cout << isStudent << endl;  // 1 (true)

    // Changing a variable
    int score = 0;
    score = 10;
    score = score + 5;
    cout << score << endl;      // 15
    return 0;
}`,
        descriptionAr: 'إنشاء المتغيرات وتغيير قيمها في C++',
        descriptionEn: 'Creating and changing variables in C++',
      },
    ],
  }],

  // ── Section 6: Data Types ─────────────────────────────────────────────────
  6: [{
    titleAr: 'أنواع البيانات بأربع لغات',
    titleEn: 'Data Types in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# Integer
age = 25
# Float
price = 9.99
# String
name = "Sara"
# Boolean
is_active = True
# None (null)
empty = None

print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
print(type(name))      # <class 'str'>
print(type(is_active)) # <class 'bool'>
print(type(empty))     # <class 'NoneType'>`,
        descriptionAr: 'أنواع البيانات الأساسية في Python',
        descriptionEn: 'Basic data types in Python',
      },
      {
        id: 'javascript',
        code: `// Number
let age = 25;
let price = 9.99;
// String
let name = "Sara";
// Boolean
let isActive = true;
// Null & Undefined
let empty = null;
let notDefined;

console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof empty);      // "object"
console.log(typeof notDefined); // "undefined"`,
        descriptionAr: 'أنواع البيانات الأساسية في JavaScript',
        descriptionEn: 'Basic data types in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int age = 25;          // integer
        double price = 9.99;   // decimal
        String name = "Sara";  // text
        boolean isActive = true;
        // null reference
        String empty = null;

        System.out.println(age);       // 25
        System.out.println(price);     // 9.99
        System.out.println(name);      // Sara
        System.out.println(isActive);  // true
        System.out.println(empty);     // null
    }
}`,
        descriptionAr: 'أنواع البيانات الأساسية في Java',
        descriptionEn: 'Basic data types in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 25;           // integer
    double price = 9.99;    // decimal
    string name = "Sara";   // text
    bool isActive = true;   // boolean
    char grade = 'A';       // single character

    cout << age << endl;        // 25
    cout << price << endl;      // 9.99
    cout << name << endl;       // Sara
    cout << isActive << endl;   // 1
    cout << grade << endl;      // A
    return 0;
}`,
        descriptionAr: 'أنواع البيانات الأساسية في C++',
        descriptionEn: 'Basic data types in C++',
      },
    ],
  }],

  // ── Section 7: Constants ──────────────────────────────────────────────────
  7: [{
    titleAr: 'الثوابت بأربع لغات',
    titleEn: 'Constants in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# Python has no built-in constant keyword
# Convention: use UPPER_CASE names
PI = 3.14159
MAX_USERS = 100
APP_NAME = "MyApp"

print(PI)         # 3.14159
print(MAX_USERS)  # 100`,
        descriptionAr: 'الثوابت في Python (بالاصطلاح)',
        descriptionEn: 'Constants in Python (by convention)',
      },
      {
        id: 'javascript',
        code: `const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log(PI);        // 3.14159
console.log(MAX_USERS); // 100

// This would cause an ERROR:
// PI = 3; // TypeError: Assignment to constant variable`,
        descriptionAr: 'الثوابت في JavaScript باستخدام const',
        descriptionEn: 'Constants in JavaScript using const',
      },
      {
        id: 'java',
        code: `public class Main {
    // Class-level constants use static final
    static final double PI = 3.14159;
    static final int MAX_USERS = 100;
    static final String APP_NAME = "MyApp";

    public static void main(String[] args) {
        System.out.println(PI);        // 3.14159
        System.out.println(MAX_USERS); // 100
        // PI = 3; // ERROR: cannot assign to final
    }
}`,
        descriptionAr: 'الثوابت في Java باستخدام final',
        descriptionEn: 'Constants in Java using final',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    const int MAX_USERS = 100;
    const string APP_NAME = "MyApp";

    cout << PI << endl;        // 3.14159
    cout << MAX_USERS << endl; // 100
    // PI = 3; // ERROR: assignment of read-only variable
    return 0;
}`,
        descriptionAr: 'الثوابت في C++ باستخدام const',
        descriptionEn: 'Constants in C++ using const',
      },
    ],
  }],

  // ── Section 8: Strings ────────────────────────────────────────────────────
  8: [{
    titleAr: 'عمليات النصوص بأربع لغات',
    titleEn: 'String Operations in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `first_name = "Sara"
last_name  = "Ahmed"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)               # Sara Ahmed

# f-string (modern way)
greeting = f"Hello, {first_name}!"
print(greeting)                # Hello, Sara!

# String methods
print(len(full_name))          # 10
print(full_name.upper())       # SARA AHMED
print(full_name.lower())       # sara ahmed
print("Sara" in full_name)     # True`,
        descriptionAr: 'عمليات النصوص الشائعة في Python',
        descriptionEn: 'Common string operations in Python',
      },
      {
        id: 'javascript',
        code: `let firstName = "Sara";
let lastName  = "Ahmed";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);               // Sara Ahmed

// Template literal
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting);               // Hello, Sara!

// String methods
console.log(fullName.length);        // 10
console.log(fullName.toUpperCase()); // SARA AHMED
console.log(fullName.toLowerCase()); // sara ahmed
console.log(fullName.includes("Sara")); // true`,
        descriptionAr: 'عمليات النصوص الشائعة في JavaScript',
        descriptionEn: 'Common string operations in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String firstName = "Sara";
        String lastName  = "Ahmed";

        // Concatenation
        String fullName = firstName + " " + lastName;
        System.out.println(fullName);               // Sara Ahmed

        // String.format
        String greeting = String.format("Hello, %s!", firstName);
        System.out.println(greeting);               // Hello, Sara!

        // String methods
        System.out.println(fullName.length());      // 10
        System.out.println(fullName.toUpperCase()); // SARA AHMED
        System.out.println(fullName.toLowerCase()); // sara ahmed
        System.out.println(fullName.contains("Sara")); // true
    }
}`,
        descriptionAr: 'عمليات النصوص الشائعة في Java',
        descriptionEn: 'Common string operations in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Sara";
    string lastName  = "Ahmed";

    // Concatenation
    string fullName = firstName + " " + lastName;
    cout << fullName << endl;               // Sara Ahmed

    // String methods
    cout << fullName.length() << endl;      // 10
    // convert to upper (manual via algorithm)
    string up = fullName;
    for (char& c : up) c = toupper(c);
    cout << up << endl;                     // SARA AHMED

    // Find substring
    bool found = fullName.find("Sara") != string::npos;
    cout << found << endl;                  // 1
    return 0;
}`,
        descriptionAr: 'عمليات النصوص الشائعة في C++',
        descriptionEn: 'Common string operations in C++',
      },
    ],
  }],

  // ── Section 9: Operators ──────────────────────────────────────────────────
  9: [{
    titleAr: 'المعاملات بأربع لغات',
    titleEn: 'Operators in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `a, b = 10, 3

# Arithmetic
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3  (integer division)
print(a % b)   # 1  (remainder)
print(a ** b)  # 1000 (power)

# Comparison
print(a > b)   # True
print(a == b)  # False
print(a != b)  # True

# Logical
print(True and False) # False
print(True or False)  # True
print(not True)       # False`,
        descriptionAr: 'جميع أنواع المعاملات في Python',
        descriptionEn: 'All types of operators in Python',
      },
      {
        id: 'javascript',
        code: `let a = 10, b = 3;

// Arithmetic
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (remainder)
console.log(a ** b); // 1000 (power)

// Comparison
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
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int a = 10, b = 3;

        // Arithmetic
        System.out.println(a + b);  // 13
        System.out.println(a - b);  // 7
        System.out.println(a * b);  // 30
        System.out.println(a / b);  // 3 (integer division)
        System.out.println(a % b);  // 1 (remainder)

        // Comparison
        System.out.println(a > b);  // true
        System.out.println(a == b); // false
        System.out.println(a != b); // true

        // Logical
        System.out.println(true && false); // false
        System.out.println(true || false); // true
        System.out.println(!true);         // false
    }
}`,
        descriptionAr: 'جميع أنواع المعاملات في Java',
        descriptionEn: 'All types of operators in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    // Arithmetic
    cout << a + b << endl;  // 13
    cout << a - b << endl;  // 7
    cout << a * b << endl;  // 30
    cout << a / b << endl;  // 3 (integer division)
    cout << a % b << endl;  // 1 (remainder)

    // Comparison
    cout << (a > b)  << endl; // 1 (true)
    cout << (a == b) << endl; // 0 (false)
    cout << (a != b) << endl; // 1 (true)

    // Logical
    cout << (true && false) << endl; // 0
    cout << (true || false) << endl; // 1
    cout << (!true) << endl;         // 0
    return 0;
}`,
        descriptionAr: 'جميع أنواع المعاملات في C++',
        descriptionEn: 'All types of operators in C++',
      },
    ],
  }],

  // ── Section 10: Type Casting ──────────────────────────────────────────────
  10: [{
    titleAr: 'تحويل الأنواع بأربع لغات',
    titleEn: 'Type Casting in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# String -> Number
s = "42"
n = int(s)
print(n, type(n))    # 42 <class 'int'>

f = float("3.7")
print(f)             # 3.7

# Number -> String
age = 25
age_str = str(age)
print(age_str, type(age_str))  # 25 <class 'str'>

# To Boolean
print(bool(0))       # False
print(bool(""))      # False
print(bool(1))       # True
print(bool("hi"))    # True`,
        descriptionAr: 'تحويل الأنواع في Python',
        descriptionEn: 'Type conversion in Python',
      },
      {
        id: 'javascript',
        code: `// String -> Number
let str = "42";
let num = Number(str);
console.log(num, typeof num);  // 42 "number"

let int = parseInt("3.7");
console.log(int);              // 3

// Number -> String
let age = 25;
let ageStr = String(age);
console.log(ageStr, typeof ageStr); // "25" "string"

// To Boolean
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean(1));    // true
console.log(Boolean("hi")); // true`,
        descriptionAr: 'تحويل الأنواع في JavaScript',
        descriptionEn: 'Type conversion in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // String -> Number
        String s = "42";
        int n = Integer.parseInt(s);
        System.out.println(n);              // 42

        double d = Double.parseDouble("3.7");
        System.out.println(d);             // 3.7

        // Number -> String
        int age = 25;
        String ageStr = String.valueOf(age);
        System.out.println(ageStr);        // "25"

        // int -> double (implicit widening)
        int x = 5;
        double y = x;
        System.out.println(y);             // 5.0

        // double -> int (explicit narrowing)
        double price = 9.99;
        int p = (int) price;
        System.out.println(p);             // 9
    }
}`,
        descriptionAr: 'تحويل الأنواع في Java',
        descriptionEn: 'Type conversion in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // String -> Number
    string s = "42";
    int n = stoi(s);
    cout << n << endl;           // 42

    double d = stod("3.7");
    cout << d << endl;           // 3.7

    // Number -> String
    int age = 25;
    string ageStr = to_string(age);
    cout << ageStr << endl;      // "25"

    // int -> double (implicit)
    int x = 5;
    double y = x;
    cout << y << endl;           // 5

    // double -> int (explicit cast)
    double price = 9.99;
    int p = (int) price;
    cout << p << endl;           // 9
    return 0;
}`,
        descriptionAr: 'تحويل الأنواع في C++',
        descriptionEn: 'Type conversion in C++',
      },
    ],
  }],

  // ── Section 11: I/O ──────────────────────────────────────────────────────
  11: [{
    titleAr: 'الإدخال والإخراج بأربع لغات',
    titleEn: 'Input & Output in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# Output
print("Hello, World!")
print("Sum:", 2 + 3)

# Input
name = input("What is your name? ")
print("Hello,", name + "!")`,
        descriptionAr: 'الإدخال والإخراج في Python',
        descriptionEn: 'Input and output in Python',
      },
      {
        id: 'javascript',
        code: `// Output
console.log("Hello, World!");
console.log("Sum:", 2 + 3);

// Browser: get user input
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

// Show a popup
alert("Welcome!");`,
        descriptionAr: 'الإدخال والإخراج في JavaScript (المتصفح)',
        descriptionEn: 'Input and output in JavaScript (browser)',
      },
      {
        id: 'java',
        code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Output
        System.out.println("Hello, World!");
        System.out.println("Sum: " + (2 + 3));

        // Input
        Scanner sc = new Scanner(System.in);
        System.out.print("What is your name? ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}`,
        descriptionAr: 'الإدخال والإخراج في Java',
        descriptionEn: 'Input and output in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Output
    cout << "Hello, World!" << endl;
    cout << "Sum: " << 2 + 3 << endl;

    // Input
    string name;
    cout << "What is your name? ";
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
        descriptionAr: 'الإدخال والإخراج في C++',
        descriptionEn: 'Input and output in C++',
      },
    ],
  }],

  // ── Section 12: Conditions ────────────────────────────────────────────────
  12: [{
    titleAr: 'الشروط وجمل if بأربع لغات',
    titleEn: 'Conditions & if Statements in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `score = 85  # درجة الطالب

# نفحص الشرط الأول: هل الدرجة 90 أو أكثر؟
if score >= 90:
    print("Grade: A")
# إذا لا، نفحص الشرط الثاني
elif score >= 80:
    print("Grade: B")   # ← هذا سيُطبع لأن 85 >= 80
elif score >= 70:
    print("Grade: C")
else:
    # إذا لم ينطبق أي شرط، ننفذ هذا
    print("Grade: F")

# طريقة مختصرة في سطر واحد (Ternary)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult`,
        descriptionAr: 'الشروط باستخدام if/elif/else في Python',
        descriptionEn: 'Conditions using if/elif/else in Python',
      },
      {
        id: 'javascript',
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
// Output: Grade: B

// Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult`,
        descriptionAr: 'الشروط باستخدام if/else في JavaScript',
        descriptionEn: 'Conditions using if/else in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        // Output: Grade: B

        // Ternary
        int age = 20;
        String status = age >= 18 ? "Adult" : "Minor";
        System.out.println(status); // Adult
    }
}`,
        descriptionAr: 'الشروط باستخدام if/else في Java',
        descriptionEn: 'Conditions using if/else in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    int score = 85;

    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    // Output: Grade: B

    // Ternary
    int age = 20;
    string status = age >= 18 ? "Adult" : "Minor";
    cout << status << endl; // Adult
    return 0;
}`,
        descriptionAr: 'الشروط باستخدام if/else في C++',
        descriptionEn: 'Conditions using if/else in C++',
      },
    ],
  }],

  // ── Section 13: Arrays ────────────────────────────────────────────────────
  13: [{
    titleAr: 'المصفوفات بأربع لغات',
    titleEn: 'Arrays in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `fruits = ["Apple", "Banana", "Orange"]

# Access elements (0-indexed)
print(fruits[0])  # Apple
print(fruits[1])  # Banana

# Length
print(len(fruits))  # 3

# Add / Remove
fruits.append("Mango")
print(fruits)        # ['Apple','Banana','Orange','Mango']

fruits.pop()
print(fruits)        # ['Apple','Banana','Orange']

# Loop
for fruit in fruits:
    print(fruit)`,
        descriptionAr: 'القوائم (Lists) في Python',
        descriptionEn: 'Lists (arrays) in Python',
      },
      {
        id: 'javascript',
        code: `let fruits = ["Apple", "Banana", "Orange"];

// Access elements (0-indexed)
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Length
console.log(fruits.length); // 3

// Add / Remove
fruits.push("Mango");
console.log(fruits); // [..., "Mango"]

fruits.pop();
console.log(fruits); // ["Apple","Banana","Orange"]

// Loop
for (let fruit of fruits) {
    console.log(fruit);
}`,
        descriptionAr: 'المصفوفات في JavaScript',
        descriptionEn: 'Arrays in JavaScript',
      },
      {
        id: 'java',
        code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Access (0-indexed)
        System.out.println(fruits.get(0)); // Apple

        // Size
        System.out.println(fruits.size()); // 3

        // Add / Remove
        fruits.add("Mango");
        fruits.remove(fruits.size() - 1); // removes last

        // Loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}`,
        descriptionAr: 'المصفوفات (ArrayList) في Java',
        descriptionEn: 'Arrays (ArrayList) in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<string> fruits = {"Apple", "Banana", "Orange"};

    // Access (0-indexed)
    cout << fruits[0] << endl; // Apple
    cout << fruits[1] << endl; // Banana

    // Size
    cout << fruits.size() << endl; // 3

    // Add / Remove
    fruits.push_back("Mango");
    fruits.pop_back();          // removes last

    // Loop
    for (string fruit : fruits) {
        cout << fruit << endl;
    }
    return 0;
}`,
        descriptionAr: 'المتجهات (vector) في C++',
        descriptionEn: 'Vectors (arrays) in C++',
      },
    ],
  }],

  // ── Section 14: Loops ─────────────────────────────────────────────────────
  14: [{
    titleAr: 'الحلقات التكرارية بأربع لغات',
    titleEn: 'Loops in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# حلقة for — تتكرر من 1 إلى 5
for i in range(1, 6):
    print("Count:", i)  # تطبع العدد الحالي
# الناتج: Count: 1 … Count: 5

# حلقة while — تستمر ما دام الشرط صحيحاً
count = 0
while count < 3:
    print("Repeat #" + str(count))
    count += 1  # نزيد المتغير لتجنّب الحلقة اللانهائية

# break يوقف الحلقة — continue يتخطى التكرار الحالي
for i in range(10):
    if i == 3: continue  # تخطّ الرقم 3
    if i == 6: break     # أوقف عند الرقم 6
    print(i)
# الناتج: 0 1 2 4 5`,
        descriptionAr: 'الحلقات في Python',
        descriptionEn: 'Loops in Python',
      },
      {
        id: 'javascript',
        code: `// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}
// Count: 1 … Count: 5

// while loop
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
// 0 1 2 4 5`,
        descriptionAr: 'الحلقات في JavaScript',
        descriptionEn: 'Loops in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // while loop
        int count = 0;
        while (count < 3) {
            System.out.println("Repeat #" + count);
            count++;
        }

        // break and continue
        for (int i = 0; i < 10; i++) {
            if (i == 3) continue; // skip 3
            if (i == 6) break;    // stop at 6
            System.out.println(i);
        }
        // 0 1 2 4 5
    }
}`,
        descriptionAr: 'الحلقات في Java',
        descriptionEn: 'Loops in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    // for loop
    for (int i = 1; i <= 5; i++) {
        cout << "Count: " << i << endl;
    }

    // while loop
    int count = 0;
    while (count < 3) {
        cout << "Repeat #" << count << endl;
        count++;
    }

    // break and continue
    for (int i = 0; i < 10; i++) {
        if (i == 3) continue; // skip 3
        if (i == 6) break;    // stop at 6
        cout << i << endl;
    }
    // 0 1 2 4 5
    return 0;
}`,
        descriptionAr: 'الحلقات في C++',
        descriptionEn: 'Loops in C++',
      },
    ],
  }],

  // ── Section 15: Functions ─────────────────────────────────────────────────
  15: [{
    titleAr: 'الدوال بأربع لغات',
    titleEn: 'Functions in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# تعريف دالة: def اسم_الدالة(المدخلات):
def greet(name):
    # نُرجع نصاً يحتوي على الاسم
    return "Hello, " + name + "!"

# استدعاء الدالة مرتين بمدخلات مختلفة
print(greet("Sara"))   # Hello, Sara!
print(greet("Ahmed"))  # Hello, Ahmed!

# دوال بمعاملات متعددة
def add(a, b):
    return a + b       # تُرجع مجموع العددين

def multiply(a, b):
    return a * b       # تُرجع حاصل الضرب

print(add(3, 5))       # 8
print(multiply(4, 6))  # 24

# دالة سهمية مختصرة (Lambda)
square = lambda n: n * n   # تُرجع مربّع العدد
print(square(7))            # 49`,
        descriptionAr: 'الدوال في Python',
        descriptionEn: 'Functions in Python',
      },
      {
        id: 'javascript',
        code: `function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Sara"));   // Hello, Sara!
console.log(greet("Ahmed"));  // Hello, Ahmed!

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

console.log(add(3, 5));       // 8
console.log(multiply(4, 6));  // 24

// Arrow function
const square = (n) => n * n;
console.log(square(7));       // 49`,
        descriptionAr: 'الدوال في JavaScript',
        descriptionEn: 'Functions in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static String greet(String name) {
        return "Hello, " + name + "!";
    }

    static int add(int a, int b) { return a + b; }
    static int multiply(int a, int b) { return a * b; }

    // No true lambda for standalone — use a method
    static int square(int n) { return n * n; }

    public static void main(String[] args) {
        System.out.println(greet("Sara"));    // Hello, Sara!
        System.out.println(greet("Ahmed"));   // Hello, Ahmed!
        System.out.println(add(3, 5));        // 8
        System.out.println(multiply(4, 6));   // 24
        System.out.println(square(7));        // 49
    }
}`,
        descriptionAr: 'الدوال في Java',
        descriptionEn: 'Functions in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

string greet(string name) {
    return "Hello, " + name + "!";
}

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }
int square(int n) { return n * n; }

int main() {
    cout << greet("Sara") << endl;    // Hello, Sara!
    cout << greet("Ahmed") << endl;   // Hello, Ahmed!
    cout << add(3, 5) << endl;        // 8
    cout << multiply(4, 6) << endl;   // 24
    cout << square(7) << endl;        // 49
    return 0;
}`,
        descriptionAr: 'الدوال في C++',
        descriptionEn: 'Functions in C++',
      },
    ],
  }],

  // ── Section 16: Scope ─────────────────────────────────────────────────────
  16: [{
    titleAr: 'النطاق بأربع لغات',
    titleEn: 'Scope in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `global_var = "I'm global"

def show_scope():
    local_var = "I'm local"
    print(global_var)  # works
    print(local_var)   # works

show_scope()
print(global_var)      # works
# print(local_var)     # ERROR: name not defined`,
        descriptionAr: 'النطاق في Python',
        descriptionEn: 'Scope in Python',
      },
      {
        id: 'javascript',
        code: `let globalVar = "I'm global";

function showScope() {
    let localVar = "I'm local";
    console.log(globalVar); // works
    console.log(localVar);  // works
}

showScope();
console.log(globalVar);     // works
// console.log(localVar);   // ERROR!`,
        descriptionAr: 'النطاق في JavaScript',
        descriptionEn: 'Scope in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static String globalVar = "I'm global"; // class field

    static void showScope() {
        String localVar = "I'm local";
        System.out.println(globalVar); // works
        System.out.println(localVar);  // works
    }

    public static void main(String[] args) {
        showScope();
        System.out.println(globalVar); // works
        // localVar is not accessible here
    }
}`,
        descriptionAr: 'النطاق في Java',
        descriptionEn: 'Scope in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <string>
using namespace std;

string globalVar = "I'm global";

void showScope() {
    string localVar = "I'm local";
    cout << globalVar << endl; // works
    cout << localVar << endl;  // works
}

int main() {
    showScope();
    cout << globalVar << endl; // works
    // localVar is not accessible here
    return 0;
}`,
        descriptionAr: 'النطاق في C++',
        descriptionEn: 'Scope in C++',
      },
    ],
  }],

  // ── Section 17: Recursion ─────────────────────────────────────────────────
  17: [{
    titleAr: 'التكرار الذاتي بأربع لغات',
    titleEn: 'Recursion in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `def factorial(n):
    if n <= 1:
        return 1          # Base case
    return n * factorial(n - 1)  # Recursive call

print(factorial(5))  # 120
print(factorial(4))  # 24
print(factorial(1))  # 1`,
        descriptionAr: 'المضروب بالتكرار الذاتي في Python',
        descriptionEn: 'Factorial using recursion in Python',
      },
      {
        id: 'javascript',
        code: `function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1`,
        descriptionAr: 'المضروب بالتكرار الذاتي في JavaScript',
        descriptionEn: 'Factorial using recursion in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static int factorial(int n) {
        if (n <= 1) return 1;         // Base case
        return n * factorial(n - 1);  // Recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
        System.out.println(factorial(4)); // 24
        System.out.println(factorial(1)); // 1
    }
}`,
        descriptionAr: 'المضروب بالتكرار الذاتي في Java',
        descriptionEn: 'Factorial using recursion in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;         // Base case
    return n * factorial(n - 1);  // Recursive call
}

int main() {
    cout << factorial(5) << endl; // 120
    cout << factorial(4) << endl; // 24
    cout << factorial(1) << endl; // 1
    return 0;
}`,
        descriptionAr: 'المضروب بالتكرار الذاتي في C++',
        descriptionEn: 'Factorial using recursion in C++',
      },
    ],
  }],

  // ── Section 18: Problem Solving ───────────────────────────────────────────
  18: [{
    titleAr: 'إيجاد أكبر رقم بأربع لغات',
    titleEn: 'Find the Max Number in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `def find_max(numbers):
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

nums = [3, 7, 2, 9, 1, 5]
print(find_max(nums))  # 9`,
        descriptionAr: 'إيجاد أكبر رقم في مصفوفة في Python',
        descriptionEn: 'Find max number in array in Python',
      },
      {
        id: 'javascript',
        code: `function findMax(numbers) {
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
        descriptionAr: 'إيجاد أكبر رقم في مصفوفة في JavaScript',
        descriptionEn: 'Find max number in array in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static int findMax(int[] numbers) {
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] nums = {3, 7, 2, 9, 1, 5};
        System.out.println(findMax(nums)); // 9
    }
}`,
        descriptionAr: 'إيجاد أكبر رقم في مصفوفة في Java',
        descriptionEn: 'Find max number in array in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int> numbers) {
    int maxVal = numbers[0];
    for (int num : numbers) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}

int main() {
    vector<int> nums = {3, 7, 2, 9, 1, 5};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,
        descriptionAr: 'إيجاد أكبر رقم في مصفوفة في C++',
        descriptionEn: 'Find max number in array in C++',
      },
    ],
  }],

  // ── Section 19: Bits & Bytes ──────────────────────────────────────────────
  19: [{
    titleAr: 'البتات والبايتات بأربع لغات',
    titleEn: 'Bits & Bytes in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `num = 42
# Decimal -> Binary string
print(bin(num))         # 0b101010
print(bin(num)[2:])     # 101010 (no prefix)

# Binary string -> Decimal
binary = "101010"
print(int(binary, 2))   # 42

# Bitwise operators
print(5 & 3)   # 1   (AND)
print(5 | 3)   # 7   (OR)
print(5 ^ 3)   # 6   (XOR)
print(~5)      # -6  (NOT)`,
        descriptionAr: 'التعامل مع البتات في Python',
        descriptionEn: 'Working with bits in Python',
      },
      {
        id: 'javascript',
        code: `let num = 42;
console.log(num.toString(2));        // "101010"
console.log(parseInt("101010", 2));  // 42

// Bitwise operators
console.log(5 & 3);  // 1  (AND)
console.log(5 | 3);  // 7  (OR)
console.log(5 ^ 3);  // 6  (XOR)
console.log(~5);      // -6 (NOT)`,
        descriptionAr: 'التعامل مع البتات في JavaScript',
        descriptionEn: 'Working with bits in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int num = 42;
        // Decimal -> Binary
        System.out.println(Integer.toBinaryString(num)); // 101010

        // Binary string -> Decimal
        int back = Integer.parseInt("101010", 2);
        System.out.println(back); // 42

        // Bitwise operators
        System.out.println(5 & 3); // 1  (AND)
        System.out.println(5 | 3); // 7  (OR)
        System.out.println(5 ^ 3); // 6  (XOR)
        System.out.println(~5);    // -6 (NOT)
    }
}`,
        descriptionAr: 'التعامل مع البتات في Java',
        descriptionEn: 'Working with bits in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <bitset>
using namespace std;

int main() {
    int num = 42;
    // Binary representation (8-bit)
    cout << bitset<8>(num) << endl; // 00101010

    // Bitwise operators
    cout << (5 & 3) << endl; // 1  (AND)
    cout << (5 | 3) << endl; // 7  (OR)
    cout << (5 ^ 3) << endl; // 6  (XOR)
    cout << (~5) << endl;     // -6 (NOT)
    return 0;
}`,
        descriptionAr: 'التعامل مع البتات في C++',
        descriptionEn: 'Working with bits in C++',
      },
    ],
  }],

  // ── Section 20: Binary Numbers ────────────────────────────────────────────
  20: [{
    titleAr: 'تحويل الأرقام الثنائية بأربع لغات',
    titleEn: 'Binary Conversion in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `def binary_to_decimal(binary):
    return int(binary, 2)

def decimal_to_binary(decimal):
    return bin(decimal)[2:]

print(binary_to_decimal("1010"))  # 10
print(binary_to_decimal("1111"))  # 15
print(decimal_to_binary(10))      # 1010
print(decimal_to_binary(255))     # 11111111`,
        descriptionAr: 'تحويل بين الثنائي والعشري في Python',
        descriptionEn: 'Convert between binary and decimal in Python',
      },
      {
        id: 'javascript',
        code: `function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("1111")); // 15
console.log(decimalToBinary(10));     // "1010"
console.log(decimalToBinary(255));    // "11111111"`,
        descriptionAr: 'تحويل بين الثنائي والعشري في JavaScript',
        descriptionEn: 'Convert between binary and decimal in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }

    static String decimalToBinary(int decimal) {
        return Integer.toBinaryString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(binaryToDecimal("1010")); // 10
        System.out.println(binaryToDecimal("1111")); // 15
        System.out.println(decimalToBinary(10));      // 1010
        System.out.println(decimalToBinary(255));     // 11111111
    }
}`,
        descriptionAr: 'تحويل بين الثنائي والعشري في Java',
        descriptionEn: 'Convert between binary and decimal in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <bitset>
#include <string>
using namespace std;

int binaryToDecimal(string binary) {
    return stoi(binary, nullptr, 2);
}

string decimalToBinary(int decimal) {
    if (decimal == 0) return "0";
    string result = "";
    while (decimal > 0) {
        result = to_string(decimal % 2) + result;
        decimal /= 2;
    }
    return result;
}

int main() {
    cout << binaryToDecimal("1010") << endl; // 10
    cout << binaryToDecimal("1111") << endl; // 15
    cout << decimalToBinary(10) << endl;      // 1010
    cout << decimalToBinary(255) << endl;     // 11111111
    return 0;
}`,
        descriptionAr: 'تحويل بين الثنائي والعشري في C++',
        descriptionEn: 'Convert between binary and decimal in C++',
      },
    ],
  }],

  // ── Section 21: Hexadecimal ───────────────────────────────────────────────
  21: [{
    titleAr: 'الأرقام السداسية بأربع لغات',
    titleEn: 'Hexadecimal in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# Hex -> Decimal
print(int("FF", 16))   # 255
print(int("1A", 16))   # 26

# Decimal -> Hex
print(hex(255))        # 0xff
print(hex(255)[2:].upper())  # FF

# Hex literals
red   = 0xFF0000
green = 0x00FF00
blue  = 0x0000FF
print(f"Red: {red}, Green: {green}, Blue: {blue}")`,
        descriptionAr: 'التعامل مع الأرقام السداسية في Python',
        descriptionEn: 'Working with hexadecimal in Python',
      },
      {
        id: 'javascript',
        code: `// Hex -> Decimal
console.log(parseInt("FF", 16)); // 255
console.log(parseInt("1A", 16)); // 26

// Decimal -> Hex
console.log((255).toString(16)); // "ff"
console.log((26).toString(16));  // "1a"

// Hex colors
const red   = "#FF0000";
const green = "#00FF00";
const blue  = "#0000FF";
console.log(\`Red: \${parseInt("FF",16)}, Green: 0, Blue: 0\`);`,
        descriptionAr: 'التعامل مع الأرقام السداسية في JavaScript',
        descriptionEn: 'Working with hexadecimal in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Hex -> Decimal
        System.out.println(Integer.parseInt("FF", 16)); // 255
        System.out.println(Integer.parseInt("1A", 16)); // 26

        // Decimal -> Hex
        System.out.println(Integer.toHexString(255));   // ff
        System.out.println(Integer.toHexString(26));    // 1a

        // Hex literal
        int red = 0xFF0000;
        System.out.println(red); // 16711680
    }
}`,
        descriptionAr: 'التعامل مع الأرقام السداسية في Java',
        descriptionEn: 'Working with hexadecimal in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Decimal -> Hex output
    cout << hex << 255 << endl;  // ff
    cout << hex << 26  << endl;  // 1a

    // Hex literal -> decimal
    int val = 0xFF;
    cout << dec << val << endl;  // 255

    // Hex with uppercase
    cout << uppercase << hex << 255 << endl; // FF
    return 0;
}`,
        descriptionAr: 'التعامل مع الأرقام السداسية في C++',
        descriptionEn: 'Working with hexadecimal in C++',
      },
    ],
  }],

  // ── Section 22: Boolean Algebra ───────────────────────────────────────────
  22: [{
    titleAr: 'الجبر المنطقي بأربع لغات',
    titleEn: 'Boolean Algebra in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `# AND
print(True  and True)   # True
print(True  and False)  # False
print(False and False)  # False

# OR
print(True  or  False)  # True
print(False or  False)  # False

# NOT
print(not True)   # False
print(not False)  # True

# XOR (no built-in — use !=)
def xor(a, b): return a != b
print(xor(True, False))  # True
print(xor(True, True))   # False`,
        descriptionAr: 'جداول الحقيقة في Python',
        descriptionEn: 'Truth tables in Python',
      },
      {
        id: 'javascript',
        code: `// AND
console.log(true  && true);   // true
console.log(true  && false);  // false
console.log(false && false);  // false

// OR
console.log(true  || false);  // true
console.log(false || false);  // false

// NOT
console.log(!true);   // false
console.log(!false);  // true

// XOR
const xor = (a, b) => a !== b;
console.log(xor(true, false)); // true
console.log(xor(true, true));  // false`,
        descriptionAr: 'جداول الحقيقة في JavaScript',
        descriptionEn: 'Truth tables in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // AND
        System.out.println(true  && true);   // true
        System.out.println(true  && false);  // false
        System.out.println(false && false);  // false

        // OR
        System.out.println(true  || false);  // true
        System.out.println(false || false);  // false

        // NOT
        System.out.println(!true);   // false
        System.out.println(!false);  // true

        // XOR
        System.out.println(true  ^ false); // true
        System.out.println(true  ^ true);  // false
    }
}`,
        descriptionAr: 'جداول الحقيقة في Java',
        descriptionEn: 'Truth tables in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
using namespace std;

int main() {
    // AND
    cout << (true  && true)  << endl; // 1
    cout << (true  && false) << endl; // 0
    cout << (false && false) << endl; // 0

    // OR
    cout << (true  || false) << endl; // 1
    cout << (false || false) << endl; // 0

    // NOT
    cout << (!true)  << endl; // 0
    cout << (!false) << endl; // 1

    // XOR
    cout << (true  ^ false) << endl; // 1
    cout << (true  ^ true)  << endl; // 0
    return 0;
}`,
        descriptionAr: 'جداول الحقيقة في C++',
        descriptionEn: 'Truth tables in C++',
      },
    ],
  }],

  // ── Section 23: Mini Project — Student Grade System ──────────────────────
  23: [{
    titleAr: 'نظام درجات الطلاب بأربع لغات',
    titleEn: 'Student Grade System in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `def get_letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

def calculate_average(grades):
    return sum(grades) / len(grades)

def print_report(student_name, grades):
    avg = calculate_average(grades)
    letter = get_letter_grade(avg)
    print("=== Student Report ===")
    print(f"Name:    {student_name}")
    print(f"Grades:  {', '.join(map(str, grades))}")
    print(f"Average: {avg:.2f}")
    print(f"Grade:   {letter}")

print_report("Sara Ahmed",  [92, 78, 85, 90, 88])
print_report("Ali Hassan",  [65, 72, 58, 70, 68])`,
        descriptionAr: 'نظام درجات الطلاب في Python',
        descriptionEn: 'Student grade system in Python',
      },
      {
        id: 'javascript',
        code: `function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function calculateAverage(grades) {
    return grades.reduce((s, g) => s + g, 0) / grades.length;
}

function printReport(studentName, grades) {
    const avg = calculateAverage(grades);
    console.log("=== Student Report ===");
    console.log("Name:    " + studentName);
    console.log("Grades:  " + grades.join(", "));
    console.log("Average: " + avg.toFixed(2));
    console.log("Grade:   " + getLetterGrade(avg));
}

printReport("Sara Ahmed", [92, 78, 85, 90, 88]);
printReport("Ali Hassan", [65, 72, 58, 70, 68]);`,
        descriptionAr: 'نظام درجات الطلاب في JavaScript',
        descriptionEn: 'Student grade system in JavaScript',
      },
      {
        id: 'java',
        code: `public class Main {
    static String getLetterGrade(double score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    static double calculateAverage(int[] grades) {
        int sum = 0;
        for (int g : grades) sum += g;
        return (double) sum / grades.length;
    }

    static void printReport(String name, int[] grades) {
        double avg = calculateAverage(grades);
        System.out.println("=== Student Report ===");
        System.out.println("Name:    " + name);
        System.out.printf("Average: %.2f%n", avg);
        System.out.println("Grade:   " + getLetterGrade(avg));
    }

    public static void main(String[] args) {
        printReport("Sara Ahmed", new int[]{92, 78, 85, 90, 88});
        printReport("Ali Hassan", new int[]{65, 72, 58, 70, 68});
    }
}`,
        descriptionAr: 'نظام درجات الطلاب في Java',
        descriptionEn: 'Student grade system in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <vector>
#include <numeric>
#include <iomanip>
using namespace std;

string getLetterGrade(double score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

double calculateAverage(vector<int> grades) {
    return (double)accumulate(grades.begin(), grades.end(), 0) / grades.size();
}

void printReport(string name, vector<int> grades) {
    double avg = calculateAverage(grades);
    cout << "=== Student Report ===" << endl;
    cout << "Name:    " << name << endl;
    cout << fixed << setprecision(2);
    cout << "Average: " << avg << endl;
    cout << "Grade:   " << getLetterGrade(avg) << endl;
}

int main() {
    printReport("Sara Ahmed", {92, 78, 85, 90, 88});
    printReport("Ali Hassan", {65, 72, 58, 70, 68});
    return 0;
}`,
        descriptionAr: 'نظام درجات الطلاب في C++',
        descriptionEn: 'Student grade system in C++',
      },
    ],
  }],

  // ── Section 24: Mini Project — Banking System ─────────────────────────────
  24: [{
    titleAr: 'نظام بنكي بسيط بأربع لغات',
    titleEn: 'Simple Banking System in 4 Languages',
    tabs: [
      {
        id: 'python',
        code: `def create_account(owner, initial_balance=0):
    return {"owner": owner, "balance": initial_balance, "transactions": []}

def deposit(account, amount):
    if amount <= 0:
        print("Invalid amount!")
        return
    account["balance"] += amount
    account["transactions"].append(("deposit", amount))
    print(f"Deposited \${amount}. Balance: \${account['balance']}")

def withdraw(account, amount):
    if amount <= 0:
        print("Invalid amount!")
        return
    if amount > account["balance"]:
        print("Insufficient funds!")
        return
    account["balance"] -= amount
    account["transactions"].append(("withdrawal", amount))
    print(f"Withdrew \${amount}. Balance: \${account['balance']}")

def print_statement(account):
    print(f"\\n=== Account: {account['owner']} ===")
    print(f"Balance: \${account['balance']}")
    for t in account["transactions"]:
        print(f"  {t[0]}: \${t[1]}")

acc = create_account("Sara", 1000)
deposit(acc, 500)
withdraw(acc, 200)
withdraw(acc, 2000)  # Will fail
print_statement(acc)`,
        descriptionAr: 'النظام البنكي في Python',
        descriptionEn: 'Banking system in Python',
      },
      {
        id: 'javascript',
        code: `function createAccount(owner, initialBalance = 0) {
    return { owner, balance: initialBalance, transactions: [] };
}

function deposit(account, amount) {
    if (amount <= 0) { console.log("Invalid amount!"); return; }
    account.balance += amount;
    account.transactions.push({ type: "deposit", amount });
    console.log(\`Deposited $\${amount}. Balance: $\${account.balance}\`);
}

function withdraw(account, amount) {
    if (amount <= 0) { console.log("Invalid amount!"); return; }
    if (amount > account.balance) { console.log("Insufficient funds!"); return; }
    account.balance -= amount;
    account.transactions.push({ type: "withdrawal", amount });
    console.log(\`Withdrew $\${amount}. Balance: $\${account.balance}\`);
}

let acc = createAccount("Sara", 1000);
deposit(acc, 500);
withdraw(acc, 200);
withdraw(acc, 2000); // Will fail`,
        descriptionAr: 'النظام البنكي في JavaScript',
        descriptionEn: 'Banking system in JavaScript',
      },
      {
        id: 'java',
        code: `import java.util.ArrayList;

public class Main {
    static double balance = 1000;
    static ArrayList<String> transactions = new ArrayList<>();

    static void deposit(double amount) {
        if (amount <= 0) { System.out.println("Invalid!"); return; }
        balance += amount;
        transactions.add("deposit: $" + amount);
        System.out.printf("Deposited $%.0f. Balance: $%.0f%n", amount, balance);
    }

    static void withdraw(double amount) {
        if (amount <= 0) { System.out.println("Invalid!"); return; }
        if (amount > balance) { System.out.println("Insufficient funds!"); return; }
        balance -= amount;
        transactions.add("withdrawal: $" + amount);
        System.out.printf("Withdrew $%.0f. Balance: $%.0f%n", amount, balance);
    }

    public static void main(String[] args) {
        deposit(500);
        withdraw(200);
        withdraw(2000); // Will fail
        System.out.println("Transactions: " + transactions);
    }
}`,
        descriptionAr: 'النظام البنكي في Java',
        descriptionEn: 'Banking system in Java',
      },
      {
        id: 'cpp',
        code: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

double balance = 1000;
vector<string> transactions;

void deposit(double amount) {
    if (amount <= 0) { cout << "Invalid!" << endl; return; }
    balance += amount;
    transactions.push_back("deposit: $" + to_string((int)amount));
    cout << "Deposited $" << amount << ". Balance: $" << balance << endl;
}

void withdraw(double amount) {
    if (amount <= 0) { cout << "Invalid!" << endl; return; }
    if (amount > balance) { cout << "Insufficient funds!" << endl; return; }
    balance -= amount;
    transactions.push_back("withdrawal: $" + to_string((int)amount));
    cout << "Withdrew $" << amount << ". Balance: $" << balance << endl;
}

int main() {
    deposit(500);
    withdraw(200);
    withdraw(2000); // Will fail
    cout << "Final balance: $" << balance << endl;
    return 0;
}`,
        descriptionAr: 'النظام البنكي في C++',
        descriptionEn: 'Banking system in C++',
      },
    ],
  }],
};
