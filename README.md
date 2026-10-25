# 🚀 LangSteps — Polyglot & Multi-Language Software Engineering Platform

### HTML · CSS · JavaScript · React · Python · TypeScript · Rust · Go · SQL · C# — 10 Learning Paths | By Sanskar Developer

A premium, state-of-the-art interactive learning platform designed to help developers master **HTML** (100+ tags), **CSS** (200+ properties), **JavaScript** (100+ concepts), **React** (100+ concepts), **Python** (100+ concepts), **TypeScript** (50+ concepts), **Rust** (30+ concepts), **Go** (15 guided lessons), **SQL** (15 guided lessons), and **C#** (15 guided lessons) through in-depth explanations, interactive browser exercises and demos, persistent progress tracking, gamified mechanics, quizzes, and a dark UI with 25+ themes. Runtime support varies by module; the new Go, SQL and C# course examples are displayed for study rather than executed on GitHub Pages.

This platform requires **no compilation, no server setup, and no dependencies**. It operates entirely in the client browser using vanilla technologies (HTML5, JavaScript, CSS3), making it lightweight, easily shareable, and highly responsive.

## 🌐 LangSteps is Online — Free Programming Learning Website

**Official online platform:** https://sanskarin.github.io/LangSteps/

LangSteps is publicly available on the web with ten programming learning paths, lesson navigation, browser-based progress, examples, quizzes, and educational tools. No account is required to read the public lessons. Some content can also remain accessible offline when cached by the browser. Online availability does **not** mean Go, SQL, or C# examples execute in a hosted coding sandbox; the optional ASP.NET Core backend is not deployed by GitHub Pages.

This announcement is available on all 97 HTML pages through a shared accessible banner; its dismissal behavior is authored in `src/site/online-status.ts` and compiled to `online-status.js`.

## 📴 v1.3.0 — More reliable offline learning

When you visit a lesson while online, LangSteps now saves successful HTML pages and their same-origin static resources for later offline reading (subject to browser storage limits). Direct visits to Go, SQL and C# can also register the worker. An uncached page displays an accessible explanation instead of incorrectly showing the homepage. Storage is bounded and other GitHub Pages projects and API endpoints are not intercepted. Your existing lesson completion records stay in this browser.

**How to try it:** Open the [live website](https://sanskarin.github.io/LangSteps/), visit a lesson while connected, then reopen that lesson offline. The entire curriculum is not downloaded automatically; internet-only features and external resources still need a connection.

See the [v1.3.0 release notes](docs/releases/v1.3.0-public.md), [technical verification](docs/releases/v1.3.0.md), and [GitHub Releases](https://github.com/sanskarIN/LangSteps/releases) for actual publication status.

### Offline Library — available on the live website

Open the [Offline Library](offline-library.html) to save or remove first-party reading files for each of the ten programming paths. The library is authored in strict TypeScript (`src/curriculum/offline-library.ts`), has offline-status checks and accessible download feedback, and does not change learning progress. Downloaded files remain in separate course caches that the service worker preserves across upgrades. External editors, fonts and APIs are not downloaded, and browser storage may still evict any offline resources.

This feature was merged through [PR #12](https://github.com/sanskarIN/LangSteps/pull/12) and deployed to GitHub Pages on October 25, 2026. The latest *tagged stable release* remains v1.3.0; the live main-branch website includes newer changes. See [implementation notes](docs/releases/offline-library-progress.md) and issue #11 for remaining refinements.

### Offline reliability improvements after v1.3.0 (deployed)

Development on the [offline reliability follow-up](docs/releases/offline-reliability-next.md) improves recovery from temporary server errors, access to visited pages with differing URL query strings, cache privacy/size safeguards, and API route isolation. These improvements were merged and deployed from main after the published v1.3.0 tag; they are present on the live website but are not part of that historical tagged release.

## 🔧 v1.2.0 — TypeScript-first curriculum and offline engine

The [v1.2.0 implementation](https://github.com/sanskarIN/LangSteps/tree/release/v1.2.0) introduces a staged migration of browser lesson code to strict TypeScript. The Go, SQL and C# lesson viewer, navigation and mastery storage now have strict TypeScript source, preserving existing completion data and adding Previous/Next lesson controls. The Web APIs Reference has also been rebuilt with 15 HTML-first educational entries and typed search/filter interactions that do not depend on JavaScript to display the content. Privacy/Terms donation dialogs across five site sections now offer Razorpay, Buy Me a Coffee and PayPal, with a shared keyboard-accessible TypeScript controller. The offline worker is now authored as strict `src/sw.ts` and compiled into the root `sw.js`. Compiled `curriculum/*.js` assets remain checked in for direct GitHub Pages delivery. Run `npm run build:curriculum` after editing `src/curriculum/*.ts` and `npm run build:sw` after editing `src/sw.ts`. The HTML is retained for semantic structure and progressive accessibility.

See the [v1.2.0 release notes](docs/releases/v1.2.0-public.md) and [technical verification record](docs/releases/v1.2.0.md). The [GitHub Releases page](https://github.com/sanskarIN/LangSteps/releases) is authoritative for the latest published version.

## ✅ v1.1.1 — Stable release

[LangSteps v1.1.1](https://github.com/sanskarIN/LangSteps/releases/tag/v1.1.1) is published as a stable maintenance update. The release improves curriculum navigation, keyboard focus, offline freshness, Go/C# examples, quiz API validation and answer privacy while preserving existing learner progress keys.

For the exact scope, see the [v1.1.1 public release notes](docs/releases/v1.1.1-public.md). Historical compatibility details are retained in the versioned release notes.

## 🆕 v1.1.0 — Three released curricula

**Released in v1.1.0:** [Go](Go/index.html), [SQL](SQL/index.html), and [C# 13 / ASP.NET Core](CSharp/index.html). Each includes 15 curated lessons, search, category filters, code examples, practice prompts, deep links, and browser-local completion tracking. For this release the new paths are reference and study material, not a remote code compiler.

**Important:** GitHub Pages hosts the static lessons. The optional `server/LangSteps.Server` ASP.NET Core project needs independent HTTPS hosting. No production server URL or secure remote execution service is included in the static release. See [release notes](docs/releases/v1.1.0.md) for CI, known limitations and the release checklist.

## ✨ Live Modules & Interactive Curricula

| Module | Concepts | Features | Accent Color |
|--------|----------|----------|-------------|
| 🌐 **HTML Mastery** | 100+ Tags | Live Preview, Tag Explorer, Quiz, Cheat Sheet | `#6c63ff` Purple |
| 🎨 **CSS Mastery** | 200 Properties | Live Preview, Property Explorer, Mastery Center | `#3ecfcf` Cyan |
| ⚡ **JavaScript Mastery** | 100 Concepts | Live Sandbox, Console Output, Code Editor | `#f97316` Orange |
| ⚛️ **React Mastery** | 100+ Concepts | Live Sandbox, Hooks, Component Architecture | `#bf5af2` Violet |
| 🐍 **Python Mastery** | 100 Concepts | Core to Asyncio, Django, FastAPI, NumPy, Pandas | `#3776ab` Blue & Yellow |
| 🔷 **TypeScript Mastery** | 50 Concepts | Generics, Conditional Types, Utility Types | `#3178c6` TS Blue |
| 🦀 **Rust Mastery** | 35 Concepts | Ownership, Borrowing, Lifetimes, Concurrency, and Compiler Diagnostics | `#f74c00` Rust Orange |
| 🐹 **Go Mastery** | 15 Lessons | Goroutines, Channels, Interfaces, Tooling | `#00add8` Go Cyan |
| 🗄️ **SQL Mastery** | 15 Lessons | DDL, DML, Joins, Window Functions, ACID | `#336791` SQL Blue |
| 🎯 **C# / .NET Mastery** | 15 Lessons | Modern C# 13, LINQ, Async/Await, ASP.NET Core | `#512bd4` .NET Purple |
| 🎯 **Master Quiz Hub** | 200 Questions | Multi-language testing, 10 languages, leaderboard | Multi-tier Gold |

## 🎯 Key Features

- 🚀 **Zero Dependencies** — No build tools, no npm, no server. Just open and learn
- 🎨 **Premium Dark UI** — Glassmorphic design with 25+ themes and micro-animations
- 💻 **Live Code Sandbox** — Write and execute code directly in the browser
- 📊 **Progress Tracking** — Master concepts, earn XP, level up (Novice → Grandmaster)
- 🎯 **Quiz System** — Test knowledge with interactive quizzes and score sharing
- 📜 **Cheat Sheets** — Searchable quick-reference grids for every module
- 🎓 **Mastery Center** — Interview Q&A, Best Practices, Flashcards
- ⌨️ **Command Palette** — Ctrl+K search across all concepts
- 🧘 **Zen Mode** — Distraction-free learning
- 📱 **Fully Responsive** — Perfect on desktop, tablet, and mobile
- 🌙 **Theme Gallery** — 25+ curated presets + custom theme builder
- 📤 **Export/Import** — Save and restore your progress across devices

## 🆕 What's New in v3.x

| Feature | Description |
|---------|-------------|
| 📱 **PWA Support** | Install as native app, offline caching via service worker |
| 🎮 **Code Playground** | Standalone HTML/CSS/JS editor with live preview |
| 📝 **Interactive Quiz** | Multi-language coding quiz with scoring and timer |
| 📊 **Progress Dashboard** | Visual XP tracking, streaks, and module progress |
| 📖 **Searchable Glossary** | 50+ software engineering terms with live search |
| 📋 **Cheat Sheets** | Tabbed reference with copy-to-clipboard |
| 🔖 **Bookmarks** | Save concepts to revisit later |
| 📚 **Resources** | Curated learning resources and tools |
| ⚖️ **Framework Comparison** | Compare React vs Vue vs Angular vs Svelte |
| 🗺️ **Learning Roadmap** | Interactive 4-phase roadmap with progress tracking |
| 💻 **Code Snippets** | 40+ curated snippets with copy-to-clipboard |
| 💡 **Daily Tips** | 30+ tips organized by category |
| 🔧 **CSS Tools** | Color picker, gradient builder, shadow & radius generators |
| 💼 **Interview Prep** | 50+ questions with answers, filters by topic & difficulty |
| 🏆 **Certificates** | Earn and download learning completion badges |
| 🎯 **Coding Challenges** | 20+ challenges with difficulty levels |
| 🐦 **Twitter Cards** | Rich social media previews across all pages |
| ⚛️ **20 React Concepts** | React.memo, Suspense, Portals, Server Components, and more |
| 🃏 **Flashcards** | 40+ interactive flip cards with keyboard nav and mastery tracking |
| ⌨️ **Shortcuts Reference** | VS Code, DevTools, Terminal, and Git shortcuts |
| 📐 **Project Ideas** | 25+ project ideas with difficulty levels and tech tags |
| ♿ **A11y Checker** | Paste HTML and get instant accessibility audit with scores |
| ⚡ **Performance Guide** | Optimization techniques with code examples and score simulator |
| 🧩 **Design Patterns** | 15+ JS patterns: Singleton, Factory, Observer, Strategy, and more |
| 🔤 **Regex Tester** | Interactive regex testing with real-time highlighting and presets |
| 🎨 **Color Converter** | HEX/RGB/HSL converter, palette generator, WCAG contrast checker |
| 📡 **Web APIs** | Quick reference for DOM, Fetch, Canvas, Storage, and 12+ browser APIs |
| 🎬 **CSS Animations** | Live animation playground with presets, controls, and CSS output |
| 🐍 **Python Module** | 100 concepts: OOP, asyncio, Django, FastAPI, SQLAlchemy, NumPy, Pandas, Scikit-learn, Metaclasses, Optimization |
| 🔷 **TypeScript Module** | 50+ concepts: Types, Interfaces, Generics, Utility Types, Decorators |
| 🦀 **Rust Module** | 35 concepts: Ownership, Borrowing, Lifetimes, Traits, Concurrency, and Compiler Diagnostics |
| 🐹 **Go Module** | 30+ concepts: Goroutines, Channels, Interfaces, HTTP Server |
| 🗄️ **SQL Module** | 30+ concepts: JOINs, Subqueries, Window Functions, Transactions |
| 💜 **C# Module** | 40+ concepts: OOP, LINQ, ASP.NET Core, Entity Framework, Web API |
| 🎯 **Quiz Hub** | 200 curated questions across all 10 languages with timer, scoring, and leaderboard |
| ⚙️ **CI/CD** | GitHub Actions for deployment and linting |
| ♿ **Accessibility** | ARIA labels, skip nav, heading hierarchy fixes |


---

## 🗺️ Project Architecture & Design Philosophy

The architecture of **LangSteps** follows a strict **offline-first, zero-build, static execution model**. The goal of this design is to make the entire interactive experience instantly run when opened from local files, while still supporting advanced features such as code editing, live preview, progress importing/exporting, custom theme generation, and speech synthesis.

### Zero-Build client-side Architecture
The project does not rely on bundlers (Webpack, Vite, Rollup) or runtime environments (Node.js, Express) for its core user experience. Instead, it utilizes standard web elements:
- **State Storage**: Managed via the browser's `localStorage` API, storing XP, customized theme schemas, favorites lists, and user settings.
- **Asset Integration**: SVGs are natively referenced or inlined to guarantee fast rendering. 
- **Code Execution**: The live playground runs custom user code inside an isolated `<iframe>` environment, dynamically writing code via the `srcdoc` attribute and intercepting console actions through postMessage communication.
- **Theme Manipulation**: A central theme engine sets CSS variables on the `:root` element, dynamically updating the visual state of all elements on the page without requiring style recalculations or re-rendering.

### 🔷 TypeScript Client Architecture (`src/`)
LangSteps incorporates a fully typed, modern TypeScript subsystem that provides type-safety, engine modularity, and reusable services:
- **`src/types/index.ts` & `src/types/profile.ts`**: Strict types for `Theme`, `Concept`, `ModuleInfo`, `QuizQuestion`, `QuizSubmission`, `QuizResult`, `UserProgress`, `DeveloperProfile`, `SocialLinks`, and `ExecutionResult`.
- **`src/core/profileManager.ts`**: Developer profile management with official social links, ecosystem endpoints, and copy utilities.
- **`src/core/themeEngine.ts`**: Comprehensive theme engine with 25+ hand-crafted palettes, custom CSS variable injection, and persistence.
- **`src/core/progressManager.ts`**: LocalStorage-backed progress manager tracking XP, levels (1-10), rank tiers (Novice to Grandmaster), and export/import.
- **`src/core/quizEngine.ts`**: Scoring state machine, speed bonus calculations, performance tiers, and answer review generator.
- **`src/core/apiClient.ts`**: Type-safe HTTP client connecting to the ASP.NET Core backend with zero-latency offline fallbacks.
- **`src/modules/playgroundEngine.ts`**: Interactive multi-language client execution simulator with stdout formatting and execution metrics.
- **`src/modules/quizModule.ts`**: Quiz module controller for topic selection, countdown timing, and live score evaluation.
- **`src/modules/pythonModule.ts`**: Complete Python curriculum controller covering Core Syntax, OOP, AsyncIO, and Data Science.
- **`src/index.ts`**: Unified entry point exposing all core engines, curriculum controllers, and bootstrapping utilities.

```bash
# Build TypeScript to dist/
npm run build

# Watch mode for TypeScript development
npm run watch

# Check types without emitting code
npm run typecheck
```

### 🎯 ASP.NET Core Web API Backend (`server/LangSteps.Server/`)
For enterprise deployments, production microservices, or local full-stack hosting, LangSteps provides an **ASP.NET Core Web API** server written in modern **C# (.NET 10)**:
- **Integrated Static File Hosting**: When running the server, ASP.NET Core automatically hosts the complete LangSteps frontend alongside the REST API from the root directory.
- **CORS Enabled**: Configured for seamless cross-origin communication from GitHub Pages, local dev environments, or custom clients.
- **Minimal API Endpoints**:
  - `GET /api/health` — Platform status, version, server timestamp, runtime details, and catalog counts.
  - `GET /api/modules` — Complete catalog of all language modules with metadata and category tags.
  - `GET /api/modules/{id}` — Lookup module by identifier (e.g. `python`, `html`, `css`, `csharp`).
  - `GET /api/quiz/{language}` — Curated educational quiz question sets for any supported language.
  - `POST /api/quiz/submit` — Validates submissions, computes accuracy percentage, awards time bonuses, and returns detailed question explanations.
  - `GET /api/leaderboard` — Retrieves top 10 global learners ranked by XP and mastery.
  - `POST /api/leaderboard` — Submits new learner high scores.
  - `GET /api/profile` — Retrieves the complete developer profile, verified socials, and ecosystem URLs.
  - `GET /api/profile/socials` — Retrieves verified social handles and community links.
  - `GET /api/profile/ecosystem` — Returns canonical URLs for About, Contact, Projects, Blog, and Repository.
  - `POST /api/playground/execute` — Simulates safe, sandboxed code execution for Python, JavaScript, and C#.
  - `GET /api/stats/summary` — High-level platform statistics including module counts, question counts, and active links.

```bash
# Run the ASP.NET Core server (hosts both frontend and REST APIs)
dotnet run --project server/LangSteps.Server --urls "http://localhost:5055"

# Build the ASP.NET Core server project
dotnet build server/LangSteps.Server
```

---

## 🛠️ Build and Separation Scripts

The codebase features two identical helper scripts designed to split or compile the monolithic source code. These utilities are particularly useful during development to separate the concerns of HTML structure, CSS layouts, and JavaScript dynamic code.

### 1. Node.js Separator (`split_files.js`)
Located at [split_files.js](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/split_files.js), this script processes the main markup file and splits the content based on specific identifiers:
- **CSS Extraction**: Looks for the `<style id="baseStyles">` tag. It extracts everything inside this tag, writes it to `Using Style for HTML Mastery.css`, and replaces the block in the HTML with a `<link>` stylesheet reference pointing to the external file.
- **JavaScript Extraction**: Detects the script tag containing the string `THEME DATA`. It extracts the logic, saves it to `Using JS for HTML Mastery.js`, and replaces the inline `<script>` tag with an external source reference.
- **HTML Modification**: Writes back the clean HTML structure to [HTML Mastery.html](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/HTML%20Mastery.html).

### 2. PowerShell Separator (`split_files.ps1`)
Located at [split_files.ps1](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/split_files.ps1), this Windows PowerShell script performs the exact same operation as the Node script but utilizes native Windows commands:
- Reads the file raw using `Get-Content` split by newlines.
- Traverses the lines and checks patterns using `-match` regex operators.
- Outputs UTF-8 encoded files using `Set-Content`.

These scripts ensure that any modifications to the styling or logic can be developed modularly and compiled or separated without manual copy-pasting.

---

## 📂 Codebase File Portfolio

The project directory consists of a collection of web documents, scripts, stylesheets, and vector assets. Below is a detailed breakdown of every single file within the directory.

```
LangSteps/
│
├── HTML Mastery.html                    # The main user interface & markup framework
├── Using JS for HTML Mastery.js          # Main logic, datasets, playground, state managers
├── Using Style for HTML Mastery.css      # Core styles, preset themes, animations, variables
│
├── about.html                           # Profile portal for Sanskar & project vision
├── developer.html                       # Hub containing guidelines, APIs, and dev workflows
├── privacy.html                         # Offline storage policies & data statements
├── support.html                         # Help & FAQ portal with feedback routing forms
├── terms.html                           # Platform terms, conditions, & usage policies
├── thanks.html                          # Acknowledgement portal for community supporters
├── 404.html                             # Custom Page Not Found error page
│
├── split_files.js                       # Node.js concern-separator script
├── split_files.ps1                      # Windows PowerShell equivalent script
│
├── Sanskar Developer.svg                # Core logo asset with vector pathways
├── about_logo.svg                       # SVG identity graphic for About page
├── developer_icon.svg                   # SVG identity graphic for Developer page
├── html_logo.svg                        # SVG logo graphic representing HTML5
├── privacy_logo.svg                     # SVG identity graphic for Privacy page
├── support_logo.svg                     # SVG identity graphic for Support page
└── terms_logo.svg                       # SVG identity graphic for Terms page
```

---

## 🏛️ Deep-Dive Analysis of Main Application Components

### 1. The Markup Layer: `HTML Mastery.html`
The main entrance to the application is [HTML Mastery.html](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/HTML%20Mastery.html). It serves as the shell that structures all modals, grids, footers, headers, sidebars, and control buttons.

#### Head Configuration & SEO Metadata
The document starts with a comprehensive set of headers designed for responsive presentation and discoverability:
- **Responsive Layout**: `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />` ensures optimal zoom levels and support for safe areas on mobile displays (e.g., notches).
- **SEO Elements**: Title, description, keywords, author, and robot indices.
- **PWA Properties**: Manifest links and multi-color theme support mapping to standard system color schemes.
- **iOS Features**: Specific apple-mobile-web-app configuration flags, inlined base64 icons to guarantee loading, and customized status bar styles.
- **Open Graph / Twitter Cards**: Structured property layouts to support rich sharing configurations across social media platforms.
- **Fonts**: Loads Google Fonts (`Plus Jakarta Sans` for titles, `Inter` for general readability, and `Fira Code` for code blocks).

#### External Libraries
To power the live playground, CodeMirror is loaded from a Content Delivery Network (CDN):
- **Core Library**: `codemirror.min.js` and matching styles `codemirror.min.css`.
- **Modes**: Syntactical parsers for HTML, CSS, JavaScript, and XML.
- **Add-ons**: Utilities for closing tags automatically (`closetag.min.js`), bracket matching, line highlighting, and code folding (`foldcode.min.js`, `foldgutter.min.js`).

#### Layout Breakdown
1. **Interactive Scroll Indicator**: A full-width progress bar fixed to the top of the viewport, calculating and displaying the current scroll percentage dynamically.
2. **Navigational Sidebar Panel (`<aside id="sidebar">`)**:
   - Contains branding and close buttons.
   - Text search box for filtering tag nodes.
   - Category selector dropdown menu.
   - Live Mastery progress indicator (displays completed percentage, level value, and visual bar animation).
   - Theme Gallery dialog launcher.
   - Font scale adjustments.
   - Local progress database utility commands (Export / Import buttons).
3. **Hero Header Grid (`<header>`)**:
   - Welcome greetings area that changes dynamically depending on the user's name and the current hour.
   - Stats Panel tracking overall count, user level, mastered percentage, marked favorites, and minified read times.
   - Interactive Control Grid: Quick triggers for translation systems, quiz questions, cheat sheet navigation, PDF exports, Zen focus, and historical overviews.
4. **Primary Content Region (`<main id="mainWrap">`)**:
   - Navigation sidebar toggle button.
   - Main container (`<div id="content">`) where JavaScript dynamically populates structural markup sections for all 100 HTML tags.
5. **Modal Dialog Systems**:
   - **Theme Gallery (`<dialog id="themeModal">`)**: Configured with preset themes and a custom builder console using interactive color pickers.
   - **Welcome Portal (`<dialog id="welcomeModal">`)**: Prompting new visitors for their name to initialize personalized greetings.
   - **Interactive Playground (`<dialog id="playgroundModal">`)**: A fullscreen development environment with side-by-side editing, sandbox rendering frame, standard page templates selector, file upload/download triggers, code formatter, layout controls, and a developer logging console.
   - **Cheat Sheet (`<dialog id="cheatSheetModal">`)**: Quick grid list displaying all tags categorized with filtering features.
   - **Mastery Center (`<dialog id="masteryCenterModal">`)**: Integrated hub for interview preparation (displaying Q&A panels, active flashcards, and HTML standards).

---

### 2. The Logic & Data Engine: `Using JS for HTML Mastery.js`
The script located at [Using JS for HTML Mastery.js](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/Using%20JS%20for%20HTML%20Mastery.js) contains the datasets and functionalities that drive the interactive nature of the application.

#### Global State Configurations
- `masteredTags`: An array tracking the IDs of all tags marked as completed by the user. Restored from local storage.
- `xp`: Numeric tracker representing user experience points, incrementing by 50 points per mastered tag.
- `favorites`: An array containing user-starred tag nodes.
- `PRESET_THEMES`: An collection of 25+ detailed layout configurations, specifying color tokens (`bg`, `bg2`, `accent`, `border`, `hdrBg`, etc.) for themes like Dracula, Solarized, Nordic Frost, Cozy Cafe, Synthwave, Cyber, Forest Green, Cozy Cafe, Outrun Sunset, and Blood Moon.

#### The 100 HTML Tags Database Schema
The dataset is structured as an array of objects representing tags. Each object features:
- `id`: A unique anchor string matching sidebar coordinates (e.g., `tag-div`).
- `title`: Presentation label for headers.
- `badge`: Categorical tag assignment (e.g., `INLINE`, `BLOCK`, `VOID`, `STRUCTURE`, `METADATA`).
- `emoji`: Graphic icon representing the tag's purpose.
- `content`: An in-depth HTML string containing:
  - **📌 Description**: Precise breakdown of structural purpose.
  - **📋 Attribute Table**: Explaining common parameters, required flags, and properties.
  - **🔍 Deep Dive / Best Practices**: Explaining semantic usage rules, security warnings (e.g., tabnabbing protection on links), and browser quirks.
  - **💻 Fenced Code Blocks**: Syntactically clean HTML5 examples generated via the `codeBlock` helper function.
  - **▶ Live Demo Box**: Demonstrating visual behaviors (e.g., interactive tables, buttons, canvas graphics, and templates).

#### Engine Operations and Code Blocks

##### 1. Core Render Loop (`renderAll()`)
Generates the list of sidebar navigation nodes and main section views by iterating through the tag database. It populates tags, badges, search hooks, reads total page text to calculate average reading times, and builds the visual theme grid.

```javascript
function renderAll() {
  const nav = document.getElementById("sbNav");
  const content = document.getElementById("content");
  let navHTML = "";
  let contentHTML = "";
  const badges = new Set();

  TAGS.forEach((tag, idx) => {
    badges.add(tag.badge);
    
    // Sidebar list items
    navHTML += `<a href="#${tag.id}" data-badge="${tag.badge}">
      <span>${tag.emoji} ${tag.title.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
      <span class="badge ${tag.badge.toLowerCase()}">${tag.badge}</span>
    </a>`;

    // Main section card content
    contentHTML += `<section id="${tag.id}" class="tag-card">
      <div class="tc-header">
        <h2>${tag.emoji} ${tag.title}</h2>
        <div style="display:flex; gap:10px; align-items:center;">
          <span class="badge ${tag.badge.toLowerCase()}">${tag.badge}</span>
          <button class="fav-btn" onclick="toggleFavorite('${tag.id}', this)" aria-label="Add to favorites">
            ${favorites.includes(tag.id) ? '⭐' : '☆'}
          </button>
        </div>
      </div>
      <div class="tc-body">${tag.content}</div>
      <div class="tc-footer">
        <button id="listen-btn-${tag.id}" class="listen-btn" onclick="speakText('${tag.id}')">🔊 Listen</button>
        <button class="mastery-btn ${masteredTags.includes(tag.id) ? 'mastered' : ''}" 
          onclick="toggleMastery('${tag.id}', this)">
          ${masteredTags.includes(tag.id) ? '✅ Mastered (+50 XP)' : '🎓 Mark Mastered'}
        </button>
      </div>
    </section>`;
  });

  nav.innerHTML = navHTML;
  content.innerHTML = contentHTML;
  
  // Calculate read time
  const words = content.innerText.split(/\s+/).length;
  if(document.getElementById("readTime")) {
    document.getElementById("readTime").textContent = Math.ceil(words / 200);
  }
  updateMasteryUI();
}
```

##### 2. Live Playground Module
A custom-configured playground integrating CodeMirror:
- **Initialization**: Triggered by clicking "Try It" on any code example. It sets options like auto-close tags, bracket highlighting, line numbers, and keyboard shortcuts (e.g., `Ctrl-S` to save, `Ctrl-Enter` to run).
- **Console Capture Pipeline**: Injects a custom capturing script into the sandbox `<iframe>` that intercepts `console.log`, `console.error`, and `console.warn` calls. It packages the arguments and transmits them to the parent playground console window using `postMessage`.
- **Formatting Engine**: Employs a text-parsing formatting logic to beautify HTML code, cleaning up tag indentation levels and formatting attributes:

```javascript
function pgFormat() {
  if (!pgEditorInstance) return;
  let code = pgEditorInstance.getValue();
  let formatted = '';
  let indent = 0;
  
  // Split the document into tag lines
  const lines = code.replace(/>\s*</g, '>\n<').split('\n');
  const selfClosing = /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i;
  const closing = /^<\//;
  const opening = /^<[a-zA-Z]/;

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    if (closing.test(line)) indent = Math.max(0, indent - 1);
    formatted += '  '.repeat(indent) + line + '\n';
    if (opening.test(line) && !selfClosing.test(line) && !closing.test(line) && !line.endsWith('/>') && !line.includes('</')) {
      indent++;
    }
  });
  
  pgEditorInstance.setValue(formatted.trim());
  updatePgPreview();
}
```

##### 3. Text-to-Speech Accessibility Engine (`speakText`)
Utilizes the browser's Web Speech API (`SpeechSynthesis`) to read the content of any tag section aloud. It filters out code snippets, layout wrappers, tables, and system buttons, ensuring only educational descriptions are read, and adjusts speech rates and pitches.

##### 4. Gamified Mastery Tracker
Updates XP levels and ranks based on the number of mastered tags. It recalculates parameters, sets new ranks (Novice, Apprentice, Intermediate, Expert, Wizard, HTML Grandmaster), and saves the values locally:

```javascript
function toggleMastery(id, btn) {
  if (masteredTags.includes(id)) {
    masteredTags = masteredTags.filter(t => t !== id);
    xp -= 50;
    btn.classList.remove('mastered');
    btn.innerHTML = '🎓 Mark Mastered';
  } else {
    masteredTags.push(id);
    xp += 50;
    btn.classList.add('mastered');
    btn.innerHTML = '✅ Mastered (+50 XP)';
    triggerConfetti(btn); // Fires visual confetti physics
  }
  localStorage.setItem('htmlMasteredTags', JSON.stringify(masteredTags));
  localStorage.setItem('htmlUserXP', xp.toString());
  updateMasteryUI();
}
```

---

### 3. The Styling Layer: `Using Style for HTML Mastery.css`
The stylesheet [Using Style for HTML Mastery.css](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/Using%20Style%20for%20HTML%20Mastery.css) contains the styles, layouts, themes, responsive rules, and keyframes that define the application's visual identity.

#### Central Style Tokens (CSS Custom Properties)
All colors, dimensions, borders, and gradients are mapped to CSS variables. Changing themes updates these properties, instantly changing the application's appearance:
- `--bg`, `--bg2`, `--bg3`, `--bg4`: Background layers (outer container, card surfaces, content headers, inner layers).
- `--text`, `--text2`, `--text3`: Typography colors (high contrast titles, readable body copy, muted labels/placeholders).
- `--accent`, `--accent2`, `--accent3`: Brand accents, selection markers, and category colors.
- `--border`: Standard border styling.
- `--card`: Surface color for tag cards and lists.
- `--codeBg`: Code editor background color.
- `--sbBg`: Sidebar panel background color.
- `--hdrBg`: Linear gradient applied to the header surface.

#### Layout Systems & Flexbox Grid Architecture
The stylesheet defines a responsive sidebar layout:
- **Desktop Grid**: Main wrap takes the full screen, with a fixed sidebar width and scrollable content region.
- **Mobile Adaptive Layout**: At widths under 900px, the sidebar is hidden off-canvas (`transform: translateX(-100%)`) and transitions into view when toggled, overlaying a blurred backdrop on the main screen.
- **Tag Cards layout**: Arranged in a vertical grid, featuring custom styling for badge categories, table displays, blockquotes, codeblocks, copy triggers, and live preview containers.

#### Micro-Animations and Transitions
- **Hover Scale**: Accent items, action buttons, and lists feature transition transforms (`transform: translateY(-2px)`).
- **Scale-Up Dialogs**: Modal windows use keyframe scaling animations to open smoothly.
- **Background Fade-In**: Backdrop overlays fade in, creating focus on modal content.
- **Progress Transitions**: Mastery indicators and viewport scrollbars transition smoothly when properties change.

#### Print Adaptations
An active `@media print` section ensures clean document outputs:
- Hides sidebars, floating widgets, control panels, and themes.
- Forces standard light background and dark text to save ink.
- Prevents page breaks in the middle of tag cards (`break-inside: avoid`).

---

## 📝 Complete Index of the 100 HTML Tags Database

Below is a detailed map of the HTML tags dataset structured inside [Using JS for HTML Mastery.js](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/Using%20JS%20for%20HTML%20Mastery.js).

### Group 1: Document Root & Metadata Elements
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-html` | `<html>` | `METADATA` | 🌐 | The root element of all HTML documents; wraps all other nodes. |
| `tag-head` | `<head>` | `METADATA` | 🧠 | Contains machine-readable metadata (title, scripts, styles, SEO cards). |
| `tag-body` | `<body>` | `METADATA` | 👤 | Wraps all displayable page contents rendered to the viewport. |
| `tag-title` | `<title>` | `METADATA` | 🏷️ | Declares document title metadata shown on browser tabs. |
| `tag-meta` | `<meta>` | `VOID` | ⚙️ | Declares metadata properties (character sets, viewport scales, author descriptions). |
| `tag-link` | `<link>` | `VOID` | 🔗 | Sets up connections to external resources (stylesheets, web manifests, favicons). |
| `tag-style` | `<style>` | `METADATA` | 🎨 | Embeds inline CSS styling blocks. |
| `tag-script` | `<script>` | `METADATA` | 📜 | Integrates inline or external client-side JavaScript execution files. |
| `tag-noscript` | `<noscript>`| `METADATA` | 🚫 | Specifies fallback content displayed when JavaScript scripting is disabled. |
| `tag-base` | `<base>` | `VOID` | 📍 | Establishes base URLs for relative hyperlinks inside documents. |

### Group 2: Document Sectioning & Structural Semantics
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-header` | `<header>` | `STRUCTURE` | 🔝 | Defines header spaces containing branding logos, titles, and navigational options. |
| `tag-nav` | `<nav>` | `STRUCTURE` | 🗺️ | Wraps major navigational link lists. |
| `tag-main` | `<main>` | `STRUCTURE` | 🎯 | Marks the unique, core contents of the web page. |
| `tag-section` | `<section>` | `STRUCTURE` | 📂 | Groups thematic content subdivisions within documents. |
| `tag-article` | `<article>` | `STRUCTURE` | 📰 | Wraps self-contained, syndicate-ready components (e.g. blog posts). |
| `tag-aside` | `<aside>` | `STRUCTURE` | 💬 | Identifies peripheral elements, sidebars, or auxiliary descriptions. |
| `tag-footer` | `<footer>` | `STRUCTURE` | 🔚 | Wraps layout footer blocks (credits, copyright information, site maps). |
| `tag-address` | `<address>` | `STRUCTURE` | 📬 | Encapsulates author contact details and physical or digital addresses. |
| `tag-h1` | `<h1>` | `BLOCK` | 👑 | Declares primary Level-1 heading. |
| `tag-h2` | `<h2>` | `BLOCK` | 🥈 | Declares secondary Level-2 headings. |
| `tag-h3` | `<h3>` | `BLOCK` | 🥉 | Declares Level-3 headings. |
| `tag-h4` | `<h4>` | `BLOCK` | 📄 | Declares Level-4 headings. |
| `tag-h5` | `<h5>` | `BLOCK` | 📄 | Declares Level-5 headings. |
| `tag-h6` | `<h6>` | `BLOCK` | 📄 | Declares Level-6 headings. |

### Group 3: Text Content & Block Layouts
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-div` | `<div>` | `CONTAINER` | 📦 | Generic block-level structural layout container, used for styling and element grouping. |
| `tag-p` | `<p>` | `BLOCK` | ✍️ | Formats block-level paragraphs. |
| `tag-br` | `<br>` | `VOID` | ↩️ | Inserts a line break inside text blocks. |
| `tag-hr` | `<hr>` | `VOID` | ➖ | Draws a horizontal rule representing thematic content divisions. |
| `tag-pre` | `<pre>` | `BLOCK` | ⌨️ | Displays preformatted text blocks preserving white spaces and line breaks. |
| `tag-blockquote`| `<blockquote>`| `BLOCK` | 💬 | Represents long quotations cited from external references. |
| `tag-ul` | `<ul>` | `BLOCK` | 📋 | Renders bulleted item lists. |
| `tag-ol` | `<ol>` | `BLOCK` | 🔢 | Renders numbered item lists. |
| `tag-li` | `<li>` | `BLOCK` | 🔹 | Wraps individual items inside lists. |
| `tag-dl` | `<dl>` | `BLOCK` | 📖 | Renders description listings containing term-explanation pairs. |
| `tag-dt` | `<dt>` | `BLOCK` | 🏷️ | Declares terms within description lists. |
| `tag-dd` | `<dd>` | `BLOCK` | 💡 | Explains matching terms within description lists. |
| `tag-figure` | `<figure>` | `STRUCTURE` | 🖼️ | Encapsulates media illustrations along with descriptions. |
| `tag-figcaption`| `<figcaption>`| `STRUCTURE` | 🏷️ | Specifies captions for figures. |

### Group 4: Inline Semantics & Formatting
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-a` | `<a>` | `INLINE` | 🔗 | Creates hyperlinks pointing to external websites or anchors. |
| `tag-span` | `<span>` | `CONTAINER` | ✏️ | Generic inline container used for text styling. |
| `tag-em` | `<em>` | `INLINE` | 🗣️ | Renders text with emphasized stress (typically italics). |
| `tag-strong` | `<strong>` | `INLINE` | 💪 | Denotes strong importance (typically bold styling). |
| `tag-small` | `<small>` | `INLINE` | 🔍 | Renders side-comments, small print, and legal warnings in reduced sizes. |
| `tag-s` | `<s>` | `INLINE` | ❌ | Represents text that is no longer accurate or relevant (strikethrough). |
| `tag-cite` | `<cite>` | `INLINE` | 📚 | References the title of creative work (books, songs, reports). |
| `tag-q` | `<q>` | `INLINE` | 💬 | Represents inline quotations. |
| `tag-dfn` | `<dfn>` | `INLINE` | 📖 | Wraps terms being defined within text blocks. |
| `tag-abbr` | `<abbr>` | `INLINE` | 🔤 | Declares abbreviations or acronyms. |
| `tag-ruby` | `<ruby>` | `INLINE` | 🗣️ | Wraps ruby annotations used to indicate pronunciation for East Asian characters. |
| `tag-rt` | `<rt>` | `INLINE` | ✍️ | Specifies pronunciation text inside ruby wrappers. |
| `tag-rp` | `<rp>` | `INLINE` | 括号 | Defines parentheses fallback for browsers not supporting ruby layouts. |
| `tag-data` | `<data>` | `INLINE` | 🔢 | Links machine-readable value IDs to human-readable strings. |
| `tag-time` | `<time>` | `INLINE` | 📅 | Links machine-readable calendar coordinates to human representations. |
| `tag-code` | `<code>` | `INLINE` | 💻 | Represents inline computer code blocks. |
| `tag-var` | `<var>` | `INLINE` | e | Represents variable names in mathematics or scripting equations. |
| `tag-samp` | `<samp>` | `INLINE` | 🖥️ | Represents output samples from computer scripts. |
| `tag-kbd` | `<kbd>` | `INLINE` | ⌨️ | Represents user keyboard inputs. |
| `tag-sub` | `<sub>` | `INLINE` | <sub> | Formats subscripts (e.g. chemical formulas). |
| `tag-sup` | `<sup>` | `INLINE` | <sup> | Formats superscripts (e.g. mathematical indices). |
| `tag-i` | `<i>` | `INLINE` | ℹ️ | Formats alternative voices or technical terms in italics. |
| `tag-b` | `<b>` | `INLINE` | 🇧 | Formats keywords or key strings in bold text. |
| `tag-u` | `<u>` | `INLINE` | ✍️ | Applies non-textual underline alerts. |
| `tag-mark` | `<mark>` | `INLINE` | 💛 | Highlights text blocks with yellow marker properties. |
| `tag-bdi` | `<bdi>` | `INLINE` | ↔️ | Isolates text for bi-directional text formatting. |
| `tag-bdo` | `<bdo>` | `INLINE` | ⬅️ | Overrides current text direction. |
| `tag-ins` | `<ins>` | `INLINE` | ➕ | Represents insertions inside document trees. |
| `tag-del` | `<del>` | `INLINE` | ➖ | Represents deletions inside document trees. |
| `tag-wbr` | `<wbr>` | `VOID` | ✂️ | Represents word break opportunities in long strings. |

### Group 5: Multimedia, Vector graphics & Embedded Elements
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-img` | `<img>` | `VOID` | 🖼️ | Embeds graphic resources. |
| `tag-video` | `<video>` | `MEDIA` | 🎥 | Embeds interactive video players. |
| `tag-audio` | `<audio>` | `MEDIA` | 🎵 | Embeds interactive sound players. |
| `tag-source` | `<source>` | `VOID` | 🔌 | Specifies alternative media formats inside picture, video, or audio elements. |
| `tag-track` | `<track>` | `VOID` | 📝 | Specifies text track options (subtitles, captions) for video or audio players. |
| `tag-picture` | `<picture>` | `MEDIA` | 🖼️ | Wraps multiple source files to serve optimized images for responsive design. |
| `tag-iframe` | `<iframe>` | `MEDIA` | 🔲 | Nest-embeds separate nested web documents. |
| `tag-embed` | `<embed>` | `MEDIA` | 🔌 | Integrates raw third-party interactive widgets. |
| `tag-object` | `<object>` | `MEDIA` | 📦 | Embeds external resources (like PDFs, images). |
| `tag-param` | `<param>` | `VOID` | ⚙️ | Defines parameters for object plugins. |
| `tag-map` | `<map>` | `MEDIA` | 🗺️ | Defines clickable client-side image maps. |
| `tag-area` | `<area>` | `VOID` | 📍 | Specifies geometric coordinates within image maps. |
| `tag-svg` | `<svg>` | `ADVANCED` | 📐 | Container for XML vector graphic models. |
| `tag-canvas` | `<canvas>` | `ADVANCED` | 🎨 | Provides raster graphic rendering surfaces powered by JavaScript script drawing tools. |

### Group 6: Tabular Data Grid Elements
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-table` | `<table>` | `BLOCK` | 📊 | Creates grids for tabular structured datasets. |
| `tag-thead` | `<thead>` | `STRUCTURE` | 🎓 | Groups table column headers. |
| `tag-tbody` | `<tbody>` | `STRUCTURE` | 📋 | Groups central data cells within tables. |
| `tag-tfoot` | `<tfoot>` | `STRUCTURE` | 📉 | Groups footer calculations inside table structures. |
| `tag-tr` | `<tr>` | `BLOCK` | ➖ | Creates rows in tables. |
| `tag-th` | `<th>` | `BLOCK` | 🥇 | Specifies header cells within rows. |
| `tag-td` | `<td>` | `BLOCK` | 📄 | Specifies standard data cells within rows. |
| `tag-caption` | `<caption>` | `STRUCTURE` | 🏷️ | Specifies legends or descriptions for tables. |
| `tag-colgroup`| `<colgroup>`| `STRUCTURE` | 🗂️ | Defines groups of styling properties applied to table columns. |
| `tag-col` | `<col>` | `VOID` | 💈 | Specifies styling rules for specific columns inside colgroups. |

### Group 7: Interactive Controls & Interactive Inputs
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-form` | `<form>` | `INTERACTIVE`| 📝 | Wraps collection zones compiling user interactive controls. |
| `tag-input` | `<input>` | `VOID` | 🔤 | Configures multi-functional input fields (text, email, color, date, range sliders). |
| `tag-textarea` | `<textarea>` | `INTERACTIVE`| 📝 | Configures multiline freeform text fields. |
| `tag-button` | `<button>` | `INTERACTIVE`| 🔘 | Generates clickable trigger controls. |
| `tag-select` | `<select>` | `INTERACTIVE`| 🔽 | Instantiates collapsible option pickers. |
| `tag-option` | `<option>` | `INTERACTIVE`| 📌 | Identifies options nested inside select pickers. |
| `tag-optgroup`| `<optgroup>`| `INTERACTIVE`| 📂 | Groups options inside select dropdown lists. |
| `tag-label` | `<label>` | `INTERACTIVE`| 🏷️ | Links accessible caption titles to input controls. |
| `tag-fieldset` | `<fieldset>` | `INTERACTIVE`| 🗂️ | Groups related inputs within a form shell. |
| `tag-legend` | `<legend>` | `INTERACTIVE`| 📛 | Declares headings for fieldsets. |
| `tag-datalist` | `<datalist>` | `ADVANCED` | 🔍 | Defines autocomplete choices database. |
| `tag-output` | `<output>` | `INTERACTIVE`| 💻 | Container showing computed outputs. |
| `tag-progress` | `<progress>`| `INTERACTIVE`| 📊 | Standard progress indicator bars. |
| `tag-meter` | `<meter>` | `INTERACTIVE`| 🌡️ | Standard indicator gauge displaying values within predefined boundaries. |
| `tag-details` | `<details>` | `INTERACTIVE`| 📂 | Creates expandable/collapsible details elements. |
| `tag-summary` | `<summary>` | `INTERACTIVE`| 🏷️ | Specifies title labels for details wrappers. |
| `tag-dialog` | `<dialog>` | `INTERACTIVE`| 💬 | Standard component representing modal or non-modal popup overlays. |

### Group 8: Web Components & Advanced Shell Templates
| Tag ID | Tag Name | Badge Category | Emoji | Functional Description / Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| `tag-template` | `<template>`| `ADVANCED` | 📑 | Wraps inactive HTML nodes cloned via scripts. |
| `tag-slot` | `<slot>` | `ADVANCED` | 📥 | Sets placeholders inside Shadow DOM components. |

---

## 🎨 Theme Presets Design Specifications

The platform includes 27 preset themes. Below is a detailed mapping of their color variables and style setups:

| Theme ID | Design Name | Vibe/Aesthetic Description | Primary Accent | Secondary Color | Background |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `dark` | Midnight Dark | Sleek, modern tech aesthetic | `#6c63ff` | `#3ecfcf` | `#0a0a1a` |
| `light` | Clean Light | Crisp, high contrast workspace design | `#5b54e6` | `#1aada0` | `#f0f0f8` |
| `ocean` | Deep Ocean | Professional tech dark blue aesthetic | `#64ffda` | `#57cbff` | `#0a192f` |
| `purple` | Neon Purple | Vaporwave inspired purple/pink theme | `#bf5af2` | `#ff6bcb` | `#13091f` |
| `green` | Forest Green | Matrix green style environment | `#4ade80` | `#22d3ee` | `#0a1a0f` |
| `dracula` | Dracula | Official Dracula palette theme | `#bd93f9` | `#ff79c6` | `#282a36` |
| `monokai` | Monokai | Classic editor Monokai theme | `#f92672` | `#a6e22e` | `#272822` |
| `solarized` | Solarized Dark | Warm blue-green workspace theme | `#b58900` | `#2aa198` | `#002b36` |
| `nord` | Nordic Frost | Clean cool arctic-inspired scheme | `#88c0d0` | `#81a1c1` | `#2e3440` |
| `synthwave` | Synthwave 84 | Glowing neon retrowave workspace aesthetic | `#ff7edb` | `#36f9f6` | `#262335` |
| `gruvbox` | Gruvbox Dark | Warm retro layout theme | `#fabd2f` | `#b8bb26` | `#282828` |
| `tokyo` | Tokyo Night | Modern Tokyo neon dark palette | `#7aa2f7` | `#bb9af7` | `#1a1b26` |
| `matrix` | The Matrix | Retro command console green vibe | `#00ff41` | `#008f11` | `#0d1112` |
| `cherry` | Cherry Blossom| Warm pastel pink and maroon aesthetic | `#ffb3d9` | `#e18bb3` | `#2a1e26` |
| `cafe` | Cozy Cafe | Pastel cream and brown theme | `#8c5e39` | `#bc8054` | `#f4ece1` |
| `sunset` | Outrun Sunset | Orange-to-pink gradient theme | `#ff4a8b` | `#ff952b` | `#190b24` |
| `cyber` | Cyber Neon | High contrast neon blue and gray theme | `#66fcf1` | `#45a29e` | `#0b0c10` |
| `hacker` | Term Hacker | Classic green matrix terminal layout | `#33ff00` | `#ffffff` | `#000000` |
| `vue` | Vue Green | Clean developer green look | `#41b883` | `#34495e` | `#34495e` |
| `blood` | Blood Moon | Dark red and deep black palette | `#e62e2e` | `#ff6b6b` | `#1a0404` |
| `halloween` | Halloween | Dark orange and purple theme | `#f97316` | `#a855f7` | `#18181b` |
| `ice` | Arctic Ice | Clean light blue design | `#0284c7` | `#0284c7` | `#e0f2fe` |
| `lava` | Magma Lair | Red-hot lava glow design | `#ff3d3d` | `#ffa600` | `#220000` |
| `discord` | Gamer Dark | Discord-like dark interface | `#5865F2` | `#eb459f` | `#36393f` |
| `rose` | Rose Pine | Minimal pastel look | `#ebbcba` | `#31748f` | `#191724` |

---

## 🏛️ Secondary Informational Portals

The application includes several secondary HTML files that handle specific pages, support flows, and information. These pages match the main application's theme structure and support responsive layouts.

### 1. About Portal (`about.html`)
The page [about.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/about.html) provides information about the developer and the project's goals.
- **Visual Design**: Sleek dark/light theme, modern typography, grid layouts, and cards explaining the developer's journey.
- **Sections**:
  - **Developer Profile**: Introduction to Sanskar (Full-Stack Developer & Educator).
  - **Project Mission**: The vision behind creating the HTML Mastery platform.
  - **Skills Portfolio**: Showcase of developer capabilities (HTML5, CSS3, JavaScript, etc.).
- **Branding logo**: Displays `about_logo.svg`.
- **Theme toggle**: Includes a theme toggle button that stores the user's preference in `localStorage`.

### 2. Developer Documentation Hub (`developer.html`)
Located at [developer.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/developer.html), this file serves as the documentation portal for contributors.
- **Visual Design**: Features dark and light themes, sidebar layout for navigation, responsive content cards, and styled code snippets.
- **Sections**:
  - **Getting Started**: Steps to run the project locally.
  - **Architecture Overview**: Deep dive into how HTML, CSS, and JS work together.
  - **CSS Variables Guide**: List of all style tokens and themes.
  - **JS Module APIs**: Instructions on how to add new tags or themes.
- **Branding logo**: Displays `html_logo.svg`.

### 3. Privacy Policy (`privacy.html`)
The file [privacy.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/privacy.html) outlines data handling policies.
- **Visual Design**: Minimalist reading layout, clear headings, custom lists, and a theme switcher.
- **Privacy Policy Details**:
  - **Data Collection**: No personal data is collected or sent to servers.
  - **Local Storage Usage**: All progress, themes, and configuration data are stored strictly within the user's browser.
  - **External CDN Services**: CodeMirror and font files are loaded from verified CDNs.
- **Branding logo**: Displays `privacy_logo.svg`.

### 4. Support and FAQ Portal (`support.html`)
Located at [support.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/support.html), this page handles user inquiries and reports.
- **Visual Design**: Grid-based FAQ layout, contact card designs, and a bug-reporting form.
- **Sections**:
  - **Frequently Asked Questions**: Details about progress saving, offline capabilities, and licensing.
  - **Contact & Feedback**: Action forms to contact support.
  - **Bug & Feature Requests**: Structured inputs for reporting issues.
- **Branding logo**: Displays `support_logo.svg`.

### 5. Terms of Service (`terms.html`)
The document [terms.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/terms.html) lists platform terms and usage policies.
- **Visual Design**: Clean typography, readable paragraph structures, and matching styling.
- **Terms Details**:
  - **Educational Purpose**: The platform is intended for learning purposes.
  - **License Conditions**: Code usage is subject to the MIT License.
  - **Third-Party Services**: Disclaimer regarding the CDN delivery of assets.
- **Branding logo**: Displays `terms_logo.svg`.

### 6. Acknowledgements Page (`thanks.html`)
The file [thanks.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/thanks.html) displays donation details and acknowledgments.
- **Visual Design**: Card layouts, donation buttons, payment qr guides, and custom styling.
- **Content**:
  - **Thank You message**: Expressing gratitude to community members and donors.
  - **Contribution Methods**: Information on how to support the developer via Buy Me a Coffee and Razorpay.

### 7. Custom Fallback Page (`404.html`)
Located at [404.html](file:///e:/All the Projects of the Sanskar/SANSKAR Folder/LangSteps/404.html), this page handles missing routes.
- **Visual Design**: Animated layout with dark themes, centralized content, and a stylized 404 message.
- **Content**:
  - **Error explanation**: Explains that the requested URL does not exist on the platform.
  - **Home redirection**: Link to navigate back to the main portal.

---

## 🎨 Layout & CSS Classes Catalog

To aid developers custom-styling or contributing layout properties, here is an indexed overview of key layout classes defined inside [Using Style for HTML Mastery.css](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/Using%20Style%20for%20HTML%20Mastery.css):

### Sidebar Components
- `.sb-head`: Top branding title header inside the navigation panel. Sets flexible alignment.
- `.sb-logo`: Vector branding element wrapper. Establishes circular borders.
- `.sb-title`: Big typography label defining panel name.
- `.sb-close`: Close button control appearing on mobile.
- `.sb-footer`: Base drawer region housing system preferences.
- `.theme-wrap`, `.font-wrap`: Settings selector wrappers managing fonts and themes.
- `.theme-gallery-btn`: Modal gallery activator styling.
- `.font-btns`: Container encapsulating text scale increments.

### Theme Panel
- `#themeModal`: Theme setup overlay. Styled with blurring glass background filters.
- `.tm-head`, `.tm-close`: Modal heading and close controls.
- `.tm-grid`: Adaptive grid listing available preset cards.
- `.theme-card`: Individual selector card styling.
- `.tc-colors`: Gradient band demonstrating theme properties.
- `.tc-name`: Title labels for theme cards.

### Tag Cards layout
- `.tag-card`: Core surface panels wrapping tag information. Sets card shadow properties.
- `.tc-header`: Title layout container within tags. Maintains flex alignments.
- `.tc-body`: Content container displaying tables and deep-dive explanations.
- `.tc-footer`: Base button wrapper containing reading triggers and mastery switches.
- `.cb`: Customized container wrappers packaging syntax pre elements.
- `.cb-h`: Title header for code blocks carrying copy commands.
- `.cb-b`: Monospaced layout region printing code contents.
- `.cp-btn`: Interactive try-it trigger launching playground modules.
- `.demo`: Interactive component showing visual outputs of code.
- `.tip`, `.warn`: Standard note overlays providing guidance or security suggestions.

---

## ⌨️ Keyboard Shortcuts Reference

The platform supports keyboard shortcuts to improve productivity during study sessions. These are configured globally and trigger layout state modifications:

| Shortcut Trigger | Mapping Action | Visual Behavior |
| :--- | :--- | :--- |
| `Alt + S` | Toggle Sidebar | Opens or collapses the primary tag navigation sidebar. |
| `Alt + F` | Focus Search | Places cursor focus on the sidebar tag search field. |
| `Alt + Q` | Open Quiz | Fires the quiz modal immediately. |
| `Alt + C` | Open Cheat Sheet | Triggers the quick references cheat sheet grid. |
| `Alt + P` | Open Playground | Instantiates the live editor code runner window. |
| `Alt + Z` | Zen Mode | Hides headers and sidebars to maximize reading focus. |
| `Escape` | Close Active Modal | Closes active system dialogs or sidebar layers. |

---

## 🎓 Gamification Mechanics Specification

To motivate developers, the platform uses a local progress system:
- **XP Accumulation**: Every completed tag rewards the user with **50 XP**.
- **Level Calculations**: Level value is determined as:
  $$\text{Level} = \lfloor \frac{\text{XP}}{500} \rfloor + 1$$
  This means that every 10 mastered tags, the user progresses to a new level.
- **Mastery Ranks**: Developer ranks are assigned based on the total count of mastered HTML tags:
  - **Novice**: $0 - 9$ tags completed.
  - **Apprentice**: $10 - 24$ tags completed.
  - **Intermediate**: $25 - 49$ tags completed.
  - **Expert**: $50 - 74$ tags completed.
  - **Wizard**: $75 - 99$ tags completed.
  - **HTML Grandmaster**: All $100$ tags completed.

---

## 🛠️ Development & Feature Extension Guide

This guide is designed for developers who wish to customize the platform, add new tags, or build custom themes.

### How to Add a New Tag
To document a new tag, follow these steps:
1. Open the [Using JS for HTML Mastery.js](file:///e:/All%20the%20Projects%20of%20the%20Sanskar/SANSKAR%20Folder/Web%20Development%20Mastery/Using%20JS%20for%20HTML%20Mastery.js) file.
2. Locate the global `TAGS` array.
3. Append a new object containing the required properties:
   ```javascript
   {
     id: "tag-tagname",
     title: "The <tagname> Tag",
     badge: "BADGE_CATEGORY",
     emoji: "🎯",
     content: `
       <h3>📌 What is it?</h3>
       <p>Description of the tag goes here...</p>
       <h3>📋 Attributes</h3>
       <table class="at">
         <tr><th>Attribute</th><th>Description</th></tr>
         <tr><td><code>attr</code></td><td>Purpose...</td></tr>
       </table>
     ` + codeBlock("Example Code", "html", `<!-- HTML code snippet -->`)
   }
   ```
4. Save the file. The `renderAll()` function will automatically render the new tag inside the navigation sidebar and tag grids, recalculate reading times, and update progress statistics.

### How to Add a New Theme
To add a new preset theme:
1. Open the [script.js](https://wwww.github.com/sanskarIN/LangSteps/blob/main/HTML/script.js) file.
2. Locate the global `PRESET_THEMES` array.
3. Insert a theme object matching the variable scheme:
   ```javascript
   {
     id: "my_theme",
     name: "My Custom Theme",
     bg: "#main-background-color",
     bg2: "#card-background-color",
     bg3: "#content-background-color",
     bg4: "#sidebar-footer-color",
     text: "#title-color",
     text2: "#body-text-color",
     text3: "#muted-text-color",
     accent: "#primary-highlight-color",
     accent2: "#secondary-highlight-color",
     accent3: "#tertiary-highlight-color",
     border: "#border-tint-color",
     card: "#card-background-color",
     codeBg: "#code-background-color",
     sbBg: "#sidebar-background-color",
     hdrBg: "linear-gradient(135deg, #accent, #bg)"
   }
   ```
4. The Theme Gallery grid will dynamically render a theme card for your new theme, allowing users to apply it immediately.

---

## 🛠️ Troubleshooting & Frequently Asked Questions

### Why is Speech Synthesis not working?
The Web Speech API requires user interaction (like clicking a button) before it can play audio. If it fails, ensure that you have clicked the **Listen** button and that your browser has speech engines installed. Note that browser privacy controls may block autoplay audio.

### Can I run the application offline?
Yes! The platform is designed to run entirely offline. You can clone the repo and double-click `index.html` to open it in your browser. All progress and customized themes are persisted locally within your browser's `localStorage` namespace.

### How do I backup or transfer my learning progress?
You can backup or migrate your XP, levels, and mastered tags using the Import/Export panel:
1. Scroll to the bottom of the navigation sidebar.
2. Click **Export** to download a `.json` backup file containing your progress.
3. On another device or browser, click **Import** and select the `.json` file to restore your progress.

---

## 🎨 SVG Vector Assets Inventory

To ensure high performance and sharp rendering at any zoom level, the platform uses scalable vector graphics (SVGs) for its iconography:

1. **Brand Identity Logo (`Sanskar Developer.svg`)**:
   - The central logo of the platform.
   - **Properties**: Defined using standard dimensions, a rounded background rect, and vector text elements displaying "SY SANSKAR DEVELOPER" in custom fonts.
2. **About Page Icon (`about_logo.svg`)**:
   - Customized brand SVG containing user representations and coding brackets.
3. **Developer Page Icon (`developer_icon.svg`)**:
   - Represents development tools, displaying a stylized terminal prompt graphic.
4. **HTML5 Technology Logo (`html_logo.svg`)**:
   - Vector version of the official HTML5 shield, colored with semantic orange and white gradients.
5. **Privacy Shield Icon (`privacy_logo.svg`)**:
   - A lock icon representing local storage data security.
6. **Support Center Icon (`support_logo.svg`)**:
   - Represents customer support, showing message balloons and question marks.
7. **Terms Agreement Icon (`terms_logo.svg`)**:
   - A document layout SVG representing guidelines and licensing.

---

## 💾 Local Storage Schema Reference

The platform stores all configuration and progress data locally. Below is the JSON schema of keys written to the browser's `localStorage`:

```json
{
  "themeMode": "dracula",
  "htmlUserXP": "2450",
  "hasVisitedGuide": "true",
  "userNameData": "Sanskar",
  "htmlMasteredTags": [
    "tag-a",
    "tag-img",
    "tag-table",
    "tag-div",
    "tag-semantic",
    "tag-p",
    "tag-span"
  ],
  "pgAutoSave": "<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>...</body>\n</html>",
  "pgLayout": "vertical",
  "customThemeObj": {
    "id": "custom",
    "name": "Custom Builder",
    "bg": "#1e1e2f",
    "bg2": "#27273f",
    "bg3": "#1e1e2f",
    "bg4": "#27273f",
    "text": "#ffffff",
    "text2": "#e2e2e2",
    "text3": "#b0b0b0",
    "accent": "#ff79c6",
    "accent2": "#8be9fd",
    "accent3": "#ff79c6",
    "border": "#ff79c633",
    "card": "#27273f",
    "codeBg": "#1e1e2f",
    "sbBg": "#27273f",
    "hdrBg": "linear-gradient(135deg, #27273f, #ff79c6)"
  }
}
```

---

## ♿ Accessibility & SEO Compliance

The platform implements modern accessibility (A11y) and search engine optimization (SEO) standards:
- **ARIA Landmark Roles**: Elements use roles (`role="main"`, `role="navigation"`, `role="complementary"`, `role="progressbar"`) to support screen readers.
- **Keyboard Access**: Features interactive skips (`Skip to main content` buttons) and focus highlights for keyboard navigation.
- **Labeling**: Every form and input is associated with an explicit label (`for="sbSearch"`, `aria-label`).
- **Contrast**: The theme system maintains accessible color contrast ratios.
- **Structured Headings**: The document uses a structured hierarchy, starting with a single `<h1>` on the main page followed by logical headings for tags and components.

---

## 🎨 Creating Custom Themes

To create custom themes, use the custom theme builder:
1. Open the **Theme Gallery** in the sidebar.
2. Scroll to the **Custom Theme Builder** section.
3. Configure the color pickers:
   - **Background color**: Main page color.
   - **Surface color**: Card surfaces.
   - **Text color**: Body copy.
   - **Accent color**: Primary branding color.
   - **Accent 2 color**: Secondary highlight color.
4. Click **Apply Custom Theme** to set the theme and save it to local storage.

---

## 🚀 Getting Started

To run the application locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/sanskarIN/LangSteps.git
   ```
2. Navigate to the directory:
   ```bash
   cd "LangSteps"
   ```
3. Open `index.html` in your browser.

*Note: You can run the split scripts if you want to develop the modules in separate files:*
```bash
# Using Node.js
node split_files.js

# Using PowerShell
.\split_files.ps1
```

---

## 🌐 Official Developer Ecosystem & Pages

Visit Sanskar's official web presence and developer channels:
- 👤 **About Sanskar**: [sanskarin.github.io/about](https://sanskarin.github.io/about)
- 📬 **Contact Form & Hub**: [sanskarin.github.io/contact/#send-a-message](https://sanskarin.github.io/contact/#send-a-message)
- 🚀 **All Projects Showcase**: [sanskarin.github.io/projects](https://sanskarin.github.io/projects)
- ✍️ **Tech Blog**: [sanskarin.github.io/blog](https://sanskarin.github.io/blog)
- 🐙 **GitHub Repository**: [github.com/sanskarIN/LangSteps](https://github.com/sanskarIN/LangSteps)

---

## 📧 Contact & Community

Connect with Sanskar across social and developer platforms:
- **Email**: [sanskarin@outlook.in](mailto:sanskarin@outlook.in)
- **Business Email**: [sanskarin.business@gmail.com](mailto:sanskarin.business@gmail.com)
- **Contact Form**: [sanskarin.github.io/contact/#send-a-message](https://sanskarin.github.io/contact/#send-a-message)
- **LinkedIn**: [@SanskarCodes](https://linkedin.com/in/SanskarCodes)
- **X (Twitter)**: [@SanskarCodes](https://x.com/SanskarCodes)
- **Dev.to**: [@SanskarCodes](https://dev.to/SanskarCodes)
- **Bluesky**: [@SanskarCodes.bsky.social](https://SanskarCodes.bsky.social)
- **Instagram**: [@SanskarCode](https://instagram.com/SanskarCode)
- **GitHub**: [@sanskarIN](https://github.com/sanskarIN)

---

## ☕ Support & Sponsorship

If you find value in LangSteps, tutorials, or open-source projects, consider supporting:
- ☕ **Buy Me a Coffee**: [buymeacoffee.com/SanskarCodes](https://buymeacoffee.com/SanskarCodes)
- ⚡ **Razorpay**: [razorpay.me/@SanskarCodes](https://razorpay.me/@SanskarCodes)

---

## 📄 License

This project is licensed under the **MIT License**. 
Copyright (c) 2026 Sanskar. All rights reserved.
