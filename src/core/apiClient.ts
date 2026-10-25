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
        version: '1.4.0-rc.1',
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
      { id: 'python', name: 'Python', slug: 'python', icon: '🐍', title: 'Python Mastery', description: 'Core, Asyncio, Django, FastAPI, Data Science', path: 'Python/index.html', conceptCount: 100, categoryCount: 12, categories: ['Basics', 'Data Structures', 'Control Flow', 'Functions', 'OOP', 'System', 'Concurrency', 'Frameworks', 'Data Science', 'Advanced'] },
      { id: 'typescript', name: 'TypeScript', slug: 'typescript', icon: '🔷', title: 'TypeScript Mastery', description: 'Types, generics and compiler APIs', path: 'TypeScript/index.html', conceptCount: 50, categoryCount: 6, categories: ['Types', 'Interfaces', 'Generics', 'Advanced Types', 'Decorators', 'Compiler'] },
      { id: 'rust', name: 'Rust', slug: 'rust', icon: '🦀', title: 'Rust Mastery', description: 'Ownership, borrowing, concurrency and systems', path: 'Rust/index.html', conceptCount: 35, categoryCount: 6, categories: ['Basics', 'Ownership', 'Modeling', 'Functional', 'Concurrency', 'Systems'] },
      { id: 'go', name: 'Go', slug: 'go', icon: '🐹', title: 'Go Mastery', description: '15 guided Go lessons', path: 'Go/index.html', conceptCount: 15, categoryCount: 7, categories: ['Foundations', 'Collections', 'Types', 'Reliability', 'Concurrency', 'Tooling', 'Web'] },
      { id: 'sql', name: 'SQL', slug: 'sql', icon: '🗄️', title: 'SQL Mastery', description: '15 guided SQL lessons', path: 'SQL/index.html', conceptCount: 15, categoryCount: 8, categories: ['Foundations', 'Queries', 'Data changes', 'Analytics', 'Reliability', 'Schema', 'Performance', 'Security'] },
      { id: 'csharp', name: 'C#', slug: 'csharp', icon: '💜', title: 'C# 13 & ASP.NET Core', description: '15 lessons for .NET 9 and web APIs', path: 'CSharp/index.html', conceptCount: 15, categoryCount: 4, categories: ['C# basics', 'Reliability', 'ASP.NET Core', 'Quality'] }
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

    // An offline user with no saved results has no verified leaderboard entries.
    return [];
  }
}
