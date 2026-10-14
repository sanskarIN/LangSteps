/**
 * LangSteps API Client
 * Type-safe HTTP client connecting client applications to the ASP.NET Core REST API backend.
 * Provides seamless offline fallbacks when running as a standalone static bundle.
 * @author Sanskar <sanskarin@outlook.in>
 */

import {
  ApiHealthResponse,
  ModuleInfo,
  QuizQuestion,
  QuizSubmission,
  QuizResult,
  LeaderboardEntry
} from '../types/index.js';
import { QuizEngine } from './quizEngine.js';

export class LangStepsApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  public async getHealth(): Promise<ApiHealthResponse> {
    try {
      const res = await fetch(`${this.baseUrl}/api/health`);
      if (!res.ok) throw new Error(`Health check failed: ${res.statusText}`);
      return await res.json();
    } catch {
      return {
        status: 'offline',
        version: '5.3.0',
        platform: 'Static Client (Offline Mode)',
        timestamp: new Date().toISOString(),
        serverTime: new Date().toUTCString()
      };
    }
  }

  public async getModules(): Promise<ModuleInfo[]> {
    try {
      const res = await fetch(`${this.baseUrl}/api/modules`);
      if (res.ok) return await res.json();
    } catch {
      // Fallback to static catalog
    }

    return [
      { id: 'html', name: 'HTML', slug: 'html', icon: '📄', title: 'HTML Mastery', description: '100 HTML Tags Explained In-Depth', path: 'HTML/index.html', conceptCount: 100, categoryCount: 8, categories: ['Document', 'Inline', 'Block', 'Forms', 'Media', 'Tables', 'Embedded', 'Interactive'] },
      { id: 'css', name: 'CSS', slug: 'css', icon: '🎨', title: 'CSS Mastery', description: '100 CSS Properties with Live Playgrounds', path: 'CSS/index.html', conceptCount: 100, categoryCount: 9, categories: ['Layout', 'Flexbox', 'Grid', 'Typography', 'Colors', 'Animations', 'Transforms', 'Filter', 'Modern'] },
      { id: 'js', name: 'JavaScript', slug: 'javascript', icon: '⚡', title: 'JavaScript Mastery', description: 'Complete ECMAScript & Runtime Curriculum', path: 'JavaScript/index.html', conceptCount: 100, categoryCount: 10, categories: ['Basics', 'Objects', 'Functions', 'Async', 'DOM', 'Prototypes', 'ESNext', 'Patterns', 'Performance', 'APIs'] },
      { id: 'react', name: 'React', slug: 'react', icon: '⚛️', title: 'React Mastery', description: 'Hooks, Suspense, State & Server Components', path: 'React/index.html', conceptCount: 100, categoryCount: 8, categories: ['Components', 'Hooks', 'State', 'Effects', 'Performance', 'Patterns', 'Router', 'SSR'] },
      { id: 'python', name: 'Python', slug: 'python', icon: '🐍', title: 'Python Mastery', description: 'Core, Asyncio, Django, FastAPI, Data Science', path: 'Python/index.html', conceptCount: 100, categoryCount: 12, categories: ['Basics', 'Data Structures', 'Control Flow', 'Functions', 'OOP', 'System', 'Concurrency', 'Frameworks', 'Data Science', 'Advanced'] }
    ];
  }

  public async getQuizQuestions(language: string): Promise<QuizQuestion[]> {
    try {
      const res = await fetch(`${this.baseUrl}/api/quiz/${encodeURIComponent(language)}`);
      if (res.ok) return await res.json();
    } catch {
      // Offline fallback
    }
    return [];
  }

  public async submitQuiz(submission: QuizSubmission, fallbackQuestions: QuizQuestion[] = []): Promise<QuizResult> {
    try {
      const res = await fetch(`${this.baseUrl}/api/quiz/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      });
      if (res.ok) return await res.json();
    } catch {
      // Local client evaluation fallback
    }

    return QuizEngine.evaluate(fallbackQuestions, submission);
  }

  public async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const res = await fetch(`${this.baseUrl}/api/leaderboard`);
      if (res.ok) return await res.json();
    } catch {
      // Local storage fallback
    }

    if (typeof localStorage !== 'undefined') {
      try {
        const raw = localStorage.getItem('langsteps-leaderboard');
        if (raw) return JSON.parse(raw);
      } catch {}
    }

    return [
      { id: 'lb-1', username: 'SanskarIN', totalXP: 10000, quizzesCompleted: 10, masteredCount: 100, rankTitle: 'LangSteps Grandmaster 👑', avatarSeed: 'sanskar', date: '2026-10-14' },
      { id: 'lb-2', username: 'DevPioneer', totalXP: 8200, quizzesCompleted: 8, masteredCount: 82, rankTitle: 'Systems Engineer 🚀', avatarSeed: 'pioneer', date: '2026-10-13' },
      { id: 'lb-3', username: 'AsyncCoder', totalXP: 6500, quizzesCompleted: 6, masteredCount: 65, rankTitle: 'Architecture Specialist 🏛️', avatarSeed: 'async', date: '2026-10-12' }
    ];
  }
}
