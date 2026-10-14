/**
 * LangSteps Progress Manager
 * Handles local progress persistence, XP mechanics, level/rank calculation,
 * and JSON progress import/export.
 * @author Sanskar Yadav <sanskarin@outlook.in>
 */

import { UserProgress, RankTier } from '../types/index.js';

export const RANK_TIERS: RankTier[] = [
  { threshold: 0, title: 'Novice Developer', color: '#64748b', badgeIcon: '🌱' },
  { threshold: 10, title: 'Code Apprentice', color: '#10b981', badgeIcon: '⚡' },
  { threshold: 25, title: 'Syntax Craftsman', color: '#3b82f6', badgeIcon: '🛠️' },
  { threshold: 50, title: 'Architecture Specialist', color: '#8b5cf6', badgeIcon: '🏛️' },
  { threshold: 75, title: 'Systems Engineer', color: '#f59e0b', badgeIcon: '🚀' },
  { threshold: 90, title: 'LangSteps Grandmaster', color: '#ef4444', badgeIcon: '👑' }
];

export class ProgressManager {
  private module: string;

  constructor(module: string = 'python') {
    this.module = module.toLowerCase();
  }

  private getKey(suffix: string): string {
    return `${this.module}_${suffix}`;
  }

  public getMastered(): string[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(this.getKey('mastered'));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  public getFavorites(): string[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(this.getKey('favorites'));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  public getXP(): number {
    if (typeof localStorage === 'undefined') return 0;
    const raw = localStorage.getItem(this.getKey('xp'));
    return raw ? parseInt(raw, 10) || 0 : 0;
  }

  public toggleMastery(conceptId: string): { isMastered: boolean; totalMastered: number; newXP: number } {
    const list = this.getMastered();
    const idx = list.indexOf(conceptId);
    let newXP = this.getXP();

    if (idx >= 0) {
      list.splice(idx, 1);
      newXP = Math.max(0, newXP - 100);
    } else {
      list.push(conceptId);
      newXP += 100;
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.getKey('mastered'), JSON.stringify(list));
      localStorage.setItem(this.getKey('xp'), newXP.toString());
    }

    return {
      isMastered: idx === -1,
      totalMastered: list.length,
      newXP
    };
  }

  public toggleFavorite(conceptId: string): boolean {
    const list = this.getFavorites();
    const idx = list.indexOf(conceptId);
    let isFav = false;

    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(conceptId);
      isFav = true;
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.getKey('favorites'), JSON.stringify(list));
    }
    return isFav;
  }

  public getRank(masteredCount: number): RankTier {
    let current = RANK_TIERS[0]!;
    for (const tier of RANK_TIERS) {
      if (masteredCount >= tier.threshold) {
        current = tier;
      }
    }
    return current;
  }

  public getLevel(masteredCount: number): number {
    return Math.floor(masteredCount / 10) + 1;
  }

  public getFullProgress(): UserProgress {
    const mastered = this.getMastered();
    const favorites = this.getFavorites();
    const userXP = this.getXP();
    const rank = this.getRank(mastered.length);

    return {
      module: this.module,
      masteredTags: mastered,
      favorites,
      userXP,
      level: this.getLevel(mastered.length),
      rankTitle: rank.title,
      lastUpdated: new Date().toISOString()
    };
  }

  public exportJSON(): string {
    return JSON.stringify(this.getFullProgress(), null, 2);
  }

  public importJSON(jsonStr: string): boolean {
    try {
      const data = JSON.parse(jsonStr) as Partial<UserProgress>;
      if (Array.isArray(data.masteredTags)) {
        localStorage.setItem(this.getKey('mastered'), JSON.stringify(data.masteredTags));
      }
      if (Array.isArray(data.favorites)) {
        localStorage.setItem(this.getKey('favorites'), JSON.stringify(data.favorites));
      }
      if (typeof data.userXP === 'number') {
        localStorage.setItem(this.getKey('xp'), data.userXP.toString());
      }
      return true;
    } catch {
      return false;
    }
  }
}
