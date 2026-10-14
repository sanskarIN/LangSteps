const PRESET_THEMES = [
  { id: "dark", name: "Midnight Dark", bg: "#0a0a1a", bg2: "#12122a", bg3: "#0d0d22", bg4: "#080818", text: "#d0d0ee", text2: "#b0b0d0", text3: "#8888bb", accent: "#6c63ff", accent2: "#3ecfcf", accent3: "#ffa36b", border: "#6c63ff22", card: "#12122a", codeBg: "#080818", sbBg: "#0f0f24", hdrBg: "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)" },
  { id: "light", name: "Clean Light", bg: "#f0f0f8", bg2: "#ffffff", bg3: "#f5f5ff", bg4: "#eeeef8", text: "#1a1a2e", text2: "#333333", text3: "#666666", accent: "#5b54e6", accent2: "#1aada0", accent3: "#e8823a", border: "#5b54e622", card: "#ffffff", codeBg: "#f0f0f8", sbBg: "#ffffff", hdrBg: "linear-gradient(135deg,#5b54e6,#1aada0)" },
  { id: "ocean", name: "Deep Ocean", bg: "#0a192f", bg2: "#112240", bg3: "#0d1b33", bg4: "#0a1628", text: "#ccd6f6", text2: "#8892b0", text3: "#5a6a8a", accent: "#64ffda", accent2: "#57cbff", accent3: "#f5a623", border: "#64ffda22", card: "#112240", codeBg: "#0a1628", sbBg: "#0d1d38", hdrBg: "linear-gradient(135deg,#0a192f,#112240,#1a365d)" },
  { id: "purple", name: "Neon Purple", bg: "#13091f", bg2: "#1c1030", bg3: "#170d28", bg4: "#100820", text: "#e0d0ff", text2: "#b8a0dd", text3: "#8877aa", accent: "#bf5af2", accent2: "#ff6bcb", accent3: "#ffd60a", border: "#bf5af222", card: "#1c1030", codeBg: "#100820", sbBg: "#150b25", hdrBg: "linear-gradient(135deg,#2d1b52,#1c1030,#13091f)" },
  { id: "green", name: "Forest Green", bg: "#0a1a0f", bg2: "#122a18", bg3: "#0d220f", bg4: "#081808", text: "#d0eeda", text2: "#a0c0a8", text3: "#6a8a70", accent: "#4ade80", accent2: "#22d3ee", accent3: "#fbbf24", border: "#4ade8022", card: "#122a18", codeBg: "#081808", sbBg: "#0f2414", hdrBg: "linear-gradient(135deg,#0a2e14,#122a18,#1a3e22)" },
  { id: "dracula", name: "Dracula", bg: "#282a36", bg2: "#44475a", bg3: "#3b3d4d", bg4: "#21222c", text: "#f8f8f2", text2: "#e2e2dc", text3: "#6272a4", accent: "#bd93f9", accent2: "#ff79c6", accent3: "#f1fa8c", border: "#bd93f933", card: "#44475a", codeBg: "#21222c", sbBg: "#282a36", hdrBg: "linear-gradient(135deg,#282a36,#44475a,#6272a4)" },
  { id: "monokai", name: "Monokai", bg: "#272822", bg2: "#3e3d32", bg3: "#33332d", bg4: "#1e1f1c", text: "#f8f8f2", text2: "#cfcfc2", text3: "#75715e", accent: "#f92672", accent2: "#a6e22e", accent3: "#fd971f", border: "#f9267233", card: "#3e3d32", codeBg: "#1e1f1c", sbBg: "#272822", hdrBg: "linear-gradient(135deg,#1e1f1c,#272822,#3e3d32)" },
  { id: "solarized_dark", name: "Solarized Dark", bg: "#002b36", bg2: "#073642", bg3: "#04303c", bg4: "#001e26", text: "#839496", text2: "#93a1a1", text3: "#586e75", accent: "#b58900", accent2: "#2aa198", accent3: "#cb4b16", border: "#b5890033", card: "#073642", codeBg: "#001e26", sbBg: "#002b36", hdrBg: "linear-gradient(135deg,#001e26,#002b36,#073642)" },
  { id: "nord", name: "Nordic Frost", bg: "#2e3440", bg2: "#3b4252", bg3: "#343b48", bg4: "#242933", text: "#eceff4", text2: "#e5e9f0", text3: "#4c566a", accent: "#88c0d0", accent2: "#81a1c1", accent3: "#ebcb8b", border: "#88c0d033", card: "#3b4252", codeBg: "#242933", sbBg: "#2e3440", hdrBg: "linear-gradient(135deg,#242933,#2e3440,#3b4252)" },
  { id: "synthwave", name: "Synthwave 84", bg: "#262335", bg2: "#34294f", bg3: "#2d2642", bg4: "#1d1a29", text: "#f3eee8", text2: "#dfd6ce", text3: "#848bbd", accent: "#ff7edb", accent2: "#36f9f6", accent3: "#fede5d", border: "#ff7edb33", card: "#34294f", codeBg: "#1d1a29", sbBg: "#262335", hdrBg: "linear-gradient(135deg,#1d1a29,#262335,#34294f)" },
  { id: "gruvbox", name: "Gruvbox Dark", bg: "#282828", bg2: "#3c3836", bg3: "#32302f", bg4: "#1d2021", text: "#ebdbb2", text2: "#d5c4a1", text3: "#928374", accent: "#fabd2f", accent2: "#b8bb26", accent3: "#fe8019", border: "#fabd2f33", card: "#3c3836", codeBg: "#1d2021", sbBg: "#282828", hdrBg: "linear-gradient(135deg,#1d2021,#282828,#3c3836)" },
  { id: "tokyo_night", name: "Tokyo Night", bg: "#1a1b26", bg2: "#24283b", bg3: "#1f2231", bg4: "#16161e", text: "#c0caf5", text2: "#a9b1d6", text3: "#565f89", accent: "#7aa2f7", accent2: "#bb9af7", accent3: "#ff9e64", border: "#7aa2f733", card: "#24283b", codeBg: "#16161e", sbBg: "#1a1b26", hdrBg: "linear-gradient(135deg,#16161e,#1a1b26,#24283b)" },
  { id: "matrix", name: "The Matrix", bg: "#0d1112", bg2: "#131a18", bg3: "#101515", bg4: "#090c0c", text: "#d1f1e2", text2: "#a4debe", text3: "#4b7a63", accent: "#00ff41", accent2: "#008f11", accent3: "#003b00", border: "#00ff4133", card: "#131a18", codeBg: "#090c0c", sbBg: "#0d1112", hdrBg: "linear-gradient(135deg,#090c0c,#0d1112,#131a18)" },
  { id: "cherry", name: "Cherry Blossom", bg: "#2a1e26", bg2: "#3d2833", bg3: "#33232c", bg4: "#21151c", text: "#ffeef6", text2: "#f4d1e2", text3: "#a37c96", accent: "#ffb3d9", accent2: "#e18bb3", accent3: "#ff7eb6", border: "#ffb3d933", card: "#3d2833", codeBg: "#21151c", sbBg: "#2a1e26", hdrBg: "linear-gradient(135deg,#21151c,#2a1e26,#3d2833)" },
  { id: "cafe", name: "Cozy Cafe", bg: "#f4ece1", bg2: "#fffdfa", bg3: "#eee3d4", bg4: "#e6d6c3", text: "#4a3f35", text2: "#665a4c", text3: "#998b7e", accent: "#8c5e39", accent2: "#bc8054", accent3: "#d6a57c", border: "#8c5e3933", card: "#fffdfa", codeBg: "#e6d6c3", sbBg: "#f4ece1", hdrBg: "linear-gradient(135deg,#bc8054,#8c5e39)" },
  { id: "sunset", name: "Outrun Sunset", bg: "#190b24", bg2: "#2a1338", bg3: "#210e2e", bg4: "#120718", text: "#fceeff", text2: "#e0c4eb", text3: "#8a659e", accent: "#ff4a8b", accent2: "#ff952b", accent3: "#ffc62b", border: "#ff4a8b33", card: "#2a1338", codeBg: "#120718", sbBg: "#190b24", hdrBg: "linear-gradient(135deg,#2a1338,#ff4a8b,#ff952b)" },
  { id: "cyber", name: "Cyber Neon", bg: "#0b0c10", bg2: "#1f2833", bg3: "#161c24", bg4: "#050608", text: "#c5c6c7", text2: "#9ba1a6", text3: "#4a545c", accent: "#66fcf1", accent2: "#45a29e", accent3: "#ffffff", border: "#66fcf133", card: "#1f2833", codeBg: "#050608", sbBg: "#0b0c10", hdrBg: "linear-gradient(135deg,#050608,#0b0c10,#1f2833)" },
  { id: "hacker", name: "Term Hacker", bg: "#000000", bg2: "#111111", bg3: "#080808", bg4: "#000000", text: "#33ff00", text2: "#2cbd00", text3: "#166000", accent: "#33ff00", accent2: "#ffffff", accent3: "#88ff88", border: "#33ff0033", card: "#111111", codeBg: "#000000", sbBg: "#000000", hdrBg: "linear-gradient(135deg,#000000,#080808,#111111)" },
  { id: "vue", name: "Vue Green", bg: "#34495e", bg2: "#41b883", bg3: "#3b7b62", bg4: "#2c3e50", text: "#ffffff", text2: "#e2f0e9", text3: "#a1ccb8", accent: "#41b883", accent2: "#34495e", accent3: "#f1c40f", border: "#41b88333", card: "#41b883", codeBg: "#2c3e50", sbBg: "#34495e", hdrBg: "linear-gradient(135deg,#2c3e50,#34495e,#41b883)" },
  { id: "blood", name: "Blood Moon", bg: "#1a0404", bg2: "#2b0a0a", bg3: "#210707", bg4: "#100202", text: "#ffd6d6", text2: "#d69c9c", text3: "#8f4e4e", accent: "#e62e2e", accent2: "#ff6b6b", accent3: "#facc15", border: "#e62e2e33", card: "#2b0a0a", codeBg: "#100202", sbBg: "#1a0404", hdrBg: "linear-gradient(135deg,#100202,#1a0404,#2b0a0a)" },
  { id: "halloween", name: "Halloween", bg: "#18181b", bg2: "#27272a", bg3: "#202023", bg4: "#0f0f11", text: "#f4f4f5", text2: "#d4d4d8", text3: "#71717a", accent: "#f97316", accent2: "#a855f7", accent3: "#84cc16", border: "#f9731633", card: "#27272a", codeBg: "#0f0f11", sbBg: "#18181b", hdrBg: "linear-gradient(135deg,#0f0f11,#18181b,#f97316)" },
  { id: "ice", name: "Arctic Ice", bg: "#e0f2fe", bg2: "#ffffff", bg3: "#dcf0fd", bg4: "#cce6f8", text: "#082f49", text2: "#0c4a6e", text3: "#38bdf8", accent: "#0284c7", accent2: "#0284c7", accent3: "#fbbf24", border: "#0284c733", card: "#ffffff", codeBg: "#cce6f8", sbBg: "#e0f2fe", hdrBg: "linear-gradient(135deg,#cce6f8,#0284c7)" },
  { id: "lava", name: "Magma Lair", bg: "#220000", bg2: "#3a1010", bg3: "#2d0707", bg4: "#160000", text: "#ffebeb", text2: "#ffb0b0", text3: "#b35050", accent: "#ff3d3d", accent2: "#ffa600", accent3: "#ffff00", border: "#ff3d3d33", card: "#3a1010", codeBg: "#160000", sbBg: "#220000", hdrBg: "linear-gradient(135deg,#160000,#ff3d3d,#ffa600)" },
  { id: "discord", name: "Gamer Dark", bg: "#36393f", bg2: "#2f3136", bg3: "#32353b", bg4: "#202225", text: "#dcddde", text2: "#b9bbbe", text3: "#72767d", accent: "#5865F2", accent2: "#eb459f", accent3: "#fee75c", border: "#5865F233", card: "#2f3136", codeBg: "#202225", sbBg: "#36393f", hdrBg: "linear-gradient(135deg,#202225,#36393f,#5865F2)" },
  { id: "rose", name: "Rose Pine", bg: "#191724", bg2: "#1f1d2e", bg3: "#1c1a29", bg4: "#121019", text: "#e0def4", text2: "#908caa", text3: "#6e6a86", accent: "#ebbcba", accent2: "#31748f", accent3: "#f6c177", border: "#ebbcba33", card: "#1f1d2e", codeBg: "#121019", sbBg: "#191724", hdrBg: "linear-gradient(135deg,#121019,#191724,#1f1d2e)" }
];

// JavaScript Mastery Data
const TAGS = [
  {
    "id": "js-variables",
    "title": "Variables (var, let, const), TDZ & Scope",
    "badge": "BASICS",
    "emoji": "📦",
    "defaultCode": "// 1. 'const' prevents variable reassignment\nconst APP_NAME = \"LangSteps\";\nconsole.log(\"App:\", APP_NAME);\n\n// 2. 'let' is block-scoped and allows reassignment\nlet counter = 0;\ncounter += 5;\nconsole.log(\"Counter:\", counter);\n\n// 3. Block scoping in action\n{\n  const blockScoped = \"Hidden inside block\";\n  var functionScoped = \"Leaked outside block!\";\n}\nconsole.log(functionScoped); // Accessible!\n\ntry {\n  console.log(blockScoped); // ReferenceError\n} catch (err) {\n  console.log(\"Expected Block Scope Error:\", err.message);\n}",
    "content": "<h3>📌 Deep Dive: Variables, Temporal Dead Zone & Scope</h3>\n<p>Modern JavaScript provides three declaration keywords: <code>const</code>, <code>let</code>, and the legacy <code>var</code>. Choosing the correct declaration is critical for writing memory-safe and bug-free applications.</p>\n<h4>⚙️ Under the Hood: The V8 Execution Context</h4>\n<p>During the V8 compilation phase, variable declarations are registered in the current Lexical Environment before any code runs (hoisting). However, while <code>var</code> is initialized to <code>undefined</code>, <code>let</code> and <code>const</code> remain uninitialized in what is known as the <strong>Temporal Dead Zone (TDZ)</strong>. Accessing them before their declaration line throws a <code>ReferenceError</code>.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Follow the Principle of Least Privilege: default to <code>const</code> for 90% of declarations. Use <code>let</code> only when reassignment is required (such as loop counters or state accumulators). Completely avoid <code>var</code> to prevent accidental variable leakage and global namespace pollution.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Immutability of const bindings vs Object mutation\nconst userConfig = { theme: 'dark', autoSave: true };\nuserConfig.theme = 'dracula'; // Valid! The object reference didn't change\nconsole.log(\"Config updated:\", userConfig);\n\n// To make object properties immutable, use Object.freeze()\nconst lockedConfig = Object.freeze({ ...userConfig });\n// lockedConfig.theme = 'light'; // TypeError in strict mode</code></pre>"
  },
  {
    "id": "js-datatypes",
    "title": "Data Types, Primitives & Type Coercion",
    "badge": "BASICS",
    "emoji": "🏷️",
    "defaultCode": "// Primitive Types\nconst num = 42;\nconst str = \"LangSteps Polyglot\";\nconst bool = true;\nconst undef = undefined;\nconst empty = null;\nconst sym = Symbol(\"uniqueId\");\nconst big = 9007199254740991n + 5n;\n\nconsole.log(\"typeof num:\", typeof num);\nconsole.log(\"typeof str:\", typeof str);\nconsole.log(\"typeof bool:\", typeof bool);\nconsole.log(\"typeof undef:\", typeof undef);\nconsole.log(\"typeof null:\", typeof empty); // 'object' (legacy historical JS bug)\nconsole.log(\"typeof sym:\", typeof sym);\nconsole.log(\"typeof BigInt:\", typeof big);\n\n// Strict Equality vs Loose Equality\nconsole.log(\"0 == false:\", 0 == false);   // true (coercion)\nconsole.log(\"0 === false:\", 0 === false); // false (strict)",
    "content": "<h3>📌 Deep Dive: Primitives, Reference Types & Type Coercion</h3>\n<p>JavaScript classifies data into <strong>7 Primitive Types</strong> (<code>string</code>, <code>number</code>, <code>bigint</code>, <code>boolean</code>, <code>undefined</code>, <code>symbol</code>, <code>null</code>) and <strong>Reference Types</strong> (<code>Object</code>, <code>Array</code>, <code>Function</code>, <code>Date</code>, <code>RegExp</code>).</p>\n<h4>⚙️ Under the Hood: Heap vs Stack Allocation</h4>\n<p>In the V8 engine, primitive values with fixed memory sizes are stored on the Stack or optimized as immediate 31-bit pointers (Smi). Objects, arrays, and functions are allocated dynamically on the V8 Heap, with variable identifiers storing references (memory addresses) to that heap space.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Always use strict equality (<code>===</code> and <code>!==</code>) instead of loose equality (<code>==</code> and <code>!=</code>). Loose equality performs implicit type coercion based on complex ECMAScript abstract equality algorithms, causing elusive production bugs.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Detecting true null and NaN safely\nfunction checkValue(val) {\n  if (val === null) return \"True null\";\n  if (Number.isNaN(val)) return \"True NaN\";\n  return typeof val;\n}\nconsole.log(checkValue(null));        // \"True null\"\nconsole.log(checkValue(NaN));         // \"True NaN\"\nconsole.log(checkValue(\"Hello JS\"));  // \"string\"</code></pre>"
  },
  {
    "id": "js-operators",
    "title": "Operators, Nullish Coalescing (??) & Optional Chaining (?.)",
    "badge": "BASICS",
    "emoji": "⚡",
    "defaultCode": "const serverConfig = {\n  port: 0,             // 0 is falsy, but valid port!\n  host: \"127.0.0.1\",\n  security: {\n    ssl: null\n  }\n};\n\n// Logical OR (||) treats 0 as falsy -> bug!\nconst portBad = serverConfig.port || 8080;\nconsole.log(\"Using || port:\", portBad); // 8080 (Bug!)\n\n// Nullish Coalescing (??) only checks null or undefined!\nconst portGood = serverConfig.port ?? 8080;\nconsole.log(\"Using ?? port:\", portGood); // 0 (Correct!)\n\n// Optional Chaining (?.) avoids crashing on nested null/undefined\nconst cert = serverConfig.security?.ssl?.certificate ?? \"Self-Signed\";\nconsole.log(\"SSL Cert:\", cert);",
    "content": "<h3>📌 Deep Dive: Modern Operators, Nullish Coalescing & Optional Chaining</h3>\n<p>ECMAScript 2020 introduced two game-changing operators: <strong>Optional Chaining (<code>?.</code>)</strong> and <strong>Nullish Coalescing (<code>??</code>)</strong>, solving decades of defensive boilerplate code.</p>\n<h4>⚙️ Under the Hood: Short-Circuit Evaluation</h4>\n<p>Short-circuiting stops evaluation as soon as the outcome is determined. With <code>a?.b</code>, if <code>a</code> is <code>null</code> or <code>undefined</code>, evaluation immediately yields <code>undefined</code> without attempting to read property <code>b</code>, preventing the infamous <code>TypeError: Cannot read properties of undefined</code>.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Distinguish between <em>falsy</em> values (<code>0</code>, <code>\"\"</code>, <code>false</code>, <code>NaN</code>, <code>null</code>, <code>undefined</code>) and <em>nullish</em> values (strictly <code>null</code> or <code>undefined</code>). For configuration defaults, always prefer <code>??</code> over <code>||</code> so that numerical zeros or empty strings are preserved.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Calling optional methods with ?.()\nconst logger = {\n  log: (msg) => console.log(\"[INFO]:\", msg)\n};\nlogger.log?.(\"System operational\");\nlogger.debug?.(\"Verbose trace\"); // Safely skipped, doesn't throw!</code></pre>"
  },
  {
    "id": "js-functions",
    "title": "Functions, Default Parameters & Arrow Functions",
    "badge": "FUNCTIONS",
    "emoji": "🚀",
    "defaultCode": "// Function Declaration (Hoisted)\nfunction calculateArea(width = 10, height = 5) {\n  return width * height;\n}\n\n// Arrow Function (Concise expression syntax)\nconst multiply = (a, b) => a * b;\n\n// Rest parameters (...args) collect arbitrary arguments\nconst sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);\n\nconsole.log(\"Default params:\", calculateArea()); // 50\nconsole.log(\"Passed params:\", calculateArea(20, 4)); // 80\nconsole.log(\"Arrow multiply:\", multiply(7, 8)); // 56\nconsole.log(\"Sum all:\", sumAll(10, 20, 30, 40)); // 100",
    "content": "<h3>📌 Deep Dive: Functions, Arrow Syntax & Rest Parameters</h3>\n<p>In JavaScript, functions are <strong>First-Class Citizens</strong>: they can be stored in variables, passed as arguments to other functions, and returned from functions.</p>\n<h4>⚙️ Under the Hood: Declaration vs Expression & Hoisting</h4>\n<p>Function declarations (<code>function foo() {}</code>) are hoisted entirely to the top of their scope during V8's compilation phase, allowing them to be invoked before their physical appearance in source code. Function expressions and arrow functions assigned to <code>const</code> or <code>let</code> are not hoisted with their definition.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Arrow functions do not bind their own <code>this</code>, <code>arguments</code>, or <code>super</code>. They inherit these bindings lexically from the enclosing scope, making them ideal for callbacks, array operations, and asynchronous timers.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Pure function returning an operation result\nconst formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {\n  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);\n};\nconsole.log(formatCurrency(1250.5)); // \"$1,250.50\"</code></pre>"
  },
  {
    "id": "js-this",
    "title": "The 'this' Keyword, Call, Apply & Bind Mechanics",
    "badge": "FUNCTIONS",
    "emoji": "🧭",
    "defaultCode": "const engineer = {\n  name: \"Sanskar\",\n  role: \"Systems Architect\",\n  introduce() {\n    return `Hello, I'm ${this.name}, ${this.role}.`;\n  }\n};\n\nconsole.log(\"Method invocation:\", engineer.introduce());\n\n// Losing 'this' context when unhooked:\nconst unhooked = engineer.introduce;\nconsole.log(\"Unhooked this name:\", unhooked()); // undefined!\n\n// Explicit binding with .call(), .apply(), and .bind()\nconst guest = { name: \"Alex\", role: \"Frontend Engineer\" };\n\nconsole.log(\"Using call():\", engineer.introduce.call(guest));\nconsole.log(\"Using apply():\", engineer.introduce.apply(guest));\n\nconst boundToAlex = engineer.introduce.bind(guest);\nconsole.log(\"Using bound function:\", boundToAlex());",
    "content": "<h3>📌 Deep Dive: The 'this' Context, Call, Apply & Bind</h3>\n<p>In JavaScript, <code>this</code> is not static; it is determined dynamically at runtime based on <strong>how</strong> a function is called (the call-site).</p>\n<h4>⚙️ Under the Hood: The 4 Rules of 'this' Binding</h4>\n<ol>\n  <li><strong>Default Binding:</strong> Global object (in non-strict mode) or <code>undefined</code> (in strict mode).</li>\n  <li><strong>Implicit Binding:</strong> The object before the dot (e.g., <code>user.getAge()</code> binds <code>this</code> to <code>user</code>).</li>\n  <li><strong>Explicit Binding:</strong> Using <code>.call()</code>, <code>.apply()</code>, or <code>.bind()</code> to force context.</li>\n  <li><strong>New Binding:</strong> When invoked with <code>new Foo()</code>, <code>this</code> is bound to the freshly constructed object.</li>\n</ol>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Arrow functions bypass all four dynamic binding rules. An arrow function's <code>this</code> is permanently resolved to the enclosing scope where it was defined, rendering <code>.call()</code> or <code>.bind()</code> ineffective on them.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Maintaining 'this' in callbacks using arrow functions\nclass Timer {\n  constructor() {\n    this.seconds = 0;\n  }\n  start() {\n    // Arrow function captures 'this' from Timer instance\n    setInterval(() => {\n      this.seconds++;\n    }, 1000);\n  }\n}</code></pre>"
  },
  {
    "id": "js-closures",
    "title": "Closures, Encapsulation & Lexical Scopes",
    "badge": "CORE",
    "emoji": "🔒",
    "defaultCode": "// Factory function demonstrating Lexical Closure\nfunction createBankAccount(accountHolder, initialDeposit) {\n  // Private variables protected inside lexical scope\n  let balance = initialDeposit;\n  const transactionLog = [`Account created with $${initialDeposit}`];\n\n  return {\n    deposit(amount) {\n      if (amount <= 0) throw new Error(\"Invalid deposit amount\");\n      balance += amount;\n      transactionLog.push(`Deposited: +$${amount}`);\n      return balance;\n    },\n    withdraw(amount) {\n      if (amount > balance) throw new Error(\"Insufficient funds\");\n      balance -= amount;\n      transactionLog.push(`Withdrew: -$${amount}`);\n      return balance;\n    },\n    getBalance() {\n      return balance;\n    },\n    getStatement() {\n      return [...transactionLog];\n    }\n  };\n}\n\nconst myAccount = createBankAccount(\"Sanskar\", 1000);\nmyAccount.deposit(500);\nmyAccount.withdraw(200);\n\nconsole.log(\"Current Balance:\", myAccount.getBalance());\nconsole.log(\"History:\", myAccount.getStatement());\nconsole.log(\"Direct balance access:\", myAccount.balance); // undefined! Encapsulation guaranteed!",
    "content": "<h3>📌 Deep Dive: Closures & True Data Encapsulation</h3>\n<p>A <strong>Closure</strong> is the pairing of a function with its surrounding Lexical Environment. Closures give functions the ability to remember and access variables from an outer scope, even long after that outer function has finished executing.</p>\n<h4>⚙️ Under the Hood: V8 Scope Context Allocation</h4>\n<p>When an inner function references outer variables, V8 allocates a persistent <strong>Context</strong> object on the Heap. Instead of freeing the stack frame upon function return, the engine keeps this heap context alive as long as references to the inner closure exist.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Closures are the foundational building block for functional programming patterns: currying, memoization, partial application, and private object state without exposing internal variables to the global window.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Generic Memoization utility using Closure\nfunction memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}</code></pre>"
  },
  {
    "id": "js-arrays",
    "title": "Modern Array Methods (map, filter, reduce, flat)",
    "badge": "DATA STRUCTURES",
    "emoji": "📊",
    "defaultCode": "const products = [\n  { id: 101, name: \"Mechanical Keyboard\", price: 120, category: \"Hardware\" },\n  { id: 102, name: \"Wireless Mouse\", price: 60, category: \"Hardware\" },\n  { id: 103, name: \"Code Mastery E-Book\", price: 25, category: \"Education\" },\n  { id: 104, name: \"4K IPS Monitor\", price: 400, category: \"Hardware\" },\n  { id: 105, name: \"Rust & Systems Guide\", price: 30, category: \"Education\" }\n];\n\n// 1. filter() extracts matching items\nconst hardwareItems = products.filter(p => p.category === \"Hardware\");\nconsole.log(\"Hardware Count:\", hardwareItems.length);\n\n// 2. map() transforms elements into a new format\nconst productLabels = products.map(p => `${p.name} ($${p.price})`);\nconsole.log(\"Labels:\", productLabels.slice(0, 3));\n\n// 3. reduce() aggregates items into a single summary\nconst totalInventoryValue = products.reduce((sum, item) => sum + item.price, 0);\nconsole.log(\"Total Value: $\" + totalInventoryValue);\n\n// 4. Modern non-mutating sort with toSorted()\nconst sortedByPrice = products.toSorted((a, b) => b.price - a.price);\nconsole.log(\"Most Expensive:\", sortedByPrice[0].name);",
    "content": "<h3>📌 Deep Dive: Modern Functional Array Methods</h3>\n<p>Modern JavaScript arrays provide declarative, functional methods that avoid manual <code>for</code> loop counters and eliminate mutation bugs.</p>\n<h4>⚙️ Under the Hood: V8 Array Elements Optimization</h4>\n<p>V8 classifies arrays into internal representation kinds: <strong>PACKED_SMI_ELEMENTS</strong> (fast contiguous integers), <strong>PACKED_DOUBLE_ELEMENTS</strong> (floats), and <strong>PACKED_ELEMENTS</strong> (generic objects). Modifying arrays sparsely or inserting mixed types causes transitions to slow dictionary mode.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Never mutate the original array when you need a sorted or reversed version. Use ECMAScript 2023 non-mutating methods: <code>toSorted()</code>, <code>toReversed()</code>, <code>toSpliced()</code>, and <code>with()</code>.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Grouping array items by category with reduce()\nconst grouped = products.reduce((acc, p) => {\n  (acc[p.category] = acc[p.category] || []).push(p);\n  return acc;\n}, {});\nconsole.log(\"Grouped by Category:\", Object.keys(grouped));</code></pre>"
  },
  {
    "id": "js-objects",
    "title": "Objects, Destructuring, Spread & Prototypes",
    "badge": "OBJECTS",
    "emoji": "🧩",
    "defaultCode": "const developer = {\n  id: 'dev_01',\n  name: 'Sanskar',\n  skills: ['JavaScript', 'Python', 'Rust', 'TypeScript'],\n  location: {\n    city: 'New Delhi',\n    country: 'India'\n  }\n};\n\n// 1. Destructuring with nested aliasing & default values\nconst { name, skills: [primaryLang, secondaryLang], location: { city } } = developer;\nconsole.log(`Developer: ${name}, Primary: ${primaryLang}, City: ${city}`);\n\n// 2. Object Spread (...): shallow clone & merge\nconst updatedDeveloper = {\n  ...developer,\n  status: 'Building LangSteps v1.0.0',\n  yearsActive: 5\n};\nconsole.log(\"Updated Developer:\", updatedDeveloper.status);\n\n// 3. Object Inspection Methods\nconsole.log(\"Keys:\", Object.keys(developer));\nconsole.log(\"Entries Count:\", Object.entries(developer).length);",
    "content": "<h3>📌 Deep Dive: Objects, Destructuring & Prototypal Chains</h3>\n<p>In JavaScript, nearly everything that is not a primitive is an <code>Object</code>. Objects are dynamic associative collections of key-value pairs linked via a prototype chain.</p>\n<h4>⚙️ Under the Hood: V8 Hidden Classes (Shapes)</h4>\n<p>To access properties at C++ speeds, V8 creates internal <strong>Hidden Classes (Shapes)</strong> representing the object's layout. Initializing properties in the same order across object instances allows V8 to reuse shapes and employ fast Inline Caches (IC).</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Object spread (<code>{ ...obj }</code>) performs a <strong>shallow copy</strong>. Nested objects still share references! To perform a true, complete deep clone of nested objects without circular reference errors, use native <code>structuredClone(obj)</code>.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Prototypal inheritance with Object.create\nconst baseMachine = {\n  boot() { return \"System initialized.\"; }\n};\nconst serverNode = Object.create(baseMachine);\nserverNode.ip = \"192.168.1.50\";\nconsole.log(serverNode.boot()); // Inherited from baseMachine prototype!</code></pre>"
  },
  {
    "id": "js-classes",
    "title": "ES6 Classes, Inheritance & Private Fields (#)",
    "badge": "OOP",
    "emoji": "🏛️",
    "defaultCode": "class User {\n  #passwordHash; // True private field!\n\n  constructor(username, email, password) {\n    this.username = username;\n    this.email = email;\n    this.#passwordHash = this.#hashPassword(password);\n  }\n\n  #hashPassword(pwd) {\n    return \"hash_\" + btoa(pwd);\n  }\n\n  verifyPassword(inputPwd) {\n    return this.#passwordHash === this.#hashPassword(inputPwd);\n  }\n\n  get profile() {\n    return `User: ${this.username} (${this.email})`;\n  }\n}\n\nclass Admin extends User {\n  constructor(username, email, password, permissions = []) {\n    super(username, email, password);\n    this.permissions = permissions;\n  }\n\n  hasPermission(perm) {\n    return this.permissions.includes(perm);\n  }\n}\n\nconst admin = new Admin(\"sanskarIN\", \"sanskarin@outlook.in\", \"secret123\", [\"DEPLOY\", \"ADMIN\"]);\nconsole.log(admin.profile);\nconsole.log(\"Password valid:\", admin.verifyPassword(\"secret123\"));\nconsole.log(\"Has DEPLOY:\", admin.hasPermission(\"DEPLOY\"));",
    "content": "<h3>📌 Deep Dive: ES6 Classes, Inheritance & True Private Fields</h3>\n<p>ECMAScript 2015 introduced the <code>class</code> syntax as a clean, elegant abstraction over JavaScript's existing prototype-based inheritance model.</p>\n<h4>⚙️ Under the Hood: Private Fields (#) in the V8 Engine</h4>\n<p>Unlike TypeScript's <code>private</code> keyword (which is stripped away during compilation), JavaScript's hash-prefixed private fields (<code>#field</code>) are enforced directly by the V8 JavaScript engine. They cannot be inspected, accessed, or overridden from outside the class instance, even with <code>Object.keys()</code> or <code>JSON.stringify()</code>.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Always call <code>super()</code> before accessing <code>this</code> in a subclass constructor. Use static factory methods (<code>static fromJSON()</code>) to provide flexible and expressive construction patterns.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Static methods and fields\nclass MathUtils {\n  static PI = 3.1415926535;\n  static clamp(val, min, max) {\n    return Math.min(Math.max(val, min), max);\n  }\n}\nconsole.log(MathUtils.clamp(150, 0, 100)); // 100</code></pre>"
  },
  {
    "id": "js-dom",
    "title": "DOM Selection, Traversal & Dynamic Elements",
    "badge": "DOM",
    "emoji": "🌲",
    "defaultCode": "// 1. Dynamic Element Creation & Attribute Setting\nconst card = document.createElement(\"div\");\ncard.className = \"metric-card\";\ncard.dataset.metricId = \"cpu-load\";\ncard.style.padding = \"10px\";\ncard.style.border = \"1px solid #334155\";\ncard.style.borderRadius = \"8px\";\n\n// 2. Setting safe text content (protects against XSS)\nconst title = document.createElement(\"h4\");\ntitle.textContent = \"⚡ Real-Time CPU Utilization\";\n\nconst value = document.createElement(\"span\");\nvalue.textContent = \"24.5% Active\";\nvalue.style.color = \"#10b981\";\nvalue.style.fontWeight = \"bold\";\n\ncard.appendChild(title);\ncard.appendChild(value);\n\nconsole.log(\"Created DOM element tag:\", card.tagName);\nconsole.log(\"Element classes:\", card.className);\nconsole.log(\"Dataset attribute:\", card.dataset.metricId);\nconsole.log(\"Inner text representation:\", card.innerText || card.textContent);",
    "content": "<h3>📌 Deep Dive: DOM Selection, Traversal & Safe Manipulation</h3>\n<p>The <strong>Document Object Model (DOM)</strong> is an object-oriented representation of the web page, allowing JavaScript to dynamically read, modify, and style HTML documents.</p>\n<h4>⚙️ Under the Hood: Reflow & Repaint Costs</h4>\n<p>Whenever you modify element geometry or insert nodes one-by-one, the browser triggers a <strong>Reflow</strong> (layout recalculation) followed by a <strong>Repaint</strong>. To maximize rendering speed, batch your element insertions using <code>document.createDocumentFragment()</code> so that the browser only triggers a single layout recalculation.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Never inject untrusted user input using <code>element.innerHTML</code>. Attackers can execute arbitrary JavaScript via injected <code>&lt;img onerror=\"...\"&gt;</code> tags (XSS). Always use <code>element.textContent</code> or sanitize inputs using <code>DOMPurify</code>.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// High-performance batch insertion using DocumentFragment\nconst fragment = document.createDocumentFragment();\nfor (let i = 0; i < 100; i++) {\n  const li = document.createElement(\"li\");\n  li.textContent = `Item #${i + 1}`;\n  fragment.appendChild(li);\n}\n// Single reflow:\n// listContainer.appendChild(fragment);</code></pre>"
  },
  {
    "id": "js-events",
    "title": "Event Propagation: Bubbling, Capturing & Delegation",
    "badge": "DOM",
    "emoji": "🎯",
    "defaultCode": "// Simulating Event Delegation & Bubbling\nconsole.log(\"Event Propagation Architecture:\");\nconsole.log(\"1. Capturing Phase (window -> document -> body -> target)\");\nconsole.log(\"2. Target Phase (dispatched on clicked element)\");\nconsole.log(\"3. Bubbling Phase (target -> parent -> document -> window)\");\n\n// Event Delegation Pattern: Single listener on parent container\nfunction handleListClick(event) {\n  // Find closest list item even if child icon was clicked\n  const item = event.target.closest(\"li\");\n  if (!item) return;\n\n  console.log(\"Delegated click caught for ID:\", item.dataset.id);\n  console.log(\"Clicked element:\", event.target.tagName);\n  console.log(\"Current target (listener container):\", event.currentTarget.tagName);\n}\n\nconsole.log(\"Ready for high-performance Event Delegation!\");",
    "content": "<h3>📌 Deep Dive: Event Bubbling, Capturing & Delegation</h3>\n<p>Every browser interaction (clicks, keystrokes, scroll) produces an <code>Event</code> that travels through the DOM tree in three distinct phases.</p>\n<h4>⚙️ Under the Hood: Event Delegation Efficiency</h4>\n<p>Instead of binding separate event listeners to 1,000 items in an infinite scroll list (which consumes significant RAM and degrades garbage collection), attach <strong>a single listener</strong> to the parent <code>&lt;ul&gt;</code> container. As events bubble up, inspect <code>event.target.closest('li')</code> to identify the source element.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Use <code>event.stopPropagation()</code> sparingly, as it prevents parent analytics or modal dismiss listeners from functioning. For high-frequency events like scroll or touch, pass <code>{ passive: true }</code> to <code>addEventListener</code> to allow the browser thread to scroll without waiting for JS.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Adding passive event listener for smooth 60fps scrolling\nwindow.addEventListener('scroll', () => {\n  const scrolled = window.scrollY;\n  // compute scroll indicator\n}, { passive: true });</code></pre>"
  },
  {
    "id": "js-promises",
    "title": "Promises, Lifecycle & Promise.allSettled()",
    "badge": "ASYNC",
    "emoji": "🤝",
    "defaultCode": "// Simulating asynchronous service calls\nconst fetchUser = (id) => new Promise((resolve) => {\n  setTimeout(() => resolve({ id, name: \"Sanskar\", role: \"Engineer\" }), 300);\n});\n\nconst fetchPermissions = (role) => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (role === \"Engineer\") resolve([\"DEPLOY\", \"CODE_REVIEW\", \"ADMIN\"]);\n    else reject(new Error(\"Unknown role\"));\n  }, 200);\n});\n\nconsole.log(\"Initiating Promise Chain...\");\n\nfetchUser(101)\n  .then(user => {\n    console.log(\"Step 1: User fetched ->\", user.name);\n    return fetchPermissions(user.role);\n  })\n  .then(perms => {\n    console.log(\"Step 2: Permissions resolved ->\", perms.join(\", \"));\n  })\n  .catch(err => {\n    console.error(\"Pipeline failure:\", err.message);\n  })\n  .finally(() => {\n    console.log(\"Step 3: Cleanup completed.\");\n  });",
    "content": "<h3>📌 Deep Dive: Promises, States & Concurrent Combinators</h3>\n<p>A <strong>Promise</strong> represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It exists in one of three states: <code>pending</code>, <code>fulfilled</code>, or <code>rejected</code>.</p>\n<h4>⚙️ Under the Hood: The Microtask Queue</h4>\n<p>When a Promise resolves, its <code>.then()</code> or <code>.catch()</code> callbacks are dispatched to the <strong>Microtask Queue</strong>. Microtasks execute immediately after the current synchronous frame finishes, with higher priority than Macrotasks (like <code>setTimeout</code> or <code>setInterval</code>).</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>When making multiple parallel API calls, prefer <code>Promise.allSettled()</code> over <code>Promise.all()</code>. If one call fails in <code>Promise.all()</code>, the entire batch rejects immediately. <code>Promise.allSettled()</code> waits for all requests to finish and returns their individual statuses.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Resilient batch requests with Promise.allSettled\nconst results = await Promise.allSettled([\n  fetch('/api/user'),\n  fetch('/api/notifications'),\n  fetch('/api/analytics')\n]);\nconst successful = results\n  .filter(r => r.status === 'fulfilled')\n  .map(r => r.value);</code></pre>"
  },
  {
    "id": "js-async-await",
    "title": "Async / Await & Asynchronous Control Flow",
    "badge": "ASYNC",
    "emoji": "⏳",
    "defaultCode": "// Helper utility returning timed promise\nconst wait = (ms) => new Promise(res => setTimeout(res, ms));\n\nasync function fetchTelemetryPipeline() {\n  console.log(\"Telemetry pipeline starting...\");\n\n  try {\n    console.log(\"Connecting to edge node...\");\n    await wait(200);\n\n    console.log(\"Node connected. Reading sensor metrics...\");\n    await wait(200);\n\n    const metrics = { cpu: \"18%\", memory: \"1.2GB\", status: \"Healthy\" };\n    console.log(\"Telemetry acquired:\", metrics);\n    return metrics;\n  } catch (error) {\n    console.error(\"Telemetry error:\", error.message);\n    throw error;\n  } finally {\n    console.log(\"Telemetry stream closed cleanly.\");\n  }\n}\n\nfetchTelemetryPipeline();",
    "content": "<h3>📌 Deep Dive: Async / Await & Clean Error Handling</h3>\n<p>Introduced in ES2017, <code>async/await</code> provides synchronous-looking syntax for writing asynchronous, promise-based code without deep callback nesting (callback hell).</p>\n<h4>⚙️ Under the Hood: Coroutines & Generators</h4>\n<p>An <code>async</code> function is compiled by V8 into a coroutine mechanism powered by generators and promises. The <code>await</code> keyword pauses execution of the local function body, yielding execution back to the caller while awaiting promise resolution on the Microtask Queue.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Beware of sequential await bottlenecks! If two async calls do not depend on each other, launch them concurrently: <code>const [user, posts] = await Promise.all([getUser(), getPosts()]);</code> rather than awaiting each one sequentially.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Resilient exponential backoff retry helper\nasync function retryWithBackoff(fn, retries = 3, delay = 500) {\n  try {\n    return await fn();\n  } catch (err) {\n    if (retries <= 1) throw err;\n    await new Promise(r => setTimeout(r, delay));\n    return retryWithBackoff(fn, retries - 1, delay * 2);\n  }\n}</code></pre>"
  },
  {
    "id": "js-eventloop",
    "title": "The Event Loop, Microtasks & Macrotasks",
    "badge": "RUNTIME",
    "emoji": "🔄",
    "defaultCode": "console.log(\"1. Synchronous Start\");\n\n// Macrotask (Task Queue)\nsetTimeout(() => {\n  console.log(\"5. Macrotask (setTimeout 0ms)\");\n}, 0);\n\n// Microtask Queue\nPromise.resolve().then(() => {\n  console.log(\"3. Microtask (Promise 1)\");\n}).then(() => {\n  console.log(\"4. Microtask (Promise 2)\");\n});\n\n// Explicit Microtask insertion\nqueueMicrotask(() => {\n  console.log(\"3.5. queueMicrotask()\");\n});\n\nconsole.log(\"2. Synchronous End\");\n\n// Observe the exact order in the console output!",
    "content": "<h3>📌 Deep Dive: The Event Loop & Single-Threaded Concurrency</h3>\n<p>JavaScript operates on a single main thread with an <strong>Event Loop</strong> concurrency model that manages execution of code, collecting and processing events, and executing queued sub-tasks.</p>\n<h4>⚙️ Under the Hood: Call Stack vs Queues</h4>\n<ol>\n  <li><strong>Call Stack:</strong> Executes synchronous code frames in LIFO order.</li>\n  <li><strong>Microtask Queue:</strong> Drained completely after every stack frame finishes (Promises, <code>queueMicrotask</code>, <code>MutationObserver</code>).</li>\n  <li><strong>Macrotask Queue:</strong> Processes one task per tick (I/O, <code>setTimeout</code>, <code>setInterval</code>, UI events).</li>\n  <li><strong>Render Pipeline:</strong> The browser repaints between ticks if needed.</li>\n</ol>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Never perform CPU-intensive blocking calculations on the main thread (e.g., large data parsing or image manipulation). It starves the Event Loop, freezing UI animations and button clicks. Offload heavy computation to Web Workers.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Breaking up heavy calculations across ticks to maintain 60fps\nfunction chunkedProcess(items, processItem) {\n  let index = 0;\n  function doChunk() {\n    const start = performance.now();\n    while (index < items.length && performance.now() - start < 12) {\n      processItem(items[index++]);\n    }\n    if (index < items.length) setTimeout(doChunk, 0);\n  }\n  doChunk();\n}</code></pre>"
  },
  {
    "id": "js-fetch",
    "title": "Fetch API, Request / Response & Network Errors",
    "badge": "NETWORK",
    "emoji": "🌐",
    "defaultCode": "// Fetching data with AbortController timeout & error guarding\nasync function fetchSafeApi(url, timeoutMs = 3000) {\n  const controller = new AbortController();\n  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);\n\n  try {\n    console.log(`Sending GET request to ${url}...`);\n    const response = await fetch(url, { signal: controller.signal });\n\n    // CRITICAL: fetch() does not reject on 404 or 500!\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n\n    const data = await response.json();\n    console.log(\"Response JSON acquired successfully!\");\n    return data;\n  } catch (error) {\n    if (error.name === \"AbortError\") {\n      console.warn(\"Request timed out and was aborted!\");\n    } else {\n      console.error(\"Network Fetch Error:\", error.message);\n    }\n  } finally {\n    clearTimeout(timeoutId);\n  }\n}\n\n// Demo using public JSON API\nfetchSafeApi(\"https://api.github.com/repos/sanskarIN/LangSteps\");",
    "content": "<h3>📌 Deep Dive: The Modern Fetch API & Robust Networking</h3>\n<p>The native <code>fetch()</code> API provides an interface for fetching resources across the network asynchronously, superseding legacy <code>XMLHttpRequest</code>.</p>\n<h4>⚙️ Under the Hood: The HTTP Status Quirk</h4>\n<p>A common pitfall is assuming <code>fetch()</code> rejects on HTTP error statuses (like <code>404 Not Found</code> or <code>500 Internal Server Error</code>). It does not! <code>fetch()</code> resolves successfully as long as a response is received. It only rejects on total network failures (DNS lookup failure, offline client, or certificate errors). Always check <code>response.ok</code>!</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Always use <code>AbortController</code> to enforce timeouts on production requests. In single-page applications, abort stale in-flight requests when the user changes tabs or search queries to save network bandwidth.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Making a typed JSON POST request\nconst postData = async (endpoint, payload) => {\n  const response = await fetch(endpoint, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(payload)\n  });\n  return response.json();\n};</code></pre>"
  },
  {
    "id": "js-storage",
    "title": "Client Storage: LocalStorage, SessionStorage & Cookies",
    "badge": "STORAGE",
    "emoji": "💾",
    "defaultCode": "// Typed LocalStorage Helper with fallback\nclass SafeStorage {\n  static set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (e) {\n      console.warn(\"Storage write failed (quota exceeded):\", e);\n      return false;\n    }\n  }\n\n  static get(key, defaultValue = null) {\n    try {\n      const raw = localStorage.getItem(key);\n      return raw ? JSON.parse(raw) : defaultValue;\n    } catch (e) {\n      return defaultValue;\n    }\n  }\n\n  static remove(key) {\n    localStorage.removeItem(key);\n  }\n}\n\n// Usage Demo\nSafeStorage.set(\"langsteps_theme\", { mode: \"dark\", accent: \"#f7df1e\" });\nconst savedTheme = SafeStorage.get(\"langsteps_theme\");\nconsole.log(\"Retrieved Theme Configuration:\", savedTheme);",
    "content": "<h3>📌 Deep Dive: Client-Side Storage & Data Persistence</h3>\n<p>Modern web browsers offer several storage mechanisms: <strong>LocalStorage</strong> (synchronous, persistent), <strong>SessionStorage</strong> (scoped to tab lifecycle), <strong>Cookies</strong> (sent with HTTP requests), and <strong>IndexedDB</strong> (asynchronous, large datasets).</p>\n<h4>⚙️ Under the Hood: Synchronous Main-Thread I/O</h4>\n<p>Both <code>localStorage</code> and <code>sessionStorage</code> perform synchronous disk I/O on the main thread. Reading or writing megabytes of data blocks rendering and user interaction. For storing data larger than 5MB or binary blobs, use <code>IndexedDB</code>.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p><strong>Security Warning:</strong> Never store authentication tokens (JWTs) or sensitive user data in <code>localStorage</code>. Any Cross-Site Scripting (XSS) vulnerability allows malicious scripts to extract <code>localStorage</code> contents. Use <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code> cookies for authentication tokens.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Cross-tab synchronization via the StorageEvent\nwindow.addEventListener('storage', (event) => {\n  if (event.key === 'langsteps_theme') {\n    console.log(\"Theme updated in another tab to:\", event.newValue);\n    applyTheme(JSON.parse(event.newValue));\n  }\n});</code></pre>"
  },
  {
    "id": "js-modules",
    "title": "ES Modules (ESM) & Dynamic Imports",
    "badge": "MODULES",
    "emoji": "📦",
    "defaultCode": "// Simulated ES Module Architecture\nconsole.log(\"=== ES Module Patterns ===\");\n\n// Named Exports simulation:\nconst mathUtils = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  version: \"1.0.0\"\n};\n\n// Destructured import simulation:\nconst { add, version } = mathUtils;\nconsole.log(`Module v${version}: 15 + 25 =`, add(15, 25));\n\n// Dynamic Import simulation:\nasync function loadAnalyticsEngine() {\n  console.log(\"Lazily loading analytics bundle on demand...\");\n  // In real browser: const module = await import('./analytics.js');\n  console.log(\"Bundle loaded without bloating initial page weight!\");\n}\n\nloadAnalyticsEngine();",
    "content": "<h3>📌 Deep Dive: ECMAScript Modules (ESM) & Code Splitting</h3>\n<p>Official <strong>ES Modules</strong> (introduced in ES6) standardized JavaScript code organization using <code>import</code> and <code>export</code> statements, replacing legacy script concatenations and third-party bundlers.</p>\n<h4>⚙️ Under the Hood: Live Read-Only Bindings</h4>\n<p>Unlike CommonJS (<code>require()</code>) which copies exported values at runtime, ES Modules create <strong>live read-only bindings</strong> to variables. If the exporting module mutates an exported variable, the importing module observes the updated value in real-time.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Use dynamic <code>import()</code> for code-splitting. Instead of bundling your entire application into one massive JavaScript file, import expensive charting, PDF generation, or administrative modules only when the user navigates to those views.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Dynamic lazy loading on user button interaction\nbutton.addEventListener('click', async () => {\n  const { exportToPDF } = await import('./pdfExport.js');\n  exportToPDF(document.getElementById('report'));\n});</code></pre>"
  },
  {
    "id": "js-error-handling",
    "title": "Error Handling, Custom Errors & Error Cause",
    "badge": "CORE",
    "emoji": "🛡️",
    "defaultCode": "// Custom Domain Error with ES2022 Error Cause Chaining\nclass DatabaseError extends Error {\n  constructor(message, cause) {\n    super(message, { cause });\n    this.name = \"DatabaseError\";\n    this.timestamp = new Date().toISOString();\n  }\n}\n\nfunction executeQuery(sql) {\n  try {\n    if (!sql.includes(\"SELECT\")) {\n      throw new TypeError(\"Only SELECT queries are authorized in read-only mode\");\n    }\n    return [{ id: 1, name: \"Sanskar\" }];\n  } catch (rawError) {\n    // Wrap low-level error with high-level domain context\n    throw new DatabaseError(\"Query execution rejected\", rawError);\n  }\n}\n\ntry {\n  executeQuery(\"DROP TABLE users\");\n} catch (err) {\n  console.error(`Caught [${err.name}]: ${err.message}`);\n  console.error(\"Underlying cause:\", err.cause?.message);\n}",
    "content": "<h3>📌 Deep Dive: Robust Error Architecture & Error Cause</h3>\n<p>Errors in software are inevitable; how an application catches, reports, and recovers from them defines engineering maturity.</p>\n<h4>⚙️ Under the Hood: The Call Stack Unwinding</h4>\n<p>When an error is thrown, the V8 runtime halts normal flow and unwinds the Call Stack frame by frame until it finds an enclosing <code>try...catch</code> block. If no handler exists, the error becomes unhandled, triggering <code>window.onerror</code> or crashing Node.js processes.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Always throw instances of <code>Error</code> (e.g. <code>throw new Error(...)</code>) rather than string literals or numbers. Only <code>Error</code> instances capture stack traces (<code>error.stack</code>) essential for pinpointing the exact file and line number in production logs.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Global unhandled rejection safety net\nwindow.addEventListener('unhandledrejection', (event) => {\n  console.error('Unhandled Promise rejection:', event.reason);\n  // Send telemetry to error tracking service (e.g., Sentry)\n});</code></pre>"
  },
  {
    "id": "js-generators",
    "title": "Generators & Iteration Protocols",
    "badge": "ES6+",
    "emoji": "⚙️",
    "defaultCode": "// Infinite Unique ID Generator using yield\nfunction* idGenerator(prefix = \"ID_\") {\n  let counter = 1000;\n  while (true) {\n    yield `${prefix}${++counter}`;\n  }\n}\n\nconst gen = idGenerator(\"LANG_\");\nconsole.log(\"First ID:\", gen.next().value);\nconsole.log(\"Second ID:\", gen.next().value);\nconsole.log(\"Third ID:\", gen.next().value);\n\n// Range Generator for memory-efficient iteration\nfunction* range(start, end, step = 1) {\n  for (let i = start; i <= end; i += step) {\n    yield i;\n  }\n}\n\nconst evens = [...range(2, 10, 2)];\nconsole.log(\"Generated Range Array:\", evens);",
    "content": "<h3>📌 Deep Dive: Generators & Custom Iteration Protocols</h3>\n<p><strong>Generators</strong> are functions that can be exited and later re-entered, with their variable bindings and execution context preserved across re-entries.</p>\n<h4>⚙️ Under the Hood: The Iterator & Iterable Protocols</h4>\n<p>A Generator function (<code>function*</code>) returns a Generator Object conforming to both the <strong>Iterable</strong> protocol (has <code>[Symbol.iterator]()</code>) and the <strong>Iterator</strong> protocol (has a <code>.next()</code> method returning <code>{ value, done }</code>). The V8 engine suspends generator execution frames on the heap with near-zero overhead.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Use generators to stream large data files or generate infinite sequences. Because values are calculated lazily on demand when <code>.next()</code> is requested, they consume $O(1)$ memory regardless of sequence length.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Two-way communication with generators\nfunction* conversation() {\n  const answer = yield \"What is your name?\";\n  console.log(\"Hello, \" + answer);\n}\nconst chat = conversation();\nconsole.log(chat.next().value); // \"What is your name?\"\nchat.next(\"Sanskar\");           // \"Hello, Sanskar\"</code></pre>"
  },
  {
    "id": "js-proxy",
    "title": "Proxy API, Metaprogramming & Reflect Traps",
    "badge": "ADVANCED",
    "emoji": "🛡️",
    "defaultCode": "// Reactive Observable Object using Proxy\nfunction createReactiveStore(initialState, onChange) {\n  return new Proxy(initialState, {\n    set(target, property, value, receiver) {\n      const oldValue = target[property];\n      const success = Reflect.set(target, property, value, receiver);\n      if (success && oldValue !== value) {\n        onChange(property, oldValue, value);\n      }\n      return success;\n    },\n    get(target, property, receiver) {\n      return Reflect.get(target, property, receiver);\n    }\n  });\n}\n\nconst store = createReactiveStore({ count: 0, user: \"Guest\" }, (prop, oldVal, newVal) => {\n  console.log(`[STORE MUTATION]: '${prop}' changed from '${oldVal}' to '${newVal}'`);\n});\n\nstore.count = 1;\nstore.user = \"Sanskar\";\nconsole.log(\"Current store count:\", store.count);",
    "content": "<h3>📌 Deep Dive: Metaprogramming with the Proxy & Reflect APIs</h3>\n<p>The <strong>Proxy</strong> object enables you to create a proxy for another object, intercepting and redefining fundamental operations (property lookup, assignment, enumeration, function invocation).</p>\n<h4>⚙️ Under the Hood: Native V8 Traps</h4>\n<p>When an internal V8 object slot is invoked (e.g., <code>[[Get]]</code>, <code>[[Set]]</code>, <code>[[Delete]]</code>), the engine checks whether a Proxy handler trap exists. If defined, the handler function executes in place of the default C++ property lookup.</p>\n<div class=\"cb\">\n  <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n  <div class=\"cb-b\"><p>Always pair <code>Proxy</code> traps with the corresponding <code>Reflect</code> method (e.g., <code>Reflect.set(target, prop, val, receiver)</code>). <code>Reflect</code> guarantees correct prototype traversal, proper receiver binding for getters/setters, and returns clean booleans instead of throwing errors.</p></div>\n</div>\n<h4>💻 Advanced Implementation Example</h4>\n<pre><code class=\"language-javascript\">// Schema Validator using Proxy\nconst validator = {\n  set(target, prop, value) {\n    if (prop === 'age' && (!Number.isInteger(value) || value < 0)) {\n      throw new TypeError('Age must be a positive integer');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\nconst person = new Proxy({}, validator);\nperson.age = 25; // Valid</code></pre>"
  },
  {
    "id": "js-iterators",
    "title": "Iterators",
    "badge": "ES6+",
    "emoji": "🔄",
    "defaultCode": "const arr = [1,2];\nconst it = arr[Symbol.iterator]();\nconsole.log(it.next());",
    "content": "\n    <h3>📌 Deep Dive: Iterators</h3>\n    <p>The <strong>Iterators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Iterators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Iterators\nconsole.log(\"Initializing Iterators...\");\n\ntry {\n  // Using the core concept\n  const arr = [1,2];\nconst it = arr[Symbol.iterator]();\nconsole.log(it.next());\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Iterators:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-reflect",
    "title": "Reflect API",
    "badge": "ADVANCED",
    "emoji": "🪞",
    "defaultCode": "const obj = {x: 1};\nReflect.set(obj, \"y\", 2);\nconsole.log(obj.y);",
    "content": "\n    <h3>📌 Deep Dive: Reflect API</h3>\n    <p>The <strong>Reflect API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Reflect API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Reflect API\nconsole.log(\"Initializing Reflect API...\");\n\ntry {\n  // Using the core concept\n  const obj = {x: 1};\nReflect.set(obj, \"y\", 2);\nconsole.log(obj.y);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Reflect API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-intl",
    "title": "Intl API",
    "badge": "API",
    "emoji": "🌍",
    "defaultCode": "console.log(new Intl.NumberFormat(\"en-US\", {style:\"currency\", currency:\"USD\"}).format(100));",
    "content": "\n    <h3>📌 Deep Dive: Intl API</h3>\n    <p>The <strong>Intl API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Intl API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Intl API\nconsole.log(\"Initializing Intl API...\");\n\ntry {\n  // Using the core concept\n  console.log(new Intl.NumberFormat(\"en-US\", {style:\"currency\", currency:\"USD\"}).format(100));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Intl API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-canvas",
    "title": "Canvas API",
    "badge": "API",
    "emoji": "🎨",
    "defaultCode": "/* Requires HTML canvas */\n// const ctx = canvas.getContext(\"2d\");\n// ctx.fillRect(0,0,10,10);",
    "content": "\n    <h3>📌 Deep Dive: Canvas API</h3>\n    <p>The <strong>Canvas API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Canvas API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Canvas API\nconsole.log(\"Initializing Canvas API...\");\n\ntry {\n  // Using the core concept\n  /* Requires HTML canvas */\n// const ctx = canvas.getContext(\"2d\");\n// ctx.fillRect(0,0,10,10);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Canvas API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-geolocation",
    "title": "Geolocation API",
    "badge": "API",
    "emoji": "📍",
    "defaultCode": "navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));",
    "content": "\n    <h3>📌 Deep Dive: Geolocation API</h3>\n    <p>The <strong>Geolocation API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Geolocation API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Geolocation API\nconsole.log(\"Initializing Geolocation API...\");\n\ntry {\n  // Using the core concept\n  navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Geolocation API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-webrtc",
    "title": "WebRTC",
    "badge": "API",
    "emoji": "🎥",
    "defaultCode": "const pc = new RTCPeerConnection();\nconsole.log(pc);",
    "content": "\n    <h3>📌 Deep Dive: WebRTC</h3>\n    <p>The <strong>WebRTC</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>WebRTC</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of WebRTC\nconsole.log(\"Initializing WebRTC...\");\n\ntry {\n  // Using the core concept\n  const pc = new RTCPeerConnection();\nconsole.log(pc);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing WebRTC:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-websockets",
    "title": "WebSockets",
    "badge": "API",
    "emoji": "🔌",
    "defaultCode": "/* const ws = new WebSocket(\"ws://url\"); */",
    "content": "\n    <h3>📌 Deep Dive: WebSockets</h3>\n    <p>The <strong>WebSockets</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>WebSockets</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of WebSockets\nconsole.log(\"Initializing WebSockets...\");\n\ntry {\n  // Using the core concept\n  /* const ws = new WebSocket(\"ws://url\"); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing WebSockets:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-serviceworkers",
    "title": "Service Workers",
    "badge": "PWA",
    "emoji": "🛠️",
    "defaultCode": "/* navigator.serviceWorker.register(\"/sw.js\"); */",
    "content": "\n    <h3>📌 Deep Dive: Service Workers</h3>\n    <p>The <strong>Service Workers</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Service Workers</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Service Workers\nconsole.log(\"Initializing Service Workers...\");\n\ntry {\n  // Using the core concept\n  /* navigator.serviceWorker.register(\"/sw.js\"); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Service Workers:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-indexeddb",
    "title": "IndexedDB",
    "badge": "API",
    "emoji": "🗄️",
    "defaultCode": "const req = indexedDB.open(\"MyDB\", 1);",
    "content": "\n    <h3>📌 Deep Dive: IndexedDB</h3>\n    <p>The <strong>IndexedDB</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>IndexedDB</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of IndexedDB\nconsole.log(\"Initializing IndexedDB...\");\n\ntry {\n  // Using the core concept\n  const req = indexedDB.open(\"MyDB\", 1);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing IndexedDB:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-mutationobserver",
    "title": "MutationObserver",
    "badge": "DOM",
    "emoji": "👁️",
    "defaultCode": "const obs = new MutationObserver(m => console.log(m));",
    "content": "\n    <h3>📌 Deep Dive: MutationObserver</h3>\n    <p>The <strong>MutationObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>MutationObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of MutationObserver\nconsole.log(\"Initializing MutationObserver...\");\n\ntry {\n  // Using the core concept\n  const obs = new MutationObserver(m => console.log(m));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing MutationObserver:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-intersectionobserver",
    "title": "IntersectionObserver",
    "badge": "DOM",
    "emoji": "🚦",
    "defaultCode": "const obs = new IntersectionObserver(e => console.log(e));",
    "content": "\n    <h3>📌 Deep Dive: IntersectionObserver</h3>\n    <p>The <strong>IntersectionObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>IntersectionObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of IntersectionObserver\nconsole.log(\"Initializing IntersectionObserver...\");\n\ntry {\n  // Using the core concept\n  const obs = new IntersectionObserver(e => console.log(e));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing IntersectionObserver:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-resizeobserver",
    "title": "ResizeObserver",
    "badge": "DOM",
    "emoji": "📐",
    "defaultCode": "const obs = new ResizeObserver(e => console.log(e));",
    "content": "\n    <h3>📌 Deep Dive: ResizeObserver</h3>\n    <p>The <strong>ResizeObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>ResizeObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of ResizeObserver\nconsole.log(\"Initializing ResizeObserver...\");\n\ntry {\n  // Using the core concept\n  const obs = new ResizeObserver(e => console.log(e));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing ResizeObserver:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-performance",
    "title": "Performance API",
    "badge": "API",
    "emoji": "⏱️",
    "defaultCode": "console.log(performance.now());",
    "content": "\n    <h3>📌 Deep Dive: Performance API</h3>\n    <p>The <strong>Performance API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Performance API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Performance API\nconsole.log(\"Initializing Performance API...\");\n\ntry {\n  // Using the core concept\n  console.log(performance.now());\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Performance API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-webcrypto",
    "title": "Web Crypto API",
    "badge": "API",
    "emoji": "🔐",
    "defaultCode": "const arr = new Uint8Array(10);\ncrypto.getRandomValues(arr);\nconsole.log(arr);",
    "content": "\n    <h3>📌 Deep Dive: Web Crypto API</h3>\n    <p>The <strong>Web Crypto API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Web Crypto API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Web Crypto API\nconsole.log(\"Initializing Web Crypto API...\");\n\ntry {\n  // Using the core concept\n  const arr = new Uint8Array(10);\ncrypto.getRandomValues(arr);\nconsole.log(arr);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Web Crypto API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-webgl",
    "title": "WebGL",
    "badge": "API",
    "emoji": "🧊",
    "defaultCode": "/* const gl = canvas.getContext(\"webgl\"); */",
    "content": "\n    <h3>📌 Deep Dive: WebGL</h3>\n    <p>The <strong>WebGL</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>WebGL</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of WebGL\nconsole.log(\"Initializing WebGL...\");\n\ntry {\n  // Using the core concept\n  /* const gl = canvas.getContext(\"webgl\"); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing WebGL:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-fileapi",
    "title": "File API",
    "badge": "API",
    "emoji": "📁",
    "defaultCode": "/* const reader = new FileReader(); */",
    "content": "\n    <h3>📌 Deep Dive: File API</h3>\n    <p>The <strong>File API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>File API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of File API\nconsole.log(\"Initializing File API...\");\n\ntry {\n  // Using the core concept\n  /* const reader = new FileReader(); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing File API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-dragdrop",
    "title": "Drag & Drop",
    "badge": "DOM",
    "emoji": "🖱️",
    "defaultCode": "/* element.addEventListener(\"dragstart\", ...); */",
    "content": "\n    <h3>📌 Deep Dive: Drag & Drop</h3>\n    <p>The <strong>Drag & Drop</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Drag & Drop</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Drag & Drop\nconsole.log(\"Initializing Drag & Drop...\");\n\ntry {\n  // Using the core concept\n  /* element.addEventListener(\"dragstart\", ...); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Drag & Drop:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-history",
    "title": "History API",
    "badge": "API",
    "emoji": "⏪",
    "defaultCode": "history.pushState({page: 1}, \"title\", \"?page=1\");",
    "content": "\n    <h3>📌 Deep Dive: History API</h3>\n    <p>The <strong>History API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>History API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of History API\nconsole.log(\"Initializing History API...\");\n\ntry {\n  // Using the core concept\n  history.pushState({page: 1}, \"title\", \"?page=1\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing History API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-singleton",
    "title": "Singleton Pattern",
    "badge": "DESIGN",
    "emoji": "1️⃣",
    "defaultCode": "class Singleton {\n  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }\n}",
    "content": "\n    <h3>📌 Deep Dive: Singleton Pattern</h3>\n    <p>The <strong>Singleton Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Singleton Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Singleton Pattern\nconsole.log(\"Initializing Singleton Pattern...\");\n\ntry {\n  // Using the core concept\n  class Singleton {\n  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Singleton Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-factory",
    "title": "Factory Pattern",
    "badge": "DESIGN",
    "emoji": "🏭",
    "defaultCode": "class Factory {\n  static create(type) { return new type(); }\n}",
    "content": "\n    <h3>📌 Deep Dive: Factory Pattern</h3>\n    <p>The <strong>Factory Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Factory Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Factory Pattern\nconsole.log(\"Initializing Factory Pattern...\");\n\ntry {\n  // Using the core concept\n  class Factory {\n  static create(type) { return new type(); }\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Factory Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-observer",
    "title": "Observer Pattern",
    "badge": "DESIGN",
    "emoji": "👀",
    "defaultCode": "class Subject {\n  constructor() { this.obs = []; }\n  notify() { this.obs.forEach(o => o.update()); }\n}",
    "content": "\n    <h3>📌 Deep Dive: Observer Pattern</h3>\n    <p>The <strong>Observer Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Observer Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Observer Pattern\nconsole.log(\"Initializing Observer Pattern...\");\n\ntry {\n  // Using the core concept\n  class Subject {\n  constructor() { this.obs = []; }\n  notify() { this.obs.forEach(o => o.update()); }\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Observer Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-decorator",
    "title": "Decorator Pattern",
    "badge": "DESIGN",
    "emoji": "🎀",
    "defaultCode": "function decorate(obj) { obj.decorated = true; return obj; }",
    "content": "\n    <h3>📌 Deep Dive: Decorator Pattern</h3>\n    <p>The <strong>Decorator Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Decorator Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Decorator Pattern\nconsole.log(\"Initializing Decorator Pattern...\");\n\ntry {\n  // Using the core concept\n  function decorate(obj) { obj.decorated = true; return obj; }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Decorator Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-facade",
    "title": "Facade Pattern",
    "badge": "DESIGN",
    "emoji": "🏛️",
    "defaultCode": "class Facade {\n  static simple() { ComplexAPI.doA(); ComplexAPI.doB(); }\n}",
    "content": "\n    <h3>📌 Deep Dive: Facade Pattern</h3>\n    <p>The <strong>Facade Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Facade Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Facade Pattern\nconsole.log(\"Initializing Facade Pattern...\");\n\ntry {\n  // Using the core concept\n  class Facade {\n  static simple() { ComplexAPI.doA(); ComplexAPI.doB(); }\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Facade Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-modulepattern",
    "title": "Module Pattern",
    "badge": "DESIGN",
    "emoji": "📦",
    "defaultCode": "const Module = (function() {\n  let privateVar = 1;\n  return { get: () => privateVar };\n})();",
    "content": "\n    <h3>📌 Deep Dive: Module Pattern</h3>\n    <p>The <strong>Module Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Module Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Module Pattern\nconsole.log(\"Initializing Module Pattern...\");\n\ntry {\n  // Using the core concept\n  const Module = (function() {\n  let privateVar = 1;\n  return { get: () => privateVar };\n})();\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Module Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-currying",
    "title": "Currying",
    "badge": "FUNCTIONAL",
    "emoji": "🍛",
    "defaultCode": "const add = a => b => a + b;\nconsole.log(add(1)(2));",
    "content": "\n    <h3>📌 Deep Dive: Currying</h3>\n    <p>The <strong>Currying</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Currying</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Currying\nconsole.log(\"Initializing Currying...\");\n\ntry {\n  // Using the core concept\n  const add = a => b => a + b;\nconsole.log(add(1)(2));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Currying:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-composition",
    "title": "Composition",
    "badge": "FUNCTIONAL",
    "emoji": "🧩",
    "defaultCode": "const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);",
    "content": "\n    <h3>📌 Deep Dive: Composition</h3>\n    <p>The <strong>Composition</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Composition</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Composition\nconsole.log(\"Initializing Composition...\");\n\ntry {\n  // Using the core concept\n  const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Composition:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-memoization",
    "title": "Memoization",
    "badge": "PERFORMANCE",
    "emoji": "🧠",
    "defaultCode": "const memo = {};\nfunction calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }",
    "content": "\n    <h3>📌 Deep Dive: Memoization</h3>\n    <p>The <strong>Memoization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Memoization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Memoization\nconsole.log(\"Initializing Memoization...\");\n\ntry {\n  // Using the core concept\n  const memo = {};\nfunction calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Memoization:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-tailcall",
    "title": "Tail Call Optimization",
    "badge": "PERFORMANCE",
    "emoji": "🐍",
    "defaultCode": "function fact(n, acc=1) { if(n<=1) return acc; return fact(n-1, n*acc); }",
    "content": "\n    <h3>📌 Deep Dive: Tail Call Optimization</h3>\n    <p>The <strong>Tail Call Optimization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Tail Call Optimization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Tail Call Optimization\nconsole.log(\"Initializing Tail Call Optimization...\");\n\ntry {\n  // Using the core concept\n  function fact(n, acc=1) { if(n<=1) return acc; return fact(n-1, n*acc); }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Tail Call Optimization:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-webassembly",
    "title": "WebAssembly",
    "badge": "API",
    "emoji": "🚀",
    "defaultCode": "/* WebAssembly.instantiateStreaming(fetch(\"app.wasm\")); */",
    "content": "\n    <h3>📌 Deep Dive: WebAssembly</h3>\n    <p>The <strong>WebAssembly</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>WebAssembly</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of WebAssembly\nconsole.log(\"Initializing WebAssembly...\");\n\ntry {\n  // Using the core concept\n  /* WebAssembly.instantiateStreaming(fetch(\"app.wasm\")); */\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing WebAssembly:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-sharedarraybuffer",
    "title": "SharedArrayBuffer",
    "badge": "ADVANCED",
    "emoji": "🧮",
    "defaultCode": "const sab = new SharedArrayBuffer(1024);\nconsole.log(sab);",
    "content": "\n    <h3>📌 Deep Dive: SharedArrayBuffer</h3>\n    <p>The <strong>SharedArrayBuffer</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>SharedArrayBuffer</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of SharedArrayBuffer\nconsole.log(\"Initializing SharedArrayBuffer...\");\n\ntry {\n  // Using the core concept\n  const sab = new SharedArrayBuffer(1024);\nconsole.log(sab);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing SharedArrayBuffer:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-atomics",
    "title": "Atomics",
    "badge": "ADVANCED",
    "emoji": "⚛️",
    "defaultCode": "const sab = new SharedArrayBuffer(1024);\nconst view = new Int32Array(sab);\nAtomics.add(view, 0, 5);",
    "content": "\n    <h3>📌 Deep Dive: Atomics</h3>\n    <p>The <strong>Atomics</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Atomics</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Atomics\nconsole.log(\"Initializing Atomics...\");\n\ntry {\n  // Using the core concept\n  const sab = new SharedArrayBuffer(1024);\nconst view = new Int32Array(sab);\nAtomics.add(view, 0, 5);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Atomics:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-padstart",
    "title": "String.prototype.padStart()",
    "badge": "ES8",
    "emoji": "📝",
    "defaultCode": "const str = \"5\";\nconsole.log(str.padStart(3, \"0\")); // \"005\"",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.padStart()</h3>\n    <p>The <strong>String.prototype.padStart()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.padStart()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.padStart()\nconsole.log(\"Initializing String.prototype.padStart()...\");\n\ntry {\n  // Using the core concept\n  const str = \"5\";\nconsole.log(str.padStart(3, \"0\")); // \"005\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.padStart():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-padend",
    "title": "String.prototype.padEnd()",
    "badge": "ES8",
    "emoji": "📝",
    "defaultCode": "const str = \"5\";\nconsole.log(str.padEnd(3, \"0\")); // \"500\"",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.padEnd()</h3>\n    <p>The <strong>String.prototype.padEnd()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.padEnd()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.padEnd()\nconsole.log(\"Initializing String.prototype.padEnd()...\");\n\ntry {\n  // Using the core concept\n  const str = \"5\";\nconsole.log(str.padEnd(3, \"0\")); // \"500\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.padEnd():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-startswith",
    "title": "String.prototype.startsWith()",
    "badge": "ES6",
    "emoji": "📝",
    "defaultCode": "const str = \"Hello World\";\nconsole.log(str.startsWith(\"Hello\")); // true",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.startsWith()</h3>\n    <p>The <strong>String.prototype.startsWith()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.startsWith()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.startsWith()\nconsole.log(\"Initializing String.prototype.startsWith()...\");\n\ntry {\n  // Using the core concept\n  const str = \"Hello World\";\nconsole.log(str.startsWith(\"Hello\")); // true\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.startsWith():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-endswith",
    "title": "String.prototype.endsWith()",
    "badge": "ES6",
    "emoji": "📝",
    "defaultCode": "const str = \"Hello World\";\nconsole.log(str.endsWith(\"World\")); // true",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.endsWith()</h3>\n    <p>The <strong>String.prototype.endsWith()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.endsWith()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.endsWith()\nconsole.log(\"Initializing String.prototype.endsWith()...\");\n\ntry {\n  // Using the core concept\n  const str = \"Hello World\";\nconsole.log(str.endsWith(\"World\")); // true\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.endsWith():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-includes-string",
    "title": "String.prototype.includes()",
    "badge": "ES6",
    "emoji": "🔍",
    "defaultCode": "const str = \"JavaScript\";\nconsole.log(str.includes(\"Script\")); // true",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.includes()</h3>\n    <p>The <strong>String.prototype.includes()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.includes()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.includes()\nconsole.log(\"Initializing String.prototype.includes()...\");\n\ntry {\n  // Using the core concept\n  const str = \"JavaScript\";\nconsole.log(str.includes(\"Script\")); // true\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.includes():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-matchall",
    "title": "String.prototype.matchAll()",
    "badge": "ES10",
    "emoji": "🔍",
    "defaultCode": "const str = \"t1 t2\";\nconst matches = [...str.matchAll(/t(d)/g)];\nconsole.log(matches[0][1]); // \"1\"",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.matchAll()</h3>\n    <p>The <strong>String.prototype.matchAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.matchAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.matchAll()\nconsole.log(\"Initializing String.prototype.matchAll()...\");\n\ntry {\n  // Using the core concept\n  const str = \"t1 t2\";\nconst matches = [...str.matchAll(/t(d)/g)];\nconsole.log(matches[0][1]); // \"1\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.matchAll():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-replaceall",
    "title": "String.prototype.replaceAll()",
    "badge": "ES12",
    "emoji": "🔄",
    "defaultCode": "const str = \"a-b-c\";\nconsole.log(str.replaceAll(\"-\", \"+\")); // \"a+b+c\"",
    "content": "\n    <h3>📌 Deep Dive: String.prototype.replaceAll()</h3>\n    <p>The <strong>String.prototype.replaceAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.prototype.replaceAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.prototype.replaceAll()\nconsole.log(\"Initializing String.prototype.replaceAll()...\");\n\ntry {\n  // Using the core concept\n  const str = \"a-b-c\";\nconsole.log(str.replaceAll(\"-\", \"+\")); // \"a+b+c\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.prototype.replaceAll():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-flat",
    "title": "Array.prototype.flat()",
    "badge": "ES10",
    "emoji": "🥞",
    "defaultCode": "const arr = [1, [2, [3]]];\nconsole.log(arr.flat(2)); // [1, 2, 3]",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.flat()</h3>\n    <p>The <strong>Array.prototype.flat()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.flat()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.flat()\nconsole.log(\"Initializing Array.prototype.flat()...\");\n\ntry {\n  // Using the core concept\n  const arr = [1, [2, [3]]];\nconsole.log(arr.flat(2)); // [1, 2, 3]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.flat():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-flatmap",
    "title": "Array.prototype.flatMap()",
    "badge": "ES10",
    "emoji": "🗺️",
    "defaultCode": "const arr = [1, 2, 3];\nconsole.log(arr.flatMap(x => [x, x*2])); // [1, 2, 2, 4, 3, 6]",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.flatMap()</h3>\n    <p>The <strong>Array.prototype.flatMap()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.flatMap()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.flatMap()\nconsole.log(\"Initializing Array.prototype.flatMap()...\");\n\ntry {\n  // Using the core concept\n  const arr = [1, 2, 3];\nconsole.log(arr.flatMap(x => [x, x*2])); // [1, 2, 2, 4, 3, 6]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.flatMap():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-copywithin",
    "title": "Array.prototype.copyWithin()",
    "badge": "ES6",
    "emoji": "📋",
    "defaultCode": "const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.copyWithin()</h3>\n    <p>The <strong>Array.prototype.copyWithin()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.copyWithin()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.copyWithin()\nconsole.log(\"Initializing Array.prototype.copyWithin()...\");\n\ntry {\n  // Using the core concept\n  const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.copyWithin():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-fill",
    "title": "Array.prototype.fill()",
    "badge": "ES6",
    "emoji": "🪣",
    "defaultCode": "const arr = new Array(3).fill(0);\nconsole.log(arr); // [0, 0, 0]",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.fill()</h3>\n    <p>The <strong>Array.prototype.fill()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.fill()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.fill()\nconsole.log(\"Initializing Array.prototype.fill()...\");\n\ntry {\n  // Using the core concept\n  const arr = new Array(3).fill(0);\nconsole.log(arr); // [0, 0, 0]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.fill():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-findlast",
    "title": "Array.prototype.findLast()",
    "badge": "ES13",
    "emoji": "🔍",
    "defaultCode": "const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.findLast(n => n > 10)); // 44",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.findLast()</h3>\n    <p>The <strong>Array.prototype.findLast()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.findLast()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.findLast()\nconsole.log(\"Initializing Array.prototype.findLast()...\");\n\ntry {\n  // Using the core concept\n  const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.findLast(n => n > 10)); // 44\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.findLast():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-findlastindex",
    "title": "Array.prototype.findLastIndex()",
    "badge": "ES13",
    "emoji": "🔍",
    "defaultCode": "const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.findLastIndex(n => n > 10)); // 4",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.findLastIndex()</h3>\n    <p>The <strong>Array.prototype.findLastIndex()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.findLastIndex()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.findLastIndex()\nconsole.log(\"Initializing Array.prototype.findLastIndex()...\");\n\ntry {\n  // Using the core concept\n  const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.findLastIndex(n => n > 10)); // 4\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.findLastIndex():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-reduceright",
    "title": "Array.prototype.reduceRight()",
    "badge": "ES5",
    "emoji": "⬅️",
    "defaultCode": "const arr = [\"a\", \"b\", \"c\"];\nconsole.log(arr.reduceRight((acc, cur) => acc + cur)); // \"cba\"",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.reduceRight()</h3>\n    <p>The <strong>Array.prototype.reduceRight()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.reduceRight()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.reduceRight()\nconsole.log(\"Initializing Array.prototype.reduceRight()...\");\n\ntry {\n  // Using the core concept\n  const arr = [\"a\", \"b\", \"c\"];\nconsole.log(arr.reduceRight((acc, cur) => acc + cur)); // \"cba\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.reduceRight():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-array-from",
    "title": "Array.from()",
    "badge": "ES6",
    "emoji": "🪄",
    "defaultCode": "const set = new Set([\"a\", \"b\"]);\nconsole.log(Array.from(set)); // [\"a\", \"b\"]",
    "content": "\n    <h3>📌 Deep Dive: Array.from()</h3>\n    <p>The <strong>Array.from()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.from()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.from()\nconsole.log(\"Initializing Array.from()...\");\n\ntry {\n  // Using the core concept\n  const set = new Set([\"a\", \"b\"]);\nconsole.log(Array.from(set)); // [\"a\", \"b\"]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.from():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-array-isarray",
    "title": "Array.isArray()",
    "badge": "ES5",
    "emoji": "❓",
    "defaultCode": "console.log(Array.isArray([1, 2])); // true\nconsole.log(Array.isArray({})); // false",
    "content": "\n    <h3>📌 Deep Dive: Array.isArray()</h3>\n    <p>The <strong>Array.isArray()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.isArray()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.isArray()\nconsole.log(\"Initializing Array.isArray()...\");\n\ntry {\n  // Using the core concept\n  console.log(Array.isArray([1, 2])); // true\nconsole.log(Array.isArray({})); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.isArray():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-array-entries",
    "title": "Array.prototype.entries()",
    "badge": "ES6",
    "emoji": "📜",
    "defaultCode": "const arr = [\"a\", \"b\"];\nfor (const [index, element] of arr.entries()) {\n  console.log(index, element);\n}",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.entries()</h3>\n    <p>The <strong>Array.prototype.entries()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.entries()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.entries()\nconsole.log(\"Initializing Array.prototype.entries()...\");\n\ntry {\n  // Using the core concept\n  const arr = [\"a\", \"b\"];\nfor (const [index, element] of arr.entries()) {\n  console.log(index, element);\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.entries():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math-sign",
    "title": "Math.sign()",
    "badge": "ES6",
    "emoji": "➕",
    "defaultCode": "console.log(Math.sign(-5)); // -1\nconsole.log(Math.sign(0)); // 0\nconsole.log(Math.sign(5)); // 1",
    "content": "\n    <h3>📌 Deep Dive: Math.sign()</h3>\n    <p>The <strong>Math.sign()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math.sign()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math.sign()\nconsole.log(\"Initializing Math.sign()...\");\n\ntry {\n  // Using the core concept\n  console.log(Math.sign(-5)); // -1\nconsole.log(Math.sign(0)); // 0\nconsole.log(Math.sign(5)); // 1\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math.sign():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math-trunc",
    "title": "Math.trunc()",
    "badge": "ES6",
    "emoji": "✂️",
    "defaultCode": "console.log(Math.trunc(13.37)); // 13\nconsole.log(Math.trunc(-0.123)); // -0",
    "content": "\n    <h3>📌 Deep Dive: Math.trunc()</h3>\n    <p>The <strong>Math.trunc()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math.trunc()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math.trunc()\nconsole.log(\"Initializing Math.trunc()...\");\n\ntry {\n  // Using the core concept\n  console.log(Math.trunc(13.37)); // 13\nconsole.log(Math.trunc(-0.123)); // -0\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math.trunc():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math-cbrt",
    "title": "Math.cbrt()",
    "badge": "ES6",
    "emoji": "🧊",
    "defaultCode": "console.log(Math.cbrt(27)); // 3\nconsole.log(Math.cbrt(64)); // 4",
    "content": "\n    <h3>📌 Deep Dive: Math.cbrt()</h3>\n    <p>The <strong>Math.cbrt()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math.cbrt()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math.cbrt()\nconsole.log(\"Initializing Math.cbrt()...\");\n\ntry {\n  // Using the core concept\n  console.log(Math.cbrt(27)); // 3\nconsole.log(Math.cbrt(64)); // 4\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math.cbrt():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math-hypot",
    "title": "Math.hypot()",
    "badge": "ES6",
    "emoji": "📐",
    "defaultCode": "console.log(Math.hypot(3, 4)); // 5",
    "content": "\n    <h3>📌 Deep Dive: Math.hypot()</h3>\n    <p>The <strong>Math.hypot()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math.hypot()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math.hypot()\nconsole.log(\"Initializing Math.hypot()...\");\n\ntry {\n  // Using the core concept\n  console.log(Math.hypot(3, 4)); // 5\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math.hypot():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math-imul",
    "title": "Math.imul()",
    "badge": "ES6",
    "emoji": "✖️",
    "defaultCode": "console.log(Math.imul(2, 4)); // 8",
    "content": "\n    <h3>📌 Deep Dive: Math.imul()</h3>\n    <p>The <strong>Math.imul()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math.imul()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math.imul()\nconsole.log(\"Initializing Math.imul()...\");\n\ntry {\n  // Using the core concept\n  console.log(Math.imul(2, 4)); // 8\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math.imul():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-number-isfinite",
    "title": "Number.isFinite()",
    "badge": "ES6",
    "emoji": "🔢",
    "defaultCode": "console.log(Number.isFinite(10)); // true\nconsole.log(Number.isFinite(Infinity)); // false",
    "content": "\n    <h3>📌 Deep Dive: Number.isFinite()</h3>\n    <p>The <strong>Number.isFinite()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.isFinite()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.isFinite()\nconsole.log(\"Initializing Number.isFinite()...\");\n\ntry {\n  // Using the core concept\n  console.log(Number.isFinite(10)); // true\nconsole.log(Number.isFinite(Infinity)); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.isFinite():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-number-isinteger",
    "title": "Number.isInteger()",
    "badge": "ES6",
    "emoji": "🔢",
    "defaultCode": "console.log(Number.isInteger(10)); // true\nconsole.log(Number.isInteger(10.5)); // false",
    "content": "\n    <h3>📌 Deep Dive: Number.isInteger()</h3>\n    <p>The <strong>Number.isInteger()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.isInteger()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.isInteger()\nconsole.log(\"Initializing Number.isInteger()...\");\n\ntry {\n  // Using the core concept\n  console.log(Number.isInteger(10)); // true\nconsole.log(Number.isInteger(10.5)); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.isInteger():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-number-isnan",
    "title": "Number.isNaN()",
    "badge": "ES6",
    "emoji": "❓",
    "defaultCode": "console.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN(\"NaN\")); // false",
    "content": "\n    <h3>📌 Deep Dive: Number.isNaN()</h3>\n    <p>The <strong>Number.isNaN()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.isNaN()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.isNaN()\nconsole.log(\"Initializing Number.isNaN()...\");\n\ntry {\n  // Using the core concept\n  console.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN(\"NaN\")); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.isNaN():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-number-issafeinteger",
    "title": "Number.isSafeInteger()",
    "badge": "ES6",
    "emoji": "🔒",
    "defaultCode": "console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true\nconsole.log(Number.isSafeInteger(Math.pow(2, 53))); // false",
    "content": "\n    <h3>📌 Deep Dive: Number.isSafeInteger()</h3>\n    <p>The <strong>Number.isSafeInteger()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.isSafeInteger()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.isSafeInteger()\nconsole.log(\"Initializing Number.isSafeInteger()...\");\n\ntry {\n  // Using the core concept\n  console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true\nconsole.log(Number.isSafeInteger(Math.pow(2, 53))); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.isSafeInteger():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-max-safe-integer",
    "title": "Number.MAX_SAFE_INTEGER",
    "badge": "ES6",
    "emoji": "🔝",
    "defaultCode": "console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991",
    "content": "\n    <h3>📌 Deep Dive: Number.MAX_SAFE_INTEGER</h3>\n    <p>The <strong>Number.MAX_SAFE_INTEGER</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.MAX_SAFE_INTEGER</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.MAX_SAFE_INTEGER\nconsole.log(\"Initializing Number.MAX_SAFE_INTEGER...\");\n\ntry {\n  // Using the core concept\n  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.MAX_SAFE_INTEGER:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-epsilon",
    "title": "Number.EPSILON",
    "badge": "ES6",
    "emoji": "🔬",
    "defaultCode": "console.log(0.1 + 0.2 === 0.3); // false\nconsole.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true",
    "content": "\n    <h3>📌 Deep Dive: Number.EPSILON</h3>\n    <p>The <strong>Number.EPSILON</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Number.EPSILON</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Number.EPSILON\nconsole.log(\"Initializing Number.EPSILON...\");\n\ntry {\n  // Using the core concept\n  console.log(0.1 + 0.2 === 0.3); // false\nconsole.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Number.EPSILON:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-assign",
    "title": "Object.assign()",
    "badge": "ES6",
    "emoji": "📋",
    "defaultCode": "const target = { a: 1, b: 2 };\nconst source = { b: 4, c: 5 };\nconsole.log(Object.assign(target, source)); // { a: 1, b: 4, c: 5 }",
    "content": "\n    <h3>📌 Deep Dive: Object.assign()</h3>\n    <p>The <strong>Object.assign()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.assign()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.assign()\nconsole.log(\"Initializing Object.assign()...\");\n\ntry {\n  // Using the core concept\n  const target = { a: 1, b: 2 };\nconst source = { b: 4, c: 5 };\nconsole.log(Object.assign(target, source)); // { a: 1, b: 4, c: 5 }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.assign():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-create",
    "title": "Object.create()",
    "badge": "ES5",
    "emoji": "🏗️",
    "defaultCode": "const proto = { greeting: \"hello\" };\nconst obj = Object.create(proto);\nconsole.log(obj.greeting); // \"hello\"",
    "content": "\n    <h3>📌 Deep Dive: Object.create()</h3>\n    <p>The <strong>Object.create()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.create()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.create()\nconsole.log(\"Initializing Object.create()...\");\n\ntry {\n  // Using the core concept\n  const proto = { greeting: \"hello\" };\nconst obj = Object.create(proto);\nconsole.log(obj.greeting); // \"hello\"\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.create():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-defineproperty",
    "title": "Object.defineProperty()",
    "badge": "ES5",
    "emoji": "🔒",
    "defaultCode": "const obj = {};\nObject.defineProperty(obj, \"prop\", {\n  value: 42,\n  writable: false\n});\nobj.prop = 77; // fails silently in non-strict mode\nconsole.log(obj.prop); // 42",
    "content": "\n    <h3>📌 Deep Dive: Object.defineProperty()</h3>\n    <p>The <strong>Object.defineProperty()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.defineProperty()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.defineProperty()\nconsole.log(\"Initializing Object.defineProperty()...\");\n\ntry {\n  // Using the core concept\n  const obj = {};\nObject.defineProperty(obj, \"prop\", {\n  value: 42,\n  writable: false\n});\nobj.prop = 77; // fails silently in non-strict mode\nconsole.log(obj.prop); // 42\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.defineProperty():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-entries",
    "title": "Object.entries()",
    "badge": "ES8",
    "emoji": "📜",
    "defaultCode": "const obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [[\"a\", 1], [\"b\", 2]]",
    "content": "\n    <h3>📌 Deep Dive: Object.entries()</h3>\n    <p>The <strong>Object.entries()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.entries()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.entries()\nconsole.log(\"Initializing Object.entries()...\");\n\ntry {\n  // Using the core concept\n  const obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [[\"a\", 1], [\"b\", 2]]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.entries():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-freeze",
    "title": "Object.freeze()",
    "badge": "ES5",
    "emoji": "❄️",
    "defaultCode": "const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2; // fails silently\nconsole.log(obj.a); // 1",
    "content": "\n    <h3>📌 Deep Dive: Object.freeze()</h3>\n    <p>The <strong>Object.freeze()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.freeze()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.freeze()\nconsole.log(\"Initializing Object.freeze()...\");\n\ntry {\n  // Using the core concept\n  const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2; // fails silently\nconsole.log(obj.a); // 1\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.freeze():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-fromentries",
    "title": "Object.fromEntries()",
    "badge": "ES10",
    "emoji": "🪄",
    "defaultCode": "const entries = [[\"a\", 1], [\"b\", 2]];\nconsole.log(Object.fromEntries(entries)); // { a: 1, b: 2 }",
    "content": "\n    <h3>📌 Deep Dive: Object.fromEntries()</h3>\n    <p>The <strong>Object.fromEntries()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.fromEntries()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.fromEntries()\nconsole.log(\"Initializing Object.fromEntries()...\");\n\ntry {\n  // Using the core concept\n  const entries = [[\"a\", 1], [\"b\", 2]];\nconsole.log(Object.fromEntries(entries)); // { a: 1, b: 2 }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.fromEntries():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-is",
    "title": "Object.is()",
    "badge": "ES6",
    "emoji": "⚖️",
    "defaultCode": "console.log(Object.is(NaN, NaN)); // true\nconsole.log(NaN === NaN); // false\nconsole.log(Object.is(0, -0)); // false",
    "content": "\n    <h3>📌 Deep Dive: Object.is()</h3>\n    <p>The <strong>Object.is()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.is()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.is()\nconsole.log(\"Initializing Object.is()...\");\n\ntry {\n  // Using the core concept\n  console.log(Object.is(NaN, NaN)); // true\nconsole.log(NaN === NaN); // false\nconsole.log(Object.is(0, -0)); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.is():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-seal",
    "title": "Object.seal()",
    "badge": "ES5",
    "emoji": "🤐",
    "defaultCode": "const obj = { a: 1 };\nObject.seal(obj);\nobj.b = 2; // Cannot add new properties\nobj.a = 5; // CAN mutate existing properties\nconsole.log(obj); // { a: 5 }",
    "content": "\n    <h3>📌 Deep Dive: Object.seal()</h3>\n    <p>The <strong>Object.seal()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.seal()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.seal()\nconsole.log(\"Initializing Object.seal()...\");\n\ntry {\n  // Using the core concept\n  const obj = { a: 1 };\nObject.seal(obj);\nobj.b = 2; // Cannot add new properties\nobj.a = 5; // CAN mutate existing properties\nconsole.log(obj); // { a: 5 }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.seal():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-values",
    "title": "Object.values()",
    "badge": "ES8",
    "emoji": "🔢",
    "defaultCode": "const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.values(obj)); // [1, 2, 3]",
    "content": "\n    <h3>📌 Deep Dive: Object.values()</h3>\n    <p>The <strong>Object.values()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.values()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.values()\nconsole.log(\"Initializing Object.values()...\");\n\ntry {\n  // Using the core concept\n  const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.values(obj)); // [1, 2, 3]\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.values():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-globalthis",
    "title": "globalThis",
    "badge": "ES11",
    "emoji": "🌐",
    "defaultCode": "console.log(globalThis === window); // true (in browser)\nconsole.log(globalThis === global); // true (in Node.js)",
    "content": "\n    <h3>📌 Deep Dive: globalThis</h3>\n    <p>The <strong>globalThis</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>globalThis</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of globalThis\nconsole.log(\"Initializing globalThis...\");\n\ntry {\n  // Using the core concept\n  console.log(globalThis === window); // true (in browser)\nconsole.log(globalThis === global); // true (in Node.js)\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing globalThis:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-hasown",
    "title": "Object.hasOwn()",
    "badge": "ES13",
    "emoji": "🛡️",
    "defaultCode": "const obj = { prop: 42 };\nconsole.log(Object.hasOwn(obj, \"prop\")); // true\n// Safer than obj.hasOwnProperty(\"prop\")",
    "content": "\n    <h3>📌 Deep Dive: Object.hasOwn()</h3>\n    <p>The <strong>Object.hasOwn()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.hasOwn()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.hasOwn()\nconsole.log(\"Initializing Object.hasOwn()...\");\n\ntry {\n  // Using the core concept\n  const obj = { prop: 42 };\nconsole.log(Object.hasOwn(obj, \"prop\")); // true\n// Safer than obj.hasOwnProperty(\"prop\")\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.hasOwn():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-at",
    "title": "Array.prototype.at()",
    "badge": "ES13",
    "emoji": "🎯",
    "defaultCode": "const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.at(-1)); // 44 (gets the last element)",
    "content": "\n    <h3>📌 Deep Dive: Array.prototype.at()</h3>\n    <p>The <strong>Array.prototype.at()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array.prototype.at()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array.prototype.at()\nconsole.log(\"Initializing Array.prototype.at()...\");\n\ntry {\n  // Using the core concept\n  const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.at(-1)); // 44 (gets the last element)\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array.prototype.at():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-observer-pattern",
    "title": "Observer Pattern",
    "badge": "DESIGN",
    "emoji": "👀",
    "defaultCode": "class Subject {\n  constructor() { this.obs = []; }\n  notify() { this.obs.forEach(o => o.update()); }\n}",
    "content": "\n    <h3>📌 Deep Dive: Observer Pattern</h3>\n    <p>The <strong>Observer Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Observer Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Observer Pattern\nconsole.log(\"Initializing Observer Pattern...\");\n\ntry {\n  // Using the core concept\n  class Subject {\n  constructor() { this.obs = []; }\n  notify() { this.obs.forEach(o => o.update()); }\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Observer Pattern:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-console",
    "title": "console.log()",
    "badge": "BASICS",
    "emoji": "🖨️",
    "defaultCode": "// Use console.log to print output\nlet greeting = \"Hello, JavaScript Mastery!\";\nconsole.log(greeting);\n\n// You can pass multiple arguments\nconsole.log(\"Status:\", 200, \"OK\");",
    "content": "\n    <h3>📌 Deep Dive: console.log()</h3>\n    <p>The <strong>console.log()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>console.log()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of console.log()\nconsole.log(\"Initializing console.log()...\");\n\ntry {\n  // Using the core concept\n  // Use console.log to print output\nlet greeting = \"Hello, JavaScript Mastery!\";\nconsole.log(greeting);\n\n// You can pass multiple arguments\nconsole.log(\"Status:\", 200, \"OK\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing console.log():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-arrow-functions",
    "title": "Arrow Functions",
    "badge": "ES6+",
    "emoji": "🏹",
    "defaultCode": "// Traditional Function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow Function\nconst multiply = (a, b) => a * b;\n\nconsole.log(\"Add:\", add(5, 5));\nconsole.log(\"Multiply:\", multiply(5, 5));\n\n// Implicit return for one-liners\nconst greet = name => \"Hello \" + name;\nconsole.log(greet(\"Sanskar\"));",
    "content": "\n    <h3>📌 Deep Dive: Arrow Functions</h3>\n    <p>The <strong>Arrow Functions</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Arrow Functions</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Arrow Functions\nconsole.log(\"Initializing Arrow Functions...\");\n\ntry {\n  // Using the core concept\n  // Traditional Function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow Function\nconst multiply = (a, b) => a * b;\n\nconsole.log(\"Add:\", add(5, 5));\nconsole.log(\"Multiply:\", multiply(5, 5));\n\n// Implicit return for one-liners\nconst greet = name => \"Hello \" + name;\nconsole.log(greet(\"Sanskar\"));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Arrow Functions:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-template-literals",
    "title": "Template Literals",
    "badge": "ES6+",
    "emoji": "📝",
    "defaultCode": "const hero = \"Batman\";\nconst city = \"Gotham\";\n\n// Old way (concatenation)\nconst msg1 = hero + \" protects \" + city + \"!\";\n\n// Template Literals (using backticks)\nconst msg2 = `${hero} protects ${city}!`;\n\nconsole.log(\"Old way:\", msg1);\nconsole.log(\"New way:\", msg2);\n\n// Multi-line strings are easy too!\nconst poem = `\n  Roses are red,\n  JS is cool,\n  Template literals\n  Totally rule.\n`;\nconsole.log(poem);",
    "content": "\n    <h3>📌 Deep Dive: Template Literals</h3>\n    <p>The <strong>Template Literals</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Template Literals</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Template Literals\nconsole.log(\"Initializing Template Literals...\");\n\ntry {\n  // Using the core concept\n  const hero = \"Batman\";\nconst city = \"Gotham\";\n\n// Old way (concatenation)\nconst msg1 = hero + \" protects \" + city + \"!\";\n\n// Template Literals (using backticks)\nconst msg2 = `${hero} protects ${city}!`;\n\nconsole.log(\"Old way:\", msg1);\nconsole.log(\"New way:\", msg2);\n\n// Multi-line strings are easy too!\nconst poem = `\n  Roses are red,\n  JS is cool,\n  Template literals\n  Totally rule.\n`;\nconsole.log(poem);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Template Literals:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-destructuring",
    "title": "Destructuring",
    "badge": "ES6+",
    "emoji": "🧩",
    "defaultCode": "const user = {\n  name: \"Sanskar\",\n  role: \"Developer\",\n  country: \"India\"\n    };\n\n// Object Destructuring\nconst { name, role } = user;\nconsole.log(`${name} is a ${role}.`);\n\n// Array Destructuring\nconst colors = [\"Red\", \"Green\", \"Blue\"];\nconst [primary, secondary] = colors;\nconsole.log(\"Colors:\", primary, secondary);",
    "content": "\n    <h3>📌 Deep Dive: Destructuring</h3>\n    <p>The <strong>Destructuring</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Destructuring</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Destructuring\nconsole.log(\"Initializing Destructuring...\");\n\ntry {\n  // Using the core concept\n  const user = {\n  name: \"Sanskar\",\n  role: \"Developer\",\n  country: \"India\"\n    };\n\n// Object Destructuring\nconst { name, role } = user;\nconsole.log(`${name} is a ${role}.`);\n\n// Array Destructuring\nconst colors = [\"Red\", \"Green\", \"Blue\"];\nconst [primary, secondary] = colors;\nconsole.log(\"Colors:\", primary, secondary);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Destructuring:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-spread",
    "title": "Spread Operator",
    "badge": "ES6+",
    "emoji": "🧈",
    "defaultCode": "// Spread with Arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, ...arr1]; \nconsole.log(\"Merged Array:\", arr2);\n\n// Spread with Objects\nconst baseConfig = { theme: \"dark\", api: \"v1\" };\nconst userConfig = { ...baseConfig, user: \"Sanskar\" };\nconsole.log(\"Merged Object:\", userConfig);",
    "content": "\n    <h3>📌 Deep Dive: Spread Operator</h3>\n    <p>The <strong>Spread Operator</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Spread Operator</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Spread Operator\nconsole.log(\"Initializing Spread Operator...\");\n\ntry {\n  // Using the core concept\n  // Spread with Arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, ...arr1]; \nconsole.log(\"Merged Array:\", arr2);\n\n// Spread with Objects\nconst baseConfig = { theme: \"dark\", api: \"v1\" };\nconst userConfig = { ...baseConfig, user: \"Sanskar\" };\nconsole.log(\"Merged Object:\", userConfig);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Spread Operator:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-map-filter",
    "title": "map() & filter()",
    "badge": "BASICS",
    "emoji": "🔍",
    "defaultCode": "const numbers = [1, 2, 3, 4, 5, 6];\n\n// filter() creates a new array with elements that pass a test\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(\"Evens:\", evens);\n\n// map() creates a new array by transforming every element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(\"Doubled:\", doubled);\n\n// You can chain them!\nconst doubledEvens = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * 2);\nconsole.log(\"Doubled Evens:\", doubledEvens);",
    "content": "\n    <h3>📌 Deep Dive: map() & filter()</h3>\n    <p>The <strong>map() & filter()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>map() & filter()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of map() & filter()\nconsole.log(\"Initializing map() & filter()...\");\n\ntry {\n  // Using the core concept\n  const numbers = [1, 2, 3, 4, 5, 6];\n\n// filter() creates a new array with elements that pass a test\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(\"Evens:\", evens);\n\n// map() creates a new array by transforming every element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(\"Doubled:\", doubled);\n\n// You can chain them!\nconst doubledEvens = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * 2);\nconsole.log(\"Doubled Evens:\", doubledEvens);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing map() & filter():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-dom-selection",
    "title": "DOM Selection",
    "badge": "DOM",
    "emoji": "🎯",
    "defaultCode": "// The DOM (Document Object Model) lets JS interact with HTML\n// Note: We can't actually change the page structure in this sandbox,\n// but we can query it!\n\n// Querying the title of this page\nconst titleElement = document.querySelector('title');\nconsole.log(\"Page Title:\", titleElement.textContent);\n\n// Selecting multiple elements\nconst buttons = document.querySelectorAll('button');\nconsole.log(\"Number of buttons on this page:\", buttons.length);\n\n// Get element by ID\nconst nav = document.getElementById('searchInput');\nconsole.log(\"Search Input placeholder:\", nav.placeholder);",
    "content": "\n    <h3>📌 Deep Dive: DOM Selection</h3>\n    <p>The <strong>DOM Selection</strong> is a fundamental DOM API in JavaScript that allows developers to traverse and update efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>DOM Selection</code>, the Browser Rendering Engine (e.g., Blink/WebKit) optimizes the layout recalculations to ensure minimal overhead. By utilizing native C++ bindings for this dom api, JavaScript can traverse and update efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Batch your DOM reads and writes to avoid layout thrashing and forced synchronous layouts.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of DOM Selection\nconsole.log(\"Initializing DOM Selection...\");\n\ntry {\n  // Using the core concept\n  // The DOM (Document Object Model) lets JS interact with HTML\n// Note: We can't actually change the page structure in this sandbox,\n// but we can query it!\n\n// Querying the title of this page\nconst titleElement = document.querySelector('title');\nconsole.log(\"Page Title:\", titleElement.textContent);\n\n// Selecting multiple elements\nconst buttons = document.querySelectorAll('button');\nconsole.log(\"Number of buttons on this page:\", buttons.length);\n\n// Get element by ID\nconst nav = document.getElementById('searchInput');\nconsole.log(\"Search Input placeholder:\", nav.placeholder);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing DOM Selection:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-set-timeout",
    "title": "setTimeout",
    "badge": "ASYNC",
    "emoji": "⏱️",
    "defaultCode": "console.log(\"1. Starting\");\n\n// setTimeout executes a function after a specified delay\nsetTimeout(() => {\n  console.log(\"3. Executed after 1.5 seconds\");\n}, 1500);\n\nconsole.log(\"2. Waiting for timeout...\");",
    "content": "\n    <h3>📌 Deep Dive: setTimeout</h3>\n    <p>The <strong>setTimeout</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>setTimeout</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of setTimeout\nconsole.log(\"Initializing setTimeout...\");\n\ntry {\n  // Using the core concept\n  console.log(\"1. Starting\");\n\n// setTimeout executes a function after a specified delay\nsetTimeout(() => {\n  console.log(\"3. Executed after 1.5 seconds\");\n}, 1500);\n\nconsole.log(\"2. Waiting for timeout...\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing setTimeout:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-local-storage",
    "title": "localStorage",
    "badge": "BASICS",
    "emoji": "💾",
    "defaultCode": "// Save data to the browser\n\n    try {\n        localStorage.setItem('hero', 'Spiderman');\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n    try {\n        localStorage.setItem('score', '9000');\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n// Retrieve data\nconst myHero = localStorage.getItem('hero');\nconsole.log(\"Hero from storage:\", myHero);\n\n// Remove data\nlocalStorage.removeItem('score');\n\n// Check if removed\nconsole.log(\"Score after removal:\", localStorage.getItem('score')); // null",
    "content": "\n    <h3>📌 Deep Dive: localStorage</h3>\n    <p>The <strong>localStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>localStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of localStorage\nconsole.log(\"Initializing localStorage...\");\n\ntry {\n  // Using the core concept\n  // Save data to the browser\n\n    try {\n        localStorage.setItem('hero', 'Spiderman');\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n    try {\n        localStorage.setItem('score', '9000');\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n// Retrieve data\nconst myHero = localStorage.getItem('hero');\nconsole.log(\"Hero from storage:\", myHero);\n\n// Remove data\nlocalStorage.removeItem('score');\n\n// Check if removed\nconsole.log(\"Score after removal:\", localStorage.getItem('score')); // null\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing localStorage:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-ternary",
    "title": "Ternary Operator",
    "badge": "BASICS",
    "emoji": "❓",
    "defaultCode": "const age = 20;\n\n// Old way with if/else\nlet message1;\nif (age >= 18) {\n  message1 = \"Adult\";\n} else {\n  message1 = \"Minor\";\n}\n\n// Ternary Operator: condition ? true_expr : false_expr\nconst message2 = age >= 18 ? \"Adult\" : \"Minor\";\n\nconsole.log(\"if/else:\", message1);\nconsole.log(\"ternary:\", message2);",
    "content": "\n    <h3>📌 Deep Dive: Ternary Operator</h3>\n    <p>The <strong>Ternary Operator</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Ternary Operator</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Ternary Operator\nconsole.log(\"Initializing Ternary Operator...\");\n\ntry {\n  // Using the core concept\n  const age = 20;\n\n// Old way with if/else\nlet message1;\nif (age >= 18) {\n  message1 = \"Adult\";\n} else {\n  message1 = \"Minor\";\n}\n\n// Ternary Operator: condition ? true_expr : false_expr\nconst message2 = age >= 18 ? \"Adult\" : \"Minor\";\n\nconsole.log(\"if/else:\", message1);\nconsole.log(\"ternary:\", message2);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Ternary Operator:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-optional-chaining",
    "title": "Optional Chaining",
    "badge": "ES6+",
    "emoji": "🔗",
    "defaultCode": "const user = {\n  name: \"Sanskar\",\n  contact: {\n    email: \"sanskar@example.com\"\n    // phone is missing!\n  }\n};\n\n// Trying to access deeply nested property safely\n// If we did user.contact.phone.number, it would CRASH!\n\n// With optional chaining (?.)\nconst phone = user.contact?.phone?.number;\nconsole.log(\"Phone number:\", phone); // returns undefined instead of throwing an error\n\nconst email = user.contact?.email;\nconsole.log(\"Email:\", email);",
    "content": "\n    <h3>📌 Deep Dive: Optional Chaining</h3>\n    <p>The <strong>Optional Chaining</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Optional Chaining</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Optional Chaining\nconsole.log(\"Initializing Optional Chaining...\");\n\ntry {\n  // Using the core concept\n  const user = {\n  name: \"Sanskar\",\n  contact: {\n    email: \"sanskar@example.com\"\n    // phone is missing!\n  }\n};\n\n// Trying to access deeply nested property safely\n// If we did user.contact.phone.number, it would CRASH!\n\n// With optional chaining (?.)\nconst phone = user.contact?.phone?.number;\nconsole.log(\"Phone number:\", phone); // returns undefined instead of throwing an error\n\nconst email = user.contact?.email;\nconsole.log(\"Email:\", email);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Optional Chaining:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-nullish",
    "title": "Nullish Coalescing",
    "badge": "ES6+",
    "emoji": "👻",
    "defaultCode": "// The Nullish Coalescing operator (??) returns the right side \n// ONLY if the left side is null or undefined.\n\nconst name = null ?? \"Default Name\";\nconsole.log(\"Name:\", name);\n\n// Unlike || (OR), ?? respects falsy values like 0 or \"\"\nconst score = 0;\n\nconst fallbackOR = score || 100;\nconst fallbackNullish = score ?? 100;\n\nconsole.log(\"Using OR (||):\", fallbackOR); // 100 (wrong, score was 0!)\nconsole.log(\"Using Nullish (??):\", fallbackNullish); // 0 (correct!)",
    "content": "\n    <h3>📌 Deep Dive: Nullish Coalescing</h3>\n    <p>The <strong>Nullish Coalescing</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Nullish Coalescing</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Nullish Coalescing\nconsole.log(\"Initializing Nullish Coalescing...\");\n\ntry {\n  // Using the core concept\n  // The Nullish Coalescing operator (??) returns the right side \n// ONLY if the left side is null or undefined.\n\nconst name = null ?? \"Default Name\";\nconsole.log(\"Name:\", name);\n\n// Unlike || (OR), ?? respects falsy values like 0 or \"\"\nconst score = 0;\n\nconst fallbackOR = score || 100;\nconst fallbackNullish = score ?? 100;\n\nconsole.log(\"Using OR (||):\", fallbackOR); // 100 (wrong, score was 0!)\nconsole.log(\"Using Nullish (??):\", fallbackNullish); // 0 (correct!)\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Nullish Coalescing:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-try-catch",
    "title": "try / catch",
    "badge": "BASICS",
    "emoji": "🛡️",
    "defaultCode": "console.log(\"Starting script...\");\n\ntry {\n  // We will try to call a function that doesn't exist\n  nonExistentFunction();\n  \n  // This line never runs\n  console.log(\"This won't execute.\");\n} catch (error) {\n  // The code jumps here if an error occurs!\n  console.log(\"Oops! An error was caught:\");\n  console.log(\"Error Name:\", error.name);\n  console.log(\"Error Message:\", error.message);\n} finally {\n  console.log(\"The finally block ALWAYS runs!\");\n}\n\nconsole.log(\"Script continues normally...\");",
    "content": "\n    <h3>📌 Deep Dive: try / catch</h3>\n    <p>The <strong>try / catch</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>try / catch</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of try / catch\nconsole.log(\"Initializing try / catch...\");\n\ntry {\n  // Using the core concept\n  console.log(\"Starting script...\");\n\ntry {\n  // We will try to call a function that doesn't exist\n  nonExistentFunction();\n  \n  // This line never runs\n  console.log(\"This won't execute.\");\n} catch (error) {\n  // The code jumps here if an error occurs!\n  console.log(\"Oops! An error was caught:\");\n  console.log(\"Error Name:\", error.name);\n  console.log(\"Error Message:\", error.message);\n} finally {\n  console.log(\"The finally block ALWAYS runs!\");\n}\n\nconsole.log(\"Script continues normally...\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing try / catch:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-set",
    "title": "Set & Unique Arrays",
    "badge": "ES6+",
    "emoji": "🎭",
    "defaultCode": "// A Set only stores unique values\nconst mySet = new Set();\nmySet.add(1);\nmySet.add(2);\nmySet.add(1); // Ignored, 1 is already in the set!\n\nconsole.log(\"Set size:\", mySet.size);\n\n// Practical use: removing duplicates from an array\nconst duplicateArray = [1, 5, 5, 2, 9, 2, 1, 8];\nconst uniqueArray = [...new Set(duplicateArray)];\n\nconsole.log(\"Original array:\", duplicateArray);\nconsole.log(\"Unique array:\", uniqueArray);",
    "content": "\n    <h3>📌 Deep Dive: Set & Unique Arrays</h3>\n    <p>The <strong>Set & Unique Arrays</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Set & Unique Arrays</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Set & Unique Arrays\nconsole.log(\"Initializing Set & Unique Arrays...\");\n\ntry {\n  // Using the core concept\n  // A Set only stores unique values\nconst mySet = new Set();\nmySet.add(1);\nmySet.add(2);\nmySet.add(1); // Ignored, 1 is already in the set!\n\nconsole.log(\"Set size:\", mySet.size);\n\n// Practical use: removing duplicates from an array\nconst duplicateArray = [1, 5, 5, 2, 9, 2, 1, 8];\nconst uniqueArray = [...new Set(duplicateArray)];\n\nconsole.log(\"Original array:\", duplicateArray);\nconsole.log(\"Unique array:\", uniqueArray);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Set & Unique Arrays:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-reduce",
    "title": "reduce()",
    "badge": "ARRAYS",
    "emoji": "🗜️",
    "defaultCode": "const numbers = [10, 20, 30, 40];\n// reduce(accumulator, current_value)\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(\"Total Sum:\", sum);",
    "content": "\n    <h3>📌 Deep Dive: reduce()</h3>\n    <p>The <strong>reduce()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>reduce()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of reduce()\nconsole.log(\"Initializing reduce()...\");\n\ntry {\n  // Using the core concept\n  const numbers = [10, 20, 30, 40];\n// reduce(accumulator, current_value)\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(\"Total Sum:\", sum);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing reduce():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-find",
    "title": "find()",
    "badge": "ARRAYS",
    "emoji": "🎯",
    "defaultCode": "const users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Bob\" },\n  { id: 3, name: \"Charlie\" }\n];\n// Returns the FIRST matching object!\nconst bob = users.find(u => u.name === \"Bob\");\nconsole.log(\"Found:\", bob);",
    "content": "\n    <h3>📌 Deep Dive: find()</h3>\n    <p>The <strong>find()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>find()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of find()\nconsole.log(\"Initializing find()...\");\n\ntry {\n  // Using the core concept\n  const users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Bob\" },\n  { id: 3, name: \"Charlie\" }\n];\n// Returns the FIRST matching object!\nconst bob = users.find(u => u.name === \"Bob\");\nconsole.log(\"Found:\", bob);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing find():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-some-every",
    "title": "some() & every()",
    "badge": "ARRAYS",
    "emoji": "⚖️",
    "defaultCode": "const scores = [85, 92, 88, 70, 95];\n\n// some() checks if AT LEAST ONE matches\nconst hasA = scores.some(s => s >= 90);\nconsole.log(\"Got at least one A?\", hasA); // true\n\n// every() checks if ALL match\nconst allPass = scores.every(s => s >= 50);\nconsole.log(\"Did all pass?\", allPass); // true",
    "content": "\n    <h3>📌 Deep Dive: some() & every()</h3>\n    <p>The <strong>some() & every()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>some() & every()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of some() & every()\nconsole.log(\"Initializing some() & every()...\");\n\ntry {\n  // Using the core concept\n  const scores = [85, 92, 88, 70, 95];\n\n// some() checks if AT LEAST ONE matches\nconst hasA = scores.some(s => s >= 90);\nconsole.log(\"Got at least one A?\", hasA); // true\n\n// every() checks if ALL match\nconst allPass = scores.every(s => s >= 50);\nconsole.log(\"Did all pass?\", allPass); // true\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing some() & every():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-string-includes",
    "title": "String.includes()",
    "badge": "STRINGS",
    "emoji": "🔍",
    "defaultCode": "const text = \"JavaScript is absolutely amazing!\";\n\nconsole.log(text.includes(\"amazing\")); // true\nconsole.log(text.includes(\"Python\"));  // false\n\n// You can specify a starting position!\nconsole.log(text.includes(\"JavaScript\", 10)); // false",
    "content": "\n    <h3>📌 Deep Dive: String.includes()</h3>\n    <p>The <strong>String.includes()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>String.includes()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of String.includes()\nconsole.log(\"Initializing String.includes()...\");\n\ntry {\n  // Using the core concept\n  const text = \"JavaScript is absolutely amazing!\";\n\nconsole.log(text.includes(\"amazing\")); // true\nconsole.log(text.includes(\"Python\"));  // false\n\n// You can specify a starting position!\nconsole.log(text.includes(\"JavaScript\", 10)); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing String.includes():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-methods",
    "title": "Object.keys/values/entries",
    "badge": "OBJECTS",
    "emoji": "🔑",
    "defaultCode": "const config = { theme: \"dark\", lang: \"en\", v: 2 };\n\nconsole.log(\"Keys:\", Object.keys(config));\nconsole.log(\"Values:\", Object.values(config));\n\n// entries gives [key, value] pairs!\nconsole.log(\"Entries:\");\nObject.entries(config).forEach(([key, val]) => {\n  console.log(key + \":\", val);\n});",
    "content": "\n    <h3>📌 Deep Dive: Object.keys/values/entries</h3>\n    <p>The <strong>Object.keys/values/entries</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.keys/values/entries</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.keys/values/entries\nconsole.log(\"Initializing Object.keys/values/entries...\");\n\ntry {\n  // Using the core concept\n  const config = { theme: \"dark\", lang: \"en\", v: 2 };\n\nconsole.log(\"Keys:\", Object.keys(config));\nconsole.log(\"Values:\", Object.values(config));\n\n// entries gives [key, value] pairs!\nconsole.log(\"Entries:\");\nObject.entries(config).forEach(([key, val]) => {\n  console.log(key + \":\", val);\n});\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.keys/values/entries:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-math",
    "title": "Math Methods",
    "badge": "MATH",
    "emoji": "🔢",
    "defaultCode": "console.log(\"PI:\", Math.PI);\nconsole.log(\"Round 4.7:\", Math.round(4.7));\nconsole.log(\"Floor 4.9:\", Math.floor(4.9)); // Always down\nconsole.log(\"Ceil 4.1:\", Math.ceil(4.1));   // Always up\n\n// Random number between 0 and 1\nconsole.log(\"Random:\", Math.random());\n\n// Random Integer between 1 and 10\nconst randInt = Math.floor(Math.random() * 10) + 1;\nconsole.log(\"Random 1-10:\", randInt);",
    "content": "\n    <h3>📌 Deep Dive: Math Methods</h3>\n    <p>The <strong>Math Methods</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Math Methods</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Math Methods\nconsole.log(\"Initializing Math Methods...\");\n\ntry {\n  // Using the core concept\n  console.log(\"PI:\", Math.PI);\nconsole.log(\"Round 4.7:\", Math.round(4.7));\nconsole.log(\"Floor 4.9:\", Math.floor(4.9)); // Always down\nconsole.log(\"Ceil 4.1:\", Math.ceil(4.1));   // Always up\n\n// Random number between 0 and 1\nconsole.log(\"Random:\", Math.random());\n\n// Random Integer between 1 and 10\nconst randInt = Math.floor(Math.random() * 10) + 1;\nconsole.log(\"Random 1-10:\", randInt);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Math Methods:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-date",
    "title": "Date Object",
    "badge": "BASICS",
    "emoji": "📅",
    "defaultCode": "const now = new Date();\nconsole.log(\"Current Date:\", now.toString());\n\nconsole.log(\"Year:\", now.getFullYear());\nconsole.log(\"Month (0-indexed!):\", now.getMonth());\nconsole.log(\"Day:\", now.getDate());\n\n// ISO String for APIs\nconsole.log(\"ISO Format:\", now.toISOString());",
    "content": "\n    <h3>📌 Deep Dive: Date Object</h3>\n    <p>The <strong>Date Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Date Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Date Object\nconsole.log(\"Initializing Date Object...\");\n\ntry {\n  // Using the core concept\n  const now = new Date();\nconsole.log(\"Current Date:\", now.toString());\n\nconsole.log(\"Year:\", now.getFullYear());\nconsole.log(\"Month (0-indexed!):\", now.getMonth());\nconsole.log(\"Day:\", now.getDate());\n\n// ISO String for APIs\nconsole.log(\"ISO Format:\", now.toISOString());\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Date Object:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-regex",
    "title": "RegEx Basics",
    "badge": "STRINGS",
    "emoji": "🕵️",
    "defaultCode": "const text = \"Contact me at hello@world.com tomorrow!\";\n// Basic regex to find an email\nconst emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/;\n\nconst match = text.match(emailRegex);\nconsole.log(\"Found email:\", match ? match[0] : \"None\");\n\n// Testing a string\nconst isValid = emailRegex.test(\"bad-email@.com\");\nconsole.log(\"Is bad-email@.com valid?\", isValid);",
    "content": "\n    <h3>📌 Deep Dive: RegEx Basics</h3>\n    <p>The <strong>RegEx Basics</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>RegEx Basics</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of RegEx Basics\nconsole.log(\"Initializing RegEx Basics...\");\n\ntry {\n  // Using the core concept\n  const text = \"Contact me at hello@world.com tomorrow!\";\n// Basic regex to find an email\nconst emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/;\n\nconst match = text.match(emailRegex);\nconsole.log(\"Found email:\", match ? match[0] : \"None\");\n\n// Testing a string\nconst isValid = emailRegex.test(\"bad-email@.com\");\nconsole.log(\"Is bad-email@.com valid?\", isValid);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing RegEx Basics:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-json",
    "title": "JSON methods",
    "badge": "DATA",
    "emoji": "🔄",
    "defaultCode": "const user = { name: \"Sanskar\", active: true };\n\n// Convert Object -> String (For saving to DB/LocalStorage)\nconst jsonString = JSON.stringify(user);\nconsole.log(\"Stringified:\", jsonString);\n\n// Convert String -> Object (When fetching from API)\nconst parsedObj = JSON.parse(jsonString);\nconsole.log(\"Parsed Name:\", parsedObj.name);",
    "content": "\n    <h3>📌 Deep Dive: JSON methods</h3>\n    <p>The <strong>JSON methods</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>JSON methods</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of JSON methods\nconsole.log(\"Initializing JSON methods...\");\n\ntry {\n  // Using the core concept\n  const user = { name: \"Sanskar\", active: true };\n\n// Convert Object -> String (For saving to DB/LocalStorage)\nconst jsonString = JSON.stringify(user);\nconsole.log(\"Stringified:\", jsonString);\n\n// Convert String -> Object (When fetching from API)\nconst parsedObj = JSON.parse(jsonString);\nconsole.log(\"Parsed Name:\", parsedObj.name);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing JSON methods:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-set-interval",
    "title": "setInterval",
    "badge": "ASYNC",
    "emoji": "🔄",
    "defaultCode": "let count = 0;\nconsole.log(\"Timer started...\");\n\nconst timerId = setInterval(() => {\n  count++;\n  console.log(\"Tick:\", count);\n  \n  if (count === 3) {\n    clearInterval(timerId); // Stops the loop!\n    console.log(\"Timer stopped!\");\n  }\n}, 500); // Runs every half-second",
    "content": "\n    <h3>📌 Deep Dive: setInterval</h3>\n    <p>The <strong>setInterval</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>setInterval</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of setInterval\nconsole.log(\"Initializing setInterval...\");\n\ntry {\n  // Using the core concept\n  let count = 0;\nconsole.log(\"Timer started...\");\n\nconst timerId = setInterval(() => {\n  count++;\n  console.log(\"Tick:\", count);\n  \n  if (count === 3) {\n    clearInterval(timerId); // Stops the loop!\n    console.log(\"Timer stopped!\");\n  }\n}, 500); // Runs every half-second\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing setInterval:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-weakmap",
    "title": "WeakMap",
    "badge": "ADVANCED",
    "emoji": "🗑️",
    "defaultCode": "let user = { name: \"Sanskar\" };\n\nconst wMap = new WeakMap();\nwMap.set(user, \"Super Secret Data\");\n\nconsole.log(wMap.get(user));\n\n// If 'user' is set to null, the WeakMap entry is automatically \n// removed by the Garbage Collector, preventing memory leaks!\nuser = null;\nconsole.log(\"Memory cleared!\");",
    "content": "\n    <h3>📌 Deep Dive: WeakMap</h3>\n    <p>The <strong>WeakMap</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>WeakMap</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of WeakMap\nconsole.log(\"Initializing WeakMap...\");\n\ntry {\n  // Using the core concept\n  let user = { name: \"Sanskar\" };\n\nconst wMap = new WeakMap();\nwMap.set(user, \"Super Secret Data\");\n\nconsole.log(wMap.get(user));\n\n// If 'user' is set to null, the WeakMap entry is automatically \n// removed by the Garbage Collector, preventing memory leaks!\nuser = null;\nconsole.log(\"Memory cleared!\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing WeakMap:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-workers",
    "title": "Web Workers",
    "badge": "ASYNC",
    "emoji": "⚙️",
    "defaultCode": "console.log(\"Web Workers run scripts in background threads.\");\nconsole.log(\"They do NOT block the main UI thread!\");\nconsole.log(\"\");\nconsole.log(\"// Inside main.js:\");\nconsole.log(\"const worker = new Worker('worker.js');\");\nconsole.log(\"worker.postMessage('Start Heavy Math');\");\nconsole.log(\"\");\nconsole.log(\"// Inside worker.js:\");\nconsole.log(\"onmessage = function(e) { postMessage('Done!'); }\");",
    "content": "\n    <h3>📌 Deep Dive: Web Workers</h3>\n    <p>The <strong>Web Workers</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Web Workers</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Web Workers\nconsole.log(\"Initializing Web Workers...\");\n\ntry {\n  // Using the core concept\n  console.log(\"Web Workers run scripts in background threads.\");\nconsole.log(\"They do NOT block the main UI thread!\");\nconsole.log(\"\");\nconsole.log(\"// Inside main.js:\");\nconsole.log(\"const worker = new Worker('worker.js');\");\nconsole.log(\"worker.postMessage('Start Heavy Math');\");\nconsole.log(\"\");\nconsole.log(\"// Inside worker.js:\");\nconsole.log(\"onmessage = function(e) { postMessage('Done!'); }\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Web Workers:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-url-search",
    "title": "URLSearchParams",
    "badge": "WEB",
    "emoji": "🔗",
    "defaultCode": "// Imagine the URL is: https://example.com?query=javascript&page=2\nconst queryString = \"?query=javascript&page=2\";\n\nconst params = new URLSearchParams(queryString);\n\nconsole.log(\"Query:\", params.get(\"query\"));\nconsole.log(\"Page:\", params.get(\"page\"));\n\n// Modify params\nparams.set(\"page\", 3);\nconsole.log(\"New Query String:\", params.toString());",
    "content": "\n    <h3>📌 Deep Dive: URLSearchParams</h3>\n    <p>The <strong>URLSearchParams</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>URLSearchParams</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of URLSearchParams\nconsole.log(\"Initializing URLSearchParams...\");\n\ntry {\n  // Using the core concept\n  // Imagine the URL is: https://example.com?query=javascript&page=2\nconst queryString = \"?query=javascript&page=2\";\n\nconst params = new URLSearchParams(queryString);\n\nconsole.log(\"Query:\", params.get(\"query\"));\nconsole.log(\"Page:\", params.get(\"page\"));\n\n// Modify params\nparams.set(\"page\", 3);\nconsole.log(\"New Query String:\", params.toString());\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing URLSearchParams:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-regexp",
    "title": "RegExp (Regular Expressions)",
    "badge": "ADVANCED",
    "emoji": "🔍",
    "defaultCode": "const text = \"The quick brown fox jumps over the lazy dog. It barked at 5 foxes!\";\nconst regex = /fox(es)?/gi;\n\nconsole.log(\"Matches:\", text.match(regex));\n\n// Replacing\nconsole.log(text.replace(/dog/, \"cat\"));",
    "content": "\n    <h3>📌 Deep Dive: RegExp (Regular Expressions)</h3>\n    <p>The <strong>RegExp (Regular Expressions)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>RegExp (Regular Expressions)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of RegExp (Regular Expressions)\nconsole.log(\"Initializing RegExp (Regular Expressions)...\");\n\ntry {\n  // Using the core concept\n  const text = \"The quick brown fox jumps over the lazy dog. It barked at 5 foxes!\";\nconst regex = /fox(es)?/gi;\n\nconsole.log(\"Matches:\", text.match(regex));\n\n// Replacing\nconsole.log(text.replace(/dog/, \"cat\"));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing RegExp (Regular Expressions):\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-strict-mode",
    "title": "Strict Mode",
    "badge": "ES5",
    "emoji": "👮",
    "defaultCode": "\"use strict\";\n\ntry {\n  // This would normally silently create a global variable, \n  // but strict mode throws an error!\n  x = 3.14; \n} catch (e) {\n  console.log(\"Strict mode caught an error:\", e.message);\n}",
    "content": "\n    <h3>📌 Deep Dive: Strict Mode</h3>\n    <p>The <strong>Strict Mode</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Strict Mode</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Strict Mode\nconsole.log(\"Initializing Strict Mode...\");\n\ntry {\n  // Using the core concept\n  \"use strict\";\n\ntry {\n  // This would normally silently create a global variable, \n  // but strict mode throws an error!\n  x = 3.14; \n} catch (e) {\n  console.log(\"Strict mode caught an error:\", e.message);\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Strict Mode:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-hoisting",
    "title": "Hoisting",
    "badge": "BASICS",
    "emoji": "🏗️",
    "defaultCode": "console.log(\"Hoisted var:\", hoistedVar); // undefined\nvar hoistedVar = \"I am hoisted!\";\n\ntry {\n  console.log(notHoistedLet);\n} catch(e) {\n  console.log(\"let/const are NOT hoisted (Temporal Dead Zone):\", e.message);\n}\nlet notHoistedLet = \"Too late!\";\n\n// Function declarations are fully hoisted!\nsayHi();\nfunction sayHi() { console.log(\"Hi!\"); }",
    "content": "\n    <h3>📌 Deep Dive: Hoisting</h3>\n    <p>The <strong>Hoisting</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Hoisting</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Hoisting\nconsole.log(\"Initializing Hoisting...\");\n\ntry {\n  // Using the core concept\n  console.log(\"Hoisted var:\", hoistedVar); // undefined\nvar hoistedVar = \"I am hoisted!\";\n\ntry {\n  console.log(notHoistedLet);\n} catch(e) {\n  console.log(\"let/const are NOT hoisted (Temporal Dead Zone):\", e.message);\n}\nlet notHoistedLet = \"Too late!\";\n\n// Function declarations are fully hoisted!\nsayHi();\nfunction sayHi() { console.log(\"Hi!\"); }\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Hoisting:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-call-apply-bind",
    "title": "call, apply, bind",
    "badge": "ADVANCED",
    "emoji": "🔗",
    "defaultCode": "const person1 = { name: \"Alice\" };\nconst person2 = { name: \"Bob\" };\n\nfunction introduce(greeting) {\n  console.log(greeting + \", I am \" + this.name);\n}\n\n// call: pass arguments comma-separated\nintroduce.call(person1, \"Hello\");\n\n// apply: pass arguments as an array\nintroduce.apply(person2, [\"Hi\"]);\n\n// bind: returns a new function with bound 'this'\nconst bobIntro = introduce.bind(person2);\nbobIntro(\"Hey\");",
    "content": "\n    <h3>📌 Deep Dive: call, apply, bind</h3>\n    <p>The <strong>call, apply, bind</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>call, apply, bind</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of call, apply, bind\nconsole.log(\"Initializing call, apply, bind...\");\n\ntry {\n  // Using the core concept\n  const person1 = { name: \"Alice\" };\nconst person2 = { name: \"Bob\" };\n\nfunction introduce(greeting) {\n  console.log(greeting + \", I am \" + this.name);\n}\n\n// call: pass arguments comma-separated\nintroduce.call(person1, \"Hello\");\n\n// apply: pass arguments as an array\nintroduce.apply(person2, [\"Hi\"]);\n\n// bind: returns a new function with bound 'this'\nconst bobIntro = introduce.bind(person2);\nbobIntro(\"Hey\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing call, apply, bind:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-iife",
    "title": "IIFE",
    "badge": "ADVANCED",
    "emoji": "🏃",
    "defaultCode": "(function() {\n  const privateVar = \"I am a secret!\";\n  console.log(\"IIFE ran immediately!\");\n})();\n\n// console.log(privateVar); // ReferenceError",
    "content": "\n    <h3>📌 Deep Dive: IIFE</h3>\n    <p>The <strong>IIFE</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>IIFE</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of IIFE\nconsole.log(\"Initializing IIFE...\");\n\ntry {\n  // Using the core concept\n  (function() {\n  const privateVar = \"I am a secret!\";\n  console.log(\"IIFE ran immediately!\");\n})();\n\n// console.log(privateVar); // ReferenceError\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing IIFE:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-recursion",
    "title": "Recursion",
    "badge": "ALGORITHMS",
    "emoji": "🔁",
    "defaultCode": "function factorial(n) {\n  // Base case\n  if (n === 0 || n === 1) return 1;\n  // Recursive case\n  return n * factorial(n - 1);\n}\n\nconsole.log(\"Factorial of 5:\", factorial(5)); // 120",
    "content": "\n    <h3>📌 Deep Dive: Recursion</h3>\n    <p>The <strong>Recursion</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Recursion</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Recursion\nconsole.log(\"Initializing Recursion...\");\n\ntry {\n  // Using the core concept\n  function factorial(n) {\n  // Base case\n  if (n === 0 || n === 1) return 1;\n  // Recursive case\n  return n * factorial(n - 1);\n}\n\nconsole.log(\"Factorial of 5:\", factorial(5)); // 120\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Recursion:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-dom-manipulation",
    "title": "DOM Manipulation",
    "badge": "DOM",
    "emoji": "🛠️",
    "defaultCode": "const div = document.createElement(\"div\");\ndiv.textContent = \"I was created dynamically!\";\ndiv.style.color = \"cyan\";\ndiv.style.padding = \"10px\";\ndiv.style.border = \"1px solid cyan\";\n\n// Append it to our console output to see it!\ndocument.getElementById('consoleOutput').appendChild(div);",
    "content": "\n    <h3>📌 Deep Dive: DOM Manipulation</h3>\n    <p>The <strong>DOM Manipulation</strong> is a fundamental DOM API in JavaScript that allows developers to traverse and update efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>DOM Manipulation</code>, the Browser Rendering Engine (e.g., Blink/WebKit) optimizes the layout recalculations to ensure minimal overhead. By utilizing native C++ bindings for this dom api, JavaScript can traverse and update efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Batch your DOM reads and writes to avoid layout thrashing and forced synchronous layouts.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of DOM Manipulation\nconsole.log(\"Initializing DOM Manipulation...\");\n\ntry {\n  // Using the core concept\n  const div = document.createElement(\"div\");\ndiv.textContent = \"I was created dynamically!\";\ndiv.style.color = \"cyan\";\ndiv.style.padding = \"10px\";\ndiv.style.border = \"1px solid cyan\";\n\n// Append it to our console output to see it!\ndocument.getElementById('consoleOutput').appendChild(div);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing DOM Manipulation:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-event-delegation",
    "title": "Event Delegation",
    "badge": "DOM",
    "emoji": "🤝",
    "defaultCode": "const list = document.createElement(\"ul\");\nlist.innerHTML = \"<li>Item 1</li><li>Item 2</li><li>Item 3</li>\";\n\n// Attach ONE listener to the parent instead of THREE to the children!\nlist.addEventListener(\"click\", (e) => {\n  if(e.target.tagName === \"LI\") {\n    console.log(\"You clicked on:\", e.target.textContent);\n  }\n});\n\ndocument.getElementById('consoleOutput').appendChild(list);",
    "content": "\n    <h3>📌 Deep Dive: Event Delegation</h3>\n    <p>The <strong>Event Delegation</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Event Delegation</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Event Delegation\nconsole.log(\"Initializing Event Delegation...\");\n\ntry {\n  // Using the core concept\n  const list = document.createElement(\"ul\");\nlist.innerHTML = \"<li>Item 1</li><li>Item 2</li><li>Item 3</li>\";\n\n// Attach ONE listener to the parent instead of THREE to the children!\nlist.addEventListener(\"click\", (e) => {\n  if(e.target.tagName === \"LI\") {\n    console.log(\"You clicked on:\", e.target.textContent);\n  }\n});\n\ndocument.getElementById('consoleOutput').appendChild(list);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Event Delegation:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-localstorage",
    "title": "localStorage",
    "badge": "WEB APIs",
    "emoji": "💾",
    "defaultCode": "// Save data\n\n    try {\n        localStorage.setItem('mySecretKey', \"Super Secret Value!\");\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n// Retrieve data\nconst val = localStorage.getItem(\"mySecretKey\");\nconsole.log(\"Retrieved:\", val);\n\n// Remove data\nlocalStorage.removeItem(\"mySecretKey\");",
    "content": "\n    <h3>📌 Deep Dive: localStorage</h3>\n    <p>The <strong>localStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>localStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of localStorage\nconsole.log(\"Initializing localStorage...\");\n\ntry {\n  // Using the core concept\n  // Save data\n\n    try {\n        localStorage.setItem('mySecretKey', \"Super Secret Value!\");\n    } catch(e) {\n        console.warn('localStorage not available for saving theme');\n    }\n\n// Retrieve data\nconst val = localStorage.getItem(\"mySecretKey\");\nconsole.log(\"Retrieved:\", val);\n\n// Remove data\nlocalStorage.removeItem(\"mySecretKey\");\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing localStorage:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-sessionstorage",
    "title": "sessionStorage",
    "badge": "WEB APIs",
    "emoji": "🕒",
    "defaultCode": "sessionStorage.setItem(\"sessionID\", \"12345ABC\");\nconsole.log(\"Session ID:\", sessionStorage.getItem(\"sessionID\"));\n\n// Note: This data will be erased when the tab is closed!",
    "content": "\n    <h3>📌 Deep Dive: sessionStorage</h3>\n    <p>The <strong>sessionStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>sessionStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of sessionStorage\nconsole.log(\"Initializing sessionStorage...\");\n\ntry {\n  // Using the core concept\n  sessionStorage.setItem(\"sessionID\", \"12345ABC\");\nconsole.log(\"Session ID:\", sessionStorage.getItem(\"sessionID\"));\n\n// Note: This data will be erased when the tab is closed!\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing sessionStorage:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-fetch-api",
    "title": "Fetch API",
    "badge": "WEB APIs",
    "emoji": "🌐",
    "defaultCode": "console.log(\"Fetching data...\");\n\n// We use await since our sandbox wraps this in an async IIFE!\nconst response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\nconst user = await response.json();\n\nconsole.log(\"Fetched User:\", user.name);",
    "content": "\n    <h3>📌 Deep Dive: Fetch API</h3>\n    <p>The <strong>Fetch API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Fetch API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Fetch API\nconsole.log(\"Initializing Fetch API...\");\n\ntry {\n  // Using the core concept\n  console.log(\"Fetching data...\");\n\n// We use await since our sandbox wraps this in an async IIFE!\nconst response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\nconst user = await response.json();\n\nconsole.log(\"Fetched User:\", user.name);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Fetch API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-promise-all",
    "title": "Promise.all()",
    "badge": "ASYNC",
    "emoji": "📦",
    "defaultCode": "const p1 = Promise.resolve(3);\nconst p2 = 1337;\nconst p3 = new Promise((resolve) => {\n  setTimeout(() => resolve(\"foo\"), 1000);\n});\n\nconsole.log(\"Waiting for all promises...\");\nconst results = await Promise.all([p1, p2, p3]);\nconsole.log(\"All done:\", results);",
    "content": "\n    <h3>📌 Deep Dive: Promise.all()</h3>\n    <p>The <strong>Promise.all()</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Promise.all()</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Promise.all()\nconsole.log(\"Initializing Promise.all()...\");\n\ntry {\n  // Using the core concept\n  const p1 = Promise.resolve(3);\nconst p2 = 1337;\nconst p3 = new Promise((resolve) => {\n  setTimeout(() => resolve(\"foo\"), 1000);\n});\n\nconsole.log(\"Waiting for all promises...\");\nconst results = await Promise.all([p1, p2, p3]);\nconsole.log(\"All done:\", results);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Promise.all():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-timers",
    "title": "Timers (setTimeout/setInterval)",
    "badge": "ASYNC",
    "emoji": "⏱️",
    "defaultCode": "console.log(\"Start\");\n\nconst timeoutId = setTimeout(() => {\n  console.log(\"This runs after 1 second!\");\n}, 1000);\n\nlet count = 0;\nconst intervalId = setInterval(() => {\n  console.log(\"Tick:\", ++count);\n  if (count === 3) clearInterval(intervalId); // Stop after 3 ticks\n}, 500);",
    "content": "\n    <h3>📌 Deep Dive: Timers (setTimeout/setInterval)</h3>\n    <p>The <strong>Timers (setTimeout/setInterval)</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Timers (setTimeout/setInterval)</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Timers (setTimeout/setInterval)\nconsole.log(\"Initializing Timers (setTimeout/setInterval)...\");\n\ntry {\n  // Using the core concept\n  console.log(\"Start\");\n\nconst timeoutId = setTimeout(() => {\n  console.log(\"This runs after 1 second!\");\n}, 1000);\n\nlet count = 0;\nconst intervalId = setInterval(() => {\n  console.log(\"Tick:\", ++count);\n  if (count === 3) clearInterval(intervalId); // Stop after 3 ticks\n}, 500);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Timers (setTimeout/setInterval):\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-prototypes",
    "title": "Prototypes",
    "badge": "OOP",
    "emoji": "🧬",
    "defaultCode": "function Person(name) {\n  this.name = name;\n}\n\n// Adding a method to the prototype\nPerson.prototype.sayName = function() {\n  console.log(\"My name is\", this.name);\n};\n\nconst p1 = new Person(\"Alice\");\nconst p2 = new Person(\"Bob\");\n\np1.sayName();\nconsole.log(\"Share same method?\", p1.sayName === p2.sayName);",
    "content": "\n    <h3>📌 Deep Dive: Prototypes</h3>\n    <p>The <strong>Prototypes</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Prototypes</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Prototypes\nconsole.log(\"Initializing Prototypes...\");\n\ntry {\n  // Using the core concept\n  function Person(name) {\n  this.name = name;\n}\n\n// Adding a method to the prototype\nPerson.prototype.sayName = function() {\n  console.log(\"My name is\", this.name);\n};\n\nconst p1 = new Person(\"Alice\");\nconst p2 = new Person(\"Bob\");\n\np1.sayName();\nconsole.log(\"Share same method?\", p1.sayName === p2.sayName);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Prototypes:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-getters-setters",
    "title": "Getters & Setters",
    "badge": "OOP",
    "emoji": "🚪",
    "defaultCode": "class BankAccount {\n  constructor(balance) {\n    this._balance = balance;\n  }\n  \n  get balance() {\n    return \"$\" + this._balance;\n  }\n  \n  set balance(amount) {\n    if (amount < 0) console.log(\"Cannot have negative balance!\");\n    else this._balance = amount;\n  }\n}\n\nconst acc = new BankAccount(100);\nconsole.log(acc.balance); // $100\nacc.balance = -50; // Error\nacc.balance = 200;\nconsole.log(acc.balance); // $200",
    "content": "\n    <h3>📌 Deep Dive: Getters & Setters</h3>\n    <p>The <strong>Getters & Setters</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Getters & Setters</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Getters & Setters\nconsole.log(\"Initializing Getters & Setters...\");\n\ntry {\n  // Using the core concept\n  class BankAccount {\n  constructor(balance) {\n    this._balance = balance;\n  }\n  \n  get balance() {\n    return \"$\" + this._balance;\n  }\n  \n  set balance(amount) {\n    if (amount < 0) console.log(\"Cannot have negative balance!\");\n    else this._balance = amount;\n  }\n}\n\nconst acc = new BankAccount(100);\nconsole.log(acc.balance); // $100\nacc.balance = -50; // Error\nacc.balance = 200;\nconsole.log(acc.balance); // $200\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Getters & Setters:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-nullish-coalescing",
    "title": "Nullish Coalescing (??)",
    "badge": "ES2020",
    "emoji": "🤝",
    "defaultCode": "// OR (||) operator considers 0 and '' as falsy\nconst qty = 0;\nconsole.log(\"Using || :\", qty || 10);\n\n// Nullish (??) only checks for null or undefined\nconsole.log(\"Using ?? :\", qty ?? 10);",
    "content": "\n    <h3>📌 Deep Dive: Nullish Coalescing (??)</h3>\n    <p>The <strong>Nullish Coalescing (??)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Nullish Coalescing (??)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Nullish Coalescing (??)\nconsole.log(\"Initializing Nullish Coalescing (??)...\");\n\ntry {\n  // Using the core concept\n  // OR (||) operator considers 0 and '' as falsy\nconst qty = 0;\nconsole.log(\"Using || :\", qty || 10);\n\n// Nullish (??) only checks for null or undefined\nconsole.log(\"Using ?? :\", qty ?? 10);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Nullish Coalescing (??):\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-url-search-params",
    "title": "URLSearchParams",
    "badge": "API",
    "emoji": "🔗",
    "defaultCode": "// Parsing a URL query string\nconst queryString = '?product=laptop&color=silver&price=1500';\nconst params = new URLSearchParams(queryString);\n\nconsole.log('Product:', params.get('product'));\nconsole.log('Color:', params.get('color'));\n\n// Adding and modifying\nparams.append('inStock', 'true');\nparams.set('price', '1200');\nconsole.log('New Query String:', params.toString());",
    "content": "\n    <h3>📌 Deep Dive: URLSearchParams</h3>\n    <p>The <strong>URLSearchParams</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>URLSearchParams</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of URLSearchParams\nconsole.log(\"Initializing URLSearchParams...\");\n\ntry {\n  // Using the core concept\n  // Parsing a URL query string\nconst queryString = '?product=laptop&color=silver&price=1500';\nconst params = new URLSearchParams(queryString);\n\nconsole.log('Product:', params.get('product'));\nconsole.log('Color:', params.get('color'));\n\n// Adding and modifying\nparams.append('inStock', 'true');\nparams.set('price', '1200');\nconsole.log('New Query String:', params.toString());\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing URLSearchParams:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-blob",
    "title": "Blob Object",
    "badge": "WEB API",
    "emoji": "🩸",
    "defaultCode": "// Creating a blob containing text\nconst myBlob = new Blob(['Hello, World! Welcome to JS Mastery.'], { type: 'text/plain' });\n\nconsole.log('Blob Size:', myBlob.size, 'bytes');\nconsole.log('Blob Type:', myBlob.type);\n\n// Reading the blob using Promises\nmyBlob.text().then(text => console.log('Extracted Text:', text));",
    "content": "\n    <h3>📌 Deep Dive: Blob Object</h3>\n    <p>The <strong>Blob Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Blob Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Blob Object\nconsole.log(\"Initializing Blob Object...\");\n\ntry {\n  // Using the core concept\n  // Creating a blob containing text\nconst myBlob = new Blob(['Hello, World! Welcome to JS Mastery.'], { type: 'text/plain' });\n\nconsole.log('Blob Size:', myBlob.size, 'bytes');\nconsole.log('Blob Type:', myBlob.type);\n\n// Reading the blob using Promises\nmyBlob.text().then(text => console.log('Extracted Text:', text));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Blob Object:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-web-workers",
    "title": "Web Workers",
    "badge": "PERFORMANCE",
    "emoji": "👷",
    "defaultCode": "console.log('Web Workers run code in a separate background thread!');\nconsole.log('Since we cant spawn a real external file in this sandbox, here is how you do it:');\nconsole.log('const worker = new Worker(\\'worker.js\\');');\nconsole.log('worker.postMessage({ type: \\'start\\' });');\nconsole.log('worker.onmessage = e => console.log(e.data);');\nconsole.log('This keeps the main UI thread totally smooth during heavy calculations.');",
    "content": "\n    <h3>📌 Deep Dive: Web Workers</h3>\n    <p>The <strong>Web Workers</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Web Workers</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Web Workers\nconsole.log(\"Initializing Web Workers...\");\n\ntry {\n  // Using the core concept\n  console.log('Web Workers run code in a separate background thread!');\nconsole.log('Since we cant spawn a real external file in this sandbox, here is how you do it:');\nconsole.log('const worker = new Worker(\\'worker.js\\');');\nconsole.log('worker.postMessage({ type: \\'start\\' });');\nconsole.log('worker.onmessage = e => console.log(e.data);');\nconsole.log('This keeps the main UI thread totally smooth during heavy calculations.');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Web Workers:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-intersection-observer",
    "title": "Intersection Observer",
    "badge": "WEB API",
    "emoji": "👁️",
    "defaultCode": "// Intersection Observer detects when an element enters the viewport.\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Element is visible!');\n    }\n  });\n});\n\nconsole.log('Observer created! In a real app, you would run:');\nconsole.log('observer.observe(document.querySelector(\\'div\\'));');",
    "content": "\n    <h3>📌 Deep Dive: Intersection Observer</h3>\n    <p>The <strong>Intersection Observer</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Intersection Observer</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Intersection Observer\nconsole.log(\"Initializing Intersection Observer...\");\n\ntry {\n  // Using the core concept\n  // Intersection Observer detects when an element enters the viewport.\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Element is visible!');\n    }\n  });\n});\n\nconsole.log('Observer created! In a real app, you would run:');\nconsole.log('observer.observe(document.querySelector(\\'div\\'));');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Intersection Observer:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-clipboard",
    "title": "Clipboard API",
    "badge": "WEB API",
    "emoji": "📋",
    "defaultCode": "async function copyData() {\n  try {\n    // In a real sandbox, this requires user interaction (clicking a button)\n    // await navigator.clipboard.writeText('Sanskar is awesome!');\n    console.log('Clipboard API allows async read/write of text and images!');\n  } catch (err) {\n    console.error('Failed to copy: ', err);\n  }\n}\ncopyData();",
    "content": "\n    <h3>📌 Deep Dive: Clipboard API</h3>\n    <p>The <strong>Clipboard API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Clipboard API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Clipboard API\nconsole.log(\"Initializing Clipboard API...\");\n\ntry {\n  // Using the core concept\n  async function copyData() {\n  try {\n    // In a real sandbox, this requires user interaction (clicking a button)\n    // await navigator.clipboard.writeText('Sanskar is awesome!');\n    console.log('Clipboard API allows async read/write of text and images!');\n  } catch (err) {\n    console.error('Failed to copy: ', err);\n  }\n}\ncopyData();\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Clipboard API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-notifications",
    "title": "Notifications API",
    "badge": "WEB API",
    "emoji": "🔔",
    "defaultCode": "console.log('Check Notification Permission:', Notification.permission);\n\nif (Notification.permission === 'granted') {\n  // new Notification('Hello from JS!');\n  console.log('We can show native OS push notifications!');\n} else {\n  console.log('Request permission via: Notification.requestPermission()');\n}",
    "content": "\n    <h3>📌 Deep Dive: Notifications API</h3>\n    <p>The <strong>Notifications API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Notifications API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Notifications API\nconsole.log(\"Initializing Notifications API...\");\n\ntry {\n  // Using the core concept\n  console.log('Check Notification Permission:', Notification.permission);\n\nif (Notification.permission === 'granted') {\n  // new Notification('Hello from JS!');\n  console.log('We can show native OS push notifications!');\n} else {\n  console.log('Request permission via: Notification.requestPermission()');\n}\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Notifications API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-array-flatmap",
    "title": "flatMap()",
    "badge": "ARRAYS",
    "emoji": "🥞",
    "defaultCode": "const sentences = ['JavaScript is', 'really awesome'];\n\n// map() creates an array of arrays\nconst mapped = sentences.map(s => s.split(' '));\nconsole.log('map:', mapped);\n\n// flatMap() maps AND flattens the result by 1 depth\nconst flatMapped = sentences.flatMap(s => s.split(' '));\nconsole.log('flatMap:', flatMapped);",
    "content": "\n    <h3>📌 Deep Dive: flatMap()</h3>\n    <p>The <strong>flatMap()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>flatMap()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of flatMap()\nconsole.log(\"Initializing flatMap()...\");\n\ntry {\n  // Using the core concept\n  const sentences = ['JavaScript is', 'really awesome'];\n\n// map() creates an array of arrays\nconst mapped = sentences.map(s => s.split(' '));\nconsole.log('map:', mapped);\n\n// flatMap() maps AND flattens the result by 1 depth\nconst flatMapped = sentences.flatMap(s => s.split(' '));\nconsole.log('flatMap:', flatMapped);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing flatMap():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-array-at",
    "title": "Array at()",
    "badge": "ES2022",
    "emoji": "🎯",
    "defaultCode": "const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];\n\n// Traditional way to get the last item\nconsole.log('Last item (old way):', array[array.length - 1]);\n\n// Using the modern at() method (supports negative indices!)\nconsole.log('Last item (at):', array.at(-1));\nconsole.log('Second to last:', array.at(-2));",
    "content": "\n    <h3>📌 Deep Dive: Array at()</h3>\n    <p>The <strong>Array at()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Array at()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Array at()\nconsole.log(\"Initializing Array at()...\");\n\ntry {\n  // Using the core concept\n  const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];\n\n// Traditional way to get the last item\nconsole.log('Last item (old way):', array[array.length - 1]);\n\n// Using the modern at() method (supports negative indices!)\nconsole.log('Last item (at):', array.at(-1));\nconsole.log('Second to last:', array.at(-2));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Array at():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-structured-clone",
    "title": "structuredClone()",
    "badge": "WEB API",
    "emoji": "🧬",
    "defaultCode": "const original = {\n  name: 'Sanskar',\n  hobbies: ['Code', 'Design'],\n  date: new Date()\n};\n\n// Deep copy natively! No need for JSON.parse(JSON.stringify)\nconst deepCopy = structuredClone(original);\n\ndeepCopy.hobbies.push('Gaming');\n\nconsole.log('Original hobbies:', original.hobbies);\nconsole.log('Cloned hobbies:', deepCopy.hobbies);",
    "content": "\n    <h3>📌 Deep Dive: structuredClone()</h3>\n    <p>The <strong>structuredClone()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>structuredClone()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of structuredClone()\nconsole.log(\"Initializing structuredClone()...\");\n\ntry {\n  // Using the core concept\n  const original = {\n  name: 'Sanskar',\n  hobbies: ['Code', 'Design'],\n  date: new Date()\n};\n\n// Deep copy natively! No need for JSON.parse(JSON.stringify)\nconst deepCopy = structuredClone(original);\n\ndeepCopy.hobbies.push('Gaming');\n\nconsole.log('Original hobbies:', original.hobbies);\nconsole.log('Cloned hobbies:', deepCopy.hobbies);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing structuredClone():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-object-groupby",
    "title": "Object.groupBy()",
    "badge": "ES2024",
    "emoji": "🗂️",
    "defaultCode": "const inventory = [\n  { name: 'asparagus', type: 'vegetables', quantity: 5 },\n  { name: 'bananas', type: 'fruit', quantity: 0 },\n  { name: 'cherries', type: 'fruit', quantity: 5 },\n  { name: 'meat', type: 'meat', quantity: 23 },\n];\n\n// The modern ES2024 way to group arrays!\nconst result = Object.groupBy(inventory, ({ type }) => type);\n\nconsole.log(result);",
    "content": "\n    <h3>📌 Deep Dive: Object.groupBy()</h3>\n    <p>The <strong>Object.groupBy()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Object.groupBy()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Object.groupBy()\nconsole.log(\"Initializing Object.groupBy()...\");\n\ntry {\n  // Using the core concept\n  const inventory = [\n  { name: 'asparagus', type: 'vegetables', quantity: 5 },\n  { name: 'bananas', type: 'fruit', quantity: 0 },\n  { name: 'cherries', type: 'fruit', quantity: 5 },\n  { name: 'meat', type: 'meat', quantity: 23 },\n];\n\n// The modern ES2024 way to group arrays!\nconst result = Object.groupBy(inventory, ({ type }) => type);\n\nconsole.log(result);\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Object.groupBy():\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-symbols",
    "title": "Symbols",
    "badge": "ES6+",
    "emoji": "💠",
    "defaultCode": "const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\n\nconsole.log('Are symbols strictly equal?', sym1 === sym2); // false\n\nconst user = {\n  name: 'Sanskar',\n  [sym1]: 9999 // Hidden identifier!\n};\n\nconsole.log('User name:', user.name);\nconsole.log('Hidden ID:', user[sym1]);\nconsole.log('Keys available (Symbol is hidden):', Object.keys(user));",
    "content": "\n    <h3>📌 Deep Dive: Symbols</h3>\n    <p>The <strong>Symbols</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Symbols</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Symbols\nconsole.log(\"Initializing Symbols...\");\n\ntry {\n  // Using the core concept\n  const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\n\nconsole.log('Are symbols strictly equal?', sym1 === sym2); // false\n\nconst user = {\n  name: 'Sanskar',\n  [sym1]: 9999 // Hidden identifier!\n};\n\nconsole.log('User name:', user.name);\nconsole.log('Hidden ID:', user[sym1]);\nconsole.log('Keys available (Symbol is hidden):', Object.keys(user));\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Symbols:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-event-loop",
    "title": "The Event Loop",
    "badge": "ADVANCED",
    "emoji": "🔄",
    "defaultCode": "console.log('1. First - Synchronous');\n\nsetTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);\n\nPromise.resolve().then(() => console.log('3. Microtask (Promise)'));\n\nconsole.log('2. Second - Synchronous');\n// Notice the execution order in the console!",
    "content": "\n    <h3>📌 Deep Dive: The Event Loop</h3>\n    <p>The <strong>The Event Loop</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>The Event Loop</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of The Event Loop\nconsole.log(\"Initializing The Event Loop...\");\n\ntry {\n  // Using the core concept\n  console.log('1. First - Synchronous');\n\nsetTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);\n\nPromise.resolve().then(() => console.log('3. Microtask (Promise)'));\n\nconsole.log('2. Second - Synchronous');\n// Notice the execution order in the console!\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing The Event Loop:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-scope-chain",
    "title": "Scope Chain",
    "badge": "BASICS",
    "emoji": "🔗",
    "defaultCode": "const globalVar = 'I am global';\n\nfunction outer() {\n  const outerVar = 'I am in outer';\n  \n  function inner() {\n    const innerVar = 'I am in inner';\n    console.log(innerVar);\n    console.log(outerVar); // Looks up the scope chain\n    console.log(globalVar); // Looks all the way to global\n  }\n  inner();\n}\nouter();",
    "content": "\n    <h3>📌 Deep Dive: Scope Chain</h3>\n    <p>The <strong>Scope Chain</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Scope Chain</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Scope Chain\nconsole.log(\"Initializing Scope Chain...\");\n\ntry {\n  // Using the core concept\n  const globalVar = 'I am global';\n\nfunction outer() {\n  const outerVar = 'I am in outer';\n  \n  function inner() {\n    const innerVar = 'I am in inner';\n    console.log(innerVar);\n    console.log(outerVar); // Looks up the scope chain\n    console.log(globalVar); // Looks all the way to global\n  }\n  inner();\n}\nouter();\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Scope Chain:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-type-coercion",
    "title": "Type Coercion",
    "badge": "BASICS",
    "emoji": "🔀",
    "defaultCode": "console.log('1' + 2); // '12' (Number coerced to String)\nconsole.log('1' - -1); // 2 (String coerced to Number!)\nconsole.log([] + []); // '' (Empty strings concatenated)\nconsole.log([] + {}); // '[object Object]'\nconsole.log(true + true); // 2 (Booleans coerced to 1)\n\n// Always use === to avoid implicit type coercion bugs!\nconsole.log('1' == 1); // true\nconsole.log('1' === 1); // false",
    "content": "\n    <h3>📌 Deep Dive: Type Coercion</h3>\n    <p>The <strong>Type Coercion</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Type Coercion</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Type Coercion\nconsole.log(\"Initializing Type Coercion...\");\n\ntry {\n  // Using the core concept\n  console.log('1' + 2); // '12' (Number coerced to String)\nconsole.log('1' - -1); // 2 (String coerced to Number!)\nconsole.log([] + []); // '' (Empty strings concatenated)\nconsole.log([] + {}); // '[object Object]'\nconsole.log(true + true); // 2 (Booleans coerced to 1)\n\n// Always use === to avoid implicit type coercion bugs!\nconsole.log('1' == 1); // true\nconsole.log('1' === 1); // false\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Type Coercion:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-this-keyword",
    "title": "The 'this' Keyword",
    "badge": "ADVANCED",
    "emoji": "👉",
    "defaultCode": "const person = {\n  name: 'Sanskar',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  },\n  greetArrow: () => {\n    // Arrow functions inherit 'this' from the outer scope!\n    console.log('Hello from arrow, ' + this.name);\n  }\n};\n\nperson.greet(); // Works: 'Sanskar'\nperson.greetArrow(); // Undefined (this refers to the window/global object here)",
    "content": "\n    <h3>📌 Deep Dive: The 'this' Keyword</h3>\n    <p>The <strong>The 'this' Keyword</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>The 'this' Keyword</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of The 'this' Keyword\nconsole.log(\"Initializing The 'this' Keyword...\");\n\ntry {\n  // Using the core concept\n  const person = {\n  name: 'Sanskar',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  },\n  greetArrow: () => {\n    // Arrow functions inherit 'this' from the outer scope!\n    console.log('Hello from arrow, ' + this.name);\n  }\n};\n\nperson.greet(); // Works: 'Sanskar'\nperson.greetArrow(); // Undefined (this refers to the window/global object here)\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing The 'this' Keyword:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-bigint",
    "title": "BigInt",
    "badge": "ES2020",
    "emoji": "🐘",
    "defaultCode": "const maxSafe = Number.MAX_SAFE_INTEGER;\nconsole.log('Max Safe Integer:', maxSafe);\n\n// Doing math beyond MAX_SAFE_INTEGER is inaccurate in JS\nconsole.log('Unsafe math:', maxSafe + 2 === maxSafe + 3); // true! (Wait, what?)\n\n// BigInt solves this! Append 'n' to the end of a number\nconst bigNum = 9007199254740991n;\nconsole.log('Safe BigInt math:', bigNum + 2n === bigNum + 3n); // false (Correct!)",
    "content": "\n    <h3>📌 Deep Dive: BigInt</h3>\n    <p>The <strong>BigInt</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>BigInt</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of BigInt\nconsole.log(\"Initializing BigInt...\");\n\ntry {\n  // Using the core concept\n  const maxSafe = Number.MAX_SAFE_INTEGER;\nconsole.log('Max Safe Integer:', maxSafe);\n\n// Doing math beyond MAX_SAFE_INTEGER is inaccurate in JS\nconsole.log('Unsafe math:', maxSafe + 2 === maxSafe + 3); // true! (Wait, what?)\n\n// BigInt solves this! Append 'n' to the end of a number\nconst bigNum = 9007199254740991n;\nconsole.log('Safe BigInt math:', bigNum + 2n === bigNum + 3n); // false (Correct!)\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing BigInt:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-canvas-api",
    "title": "Canvas 2D API",
    "badge": "WEB API",
    "emoji": "🎨",
    "defaultCode": "console.log('The Canvas API provides a means for drawing graphics via JS and the HTML <canvas> element.');\nconsole.log('Basic usage:');\nconsole.log('const canvas = document.getElementById(\"myCanvas\");');\nconsole.log('const ctx = canvas.getContext(\"2d\");');\nconsole.log('ctx.fillStyle = \"red\";');\nconsole.log('ctx.fillRect(10, 10, 100, 100);');",
    "content": "\n    <h3>📌 Deep Dive: Canvas 2D API</h3>\n    <p>The <strong>Canvas 2D API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Canvas 2D API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Canvas 2D API\nconsole.log(\"Initializing Canvas 2D API...\");\n\ntry {\n  // Using the core concept\n  console.log('The Canvas API provides a means for drawing graphics via JS and the HTML <canvas> element.');\nconsole.log('Basic usage:');\nconsole.log('const canvas = document.getElementById(\"myCanvas\");');\nconsole.log('const ctx = canvas.getContext(\"2d\");');\nconsole.log('ctx.fillStyle = \"red\";');\nconsole.log('ctx.fillRect(10, 10, 100, 100);');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Canvas 2D API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-history-api",
    "title": "History API",
    "badge": "WEB API",
    "emoji": "⏪",
    "defaultCode": "console.log('History API allows manipulation of the browser session history!');\nconsole.log('Current history length:', window.history.length);\n\n// We won't actually run these in the sandbox to prevent navigation:\nconsole.log('Go back: history.back()');\nconsole.log('Push new state without reloading: history.pushState({page: 1}, \"title\", \"?page=1\")');",
    "content": "\n    <h3>📌 Deep Dive: History API</h3>\n    <p>The <strong>History API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>History API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of History API\nconsole.log(\"Initializing History API...\");\n\ntry {\n  // Using the core concept\n  console.log('History API allows manipulation of the browser session history!');\nconsole.log('Current history length:', window.history.length);\n\n// We won't actually run these in the sandbox to prevent navigation:\nconsole.log('Go back: history.back()');\nconsole.log('Push new state without reloading: history.pushState({page: 1}, \"title\", \"?page=1\")');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing History API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-page-visibility",
    "title": "Page Visibility API",
    "badge": "WEB API",
    "emoji": "👀",
    "defaultCode": "console.log('The Page Visibility API lets you know if a user is looking at the tab!');\nconsole.log('Current Visibility State:', document.visibilityState);\nconsole.log('Is tab hidden?', document.hidden);\n\nconsole.log('Event listener:');\nconsole.log('document.addEventListener(\"visibilitychange\", () => { console.log(document.hidden) });');",
    "content": "\n    <h3>📌 Deep Dive: Page Visibility API</h3>\n    <p>The <strong>Page Visibility API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Page Visibility API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Page Visibility API\nconsole.log(\"Initializing Page Visibility API...\");\n\ntry {\n  // Using the core concept\n  console.log('The Page Visibility API lets you know if a user is looking at the tab!');\nconsole.log('Current Visibility State:', document.visibilityState);\nconsole.log('Is tab hidden?', document.hidden);\n\nconsole.log('Event listener:');\nconsole.log('document.addEventListener(\"visibilitychange\", () => { console.log(document.hidden) });');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Page Visibility API:\", error);\n}\n    </code></pre>\n    "
  },
  {
    "id": "js-web-crypto",
    "title": "Web Crypto API",
    "badge": "WEB API",
    "emoji": "🔐",
    "defaultCode": "const data = new TextEncoder().encode('Super Secret Message');\n\n// Generate a random initialization vector\nconst iv = crypto.getRandomValues(new Uint8Array(12));\nconsole.log('Random IV generated:', iv);\n\nconsole.log('The crypto.subtle object provides advanced cryptographic functions like hashing, signing, and encryption directly in the browser!');",
    "content": "\n    <h3>📌 Deep Dive: Web Crypto API</h3>\n    <p>The <strong>Web Crypto API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When executing <code>Web Crypto API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>\n    </div>\n    <h4>💻 Advanced Implementation Example</h4>\n    <pre><code class=\"language-javascript\">\n// Advanced usage of Web Crypto API\nconsole.log(\"Initializing Web Crypto API...\");\n\ntry {\n  // Using the core concept\n  const data = new TextEncoder().encode('Super Secret Message');\n\n// Generate a random initialization vector\nconst iv = crypto.getRandomValues(new Uint8Array(12));\nconsole.log('Random IV generated:', iv);\n\nconsole.log('The crypto.subtle object provides advanced cryptographic functions like hashing, signing, and encryption directly in the browser!');\n  console.log(\"Execution successful.\");\n} catch (error) {\n  console.error(\"Error executing Web Crypto API:\", error);\n}\n    </code></pre>\n    "
  }
];

let currentTag = null;
let masteredTags = new Set();
let editor;
let xp = 0;
let favoriteTags = new Set();
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizTotal = 5;

// ===== SIDEBAR MANAGEMENT =====
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('overlay');
    const btn = document.getElementById('sbOpen');
    if (!sb) return;
    const isOpen = sb.classList.toggle('open');
    if (ov) {
        ov.classList.toggle('active', isOpen);
        ov.classList.toggle('show', isOpen);
    }
    if (btn) btn.setAttribute('aria-expanded', isOpen);
}

// Global Escape listener to close drawer or modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sb = document.getElementById('sidebar');
        if (sb && sb.classList.contains('open')) {
            toggleSidebar();
        }
    }
});

// ===== GREETING =====
function getGreeting() {
    const h = new Date().getHours();
    if (h < 5) return '🌙 Burning the midnight oil';
    if (h < 12) return '☀️ Good Morning';
    if (h < 17) return '🌤️ Good Afternoon';
    if (h < 21) return '🌆 Good Evening';
    return '🌙 Night Owl Mode';
}

function updateGreeting() {
    const el = document.getElementById('greetingWrap');
    if (!el) return;
    let name = '';
    try { name = localStorage.getItem('jsMasteryUsername') || ''; } catch (e) { }
    el.textContent = getGreeting() + (name ? ', ' + name + '!' : '!');
}

function saveUsername() {
    const input = document.getElementById('wmUsername');
    const name = input ? input.value.trim() : '';
    if (name) {
        try { localStorage.setItem('jsMasteryUsername', name); } catch (e) { }
    }
    try { localStorage.setItem('jsMasteryWelcomed', 'true'); } catch (e) { }
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.close();
    updateGreeting();
}

function skipUsername() {
    try { localStorage.setItem('jsMasteryWelcomed', 'true'); } catch (e) { }
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.close();
}

// ===== MASTERY RANK SYSTEM =====
function getMasteryRank(count) {
    if (count >= 95) return '🏆 Grandmaster';
    if (count >= 80) return '💎 Diamond';
    if (count >= 65) return '🥇 Expert';
    if (count >= 50) return '🥈 Advanced';
    if (count >= 35) return '🥉 Intermediate';
    if (count >= 20) return '📗 Apprentice';
    if (count >= 10) return '🌱 Beginner';
    return '🔰 Novice';
}

function updateMasteryStats() {
    const count = masteredTags.size;
    const total = TAGS.length;
    const level = Math.floor(count / 10) + 1;

    const els = {
        masteryCountStat: count,
        masteryLevel: level,
        sbMasteryCount: count,
        favCountStat: favoriteTags.size,
        readTime: Math.round(total * 2.5)
    };
    Object.entries(els).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    });

    const rank = getMasteryRank(count);
    const rankEls = ['masteryRank', 'mcRank'];
    rankEls.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = rank;
    });

    const bar = document.getElementById('masteryProgressBar');
    if (bar) bar.style.width = (total > 0 ? (count / total * 100) : 0) + '%';

    // XP display
    try { xp = parseInt(localStorage.getItem('js_xp')) || 0; } catch (e) { xp = 0; }
}

// ===== CONCEPT OF THE DAY =====
function initConceptOfDay() {
    if (TAGS.length === 0) return;
    const dayIndex = new Date().getDate() % TAGS.length;
    const concept = TAGS[dayIndex];
    const card = document.getElementById('totDayCard');
    const text = document.getElementById('totDayText');
    const btn = document.getElementById('totDayBtn');
    if (card && text && btn) {
        card.style.display = 'block';
        text.textContent = concept.title + ' — ' + (concept.description || concept.badge || '');
        btn.onclick = () => loadTag(concept.id);
    }
}

// ===== ZEN MODE =====
function toggleZenMode() {
    document.body.classList.toggle('zen-mode');
    const btn = document.getElementById('zenBtn');
    if (btn) btn.textContent = document.body.classList.contains('zen-mode') ? '👁️ Exit Zen' : '👁️ Zen Mode';
}

// ===== FONT SIZE =====
function changeFontSize(delta) {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize) || 16;
    const newSize = Math.max(12, Math.min(22, current + delta));
    root.style.fontSize = newSize + 'px';
    try { localStorage.setItem('jsMasteryFontSize', newSize); } catch (e) { }
}

// ===== EXPORT / IMPORT =====
function exportProgress() {
    const data = {
        mastered: [...masteredTags],
        favorites: [...favoriteTags],
        xp: xp,
        theme: localStorage.getItem('js-theme') || 'dark',
        username: localStorage.getItem('jsMasteryUsername') || '',
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'js-mastery-progress.json';
    a.click();
}

function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.mastered) {
                masteredTags = new Set(data.mastered);
                saveProgress();
            }
            if (data.favorites) {
                favoriteTags = new Set(data.favorites);
                try { localStorage.setItem('js-mastery-favorites', JSON.stringify([...favoriteTags])); } catch (e) { }
            }
            if (data.xp) {
                xp = data.xp;
                try { localStorage.setItem('js_xp', xp); } catch (e) { }
            }
            if (data.username) {
                try { localStorage.setItem('jsMasteryUsername', data.username); } catch (e) { }
            }
            updateMasteryStats();
            updateProgressUI();
            renderSidebar();
            updateGreeting();
            alert('✅ Progress imported successfully!');
        } catch (err) {
            alert('❌ Invalid file format.');
        }
    };
    reader.readAsText(file);
}

// ===== QUIZ SYSTEM =====
function openQuiz(e) {
    if (e) e.preventDefault();
    quizScore = 0;
    quizIndex = 0;
    const pool = TAGS.filter(t => t.quiz);
    quizQuestions = pool.sort(() => Math.random() - 0.5).slice(0, quizTotal);
    if (quizQuestions.length === 0) { alert('No quiz questions available.'); return; }
    const modal = document.getElementById('quizModal');
    if (!modal) return;
    document.getElementById('quizResultArea').style.display = 'none';
    document.getElementById('quizActiveArea').style.display = 'block';
    document.getElementById('quizFooterActions').style.display = 'flex';
    document.getElementById('quizScoreDisplay').textContent = 'Score: 0/' + quizQuestions.length;
    showQuizQuestion();
    modal.showModal();
}

function showQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
        document.getElementById('quizActiveArea').style.display = 'none';
        document.getElementById('quizFooterActions').style.display = 'none';
        document.getElementById('quizResultArea').style.display = 'block';
        document.getElementById('quizFinalScore').textContent = quizScore + '/' + quizQuestions.length;
        return;
    }
    const q = quizQuestions[quizIndex].quiz;
    document.getElementById('quizQuestion').textContent = q.question;
    const optDiv = document.getElementById('quizOptions');
    optDiv.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt;
        btn.style.cssText = 'text-align:left;padding:14px 16px;border-radius:10px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text);cursor:pointer;font-size:0.95rem;transition:0.2s;font-family:inherit;';
        btn.onclick = () => selectQuizAnswer(i);
        optDiv.appendChild(btn);
    });
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) { nextBtn.style.opacity = '0.5'; nextBtn.style.pointerEvents = 'none'; }
}

function selectQuizAnswer(index) {
    const q = quizQuestions[quizIndex].quiz;
    const btns = document.getElementById('quizOptions').children;
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.pointerEvents = 'none';
        if (i === q.answer) {
            btns[i].style.background = 'rgba(16,185,129,0.2)';
            btns[i].style.borderColor = '#10b981';
            btns[i].style.color = '#10b981';
        } else if (i === index && i !== q.answer) {
            btns[i].style.background = 'rgba(239,68,68,0.2)';
            btns[i].style.borderColor = '#ef4444';
            btns[i].style.color = '#ef4444';
        }
    }
    if (index === q.answer) quizScore++;
    document.getElementById('quizScoreDisplay').textContent = 'Score: ' + quizScore + '/' + quizQuestions.length;
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) { nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto'; }
}

function nextQuizQuestion() {
    quizIndex++;
    showQuizQuestion();
}

function shareScore() {
    const text = '🎯 I scored ' + quizScore + '/' + quizQuestions.length + ' on the JavaScript Mastery Quiz! Try it: https://github.com/sanskarIN/LangSteps';
    navigator.clipboard.writeText(text).then(() => alert('Score copied to clipboard!'));
}

// ===== CHEAT SHEET =====
function openCheatSheet() {
    const modal = document.getElementById('cheatSheetModal');
    if (modal) { renderCheatSheet(); modal.showModal(); }
}

function renderCheatSheet() {
    const grid = document.getElementById('csGrid');
    if (!grid) return;
    const search = (document.getElementById('csSearch')?.value || '').toLowerCase();
    const filtered = search ? TAGS.filter(t => t.title.toLowerCase().includes(search) || (t.badge && t.badge.toLowerCase().includes(search))) : TAGS;

    grid.innerHTML = filtered.map(t => `
        <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:12px;padding:16px;cursor:pointer;transition:0.2s;"
             onclick="document.getElementById('cheatSheetModal').close(); loadTag('${t.id}');"
             onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.borderColor='var(--border)';this.style.transform=''">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span style="font-size:1.3rem;">${t.emoji || '⚡'}</span>
                <strong style="font-size:0.9rem;color:var(--text);">${t.title}</strong>
            </div>
            <span style="font-size:0.75rem;padding:3px 8px;background:color-mix(in srgb, var(--accent) 15%, transparent);color:var(--accent);border-radius:6px;font-weight:600;">${t.badge || ''}</span>
            ${masteredTags.has(t.id) ? '<span style="float:right;color:#10b981;">✅</span>' : ''}
        </div>
    `).join('');
}

// ===== MASTERY CENTER =====
function openMasteryCenter() {
    const modal = document.getElementById('masteryCenterModal');
    if (modal) { showMasteryTab('interview'); modal.showModal(); }
    const rank = document.getElementById('mcRank');
    if (rank) rank.textContent = getMasteryRank(masteredTags.size);
}

function showMasteryTab(tab) {
    document.querySelectorAll('.extra-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.extra-tab-btn[onclick*="${tab}"]`)?.classList.add('active');

    const content = document.getElementById('mcContent');
    if (!content) return;

    if (tab === 'interview') {
        const items = TAGS.filter(t => t.quiz).slice(0, 20);
        content.innerHTML = '<h2 style="margin-bottom:24px;color:var(--accent);">💬 Interview Questions</h2>' +
            items.map(t => `
                <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:16px;">
                    <h3 style="color:var(--text);margin-bottom:8px;">${t.emoji || '⚡'} ${t.title}</h3>
                    <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.6;">${t.quiz ? t.quiz.question : 'Explain ' + t.title + ' in JavaScript.'}</p>
                </div>
            `).join('');
    } else if (tab === 'best-practices') {
        content.innerHTML = `
            <h2 style="margin-bottom:24px;color:var(--accent);">🛡️ JavaScript Best Practices</h2>
            ${['Use const by default, let when needed — never var', 'Use === instead of == for strict comparison', 'Use template literals instead of string concatenation', 'Handle promises with async/await and try-catch', 'Use optional chaining (?.) and nullish coalescing (??)', 'Avoid global variables — use modules and closures', 'Use destructuring for cleaner object/array access', 'Always use try-catch with JSON.parse()', 'Use Array methods (map, filter, reduce) over loops', 'Write pure functions when possible', 'Debounce expensive event handlers (scroll, resize)', 'Use Web APIs properly (Intersection Observer, etc.)', 'Keep functions small and single-purpose', 'Use meaningful variable and function names', 'Comment WHY, not WHAT'].map((tip, i) => `
                <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px;display:flex;align-items:flex-start;gap:12px;">
                    <span style="background:var(--accent);color:#000;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.8rem;flex-shrink:0;">${i + 1}</span>
                    <span style="color:var(--text);font-size:0.92rem;line-height:1.5;">${tip}</span>
                </div>
            `).join('')}`;
    } else if (tab === 'flashcards') {
        const pool = TAGS.sort(() => Math.random() - 0.5).slice(0, 10);
        content.innerHTML = '<h2 style="margin-bottom:24px;color:var(--accent);">🃏 Flashcards (Click to Flip)</h2>' +
            pool.map(t => `
                <div onclick="this.querySelector('.fc-answer').style.display=this.querySelector('.fc-answer').style.display==='block'?'none':'block'"
                     style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:16px;cursor:pointer;transition:0.2s;">
                    <h3 style="color:var(--text);margin-bottom:8px;">${t.emoji || '⚡'} What is ${t.title}?</h3>
                    <div class="fc-answer" style="display:none;margin-top:12px;padding-top:12px;border-top:1px solid var(--border);color:var(--text-muted);font-size:0.9rem;line-height:1.6;">
                        ${t.description || t.title + ' is a core JavaScript concept used in modern software engineering.'}
                    </div>
                </div>
            `).join('');
    }
}

// ===== FAVORITES =====
function toggleFavorite(id) {
    if (favoriteTags.has(id)) favoriteTags.delete(id);
    else favoriteTags.add(id);
    try { localStorage.setItem('js-mastery-favorites', JSON.stringify([...favoriteTags])); } catch (e) { }
    updateMasteryStats();
    renderSidebar();
}

// ===== SIDEBAR RENDERING =====
function renderSidebar() {
    const nav = document.getElementById('sbNav');
    if (!nav) { renderTags(TAGS); return; }

    const search = (document.getElementById('sbSearch')?.value || '').toLowerCase();
    const filter = document.getElementById('sbFilter')?.value || 'ALL';

    let filtered = TAGS;
    if (search) filtered = filtered.filter(t => t.title.toLowerCase().includes(search) || (t.badge && t.badge.toLowerCase().includes(search)));
    if (filter === 'FAVORITES') filtered = filtered.filter(t => favoriteTags.has(t.id));
    else if (filter === 'MASTERED') filtered = filtered.filter(t => masteredTags.has(t.id));
    else if (filter !== 'ALL') filtered = filtered.filter(t => t.badge === filter);

    nav.innerHTML = filtered.map((t, i) => `
        <div class="sb-item ${currentTag && currentTag.id === t.id ? 'active' : ''} ${masteredTags.has(t.id) ? 'mastered' : ''}"
             onclick="loadTag('${t.id}')" data-id="${t.id}" title="${t.title}">
            <span class="sb-num">${i + 1}</span>
            <span class="sb-emoji">${t.emoji || '⚡'}</span>
            <span class="sb-title">${t.title}</span>
            <div class="sb-badges">
                ${masteredTags.has(t.id) ? '<span class="sb-check">✅</span>' : ''}
                ${favoriteTags.has(t.id) ? '<span class="sb-fav">⭐</span>' : ''}
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    renderSidebar();
}

function populateFilterDropdown() {
    const select = document.getElementById('sbFilter');
    if (!select) return;
    const categories = [...new Set(TAGS.map(t => t.badge).filter(Boolean))];
    select.innerHTML = '<option value="ALL">All Categories</option>' +
        '<option value="FAVORITES">⭐ Favorites</option>' +
        '<option value="MASTERED">✅ Mastered</option>' +
        categories.map(c => '<option value="' + c + '">' + c + '</option>').join('');
}

// ===== INIT =====
function init() {
    loadProgress();
    try { xp = parseInt(localStorage.getItem('js_xp')) || 0; } catch (e) { xp = 0; }
    try {
        const savedFavs = localStorage.getItem('js-mastery-favorites');
        if (savedFavs) favoriteTags = new Set(JSON.parse(savedFavs));
    } catch (e) { }

    // Restore font size
    try {
        const fs = localStorage.getItem('jsMasteryFontSize');
        if (fs) document.documentElement.style.fontSize = fs + 'px';
    } catch (e) { }

    // Greeting
    updateGreeting();

    // Welcome modal
    try {
        if (!localStorage.getItem('jsMasteryWelcomed')) {
            const modal = document.getElementById('welcomeModal');
            if (modal) setTimeout(() => modal.showModal(), 800);
        }
    } catch (e) { }

    // Populate sidebar filter dropdown
    populateFilterDropdown();

    // Render sidebar
    renderSidebar();

    // Init themes
    initThemes();

    let savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('js-theme') || 'dark'; } catch (e) { }
    applyTheme(savedTheme);

    // Mastery stats
    updateMasteryStats();

    // Concept of the day
    initConceptOfDay();

    // Stats
    const totalEl = document.getElementById('totalTagsStat');
    if (totalEl) totalEl.textContent = TAGS.length;
    const totalDesc = document.getElementById('totalTagsDesc');
    if (totalDesc) totalDesc.textContent = TAGS.length;

    // Sidebar search listener
    const sbSearch = document.getElementById('sbSearch');
    if (sbSearch) sbSearch.addEventListener('input', () => renderSidebar());

    // Sidebar filter listener
    const sbFilter = document.getElementById('sbFilter');
    if (sbFilter) sbFilter.addEventListener('change', () => renderSidebar());

    // Sidebar close
    const sbClose = document.getElementById('sbClose');
    if (sbClose) sbClose.addEventListener('click', toggleSidebar);

    // Content area — build it dynamically since new index.html uses #content div
    buildContentArea();

    // Init CodeMirror safely with fallback textarea
    const codeEditorEl = document.getElementById('codeEditor');
    if (codeEditorEl && typeof CodeMirror !== 'undefined') {
        try {
            editor = CodeMirror.fromTextArea(codeEditorEl, {
                mode: "javascript",
                theme: "dracula",
                lineNumbers: true,
                autoCloseBrackets: true,
                matchBrackets: true,
                indentUnit: 2,
                tabSize: 2,
                lineWrapping: true
            });

            editor.on('change', () => {
                const autoRun = document.getElementById('auto-run');
                if (autoRun && autoRun.checked) runCode();
            });
        } catch (cmErr) {
            console.warn('CodeMirror failed, falling back to native textarea:', cmErr);
            editor = {
                getValue: () => codeEditorEl.value,
                setValue: (val) => { codeEditorEl.value = val; }
            };
        }
    } else if (codeEditorEl) {
        editor = {
            getValue: () => codeEditorEl.value,
            setValue: (val) => { codeEditorEl.value = val; }
        };
        codeEditorEl.style.display = 'block';
        codeEditorEl.style.width = '100%';
        codeEditorEl.style.minHeight = '160px';
        codeEditorEl.style.background = 'var(--bg)';
        codeEditorEl.style.color = 'var(--text)';
        codeEditorEl.style.fontFamily = "'Fira Code', monospace";
        codeEditorEl.style.padding = '12px';
        codeEditorEl.style.border = 'none';
        codeEditorEl.style.boxSizing = 'border-box';
    }

    setupEventListeners();

    if (TAGS.length > 0) {
        loadTag(TAGS[0].id);
    }
}

// ===== BUILD CONTENT AREA =====
function buildContentArea() {
    const content = document.getElementById('content');
    if (!content) return;
    if (content.children.length > 0) return;

    content.innerHTML = `
        <section id="explanationPanel" class="explanation-panel" style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:16px;margin:0 0 20px;overflow:hidden;"></section>

        <section class="editor-section" style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
            <div class="editor-toolbar" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--bg-tertiary);border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;">
                <div style="display:flex;align-items:center;gap:12px;">
                    <span style="font-weight:700;font-size:0.9rem;color:var(--text);">📝 Code Editor (JavaScript)</span>
                    <label style="display:flex;align-items:center;gap:6px;font-size:0.82rem;color:var(--text-muted);cursor:pointer;">
                        <input type="checkbox" id="auto-run" style="accent-color:var(--accent);cursor:pointer;"> Auto-Run
                    </label>
                </div>
                <div style="display:flex;gap:8px;">
                    <button id="runBtn" style="background:var(--accent);color:#000;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:bold;font-family:inherit;font-size:0.85rem;transition:0.2s;">▶ Run</button>
                    <button id="copyCodeBtn" style="background:var(--bg-quaternary);color:var(--text);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:0.85rem;">📋 Copy</button>
                    <button id="clearConsoleBtn" style="background:var(--bg-quaternary);color:var(--text);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:0.85rem;">🗑️ Clear</button>
                </div>
            </div>
            <textarea id="codeEditor"></textarea>
        </section>

        <section class="preview-section" style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:16px;margin-top:20px;overflow:hidden;">
            <div style="padding:12px 16px;background:var(--bg-tertiary);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
                <span style="font-weight:700;font-size:0.9rem;color:var(--text);">💻 Console Output</span>
                <div style="display:flex;gap:6px;align-items:center;">
                    <span style="width:10px;height:10px;background:#ef4444;border-radius:50%;display:inline-block;"></span>
                    <span style="width:10px;height:10px;background:#f59e0b;border-radius:50%;display:inline-block;"></span>
                    <span style="width:10px;height:10px;background:#10b981;border-radius:50%;display:inline-block;"></span>
                </div>
            </div>
            <div id="consoleOutput" style="padding:12px 16px;background:var(--bg);font-family:'Fira Code',monospace;font-size:0.82rem;color:var(--text-muted);min-height:100px;max-height:300px;overflow-y:auto;"></div>
        </section>

        <div style="display:flex;gap:12px;margin-top:20px;justify-content:center;flex-wrap:wrap;">
            <button id="markCompleteBtn" onclick="markCompleted()" style="background:linear-gradient(135deg,var(--accent),var(--accent-secondary));color:#000;border:none;padding:14px 28px;border-radius:12px;cursor:pointer;font-weight:bold;font-size:1rem;font-family:inherit;transition:0.3s;box-shadow:0 4px 15px rgba(0,0,0,0.2);"
                onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'"
                onmouseout="this.style.transform='';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'">✅ Mark as Mastered</button>
        </div>

        <!-- Celebration Overlay -->
        <div id="celebrationOverlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);z-index:1000;align-items:center;justify-content:center;">
            <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:20px;padding:40px;text-align:center;max-width:400px;width:90%;">
                <div style="font-size:4rem;margin-bottom:16px;">🎉</div>
                <h2 style="color:var(--accent);margin-bottom:8px;font-family:'Plus Jakarta Sans',sans-serif;">Concept Mastered!</h2>
                <p style="color:var(--text-muted);margin-bottom:24px;">You've earned XP! Keep going!</p>
                <button id="nextConceptBtn" style="background:var(--accent);color:#000;border:none;padding:14px 24px;border-radius:12px;cursor:pointer;font-weight:bold;font-size:1rem;font-family:inherit;">Next Concept ➔</button>
            </div>
        </div>
    `;
}

// ===== LOAD TAG (replaces selectTag) =====
function loadTag(id) {
    currentTag = TAGS.find(t => t.id === id);
    if (!currentTag) return;

    // Dismiss sidebar drawer on selection so content is fully viewable
    const sb = document.getElementById('sidebar');
    if (sb && sb.classList.contains('open')) {
        toggleSidebar();
    }

    // Update sidebar active state
    document.querySelectorAll('.sb-item, .tag-item').forEach(el => {
        el.classList.remove('active');
        if (el.dataset.id === id) el.classList.add('active');
    });

    // Update explanation panel
    const panel = document.getElementById('explanationPanel');
    if (panel) {
        const isFav = favoriteTags.has(id);
        panel.innerHTML = `
            <div style="padding:24px;background:var(--bg-tertiary);border-bottom:1px solid var(--border);">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <span style="font-size:2rem;">${currentTag.emoji || '⚡'}</span>
                        <div>
                            <span style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--accent);background:color-mix(in srgb, var(--accent) 12%, transparent);padding:3px 10px;border-radius:6px;">${currentTag.badge || ''}</span>
                            <h2 style="font-size:1.5rem;font-weight:800;margin-top:6px;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;">${currentTag.title}</h2>
                        </div>
                    </div>
                    <button onclick="toggleFavorite('${id}')" style="background:none;border:1px solid var(--border);color:${isFav ? '#f59e0b' : 'var(--text-muted)'};padding:8px 14px;border-radius:8px;cursor:pointer;font-size:1rem;transition:0.2s;" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">${isFav ? '⭐ Saved' : '☆ Save'}</button>
                </div>
            </div>
            <div style="padding:24px;line-height:1.8;color:var(--text);font-size:0.95rem;">
                ${currentTag.content}
            </div>
        `;
    }

    // Set editor code
    if (editor) {
        const consoleOutput = document.getElementById('consoleOutput');
        if (consoleOutput) consoleOutput.innerHTML = '';
        editor.setValue(currentTag.defaultCode || '// Write your JavaScript code here\nconsole.log("Hello, JavaScript!");');
    }

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
        const sb = document.getElementById('sidebar');
        if (sb && sb.classList.contains('open')) toggleSidebar();
    }

    // Scroll to top of content
    const content = document.getElementById('content');
    if (content) content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// For legacy compat
function selectTag(id) { loadTag(id); }

// ===== RUN CODE =====
function runCode() {
    const consoleOutput = document.getElementById('consoleOutput');
    if (consoleOutput) consoleOutput.innerHTML = '';

    const code = editor ? editor.getValue() : '';
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    function appendMsg(args, type) {
        const msg = args.map(arg => {
            if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
            }
            return String(arg);
        }).join(' ');
        const div = document.createElement('div');
        div.style.cssText = 'padding:4px 0;border-bottom:1px solid var(--border);' +
            (type === 'error' ? 'color:#ef4444;' : type === 'warn' ? 'color:#f59e0b;' : 'color:var(--text);');
        div.textContent = (type === 'error' ? '❌ ' : type === 'warn' ? '⚠️ ' : '> ') + msg;
        if (consoleOutput) { consoleOutput.appendChild(div); consoleOutput.scrollTop = consoleOutput.scrollHeight; }
    }

    console.log = (...args) => { originalLog.apply(console, args); appendMsg(args, 'log'); };
    console.error = (...args) => { originalError.apply(console, args); appendMsg(args, 'error'); };
    console.warn = (...args) => { originalWarn.apply(console, args); appendMsg(args, 'warn'); };

    try {
        const asyncFunc = new Function(`(async () => {
            try { ${code} } catch(e) { console.error(e.name + ': ' + e.message); }
        })()`);
        asyncFunc();
    } catch (err) {
        console.error(err.name + ": " + err.message);
    }

    // Restore
    setTimeout(() => {
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;
    }, 2000);
}

// ===== MARK COMPLETED =====
function markCompleted() {
    if (!currentTag || masteredTags.has(currentTag.id)) return;
    masteredTags.add(currentTag.id);
    xp += 10;
    try { localStorage.setItem('js_xp', xp); } catch (e) { }
    saveProgress();
    updateProgressUI();
    updateMasteryStats();
    renderSidebar();
    triggerCelebration();
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899'] });
    }
}



// Render Sidebar Tags
function renderTags(tagsToRender) {
    const list = document.getElementById('tagList');
    list.innerHTML = '';
    
    tagsToRender.forEach(tag => {
        const li = document.createElement('li');
        li.className = `tag-item \${masteredTags.has(tag.id) ? 'mastered' : ''}`;
        if (currentTag && currentTag.id === tag.id) li.classList.add('active');
        li.dataset.id = tag.id;
        li.innerHTML = `
            <span class="tag-emoji">\${tag.emoji}</span>
            <div class="tag-info">
                <span class="tag-title">\${tag.title}</span>
                <span class="tag-badge">\${tag.badge}</span>
            </div>
            <span class="check-icon">✔️</span>
        `;
        li.addEventListener('click', () => selectTag(tag.id));
        list.appendChild(li);
    });
}

function selectTag(id) {
    currentTag = TAGS.find(t => t.id === id);
    if (!currentTag) return;

    // Update active class
    document.querySelectorAll('.tag-item').forEach(el => {
        el.classList.remove('active');
        if(el.dataset.id === id) el.classList.add('active');
    });

    // Update explanation
    const panel = document.getElementById('explanationPanel');
    panel.innerHTML = `
        <div class="explanation-header">
            <span class="exp-badge">\${currentTag.badge}</span>
            <h2>\${currentTag.emoji} \${currentTag.title}</h2>
        </div>
        <div class="explanation-body">
            \${currentTag.content}
        </div>
    `;

    // Clear console and set editor code
    consoleOutput.innerHTML = '';
    editor.setValue(currentTag.defaultCode || "// Write your code here");
}

function setupEventListeners() {
    // Search (legacy compat for old index)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = TAGS.filter(t => t.title.toLowerCase().includes(term) || t.badge.toLowerCase().includes(term));
            renderTags(filtered);
        });
    }

    // Filters (legacy compat)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.dataset.filter;
            if (filter === 'all') renderTags(TAGS);
            else renderTags(TAGS.filter(t => t.badge === filter));
        });
    });

    // Theme selector (legacy)
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.addEventListener('change', (e) => applyTheme(e.target.value));
    }

    // Run button
    document.addEventListener('click', (e) => {
        if (e.target.id === 'runBtn' || e.target.closest('#runBtn')) {
            runCode();
        }
        if (e.target.id === 'copyCodeBtn' || e.target.closest('#copyCodeBtn')) {
            if (editor) navigator.clipboard.writeText(editor.getValue());
            const btn = document.getElementById('copyCodeBtn');
            if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => btn.textContent = '📋 Copy', 2000); }
        }
        if (e.target.id === 'clearConsoleBtn' || e.target.closest('#clearConsoleBtn')) {
            const co = document.getElementById('consoleOutput');
            if (co) co.innerHTML = '';
        }
    });

    // Next button on celebration
    document.addEventListener('click', (e) => {
        if (e.target.id === 'nextConceptBtn' || e.target.closest('#nextConceptBtn')) {
            const overlay = document.getElementById('celebrationOverlay');
            if (overlay) { overlay.style.display = 'none'; }
            const currentIndex = TAGS.findIndex(t => t.id === currentTag.id);
            if (currentIndex < TAGS.length - 1) {
                loadTag(TAGS[currentIndex + 1].id);
            }
        }
    });
}

// Progress Management
function loadProgress() {
    
    let saved = null;
    try {
        saved = localStorage.getItem('js-mastery-progress');
    } catch(e) {
        console.warn('localStorage not available for loadProgress');
    }
    if (saved) {
        try {
            masteredTags = new Set(JSON.parse(saved));
        } catch(e) {}
    }
    updateProgressUI();
}

function saveProgress() {
    
    try {
        localStorage.setItem('js-mastery-progress', JSON.stringify([...masteredTags]));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
}

function updateProgressUI() {
    const total = TAGS.length;
    const mastered = masteredTags.size;
    const pct = total === 0 ? 0 : Math.round((mastered / total) * 100);
    
    const progressText = document.getElementById('progressText');
    if (progressText) progressText.textContent = `${mastered} / ${total} Concepts Mastered (${pct}%)`;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = `${pct}%`;
    const sbMasteryCount = document.getElementById('sbMasteryCount');
    if (sbMasteryCount) sbMasteryCount.textContent = `${pct}%`;
    const masteryProgressBar = document.getElementById('masteryProgressBar');
    if (masteryProgressBar) masteryProgressBar.style.width = `${pct}%`;

    updateMasteryStats();
}

function triggerCelebration() {
    const overlay = document.getElementById('celebrationOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
    triggerConfetti();
}

// Themes
function initThemes() {
    const grid = document.getElementById('themeGrid');
    if(!grid) return;
    grid.innerHTML = '';
    PRESET_THEMES.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'theme-btn';
        btn.style.background = t.bg;
        btn.style.border = `2px solid \${t.border}`;
        btn.innerHTML = `
            <div style="font-weight:bold;color:\${t.text}">\${t.name}</div>
            <div style="display:flex;gap:4px;justify-content:center;margin-top:8px;">
                <span style="width:12px;height:12px;border-radius:50%;background:\${t.accent}"></span>
                <span style="width:12px;height:12px;border-radius:50%;background:\${t.accent2}"></span>
            </div>
        `;
        btn.onclick = () => { applyTheme(t.id); document.getElementById('themeModal').close(); };
        grid.appendChild(btn);
    });

    // Custom theme logic
    const inputs = ['bg', 'bg2', 'text', 'accent'];
    inputs.forEach(id => {
        const el = document.getElementById('ct-' + id);
        if(el) {
            el.addEventListener('input', () => {
                const root = document.documentElement;
                root.style.setProperty('--' + (id==='bg'?'bg':id==='bg2'?'bg-secondary':id==='text'?'text':id==='accent'?'accent':id), el.value);
            });
        }
    });
}

function applyTheme(themeId) {
    const theme = PRESET_THEMES.find(t => t.id === themeId) || PRESET_THEMES[0];
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--bg-secondary', theme.bg2);
    root.style.setProperty('--bg-tertiary', theme.bg3);
    root.style.setProperty('--bg-quaternary', theme.bg4);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text-muted', theme.text2);
    root.style.setProperty('--text-faint', theme.text3);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-secondary', theme.accent2);
    root.style.setProperty('--accent-transparent', theme.accent3);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--code-bg', theme.codeBg);
    root.style.setProperty('--sidebar-bg', theme.sbBg);
    root.style.setProperty('--header-bg', theme.hdrBg);
    
    try {
        localStorage.setItem('js-theme', themeId);
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
}

// Boot up
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Splash Screen Logic
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 800);
    }
}, 1500);

// --- Mobile Sidebar Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sbClose = document.getElementById('sbClose');
    const sidebar = document.querySelector('.sidebar');
    
    if(mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }
    
    if(sbClose && sidebar) {
        sbClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Also close sidebar when clicking outside of it on mobile
    document.addEventListener('click', (e) => {
        if(window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
            if(!sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// Code optimized and documented by Sanskar Developer
