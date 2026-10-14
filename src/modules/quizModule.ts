/**
 * LangSteps Quiz Module Controller
 * Provides complete quiz workflow, timer tracking, option selection,
 * evaluation, and review presentation in pure TypeScript.
 * @author Sanskar Yadav <sanskarin@outlook.in>
 */

import { QuizQuestion, QuizSubmission, QuizResult } from '../types/index.js';
import { QuizEngine } from '../core/quizEngine.js';

export class QuizModuleController {
  private questions: QuizQuestion[] = [];
  private currentQuestionIndex = 0;
  private selectedAnswers: Record<number, number> = {};
  private timerSeconds = 30;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private timeSpentSeconds = 0;
  private language: string;

  constructor(language: string, questions: QuizQuestion[]) {
    this.language = language;
    this.questions = [...questions];
  }

  public getLanguage(): string {
    return this.language;
  }

  public getTotalQuestions(): number {
    return this.questions.length;
  }

  public getCurrentIndex(): number {
    return this.currentQuestionIndex;
  }

  public getCurrentQuestion(): QuizQuestion | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  public selectOption(questionId: number, optionIndex: number): void {
    this.selectedAnswers[questionId] = optionIndex;
  }

  public getSelectedOption(questionId: number): number | undefined {
    return this.selectedAnswers[questionId];
  }

  public nextQuestion(): boolean {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.timerSeconds = 30;
      return true;
    }
    return false;
  }

  public previousQuestion(): boolean {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.timerSeconds = 30;
      return true;
    }
    return false;
  }

  public submitQuiz(username?: string): QuizResult {
    this.stopTimer();

    const submission: QuizSubmission = {
      language: this.language,
      answers: this.selectedAnswers,
      timeSpentSeconds: this.timeSpentSeconds,
      username
    };

    return QuizEngine.evaluate(this.questions, submission);
  }

  public startTimer(onTick: (secondsLeft: number) => void, onTimeout: () => void): void {
    this.stopTimer();
    this.timerSeconds = 30;

    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.timeSpentSeconds++;
      onTick(this.timerSeconds);

      if (this.timerSeconds <= 0) {
        this.stopTimer();
        onTimeout();
      }
    }, 1000);
  }

  public stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
