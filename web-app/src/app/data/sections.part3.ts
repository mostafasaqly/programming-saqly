import type { SectionContent } from './sections.data';

export const SECTIONS_PART3: SectionContent[] = [
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
];
