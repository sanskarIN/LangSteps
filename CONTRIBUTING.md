# 🤝 Contributing to LangSteps

Thank you for your interest in contributing to **LangSteps**! Every contribution helps make this free educational platform better for developers worldwide.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Commit Message Format](#commit-message-format)
- [Pull Request Process](#pull-request-process)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive environment. Be kind, constructive, and welcoming to all contributors.

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)
- Git installed on your system
- No additional dependencies required!

### Setup
1. **Fork** this repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/LangSteps.git
   cd LangSteps
   ```
3. **Open** any HTML file directly in your browser to start testing
4. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## 🛠️ How to Contribute

### 🐛 Bug Reports
- Open an issue with the **Bug Report** template
- Include steps to reproduce, expected behavior, and screenshots
- Specify which browser and OS you're using

### 💡 Feature Requests
- Open an issue with the **Feature Request** template
- Describe the feature, its benefits, and potential implementation approach

### 📝 Content Contributions
- **Add new concepts** to any module (HTML, CSS, JavaScript, React)
- **Improve existing explanations** with better examples or descriptions
- **Fix typos** and grammatical errors
- **Add quiz questions** to module quiz databases

### 💻 Code Contributions
- Fix bugs in JavaScript logic
- Improve CSS styling and responsiveness
- Add new features (themes, tools, accessibility improvements)
- Performance optimizations

---

## 📂 Project Structure

```
LangSteps/
├── index.html              # Landing page (Hub)
├── HTML/                   # HTML Mastery module
│   ├── index.html          # Main module page
│   ├── style.css           # Module styles
│   ├── script.js           # Module logic & data
│   ├── about.html          # Module about page
│   ├── developer.html      # Module dev docs
│   ├── privacy.html        # Privacy policy
│   ├── support.html        # Support & FAQ
│   ├── terms.html          # Terms of service
│   ├── thanks.html         # Thanks page
│   └── 404.html            # 404 error page
├── CSS/                    # CSS Mastery module (same structure)
├── JavaScript/             # JavaScript Mastery module
├── React/                  # React Mastery module
├── Python/                 # Python Mastery module (same structure)
├── TypeScript/             # TypeScript Mastery module (same structure)
├── Rust/                   # Rust Mastery module (same structure)
├── Go/                     # Go Mastery module (same structure)
├── SQL/                    # SQL Mastery module (same structure)
├── CSharp/                 # C# Mastery module (same structure)
├── about.html              # Root about page
├── developer.html          # Root developer docs
├── privacy.html            # Root privacy policy
├── support.html            # Root support page
├── terms.html              # Root terms of service
├── thanks.html             # Root thanks page
├── 404.html                # Root 404 page
├── Follow-Sanskar.html     # Follow developer page
├── playground.html         # Standalone code playground
├── quiz.html               # Interactive multi-language quiz
├── glossary.html           # Searchable programming glossary
├── cheatsheet.html         # Quick reference cheat sheets
├── resources.html          # Curated learning resources
├── bookmarks.html          # Bookmark management page
├── progress-dashboard.html # Learning progress dashboard
├── changelog-viewer.html   # Visual changelog viewer
├── compare.html            # Framework comparison tool
├── roadmap-detail.html     # Interactive learning roadmap
├── snippets.html           # Code snippets library
├── tips.html               # Daily programming & architecture tips
├── tools.html              # Interactive CSS tools
├── interview.html          # Interview questions & answers
├── certificates.html       # Learning certificates & badges
├── challenges.html         # Coding challenges
├── community.html          # Community hub
├── flashcards.html         # Interactive flashcard study
├── shortcuts.html          # Developer keyboard shortcuts
├── projects.html           # Project ideas gallery
├── accessibility-checker.html # HTML A11y checker tool
├── performance.html        # Web performance guide
├── design-patterns.html    # JavaScript design patterns
├── regex-tester.html       # Interactive regex tester
├── color-converter.html    # Color converter & palette tool
├── api-reference.html      # Web APIs quick reference
├── animations.html         # CSS animation playground
├── sitemap.xml             # XML sitemap
├── robots.txt              # Crawler directives
├── manifest.json           # PWA web app manifest
├── sw.js                   # Service worker for offline caching
├── humans.txt              # Team credits
├── .editorconfig           # Editor configuration
├── .prettierrc             # Prettier formatting config
├── README.md               # Project documentation
├── CONTRIBUTING.md         # This file
├── CHANGELOG.md            # Version history
├── CODE_OF_CONDUCT.md      # Community guidelines
├── SECURITY.md             # Security policy
├── LICENSE                 # MIT License
└── .github/
    ├── FUNDING.yml         # GitHub Sponsors config
    ├── README.md           # GitHub profile README
    ├── PULL_REQUEST_TEMPLATE.md
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── workflows/
        ├── deploy.yml      # GitHub Pages deployment
        └── lint.yml        # HTML linting CI
```

---

## 📐 Development Guidelines

### General Rules
1. **Zero dependencies** — Do not add npm packages, build tools, or frameworks
2. **Inline everything** — Module pages use inline `<style>` and `<script>` tags
3. **Browser-only** — All code must run in the browser without a server
4. **Offline-first** — Features should work without internet (after initial load)

### CSS Guidelines
- Use CSS custom properties (variables) defined in `:root`
- Follow the existing naming convention (BEM-inspired, lowercase with dashes)
- Ensure dark theme AND light theme compatibility
- Add responsive styles for mobile (768px), tablet (1024px), desktop (1280px+)

### JavaScript Guidelines
- Use vanilla ES6+ JavaScript (no jQuery, no frameworks)
- Store user data in `localStorage` only
- Use `const` and `let` (never `var`)
- Add JSDoc comments for complex functions

### HTML Guidelines
- Use semantic HTML5 elements
- Include `aria-label` for interactive elements
- Ensure all images have `alt` attributes
- All links should have `rel="noopener"` for external targets

### Adding a New Concept to a Module
1. Open the module's `script.js` file
2. Add a new entry to the data array following the existing schema:
   ```javascript
   {
     id: 'concept-name',
     title: 'Concept Title',
     badge: 'CATEGORY',
     emoji: '🎯',
     content: `<p>Your explanation here...</p>`
   }
   ```
3. Include description, code examples, live demos, and best practices

### Adding a New Theme
1. Open any module's `script.js` file
2. Add to the `PRESET_THEMES` array:
   ```javascript
   {
     id: 'theme-id',
     name: 'Theme Name',
     bg: '#000000', bg2: '#111111', bg3: '#222222', bg4: '#333333',
     text: '#ffffff', text2: '#cccccc', text3: '#999999',
     accent: '#ff0000', accent2: '#00ff00', accent3: '#0000ff',
     border: 'rgba(255,255,255,0.1)',
     card: '#1a1a1a', codeBg: '#0d0d0d',
     sbBg: '#111111',
     hdrBg: 'linear-gradient(135deg, #000 0%, #111 100%)'
   }
   ```

---

## 📝 Commit Message Format

We use **emoji-prefixed** commit messages for clarity:

| Emoji | Type | Example |
|-------|------|---------|
| 🐛 | Bug fix | `🐛 Fix broken SVG icon in footer` |
| ✨ | New feature | `✨ Add dark mode toggle to about page` |
| 🎨 | UI/Style improvement | `🎨 Improve mobile responsive layout` |
| 📝 | Documentation | `📝 Update README with new features` |
| ♿ | Accessibility | `♿ Add ARIA labels to navigation` |
| 🔧 | Configuration | `🔧 Update .gitignore patterns` |
| 🗑️ | Remove code/files | `🗑️ Remove deprecated utility script` |
| 🔗 | Fix links | `🔗 Fix broken module navigation links` |
| ⚡ | Performance | `⚡ Optimize image loading with lazy load` |

---

## 🔄 Pull Request Process

1. **Ensure** your code follows the development guidelines above
2. **Test** your changes in at least 2 browsers (Chrome + Firefox recommended)
3. **Update** documentation if your changes affect user-facing features
4. **Create** a Pull Request with:
   - Clear title describing the change
   - Description of what was changed and why
   - Screenshots for visual changes
   - Reference to related issues (if any)
5. **Wait** for review — maintainers will review and provide feedback

---

## 💌 Contact

- **Email**: sanskarin@outlook.in
- **GitHub**: [@sanskarIN](https://github.com/sanskarIN)

Thank you for helping make LangSteps better! 🚀
