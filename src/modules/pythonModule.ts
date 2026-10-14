/**
 * LangSteps Python Module Controller
 * Core curriculum manager, search indexing, category filtering,
 * and concept navigation in TypeScript.
 * @author Sanskar Yadav <sanskarin@outlook.in>
 */

import { Concept } from '../types/index.js';
import { ProgressManager } from '../core/progressManager.js';

export class PythonModuleController {
  private concepts: Concept[];
  private progress: ProgressManager;
  private currentConceptId: string;
  private activeCategory: string = 'ALL';

  constructor(concepts: Concept[]) {
    this.concepts = [...concepts];
    this.progress = new ProgressManager('python');
    this.currentConceptId = this.concepts[0]?.id || 'py-1';
  }

  public getAllConcepts(): Concept[] {
    return [...this.concepts];
  }

  public getCategories(): string[] {
    return Array.from(new Set(this.concepts.map(c => c.badge))).sort();
  }

  public setCategory(category: string): void {
    this.activeCategory = category;
  }

  public getActiveCategory(): string {
    return this.activeCategory;
  }

  public filterConcepts(searchQuery: string = ''): Concept[] {
    const q = searchQuery.trim().toLowerCase();
    const mastered = this.progress.getMastered();
    const favorites = this.progress.getFavorites();

    return this.concepts.filter(c => {
      // Category filter
      if (this.activeCategory === 'FAVORITES') {
        if (!favorites.includes(c.id)) return false;
      } else if (this.activeCategory === 'MASTERED') {
        if (!mastered.includes(c.id)) return false;
      } else if (this.activeCategory !== 'ALL' && c.badge !== this.activeCategory) {
        return false;
      }

      // Search query
      if (q) {
        return (
          c.title.toLowerCase().includes(q) ||
          c.badge.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }

  public getConceptById(id: string): Concept | undefined {
    return this.concepts.find(c => c.id === id);
  }

  public getCurrentConcept(): Concept | undefined {
    return this.getConceptById(this.currentConceptId) || this.concepts[0];
  }

  public setCurrentConcept(id: string): Concept | undefined {
    const found = this.getConceptById(id);
    if (found) {
      this.currentConceptId = found.id;
      // Mark as mastered / visited
      this.progress.toggleMastery(found.id);
    }
    return found;
  }

  public getConceptOfTheDay(): Concept {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const idx = dayOfYear % (this.concepts.length || 1);
    return this.concepts[idx] || this.concepts[0]!;
  }

  public getStats() {
    const total = this.concepts.length;
    const mastered = this.progress.getMastered().length;
    const favorites = this.progress.getFavorites().length;
    const xp = this.progress.getXP();
    const rank = this.progress.getRank(mastered);
    const level = this.progress.getLevel(mastered);
    const percentage = total > 0 ? Math.round((mastered / total) * 100) : 0;

    return {
      total,
      mastered,
      favorites,
      xp,
      level,
      rankTitle: rank.title,
      rankColor: rank.color,
      percentage
    };
  }
}
