/**
 * LangSteps Core Type Definitions
 * Enterprise-grade TypeScript interfaces for modules, concepts, quizzes, themes, and gamification.
 * @author Sanskar <sanskarin@outlook.in>
 * @license MIT
 */

export interface Theme {
  id: string;
  name: string;
  bg: string;
  bg2: string;
  bg3: string;
  bg4: string;
  text: string;
  text2: string;
  text3: string;
  accent: string;
  accent2: string;
  accent3: string;
  border: string;
  card: string;
  codeBg: string;
  sbBg: string;
  hdrBg: string;
}

export interface Concept {
  id: string;
  title: string;
  badge: string;
  emoji: string;
  defaultCode: string;
  content: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'master';
  tags?: string[];
}

export interface ModuleInfo {
  id: string;
  name: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  path: string;
  conceptCount: number;
  categoryCount: number;
  categories: string[];
}

export interface QuizQuestion {
  id: number;
  language: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  answer: number; // 0-indexed correct option
  explanation: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizSubmission {
  language: string;
  answers: Record<number, number>; // questionId -> selectedOptionIndex
  timeSpentSeconds: number;
  username?: string;
}

export interface QuestionReview {
  questionId: number;
  question: string;
  selectedOption: number;
  correctOption: number;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizResult {
  language: string;
  score: number;
  total: number;
  percentage: number;
  tier: string;
  color: string;
  xpEarned: number;
  timeSpentSeconds: number;
  timestamp: string;
  review: QuestionReview[];
}

export interface UserProgress {
  module: string;
  masteredTags: string[];
  favorites: string[];
  userXP: number;
  level: number;
  rankTitle: string;
  lastUpdated: string;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  totalXP: number;
  quizzesCompleted: number;
  masteredCount: number;
  rankTitle: string;
  avatarSeed: string;
  date: string;
}

export interface RankTier {
  threshold: number;
  title: string;
  color: string;
  badgeIcon: string;
}

export interface ApiHealthResponse {
  status: 'healthy' | 'degraded' | 'offline';
  version: string;
  platform: string;
  timestamp: string;
  serverTime: string;
}

export * from './profile.js';

