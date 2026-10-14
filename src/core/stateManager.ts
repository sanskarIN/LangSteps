/**
 * LangSteps Reactive State Management Engine
 * Author: Sanskar Yadav <sanskarin@outlook.in>
 * Version: 1.0.0
 */

export type Listener<T> = (state: T, previousState: T) => void;

export interface AppState {
  currentModule: string;
  theme: 'dark' | 'light' | 'dim' | 'cyberpunk';
  completedTopics: string[];
  quizScores: Record<string, number>;
  activePlaygroundLanguage: string;
  lastActiveTimestamp: number;
}

export const INITIAL_STATE: AppState = {
  currentModule: 'hub',
  theme: 'dark',
  completedTopics: [],
  quizScores: {},
  activePlaygroundLanguage: 'javascript',
  lastActiveTimestamp: Date.now()
};

export class StateManager {
  private state: AppState;
  private listeners: Set<Listener<AppState>> = new Set();
  private storageKey = 'langsteps_state_v1';

  constructor(initialState?: Partial<AppState>) {
    this.state = this.loadPersistedState(initialState);
  }

  public getState(): Readonly<AppState> {
    return Object.freeze({ ...this.state });
  }

  public setState(updater: Partial<AppState> | ((prev: AppState) => Partial<AppState>)): void {
    const prevState = { ...this.state };
    const patch = typeof updater === 'function' ? updater(this.state) : updater;
    
    this.state = {
      ...this.state,
      ...patch,
      lastActiveTimestamp: Date.now()
    };

    this.persistState();
    this.notifyListeners(prevState);
  }

  public subscribe(listener: Listener<AppState>): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public markTopicComplete(topicId: string): void {
    if (!this.state.completedTopics.includes(topicId)) {
      this.setState(prev => ({
        completedTopics: [...prev.completedTopics, topicId]
      }));
    }
  }

  public recordQuizScore(language: string, score: number): void {
    this.setState(prev => ({
      quizScores: {
        ...prev.quizScores,
        [language]: score
      }
    }));
  }

  public setTheme(theme: AppState['theme']): void {
    this.setState({ theme });
  }

  public setModule(currentModule: string): void {
    this.setState({ currentModule });
  }

  private notifyListeners(prevState: AppState): void {
    for (const listener of this.listeners) {
      try {
        listener(this.getState(), prevState);
      } catch (err) {
        console.error('Error in state listener:', err);
      }
    }
  }

  private persistState(): void {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      } catch (e) {
        console.warn('LocalStorage unavailable for persistence');
      }
    }
  }

  private loadPersistedState(initialState?: Partial<AppState>): AppState {
    let loaded: Partial<AppState> = {};
    if (typeof localStorage !== 'undefined') {
      try {
        const item = localStorage.getItem(this.storageKey);
        if (item) {
          loaded = JSON.parse(item);
        }
      } catch (e) {
        // fallback to initial
      }
    }
    return {
      ...INITIAL_STATE,
      ...loaded,
      ...initialState
    };
  }
}

export const globalStateManager = new StateManager();
