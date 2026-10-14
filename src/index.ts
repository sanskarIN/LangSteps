/**
 * LangSteps Application Core Entry Point
 * Exports all modules, engines, and utilities for modern TypeScript development.
 * @author Sanskar Yadav <sanskarin@outlook.in>
 * @license MIT
 */

export * from './types/index.js';
export * from './core/themeEngine.js';
export * from './core/progressManager.js';
export * from './core/quizEngine.js';
export * from './core/apiClient.js';

import { ThemeEngine } from './core/themeEngine.js';
import { ProgressManager } from './core/progressManager.js';
import { LangStepsApiClient } from './core/apiClient.js';

export class LangStepsApp {
  public theme: ThemeEngine;
  public progress: ProgressManager;
  public api: LangStepsApiClient;

  constructor(moduleName: string = 'python', apiBaseUrl: string = '') {
    this.theme = new ThemeEngine();
    this.progress = new ProgressManager(moduleName);
    this.api = new LangStepsApiClient(apiBaseUrl);
  }

  public async bootstrap(): Promise<void> {
    const health = await this.api.getHealth();
    console.info(`[LangSteps] Initialized. Platform: ${health.platform}, Status: ${health.status}`);
  }
}

// Auto-bind to window if in browser environment
if (typeof window !== 'undefined') {
  (window as unknown as { LangSteps: typeof LangStepsApp }).LangSteps = LangStepsApp;
}
