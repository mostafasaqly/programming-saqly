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

import { SECTIONS_PART1 } from './sections.part1';
import { SECTIONS_PART2 } from './sections.part2';
import { SECTIONS_PART3 } from './sections.part3';
import { SECTIONS_PART4 } from './sections.part4';
import { SECTIONS_PART5 } from './sections.part5';
import { SECTIONS_PART6 } from './sections.part6';
import { SECTIONS_PART7 } from './sections.part7';
import { SECTIONS_PART8 } from './sections.part8';

export { MULTI_LANG_EXAMPLES } from './sections.multilang';

export const COURSE_SECTIONS: SectionContent[] = [
  ...SECTIONS_PART1,
  ...SECTIONS_PART2,
  ...SECTIONS_PART3,
  ...SECTIONS_PART4,
  ...SECTIONS_PART5,
  ...SECTIONS_PART6,
  ...SECTIONS_PART7,
  ...SECTIONS_PART8,
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
