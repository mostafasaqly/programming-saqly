import type { SectionContent } from './sections.data';

export const SECTIONS_PART5: SectionContent[] = [
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
];
