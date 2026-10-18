/**
 * LangSteps Enterprise API Gateway
 * Connects frontend clients to ASP.NET Core backend endpoints with offline fallback caching
 * Author: Sanskar <sanskarin@outlook.in>
 * Version: 1.1.1
 */

import type { ExecutionResult } from '../types/index.js';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  isOfflineFallback?: boolean;
}

export interface ExecutionPayload {
  language: string;
  code: string;
}

export class ApiGateway {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  public async executeCode(payload: ExecutionPayload): Promise<ApiResponse<ExecutionResult>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/playground/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) return { success: false, error: `HTTP ${response.status}` };
      const result: {
        success: boolean; output: string; error: string | null;
        executionTimeMs: number; language: string;
      } = await response.json();
      if (!result.success) {
        return { success: false, error: result.error || 'Execution unavailable' };
      }
      return {
        success: true,
        data: {
          language: result.language, stdout: result.output, stderr: '',
          exitCode: 0, durationMs: result.executionTimeMs,
          hasErrors: false, status: 'success'
        }
      };
    } catch {
      // GitHub Pages is static; never fabricate successful compilation/execution.
      return {
        success: false,
        isOfflineFallback: true,
        error: 'The execution API is unavailable. Use a local compiler or a trusted sandbox.'
      };
    }
  }

  public async fetchRustCurriculum(): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/rust/curriculum`);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      return { success: true, data };
    } catch (err) {
      return {
        success: true,
        isOfflineFallback: true,
        data: {
          totalTopics: 35,
          edition: 'Rust 2024 Edition',
          categories: ['ownership', 'concurrency', 'types', 'advanced']
        }
      };
    }
  }

  public async fetchStats(): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/stats/extended`);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      return { success: true, data };
    } catch (err) {
      return {
        success: true,
        isOfflineFallback: true,
        data: {
          platform: 'LangSteps v1.1.1',
          activeCurricula: 10,
          totalConcepts: 480,
          status: 'Operational'
        }
      };
    }
  }
}

export const defaultApiGateway = new ApiGateway();
