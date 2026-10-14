// ===== LANGSTEPS TYPESCRIPT MASTERY SCRIPT =====
// High performance curriculum engine by Sanskar Developer
// 50 Core TypeScript Concepts | 36 Themes | Pro CodeMirror Playground | Gamification

// ===== SPLASH SCREEN =====
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 800);
  }
}, 1200);

// ===== THEME DATA =====
const PRESET_THEMES = [
  {
    "id": "dark",
    "name": "Midnight Dark",
    "bg": "#0a0a1a",
    "bg2": "#12122a",
    "bg3": "#0d0d22",
    "bg4": "#080818",
    "text": "#d0d0ee",
    "text2": "#b0b0d0",
    "text3": "#8888bb",
    "accent": "#3178c6",
    "accent2": "#3ecfcf",
    "accent3": "#ffa36b",
    "border": "#3178c633",
    "card": "#12122a",
    "codeBg": "#080818",
    "sbBg": "#0f0f24",
    "hdrBg": "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)"
  },
  {
    "id": "light",
    "name": "Clean Light",
    "bg": "#f0f0f8",
    "bg2": "#ffffff",
    "bg3": "#f5f5ff",
    "bg4": "#eeeef8",
    "text": "#1a1a2e",
    "text2": "#333333",
    "text3": "#666666",
    "accent": "#235a97",
    "accent2": "#1aada0",
    "accent3": "#e8823a",
    "border": "#235a9722",
    "card": "#ffffff",
    "codeBg": "#f0f0f8",
    "sbBg": "#ffffff",
    "hdrBg": "linear-gradient(135deg,#3178c6,#1aada0)"
  },
  {
    "id": "ocean",
    "name": "Deep Ocean",
    "bg": "#0a192f",
    "bg2": "#112240",
    "bg3": "#0d1b33",
    "bg4": "#0a1628",
    "text": "#ccd6f6",
    "text2": "#8892b0",
    "text3": "#5a6a8a",
    "accent": "#64ffda",
    "accent2": "#57cbff",
    "accent3": "#f5a623",
    "border": "#64ffda22",
    "card": "#112240",
    "codeBg": "#0a1628",
    "sbBg": "#0d1d38",
    "hdrBg": "linear-gradient(135deg,#0a192f,#112240,#1a365d)"
  },
  {
    "id": "purple",
    "name": "Neon Purple",
    "bg": "#13091f",
    "bg2": "#1c1030",
    "bg3": "#170d28",
    "bg4": "#100820",
    "text": "#e0d0ff",
    "text2": "#b8a0dd",
    "text3": "#8877aa",
    "accent": "#bf5af2",
    "accent2": "#ff6bcb",
    "accent3": "#ffd60a",
    "border": "#bf5af222",
    "card": "#1c1030",
    "codeBg": "#100820",
    "sbBg": "#150b25",
    "hdrBg": "linear-gradient(135deg,#2d1b52,#1c1030,#13091f)"
  },
  {
    "id": "green",
    "name": "Forest Green",
    "bg": "#0a1a0f",
    "bg2": "#122a18",
    "bg3": "#0d220f",
    "bg4": "#081808",
    "text": "#d0eeda",
    "text2": "#a0c0a8",
    "text3": "#6a8a70",
    "accent": "#4ade80",
    "accent2": "#22d3ee",
    "accent3": "#fbbf24",
    "border": "#4ade8022",
    "card": "#122a18",
    "codeBg": "#081808",
    "sbBg": "#0f2414",
    "hdrBg": "linear-gradient(135deg,#0a2e14,#122a18,#1a3e22)"
  },
  {
    "id": "dracula",
    "name": "Dracula",
    "bg": "#282a36",
    "bg2": "#44475a",
    "bg3": "#3b3d4d",
    "bg4": "#21222c",
    "text": "#f8f8f2",
    "text2": "#e2e2dc",
    "text3": "#6272a4",
    "accent": "#bd93f9",
    "accent2": "#ff79c6",
    "accent3": "#f1fa8c",
    "border": "#bd93f933",
    "card": "#44475a",
    "codeBg": "#21222c",
    "sbBg": "#282a36",
    "hdrBg": "linear-gradient(135deg,#282a36,#44475a,#6272a4)"
  },
  {
    "id": "monokai",
    "name": "Monokai Pro",
    "bg": "#272822",
    "bg2": "#3e3d32",
    "bg3": "#33332d",
    "bg4": "#1e1f1c",
    "text": "#f8f8f2",
    "text2": "#cfcfc2",
    "text3": "#75715e",
    "accent": "#f92672",
    "accent2": "#a6e22e",
    "accent3": "#fd971f",
    "border": "#f9267233",
    "card": "#3e3d32",
    "codeBg": "#1e1f1c",
    "sbBg": "#272822",
    "hdrBg": "linear-gradient(135deg,#1e1f1c,#272822,#3e3d32)"
  },
  {
    "id": "nord",
    "name": "Nordic Frost",
    "bg": "#2e3440",
    "bg2": "#3b4252",
    "bg3": "#343b48",
    "bg4": "#242933",
    "text": "#eceff4",
    "text2": "#e5e9f0",
    "text3": "#4c566a",
    "accent": "#88c0d0",
    "accent2": "#81a1c1",
    "accent3": "#ebcb8b",
    "border": "#88c0d033",
    "card": "#3b4252",
    "codeBg": "#242933",
    "sbBg": "#2e3440",
    "hdrBg": "linear-gradient(135deg,#242933,#2e3440,#3b4252)"
  },
  {
    "id": "synthwave",
    "name": "Synthwave 84",
    "bg": "#262335",
    "bg2": "#34294f",
    "bg3": "#2d2642",
    "bg4": "#1d1a29",
    "text": "#f3eee8",
    "text2": "#dfd6ce",
    "text3": "#848bbd",
    "accent": "#ff7edb",
    "accent2": "#36f9f6",
    "accent3": "#fede5d",
    "border": "#ff7edb33",
    "card": "#34294f",
    "codeBg": "#1d1a29",
    "sbBg": "#262335",
    "hdrBg": "linear-gradient(135deg,#1d1a29,#262335,#34294f)"
  },
  {
    "id": "gruvbox",
    "name": "Gruvbox Dark",
    "bg": "#282828",
    "bg2": "#3c3836",
    "bg3": "#32302f",
    "bg4": "#1d2021",
    "text": "#ebdbb2",
    "text2": "#d5c4a1",
    "text3": "#928374",
    "accent": "#fabd2f",
    "accent2": "#b8bb26",
    "accent3": "#fe8019",
    "border": "#fabd2f33",
    "card": "#3c3836",
    "codeBg": "#1d2021",
    "sbBg": "#282828",
    "hdrBg": "linear-gradient(135deg,#1d2021,#282828,#3c3836)"
  },
  {
    "id": "tokyo_night",
    "name": "Tokyo Night",
    "bg": "#1a1b26",
    "bg2": "#24283b",
    "bg3": "#1f2231",
    "bg4": "#16161e",
    "text": "#c0caf5",
    "text2": "#a9b1d6",
    "text3": "#565f89",
    "accent": "#7aa2f7",
    "accent2": "#bb9af7",
    "accent3": "#ff9e64",
    "border": "#7aa2f733",
    "card": "#24283b",
    "codeBg": "#16161e",
    "sbBg": "#1a1b26",
    "hdrBg": "linear-gradient(135deg,#16161e,#1a1b26,#24283b)"
  },
  {
    "id": "matrix",
    "name": "The Matrix",
    "bg": "#0d1112",
    "bg2": "#131a18",
    "bg3": "#101515",
    "bg4": "#090c0c",
    "text": "#d1f1e2",
    "text2": "#a4debe",
    "text3": "#4b7a63",
    "accent": "#00ff41",
    "accent2": "#008f11",
    "accent3": "#003b00",
    "border": "#00ff4133",
    "card": "#131a18",
    "codeBg": "#090c0c",
    "sbBg": "#0d1112",
    "hdrBg": "linear-gradient(135deg,#090c0c,#0d1112,#131a18)"
  },
  {
    "id": "cyber",
    "name": "Cyber Neon",
    "bg": "#0b0c10",
    "bg2": "#1f2833",
    "bg3": "#161c24",
    "bg4": "#050608",
    "text": "#c5c6c7",
    "text2": "#9ba1a6",
    "text3": "#4a545c",
    "accent": "#66fcf1",
    "accent2": "#45a29e",
    "accent3": "#ffffff",
    "border": "#66fcf133",
    "card": "#1f2833",
    "codeBg": "#050608",
    "sbBg": "#0b0c10",
    "hdrBg": "linear-gradient(135deg,#050608,#0b0c10,#1f2833)"
  },
  {
    "id": "hacker",
    "name": "Term Hacker",
    "bg": "#000000",
    "bg2": "#111111",
    "bg3": "#080808",
    "bg4": "#000000",
    "text": "#33ff00",
    "text2": "#2cbd00",
    "text3": "#166000",
    "accent": "#33ff00",
    "accent2": "#ffffff",
    "accent3": "#88ff88",
    "border": "#33ff0033",
    "card": "#111111",
    "codeBg": "#000000",
    "sbBg": "#000000",
    "hdrBg": "linear-gradient(135deg,#000000,#080808,#111111)"
  }
];

// ===== TAG DATA =====
const TAGS = [
  {
    id: "type-annotations",
    title: "Primitive Types & Type Annotations",
    badge: "BASICS",
    emoji: "🔤",
    defaultCode: "// Discover TypeScript Primitives & Annotations\nlet username: string = \"Sanskar\";\nlet age: number = 24;\nlet isDeveloper: boolean = true;\nlet bigIntVal: bigint = 9007199254740991n;\nlet uniqueSymbol: symbol = Symbol(\"uniqueId\");\nlet nullVal: null = null;\nlet undefinedVal: undefined = undefined;\n\nconsole.log(`Developer: ${username}, Active: ${isDeveloper}`);",
    content: "\n    <h3>📌 Deep Dive: Primitive Types & Type Annotations</h3>\n    <p>TypeScript introduces explicit, static type annotations for all standard ECMAScript primitives (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`). By declaring types up-front, the compiler immediately detects assignability violations, accidental type coercions, and typos before code reaches runtime.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>During compilation, the TypeScript parser translates source code into an Abstract Syntax Tree (AST). The type checker evaluates each assignment node against the declared type symbol. Upon emit, all type annotations are cleanly erased, leaving pure JavaScript with 0% runtime overhead.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Primitive Types & Type Annotations Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Explicit annotations vs Type inference\nfunction calculateTax(subtotal: number, taxRate: number = 0.18): number {\n  return subtotal * (1 + taxRate);\n}\nconst finalPrice = calculateTax(500); // inferred as number\nconsole.log(\"Final Price: $\" + finalPrice.toFixed(2));</pre></div>\n  "
  },
  {
    id: "interfaces",
    title: "Interfaces & Shape Contracts",
    badge: "OBJECTS & INTERFACES",
    emoji: "📋",
    defaultCode: "// Define structural contracts with Interfaces\ninterface UserProfile {\n  readonly id: string;\n  name: string;\n  email: string;\n  avatarUrl?: string; // Optional property\n}\n\ninterface Developer extends UserProfile {\n  languages: string[];\n  seniority: \"Junior\" | \"Mid\" | \"Senior\" | \"Lead\";\n}\n\nconst dev: Developer = {\n  id: \"usr_4092\",\n  name: \"Sanskar\",\n  email: \"sanskarin@outlook.in\",\n  languages: [\"TypeScript\", \"Rust\", \"C#\", \"Python\"],\n  seniority: \"Lead\"\n};\nconsole.log(dev);",
    content: "\n    <h3>📌 Deep Dive: Interfaces & Shape Contracts</h3>\n    <p>Interfaces are TypeScript's primary construct for modeling the structural shapes of objects. They support mandatory properties, optional properties (with `?`), readonly fields (preventing mutation after instantiation), method signatures, and multi-interface inheritance via `extends`.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript interfaces participate in Declaration Merging. If two interfaces share the same name in the same scope, the compiler aggregates their field definitions into a unified composite interface. They exist only at compile time and produce zero bytecode.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Interfaces & Shape Contracts Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">interface Repository&lt;T&gt; {\n  findById(id: string): Promise&lt;T | null&gt;;\n  save(entity: T): Promise&lt;void&gt;;\n  delete(id: string): Promise&lt;boolean&gt;;\n}\nconsole.log(\"Repository contract ready for implementation\");</pre></div>\n  "
  },
  {
    id: "type-aliases",
    title: "Type Aliases & Union Combinations",
    badge: "OBJECTS & INTERFACES",
    emoji: "🏷️",
    defaultCode: "// Type Aliases for custom shapes, primitives & functions\ntype ID = string | number;\n\ntype Coordinates = {\n  x: number;\n  y: number;\n  z?: number;\n};\n\ntype ActionCallback<T> = (error: Error | null, payload?: T) => void;\n\nconst point: Coordinates = { x: 10, y: 25 };\nconsole.log(\"Coordinates:\", point);",
    content: "\n    <h3>📌 Deep Dive: Type Aliases & Union Combinations</h3>\n    <p>A Type Alias assigns a symbolic, reusable name to any type specification. Unlike interfaces, type aliases can name primitives, union types, tuple combinations, intersections, and higher-order function signatures.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Type aliases create an entry in the compiler's type symbol table pointing directly to the underlying type expression. Unlike interfaces, type aliases cannot be reopened for declaration merging once declared in a lexical scope.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Type Aliases & Union Combinations Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type JsonPrimitive = string | number | boolean | null;\ntype JsonObject = { [key: string]: JsonValue };\ntype JsonArray = JsonValue[];\ntype JsonValue = JsonPrimitive | JsonObject | JsonArray;\n\nconst payload: JsonValue = { title: \"TypeScript Mastery\", version: 1 };</pre></div>\n  "
  },
  {
    id: "union-types",
    title: "Union Types & Narrowing",
    badge: "BASICS",
    emoji: "🔀",
    defaultCode: "// Working with Union Types\ntype Result<T> =\n  | { status: \"success\"; data: T }\n  | { status: \"error\"; message: string; code: number };\n\nfunction renderResult(res: Result<string[]>) {\n  if (res.status === \"success\") {\n    console.log(\"Items:\", res.data.join(\", \"));\n  } else {\n    console.error(`Failed (${res.code}): ${res.message}`);\n  }\n}\n\nrenderResult({ status: \"success\", data: [\"TS\", \"Rust\", \"React\"] });",
    content: "\n    <h3>📌 Deep Dive: Union Types & Narrowing</h3>\n    <p>Union types (`A | B`) declare that a variable holds a value matching any one of the specified member types. TypeScript evaluates union members as set-theoretic unions, allowing safe access to common properties while requiring type narrowing before accessing member-specific fields.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The Control Flow Analysis (CFA) engine tracks conditional branches (`if`, `switch`, `typeof`, `instanceof`). Within each branch, CFA filters the active type union down to the subtype that satisfied the runtime condition.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Union Types & Narrowing Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type NetworkState = \"idle\" | \"loading\" | \"resolved\" | \"rejected\";\nlet state: NetworkState = \"loading\";\n// state = \"pending\"; // Error: Type '\"pending\"' is not assignable to type 'NetworkState'.</pre></div>\n  "
  },
  {
    id: "intersection-types",
    title: "Intersection Types & Composition",
    badge: "ADVANCED TYPES",
    emoji: "🧬",
    defaultCode: "// Composing domain objects with Intersection Types (&)\ntype Timestamped = {\n  createdAt: Date;\n  updatedAt: Date;\n};\n\ntype Auditable = {\n  createdBy: string;\n  updatedBy: string;\n};\n\ntype Entity<T> = T & Timestamped & Auditable;\n\ninterface BlogPost {\n  id: string;\n  title: string;\n  content: string;\n}\n\nconst post: Entity<BlogPost> = {\n  id: \"p_101\",\n  title: \"Building Scalable Systems\",\n  content: \"Architectural principles...\",\n  createdAt: new Date(),\n  updatedAt: new Date(),\n  createdBy: \"sanskarIN\",\n  updatedBy: \"sanskarIN\"\n};\nconsole.log(post.title);",
    content: "\n    <h3>📌 Deep Dive: Intersection Types & Composition</h3>\n    <p>Intersection types (`A & B`) combine multiple distinct types into a single composite type containing all properties and contracts of each constituent member. They are ideal for mixin architectures, entity enrichment, and orthogonal aspect-oriented models.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When calculating intersections, TypeScript performs property-by-property intersections. If conflicting primitive types meet on the same property (e.g. `{ id: string } & { id: number }`), that property's type collapses to `never`, flagging an impossible structure.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Intersection Types & Composition Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Paginated&lt;T&gt; = {\n  items: T[];\n  totalCount: number;\n  page: number;\n  pageSize: number;\n};\ntype PaginatedUsers = Paginated&lt;{ id: string; name: string }&gt;;</pre></div>\n  "
  },
  {
    id: "literal-types",
    title: "Literal Types & Exact Values",
    badge: "BASICS",
    emoji: "🎯",
    defaultCode: "// Exact string, numeric, and boolean literal types\ntype HttpMethod = \"GET\" | \"POST\" | \"PUT\" | \"DELETE\" | \"PATCH\";\ntype DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;\ntype ToggleState = true | false;\n\nfunction sendRequest(url: string, method: HttpMethod) {\n  console.log(`Sending ${method} request to ${url}`);\n}\n\nsendRequest(\"https://api.langsteps.dev/health\", \"GET\");",
    content: "\n    <h3>📌 Deep Dive: Literal Types & Exact Values</h3>\n    <p>Literal types allow you to specify exact values (strings, numbers, or booleans) as types themselves. Instead of accepting any `string`, a parameter typed as `\"GET\" | \"POST\"` can only receive those exact string constants.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>In TypeScript's type lattice, literal types are bottom subtypes of their respective primitive types. A string literal type `\"GET\"` is a subtype of `string`. When declared with `const`, literal values are preserved without widening.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Literal Types & Exact Values Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const CONFIG = {\n  env: \"production\",\n  maxRetries: 3,\n  region: \"us-east-1\"\n} as const;\n// typeof CONFIG.env is 'production' (not string)</pre></div>\n  "
  },
  {
    id: "enums",
    title: "Enums & Const Enums",
    badge: "BASICS",
    emoji: "🔢",
    defaultCode: "// String Enums and zero-overhead Const Enums\nconst enum HttpStatus {\n  OK = 200,\n  CREATED = 201,\n  BAD_REQUEST = 400,\n  UNAUTHORIZED = 401,\n  NOT_FOUND = 404,\n  INTERNAL_SERVER_ERROR = 500\n}\n\nenum Direction {\n  Up = \"UP\",\n  Down = \"DOWN\",\n  Left = \"LEFT\",\n  Right = \"RIGHT\"\n}\n\nfunction respond(status: HttpStatus) {\n  if (status === HttpStatus.OK) {\n    console.log(\"Request processed successfully.\");\n  }\n}\nrespond(HttpStatus.OK);",
    content: "\n    <h3>📌 Deep Dive: Enums & Const Enums</h3>\n    <p>Enums allow developers to define a set of named constants. TypeScript supports numeric enums (with automatic auto-incrementing and reverse mappings), string enums, and compile-time `const enum` constructs.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Standard enums emit a real JavaScript IIFE object into your build artifact. In contrast, `const enum` definitions are completely inlined into numeric or string literals at every call-site with zero emitted JavaScript overhead.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Enums & Const Enums Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Modern alternative: const object with as const\nexport const LogLevels = {\n  Debug: 0,\n  Info: 1,\n  Warn: 2,\n  Error: 3\n} as const;\nexport type LogLevel = typeof LogLevels[keyof typeof LogLevels];</pre></div>\n  "
  },
  {
    id: "tuples",
    title: "Tuples & Labeled Tuple Elements",
    badge: "DATA STRUCTURES",
    emoji: "📦",
    defaultCode: "// Fixed-length arrays with labeled elements\ntype GeoCoordinate = [latitude: number, longitude: number, altitude?: number];\ntype HttpHeader = [headerName: string, headerValue: string];\ntype KeyValuePair<K, V> = readonly [key: K, value: V];\n\nconst delhi: GeoCoordinate = [28.6139, 77.2090];\nconsole.log(`Coordinates: Lat ${delhi[0]}, Lon ${delhi[1]}`);",
    content: "\n    <h3>📌 Deep Dive: Tuples & Labeled Tuple Elements</h3>\n    <p>Tuples are fixed-length arrays where every index possesses a designated type. Modern TypeScript supports Labeled Tuple Elements (`[lat: number, lon: number]`) providing instant IDE documentation and autocompletion without runtime cost.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Tuples inherit from JavaScript's native `Array.prototype` while TypeScript tracks tuple length and index constraints statically via internal tuple type flags.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Tuples & Labeled Tuple Elements Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function useToggle(initial: boolean): readonly [boolean, () =&gt; void] {\n  let state = initial;\n  const toggle = () =&gt; { state = !state; };\n  return [state, toggle] as const;\n}</pre></div>\n  "
  },
  {
    id: "generics",
    title: "Generics & Parameterized Types",
    badge: "GENERICS",
    emoji: "⚡",
    defaultCode: "// Reusable components and functions with Generics\ninterface ApiResponse<TData> {\n  statusCode: number;\n  message: string;\n  data: TData;\n  timestamp: number;\n}\n\nfunction createApiResponse<T>(data: T, message: string = \"Success\"): ApiResponse<T> {\n  return {\n    statusCode: 200,\n    message,\n    data,\n    timestamp: Date.now()\n  };\n}\n\nconst userResponse = createApiResponse({ id: \"usr_1\", username: \"Sanskar\" });\nconsole.log(userResponse.data.username);",
    content: "\n    <h3>📌 Deep Dive: Generics & Parameterized Types</h3>\n    <p>Generics enable creating reusable components, classes, and functions capable of operating over a variety of types while preserving exact type safety. Instead of discarding types with `any`, generic type parameters (`<T>`) capture the caller's argument types dynamically.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The compiler instantiates generic functions by creating a specialized instance in type space during type checking, verifying that arguments, local variables, and return expressions remain strictly type-sound.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Generics & Parameterized Types Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">class Queue&lt;T&gt; {\n  private items: T[] = [];\n  enqueue(item: T): void { this.items.push(item); }\n  dequeue(): T | undefined { return this.items.shift(); }\n  size(): number { return this.items.length; }\n}</pre></div>\n  "
  },
  {
    id: "generic-constraints",
    title: "Generic Constraints & keyof Extends",
    badge: "GENERICS",
    emoji: "🔒",
    defaultCode: "// Restricting generic types with extends and keyof\ninterface Identifiable {\n  id: string | number;\n}\n\nfunction findById<T extends Identifiable>(items: T[], targetId: string | number): T | undefined {\n  return items.find(item => item.id === targetId);\n}\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { name: \"Sanskar\", role: \"Architect\", xp: 5000 };\nconst role = getProperty(user, \"role\"); // Inferred as string\nconsole.log(\"Role:\", role);",
    content: "\n    <h3>📌 Deep Dive: Generic Constraints & keyof Extends</h3>\n    <p>Generic constraints use the `extends` clause to enforce that a generic type parameter must inherit from or conform to a designated structural contract. Combining generic constraints with `keyof` yields type-safe property lookups.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The type checker evaluates constraint bounds using structural subtyping rules. If an invalid key is supplied, the compiler refuses to compile, preventing runtime `undefined` property bugs.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Generic Constraints & keyof Extends Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function pluck&lt;T, K extends keyof T&gt;(items: T[], key: K): T[K][] {\n  return items.map(item =&gt; item[key]);\n}\nconst names = pluck([{ name: \"Sanskar\" }, { name: \"Aditi\" }], \"name\");</pre></div>\n  "
  },
  {
    id: "utility-types-partial-required-readonly",
    title: "Utility Types: Partial, Required & Readonly",
    badge: "UTILITY TYPES",
    emoji: "🛠️",
    defaultCode: "// Transforming object contracts with standard utilities\ninterface UserSettings {\n  theme: string;\n  fontSize: number;\n  notifications: boolean;\n  betaFeatures?: boolean;\n}\n\n// Update payload where all fields are optional\ntype UpdateSettingsDto = Partial<UserSettings>;\n\n// Guaranteeing every single property is defined\ntype ValidatedSettings = Required<UserSettings>;\n\n// Preventing accidental property mutations\ntype ImmutableSettings = Readonly<UserSettings>;\n\nconst updates: UpdateSettingsDto = { theme: \"cyberpunk\" };\nconsole.log(\"Settings patch:\", updates);",
    content: "\n    <h3>📌 Deep Dive: Utility Types: Partial, Required & Readonly</h3>\n    <p>TypeScript provides global utility types to manipulate type shapes without manual duplication. `Partial<T>` marks all properties as optional; `Required<T>` removes optionality; and `Readonly<T>` prevents property reassignment.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>These utilities are defined in TypeScript's standard library (`lib.es5.d.ts`) using mapped types with homomorphic modifiers: `type Partial<T> = { [P in keyof T]?: T[P]; }` and `type Required<T> = { [P in keyof T]-?: T[P]; }`.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Utility Types: Partial, Required & Readonly Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function updateProfile(id: string, fields: Partial&lt;UserSettings&gt;): void {\n  console.log(`Updating user ${id} with`, fields);\n}</pre></div>\n  "
  },
  {
    id: "utility-types-pick-omit-record",
    title: "Utility Types: Pick, Omit & Record",
    badge: "UTILITY TYPES",
    emoji: "✂️",
    defaultCode: "// Selecting, excluding, and mapping dictionary keys\ninterface DatabaseUser {\n  id: string;\n  name: string;\n  email: string;\n  passwordHash: string;\n  createdAt: Date;\n}\n\n// Pick only public fields\ntype PublicUser = Pick<DatabaseUser, \"id\" | \"name\" | \"email\">;\n\n// Omit private/sensitive fields\ntype SanitizedUser = Omit<DatabaseUser, \"passwordHash\">;\n\n// Typed dictionary mapping strings to users\ntype UserDirectory = Record<string, SanitizedUser>;\n\nconst directory: UserDirectory = {\n  usr_1: { id: \"usr_1\", name: \"Sanskar\", email: \"sanskarin@outlook.in\", createdAt: new Date() }\n};\nconsole.log(directory);",
    content: "\n    <h3>📌 Deep Dive: Utility Types: Pick, Omit & Record</h3>\n    <p>`Pick<T, K>` constructs a type by picking a subset of keys `K` from `T`. `Omit<T, K>` constructs a type by picking all keys from `T` except those specified in `K`. `Record<K, T>` creates a dictionary type mapping keys `K` to values `T`.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`Omit<T, K>` is implemented as `Pick<T, Exclude<keyof T, K>>`. `Record<K, T>` is implemented as `{ [P in K]: T }` where `K extends keyof any`.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Utility Types: Pick, Omit & Record Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Role = \"admin\" | \"editor\" | \"viewer\";\ntype RolePermissions = Record&lt;Role, string[]&gt;;\nconst permissions: RolePermissions = {\n  admin: [\"create\", \"read\", \"update\", \"delete\"],\n  editor: [\"create\", \"read\", \"update\"],\n  viewer: [\"read\"]\n};</pre></div>\n  "
  },
  {
    id: "conditional-types",
    title: "Conditional Types (T extends U ? X : Y)",
    badge: "ADVANCED TYPES",
    emoji: "⚖️",
    defaultCode: "// Dynamic type branching with Conditional Types\ntype IsString<T> = T extends string ? \"yes\" : \"no\";\ntype StringCheck = IsString<\"hello\">; // \"yes\"\ntype NumberCheck = IsString<42>;      // \"no\"\n\n// Removing null and undefined\ntype NonNullableType<T> = T extends null | undefined ? never : T;\ntype Clean = NonNullableType<string | null | undefined>; // string\n\nconsole.log(\"Conditional types evaluated at compile time.\");",
    content: "\n    <h3>📌 Deep Dive: Conditional Types (T extends U ? X : Y)</h3>\n    <p>Conditional types express non-uniform type mappings based on a relationship check (`T extends U ? X : Y`). They mirror JavaScript's ternary operator directly in the type system, enabling sophisticated polymorphic types.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When evaluated on bare type parameters, conditional types distribute over union types. For example, `NonNullable<string | null>` distributes to `(string extends null ? never : string) | (null extends null ? never : null)`, which reduces to `string | never` = `string`.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Conditional Types (T extends U ? X : Y) Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Flatten&lt;T&gt; = T extends any[] ? T[number] : T;\ntype Str = Flatten&lt;string[]&gt;; // string\ntype Num = Flatten&lt;number&gt;;   // number</pre></div>\n  "
  },
  {
    id: "mapped-types",
    title: "Mapped Types & Key Remapping",
    badge: "ADVANCED TYPES",
    emoji: "🗺️",
    defaultCode: "// Transforming property names and types with Mapped Types\ninterface UserState {\n  name: string;\n  age: number;\n  online: boolean;\n}\n\n// Create getter methods for every field\ntype Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ntype UserStateGetters = Getters<UserState>;\n// Has: getName: () => string; getAge: () => number; getOnline: () => boolean;\nconsole.log(\"Mapped types generated cleanly.\");",
    content: "\n    <h3>📌 Deep Dive: Mapped Types & Key Remapping</h3>\n    <p>Mapped types allow you to build new types based on existing types by iterating through keys using the `[K in keyof T]` syntax. Key remapping with `as` permits altering, prefixing, or filtering property keys using template literals.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>During compilation, the type checker expands mapped types into concrete object shapes, applying modifiers (`+readonly`, `-readonly`, `+?`, `-?`) according to specification.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Mapped Types & Key Remapping Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Nullable&lt;T&gt; = { [P in keyof T]: T[P] | null };\ntype NullableUser = Nullable&lt;{ id: string; name: string }&gt;;</pre></div>\n  "
  },
  {
    id: "template-literal-types",
    title: "Template Literal Types",
    badge: "ADVANCED TYPES",
    emoji: "📝",
    defaultCode: "// String pattern types using Template Literals\ntype Entity = \"user\" | \"order\" | \"invoice\";\ntype Action = \"created\" | \"updated\" | \"deleted\";\n\ntype DomainEvent = `${Entity}.${Action}`;\n// \"user.created\" | \"user.updated\" | ... | \"invoice.deleted\"\n\ntype CssUnit = \"px\" | \"rem\" | \"em\" | \"%\";\ntype Dimension = `${number}${CssUnit}`;\n\nconst padding: Dimension = \"16px\";\nconsole.log(\"Dimension:\", padding);",
    content: "\n    <h3>📌 Deep Dive: Template Literal Types</h3>\n    <p>Template literal types build on string literal types, allowing developers to generate combinations of string patterns using familiar ECMAScript template literal syntax at the type level.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript evaluates template literal types by computing the Cartesian product of participating unions, enabling powerful string validation without regular expressions.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Template Literal Types Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type HttpEndpoint = `/api/${\"v1\" | \"v2\"}/${string}`;\nconst endpoint: HttpEndpoint = \"/api/v1/users\";</pre></div>\n  "
  },
  {
    id: "type-guards",
    title: "Type Guards & Custom Predicates (is)",
    badge: "FUNCTIONS",
    emoji: "🛡️",
    defaultCode: "// Custom Type Predicates with 'is'\ninterface Admin {\n  id: string;\n  name: string;\n  permissions: string[];\n}\n\ninterface Guest {\n  id: string;\n  anonymous: true;\n}\n\ntype Account = Admin | Guest;\n\nfunction isAdmin(account: Account): account is Admin {\n  return \"permissions\" in account && Array.isArray((account as Admin).permissions);\n}\n\nfunction authorize(acc: Account) {\n  if (isAdmin(acc)) {\n    console.log(\"Admin permissions:\", acc.permissions.join(\", \"));\n  } else {\n    console.log(\"Guest access granted.\");\n  }\n}",
    content: "\n    <h3>📌 Deep Dive: Type Guards & Custom Predicates (is)</h3>\n    <p>Type guards are expressions that perform a runtime check and inform TypeScript's compiler of an exact narrowed type via the `param is Type` syntax.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When the compiler encounters a function call whose return type is a type predicate (`arg is T`), it binds that assumption to the `true` execution branch of any conditional evaluating the function.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Type Guards & Custom Predicates (is) Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function isString(val: unknown): val is string {\n  return typeof val === \"string\";\n}\nconst input: unknown = \"TypeScript\";\nif (isString(input)) {\n  console.log(input.toUpperCase());\n}</pre></div>\n  "
  },
  {
    id: "discriminated-unions",
    title: "Discriminated Unions & Exhaustiveness",
    badge: "ADVANCED TYPES",
    emoji: "🎭",
    defaultCode: "// Pattern matching with Discriminated Unions and Exhaustiveness\ntype Shape =\n  | { kind: \"circle\"; radius: number }\n  | { kind: \"square\"; size: number }\n  | { kind: \"rectangle\"; width: number; height: number };\n\nfunction calculateArea(s: Shape): number {\n  switch (s.kind) {\n    case \"circle\":\n      return Math.PI * s.radius ** 2;\n    case \"square\":\n      return s.size * s.size;\n    case \"rectangle\":\n      return s.width * s.height;\n    default:\n      const _exhaustiveCheck: never = s;\n      return _exhaustiveCheck;\n  }\n}\nconsole.log(\"Circle area:\", calculateArea({ kind: \"circle\", radius: 5 }));",
    content: "\n    <h3>📌 Deep Dive: Discriminated Unions & Exhaustiveness</h3>\n    <p>A Discriminated Union is a union where each variant possesses a common singleton property (discriminant, such as `kind` or `type`). TypeScript uses this discriminant to narrow down the union safely in switch or if statements.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The `assertNever` pattern (assigning the remaining value to `never`) triggers a compiler error if you add a new variant to the union without updating every single handling switch block.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Discriminated Unions & Exhaustiveness Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function assertNever(x: never): never {\n  throw new Error(\"Unhandled union member: \" + JSON.stringify(x));\n}</pre></div>\n  "
  },
  {
    id: "type-assertions",
    title: "Type Assertions & Non-Null Assertion",
    badge: "BASICS",
    emoji: "📢",
    defaultCode: "// Type Assertions (as) and Non-Null Assertions (!)\nconst el = document.getElementById(\"main-app\") as HTMLDivElement | null;\n\nif (el) {\n  el.style.backgroundColor = \"#0a0a1a\";\n}\n\n// Non-null assertion when you are 100% certain\nconst input = document.querySelector<HTMLInputElement>(\"#sbSearch\")!;\nconsole.log(\"Search input initialized:\", input.tagName);",
    content: "\n    <h3>📌 Deep Dive: Type Assertions & Non-Null Assertion</h3>\n    <p>Type assertions (`as TargetType`) tell the TypeScript compiler: 'trust me, I know the runtime type of this value better than you do.' It performs no runtime checks, coercion, or type conversion.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Type assertions are stripped during compilation. The compiler only permits assertions if the source and target types overlap in the type hierarchy.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Type Assertions & Non-Null Assertion Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const rawData: unknown = '{\"name\":\"Sanskar\"}';\nconst parsed = JSON.parse(rawData as string) as { name: string };\nconsole.log(parsed.name);</pre></div>\n  "
  },
  {
    id: "declaration-files-dts",
    title: "Declaration Files (.d.ts) & Ambient Declarations",
    badge: "SYSTEM & TOOLING",
    emoji: "📜",
    defaultCode: "// Ambient declarations in .d.ts files\ndeclare module \"*.png\" {\n  const content: string;\n  export default content;\n}\n\ndeclare const __VERSION__: string;\ndeclare const __API_BASE__: string;\n\nconsole.log(\"Declaration files provide type information without executable code.\");",
    content: "\n    <h3>📌 Deep Dive: Declaration Files (.d.ts) & Ambient Declarations</h3>\n    <p>Declaration files (`.d.ts`) contain pure type declarations and metadata describing JavaScript code without containing any executable runtime code. They power DefinitelyTyped (`@types/*`) and IDE IntelliSense.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The TypeScript compiler checks `.d.ts` files solely for type signatures. During build, `tsc -d` automatically generates `.d.ts` files alongside compiled `.js` files.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Declaration Files (.d.ts) & Ambient Declarations Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// global.d.ts\ndeclare global {\n  interface Window {\n    analyticsProvider: { track(event: string): void };\n  }\n}</pre></div>\n  "
  },
  {
    id: "namespaces-and-modules",
    title: "Namespaces vs ES Modules",
    badge: "SYSTEM & TOOLING",
    emoji: "📦",
    defaultCode: "// Modern ES Module Syntax (Recommended)\nexport interface Logger {\n  log(msg: string): void;\n  error(msg: string): void;\n}\n\nexport class ConsoleLogger implements Logger {\n  log(msg: string) { console.log(`[INFO] ${msg}`); }\n  error(msg: string) { console.error(`[ERR] ${msg}`); }\n}\n\nconst logger = new ConsoleLogger();\nlogger.log(\"LangSteps TypeScript Module Active\");",
    content: "\n    <h3>📌 Deep Dive: Namespaces vs ES Modules</h3>\n    <p>While TypeScript introduced `namespace` early on for global script bundling, modern standards mandate standard ECMAScript Modules (`import` and `export`) for all production applications.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Namespaces compile into JavaScript IIFEs attaching properties to global objects. ES modules compile to native ESM or CommonJS `require()`, allowing bundlers like Vite, Rollup, and Webpack to perform tree-shaking.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Namespaces vs ES Modules Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">import { readFile } from \"fs/promises\";\nexport async function readConfig(path: string) {\n  return await readFile(path, \"utf-8\");\n}</pre></div>\n  "
  },
  {
    id: "decorators",
    title: "Decorators (Stage 3 & Experimental)",
    badge: "ADVANCED TYPES",
    emoji: "✨",
    defaultCode: "// ECMAScript Stage 3 Decorators (TS 5.0+)\nfunction logged<This, Args extends any[], Return>(\n  target: (this: This, ...args: Args) => Return,\n  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>\n) {\n  const methodName = String(context.name);\n  return function (this: This, ...args: Args): Return {\n    console.log(`Entering ${methodName} with args:`, args);\n    const result = target.call(this, ...args);\n    console.log(`Exited ${methodName} with result:`, result);\n    return result;\n  };\n}\n\nclass Calculator {\n  @logged\n  add(a: number, b: number): number {\n    return a + b;\n  }\n}\nconst calc = new Calculator();\ncalc.add(10, 20);",
    content: "\n    <h3>📌 Deep Dive: Decorators (Stage 3 & Experimental)</h3>\n    <p>Decorators are functions that annotate or modify classes, methods, accessors, and fields. TypeScript 5.0 introduced full support for the official TC39 Stage 3 Decorators standard with full type safety.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Stage 3 decorators execute at class evaluation time, wrapping methods or fields and receiving a strongly-typed `ClassMethodDecoratorContext` containing metadata.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Decorators (Stage 3 & Experimental) Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function frozen(constructor: Function) {\n  Object.freeze(constructor);\n  Object.freeze(constructor.prototype);\n}</pre></div>\n  "
  },
  {
    id: "abstract-classes",
    title: "Abstract Classes & Polymorphism",
    badge: "OBJECTS & INTERFACES",
    emoji: "🏛️",
    defaultCode: "// Abstract Classes providing base implementations\nabstract class PaymentGateway {\n  abstract readonly providerName: string;\n  abstract processPayment(amount: number, currency: string): Promise<boolean>;\n\n  formatCurrency(amount: number, currency: string): string {\n    return `${currency} ${amount.toFixed(2)}`;\n  }\n}\n\nclass RazorpayGateway extends PaymentGateway {\n  readonly providerName = \"Razorpay\";\n  async processPayment(amount: number, currency: string): Promise<boolean> {\n    console.log(`Processing ${this.formatCurrency(amount, currency)} via Razorpay`);\n    return true;\n  }\n}\n\nconst gateway = new RazorpayGateway();\ngateway.processPayment(500, \"INR\");",
    content: "\n    <h3>📌 Deep Dive: Abstract Classes & Polymorphism</h3>\n    <p>Abstract classes serve as base blueprints that cannot be directly instantiated. They allow you to define both abstract signatures (must be implemented by subclasses) and concrete shared implementations.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Unlike interfaces (erased at runtime), abstract classes compile into standard JavaScript class constructors. Subclasses use prototype inheritance (`extends`) at runtime.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Abstract Classes & Polymorphism Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">abstract class BaseModel {\n  readonly id: string = crypto.randomUUID();\n  abstract serialize(): string;\n}</pre></div>\n  "
  },
  {
    id: "access-modifiers",
    title: "Access Modifiers: public, private, protected & #",
    badge: "OBJECTS & INTERFACES",
    emoji: "🔐",
    defaultCode: "// Access control in classes\nclass BankAccount {\n  public readonly accountNumber: string;\n  protected balance: number;\n  #secretPin: string; // ECMAScript Hard Private Field\n\n  constructor(acc: string, initialBalance: number, pin: string) {\n    this.accountNumber = acc;\n    this.balance = initialBalance;\n    this.#secretPin = pin;\n  }\n\n  public deposit(amount: number): void {\n    if (amount > 0) this.balance += amount;\n  }\n\n  public getBalance(pin: string): number | null {\n    return pin === this.#secretPin ? this.balance : null;\n  }\n}\n\nconst account = new BankAccount(\"ACC-9021\", 5000, \"4092\");\nconsole.log(\"Account:\", account.accountNumber);",
    content: "\n    <h3>📌 Deep Dive: Access Modifiers: public, private, protected & #</h3>\n    <p>TypeScript provides `public`, `private`, and `protected` access modifiers to control visibility. In addition, standard ECMAScript `#` private fields enforce hard runtime encapsulation.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`public`, `private`, and `protected` are purely compile-time checks. They are erased from JavaScript output. In contrast, `#field` syntax is enforced natively by JavaScript engines using private brand identifiers.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Access Modifiers: public, private, protected & # Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">class Cache {\n  #storage = new Map&lt;string, any&gt;();\n  get(k: string) { return this.#storage.get(k); }\n  set(k: string, v: any) { this.#storage.set(k, v); }\n}</pre></div>\n  "
  },
  {
    id: "readonly-and-const-assertions",
    title: "Readonly Properties & as const Assertions",
    badge: "ADVANCED TYPES",
    emoji: "🧊",
    defaultCode: "// Immutable data structures with as const\nconst ROUTES = {\n  HOME: \"/\",\n  ABOUT: \"/about\",\n  BLOG: \"/blog\",\n  PROJECTS: \"/projects\"\n} as const;\n\ntype AppRoute = typeof ROUTES[keyof typeof ROUTES];\n// '/' | '/about' | '/blog' | '/projects'\n\nfunction navigateTo(route: AppRoute) {\n  console.log(\"Navigating to:\", route);\n}\n\nnavigateTo(ROUTES.ABOUT);",
    content: "\n    <h3>📌 Deep Dive: Readonly Properties & as const Assertions</h3>\n    <p>The `readonly` keyword prevents reassignment of object properties and array elements. Const assertions (`as const`) inform the compiler to infer deeply readonly literal types for objects and arrays rather than widening.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`as const` removes type widening from literal expressions, marks all object properties as `readonly`, and converts array literals into fixed readonly tuples.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Readonly Properties & as const Assertions Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const SUPPORTED_LOCALES = [\"en-US\", \"hi-IN\", \"es-ES\"] as const;\ntype SupportedLocale = typeof SUPPORTED_LOCALES[number];</pre></div>\n  "
  },
  {
    id: "index-signatures",
    title: "Index Signatures & Dynamic Keys",
    badge: "OBJECTS & INTERFACES",
    emoji: "🔑",
    defaultCode: "// Index signatures for dynamic dictionaries\ninterface MetricCache {\n  [metricName: string]: number;\n}\n\nconst metrics: MetricCache = {\n  cpu_usage: 42.5,\n  memory_mb: 2048,\n  active_requests: 120\n};\n\nmetrics[\"error_count\"] = 0;\nconsole.log(\"CPU:\", metrics[\"cpu_usage\"]);",
    content: "\n    <h3>📌 Deep Dive: Index Signatures & Dynamic Keys</h3>\n    <p>Index signatures describe types for objects where property keys are dynamic or not known in advance, mapping keys of type `string`, `number`, or `symbol` to a uniform value type.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>When indexing with a string, JavaScript converts numbers to strings (`obj[1]` -> `obj['1']`). Therefore, numeric index signatures must return a subtype of string index signatures.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Index Signatures & Dynamic Keys Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type SafeDictionary&lt;T&gt; = Record&lt;string, T | undefined&gt;;\nconst store: SafeDictionary&lt;string&gt; = { host: \"localhost\" };\n// store.host is string | undefined</pre></div>\n  "
  },
  {
    id: "function-overloads",
    title: "Function Overloads",
    badge: "FUNCTIONS",
    emoji: "🔁",
    defaultCode: "// Multiple call signatures with a single implementation\nfunction formatPayload(data: string): string;\nfunction formatPayload(data: number, radix: number): string;\nfunction formatPayload(data: object): string;\nfunction formatPayload(data: any, radix?: number): string {\n  if (typeof data === \"string\") return data.trim();\n  if (typeof data === \"number\") return data.toString(radix || 10);\n  return JSON.stringify(data);\n}\n\nconsole.log(formatPayload(\"  LangSteps  \"));\nconsole.log(formatPayload(255, 16));\nconsole.log(formatPayload({ ok: true }));",
    content: "\n    <h3>📌 Deep Dive: Function Overloads</h3>\n    <p>Function overloads permit declaring multiple function signatures representing different argument combinations and return types, followed by a single concrete implementation signature.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Only the overload signatures are visible to external callers. The implementation signature is invisible externally and must be broad enough to accommodate all declared overloads.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Function Overloads Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function makeDate(timestamp: number): Date;\nfunction makeDate(year: number, month: number, day: number): Date;\nfunction makeDate(yOrTimestamp: number, m?: number, d?: number): Date {\n  if (m !== undefined &amp;&amp; d !== undefined) return new Date(yOrTimestamp, m, d);\n  return new Date(yOrTimestamp);\n}</pre></div>\n  "
  },
  {
    id: "infer-keyword",
    title: "The infer Keyword in Conditional Types",
    badge: "ADVANCED TYPES",
    emoji: "🧠",
    defaultCode: "// Extracting nested types with 'infer'\ntype UnpackPromise<T> = T extends Promise<infer U> ? U : T;\ntype ResolvedString = UnpackPromise<Promise<string>>; // string\n\ntype FirstElement<T> = T extends [infer First, ...any[]] ? First : never;\ntype Head = FirstElement<[number, string, boolean]>; // number\n\nconsole.log(\"infer enables advanced type extraction.\");",
    content: "\n    <h3>📌 Deep Dive: The infer Keyword in Conditional Types</h3>\n    <p>The `infer` keyword introduces a pattern-matched type variable within the `extends` clause of a conditional type. TypeScript deduces the inner type automatically from whatever expression satisfies the condition.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The compiler matches AST type structures and binds the matching node to the variable introduced by `infer`. If the condition fails, the branch collapses to the alternative clause.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 The infer Keyword in Conditional Types Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type ElementOf&lt;T&gt; = T extends (infer E)[] ? E : T;\ntype Num = ElementOf&lt;number[]&gt;; // number</pre></div>\n  "
  },
  {
    id: "satisfies-operator",
    title: "The satisfies Operator (TS 4.9+)",
    badge: "ADVANCED TYPES",
    emoji: "✅",
    defaultCode: "// Validate conformance while preserving exact inferred types\ntype RGB = [red: number, green: number, blue: number];\ntype Color = string | RGB;\n\nconst palette = {\n  red: [255, 0, 0],\n  green: \"#00ff00\",\n  blue: [0, 0, 255]\n} satisfies Record<string, Color>;\n\n// We can safely call string methods on green!\nconsole.log(palette.green.toUpperCase());\n// And array methods on red!\nconsole.log(palette.red.map(c => c / 255));",
    content: "\n    <h3>📌 Deep Dive: The satisfies Operator (TS 4.9+)</h3>\n    <p>Introduced in TypeScript 4.9, the `satisfies` operator validates that an expression conforms to a given type without changing or widening the expression's inferred literal type.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Unlike type annotations (`const x: Type = ...`), `satisfies` does not coerce the variable to `Type`. It retains specific member types, preserving autocomplete and method availability.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 The satisfies Operator (TS 4.9+) Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const config = {\n  endpoint: \"https://api.langsteps.dev\",\n  timeout: 5000\n} satisfies Record&lt;string, string | number&gt;;\n// config.endpoint is string, config.timeout is number</pre></div>\n  "
  },
  {
    id: "tsconfigjson",
    title: "tsconfig.json Compiler Mastery",
    badge: "SYSTEM & TOOLING",
    emoji: "⚙️",
    defaultCode: "// Production-Grade tsconfig.json\n/*\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"NodeNext\",\n    \"moduleResolution\": \"NodeNext\",\n    \"strict\": true,\n    \"skipLibCheck\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"exactOptionalPropertyTypes\": true,\n    \"forceConsistentCasingInFileNames\": true\n  }\n}\n*/\nconsole.log(\"tsconfig.json controls compiler flags and strictness.\");",
    content: "\n    <h3>📌 Deep Dive: tsconfig.json Compiler Mastery</h3>\n    <p>The `tsconfig.json` file configures the root directory, compiler flags, module systems, source maps, output targets, and strictness checks for any TypeScript project.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The `tsc` executable and the TypeScript Language Server (TSServer in VS Code / IDEs) parse `tsconfig.json` to configure the AST analysis pipeline.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 tsconfig.json Compiler Mastery Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Run compiler diagnostics\n// tsc --noEmit --extendedDiagnostics</pre></div>\n  "
  },
  {
    id: "typescript-with-react",
    title: "TypeScript with React",
    badge: "FRAMEWORKS",
    emoji: "⚛️",
    defaultCode: "// Strongly typed React Components and Props\nimport React, { useState } from \"react\";\n\ninterface ButtonProps {\n  label: string;\n  variant?: \"primary\" | \"secondary\" | \"danger\";\n  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;\n  children?: React.ReactNode;\n}\n\nexport const Button: React.FC<ButtonProps> = ({ label, variant = \"primary\", onClick, children }) => {\n  return (\n    <button className={`btn btn-${variant}`} onClick={onClick}>\n      {label} {children}\n    </button>\n  );\n};\nconsole.log(\"React + TypeScript Component defined\");",
    content: "\n    <h3>📌 Deep Dive: TypeScript with React</h3>\n    <p>Using TypeScript with React ensures that component props, state hooks, context providers, and DOM event handlers are fully type-safe, preventing silent runtime bugs.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>React JSX tags are parsed by TypeScript's JSX transform, verifying component prop types against `JSX.IntrinsicElements` and custom component prop interfaces.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 TypeScript with React Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Typing useState\nconst [user, setUser] = useState&lt;{ id: string; name: string } | null&gt;(null);</pre></div>\n  "
  },
  {
    id: "typescript-with-node",
    title: "TypeScript with Node.js & Express",
    badge: "FRAMEWORKS",
    emoji: "🟢",
    defaultCode: "// Type-safe Node.js & Express Server\nimport express, { Request, Response } from \"express\";\n\nconst app = express();\napp.use(express.json());\n\ninterface UserParams {\n  userId: string;\n}\n\ninterface UserResponse {\n  id: string;\n  name: string;\n  role: string;\n}\n\napp.get(\"/api/users/:userId\", (req: Request<UserParams>, res: Response<UserResponse>) => {\n  res.json({\n    id: req.params.userId,\n    name: \"Sanskar\",\n    role: \"Architect\"\n  });\n});\nconsole.log(\"Express TypeScript route configured\");",
    content: "\n    <h3>📌 Deep Dive: TypeScript with Node.js & Express</h3>\n    <p>Using TypeScript with Node.js and frameworks like Express, Fastify, or NestJS brings compile-time safety to HTTP route handlers, middleware pipelines, and database queries.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`@types/node` and `@types/express` declare ambient type definitions for Node built-ins (`fs`, `path`, `http`, `crypto`) and Express HTTP request/response lifecycles.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 TypeScript with Node.js & Express Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Strong typing query parameters\ninterface SearchQuery { q: string; limit?: string; }\napp.get('/search', (req: Request&lt;{}, {}, {}, SearchQuery&gt;, res: Response) =&gt; {\n  console.log(req.query.q);\n});</pre></div>\n  "
  },
  {
    id: "strict-mode",
    title: "Strict Mode Flags & Soundness",
    badge: "SYSTEM & TOOLING",
    emoji: "🚨",
    defaultCode: "// Strict mode guards against null/undefined and implicit any\n// tsconfig: { \"strict\": true }\n\nfunction findUser(id: string): { name: string } | undefined {\n  return id === \"1\" ? { name: \"Sanskar\" } : undefined;\n}\n\nconst user = findUser(\"2\");\n// user.name; // Compile error: Object is possibly 'undefined'.\nif (user) {\n  console.log(\"User found:\", user.name);\n}",
    content: "\n    <h3>📌 Deep Dive: Strict Mode Flags & Soundness</h3>\n    <p>Enabling `\"strict\": true` activates a comprehensive suite of safety checks: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, and `useUnknownInCatchVariables`.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`strictNullChecks` treats `null` and `undefined` as distinct domain types rather than subtypes of every other type, eliminating 'cannot read property of undefined' errors.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Strict Mode Flags & Soundness Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">try {\n  throw new Error(\"Failed\");\n} catch (err) {\n  // In strict mode, err is 'unknown', not 'any'\n  if (err instanceof Error) console.error(err.message);\n}</pre></div>\n  "
  },
  {
    id: "type-narrowing-cfa",
    title: "Type Narrowing & Control Flow Analysis",
    badge: "FUNCTIONS",
    emoji: "🔎",
    defaultCode: "// Control Flow Analysis (CFA) narrowing down types\nfunction processValue(val: string | number | Date | null) {\n  if (val === null) return \"Empty\";\n  \n  if (val instanceof Date) {\n    return `Date: ${val.toISOString()}`;\n  }\n  \n  if (typeof val === \"number\") {\n    return `Formatted: ${val.toFixed(2)}`;\n  }\n  \n  return `String: ${val.toUpperCase()}`;\n}\n\nconsole.log(processValue(new Date()));\nconsole.log(processValue(42));",
    content: "\n    <h3>📌 Deep Dive: Type Narrowing & Control Flow Analysis</h3>\n    <p>Type narrowing is the process of refining a broad type into a more specific subtype through conditional runtime checks. TypeScript's Control Flow Analyzer evaluates execution paths to track narrowed types automatically.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The compiler constructs an execution flow graph with nodes for assignments, conditions, jumps, and returns. It computes reachability and prunes impossible type unions in real time.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Type Narrowing & Control Flow Analysis Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Fish = { swim: () =&gt; void };\ntype Bird = { fly: () =&gt; void };\nfunction move(animal: Fish | Bird) {\n  if ('swim' in animal) animal.swim();\n  else animal.fly();\n}</pre></div>\n  "
  },
  {
    id: "keyof-typeof-operators",
    title: "keyof & typeof Type Operators",
    badge: "ADVANCED TYPES",
    emoji: "🔑",
    defaultCode: "// Extracting types directly from JavaScript objects\nconst APP_THEMES = {\n  midnight: \"#0a0a1a\",\n  clean: \"#f0f0f8\",\n  cyber: \"#0b0c10\"\n};\n\ntype AppThemes = typeof APP_THEMES;\ntype ThemeName = keyof AppThemes; // 'midnight' | 'clean' | 'cyber'\n\nfunction applyTheme(name: ThemeName) {\n  const color = APP_THEMES[name];\n  console.log(`Applying ${name} theme (${color})`);\n}\n\napplyTheme(\"midnight\");",
    content: "\n    <h3>📌 Deep Dive: keyof & typeof Type Operators</h3>\n    <p>The `typeof` type operator references the TypeScript type of an existing JavaScript runtime value. The `keyof` operator extracts a union of an object type's property names.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>In type space, `typeof x` inspects the compiler symbol table without executing code. Pairing `keyof typeof` enables single-source-of-truth architectures where types are derived automatically from source data.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 keyof & typeof Type Operators Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const ENDPOINTS = { USERS: \"/api/users\", POSTS: \"/api/posts\" } as const;\ntype EndpointName = keyof typeof ENDPOINTS;</pre></div>\n  "
  },
  {
    id: "returntype-parameters-utilities",
    title: "ReturnType & Parameters Utilities",
    badge: "UTILITY TYPES",
    emoji: "📐",
    defaultCode: "// Inspecting function signatures programmatically\nfunction registerUser(name: string, email: string, isAdmin: boolean = false) {\n  return {\n    id: crypto.randomUUID(),\n    name,\n    email,\n    isAdmin,\n    registeredAt: new Date()\n  };\n}\n\ntype UserRecord = ReturnType<typeof registerUser>;\ntype RegisterArgs = Parameters<typeof registerUser>; // [string, string, boolean?]\n\nconst newUser: UserRecord = registerUser(\"Sanskar\", \"sanskarin@outlook.in\", true);\nconsole.log(\"Registered:\", newUser.name);",
    content: "\n    <h3>📌 Deep Dive: ReturnType & Parameters Utilities</h3>\n    <p>`ReturnType<T>` extracts the return type of a function type. `Parameters<T>` extracts a tuple of its parameter types. Both utilities are invaluable when wrapping external library functions whose types are not directly exported.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Both utilities are built using conditional types with `infer`: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 ReturnType & Parameters Utilities Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type Handler = (req: Request, res: Response) =&gt; Promise&lt;void&gt;;\ntype HandlerParams = Parameters&lt;Handler&gt;;</pre></div>\n  "
  },
  {
    id: "string-manipulation-types",
    title: "Intrinsic String Manipulation Types",
    badge: "ADVANCED TYPES",
    emoji: "🔤",
    defaultCode: "// Intrinsic compiler string operations\ntype Upper = Uppercase<\"langsteps\">; // \"LANGSTEPS\"\ntype Lower = Lowercase<\"MASTER\">;    // \"master\"\ntype Cap = Capitalize<\"sanskar\">;     // \"Sanskar\"\ntype Uncap = Uncapitalize<\"TypeScript\">; // \"typeScript\"\n\ntype EventName = \"click\" | \"hover\" | \"focus\";\ntype EventHandlerName = `on${Capitalize<EventName>}`;\n// \"onClick\" | \"onHover\" | \"onFocus\"\n\nconsole.log(\"String manipulation types generated.\");",
    content: "\n    <h3>📌 Deep Dive: Intrinsic String Manipulation Types</h3>\n    <p>TypeScript provides four built-in string manipulation types: `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, and `Uncapitalize<T>`. They operate directly on string literal types.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>These types are built intrinsically into the TypeScript compiler core, evaluated in C++ for maximum compilation velocity when processing string permutations.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Intrinsic String Manipulation Types Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type PropGetters&lt;T&gt; = {\n  [K in keyof T as `get${Capitalize&lt;string &amp; K&gt;}`]: () =&gt; T[K]\n};</pre></div>\n  "
  },
  {
    id: "symbols-and-unique-symbol",
    title: "Symbols & unique symbol",
    badge: "ADVANCED TYPES",
    emoji: "🔮",
    defaultCode: "// unique symbol creates unforgeable property keys\nconst SymApiKey: unique symbol = Symbol(\"ApiKey\");\nconst SymSecret: unique symbol = Symbol(\"Secret\");\n\ninterface SecureConfig {\n  [SymApiKey]: string;\n  [SymSecret]: string;\n  serviceName: string;\n}\n\nconst config: SecureConfig = {\n  [SymApiKey]: \"key_live_9021\",\n  [SymSecret]: \"sec_998877\",\n  serviceName: \"LangSteps API\"\n};\nconsole.log(\"Secure Service:\", config.serviceName);",
    content: "\n    <h3>📌 Deep Dive: Symbols & unique symbol</h3>\n    <p>A `unique symbol` is a subtype of `symbol` tied to a specific `const` variable. It provides compile-time unforgeability, guaranteeing that only that exact symbol reference can access designated properties.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript tracks unique symbol identity in the type checker. Two separate `Symbol()` invocations can never share the same unique symbol type, even if their descriptions match.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Symbols & unique symbol Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">const BrandSymbol: unique symbol = Symbol(\"Brand\");\nexport type Branded&lt;K, T&gt; = K &amp; { readonly [BrandSymbol]: T };</pre></div>\n  "
  },
  {
    id: "module-augmentation",
    title: "Module Augmentation & Declaration Merging",
    badge: "SYSTEM & TOOLING",
    emoji: "🧩",
    defaultCode: "// Augmenting external library interfaces\n// Extend Express Request object with authenticated user\n/*\ndeclare module \"express-serve-static-core\" {\n  interface Request {\n    currentUser?: {\n      id: string;\n      role: \"admin\" | \"user\";\n    };\n  }\n}\n*/\nconsole.log(\"Module augmentation enables seamless library extension.\");",
    content: "\n    <h3>📌 Deep Dive: Module Augmentation & Declaration Merging</h3>\n    <p>Module augmentation allows developers to inject new properties, methods, and interface definitions into external modules imported from `node_modules` without modifying their source code.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript merges the augmented interface declarations with the library's original `.d.ts` definitions in the global symbol table.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Module Augmentation & Declaration Merging Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">declare module \"http\" {\n  interface IncomingMessage {\n    correlationId: string;\n  }\n}</pre></div>\n  "
  },
  {
    id: "triple-slash-directives",
    title: "Triple-Slash Directives",
    badge: "SYSTEM & TOOLING",
    emoji: "///",
    defaultCode: "// Triple-slash XML comments directing the compiler\n/// <reference path=\"./globals.d.ts\" />\n/// <reference types=\"node\" />\n/// <reference lib=\"es2022\" />\n\nconsole.log(\"Triple-slash directives configure file dependencies.\");",
    content: "\n    <h3>📌 Deep Dive: Triple-Slash Directives</h3>\n    <p>Triple-slash directives are single-line XML comments containing instructions for the TypeScript compiler, instructing it to resolve dependencies, declarations, or standard libraries.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The preprocessor scans the top of files for `/// <reference ... />` before building the dependency tree. If any non-comment code precedes a directive, it is treated as a regular comment.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Triple-Slash Directives Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">/// &lt;reference types=\"vite/client\" /&gt;\n// Grants access to import.meta.env</pre></div>\n  "
  },
  {
    id: "project-references",
    title: "Project References & Composite Builds",
    badge: "SYSTEM & TOOLING",
    emoji: "🏗️",
    defaultCode: "// tsconfig.json with Project References for Monorepos\n/*\n{\n  \"compilerOptions\": {\n    \"composite\": true,\n    \"declaration\": true,\n    \"declarationMap\": true\n  },\n  \"references\": [\n    { \"path\": \"../core\" },\n    { \"path\": \"../utils\" }\n  ]\n}\n*/\nconsole.log(\"Project references enable fast incremental monorepo builds.\");",
    content: "\n    <h3>📌 Deep Dive: Project References & Composite Builds</h3>\n    <p>Project References allow structuring large TypeScript codebases into modular, independently compilable projects. When using `tsc --build` (`tsc -b`), TypeScript builds packages in topological dependency order.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Composite builds emit `.tsbuildinfo` cache files, skipping unchanged dependencies entirely and cutting build times in large enterprise monorepos by up to 80%.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Project References & Composite Builds Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Build all referenced projects incrementally\n// tsc -b --verbose</pre></div>\n  "
  },
  {
    id: "path-mapping",
    title: "Path Mapping & Module Resolution",
    badge: "SYSTEM & TOOLING",
    emoji: "🛤️",
    defaultCode: "// Clean imports without relative path spaghetti\n// tsconfig: { \"compilerOptions\": { \"baseUrl\": \".\", \"paths\": { \"@/*\": [\"src/*\"] } } }\n\n// import { Button } from \"@/components/Button\";\n// import { api } from \"@/services/api\";\n\nconsole.log(\"Path mapping replaces ../../../ with clean aliases.\");",
    content: "\n    <h3>📌 Deep Dive: Path Mapping & Module Resolution</h3>\n    <p>Path mapping allows you to define clean module import aliases (such as `@components/*` or `@utils/*`), eliminating brittle `../../../../` relative paths.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The TypeScript module resolution engine substitutes alias patterns during symbol lookup. Remember to also configure your bundler (Vite, esbuild, Webpack) to resolve matching aliases at runtime.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Path Mapping & Module Resolution Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// tsconfig.json\n// \"paths\": { \"@services/*\": [\"src/services/*\"] }</pre></div>\n  "
  },
  {
    id: "testing-typescript",
    title: "Testing TypeScript with Vitest & Jest",
    badge: "TESTING",
    emoji: "🧪",
    defaultCode: "// Writing type-safe unit tests\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Test suite example:\nconst result = add(2, 3);\nif (result === 5) {\n  console.log(\"PASS: add(2, 3) equals 5\");\n} else {\n  console.error(\"FAIL\");\n}",
    content: "\n    <h3>📌 Deep Dive: Testing TypeScript with Vitest & Jest</h3>\n    <p>Modern test frameworks like Vitest, Jest with `ts-jest`, and node:test execute TypeScript test suites with full type safety and blazing fast HMR.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Vitest leverages Vite's underlying esbuild engine to transform TypeScript code in memory instantaneously without generating disk files.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Testing TypeScript with Vitest & Jest Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// import { expectTypeOf, test } from \"vitest\";\n// test(\"types\", () =&gt; expectTypeOf(add(1, 2)).toBeNumber());</pre></div>\n  "
  },
  {
    id: "compiler-performance",
    title: "Compiler Performance & Optimization",
    badge: "SYSTEM & TOOLING",
    emoji: "⚡",
    defaultCode: "// Measure compilation metrics with extended diagnostics\n// Command: tsc --extendedDiagnostics --noEmit\nconsole.log(\"Analyzing TypeScript compiler performance metrics.\");",
    content: "\n    <h3>📌 Deep Dive: Compiler Performance & Optimization</h3>\n    <p>As TypeScript codebases grow, compiler check times can increase. Understanding compiler diagnostics, AST depth, and type complexity ensures rapid feedback loops and swift IDE responsiveness.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The TypeScript compiler provides `--extendedDiagnostics` and `--generateTrace` flags to measure parse time, bind time, check time, and memory usage per file.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Compiler Performance & Optimization Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">// Run trace visualization\n// tsc --generateTrace ./trace-output</pre></div>\n  "
  },
  {
    id: "migration-js-to-ts",
    title: "Migrating from JavaScript to TypeScript",
    badge: "SYSTEM & TOOLING",
    emoji: "🔄",
    defaultCode: "// Incremental migration strategy\n// Step 1: Add tsconfig.json with \"allowJs\": true\n// Step 2: Enable \"checkJs\": true for JSDoc type checking\n// Step 3: Rename .js files to .ts sequentially\nconsole.log(\"Incremental migration allows safe, continuous shipping.\");",
    content: "\n    <h3>📌 Deep Dive: Migrating from JavaScript to TypeScript</h3>\n    <p>Because TypeScript is a strict superset of JavaScript, every valid `.js` file is already valid TypeScript syntax. Incremental migration allows teams to convert files step by step without halting feature development.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>With `\"allowJs\": true`, the TypeScript compiler parses and emits both JavaScript and TypeScript files in the same compilation program.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Migrating from JavaScript to TypeScript Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">/**\n * @param {number} x\n * @param {number} y\n * @returns {number}\n */\nfunction multiply(x, y) { return x * y; }</pre></div>\n  "
  },
  {
    id: "builder-pattern",
    title: "Generic Builder & Fluent API Patterns",
    badge: "DESIGN PATTERNS",
    emoji: "🏗️",
    defaultCode: "// Type-safe fluent builder pattern\ninterface RequestConfig {\n  url: string;\n  method: \"GET\" | \"POST\";\n  headers: Record<string, string>;\n  timeout: number;\n}\n\nclass RequestBuilder {\n  private config: Partial<RequestConfig> = { headers: {} };\n\n  setUrl(url: string): this {\n    this.config.url = url;\n    return this;\n  }\n\n  setMethod(method: \"GET\" | \"POST\"): this {\n    this.config.method = method;\n    return this;\n  }\n\n  build(): RequestConfig {\n    if (!this.config.url) throw new Error(\"URL is required\");\n    return this.config as RequestConfig;\n  }\n}\n\nconst req = new RequestBuilder()\n  .setUrl(\"https://api.langsteps.dev\")\n  .setMethod(\"POST\")\n  .build();\nconsole.log(\"Request built:\", req);",
    content: "\n    <h3>📌 Deep Dive: Generic Builder & Fluent API Patterns</h3>\n    <p>The Builder Pattern constructs complex objects step by step. Using TypeScript's `this` return type enables fluent method chaining while retaining exact type validation.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>Returning `this` in class methods allows subclasses to inherit and chain methods seamlessly without losing specific subclass type information.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Generic Builder & Fluent API Patterns Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">class ConfigBuilder {\n  private env = \"production\";\n  setEnv(e: string): this { this.env = e; return this; }\n}</pre></div>\n  "
  },
  {
    id: "branded-types",
    title: "Branded Types & Nominal Typing",
    badge: "ADVANCED TYPES",
    emoji: "🏷️",
    defaultCode: "// Nominal typing in a structural type system\ntype Brand<K, T> = K & { readonly __brand: T };\n\ntype UserId = Brand<string, \"UserId\">;\ntype OrderId = Brand<string, \"OrderId\">;\n\nfunction makeUserId(id: string): UserId {\n  return id as UserId;\n}\n\nfunction makeOrderId(id: string): OrderId {\n  return id as OrderId;\n}\n\nfunction processOrder(userId: UserId, orderId: OrderId) {\n  console.log(`User ${userId} placed Order ${orderId}`);\n}\n\nconst u = makeUserId(\"usr_1\");\nconst o = makeOrderId(\"ord_99\");\nprocessOrder(u, o); // Type-safe!\n// processOrder(o, u); // Compile Error: Prevented swapping!",
    content: "\n    <h3>📌 Deep Dive: Branded Types & Nominal Typing</h3>\n    <p>TypeScript is structurally typed, meaning any two types with the same shape are compatible. Branded types (also known as nominal typing) attach a unique compile-time tag (`__brand`) to prevent accidental value swapping.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>The `__brand` property only exists in the compiler's type checker and requires zero runtime overhead or object wrapping.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Branded Types & Nominal Typing Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type PositiveNumber = Brand&lt;number, \"Positive\"&gt;;\nfunction assertPositive(n: number): PositiveNumber {\n  if (n &lt;= 0) throw new Error(\"Must be positive\");\n  return n as PositiveNumber;\n}</pre></div>\n  "
  },
  {
    id: "recursive-types",
    title: "Recursive Types & JSON Representation",
    badge: "ADVANCED TYPES",
    emoji: "🔄",
    defaultCode: "// Recursive types modeling tree structures and JSON\ntype JsonPrimitive = string | number | boolean | null;\ntype JsonObject = { [key: string]: JsonValue };\ntype JsonArray = JsonValue[];\ntype JsonValue = JsonPrimitive | JsonObject | JsonArray;\n\ninterface TreeNode<T> {\n  value: T;\n  children?: TreeNode<T>[];\n}\n\nconst menuTree: TreeNode<string> = {\n  value: \"Home\",\n  children: [\n    { value: \"Tutorials\", children: [{ value: \"TypeScript\" }, { value: \"Rust\" }] },\n    { value: \"Contact\" }\n  ]\n};\nconsole.log(\"Tree root:\", menuTree.value);",
    content: "\n    <h3>📌 Deep Dive: Recursive Types & JSON Representation</h3>\n    <p>Recursive types allow a type definition to reference itself directly or indirectly, ideal for modeling nested JSON objects, file directories, Abstract Syntax Trees (ASTs), and hierarchical menus.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript evaluates self-referential types lazily, computing inner structure only when traversed or accessed.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Recursive Types & JSON Representation Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type DeepReadonly&lt;T&gt; = T extends Function ? T : T extends object ? { readonly [K in keyof T]: DeepReadonly&lt;T[K]&gt; } : T;</pre></div>\n  "
  },
  {
    id: "async-awaited",
    title: "Asynchronous Types & Awaited<T>",
    badge: "ASYNC",
    emoji: "⏳",
    defaultCode: "// Unwrapping Promises with Awaited<T>\nasync function fetchUserProfile() {\n  return {\n    id: \"usr_4092\",\n    name: \"Sanskar\",\n    xp: 5000\n  };\n}\n\ntype UserProfile = Awaited<ReturnType<typeof fetchUserProfile>>;\n\nconst profile: UserProfile = {\n  id: \"usr_4092\",\n  name: \"Sanskar\",\n  xp: 5000\n};\nconsole.log(\"User:\", profile.name);",
    content: "\n    <h3>📌 Deep Dive: Asynchronous Types & Awaited<T></h3>\n    <p>Introduced in TypeScript 4.5, `Awaited<T>` models the runtime behavior of the `await` keyword by recursively unwrapping Promises and `Thenable` objects to extract their resolved value.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`Awaited<T>` handles nested promises (`Promise<Promise<string>>`) and thenables through a recursive conditional type definition in standard lib.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Asynchronous Types & Awaited<T> Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">type DeepPromise = Promise&lt;Promise&lt;number&gt;&gt;;\ntype Val = Awaited&lt;DeepPromise&gt;; // number</pre></div>\n  "
  },
  {
    id: "unknown-never-any",
    title: "The Type Hierarchy: unknown, never & any",
    badge: "CORE THEORY",
    emoji: "🌌",
    defaultCode: "// Top Type (unknown) vs Bottom Type (never)\nfunction processInput(val: unknown) {\n  // Must narrow before use!\n  if (typeof val === \"string\") {\n    console.log(\"Length:\", val.length);\n  }\n}\n\nfunction unreachable(): never {\n  throw new Error(\"This function never returns.\");\n}\n\nprocessInput(\"LangSteps TypeScript Mastery\");",
    content: "\n    <h3>📌 Deep Dive: The Type Hierarchy: unknown, never & any</h3>\n    <p>TypeScript's type system forms a mathematical lattice. `unknown` is the Top Type (all values are assignable to `unknown`, but operations are prohibited without narrowing). `never` is the Bottom Type (represents the empty set; nothing can be assigned to `never`). `any` is an escape hatch that disables type checking.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>`unknown` ensures complete type safety when dealing with dynamic external inputs. `never` powers exhaustiveness checks in switch statements.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 The Type Hierarchy: unknown, never & any Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">function parseData(json: string): unknown {\n  return JSON.parse(json);\n}</pre></div>\n  "
  },
  {
    id: "covariance-contravariance",
    title: "Type Variance: Covariance & Contravariance",
    badge: "CORE THEORY",
    emoji: "⚖️",
    defaultCode: "// Explicit type parameter variance (TS 4.7+)\ninterface Producer<out T> {\n  produce(): T;\n}\n\ninterface Consumer<in T> {\n  consume(item: T): void;\n}\n\nconsole.log(\"Covariance (out) and Contravariance (in) variance declared.\");",
    content: "\n    <h3>📌 Deep Dive: Type Variance: Covariance & Contravariance</h3>\n    <p>Type variance describes how subtyping of complex types relates to subtyping of their component types. Return types are covariant (outputs preserve subtype direction). Function parameters are contravariant under `strictFunctionTypes`.</p>\n    <h4>⚙️ Under the Hood</h4>\n    <p>TypeScript 4.7 introduced explicit `in` and `out` annotations on type parameters, speeding up type checking across large libraries by avoiding structural inference.</p>\n    <div class=\"cb\">\n      <div class=\"cb-h\"><span>💡 Pro Tip & Best Practice</span></div>\n      <div class=\"cb-b\"><p>undefined</p></div>\n    </div>\n    <h4>💻 Real-World Implementation</h4>\n    <div class=\"cb\"><div class=\"cb-h\"><span>📄 Type Variance: Covariance & Contravariance Example</span><div style=\"display:flex;gap:8px;\"><button class=\"cp-btn\" style=\"background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);\" onclick=\"openPlayground(this)\">🛠️ Try It</button><button class=\"cp-btn\" onclick=\"copyCode(this)\">📋 Copy</button></div></div><pre class=\"cb-b\">interface ReadOnlyList&lt;out T&gt; { get(index: number): T; }</pre></div>\n  "
  }
];

// ===== HELPER: code block HTML =====
function codeBlock(label, lang, code) {
  const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<div class="cb"><div class="cb-h"><span>📄 ${label}</span><div style="display:flex;gap:8px;"><button class="cp-btn" style="background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);" onclick="openPlayground(this)">🛠️ Try It</button><button class="cp-btn" onclick="copyCode(this)">📋 Copy</button></div></div><pre class="cb-b">${escaped}</pre></div>`;
}

// ===== PRO EDITOR ENGINE =====
let pgEditorInstance = null;
let pgAutosaveTimer = null;
let pgIsVertical = localStorage.getItem('pgLayout') === 'vertical';
let pgCurrentFileName = 'main.ts';

const PG_TEMPLATES = {
  basic: `// TypeScript Basic Primitives & Interfaces\ninterface User {\n  id: string;\n  name: string;\n  active: boolean;\n}\n\nconst user: User = {\n  id: "usr_101",\n  name: "Sanskar",\n  active: true\n};\n\nconsole.log("Active User:", user.name);\n`,
  generics: `// Generic API Handler\ninterface Response<T> {\n  status: number;\n  data: T;\n}\n\nfunction wrap<T>(data: T): Response<T> {\n  return { status: 200, data };\n}\n\nconst res = wrap({ lang: "TypeScript", mastery: 100 });\nconsole.log(res.data);\n`,
  unions: `// Discriminated Union Pattern\ntype Event =\n  | { type: "LOGIN"; username: string }\n  | { type: "LOGOUT" };\n\nfunction handle(e: Event) {\n  if (e.type === "LOGIN") {\n    console.log("Logged in:", e.username);\n  } else {\n    console.log("Logged out.");\n  }\n}\n\nhandle({ type: "LOGIN", username: "Sanskar" });\n`,
  utilities: `// Advanced Utility Types\ninterface Config {\n  host: string;\n  port: number;\n  ssl: boolean;\n}\n\ntype OptionalConfig = Partial<Config>;\ntype ReadonlyConfig = Readonly<Config>;\n\nconst cfg: OptionalConfig = { host: "localhost" };\nconsole.log("Config:", cfg);\n`
};

function openPlayground(btn) {
  const pre = btn.closest('.cb').querySelector('.cb-b');
  const code = pre.innerText;
  const modal = document.getElementById('playgroundModal');
  if (modal) {
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.style.display = 'block';
    initPgEditor();
    if (pgEditorInstance) {
      pgEditorInstance.setValue(code);
      setTimeout(() => pgEditorInstance.refresh(), 100);
      pgUpdateStatusBar();
      updatePgPreview();
    }
  }
}

function initPgEditor() {
  if (pgEditorInstance) return;
  const textarea = document.getElementById('pgEditor');
  if (!textarea) return;
  
  if (typeof CodeMirror !== 'undefined') {
    pgEditorInstance = CodeMirror.fromTextArea(textarea, {
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      indentUnit: 2,
      tabSize: 2
    });
    pgEditorInstance.on('change', () => {
      pgMarkUnsaved();
      pgUpdateStatusBar();
      clearTimeout(pgAutosaveTimer);
      pgAutosaveTimer = setTimeout(updatePgPreview, 600);
    });
  }
}

function updatePgPreview() {
  if (!pgEditorInstance) return;
  const code = pgEditorInstance.getValue();
  const frame = document.getElementById('pgFrame');
  if (!frame) return;
  
  const doc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',sans-serif;padding:20px;background:#0d1117;color:#c9d1d9;}pre{background:#161b22;padding:16px;border-radius:8px;border:1px solid #30363d;overflow-x:auto;color:#58a6ff;}</style></head><body><h3>⚡ TypeScript Playground Output</h3><pre id="output">Running script...</pre><script>
    const output = document.getElementById('output');
    output.innerText = '';
    const originalLog = console.log;
    console.log = function(...args) {
      output.innerText += args.join(' ') + '\\n';
      originalLog.apply(console, args);
    };
    try {
      ${code.replace(/<\/script>/gi, '<\\/script>')}
    } catch (err) {
      output.innerText += 'Error: ' + err.message;
    }
  <\/script></body></html>`;
  frame.srcdoc = doc;
  pgMarkSaved();
}

function pgRunPreview() { updatePgPreview(); }
function loadPgTemplate() {
  const sel = document.getElementById('pgTemplate');
  if (!sel || !sel.value || !pgEditorInstance) return;
  const key = sel.value;
  if (PG_TEMPLATES[key]) {
    pgEditorInstance.setValue(PG_TEMPLATES[key]);
    updatePgPreview();
  }
}

function copyPgCode() {
  if (!pgEditorInstance) return;
  navigator.clipboard.writeText(pgEditorInstance.getValue()).then(() => alert('Code copied to clipboard!'));
}

function pgNewFile() {
  if (pgEditorInstance) {
    pgEditorInstance.setValue(PG_TEMPLATES.basic);
    updatePgPreview();
  }
}

function pgOpenFile(event) {
  const file = event.target.files?.[0];
  if (!file || !pgEditorInstance) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    pgEditorInstance.setValue(e.target.result);
    updatePgPreview();
  };
  reader.readAsText(file);
}

function pgDownloadFile() {
  if (!pgEditorInstance) return;
  const blob = new Blob([pgEditorInstance.getValue()], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = pgCurrentFileName || 'main.ts';
  a.click();
}

function pgUndo() { if (pgEditorInstance) pgEditorInstance.undo(); }
function pgRedo() { if (pgEditorInstance) pgEditorInstance.redo(); }
function pgFormat() {
  if (pgEditorInstance) {
    const totalLines = pgEditorInstance.lineCount();
    pgEditorInstance.autoIndentRange({ line: 0, ch: 0 }, { line: totalLines });
  }
}

function pgMarkUnsaved() {
  const s = document.getElementById('pgAutosaveStatus');
  if (s) { s.innerText = '● Unsaved'; s.style.color = '#f59e0b'; }
}

function pgMarkSaved() {
  const s = document.getElementById('pgAutosaveStatus');
  if (s) { s.innerText = '💾 Saved'; s.style.color = '#10b981'; }
}

function pgUpdateStatusBar() {
  if (!pgEditorInstance) return;
  const cursor = pgEditorInstance.getCursor();
  const lnEl = document.getElementById('pgLine');
  const colEl = document.getElementById('pgCol');
  const charsEl = document.getElementById('pgChars');
  if (lnEl) lnEl.innerText = cursor.line + 1;
  if (colEl) colEl.innerText = cursor.ch + 1;
  if (charsEl) charsEl.innerText = pgEditorInstance.getValue().length;
}

function togglePgLayout() {
  const body = document.getElementById('pgBody');
  if (body) {
    pgIsVertical = !pgIsVertical;
    body.style.flexDirection = pgIsVertical ? 'column' : 'row';
    localStorage.setItem('pgLayout', pgIsVertical ? 'vertical' : 'horizontal');
  }
}

function togglePgFullscreen() {
  const modal = document.getElementById('playgroundModal');
  if (modal) modal.classList.toggle('fullscreen');
}

function togglePgConsole() {
  const c = document.getElementById('pgConsole');
  if (c) c.style.display = c.style.display === 'none' ? 'block' : 'none';
}

function clearPgConsole() {
  const c = document.getElementById('pgConsoleBody');
  if (c) c.innerHTML = '';
}

function closePgModal() {
  const modal = document.getElementById('playgroundModal');
  if (modal) {
    if (typeof modal.close === 'function') modal.close();
    else modal.style.display = 'none';
  }
}

// ===== ANCHOR & TEXT TO SPEECH =====
function copyAnchor(e, id) {
  e.preventDefault();
  const url = window.location.origin + window.location.pathname + '#' + id;
  navigator.clipboard.writeText(url).then(() => {
    alert('Direct link to concept copied to clipboard!');
  });
}

let currentSpeakingId = null;
function speakText(id) {
  if (!('speechSynthesis' in window)) {
    alert('Speech Synthesis not supported by your browser.');
    return;
  }
  const btn = document.getElementById('listen-btn-' + id);
  if (currentSpeakingId === id) {
    window.speechSynthesis.cancel();
    currentSpeakingId = null;
    if (btn) btn.innerHTML = '🔊 Listen';
    return;
  }
  window.speechSynthesis.cancel();
  if (currentSpeakingId) {
    const oldBtn = document.getElementById('listen-btn-' + currentSpeakingId);
    if (oldBtn) oldBtn.innerHTML = '🔊 Listen';
  }
  const section = document.getElementById(id);
  if (!section) return;
  let text = '';
  section.querySelectorAll('h3, p, .cb-b').forEach(el => text += el.innerText + '. ');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.onend = () => {
    currentSpeakingId = null;
    if (btn) btn.innerHTML = '🔊 Listen';
  };
  currentSpeakingId = id;
  if (btn) btn.innerHTML = '⏹️ Stop';
  window.speechSynthesis.speak(utterance);
}

// ===== MASTERY & QUIZ DATA =====
const INTERVIEW_QUESTIONS = [
  { q: "What is the difference between type and interface in TypeScript?", a: "Interfaces are extensible through declaration merging and ideal for object model contracts. Types can represent unions, primitives, intersections, and complex conditional mappings." },
  { q: "What is the unknown type and how does it differ from any?", a: "unknown is the type-safe counterpart of any. Any value can be assigned to unknown, but operations cannot be performed without explicit type narrowing or assertion." },
  { q: "What does the satisfies operator do?", a: "The satisfies operator (TS 4.9+) validates that an expression matches a type contract without widening the inferred literal types of its properties." },
  { q: "Explain Discriminated Unions and their primary benefit.", a: "Discriminated unions combine object shapes sharing a common literal property. TypeScript narrows the union automatically in switch and if blocks." },
  { q: "What are Declaration Files (.d.ts)?", a: "They contain type signatures and ambient declarations without runtime JavaScript code, providing type definitions for existing JS libraries." }
];

const BEST_PRACTICES = [
  { t: "Enable Strict Mode", d: "Always set strict: true in tsconfig.json to prevent subtle bugs with null, undefined, and implicit any." },
  { t: "Prefer Unknown over Any", d: "When receiving dynamic inputs from APIs, start with unknown and validate shapes with type guards." },
  { t: "Leverage as const", d: "Use const assertions on configuration arrays and objects to preserve deeply immutable literal types." },
  { t: "Avoid Non-Null Assertion (!)", d: "Only use the ! operator when you are 100% confident a value cannot be null or undefined." }
];

const FLASHCARDS = [
  { f: "Which keyword extracts property keys from an object type?", b: "keyof" },
  { f: "Which utility type makes all properties of an object optional?", b: "Partial<T>" },
  { f: "Which utility type creates an object type with specified keys and value types?", b: "Record<K, T>" },
  { f: "How do you extract the return type of a function type?", b: "ReturnType<typeof fn>" },
  { f: "Which type represents the bottom of the type hierarchy and unreachable code?", b: "never" }
];

// ===== MASTERY LOGIC =====
let masteredTags = JSON.parse(localStorage.getItem('tsMasteredTags') || '[]');
let xp = parseInt(localStorage.getItem('tsUserXP') || '0');

function toggleMastery(id, btn) {
  if (masteredTags.includes(id)) {
    masteredTags = masteredTags.filter(t => t !== id);
    xp = Math.max(0, xp - 50);
    btn.classList.remove('mastered');
    btn.innerHTML = '🎓 Mark Mastered';
  } else {
    masteredTags.push(id);
    xp += 50;
    btn.classList.add('mastered');
    btn.innerHTML = '✅ Mastered (+50 XP)';
    triggerConfetti(btn);
  }
  localStorage.setItem('tsMasteredTags', JSON.stringify(masteredTags));
  localStorage.setItem('tsUserXP', xp.toString());
  updateMasteryUI();
}

function updateMasteryUI() {
  const count = masteredTags.length;
  const level = Math.floor(xp / 500) + 1;
  let rank = "Novice";
  if (count >= 40) rank = "TypeScript Principal";
  else if (count >= 30) rank = "Type Wizard";
  else if (count >= 20) rank = "Senior Engineer";
  else if (count >= 10) rank = "Practitioner";

  const sbCount = document.getElementById('sbMasteryCount');
  if (sbCount) sbCount.innerText = count;
  const statCount = document.getElementById('masteryCountStat');
  if (statCount) statCount.innerText = count;
  const lvlEl = document.getElementById('masteryLevel');
  if (lvlEl) lvlEl.innerText = level;
  const rankEl = document.getElementById('masteryRank');
  if (rankEl) rankEl.innerText = rank;
  const mcRankEl = document.getElementById('mcRank');
  if (mcRankEl) mcRankEl.innerText = rank;

  const bar = document.getElementById('masteryProgressBar');
  if (bar) bar.style.width = Math.min(100, Math.round((count / TAGS.length) * 100)) + '%';

  document.querySelectorAll('#sbNav a').forEach(a => {
    const tid = a.getAttribute('href')?.substring(1);
    if (tid && masteredTags.includes(tid)) {
      a.style.borderLeft = '4px solid #10b981';
    } else if (a) {
      a.style.borderLeft = '';
    }
  });
}

function openCheatSheet() {
  renderCheatSheet();
  const modal = document.getElementById('cheatSheetModal');
  if (modal) modal.showModal();
}

function renderCheatSheet() {
  const searchInput = document.getElementById('csSearch');
  const q = searchInput ? searchInput.value.toLowerCase() : '';
  const grid = document.getElementById('csGrid');
  if (!grid) return;
  const filtered = TAGS.filter(t => t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
  grid.innerHTML = filtered.map(t => `<div class="cs-item"><a href="#${t.id}" onclick="document.getElementById('cheatSheetModal').close();"><span style="font-size:1.2rem;margin-right:8px;">${t.emoji}</span><strong>${t.title}</strong><div style="font-size:0.7rem;opacity:0.6;margin-top:4px;">${t.badge}</div></a></div>`).join('');
}

function openMasteryCenter() {
  showMasteryTab('interview');
  const modal = document.getElementById('masteryCenterModal');
  if (modal) modal.showModal();
}

function showMasteryTab(tab) {
  const content = document.getElementById('mcContent');
  const btns = document.querySelectorAll('.extra-tab-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (!content) return;
  
  if (tab === 'interview') {
    if (btns[0]) btns[0].classList.add('active');
    content.innerHTML = '<h3>💬 TypeScript Interview Questions</h3><div style="display:flex;flex-direction:column;gap:16px;">' +
      INTERVIEW_QUESTIONS.map(i => `<div style="background:var(--bg3);padding:18px;border-radius:12px;border:1px solid var(--border);"><strong style="color:var(--accent);display:block;margin-bottom:6px;">Q: ${i.q}</strong><p style="margin:0;font-size:0.95rem;line-height:1.6;">${i.a}</p></div>`).join('') + '</div>';
  } else if (tab === 'best-practices') {
    if (btns[1]) btns[1].classList.add('active');
    content.innerHTML = '<h3>🛡️ TypeScript Best Practices</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
      BEST_PRACTICES.map(b => `<div style="background:var(--bg3);padding:18px;border-radius:12px;border-bottom:4px solid var(--accent2);"><strong style="display:block;margin-bottom:6px;">${b.t}</strong><p style="margin:0;font-size:0.85rem;opacity:0.85;">${b.d}</p></div>`).join('') + '</div>';
  } else if (tab === 'flashcards') {
    if (btns[2]) btns[2].classList.add('active');
    content.innerHTML = '<h3>🃏 Interactive Flashcards</h3><p style="opacity:0.7;margin-bottom:16px;">Click any card to flip and verify your understanding!</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
      FLASHCARDS.map(f => `<div class="flash-card-container" onclick="this.classList.toggle('flipped')" style="cursor:pointer;"><div class="flash-inner"><div class="flash-front" style="padding:20px;background:var(--bg3);border:1px solid var(--border);border-radius:12px;min-height:90px;display:flex;align-items:center;justify-content:center;text-align:center;"><span>${f.f}</span></div><div class="flash-back" style="padding:20px;background:var(--card);border:2px solid var(--accent);border-radius:12px;min-height:90px;display:flex;align-items:center;justify-content:center;text-align:center;"><strong style="color:var(--accent);">${f.b}</strong></div></div></div>`).join('') + '</div>';
  }
}

function exportProgress() {
  const data = {
    module: "TypeScript",
    favorites,
    masteredTags,
    xp,
    userName: localStorage.getItem('userNameData'),
    theme: localStorage.getItem('themeMode'),
    date: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TypeScript_Mastery_Progress_${new Date().toLocaleDateString()}.json`;
  a.click();
}

function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data.favorites)) favorites = data.favorites;
      if (Array.isArray(data.masteredTags)) masteredTags = data.masteredTags;
      if (typeof data.xp === 'number') xp = data.xp;
      if (data.theme) applyTheme(data.theme);
      localStorage.setItem('tsFavorites', JSON.stringify(favorites));
      localStorage.setItem('tsMasteredTags', JSON.stringify(masteredTags));
      localStorage.setItem('tsUserXP', xp.toString());
      alert('TypeScript progress imported successfully!');
      location.reload();
    } catch (err) {
      alert('Error importing file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// ===== FAVORITES =====
let favorites = JSON.parse(localStorage.getItem('tsFavorites') || localStorage.getItem('htmlTagsFavorites') || '[]');

window.toggleFavorite = function (id, btn) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    btn.innerHTML = '♡';
    btn.classList.remove('active');
    btn.title = 'Add to Favorites';
  } else {
    favorites.push(id);
    btn.innerHTML = '❤️';
    btn.classList.add('active');
    btn.title = 'Remove from Favorites';
    triggerConfetti(btn);
  }
  localStorage.setItem('tsFavorites', JSON.stringify(favorites));
  updateFavCount();
};

function updateFavCount() {
  const count = favorites.length;
  const el = document.getElementById('favCountStat');
  if (el) el.innerText = count;
}

// ===== RENDER ALL =====
function renderAll() {
  const nav = document.getElementById("sbNav");
  const content = document.getElementById("content");
  if (!nav || !content) return;

  let navHTML = "";
  let contentHTML = "";
  const badges = new Set();

  // Tag of the day
  const today = new Date();
  const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
  const tagIndex = seed % TAGS.length;
  const totDay = TAGS[tagIndex];
  const totDayCard = document.getElementById('totDayCard');
  if (totDayCard && totDay) {
    totDayCard.style.display = 'block';
    const textEl = document.getElementById('totDayText');
    if (textEl) textEl.innerText = `Tip of the Day: ${totDay.emoji} ${totDay.title}`;
    const btnEl = document.getElementById('totDayBtn');
    if (btnEl) btnEl.onclick = () => document.getElementById(totDay.id)?.scrollIntoView({ behavior: 'smooth' });
  }

  TAGS.forEach((t, i) => {
    badges.add(t.badge);
    navHTML += `<a href="#${t.id}" data-idx="${i}" data-badge="${t.badge}">${t.emoji} ${i + 1}. ${t.title}</a>`;

    const isFav = favorites.includes(t.id);
    const favIcon = isFav ? '❤️' : '♡';
    const favClass = isFav ? 'fav-btn active' : 'fav-btn';
    const favTitle = isFav ? 'Remove from Favorites' : 'Add to Favorites';

    const isMastered = masteredTags.includes(t.id);
    const masteryClass = isMastered ? 'mastery-btn mastered' : 'mastery-btn';
    const masteryText = isMastered ? '✅ Mastered' : '🎓 Mark Mastered';

    contentHTML += `<section id="${t.id}">
      <h2>
        <a href="#${t.id}" class="anchor-link" title="Copy link to concept" onclick="copyAnchor(event, '${t.id}')">#</a>
        ${i + 1}. ${t.title}
        <span class="tag-badge">${t.badge}</span>
        <button class="${favClass}" onclick="toggleFavorite('${t.id}', this)" title="${favTitle}">${favIcon}</button>
        <button class="${masteryClass}" onclick="toggleMastery('${t.id}', this)">${masteryText}</button>
        <button class="listen-btn" id="listen-btn-${t.id}" onclick="speakText('${t.id}')" title="Listen to explanation" aria-label="Listen to explanation">🔊 Listen</button>
      </h2>
      ${t.content}
    </section>`;

    // Milestone divider every 10 tags
    if ((i + 1) % 10 === 0 && i !== TAGS.length - 1) {
      const quotes = [
        "Strong typing transforms average software into robust engineering.",
        "Catch bugs at compile time so your users never see them in production.",
        "Code is read more often than it is written. TypeScript optimizes for readability.",
        "Generics are the foundation of reusable, scalable architectures.",
        "Master the type system to write fearless code."
      ];
      const quote = quotes[Math.floor((i + 1) / 10) % quotes.length];
      contentHTML += `<div style="margin: 50px 0; text-align: center; border-top: 1px dashed var(--border); border-bottom: 1px dashed var(--border); padding: 25px 20px; border-radius: 16px; background: color-mix(in srgb, var(--accent) 5%, transparent);">
        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">🌟</span>
        <p style="font-size: 1.15rem; font-style: italic; color: var(--text); margin-bottom: 12px;">"${quote}"</p>
        <span style="font-weight: 700; color: var(--accent); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Milestone: ${i + 1} Concepts Mastered</span>
        <button onclick="window.scrollTo({top:0, behavior:'smooth'})" style="display: block; margin: 16px auto 0; background: var(--bg2); color: var(--text); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; cursor: pointer;">⬆️ Back to Top</button>
      </div>`;
    }
  });

  nav.innerHTML = navHTML;
  content.innerHTML = contentHTML;

  // Update dynamic totals
  const totalDesc = document.getElementById('totalTagsDesc');
  if (totalDesc) totalDesc.innerText = TAGS.length;
  const totalStat = document.getElementById('totalTagsStat');
  if (totalStat) totalStat.innerText = TAGS.length;
  const countRead = document.getElementById('totalCountRead');
  if (countRead) countRead.innerText = TAGS.length;

  // Render Filter Categories
  const filter = document.getElementById("sbFilter");
  if (filter && filter.options.length === 1) {
    filter.innerHTML += '<option value="FAVORITES">⭐ Favorites Only</option>';
    [...badges].sort().forEach(b => {
      filter.innerHTML += `<option value="${b}">${b}</option>`;
    });
  }

  // Render Themes Grid
  const themeGrid = document.getElementById("themeGrid");
  if (themeGrid && themeGrid.innerHTML.trim() === "") {
    let tHTML = "";
    PRESET_THEMES.forEach(th => {
      tHTML += `<div class="theme-card" onclick="applyTheme('${th.id}')">
        <div class="tc-colors">
          <span style="background:${th.bg}"></span>
          <span style="background:${th.card}"></span>
          <span style="background:${th.accent}"></span>
          <span style="background:${th.accent2}"></span>
        </div>
        <span class="tc-name">${th.name}</span>
      </div>`;
    });
    themeGrid.innerHTML = tHTML;
  }

  // Sidebar nav link smooth-scroll click
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 900) toggleSidebar();
  }));

  // Calculate Reading Time
  const words = content.innerText.split(/\s+/).length;
  const readTimeEl = document.getElementById("readTime");
  if (readTimeEl) readTimeEl.textContent = Math.ceil(words / 200);

  updateMasteryUI();
}

// ===== COPY =====
function triggerConfetti(btn) {
  for (let i = 0; i < 15; i++) {
    const c = document.createElement('div');
    c.style.cssText = `position: absolute; width: 6px; height: 6px; background:${['#3178c6', '#3ecfcf', '#ff7eb6', '#ffd700'][Math.floor(Math.random() * 4)]}; left:${btn.getBoundingClientRect().left + 30}px; top:${btn.getBoundingClientRect().top + window.scrollY}px; border-radius: 50%; pointer-events: none; z-index: 9999;`;
    document.body.appendChild(c);
    const angle = Math.random() * Math.PI * 2;
    const velocity = 20 + Math.random() * 40;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 20;
    c.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }], { duration: 600 + Math.random() * 400, easing: 'ease-out' }).onfinish = () => c.remove();
  }
}

function copyCode(btn) {
  const pre = btn.closest('.cb').querySelector('.cb-b');
  triggerConfetti(btn);
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('ok');
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('ok'); }, 2000);
  });
}

// ===== SIDEBAR =====
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const btn = document.getElementById("sbOpen");
  if (!sidebar) return;
  sidebar.classList.toggle("open");
  if (overlay) overlay.classList.toggle("show");
  const isOpen = sidebar.classList.contains("open");
  if (btn) btn.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// ===== THEME ENGINE =====
function applyThemeObj(th) {
  const root = document.documentElement;
  Object.keys(th).forEach(k => {
    if (k !== "id" && k !== "name") root.style.setProperty('--' + k, th[k]);
  });
}

function applyTheme(id) {
  const isCustom = id === "custom";
  const th = isCustom ? JSON.parse(localStorage.getItem("customThemeObj") || "{}") : PRESET_THEMES.find(t => t.id === id);
  if (!th) return;
  applyThemeObj(th);
  localStorage.setItem('themeMode', id);
  document.querySelectorAll(".theme-card").forEach(c => c.classList.remove("active"));
  if (!isCustom) {
    const idx = PRESET_THEMES.findIndex(t => t.id === id);
    if (idx !== -1) document.querySelectorAll(".theme-card")[idx]?.classList.add("active");
  }
}

function saveCustomTheme() {
  const th = {
    id: "custom",
    name: "Custom Theme",
    bg: document.getElementById("ct-bg")?.value || "#0a0a1a",
    bg2: document.getElementById("ct-bg2")?.value || "#12122a",
    text: document.getElementById("ct-text")?.value || "#d0d0ee",
    accent: document.getElementById("ct-accent")?.value || "#3178c6",
    accent2: document.getElementById("ct-accent2")?.value || "#3ecfcf"
  };
  localStorage.setItem("customThemeObj", JSON.stringify(th));
  applyTheme("custom");
  const modal = document.getElementById("themeModal");
  if (modal) modal.close();
}

// ===== FONT SIZE =====
let fontSize = 100;
function changeFontSize(d) {
  fontSize = Math.max(70, Math.min(130, fontSize + d * 10));
  document.body.style.fontSize = fontSize + "%";
}

// ===== PROGRESS BAR =====
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  if (h > 0) {
    const pct = Math.min(100, Math.max(0, (window.scrollY / h) * 100));
    const bar = document.getElementById("progress-bar");
    if (bar) bar.style.width = pct + "%";
  }
}, { passive: true });

// ===== SEARCH & FILTER =====
function applyFilters() {
  const searchInput = document.getElementById("sbSearch");
  const q = searchInput ? searchInput.value.toLowerCase() : "";
  const filterSelect = document.getElementById("sbFilter");
  const cat = filterSelect ? filterSelect.value : "ALL";

  let visibleCount = 0;
  document.querySelectorAll("#sbNav a").forEach(a => {
    const id = a.getAttribute("href")?.substring(1);
    const matchesQ = a.textContent.toLowerCase().includes(q);
    let matchesCat = false;
    if (cat === "ALL") matchesCat = true;
    else if (cat === "FAVORITES") matchesCat = favorites.includes(id);
    else matchesCat = a.getAttribute("data-badge") === cat;

    const isVisible = matchesQ && matchesCat;
    a.style.display = isVisible ? "" : "none";

    const section = document.getElementById(id);
    if (section) section.style.display = isVisible ? "" : "none";

    if (isVisible) visibleCount++;
  });

  const totalStat = document.getElementById('totalTagsStat');
  const totalDesc = document.getElementById('totalTagsDesc');
  if (totalStat) totalStat.innerText = visibleCount;
  if (totalDesc) totalDesc.innerText = visibleCount;
}

const searchEl = document.getElementById("sbSearch");
if (searchEl) searchEl.addEventListener("input", applyFilters);
const filterEl = document.getElementById("sbFilter");
if (filterEl) filterEl.addEventListener("change", applyFilters);

// ===== ACTIVE NAV HIGHLIGHT =====
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  document.querySelectorAll("#sbNav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}, { passive: true });

// ===== SIDEBAR CLOSE BUTTON =====
const closeBtn = document.getElementById("sbClose");
if (closeBtn) closeBtn.addEventListener("click", toggleSidebar);

// ===== GREETING SYSTEM =====
function getGreetingTime() {
  const hr = new Date().getHours();
  if (hr < 12) return "Good morning";
  if (hr < 17) return "Good afternoon";
  return "Good evening";
}

function updateGreetingDisplay() {
  const wrap = document.getElementById("greetingWrap");
  if (!wrap) return;
  const name = localStorage.getItem("userNameData") || "";
  const timeStr = getGreetingTime();
  if (name.trim() !== "") {
    wrap.innerHTML = `<span style="color:var(--text2);">${timeStr},</span> <span style="color:var(--accent2);">${name}</span>! 🚀`;
  } else {
    wrap.innerHTML = `<span style="color:var(--text2);">${timeStr}</span>! 🚀`;
  }
}

function saveUsername() {
  const input = document.getElementById("wmUsername");
  const name = input ? input.value.trim() : "";
  localStorage.setItem('userNameData', name);
  localStorage.setItem('hasVisitedGuide', "true");
  const modal = document.getElementById("welcomeModal");
  if (modal) modal.close();
  updateGreetingDisplay();
}

function skipUsername() {
  localStorage.setItem('hasVisitedGuide', "true");
  const modal = document.getElementById("welcomeModal");
  if (modal) modal.close();
  updateGreetingDisplay();
}

function initGreeting() {
  try {
    const hasVisited = localStorage.getItem("hasVisitedGuide");
    if (!hasVisited) {
      const modal = document.getElementById("welcomeModal");
      if (modal && typeof modal.showModal === "function") modal.showModal();
    }
    updateGreetingDisplay();
  } catch (e) {
    console.error("Greeting error:", e);
  }
}

// ===== INIT =====
try {
  renderAll();
  updateFavCount();
  initGreeting();
  const savedTheme = localStorage.getItem("themeMode") || "dark";
  applyTheme(savedTheme);
} catch (e) {
  console.error("Init error in TypeScript module:", e);
}
// LangSteps TypeScript Mastery Module - Developed with Excellence by Sanskar Developer
