/**
 * LangSteps Application Core Entry Point
 * Exports all modules, engines, and utilities for modern TypeScript development.
 * @author Sanskar <sanskarin@outlook.in>
 * @license MIT
 */

export * from './types/index.js';
export * from './core/themeEngine.js';
export * from './core/progressManager.js';
export * from './core/quizEngine.js';
export * from './core/apiClient.js';
export * from './core/profileManager.js';
export * from './core/stateManager.js';
export * from './modules/playgroundEngine.js';
export * from './modules/quizModule.js';
export * from './modules/pythonModule.js';
export * from './modules/rustModule.js';
export * from './modules/csharpModule.js';
export * from './modules/benchmarkEngine.js';
export * from './services/apiGateway.js';

import { ThemeEngine } from './core/themeEngine.js';
import { ProgressManager } from './core/progressManager.js';
import { LangStepsApiClient } from './core/apiClient.js';
import { ProfileManager } from './core/profileManager.js';
import { PlaygroundEngine } from './modules/playgroundEngine.js';
import { RustModule } from './modules/rustModule.js';
import { CSharpModule } from './modules/csharpModule.js';
import { BenchmarkEngine } from './modules/benchmarkEngine.js';
import { globalStateManager } from './core/stateManager.js';
import { defaultApiGateway } from './services/apiGateway.js';

export class LangStepsApp {
  public theme: ThemeEngine;
  public progress: ProgressManager;
  public api: LangStepsApiClient;
  public profile: typeof ProfileManager = ProfileManager;
  public playground: typeof PlaygroundEngine = PlaygroundEngine;
  public rust: RustModule;
  public csharp: CSharpModule;
  public benchmark: BenchmarkEngine;
  public state: typeof globalStateManager = globalStateManager;
  public gateway: typeof defaultApiGateway = defaultApiGateway;

  constructor(moduleName: string = 'python', apiBaseUrl: string = '') {
    this.theme = new ThemeEngine();
    this.progress = new ProgressManager(moduleName);
    this.api = new LangStepsApiClient(apiBaseUrl);
    this.rust = new RustModule();
    this.csharp = new CSharpModule();
    this.benchmark = new BenchmarkEngine();
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
