import type { SectionContent } from './sections.data';

export const SECTIONS_PART6: SectionContent[] = [
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
];
