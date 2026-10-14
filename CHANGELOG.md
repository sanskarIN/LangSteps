# 📝 Changelog

All notable changes to **LangSteps** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.0] — 2026-10-14

### 🎉 LangSteps v1.0.0 — Official Stable Production Release
- **Unified Sitemaps & Ecosystem Showcase**:
  - Implemented dedicated `footer.html` page featuring comprehensive 10-module sitemaps, interactive theme previews (Dark, Slate Dim, Cyberpunk), and embeddable component code.
  - Linked `footer.html` across dashboard and platform footers.
- **Full Social & Payment Cleanup**:
  - Purged 100% of YouTube channel links, icons, cards, and mentions across all 44 HTML pages, README, CONTRIBUTING, TypeScript, and server files.
  - Removed 100% of Gumroad links and promotional store buttons across all HTML files, TypeScript types, and documentation.
  - Replaced legacy payment image assets with clean SVG icons, CSS cards, and unified donation links (Buy Me a Coffee & Razorpay).
- **TypeScript Subsystem Expansion (`src/`)**:
  - Added `RustModule` (`src/modules/rustModule.ts`) exposing 35 systems concepts and simulated borrow checker diagnostics.
  - Added `CSharpModule` (`src/modules/csharpModule.ts`) modeling modern C# 13, LINQ pipelines, and ASP.NET Core Minimal APIs.
  - Added `BenchmarkEngine` (`src/modules/benchmarkEngine.ts`) for client micro-benchmarks with complexity estimation.
  - Added `StateManager` (`src/core/stateManager.ts`) for reactive state persistence and listener subscriptions.
  - Added `ApiGateway` (`src/services/apiGateway.ts`) connecting web clients with offline fallback simulation.
- **ASP.NET Core Subsystem Expansion (`server/LangSteps.Server`)**:
  - Added `ExtendedModels.cs` defining DTOs for Rust curriculum, telemetry, benchmarks, and feedback.
  - Added `RustService.cs` providing Rust 2024 Edition curricula and borrow checker diagnostics (E0382, E0499, E0502, E0106).
  - Added `StatsService.cs` calculating system telemetry, process memory, and benchmark suites.
  - Added `FeedbackService.cs` collecting inquiries and feedback with validation.
  - Added endpoints: `/api/rust/curriculum`, `/api/rust/category/{cat}`, `/api/rust/diagnose`, `/api/stats/extended`, `/api/benchmark/suite`, `/api/feedback/submit`.
- **Rust Systems Mastery**:
  - 35 comprehensive systems engineering concepts across 6 tracks.
  - Interactive rustc borrow checker diagnostics and ASCII source annotations.
  - Zero-broken cross-module navigation.


### 🌐 Official Developer Ecosystem & Social Unification
- **Canonical Ecosystem Links**:
  - Integrated canonical About page: [sanskarin.github.io/about](https://sanskarin.github.io/about) with prominent bridge banners.
  - Integrated canonical Contact form: [sanskarin.github.io/contact/#send-a-message](https://sanskarin.github.io/contact/#send-a-message) and created dedicated `contact.html` bridge page with interactive email builder, web form anchor, and direct channels.
  - Integrated canonical Projects showcase: [sanskarin.github.io/projects](https://sanskarin.github.io/projects) and updated `projects.html` with polyglot project tracks (Python, TypeScript, C# / ASP.NET).
  - Integrated canonical Tech Blog: [sanskarin.github.io/blog](https://sanskarin.github.io/blog) and created `blog.html` tech blog showcase with Dev.to articles.
- **Updated Social & Support Presence Across All 60+ Pages**:
  - Buy Me a Coffee: `https://buymeacoffee.com/SanskarCodes`
  - Razorpay: `https://razorpay.me/@SanskarCodes`
  - LinkedIn: `https://linkedin.com/in/SanskarCodes`
  - X (Twitter): `https://x.com/SanskarCodes`
  - Dev.to: `https://dev.to/SanskarCodes`
  - Bluesky: `https://SanskarCodes.bsky.social`
  - Instagram: `https://instagram.com/SanskarCode`
  - Threads: `https://threads.com/SanskarCode`

### 🔷 TypeScript Subsystem Expansion (`src/`)
- **Developer Profile Core**: Added `src/types/profile.ts` and `src/core/profileManager.ts` managing official profile metadata and links.
- **Execution Engine**: Added `src/modules/playgroundEngine.ts` enabling client-side multi-language code simulation with metrics.
- **Curriculum & Quiz Controllers**: Added `src/modules/quizModule.ts` and `src/modules/pythonModule.ts` controllers for programmatic curriculum access.
- **Packaging & Build**: Updated `package.json` to v1.1.0 with comprehensive keywords, author info, and repository link.

### 🎯 ASP.NET Core Backend Enhancements (`server/LangSteps.Server`)
- **Profile & Statistics Endpoints**:
  - `GET /api/profile`: Full developer profile model with official links.
  - `GET /api/profile/socials`: Verified social profiles.
  - `GET /api/profile/ecosystem`: Canonical ecosystem URLs.
  - `GET /api/stats/summary`: Platform summary metrics across all languages.
- **Interactive Execution Runner**:
### 🦀 Rust Systems Mastery — Full Curriculum & Diagnostics (NEW)
- **35 In-Depth Systems Concepts**: Completely replaced generic placeholders with 35 authentic, detailed concepts across 6 pedagogical tracks: Basics & Control Flow, Memory & Ownership, Data Modeling, Functional Idioms, Concurrency & Async, and Systems & Macros.
- **Compiler & Borrow Checker Diagnostics**: Implemented simulated `rustc` diagnostics in both TypeScript and ASP.NET Core, detecting moved value usage (`error[E0382]`) and multiple mutable borrows (`error[E0499]`) with ASCII code frame formatting.
- **Cross-Module Navigation & Categories**: Upgraded `Rust/index.html` with cross-module bar to all 10 platform modules, direct link to Rust Quiz (`quiz.html?lang=rust`), category filter pills, sample loader, and 25 theme presets.
- **Fixed Cross-Module Links**: Corrected legacy broken `../JS/` links to `../JavaScript/` in `React/developer.html`, `Go/index.html`, and `CSharp/index.html`.

---

## [5.3.0] — 2026-10-14

### 🚀 LangSteps Rebrand & Platform Unification
- **Full Platform Rebrand**: Renamed project to **LangSteps** (`https://github.com/sanskarIN/LangSteps`) across all 101 core repository files, HTML tags, headers, documentation, manifests, and meta tags.
- **Unified Navigation**: Synchronized cross-module navigation bar linking HTML, CSS, JavaScript, React, Python, TypeScript, Rust, Go, SQL, C#, and Quiz Hub across modules.

### 🐍 Python Module — Full HTML/CSS Quality Alignment
- **Matching Glassmorphic UI**: Updated `Python/index.html` and `Python/style.css` to match the exact layout, visual fidelity, and statistics of HTML/CSS modules.
- **Comprehensive Header Stats**: Added 100 Concepts counter, Mastery Level (1-10), Mastered count, Favorites, Min Read, Rank, and Donate triggers.
- **Concept of the Day**: Added daily rotating concept card with instant deep-link jump.
- **Sidebar & Category Select**: Searchable concept list, category dropdown filter (`#sbFilter`), export/import progress buttons, and font size adjustment.
- **Interactive Python Sandbox**: Enhanced simulated interpreter with print statement regex parsing, variables, f-string interpolation, and execution status.
- **25+ Curated Themes**: Extended `PRESET_THEMES` to 25 hand-crafted palettes (Midnight Dark, Cyberpunk, Synthwave, Dracula, Nord, Monokai, Ocean, Gruvbox, Tokyo Night, Matrix, Emerald, Solarized, and more).

### 🔷 TypeScript Client Infrastructure (NEW)
- **Modular TypeScript Architecture**: Implemented full `src/` codebase with strict types and compilation pipeline:
  - `src/types/index.ts`: Strongly typed interfaces for `Theme`, `Concept`, `ModuleInfo`, `QuizQuestion`, `QuizSubmission`, `QuizResult`, and `UserProgress`.
  - `src/core/themeEngine.ts`: Type-safe theme switching, 25 preset theme registry, and DOM CSS custom property injector.
  - `src/core/progressManager.ts`: LocalStorage persistence, XP mechanics, level/rank calculation, and JSON export/import.
  - `src/core/quizEngine.ts`: Pure scoring engine, speed bonus calculations, performance tier badge assignment, and question reviews.
  - `src/core/apiClient.ts`: Strongly typed API client connecting to ASP.NET Core backend with automatic offline fallback.
  - `src/index.ts`: Application bootstrap and public API.
- **Build Scripts**: Added `"build": "tsc"`, `"watch": "tsc --watch"`, and `"typecheck": "tsc --noEmit"` to `package.json`.

### 🎯 ASP.NET Core Web API Backend (NEW)
- **Enterprise C# Server**: Created `server/LangSteps.Server` targeting `.NET 10.0` Minimal APIs.
- **Full Static Site & API Hosting**: Serves the entire LangSteps static frontend alongside REST endpoints when launched via `dotnet run`.
- **REST Endpoints**:
  - `GET /api/health`: Platform status, version, runtime details, and catalog counts.
  - `GET /api/modules`: Complete 10-module catalog with concept and category counts.
  - `GET /api/modules/{id}`: Detailed metadata for a specific language module.
  - `GET /api/quiz/{language}`: Curated educational quiz question sets.
  - `POST /api/quiz/submit`: Validates answers, awards speed bonuses, assigns tiers, and returns explanations.
  - `GET /api/leaderboard`: Returns top 10 global learners.
  - `POST /api/leaderboard`: Submits new learner high scores.
- **Cross-Origin Resource Sharing (CORS)**: Configured to support remote frontend integration and GitHub Pages hosting.

---

## [5.2.0] — 2026-10-14

### 🐍 Python Mastery — Expanded to Complete Curriculum (100 Concepts)
- **100 In-Depth Engineering Concepts**: From fundamental syntax, memory references, dynamic arrays, and dictionaries to asyncio coroutines, multithreading, multiprocessing, Django, Flask, FastAPI, SQLAlchemy, NumPy, Pandas, Scikit-learn, Metaclasses, Descriptors, Garbage Collection, and CPython bytecode optimization.
- **Modern Interactive UI**: Added category filter pills (Basics, Data Structures, OOP, Async, Web, Data Science, Advanced, Modern Python), code playground with execution simulation, copy code, reset, and quick quiz shortcuts.
- **Scaled Gamification**: Extended ranking progression through 100 concepts from *Python Novice* to *Python Grandmaster* with live XP counters.

### 🎯 LangSteps Quiz Hub (NEW)
- **Multi-Language Knowledge Testing**: Standalone quiz engine testing real-world engineering concepts across all 10 platform languages (HTML, CSS, JavaScript, React, Python, TypeScript, Rust, Go, SQL, C#).
- **200 Curated Educational Questions**: 20 rigorous questions per language with 4 options, 30-second timers, instant explanations, and performance tier badges (Master, Expert, Advanced, Intermediate, Beginner).
- **Interactive Landing Section**: Dedicated Quiz Hub showcase on the landing page with direct language selectors and deep-linking query support (`quiz.html?lang=...`).
- **Persistent Leaderboard**: Tracks personal best scores per language and history across sessions using localStorage.

### 📊 Platform Milestone
- **1,000+ Total Engineering Concepts** across 10 modules
- **610+ Atomic Commits** maintaining clean documentation and individual git histories

---

## [5.1.0] — 2026-10-05

### 🔷 TypeScript Module — Enhanced (50 Concepts)
- Added 20 advanced concepts: Branded Types, Recursive Types, Type Narrowing, Module Augmentation, TypeScript with Express/Node.js, Migration guide, and more

### 💜 C# Module (NEW)
- 40 concepts covering core C#, OOP, LINQ, async/await, ASP.NET Core, Entity Framework, Web API, SignalR, testing, and design patterns
- Full gamification, 25+ themes, code playground
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 📊 Platform Growth
- 10 learning modules: HTML, CSS, JavaScript, React, Python, TypeScript, Rust, Go, SQL, C#
- Total concepts: 900+

---

## [5.0.0] — 2026-10-02

### 🐍 Python Module — Complete Mastery (50 Concepts)
- Rewrote Python/script.js with 50 comprehensive concepts
- Concepts 1-30: Core Python (variables, OOP, async, decorators, pattern matching)
- Concepts 31-50: Advanced (closures, metaclasses, itertools, threading, web scraping, testing, logging, SQLite, CSV, JSON)
- Full gamification, 25+ themes, code playground

### 🔷 TypeScript Module (NEW)
- 30 concepts: Type Annotations, Interfaces, Generics, Utility Types, Conditional Types, Mapped Types, Decorators, Declaration Files, and more
- Full gamification, code playground, 25+ themes
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 🦀 Rust Module (NEW)
- 30 concepts: Ownership, Borrowing, Lifetimes, Traits, Generics, Smart Pointers, Concurrency, Async, Macros, Unsafe, and more
- Full gamification, code playground, 25+ themes
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 🐹 Go Module (NEW)
- 30 concepts: Goroutines, Channels, Interfaces, Error Handling, Generics, HTTP Server, Context, Reflection, and more
- Full gamification, code playground, 25+ themes
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 🗄️ SQL Module (NEW)
- 30 concepts: JOINs, Subqueries, Window Functions, CTEs, Transactions, Indexes, Views, Normalization, and more
- Full gamification, code playground, 25+ themes
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 🧭 Navigation
- Updated cross-module navigation across all modules
- 9 learning modules: HTML, CSS, JavaScript, React, Python, TypeScript, Rust, Go, SQL
- Total concepts: 800+

---

## [4.0.0] — 2026-09-28

### 🎉 Major Rebrand — LangSteps
- Project renamed from "LangSteps" to **LangSteps**
- Updated all internal references, URLs, titles, and meta tags
- New repository: `github.com/sanskarIN/LangSteps`
- New GitHub Pages URL: `sanskarin.github.io/LangSteps`

### 🐍 Python Module (NEW)
- Complete Python learning module with 30 concepts
- Topics: Variables, Data Types, Strings, Lists, Tuples, Dicts, Sets, Loops, Functions, Lambda, List Comprehensions, Error Handling, File I/O, Classes, Inheritance, Decorators, Generators, Iterators, Context Managers, Regex, Modules, Virtual Environments, pip, async/await, Type Hints, dataclasses, f-strings, Walrus Operator, Pattern Matching
- Full gamification (XP, ranks, mastered tracking)
- 25+ theme presets, code playground, favorites, search
- Secondary pages: about, developer, privacy, support, terms, thanks, 404

### 🚀 GitHub Pages Deployment
- Updated deployment workflow for LangSteps
- Live at: `https://sanskarin.github.io/LangSteps/`

### 🧭 Navigation
- Added Python to cross-module navigation in all module index pages
- Added Python module card to landing page
- Updated footer with Python Mastery link

---

## [3.4.0] — 2026-09-28

### 🆕 New Feature Pages
- **Design Patterns** (`design-patterns.html`) — 15+ JavaScript patterns: Singleton, Factory, Observer, Strategy, Decorator, and more
- **Regex Tester** (`regex-tester.html`) — Interactive regex testing with real-time highlighting, preset patterns, and cheat sheet
- **Color Converter** (`color-converter.html`) — HEX/RGB/HSL conversion, palette generator, WCAG contrast checker
- **Web APIs Reference** (`api-reference.html`) — Quick reference for DOM, Fetch, Storage, Canvas, Web Workers, and 12+ browser APIs
- **CSS Animations** (`animations.html`) — Live animation playground with presets, timing controls, and CSS output

### 📄 HTML Module — 10 New Concepts
- `<dialog>`, `<details>/<summary>`, `<template>`, `<picture>`, `<datalist>`, `<meter>`, `<progress>`, `<output>`, `<mark>`, `<time>`

### 🎨 CSS Module — 10 New Concepts
- Container Queries, `:has()`, Subgrid, `accent-color`, `aspect-ratio`, Scroll Snap, `color-mix()`, `@layer`, `:is()/:where()`, View Transitions

### 🏠 Landing Page Enhancements
- **Live Code Preview** — Try It Yourself split-pane editor with live preview
- **Enhanced Testimonials** — Auto-scrolling horizontal carousel with dot indicators
- **Version bump** to v3.4
- Updated footer with links to all new v3.4 pages

---

## [3.3.0] — 2026-09-23

### 🆕 New Feature Pages
- **Interactive Flashcards** (`flashcards.html`) — 40+ flip cards with category filters, shuffle, keyboard navigation, mastery tracking
- **Keyboard Shortcuts Reference** (`shortcuts.html`) — VS Code, DevTools, Terminal, and Git shortcuts with search and platform toggle
- **Project Ideas** (`projects.html`) — 25+ project ideas by difficulty with tech tags and estimated completion time
- **Accessibility Checker** (`accessibility-checker.html`) — Paste HTML code and get instant A11y audit with severity badges and score
- **Performance Guide** (`performance.html`) — Optimization techniques with code examples and performance score simulator

### 🔍 SEO — Structured Data
- Added JSON-LD `Course` schema to index.html (Google rich results)
- Added JSON-LD `WebSite` schema with search action
- Added `<link rel="canonical">` to all root HTML pages
- Added `og:url` meta tags to pages missing them

### 🧭 Module Navigation
- Added cross-module navigation banner (HTML → CSS → JS → React → Home) to all 4 module index pages
- Added floating "Home" button (fixed bottom-left) to all 4 module index pages

---

## [3.2.0] — 2026-09-23

### 🆕 New Feature Pages
- **Interactive CSS Tools** (`tools.html`) — Color palette generator, gradient builder, box shadow generator, border radius visualizer, font pair suggestions
- **Interview Questions** (`interview.html`) — 50+ interview questions with collapsible answers, difficulty badges, topic filters
- **Learning Certificates** (`certificates.html`) — Earn certificates for module completion, download as image, share buttons
- **Coding Challenges** (`challenges.html`) — 20+ coding challenges with beginner/intermediate/advanced levels, progress tracking
- **Community Hub** (`community.html`) — Contributor wall of fame, discussion topics, open source stats

### 🎨 Landing Page Enhancements
- **"What You'll Learn" Section** — 8-card grid of learning outcomes with icons and descriptions
- **"Built With" Tech Stack Section** — Scrolling technology badges with hover animations
- **"Open Source Stats" Section** — Animated counters for commits, pages, concepts, themes
- Updated footer with links to all 5 new pages

### 🐦 SEO — Twitter Cards
- Added `twitter:card`, `twitter:site`, `twitter:creator` meta tags across all HTML files
- Twitter handle: `@SanskarCodes`

### 🔧 CI/CD
- Added production GitHub Pages deployment workflow

---

## [3.1.0] — 2026-09-21

### 🔗 Link & Contact Updates
- Cleaned up legacy store references across 40+ files
- Updated all BMC links to `www.buymeacoffee.com/sanskarIN`
- Updated business email #1: `sanskarin@outlook.in`
- Updated business email #2: `sanskarin.business@gmail.com`
- Support email: `sanskarin@outlook.in`

### ⚛️ React Module Enhancements (20 new concepts)
- React.memo, React.lazy & Suspense, Error Boundaries, React Portals
- React.forwardRef, useImperativeHandle, useLayoutEffect
- useDeferredValue, useTransition, useId
- Server Components, Concurrent Rendering, Automatic Batching
- React Compiler, React Testing Library, React Router v6
- Redux Toolkit, TanStack Query, Next.js Integration
- React Performance Profiling

### 🆕 New Feature Pages
- **Framework Comparison** (`compare.html`) — React vs Vue vs Angular vs Svelte comparison tool
- **Detailed Learning Roadmap** (`roadmap-detail.html`) — Interactive 4-phase learning path with localStorage progress
- **Code Snippets Library** (`snippets.html`) — 40+ curated snippets with copy-to-clipboard
- **Daily Programming Tips** (`tips.html`) — 30+ tips organized by category with random tip generator

### 🔍 SEO
- Added 4 new pages to sitemap.xml
- Fixed commit-graph integrity

---

## [3.0.0] — 2026-09-21

### 🚀 Major New Features
- **Progressive Web App (PWA)** — Full offline support with service worker caching, web app manifest for installability, and Apple touch icon support
- **Standalone Code Playground** (`playground.html`) — Split-pane code editor with HTML/CSS/JS panels and live preview iframe
- **Interactive Quiz Page** (`quiz.html`) — Multi-language quiz with score tracking, timer, progress bar, and localStorage best score
- **Progress Dashboard** (`progress-dashboard.html`) — Learning analytics with XP tracking, module progress bars, streaks, and circular progress rings
- **Searchable Glossary** (`glossary.html`) — 50+ software engineering terms with A-Z alphabetical listing, live search, and expandable definitions
- **Cheat Sheet Reference** (`cheatsheet.html`) — Tabbed reference for HTML tags, CSS properties, JS methods, and React hooks with copy-to-clipboard
- **Bookmarks System** (`bookmarks.html`) — localStorage-based bookmarking with search, filter, timestamps, and bulk management
- **Resources Directory** (`resources.html`) — Curated programming resources organized by Learning Platforms, Dev Tools, Design Resources, API References, and Community
- **Visual Changelog Viewer** (`changelog-viewer.html`) — Timeline-formatted release notes with color-coded badges and scroll animations

### 🛡️ Security & Compliance
- Added `SECURITY.md` — Vulnerability reporting policy with structured disclosure process
- Added `CODE_OF_CONDUCT.md` — Contributor Covenant v2.1 community guidelines

### 🔧 CI/CD & Infrastructure
- Added GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) — Auto-deploy to GitHub Pages on push to main
- Added HTML linting workflow (`.github/workflows/lint.yml`) — Automated HTML validation on PRs
- Added GitHub Issue Templates — Structured bug report and feature request forms
- Added Pull Request Template — PR checklist with description, testing, and screenshots
- Added GitHub Sponsors Funding configuration (`.github/FUNDING.yml`)
- Added `.editorconfig` — Cross-editor coding style consistency
- Added `.prettierrc` and `.prettierignore` — Prettier code formatting configuration

### ♿ Accessibility Improvements
- Added ARIA labels to 404.html navigation elements
- Added descriptive alt text to about.html images
- Added skip-to-main-content navigation to developer.html
- Added proper form labels to support.html inputs
- Fixed heading hierarchy in privacy.html (h1 → h2 → h3)
- Added landmark roles to terms.html sections
- Improved focus management in thanks.html
- Added lang attribute to Follow-Sanskar.html

### 🔍 SEO & Performance
- Updated sitemap.xml with September 2026 lastmod dates
- Added crawl delay to robots.txt
- Added SEO meta robots tags across all 40+ HTML files
- Added PWA manifest for enhanced mobile discoverability

### 📄 Documentation
- Added `humans.txt` — Team credits and technology stack
- Added `.github/README.md` — Project badges and quick links
- Updated `.gitignore` with Python and automation exclusions
- Updated `CHANGELOG.md` — This comprehensive release document

---

## [2.1.0] — 2026-08-30

### 🐛 Bug Fixes
- Fixed truncated GitHub SVG icon in creator section of landing page
- Fixed footer quick links pointing to `#` instead of actual page files (privacy.html, terms.html, thanks.html, 404.html)
- Fixed LinkedIn social link with invalid leading space in href attribute
- Fixed broken `JS/index.html` module links across developer.html, support.html, and Follow-Sanskar.html (changed to `JavaScript/index.html`)
- Fixed theme localStorage key inconsistency in support.html (`hub-theme` → `hubMasteryTheme`)

### ✨ New Features
- **Keyboard Shortcuts Modal** — Press `Ctrl+K` to open a navigation shortcut guide (module jumps, theme toggle, donate)
- **Learning Roadmap Timeline** — Step-by-step visual timeline showing HTML → CSS → JavaScript → React progression path
- **Testimonials Section** — Social proof section with developer quotes and avatar cards
- **FAQ Accordion** — 6 collapsible frequently asked questions with smooth animations and ARIA accessibility
- **Newsletter Signup** — Client-side email subscription form with localStorage persistence
- **Cookie Consent Banner** — Non-intrusive localStorage consent banner
- **Enhanced Stats Counter** — Additional stat cards for themes (25+) and pages (42)

### 🎨 UI/UX Improvements
- **Smooth Scroll Reveal Animations** — IntersectionObserver-based fade-up animations for all sections
- **Progress Ring Scroll-to-Top** — Circular SVG progress indicator replacing simple scroll button
- **Prefers-Reduced-Motion Support** — Respects user accessibility preferences to disable animations
- **Print Stylesheet** — Clean print layout hiding interactive elements
- **Active Navbar Highlighting** — Highlights the currently visible section's navigation link

### 📄 Secondary Pages
- Added scroll-to-top button to all 7 secondary pages
- Fixed developer.html placeholder social links and missing footer bottom bar
- Added missing meta tags (favicon, theme-color, og:image, JSON-LD) across all pages
- Added ARIA accessibility attributes across all pages
- Fixed improperly nested BMC buttons in privacy.html and terms.html
- Added missing X/Twitter social icon in thanks.html and 404.html footers
- Added Follow-Sanskar link to developer.html and support.html navigation

### 🔧 SEO & Performance
- Added `sitemap.xml` with complete page listing for search engines
- Added `robots.txt` with sitemap reference
- Added security meta tags (X-Content-Type-Options, Referrer-Policy) across all pages

### 📖 Documentation
- Added `CONTRIBUTING.md` — open-source contributor guide with development guidelines
- Added `CHANGELOG.md` — this file

---

## [2.0.0] — 2026-08-01

### ✨ Major Features
- Complete platform with 4 modules: HTML, CSS, JavaScript, React
- 500+ concepts with deep-dive explanations
- Live code sandboxes with CodeMirror integration
- 25+ premium themes with custom theme builder
- Gamified progress tracking with XP and levels
- Quiz system with score tracking
- Cheat sheets for all modules
- Mastery Center with interview Q&A and flashcards
- Command Palette (Ctrl+K) for module navigation
- Zen Mode for distraction-free learning
- Text-to-Speech accessibility
- Export/Import progress across devices
- Full responsive design for all screen sizes
- Premium glassmorphic dark UI
- Splash screen with logo animation
- Donate overlay with Razorpay integration
- Buy Me a Coffee integration across all pages

### 📄 Pages
- Landing page (index.html) with module cards
- About page with developer profile
- Developer documentation hub
- Privacy policy
- Support & FAQ portal
- Terms of service
- Thanks & acknowledgements page
- Custom 404 error page
- Follow Sanskar social links page
- Module-specific versions of all secondary pages (×4 modules = 28 pages)

---

## [1.0.0] — 2026-01-01

### ✨ Initial Release
- HTML Mastery module with 100 tags
- Basic progress tracking
- Single theme support
- Core code playground
