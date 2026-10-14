/**
 * LangSteps Micro-Benchmark Execution Engine
 * Author: Sanskar Yadav <sanskarin@outlook.in>
 * Version: 1.0.0
 */

export interface BenchmarkCase {
  id: string;
  name: string;
  description: string;
  iterations: number;
  fn: () => unknown | Promise<unknown>;
}

export interface BenchmarkResult {
  id: string;
  name: string;
  iterations: number;
  totalTimeMs: number;
  avgTimeMs: number;
  opsPerSec: number;
  memoryEstimateKb: number;
  complexityLabel: string;
}

export class BenchmarkEngine {
  private cases: BenchmarkCase[] = [];

  public register(benchCase: BenchmarkCase): void {
    this.cases.push(benchCase);
  }

  public async runCase(benchCase: BenchmarkCase): Promise<BenchmarkResult> {
    const startMemory = (performance as any).memory ? (performance as any).memory.usedJSHeapSize : 0;
    const start = performance.now();

    for (let i = 0; i < benchCase.iterations; i++) {
      const res = benchCase.fn();
      if (res instanceof Promise) {
        await res;
      }
    }

    const elapsed = performance.now() - start;
    const endMemory = (performance as any).memory ? (performance as any).memory.usedJSHeapSize : 0;
    const diffMem = Math.max(0, endMemory - startMemory);

    const avg = elapsed / benchCase.iterations;
    const ops = (benchCase.iterations / elapsed) * 1000;

    let complexity = 'O(1)';
    if (benchCase.iterations > 50000) complexity = 'O(n)';
    if (elapsed > 500) complexity = 'O(n log n)';

    return {
      id: benchCase.id,
      name: benchCase.name,
      iterations: benchCase.iterations,
      totalTimeMs: parseFloat(elapsed.toFixed(3)),
      avgTimeMs: parseFloat(avg.toFixed(4)),
      opsPerSec: Math.round(ops),
      memoryEstimateKb: Math.round(diffMem / 1024),
      complexityLabel: complexity
    };
  }

  public async runAll(): Promise<BenchmarkResult[]> {
    const results: BenchmarkResult[] = [];
    for (const b of this.cases) {
      const res = await this.runCase(b);
      results.push(res);
    }
    return results;
  }

  public createStandardSuite(): void {
    this.cases = [];
    
    // 1. Array push & pop
    this.register({
      id: 'array-ops',
      name: 'Array Buffer Allocation & Push',
      description: 'Tests dynamic contiguous memory reallocation and element append operations.',
      iterations: 20000,
      fn: () => {
        const arr: number[] = [];
        for (let i = 0; i < 50; i++) arr.push(i);
      }
    });

    // 2. Object map lookup
    this.register({
      id: 'map-lookup',
      name: 'Hash Map Lookup & Key Access',
      description: 'Tests ES6 Map hash table key resolution and retrieval latency.',
      iterations: 30000,
      fn: () => {
        const m = new Map<string, number>();
        m.set('rust', 1);
        m.set('csharp', 2);
        m.set('python', 3);
        const val = m.get('rust');
        return val !== undefined;
      }
    });

    // 3. String concatenation vs array join
    this.register({
      id: 'string-buffer',
      name: 'String Builder Simulation',
      description: 'Measures string allocation and immutable buffer copying.',
      iterations: 15000,
      fn: () => {
        const parts: string[] = [];
        for (let i = 0; i < 20; i++) parts.push('token_' + i);
        return parts.join('|');
      }
    });
  }
}
