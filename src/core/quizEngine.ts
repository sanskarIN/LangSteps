/**
 * LangSteps Quiz Engine
 * Robust quiz validation, scoring mechanics, tier classification,
 * and review generator.
 * @author Sanskar <sanskarin@outlook.in>
 */

import { QuizQuestion, QuizSubmission, QuizResult, QuestionReview } from '../types/index.js';

export class QuizEngine {
  public static evaluate(
    questions: QuizQuestion[],
    submission: QuizSubmission
  ): QuizResult {
    let score = 0;
    const review: QuestionReview[] = [];

    for (const q of questions) {
      const userSelected = submission.answers[q.id];
      const isCorrect = userSelected === q.answer;

      if (isCorrect) {
        score++;
      }

      review.push({
        questionId: q.id,
        question: q.question,
        selectedOption: userSelected !== undefined ? userSelected : -1,
        correctOption: q.answer,
        isCorrect,
        explanation: q.explanation
      });
    }

    const total = questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    let tier = 'Needs Practice';
    let color = '#ef4444';

    if (percentage === 100) {
      tier = 'Master / Perfect Score 🏆';
      color = '#10b981';
    } else if (percentage >= 80) {
      tier = 'Proficient Senior ⭐';
      color = '#3b82f6';
    } else if (percentage >= 60) {
      tier = 'Competent Intermediate ⚡';
      color = '#f59e0b';
    } else if (percentage >= 40) {
      tier = 'Junior Apprentice 💡';
      color = '#8b5cf6';
    }

    // Base XP: 50 XP per correct question + speed bonus
    const speedBonus = submission.timeSpentSeconds < 120 && percentage >= 70 ? 100 : 0;
    const xpEarned = score * 50 + speedBonus;

    return {
      language: submission.language,
      score,
      total,
      percentage,
      tier,
      color,
      xpEarned,
      timeSpentSeconds: submission.timeSpentSeconds,
      timestamp: new Date().toISOString(),
      review
    };
  }

  public static shuffleQuestions<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i]!;
      copy[i] = copy[j]!;
      copy[j] = temp;
    }
    return copy;
  }
}
