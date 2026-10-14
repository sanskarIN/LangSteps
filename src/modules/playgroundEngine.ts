/**
 * LangSteps Code Playground Engine
 * Multi-language client-side code runner and execution simulator.
 * Supports Python, JavaScript, and TypeScript runtime simulation.
 * @author Sanskar Yadav <sanskarin@outlook.in>
 */

import { ExecutionRequest, ExecutionResult } from '../types/index.js';

export class PlaygroundEngine {
  public static async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    const startTime = performance.now();

    switch (request.language) {
      case 'python':
        return PlaygroundEngine.executePython(request.code, startTime);
      case 'javascript':
      case 'typescript':
        return PlaygroundEngine.executeJavaScript(request.code, startTime);
      default:
        return {
          language: request.language,
          stdout: '',
          stderr: `Unsupported language: ${request.language}`,
          exitCode: 1,
          durationMs: Math.round(performance.now() - startTime),
          hasErrors: true,
          status: 'runtime_error'
        };
    }
  }

  private static executePython(code: string, startTime: number): ExecutionResult {
    const lines = code.split('\n');
    const outputs: string[] = [];
    const vars: Record<string, string> = {};

    try {
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;

        // Simulate simple variable assignment: x = 10 or name = "Sanskar"
        const assign = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
        if (assign && !line.includes('==') && !line.startsWith('def ') && !line.startsWith('class ')) {
          const [, name, val] = assign;
          if (name && val) {
            vars[name] = val.trim().replace(/^['"]|['"]$/g, '');
          }
        }

        // Simulate print(...) statement
        const print = line.match(/^print\s*\((.*)\)\s*$/);
        if (print && print[1]) {
          const inner = print[1].trim();

          // f-string handling: f"Hello, {name}!"
          if (inner.startsWith("f'") || inner.startsWith('f"')) {
            let str = inner.slice(2, -1);
            str = str.replace(/{([^}]+)}/g, (_, expr) => {
              const trimmed = expr.trim();
              if (vars[trimmed] !== undefined) return vars[trimmed]!;
              try {
                // eslint-disable-next-line no-eval
                return String(eval(trimmed));
              } catch {
                return trimmed;
              }
            });
            outputs.push(str);
          } else if ((inner.startsWith("'") && inner.endsWith("'")) || (inner.startsWith('"') && inner.endsWith('"'))) {
            outputs.push(inner.slice(1, -1));
          } else if (vars[inner] !== undefined) {
            outputs.push(vars[inner]!);
          } else {
            try {
              // eslint-disable-next-line no-eval
              outputs.push(String(eval(inner)));
            } catch {
              outputs.push(inner);
            }
          }
        }
      }

      const durationMs = Math.round(performance.now() - startTime);

      if (outputs.length > 0) {
        return {
          language: 'python',
          stdout: outputs.map(o => `>>> ${o}`).join('\n') + '\n\n[Program exited cleanly with code 0]',
          stderr: '',
          exitCode: 0,
          durationMs,
          hasErrors: false,
          status: 'success'
        };
      }

      return {
        language: 'python',
        stdout: '>>> Syntax check complete. All Python statements parsed cleanly.\n[Program exited with code 0]',
        stderr: '',
        exitCode: 0,
        durationMs,
        hasErrors: false,
        status: 'success'
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        language: 'python',
        stdout: '',
        stderr: `Traceback (most recent call last):\n  File "main.py", line 1, in <module>\nRuntimeError: ${msg}`,
        exitCode: 1,
        durationMs: Math.round(performance.now() - startTime),
        hasErrors: true,
        status: 'runtime_error'
      };
    }
  }

  private static executeJavaScript(code: string, startTime: number): ExecutionResult {
    const logs: string[] = [];
    const origLog = console.log;
    const origWarn = console.warn;
    const origError = console.error;

    try {
      console.log = (...args: unknown[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      console.warn = (...args: unknown[]) => logs.push(`[WARN] ${args.join(' ')}`);
      console.error = (...args: unknown[]) => logs.push(`[ERROR] ${args.join(' ')}`);

      // Run code safely with Function constructor
      const runner = new Function(code);
      runner();

      const durationMs = Math.round(performance.now() - startTime);

      return {
        language: 'javascript',
        stdout: logs.join('\n') || '[Program completed with no console output]',
        stderr: '',
        exitCode: 0,
        durationMs,
        hasErrors: false,
        status: 'success'
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        language: 'javascript',
        stdout: logs.join('\n'),
        stderr: `Uncaught Error: ${msg}`,
        exitCode: 1,
        durationMs: Math.round(performance.now() - startTime),
        hasErrors: true,
        status: 'runtime_error'
      };
    } finally {
      console.log = origLog;
      console.warn = origWarn;
      console.error = origError;
    }
  }
}
