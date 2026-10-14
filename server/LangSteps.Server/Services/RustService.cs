using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IRustService
{
    RustCurriculumDto GetCurriculum();
    IEnumerable<RustTopicDto> GetTopicsByCategory(string category);
    RustDiagnoseResponse DiagnoseError(RustDiagnoseRequest request);
}

public class RustService : IRustService
{
    private static readonly List<RustTopicDto> Topics =
    [
        new(
            "ownership-moves",
            "ownership",
            "Move Semantics & Linear Types",
            "Every value has exactly one owner at any time. Assignment transfers ownership, invalidating previous variable.",
            "fn main() {\n    let s1 = String::from(\"systems\");\n    let s2 = s1; // move\n    println!(\"{s2}\");\n}",
            ["ownership", "linear-types", "memory"]
        ),
        new(
            "borrowing-aliasing",
            "ownership",
            "Aliasing XOR Mutability",
            "You can have any number of immutable references (&T) OR exactly one mutable reference (&mut T) at any instant.",
            "fn main() {\n    let mut v = vec![1, 2, 3];\n    let r1 = &v;\n    let r2 = &v;\n    println!(\"{r1:?}, {r2:?}\");\n}",
            ["borrowing", "aliasing", "references"]
        ),
        new(
            "lifetimes-bounds",
            "ownership",
            "Named Lifetimes & Generic Bounds",
            "Lifetimes ensure references never outlive the data they point to, preventing dangling pointers at compile time.",
            "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}",
            ["lifetimes", "variance", "compile-time"]
        ),
        new(
            "smart-pointers-arc",
            "types",
            "Arc<T> & Mutex<T> Thread-Safe Shared State",
            "Atomic reference counting enables multi-threaded ownership, protected by OS mutex locking primitives.",
            "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nlet counter = Arc::new(Mutex::new(0));\nlet c = Arc::clone(&counter);\nthread::spawn(move || {\n    let mut num = c.lock().unwrap();\n    *num += 1;\n});",
            ["arc", "mutex", "threading", "concurrency"]
        ),
        new(
            "mpsc-channels",
            "concurrency",
            "Multi-Producer Single-Consumer Message Channels",
            "Communicate by sharing messages rather than sharing memory, preventing data races by design.",
            "use std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\nthread::spawn(move || tx.send(100).unwrap());\nprintln!(\"Got: {}\", rx.recv().unwrap());",
            ["mpsc", "channels", "actors", "threads"]
        ),
        new(
            "tokio-async",
            "concurrency",
            "Asynchronous Cooperative Multitasking with Tokio",
            "Futures represent state machines polled to completion by a multi-threaded work-stealing runtime.",
            "#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    tokio::time::sleep(tokio::time::Duration::from_millis(50)).await;\n    println!(\"Async complete!\");\n    Ok(())\n}",
            ["tokio", "async", "futures", "epoll"]
        ),
        new(
            "unsafe-ffi",
            "advanced",
            "C Foreign Function Interface (FFI) & Unsafe Blocks",
            "Direct zero-cost interoperability with C libraries, POSIX system calls, and hardware registers.",
            "extern \"C\" {\n    fn puts(s: *const i8) -> i32;\n}\nunsafe {\n    puts(b\"Hello C from Rust\\0\".as_ptr() as *const i8);\n}",
            ["unsafe", "ffi", "posix", "c-abi"]
        ),
        new(
            "macro-system",
            "advanced",
            "Declarative macro_rules! & Procedural Macros",
            "Compile-time abstract syntax tree metaprogramming for zero-runtime overhead code generation.",
            "macro_rules! vectorize {\n    ( $( $x:expr ),* ) => {{\n        let mut temp_vec = Vec::new();\n        $( temp_vec.push($x); )*\n        temp_vec\n    }};\n}",
            ["macros", "ast", "metaprogramming"]
        )
    ];

    private static readonly Dictionary<string, RustDiagnoseResponse> Diagnostics = new(StringComparer.OrdinalIgnoreCase)
    {
        ["E0382"] = new(
            "E0382",
            "use of moved value",
            "Borrow checker detected an attempt to use a variable after its ownership was transferred.",
            "The type does not implement the Copy trait, and assignment, function call, or closure capture moved ownership.",
            "Borrow by reference (&T) or invoke .clone() explicitly if the type implements Clone.",
            "let s1 = String::from(\"hello\");\nlet s2 = s1;\nprintln!(\"{s1}\"); // Error: s1 moved",
            "let s1 = String::from(\"hello\");\nlet s2 = &s1;\nprintln!(\"{s1} and {s2}\");",
            true
        ),
        ["E0499"] = new(
            "E0499",
            "cannot borrow as mutable more than once at a time",
            "Multiple simultaneous active mutable references violate Rust's strict aliasing guarantees.",
            "Two active exclusive borrows (&mut T) overlap in their lexical or non-lexical lifetime scopes.",
            "Restrict the scope of the first borrow with curly braces or perform operations sequentially.",
            "let mut v = vec![1, 2];\nlet r1 = &mut v;\nlet r2 = &mut v;\nr1.push(3);",
            "let mut v = vec![1, 2];\n{\n    let r1 = &mut v;\n    r1.push(3);\n}\nlet r2 = &mut v;\nr2.push(4);",
            true
        ),
        ["E0502"] = new(
            "E0502",
            "cannot borrow as mutable because also borrowed as immutable",
            "Simultaneous shared read references and exclusive write reference violate the reader-writer lock rule.",
            "A mutable reference was created while an immutable reference was still in active scope.",
            "Complete all immutable reads before beginning mutable operations.",
            "let mut v = vec![1, 2];\nlet r = &v[0];\nv.push(3);\nprintln!(\"{r}\");",
            "let mut v = vec![1, 2];\nlet val = v[0]; // Copy primitive value\nv.push(3);\nprintln!(\"{val}\");",
            true
        ),
        ["E0106"] = new(
            "E0106",
            "missing lifetime specifier",
            "Function signature returns a reference, but rustc cannot infer which input parameter it is derived from.",
            "Lifetime elision rules do not cover functions taking multiple reference parameters and returning a reference.",
            "Add explicit lifetime parameters (e.g. fn foo<'a>(x: &'a str, y: &str) -> &'a str).",
            "fn pick(x: &str, y: &str) -> &str {\n    if x.len() > y.len() { x } else { y }\n}",
            "fn pick<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}",
            true
        )
    };

    public RustCurriculumDto GetCurriculum()
    {
        var categories = Topics.Select(t => t.Category).Distinct().ToArray();
        return new RustCurriculumDto(
            "LangSteps Rust Systems Engine",
            "Rust 2024 Edition",
            Topics.Count,
            categories,
            Topics
        );
    }

    public IEnumerable<RustTopicDto> GetTopicsByCategory(string category)
    {
        return Topics.Where(t => string.Equals(t.Category, category, StringComparison.OrdinalIgnoreCase));
    }

    public RustDiagnoseResponse DiagnoseError(RustDiagnoseRequest request)
    {
        if (Diagnostics.TryGetValue(request.ErrorCode.Trim(), out var response))
        {
            return response;
        }

        return new RustDiagnoseResponse(
            request.ErrorCode,
            "Unknown Diagnostic Code",
            $"No built-in documentation found for error code '{request.ErrorCode}'.",
            "Check official rustc --explain for details.",
            "Run 'rustc --explain " + request.ErrorCode + "' in your terminal.",
            "// N/A",
            "// N/A",
            false
        );
    }
}
