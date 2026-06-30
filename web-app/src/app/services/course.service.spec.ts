import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with 0% progress', () => {
    expect(service.progressPercent()).toBe(0);
  });

  it('should toggle a section as complete', () => {
    service.toggleComplete(1);
    expect(service.isCompleted(1)).toBeTrue();
    expect(service.completedCount()).toBe(1);
  });

  it('should untoggle a completed section', () => {
    service.toggleComplete(1);
    service.toggleComplete(1);
    expect(service.isCompleted(1)).toBeFalse();
  });

  it('should persist completed sections in localStorage', () => {
    service.toggleComplete(5);
    const raw = localStorage.getItem('course-completed');
    expect(raw).not.toBeNull();
    expect(JSON.parse(raw!)).toContain(5);
  });

  it('should save and retrieve quiz answers', () => {
    service.saveQuizAnswer(3, 0, 2);
    expect(service.getQuizAnswers(3)[0]).toBe(2);
  });

  it('should persist quiz answers in localStorage', () => {
    service.saveQuizAnswer(7, 1, 3);
    const raw = localStorage.getItem('course-quiz-answers');
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!) as Record<string, Record<string, number>>;
    expect(parsed[7][1]).toBe(3);
  });

  it('should mark and retrieve challenge completion', () => {
    service.markChallengeCompleted(5, 0);
    expect(service.isChallengeCompleted(5, 0)).toBeTrue();
    expect(service.isChallengeCompleted(5, 1)).toBeFalse();
  });

  it('should count challenges completed per section', () => {
    service.markChallengeCompleted(5, 0);
    service.markChallengeCompleted(5, 1);
    expect(service.getChallengesCompletedCount(5)).toBe(2);
  });

  it('should return correct section by id', () => {
    const sec = service.getSectionById(1);
    expect(sec).toBeDefined();
    expect(sec!.id).toBe(1);
  });

  it('should return undefined for non-existent section id', () => {
    expect(service.getSectionById(999)).toBeUndefined();
  });

  it('should filter sections by part', () => {
    const part1 = service.getSectionsByPart(1);
    expect(part1.length).toBeGreaterThan(0);
    part1.forEach(s => expect(s.part).toBe(1));
  });

  it('should have 25 total sections', () => {
    expect(service.sections.length).toBe(25);
  });
});
