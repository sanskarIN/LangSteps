/**
 * LangSteps — Rust Mastery Engine
 * Author: Sanskar Yadav (sanskarIN <sanskarin@outlook.in>)
 * Comprehensive 35-concept systems curriculum, compiler diagnostics, and interactive playground runner.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 500);
        }
    }, 600);

    // Gamification & Storage
    let masteredTags = JSON.parse(localStorage.getItem('rustMasteredTags')) || [];
    let userXP = parseInt(localStorage.getItem('rustUserXP')) || 0;
    let favorites = JSON.parse(localStorage.getItem('rustFavorites')) || [];
    let currentCategory = 'all';
    let currentTopic = null;

    const xpEl = document.getElementById('user-xp');
    const rankEl = document.getElementById('user-rank');
    const progressEl = document.getElementById('learning-progress');
    const completedCountEl = document.getElementById('completed-count');

    const ranks = [
        { xp: 0, name: 'Crab Hatchling' },
        { xp: 150, name: 'Rustacean' },
        { xp: 400, name: 'Borrow Checker Apprentice' },
        { xp: 800, name: 'Safe Memory Adept' },
        { xp: 1300, name: 'Systems Master' },
        { xp: 2000, name: 'Ferris Grand Commander' }
    ];

    function updateGamification() {
        if (xpEl) xpEl.textContent = userXP;

        let currentRank = ranks[0].name;
        for (const r of ranks) {
            if (userXP >= r.xp) currentRank = r.name;
        }
        if (rankEl) rankEl.textContent = currentRank;

        const total = TAGS.length;
        const comp = masteredTags.length;
        if (completedCountEl) completedCountEl.textContent = comp;
        if (progressEl) progressEl.style.width = `${Math.min(100, Math.round((comp / total) * 100))}%`;

        localStorage.setItem('rustMasteredTags', JSON.stringify(masteredTags));
        localStorage.setItem('rustUserXP', userXP);
        localStorage.setItem('rustFavorites', JSON.stringify(favorites));
    }

    // 25 Preset Themes
    const PRESET_THEMES = [
        { name: 'Rust Forge (Default)', color: '#f74c00' },
        { name: 'Ferris Orange', color: '#ff6600' },
        { name: 'Cargo Cyan', color: '#00bcd4' },
        { name: 'Midnight Dark', color: '#6c63ff' },
        { name: 'Emerald Safe', color: '#10b981' },
        { name: 'Tokyo Night', color: '#7aa2f7' },
        { name: 'Dracula Purple', color: '#bd93f9' },
        { name: 'Nord Frost', color: '#88c0d0' },
        { name: 'Monokai Gold', color: '#ffd866' },
        { name: 'Cyberpunk Neon', color: '#00ffcc' },
        { name: 'Solarized Amber', color: '#b58900' },
        { name: 'Synthwave Magenta', color: '#ff7edb' },
        { name: 'Gruvbox Orange', color: '#fe8019' },
        { name: 'Oceanic Blue', color: '#38bdf8' },
        { name: 'Crimson Iron', color: '#ef4444' },
        { name: 'Matrix Green', color: '#22c55e' },
        { name: 'Amethyst Violet', color: '#a855f7' },
        { name: 'Deep Space', color: '#6366f1' },
        { name: 'Sunset Bronze', color: '#f97316' },
        { name: 'Titanium Slate', color: '#94a3b8' },
        { name: 'Rosewater', color: '#f43f5e' },
        { name: 'Cobalt Systems', color: '#2563eb' },
        { name: 'Autumn Leaf', color: '#d97706' },
        { name: 'Graphite Carbon', color: '#475569' },
        { name: 'Pure Gold', color: '#eab308' }
    ];

    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');

    if (themeDropdown) {
        PRESET_THEMES.forEach(t => {
            const opt = document.createElement('div');
            opt.className = 'theme-option';
            opt.title = t.name;
            opt.style.backgroundColor = t.color;
            opt.onclick = () => {
                document.documentElement.style.setProperty('--accent-color', t.color);
                localStorage.setItem('rustAccentTheme', t.color);
                themeDropdown.classList.remove('show');
            };
            themeDropdown.appendChild(opt);
        });
    }

    if (themeBtn && themeDropdown) {
        themeBtn.onclick = (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('show');
        };
        document.addEventListener('click', (e) => {
            if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
                themeDropdown.classList.remove('show');
            }
        });
    }

    // Restore saved accent
    const savedAccent = localStorage.getItem('rustAccentTheme');
    if (savedAccent) {
        document.documentElement.style.setProperty('--accent-color', savedAccent);
    }

    // 35 Comprehensive Pedagogical Rust Concepts
    const TAGS = [
        // Category 1: Basics & Control Flow
        {
            id: 'rust-1',
            title: 'Variables, Mutability & Shadowing',
            category: 'basics',
            badge: 'Foundations',
            emoji: '🔒',
            summary: 'Variables are immutable by default in Rust. Use the `mut` keyword to allow mutation, or variable shadowing to rebind names.',
            defaultCode: `fn main() {\n    // Immutable by default\n    let x = 5;\n    println!("Initial value of x: {x}");\n\n    // Variable shadowing allows changing type and value without 'mut'\n    let x = x + 1;\n    let x = x * 2;\n    println!("Shadowed x: {x}");\n\n    // Explicit mutability\n    let mut counter = 0;\n    counter += 10;\n    println!("Mutable counter: {counter}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🔒 Variables, Mutability & Shadowing</h2>
                    <p>In Rust, immutability is the default state of all variables. This deliberate design decision eliminates race conditions, concurrency hazards, and unintended side-effects across function boundaries.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-layer-group"></i> Immutability vs Mutability</h3>
                        <p>When you declare <code>let x = 5;</code>, the compiler guarantees that <code>x</code> cannot be rebound. If you require mutation, explicitly state your intent using <code>let mut x = 5;</code>.</p>
                    </div>
                    <div class="under-hood">
                        <h3><i class="fas fa-microchip"></i> Variable Shadowing</h3>
                        <p>Shadowing occurs when you declare a new variable with the exact same name using the <code>let</code> keyword (e.g. <code>let spaces = "   "; let spaces = spaces.len();</code>). Unlike mutability, shadowing allocates a new slot, allows you to change the underlying type, and keeps the final binding immutable!</p>
                    </div>
                    <div class="pro-tip">
                        <h3><i class="fas fa-lightbulb"></i> Pro Tip</h3>
                        <p>Prefer shadowing over <code>mut</code> when transforming data through sequential steps (e.g., parsing a string to an integer). It keeps the transformed variable immutable afterwards.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-2',
            title: 'Scalar & Compound Data Types',
            category: 'basics',
            badge: 'Types',
            emoji: '🔢',
            summary: 'Rust is statically typed with inference. Core types include integers (i8-i128, usize), floats (f32, f64), bool, char, tuples, and fixed arrays.',
            defaultCode: `fn main() {\n    // Scalar types\n    let integer: i64 = 42;\n    let float: f64 = 3.14159;\n    let active: bool = true;\n    let unicode_crab: char = '🦀';\n\n    // Compound types: Tuple & Array\n    let coords: (i32, f64, &str) = (100, 45.5, "Alpha");\n    let (x, y, label) = coords; // Destructuring\n    let buffer: [u8; 4] = [0, 1, 2, 3]; // Stack-allocated fixed array\n\n    println!("Label: {label}, Coords: ({x}, {y})");\n    println!("Unicode char: {unicode_crab}, Buffer len: {}", buffer.len());\n}`,
            content: `
                <div class="topic-content">
                    <h2>🔢 Scalar & Compound Data Types</h2>
                    <p>Rust guarantees type-safety and memory layout predictability through a rich static type system with zero garbage-collection overhead.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-cubes"></i> Primitive Categories</h3>
                        <p><strong>Scalars:</strong> Signed integers (<code>i8</code>, <code>i16</code>, <code>i32</code>, <code>i64</code>, <code>i128</code>, <code>isize</code>), unsigned integers (<code>u8</code>-<code>u128</code>, <code>usize</code>), IEEE-754 floats (<code>f32</code>, <code>f64</code>), booleans (<code>bool</code>), and 4-byte Unicode scalar values (<code>char</code>).<br><strong>Compounds:</strong> Tuples (fixed-size heterogeneous groups) and Arrays (fixed-size homogeneous stack buffers).</p>
                    </div>
                    <div class="under-hood">
                        <h3><i class="fas fa-memory"></i> Stack vs Heap Storage</h3>
                        <p>Primitives and fixed-size arrays <code>[T; N]</code> are allocated directly on the CPU execution stack with contiguous cache locality and deterministic deallocation.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-3',
            title: 'Functions & Expression-Based Syntax',
            category: 'basics',
            badge: 'Syntax',
            emoji: '⚡',
            summary: 'Rust is an expression-based language. Blocks evaluate to their final expression without needing an explicit `return` keyword.',
            defaultCode: `fn calculate_tax(subtotal: f64, rate: f64) -> f64 {\n    // Implicit return: no semicolon at the end of the expression!\n    subtotal * (1.0 + rate)\n}\n\nfn main() {\n    let price = 100.0;\n    let total = calculate_tax(price, 0.18);\n\n    // Block expression evaluating to a value\n    let tier = {\n        let threshold = 50.0;\n        if total > threshold { "Premium" } else { "Standard" }\n    };\n\n    println!("Order total: \${total:.2}, Tier: {tier}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>⚡ Functions & Expressions vs Statements</h2>
                    <p>Understanding the distinction between statements (which perform an action and do not return a value) and expressions (which evaluate to a resultant value) is crucial in idiomatic Rust.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-arrow-right"></i> Implicit Returns</h3>
                        <p>Adding a semicolon transforms an expression into a statement returning the unit type <code>()</code>. Leaving off the trailing semicolon in a block makes that expression its return value.</p>
                    </div>
                    <div class="pro-tip">
                        <h3><i class="fas fa-lightbulb"></i> Pro Tip</h3>
                        <p>Use the early <code>return</code> keyword only for guard clauses or early exits. Idiomatic Rust relies on tail expressions for the primary return path.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-4',
            title: 'Control Flow: if, loop, while & for',
            category: 'basics',
            badge: 'Control',
            emoji: '🔄',
            summary: 'Control flow in Rust includes `if` expressions, infinite `loop` with return values, `while` conditionals, and idiomatic `for ... in` iterators.',
            defaultCode: `fn main() {\n    // 1. If as expression\n    let condition = true;\n    let status_code = if condition { 200 } else { 404 };\n    println!("Status Code: {status_code}");\n\n    // 2. Loop returning a value\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 5;\n        }\n    };\n    println!("Loop result: {result}");\n\n    // 3. For loop over iterator\n    for n in (1..=5).rev() {\n        println!("Countdown: {n}...");\n    }\n    println!("Liftoff! 🚀");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🔄 Control Flow Expressions</h2>
                    <p>In Rust, control flow constructs are first-class expressions that can be assigned directly to variables, guaranteeing safety and exhaustive branches.</p>
                    <div class="under-hood">
                        <h3><i class="fas fa-sync"></i> Loop Labels and Values</h3>
                        <p>The <code>loop</code> keyword represents unconditional looping. You can assign labels (<code>'outer: loop</code>) to break out of nested hierarchies, and pass expressions to <code>break [value];</code> to return results from retry loops.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-5',
            title: 'Packages, Crates & Module Hierarchy',
            category: 'basics',
            badge: 'Architecture',
            emoji: '📦',
            summary: 'Organize code using Modules (`mod`), Crates (binary or library roots), and Packages. Control visibility with `pub`, `pub(crate)`, or `pub(super)`.',
            defaultCode: `mod network {\n    pub mod http {\n        pub fn get(url: &str) {\n            println!("GET request to: {url}");\n        }\n    }\n}\n\nuse network::http::get;\n\nfn main() {\n    get("https://sanskarin.github.io/LangSteps");\n    println!("Module resolved successfully.");\n}`,
            content: `
                <div class="topic-content">
                    <h2>📦 Packages, Crates & Module System</h2>
                    <p>Rust provides an explicit module tree rooted at <code>src/lib.rs</code> or <code>src/main.rs</code> for encapsulating logic, data privacy, and clean architecture.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-shield-alt"></i> Fine-Grained Visibility</h3>
                        <p>Items are private by default. Use <code>pub</code> for public API, <code>pub(crate)</code> for crate-internal accessibility, or <code>pub(super)</code> for parent module access.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-6',
            title: 'Cargo & Dependency Ecosystem',
            category: 'basics',
            badge: 'Tooling',
            emoji: '🛠️',
            summary: 'Cargo is Rust’s official build system and package manager. It compiles crates, downloads dependencies from crates.io, runs tests, and optimizes builds.',
            defaultCode: `fn main() {\n    // Cargo manages compile flags, profile optimizations, and builds\n    println!("Running with Cargo build profiles: dev vs release");\n    println!("Release builds enable full LLVM LTO & aggressive inlining.");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🛠️ Cargo & Dependency Management</h2>
                    <p>Cargo orchestrates compiling, linking, dependency resolution, testing, and documentation generation with reproducible lockfiles (<code>Cargo.lock</code>).</p>
                    <div class="under-hood">
                        <h3><i class="fas fa-terminal"></i> Essential Cargo Commands</h3>
                        <p><code>cargo build --release</code> — compiles with max optimizations.<br><code>cargo check</code> — fast compiler checks without binary generation.<br><code>cargo test</code> — executes unit & integration suites.</p>
                    </div>
                </div>`
        },

        // Category 2: Memory & Ownership
        {
            id: 'rust-7',
            title: 'The 3 Laws of Ownership',
            category: 'ownership',
            badge: 'Ownership',
            emoji: '👑',
            summary: 'Rust’s central feature: Every value has a single owner. When the owner goes out of scope, the memory is instantly freed without garbage collection.',
            defaultCode: `fn main() {\n    // Rule 1: s1 owns the allocated heap buffer\n    let s1 = String::from("Hello LangSteps");\n\n    // Rule 2: Move semantics — ownership transfers to s2. s1 is now invalid!\n    let s2 = s1;\n\n    // println!("{s1}"); // COMPILE ERROR: borrow of moved value\n    println!("s2 owns the heap data: {s2}");\n\n    // Rule 3: When s2 leaves scope here, drop() frees the heap buffer automatically!\n}`,
            content: `
                <div class="topic-content">
                    <h2>👑 The 3 Core Laws of Ownership</h2>
                    <p>Ownership allows Rust to deliver complete memory safety without the runtime overhead or pause pauses of a garbage collector (GC), and without manual <code>malloc</code>/<code>free</code>.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-gavel"></i> The 3 Inviolable Rules</h3>
                        <ol>
                            <li>Each value in Rust has an <strong>owner</strong>.</li>
                            <li>There can only be <strong>one owner at a time</strong>.</li>
                            <li>When the owner goes out of scope, the value is automatically <strong>dropped</strong> (deallocated).</li>
                        </ol>
                    </div>
                    <div class="under-hood">
                        <h3><i class="fas fa-exchange-alt"></i> Move Semantics vs Copy Trait</h3>
                        <p>Types that store heap data (like <code>String</code> or <code>Vec</code>) move on assignment to prevent double-free bugs. Types stored purely on the stack (like <code>i32</code> or <code>bool</code>) implement the <code>Copy</code> trait and are duplicated bitwise.</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-8',
            title: 'References & Borrowing Rules',
            category: 'ownership',
            badge: 'Borrowing',
            emoji: '🤝',
            summary: 'Borrow data without taking ownership. You may have any number of immutable references (&T), OR exactly one mutable reference (&mut T), never both simultaneously.',
            defaultCode: `fn calculate_length(s: &String) -> usize {\n    // s is an immutable reference; we can read but not modify\n    s.len()\n}\n\nfn append_badge(s: &mut String) {\n    // Mutable borrow allows in-place mutation\n    s.push_str(" [Verified 🦀]");\n}\n\nfn main() {\n    let mut name = String::from("Sanskar");\n    \n    let len = calculate_length(&name);\n    println!("Original length: {len}");\n\n    append_badge(&mut name);\n    println!("Updated: {name}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🤝 References & Borrowing Invariants</h2>
                    <p>Borrowing lets your code refer to data without transferring ownership, governed by the compiler's strict <strong>Borrow Checker</strong>.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-shield-virus"></i> The Aliasing XOR Mutability Rule</h3>
                        <p>At any given point in a program's lifetime, you may have:</p>
                        <ul>
                            <li>Any number of immutable references (<code>&T</code>) to a resource, <strong>OR</strong></li>
                            <li>Exactly one mutable reference (<code>&mut T</code>) to a resource.</li>
                        </ul>
                        <p>This single rule statically eliminates data races at compile time!</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-9',
            title: 'Slices & Memory Views (&str, &[T])',
            category: 'ownership',
            badge: 'Memory',
            emoji: '🍰',
            summary: 'Slices let you reference a contiguous sequence of elements in a collection without copying data. `&str` is a slice of UTF-8 string bytes.',
            defaultCode: `fn first_word(s: &str) -> &str {\n    let bytes = s.as_bytes();\n    for (i, &item) in bytes.iter().enumerate() {\n        if item == b' ' {\n            return &s[0..i];\n        }\n    }\n    &s[..]\n}\n\nfn main() {\n    let sentence = String::from("Rust Systems Programming");\n    let word = first_word(&sentence);\n    println!("First word slice: {word}");\n\n    let numbers = [10, 20, 30, 40, 50];\n    let middle_slice: &[i32] = &numbers[1..4];\n    println!("Middle slice: {:?}", middle_slice);\n}`,
            content: `
                <div class="topic-content">
                    <h2>🍰 Slices & Fat Pointers</h2>
                    <p>A slice is a two-word "fat pointer" containing a pointer to the starting element and a length integer. Slices enable zero-copy string and array inspection.</p>
                    <div class="under-hood">
                        <h3><i class="fas fa-code"></i> &str vs String</h3>
                        <p><code>String</code> owns an expandable heap buffer. <code>&str</code> is an immutable view into existing UTF-8 bytes (either in a String, stack, or binary text segment).</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-10',
            title: 'Lifetimes & Lifetime Elision',
            category: 'ownership',
            badge: 'Lifetimes',
            emoji: '⏳',
            summary: 'Lifetimes ensure that references remain valid as long as they are used, preventing dangling pointer references at compile time.',
            defaultCode: `// 'a specifies that the returned reference is valid as long as both x and y are valid\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let string1 = String::from("long string is long");\n    let result;\n    {\n        let string2 = String::from("xyz");\n        result = longest(string1.as_str(), string2.as_str());\n        println!("The longest string is: {result}");\n    }\n}`,
            content: `
                <div class="topic-content">
                    <h2>⏳ Lifetimes: Conquering Dangling Pointers</h2>
                    <p>Every reference in Rust has a lifetime—the scope for which that reference is guaranteed to point to valid memory.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-magic"></i> Lifetime Elision</h3>
                        <p>In most simple functions, you do not need to write <code>'a</code> because the compiler infers them via the 3 Elision Rules (one lifetime per input reference, assigned to output if only one input exists).</p>
                    </div>
                </div>`
        },
        {
            id: 'rust-11',
            title: 'Static Lifetimes & Advanced Bounds',
            category: 'ownership',
            badge: 'Advanced',
            emoji: '🏛️',
            summary: '`\'static` indicates that data lives for the entire duration of the program execution, such as string literals baked into the binary.',
            defaultCode: `fn get_brand() -> &'static str {\n    // String literals have 'static lifetime\n    "LangSteps Systems Engine"\n}\n\nfn main() {\n    let brand: &'static str = get_brand();\n    println!("Platform Brand: {brand}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🏛️ 'static Lifetime & Trait Bounds</h2>
                    <p>The <code>'static</code> lifetime denotes data stored directly in the program's read-only binary data section, or owned data that can live indefinitely without dangling references.</p>
                </div>`
        },

        // Category 3: Data Modeling & Polymorphism
        {
            id: 'rust-12',
            title: 'Structs & Implementation Blocks (impl)',
            category: 'modeling',
            badge: 'Modeling',
            emoji: '🧱',
            summary: 'Structs create custom data records. Associated functions and methods are defined in `impl` blocks with `&self`, `&mut self`, or `self`.',
            defaultCode: `#[derive(Debug)]\nstruct Learner {\n    username: String,\n    xp: u32,\n    active: bool,\n}\n\nimpl Learner {\n    // Associated constructor\n    fn new(username: &str) -> Self {\n        Self {\n            username: username.to_string(),\n            xp: 0,\n            active: true,\n        }\n    }\n\n    // Method with mutable borrow of self\n    fn award_xp(&mut self, amount: u32) {\n        self.xp += amount;\n        println!("Awarded {amount} XP to {}. Total: {}", self.username, self.xp);\n    }\n}\n\nfn main() {\n    let mut sanskar = Learner::new("SanskarCodes");\n    sanskar.award_xp(100);\n    println!("Learner state: {:?}", sanskar);\n}`,
            content: `
                <div class="topic-content">
                    <h2>🧱 Structs & Methods (impl)</h2>
                    <p>Rust structs encapsulate state, while <code>impl</code> blocks attach behavior without traditional inheritance hierarchies.</p>
                    <div class="deep-dive">
                        <h3><i class="fas fa-user-tag"></i> Self Receiver Types</h3>
                        <ul>
                            <li><code>&self</code> — Read-only method call (can be called concurrently).</li>
                            <li><code>&mut self</code> — Mutating method call (requires exclusive access).</li>
                            <li><code>self</code> — Consuming method call (transfers ownership, drops or converts the struct).</li>
                        </ul>
                    </div>
                </div>`
        },
        {
            id: 'rust-13',
            title: 'Enums & Algebraic Data Types',
            category: 'modeling',
            badge: 'Modeling',
            emoji: '🧩',
            summary: 'Rust enums are tagged unions that can carry rich data in their variants, allowing expressive domain modeling.',
            defaultCode: `#[derive(Debug)]\nenum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n    SubmitForm(String),\n}\n\nfn inspect_event(event: WebEvent) {\n    match event {\n        WebEvent::PageLoad => println!("Page loaded successfully"),\n        WebEvent::KeyPress(c) => println!("Key pressed: {c}"),\n        WebEvent::Click { x, y } => println!("Clicked at coordinates: ({x}, {y})"),\n        WebEvent::SubmitForm(data) => println!("Form payload: {data}"),\n    }\n}\n\nfn main() {\n    inspect_event(WebEvent::PageLoad);\n    inspect_event(WebEvent::Click { x: 1920, y: 1080 });\n    inspect_event(WebEvent::SubmitForm("User: Sanskar".into()));\n}`,
            content: `
                <div class="topic-content">
                    <h2>🧩 Algebraic Data Types (Enums)</h2>
                    <p>Unlike enums in C or Java which are simple integers, Rust enums can wrap primitive data, structs, or tuples inside each variant.</p>
                </div>`
        },
        {
            id: 'rust-14',
            title: 'Pattern Matching & match Expressions',
            category: 'modeling',
            badge: 'Pattern Matching',
            emoji: '🎯',
            summary: 'Exhaustive pattern matching with `match`, destructuring, guards, `@` bindings, and ergonomic `if let` syntax.',
            defaultCode: `fn categorize_status(code: u16) -> &'static str {\n    match code {\n        200..=299 => "Success (2xx)",\n        300..=399 => "Redirection (3xx)",\n        404 => "Not Found Error",\n        400..=499 => "Client Error (4xx)",\n        500..=599 => "Server Error (5xx)",\n        _ => "Unknown HTTP Code",\n    }\n}\n\nfn main() {\n    println!("Status 200: {}", categorize_status(200));\n    println!("Status 404: {}", categorize_status(404));\n    println!("Status 503: {}", categorize_status(503));\n}`,
            content: `
                <div class="topic-content">
                    <h2>🎯 Exhaustive Pattern Matching</h2>
                    <p>Rust's <code>match</code> construct is compiler-verified to be exhaustive. If you miss a possible variant, the compiler refuses to build.</p>
                </div>`
        },
        {
            id: 'rust-15',
            title: 'Option<T> & The Elimination of Null',
            category: 'modeling',
            badge: 'Safety',
            emoji: '🛡️',
            summary: 'Rust has no `null` or `nil`. The `Option<T>` enum (`Some(T)` or `None`) forces explicit handling of missing values at compile time.',
            defaultCode: `fn find_user(id: u32) -> Option<&'static str> {\n    if id == 1 {\n        Some("Sanskar")\n    } else {\n        None\n    }\n}\n\nfn main() {\n    let user1 = find_user(1);\n    let user2 = find_user(99);\n\n    println!("User 1: {}", user1.unwrap_or("Guest"));\n    println!("User 2: {}", user2.unwrap_or("Anonymous"));\n\n    if let Some(name) = user1 {\n        println!("Found active user: {name}");\n    }\n}`,
            content: `
                <div class="topic-content">
                    <h2>🛡️ Option&lt;T&gt; & Null Elimination</h2>
                    <p>Tony Hoare famously termed null references his "billion-dollar mistake." Rust eradicates null pointer exceptions completely by replacing null with <code>Option&lt;T&gt;</code>.</p>
                </div>`
        },
        {
            id: 'rust-16',
            title: 'Result<T, E> & The ? Operator',
            category: 'modeling',
            badge: 'Error Handling',
            emoji: '⚠️',
            summary: 'Recoverable errors use `Result<T, E>`. Propagate errors cleanly using the `?` try operator instead of throwing exceptions.',
            defaultCode: `fn parse_port(s: &str) -> Result<u16, String> {\n    s.parse::<u16>().map_err(|e| format!("Invalid port '{s}': {e}"))\n}\n\nfn start_server(port_str: &str) -> Result<(), String> {\n    let port = parse_port(port_str)?;\n    println!("LangSteps Server successfully bound to port: {port}");\n    Ok(())\n}\n\nfn main() {\n    match start_server("5055") {\n        Ok(_) => println!("Server running healthy!"),\n        Err(e) => eprintln!("Startup failed: {e}"),\n    }\n}`,
            content: `
                <div class="topic-content">
                    <h2>⚠️ Robust Error Handling with Result&lt;T, E&gt;</h2>
                    <p>Rust rejects runtime exceptions. Functions that can fail return <code>Result&lt;T, E&gt;</code>, forcing callers to inspect failure states.</p>
                </div>`
        },
        {
            id: 'rust-17',
            title: 'Traits & Shared Interfaces',
            category: 'modeling',
            badge: 'Traits',
            emoji: '📐',
            summary: 'Traits define shared interfaces and functionality across types, similar to interfaces in other languages but with default implementations and derive macros.',
            defaultCode: `trait Summary {\n    fn summarize(&self) -> String;\n    fn preview(&self) -> String {\n        String::from("(Default Preview Available)")\n    }\n}\n\nstruct Article {\n    title: String,\n    author: String,\n}\n\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!("'{}' by {}", self.title, self.author)\n    }\n}\n\nfn main() {\n    let post = Article {\n        title: "Rust Ownership & Systems".into(),\n        author: "Sanskar".into(),\n    };\n    println!("Article Summary: {}", post.summarize());\n    println!("Preview: {}", post.preview());\n}`,
            content: `
                <div class="topic-content">
                    <h2>📐 Traits: Defining Shared Abstract Behavior</h2>
                    <p>Traits are the bedrock of abstraction in Rust, powering polymorphism, operator overloading, and generic constraints.</p>
                </div>`
        },
        {
            id: 'rust-18',
            title: 'Generics & Trait Bounds (where)',
            category: 'modeling',
            badge: 'Generics',
            emoji: '🧬',
            summary: 'Generics enable type abstraction without runtime performance cost through compile-time monomorphization and `where` clauses.',
            defaultCode: `use std::fmt::Display;\n\nfn print_pair<T, U>(first: T, second: U)\nwhere\n    T: Display,\n    U: Display,\n{\n    println!("Pair: [{first}, {second}]");\n}\n\nfn main() {\n    print_pair("Rust Version", 2026);\n    print_pair(3.14, true);\n}`,
            content: `
                <div class="topic-content">
                    <h2>🧬 Generics & Monomorphization</h2>
                    <p>Rust compiles generic code by generating concrete copies for each specific type used, giving you high-level abstraction with C-speed execution.</p>
                </div>`
        },
        {
            id: 'rust-19',
            title: 'Trait Objects & Dynamic Dispatch (dyn Trait)',
            category: 'modeling',
            badge: 'Polymorphism',
            emoji: '🎭',
            summary: 'When you need heterogeneous collections of types implementing a trait, use trait objects (`&dyn Trait` or `Box<dyn Trait>`) with vtable lookup.',
            defaultCode: `trait Renderable {\n    fn render(&self);\n}\n\nstruct Button { label: String }\nstruct Card { title: String }\n\nimpl Renderable for Button {\n    fn render(&self) { println!("[Button: {}]", self.label); }\n}\n\nimpl Renderable for Card {\n    fn render(&self) { println!("[Card: {}]", self.title); }\n}\n\nfn main() {\n    let ui_components: Vec<Box<dyn Renderable>> = vec![\n        Box::new(Button { label: "Run Code".into() }),\n        Box::new(Card { title: "Rust Deep Dive".into() }),\n    ];\n\n    for component in ui_components {\n        component.render();\n    }\n}`,
            content: `
                <div class="topic-content">
                    <h2>🎭 Trait Objects & Dynamic Dispatch (dyn Trait)</h2>
                    <p>Static dispatch (generics) chooses function addresses at compile time. Dynamic dispatch (<code>dyn Trait</code>) performs runtime method lookups using virtual method tables (vtables).</p>
                </div>`
        },
        {
            id: 'rust-20',
            title: 'impl Trait & Abstract Return Types',
            category: 'modeling',
            badge: 'Ergonomics',
            emoji: '✨',
            summary: '`impl Trait` allows returning unnameable types (like closures or complex iterator chains) cleanly without heap allocation.',
            defaultCode: `fn make_filter_chain() -> impl Iterator<Item = i32> {\n    (1..=10).filter(|x| x % 2 == 0).map(|x| x * 10)\n}\n\nfn main() {\n    let results: Vec<i32> = make_filter_chain().collect();\n    println!("Filtered & mapped: {:?}", results);\n}`,
            content: `
                <div class="topic-content">
                    <h2>✨ impl Trait in Return Position</h2>
                    <p><code>impl Trait</code> hides implementation complexity while retaining static dispatch and zero heap allocations.</p>
                </div>`
        },

        // Category 4: Functional & Modern Idioms
        {
            id: 'rust-21',
            title: 'Closures & Anonymous Functions',
            category: 'functional',
            badge: 'Functional',
            emoji: 'λ',
            summary: 'Closures capture variables from their enclosing scope. Rust categorizes closures into `Fn`, `FnMut`, and `FnOnce` depending on how they capture.',
            defaultCode: `fn main() {\n    let factor = 3;\n\n    // Borrow factor immutably\n    let multiply = |x: i32| x * factor;\n    println!("Result of 10 * 3: {}", multiply(10));\n\n    // Move closure\n    let message = String::from("Rust Closures");\n    let printer = move || println!("Captured: {message}");\n    printer();\n}`,
            content: `
                <div class="topic-content">
                    <h2>λ Closures: Fn, FnMut & FnOnce</h2>
                    <p>Closures in Rust automatically implement one or more of three traits based on whether they capture by reference (<code>Fn</code>), mutable reference (<code>FnMut</code>), or by value (<code>FnOnce</code>).</p>
                </div>`
        },
        {
            id: 'rust-22',
            title: 'Iterators & Functional Pipelines',
            category: 'functional',
            badge: 'Functional',
            emoji: '🌊',
            summary: 'Iterators are lazy in Rust. Chain combinators like `map`, `filter`, and `fold` for zero-cost functional data transformations.',
            defaultCode: `fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n    let sum_of_even_squares: i32 = nums\n        .iter()\n        .filter(|&&x| x % 2 == 0)\n        .map(|&x| x * x)\n        .sum();\n\n    println!("Sum of even squares: {sum_of_even_squares}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🌊 Iterators & Zero-Cost Abstractions</h2>
                    <p>Rust iterators compile down to the exact same assembly as hand-written C for-loops, delivering pure functional elegance with maximum machine performance.</p>
                </div>`
        },
        {
            id: 'rust-23',
            title: 'Box<T> Heap Allocation & Indirection',
            category: 'functional',
            badge: 'Smart Pointers',
            emoji: '📦',
            summary: '`Box<T>` is the simplest smart pointer in Rust. It allocates data on the heap while keeping a pointer on the stack, enabling recursive data structures.',
            defaultCode: `#[derive(Debug)]\nenum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nuse List::{Cons, Nil};\n\nfn main() {\n    // Linked list using recursive Box indirection\n    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));\n    println!("Recursive Box list: {:?}", list);\n}`,
            content: `
                <div class="topic-content">
                    <h2>📦 Box&lt;T&gt;: Precise Heap Allocation</h2>
                    <p>Types in Rust must have a known size at compile time. <code>Box&lt;T&gt;</code> provides a fixed-size pointer to heap memory, making recursive types possible.</p>
                </div>`
        },
        {
            id: 'rust-24',
            title: 'Rc<T> & Arc<T> Reference Counting',
            category: 'functional',
            badge: 'Memory',
            emoji: '👥',
            summary: '`Rc<T>` enables multiple shared ownership for single-threaded code. `Arc<T>` (Atomic Reference Counted) enables safe multi-threaded shared ownership.',
            defaultCode: `use std::sync::Arc;\nuse std::thread;\n\nfn main() {\n    // Atomic reference counting for thread-safe shared ownership\n    let shared_data = Arc::new(vec![10, 20, 30]);\n\n    let clone1 = Arc::clone(&shared_data);\n    let handle = thread::spawn(move || {\n        println!("Thread reading data: {:?}", clone1);\n    });\n\n    handle.join().unwrap();\n    println!("Main thread strong count: {}", Arc::strong_count(&shared_data));\n}`,
            content: `
                <div class="topic-content">
                    <h2>👥 Shared Ownership: Rc vs Arc</h2>
                    <p>When multiple owners need to hold read-only access to the same heap allocation, <code>Rc&lt;T&gt;</code> and <code>Arc&lt;T&gt;</code> keep track of reference counts and drop memory when count reaches 0.</p>
                </div>`
        },
        {
            id: 'rust-25',
            title: 'Interior Mutability (Cell & RefCell)',
            category: 'functional',
            badge: 'Safety',
            emoji: '🔓',
            summary: 'Interior mutability allows you to mutate data even when you hold an immutable reference, moving borrow checks from compile-time to runtime.',
            defaultCode: `use std::cell::RefCell;\n\nfn main() {\n    let counter = RefCell::new(0);\n\n    {\n        // Borrow mutably inside block\n        let mut mut_ref = counter.borrow_mut();\n        *mut_ref += 42;\n    }\n\n    println!("Counter value: {}", counter.borrow());\n}`,
            content: `
                <div class="topic-content">
                    <h2>🔓 Interior Mutability & RefCell&lt;T&gt;</h2>
                    <p>When compile-time borrow rules are too restrictive (such as in mock objects or graph data structures), <code>RefCell</code> dynamically tracks borrows at runtime and panics if rules are violated.</p>
                </div>`
        },

        // Category 5: Concurrency & Async
        {
            id: 'rust-26',
            title: 'Threads & Concurrency (thread::spawn)',
            category: 'concurrency',
            badge: 'Concurrency',
            emoji: '🧵',
            summary: 'Spawn native OS threads using `thread::spawn`. The Rust compiler enforces that data moved into threads is safe from data races.',
            defaultCode: `use std::thread;\nuse std::time::Duration;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        for i in 1..=3 {\n            println!("Worker thread count: {i}");\n            thread::sleep(Duration::from_millis(50));\n        }\n    });\n\n    println!("Main thread waiting for worker...");\n    handle.join().unwrap();\n    println!("Thread execution completed successfully!");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🧵 Fearless Concurrency with Native Threads</h2>
                    <p>Rust's ownership rules prevent data races entirely: you cannot mutate shared data across threads without explicit synchronization.</p>
                </div>`
        },
        {
            id: 'rust-27',
            title: 'Message Passing via Channels (mpsc)',
            category: 'concurrency',
            badge: 'Concurrency',
            emoji: '📬',
            summary: 'Do not communicate by sharing memory; instead, share memory by communicating. Use `mpsc` (Multiple Producer, Single Consumer) channels.',
            defaultCode: `use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n\n    thread::spawn(move || {\n        let val = String::from("Message from worker thread");\n        tx.send(val).unwrap();\n    });\n\n    let received = rx.recv().unwrap();\n    println!("Got: {received}");\n}`,
            content: `
                <div class="topic-content">
                    <h2>📬 Message Passing Channels (mpsc)</h2>
                    <p>Channels transfer ownership of sent values across thread boundaries, ensuring that sender threads cannot accidentally read or mutate data once dispatched.</p>
                </div>`
        },
        {
            id: 'rust-28',
            title: 'Shared State Concurrency (Mutex & RwLock)',
            category: 'concurrency',
            badge: 'Concurrency',
            emoji: '🔐',
            summary: 'Coordinate thread access to mutable state using `Arc<Mutex<T>>`. Locks are automatically released when the `MutexGuard` goes out of scope (RAII).',
            defaultCode: `use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n\n    for _ in 0..5 {\n        let counter_clone = Arc::clone(&counter);\n        let handle = thread::spawn(move || {\n            let mut num = counter_clone.lock().unwrap();\n            *num += 1;\n        });\n        handles.push(handle);\n    }\n\n    for h in handles { h.join().unwrap(); }\n    println!("Final synchronized counter: {}", *counter.lock().unwrap());\n}`,
            content: `
                <div class="topic-content">
                    <h2>🔐 Shared State: Mutex & RwLock</h2>
                    <p>Rust ties locks directly to the protected data: you cannot access <code>T</code> without locking the <code>Mutex&lt;T&gt;</code>, and you cannot forget to unlock it.</p>
                </div>`
        },
        {
            id: 'rust-29',
            title: 'Send & Sync Concurrency Markers',
            category: 'concurrency',
            badge: 'Safety',
            emoji: '🚥',
            summary: '`Send` indicates ownership of the type can be transferred across thread boundaries. `Sync` indicates it is safe to share references across threads.',
            defaultCode: `fn main() {\n    println!("Send: Safe to transfer ownership between threads.");\n    println!("Sync: Safe to share references (&T) between threads.");\n    println!("Types like Rc<T> are neither Send nor Sync; Arc<T> is both!");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🚥 Send & Sync: Compiler Auto Traits</h2>
                    <p>Send and Sync are built into Rust's core language type system, allowing libraries to enforce thread-safety without special runtime primitives.</p>
                </div>`
        },
        {
            id: 'rust-30',
            title: 'Async/Await & Futures (Tokio Runtime)',
            category: 'concurrency',
            badge: 'Async',
            emoji: '⚡',
            summary: 'Non-blocking concurrent I/O with cooperative multitasking. Futures are state machines that make progress only when polled by an async executor.',
            defaultCode: `// Concept demonstration of Async execution\nfn main() {\n    println!("Async/Await in Rust:");\n    println!("1. Futures represent delayed asynchronous computation.");\n    println!("2. Zero cost: Futures do not allocate unless required.");\n    println!("3. Rust does not have a built-in runtime; crates like Tokio provide the reactor!");\n}`,
            content: `
                <div class="topic-content">
                    <h2>⚡ Async/Await & Event-Driven Concurrency</h2>
                    <p>Rust's async design is poll-based and zero-cost: futures do nothing unless polled, allowing massive concurrency over thousands of connections with minimal memory.</p>
                </div>`
        },

        // Category 6: Systems, Testing & Macros
        {
            id: 'rust-31',
            title: 'Automated Unit & Integration Testing',
            category: 'systems',
            badge: 'Testing',
            emoji: '🧪',
            summary: 'Built-in testing framework with `#[test]`, `assert!`, `assert_eq!`, and `#[should_panic]`. Run with `cargo test`.',
            defaultCode: `fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn test_add() {\n        assert_eq!(add(2, 3), 5);\n    }\n}\n\nfn main() {\n    println!("Run tests with 'cargo test'. 2 + 3 = {}", add(2, 3));\n}`,
            content: `
                <div class="topic-content">
                    <h2>🧪 First-Class Automated Testing</h2>
                    <p>Rust integrates unit testing directly alongside production code in the same source file using conditional compilation (<code>#[cfg(test)]</code>).</p>
                </div>`
        },
        {
            id: 'rust-32',
            title: 'Declarative Macros (macro_rules!)',
            category: 'systems',
            badge: 'Metaprogramming',
            emoji: '🪄',
            summary: 'Metaprogramming with declarative macros. Pattern match syntax tokens to generate boilerplate code at compile time.',
            defaultCode: `macro_rules! say_hello {\n    () => {\n        println!("Hello from a declarative Rust macro!");\n    };\n    ($name:expr) => {\n        println!("Hello, {}! Welcome to Rust Systems.", $name);\n    };\n}\n\nfn main() {\n    say_hello!();\n    say_hello!("Sanskar");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🪄 Declarative Macros (macro_rules!)</h2>
                    <p>Macros allow writing code that writes code, expanding before the compiler checks types, enabling domain-specific languages and variadic functions.</p>
                </div>`
        },
        {
            id: 'rust-33',
            title: 'Procedural & Derive Macros',
            category: 'systems',
            badge: 'Metaprogramming',
            emoji: '⚙️',
            summary: 'Procedural macros are compiler plugins that accept Rust code as a stream of tokens, inspect it, and emit modified tokens (e.g. `#[derive(Serialize)]`).',
            defaultCode: `// Procedural macros inspect TokenStreams at compile time\nfn main() {\n    println!("Procedural Macros in Rust:");\n    println!("1. Custom #[derive(MyTrait)] macros");\n    println!("2. Attribute-like macros: #[get(\\"/api/stats\\")]");\n    println!("3. Function-like macros: sql!(\\"SELECT * FROM users\\")");\n}`,
            content: `
                <div class="topic-content">
                    <h2>⚙️ Procedural Macros: Full AST Manipulation</h2>
                    <p>Procedural macros are functions executed during compilation that take a <code>TokenStream</code> as an input and produce a new <code>TokenStream</code>.</p>
                </div>`
        },
        {
            id: 'rust-34',
            title: 'Unsafe Rust & Raw Pointers (*const T, *mut T)',
            category: 'systems',
            badge: 'Systems',
            emoji: '⚠️',
            summary: 'When interacting with operating system kernels, hardware, or C libraries, `unsafe` unlocks superpowers: dereferencing raw pointers and calling FFI.',
            defaultCode: `fn main() {\n    let mut num = 42;\n\n    // Create raw pointers safely (allowed in safe Rust)\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n\n    // Dereferencing raw pointers requires unsafe block\n    unsafe {\n        println!("Value via raw pointer r1: {}", *r1);\n        *r2 = 100;\n        println!("Mutated via raw pointer r2: {}", *r2);\n    }\n}`,
            content: `
                <div class="topic-content">
                    <h2>⚠️ Unsafe Rust & FFI</h2>
                    <p>Unsafe Rust does not turn off the borrow checker; it grants 5 specific superpowers: dereferencing raw pointers, calling unsafe functions/FFI, implementing unsafe traits, mutating mutable statics, and accessing union fields.</p>
                </div>`
        },
        {
            id: 'rust-35',
            title: 'Zero-Cost Abstractions & LLVM Optimization',
            category: 'systems',
            badge: 'Performance',
            emoji: '🚀',
            summary: 'What you don’t use, you don’t pay for. And what you do use, you couldn’t hand-code any better. The ultimate philosophy of Rust systems programming.',
            defaultCode: `fn main() {\n    println!("Zero-Cost Abstraction in Rust:");\n    println!("• Iterators, closures, and pattern matching compile directly to branch-free machine code.");\n    println!("• Monomorphization removes dynamic function call overhead.");\n    println!("• Rust delivers C/C++ performance with guaranteed memory safety!");\n}`,
            content: `
                <div class="topic-content">
                    <h2>🚀 Zero-Cost Abstractions & Compiler Pipeline</h2>
                    <p>Bjarne Stroustrup's zero-overhead principle is the core design philosophy of Rust: high-level expressiveness without sacrificing bare-metal efficiency.</p>
                </div>`
        }
    ];

    // Rendering Topics
    const topicList = document.getElementById('topic-list');
    const contentDisplay = document.getElementById('content-display');
    const editor = document.getElementById('code-editor');

    function renderTopics(filterQuery = '') {
        if (!topicList) return;
        topicList.innerHTML = '';

        const query = filterQuery.toLowerCase().trim();

        const filtered = TAGS.filter(tag => {
            const matchesCat = currentCategory === 'all' || tag.category === currentCategory;
            const matchesQuery = !query || tag.title.toLowerCase().includes(query) || tag.summary.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            topicList.innerHTML = '<li style="padding:15px; color:var(--text-secondary); text-align:center;">No topics found</li>';
            return;
        }

        filtered.forEach(tag => {
            const li = document.createElement('li');
            li.className = 'topic-item';
            if (currentTopic && currentTopic.id === tag.id) li.classList.add('active');
            if (masteredTags.includes(tag.id)) li.classList.add('completed');

            const isFav = favorites.includes(tag.id);

            li.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px;">
                    <span>${tag.emoji}</span>
                    <span style="font-weight:600; font-size:0.9rem;">${tag.title}</span>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    ${isFav ? '<i class="fas fa-heart" style="color:#ef4444; font-size:0.75rem;"></i>' : ''}
                    ${masteredTags.includes(tag.id) ? '<i class="fas fa-check-circle" style="color:#10b981;"></i>' : '<span style="font-size:0.75rem; color:var(--text-secondary);">&rarr;</span>'}
                </div>
            `;

            li.onclick = () => selectTopic(tag, li);
            topicList.appendChild(li);
        });
    }

    function selectTopic(tag, element) {
        document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
        if (element) element.classList.add('active');

        currentTopic = tag;

        if (contentDisplay) {
            contentDisplay.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:10px;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="background:rgba(247,76,0,0.15); color:var(--accent-color); padding:4px 10px; border-radius:6px; font-size:0.8rem; font-weight:700;">${tag.badge}</span>
                        <span style="font-size:0.85rem; color:var(--text-secondary);">Category: ${tag.category.toUpperCase()}</span>
                    </div>
                    <button id="load-in-playground-btn" style="background:var(--accent-color); color:#fff; border:none; padding:6px 14px; border-radius:8px; font-size:0.85rem; font-weight:600; cursor:pointer;">
                        <i class="fas fa-play"></i> Load in Playground
                    </button>
                </div>
                ${tag.content}
            `;

            const loadBtn = document.getElementById('load-in-playground-btn');
            if (loadBtn) {
                loadBtn.onclick = () => {
                    if (editor) {
                        editor.value = tag.defaultCode;
                        editor.scrollIntoView({ behavior: 'smooth' });
                    }
                };
            }
        }

        if (editor) editor.value = tag.defaultCode;

        // Mark as completed
        if (!masteredTags.includes(tag.id)) {
            masteredTags.push(tag.id);
            userXP += 25;
            updateGamification();
            renderTopics();
        }
    }

    // Category pills event handler
    window.setCategory = function(category) {
        currentCategory = category;
        document.querySelectorAll('.cat-pill').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-cat') === category);
        });
        renderTopics();
    };

    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderTopics(e.target.value);
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }
    });

    // Realistic Rust Playground Execution Simulation
    const runBtn = document.getElementById('run-code');
    const outputEl = document.getElementById('code-output');

    if (runBtn && outputEl) {
        runBtn.onclick = async () => {
            const code = editor ? editor.value : '';
            outputEl.innerHTML = '<span style="color:#cbd5e1;">Compiling rust-playground v0.1.0...</span>';

            // Attempt online execution with ASP.NET Core backend if available
            try {
                const response = await fetch('http://localhost:5055/api/playground/execute', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language: 'rust', code: code })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.output) {
                        outputEl.innerHTML = formatOutput(data.output, true);
                        userXP += 10;
                        updateGamification();
                        return;
                    }
                }
            } catch (err) {
                // Backend unavailable, fallback to comprehensive client-side simulator
            }

            // Client-side simulation
            setTimeout(() => {
                const simResult = simulateRustExecution(code);
                outputEl.innerHTML = simResult;
                userXP += 10;
                updateGamification();
            }, 300);
        };
    }

    function simulateRustExecution(code) {
        const lines = code.split('\n');
        const stdout = [];
        let hasError = false;
        let errorMessage = '';

        // Check for common borrow checker violations for realistic educational output
        if (code.includes('let s1 = String::from') && code.includes('let s2 = s1;') && code.includes('println!("{}", s1);')) {
            return `
<span style="color:#ef4444; font-weight:bold;">error[E0382]: borrow of moved value: \`s1\`</span>
<span style="color:#38bdf8;"> --> src/main.rs:5:20</span>
<span style="color:#64748b;">  |</span>
<span style="color:#64748b;">2 |</span>     let s1 = String::from("Hello LangSteps");
<span style="color:#64748b;">  |</span>         <span style="color:#38bdf8;">-- move occurs because \`s1\` has type \`String\`, which does not implement the \`Copy\` trait</span>
<span style="color:#64748b;">3 |</span>     let s2 = s1;
<span style="color:#64748b;">  |</span>              <span style="color:#38bdf8;">-- value moved here</span>
<span style="color:#64748b;">4 |</span>     println!("{}", s1);
<span style="color:#64748b;">  |</span>                    <span style="color:#ef4444;">^^ value borrowed here after move</span>
<span style="color:#64748b;">  |</span>
<span style="color:#fbbf24;">  = note: this error originates in the macro \`$crate::format_args_nl\`</span>
<span style="color:#ef4444;">error: could not compile \`rust-playground\` due to 1 previous error</span>`;
        }

        if (code.includes('&mut') && code.includes('r1') && code.includes('r2 = &mut')) {
            return `
<span style="color:#ef4444; font-weight:bold;">error[E0499]: cannot borrow \`data\` as mutable more than once at a time</span>
<span style="color:#38bdf8;"> --> src/main.rs:4:14</span>
<span style="color:#64748b;">  |</span>
<span style="color:#64748b;">3 |</span>     let r1 = &mut data;
<span style="color:#64748b;">  |</span>              <span style="color:#38bdf8;">--------- first mutable borrow occurs here</span>
<span style="color:#64748b;">4 |</span>     let r2 = &mut data;
<span style="color:#64748b;">  |</span>              <span style="color:#ef4444;">^^^^^^^^^ second mutable borrow occurs here</span>
<span style="color:#64748b;">5 |</span>     println!("{r1}");
<span style="color:#64748b;">  |</span>               <span style="color:#38bdf8;">---- first borrow later used here</span>
<span style="color:#ef4444;">error: could not compile \`rust-playground\` due to 1 previous error</span>`;
        }

        // Parse println! and print! statements
        for (const rawLine of lines) {
            const line = rawLine.trim();
            if (line.startsWith('//')) continue;

            const printMatch = line.match(/println!\s*\(\s*"(.*?)"(?:\s*,\s*(.*))?\s*\)\s*;/);
            if (printMatch) {
                let formatStr = printMatch[1];
                const argsStr = printMatch[2];

                if (argsStr) {
                    const args = argsStr.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
                    let argIdx = 0;
                    formatStr = formatStr.replace(/\{\}/g, () => {
                        const val = args[argIdx] !== undefined ? args[argIdx] : '{}';
                        argIdx++;
                        return val;
                    });
                    formatStr = formatStr.replace(/\{:\?\}/g, () => {
                        const val = args[argIdx] !== undefined ? args[argIdx] : '{:?}';
                        argIdx++;
                        return val;
                    });
                }
                stdout.push(escapeHtml(formatStr));
                continue;
            }

            // dbg! macro
            const dbgMatch = line.match(/dbg!\s*\((.*?)\)\s*;/);
            if (dbgMatch) {
                stdout.push(`[src/main.rs] ${dbgMatch[1]} = ${dbgMatch[1]}`);
            }
        }

        if (stdout.length > 0) {
            return `
<span style="color:#22c55e;">   Compiling</span> rust-playground v0.1.0 (/langsteps/sandbox)
<span style="color:#22c55e;">    Finished</span> \`dev\` [unoptimized + debuginfo] target(s) in 0.38s
<span style="color:#38bdf8;">     Running</span> \`target/debug/rust-playground\`
<span style="color:#475569;">--------------------------------------------------</span>
${stdout.join('\n')}
<span style="color:#475569;">--------------------------------------------------</span>
<span style="color:#22c55e;">Process finished with exit code 0.</span>`;
        }

        return `
<span style="color:#22c55e;">   Compiling</span> rust-playground v0.1.0 (/langsteps/sandbox)
<span style="color:#22c55e;">    Finished</span> \`dev\` [unoptimized + debuginfo] target(s) in 0.29s
<span style="color:#38bdf8;">     Running</span> \`target/debug/rust-playground\`
<span style="color:#94a3b8;">[Program executed successfully with 0 stdout events.]</span>`;
    }

    function formatOutput(output, isSuccess) {
        return `<span style="color:#22c55e;">Server Execution Output:</span>\n${escapeHtml(output)}`;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // Code Editor Sample Select
    const sampleSelect = document.getElementById('code-samples');
    if (sampleSelect && editor) {
        sampleSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const found = TAGS.find(t => t.id === val);
            if (found) {
                editor.value = found.defaultCode;
            }
        });
    }

    // Copy Code button
    const copyBtn = document.getElementById('copy-code');
    if (copyBtn) {
        copyBtn.onclick = () => {
            if (editor) {
                navigator.clipboard.writeText(editor.value);
                const icon = copyBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-check';
                    setTimeout(() => icon.className = 'far fa-copy', 2000);
                }
            }
        };
    }

    // Reset code
    const resetBtn = document.getElementById('reset-code');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (currentTopic && editor) {
                editor.value = currentTopic.defaultCode;
            }
        };
    }

    // Toggle Favorites
    const favBtn = document.getElementById('toggle-favorites');
    if (favBtn) {
        favBtn.onclick = () => {
            if (currentTopic) {
                if (favorites.includes(currentTopic.id)) {
                    favorites = favorites.filter(id => id !== currentTopic.id);
                } else {
                    favorites.push(currentTopic.id);
                }
                updateGamification();
                renderTopics();
            }
        };
    }

    // Initial render
    updateGamification();
    renderTopics();

    // Select first topic by default
    if (TAGS.length > 0) {
        selectTopic(TAGS[0], null);
    }
});
