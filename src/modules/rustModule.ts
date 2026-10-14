/**
 * LangSteps Rust Systems Mastery Module
 * Author: Sanskar <sanskarin@outlook.in>
 * Version: 1.0.0 (Rust 2024 Edition)
 */

export interface RustTopic {
  id: string;
  category: 'foundations' | 'ownership' | 'concurrency' | 'types' | 'advanced';
  title: string;
  summary: string;
  codeExample: string;
  tags: string[];
}

export interface RustDiagnostic {
  errorCode: string;
  name: string;
  description: string;
  cause: string;
  solution: string;
  badSnippet: string;
  goodSnippet: string;
}

export class RustModule {
  private topics: RustTopic[] = [
    {
      id: 'ownership-moves',
      category: 'ownership',
      title: 'Move Semantics & Linear Types',
      summary: 'Values have a single owner. Passing by value transfers ownership, invalidating previous binding.',
      codeExample: `fn main() {\n    let s1 = String::from("systems");\n    let s2 = s1; // s1 moved\n    println!("{s2}");\n}`,
      tags: ['ownership', 'memory', 'safety']
    },
    {
      id: 'borrowing-rules',
      category: 'ownership',
      title: 'Aliasing XOR Mutability',
      summary: 'Any number of immutable references (&T) OR exactly one mutable reference (&mut T) at any given instant.',
      codeExample: `fn main() {\n    let mut data = vec![1, 2, 3];\n    let r1 = &data;\n    let r2 = &data;\n    println!("{r1:?}, {r2:?}");\n}`,
      tags: ['borrowing', 'references', 'aliasing']
    },
    {
      id: 'lifetimes-variance',
      category: 'ownership',
      title: 'Explicit Lifetimes & Subtyping',
      summary: 'Lifetimes named parameters (\'a) guide rustc borrow checker through function reference boundaries.',
      codeExample: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}`,
      tags: ['lifetimes', 'generics', 'variance']
    },
    {
      id: 'smart-pointers',
      category: 'types',
      title: 'Box, Rc, Arc & Interior Mutability',
      summary: 'Heap allocation with Box<T>, single-thread reference counting with Rc<RefCell<T>>, cross-thread with Arc<Mutex<T>>.',
      codeExample: `use std::sync::{Arc, Mutex};\n\nlet counter = Arc::new(Mutex::new(0));\nlet c_clone = Arc::clone(&counter);`,
      tags: ['arc', 'mutex', 'heap', 'threading']
    },
    {
      id: 'concurrency-channels',
      category: 'concurrency',
      title: 'Fearless Concurrency & MPSC Channels',
      summary: 'Multi-producer, single-consumer message passing avoiding data races via Send and Sync traits.',
      codeExample: `use std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\nthread::spawn(move || { tx.send(42).unwrap(); });\nprintln!("Recv: {}", rx.recv().unwrap());`,
      tags: ['threads', 'channels', 'mpsc', 'send-sync']
    },
    {
      id: 'async-tokio',
      category: 'concurrency',
      title: 'Asynchronous Futures & Tokio Runtimes',
      summary: 'Zero-cost async/await with polling-based state machines and work-stealing multithreaded schedulers.',
      codeExample: `async fn fetch_telemetry() -> Result<u64, String> {\n    tokio::time::sleep(tokio::time::Duration::from_millis(10)).await;\n    Ok(200)\n}`,
      tags: ['async', 'tokio', 'futures', 'event-loop']
    },
    {
      id: 'traits-dynamic-dispatch',
      category: 'types',
      title: 'Monomorphization vs dyn Trait Objects',
      summary: 'Static dispatch via generics compile into optimized monomorphized code, while dyn Trait uses vtables.',
      codeExample: `trait Pipeline {\n    fn execute(&self);\n}\nfn run_static<T: Pipeline>(p: &T) { p.execute(); }\nfn run_dynamic(p: &dyn Pipeline) { p.execute(); }`,
      tags: ['traits', 'polymorphism', 'vtable', 'generics']
    },
    {
      id: 'zero-cost-abstractions',
      category: 'advanced',
      title: 'SIMD, Inline Assembly & Unsafe Rust',
      summary: 'Bypassing borrow checker constraints when building custom allocators, kernel primitives, or FFI bindings.',
      codeExample: `unsafe fn raw_memcpy(src: *const u8, dst: *mut u8, count: usize) {\n    std::ptr::copy_nonoverlapping(src, dst, count);\n}`,
      tags: ['unsafe', 'ffi', 'simd', 'performance']
    }
  ];

  private diagnostics: RustDiagnostic[] = [
    {
      errorCode: 'E0382',
      name: 'use of moved value',
      description: 'Attempted to use a variable after its ownership was transferred to another binding or function.',
      cause: 'Type does not implement the Copy trait, and assignment or pass-by-value moved ownership.',
      solution: 'Borrow by reference (&T) or clone explicitly with .clone().',
      badSnippet: 'let s1 = String::from("hi");\nlet s2 = s1;\nprintln!("{s1}");',
      goodSnippet: 'let s1 = String::from("hi");\nlet s2 = &s1;\nprintln!("{s1} and {s2}");'
    },
    {
      errorCode: 'E0499',
      name: 'cannot borrow as mutable more than once',
      description: 'Multiple simultaneous active mutable references violate Rust aliasing guarantees.',
      cause: 'Second mutable borrow occurred while the first was still in active scope.',
      solution: 'Restrict scope with braces or perform sequential mutations rather than concurrent ones.',
      badSnippet: 'let mut v = vec![1, 2];\nlet r1 = &mut v;\nlet r2 = &mut v;\nr1.push(3);',
      goodSnippet: 'let mut v = vec![1, 2];\n{\n    let r1 = &mut v;\n    r1.push(3);\n}\nlet r2 = &mut v;\nr2.push(4);'
    },
    {
      errorCode: 'E0502',
      name: 'cannot borrow as mutable because also borrowed as immutable',
      description: 'Cannot have both shared immutable references and an exclusive mutable reference.',
      cause: 'Reader-writer conflict: mutation during active read reference window.',
      solution: 'Complete all reads before beginning mutation.',
      badSnippet: 'let mut v = vec![1, 2];\nlet r = &v[0];\nv.push(3);\nprintln!("{r}");',
      goodSnippet: 'let mut v = vec![1, 2];\nlet val = v[0]; // copy primitive\nv.push(3);\nprintln!("{val}");'
    }
  ];

  public getAllTopics(): RustTopic[] {
    return [...this.topics];
  }

  public getTopicsByCategory(category: RustTopic['category']): RustTopic[] {
    return this.topics.filter(t => t.category === category);
  }

  public getDiagnostic(errorCode: string): RustDiagnostic | undefined {
    return this.diagnostics.find(d => d.errorCode.toUpperCase() === errorCode.toUpperCase());
  }

  public getAllDiagnostics(): RustDiagnostic[] {
    return [...this.diagnostics];
  }

  public searchTopics(query: string): RustTopic[] {
    const q = query.toLowerCase();
    return this.topics.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }
}
