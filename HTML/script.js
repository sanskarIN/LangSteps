// ===== SPLASH SCREEN =====
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 800);
  }
}, 2000);

// ===== THEME DATA =====
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

// ===== TAG DATA =====
const TAGS = [
  // 1
  {
    id: "tag-a", title: 'The <a> (Anchor) Tag', badge: "INLINE", emoji: "🔗", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;a&gt;</code> tag creates <strong>hyperlinks</strong> — the fundamental building block of the web. It connects pages, files, email addresses, phone numbers, and locations within the same page.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the a element --&gt;
&lt;a class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/a&gt;
    </code></pre>
        
        `+ codeBlock("Links", "html", `<!-- External link in new tab -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Visit Google
</a>

<!-- Same-page anchor link -->
<a href="#contact">Jump to Contact</a>

<!-- Email & Phone links -->
<a href="mailto:sanskar@example.com?subject=Hi">Email Me</a>
<a href="tel:+919876543210">Call Now</a>

<!-- Download link -->
<a href="resume.pdf" download="Sanskar_Resume.pdf">
  Download Resume
</a>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">🔗 Google (new tab)</a> |
<a href="#tag-table" style="color:var(--accent2)">⬇ Jump to Table Tag</a> |
<a href="mailto:test@example.com" style="color:var(--accent3)">✉ Email</a></div>
<div class="tip"><strong>💡 Tip:</strong> You can wrap images, divs, or entire cards inside <code>&lt;a&gt;</code> to make them clickable!</div>`},

  // 2
  {
    id: "tag-img", title: 'The <img> (Image) Tag', badge: "VOID", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;img&gt;</code> tag embeds images. It's a <strong>void element</strong> (no closing tag). The browser fetches images from the <code>src</code> URL and renders them inline.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>This element often triggers a separate network request or instantiates a specialized rendering context (like WebGL or Canvas 2D) which runs on the GPU.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always provide 'alt' attributes or fallback content. Use 'loading="lazy"' for images below the fold to improve LCP (Largest Contentful Paint).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the img element --&gt;
&lt;img class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/img&gt;
    </code></pre>
        
        `+ codeBlock("Images", "html", `<!-- Basic image -->
<img src="photo.jpg" alt="Sunset over mountains" width="600" height="400">

<!-- Lazy loading -->
<img src="big-photo.jpg" alt="City skyline" loading="lazy">

<!-- Image as a link -->
<a href="https://example.com">
  <img src="logo.png" alt="Company Logo" width="150">
</a>

<!-- Responsive srcset -->
<img src="small.jpg"
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width:600px) 480px, 800px"
     alt="Responsive image">

<!-- Figure with caption -->
<figure>
  <img src="chart.png" alt="Sales chart 2024">
  <figcaption>Fig 1: Sales growth</figcaption>
</figure>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<img src="Sanskar Developer.svg" alt="Sanskar Logo" width="80" style="border-radius:12px;border:2px solid var(--accent)">
<p style="font-size:.8rem;color:var(--text3)">↑ SVG logo loaded via &lt;img&gt;</p></div>`},

  // 3
  {
    id: "tag-table", title: 'The <table> Tag', badge: "BLOCK", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Creates <strong>tabular data</strong> — rows and columns. Tables should ONLY be used for data display, <em>not for page layout</em>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the table element --&gt;
&lt;table class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/table&gt;
    </code></pre>
        
        `+ codeBlock("Table", "html", `<table border="1" style="border-collapse:collapse;width:100%">
  <caption>Student Marks Report</caption>
  <thead>
    <tr>
      <th>Name</th><th>Maths</th><th>Science</th><th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sanskar</td><td>95</td><td>90</td><td>185</td></tr>
    <tr><td>Rahul</td><td>80</td><td>85</td><td>165</td></tr>
  </tbody>
  <tfoot>
    <tr><th colspan="3">Average</th><td>175</td></tr>
  </tfoot>
</table>`)
  },

  // 4
  {
    id: "tag-div", title: 'The <div> & <span> Tags', badge: "CONTAINER", emoji: "📦", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><strong>Generic containers</strong> with no inherent meaning — purely for grouping and styling.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the div element --&gt;
&lt;div class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/div&gt;
    </code></pre>
        
        `+ codeBlock("div & span", "html", `<!-- div: Block container -->
<div class="card">
  <div class="card-header"><h2>Welcome!</h2></div>
  <div class="card-body"><p>Content here</p></div>
</div>

<!-- span: Inline styling -->
<p>My name is <span style="color:#6c63ff;font-weight:bold">Sanskar</span>
and I love <span style="color:#3ecfcf">web development</span>.</p>

<!-- div for Flexbox layout -->
<div style="display:flex; gap:16px">
  <div>Column 1</div>
  <div>Column 2</div>
</div>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<p>My name is <span style="color:var(--accent);font-weight:700">Sanskar</span> and I love <span style="color:var(--accent2);font-weight:700">web development</span>.</p></div>`},

  // 5
  {
    id: "tag-semantic", title: 'Semantic HTML5 Tags', badge: "STRUCTURE", emoji: "🏗️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Tags that <strong>describe the meaning</strong> of content. Improve <strong>accessibility</strong>, <strong>SEO</strong>, and <strong>readability</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the semantic element --&gt;
&lt;semantic class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/semantic&gt;
    </code></pre>
        
        `+ codeBlock("Semantic Layout", "html", `<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>My Blog Post</h1>
      <time datetime="2026-04-09">April 9, 2026</time>
      <section>
        <h2>Introduction</h2>
        <p>Learning HTML is <mark>important</mark>.</p>
      </section>
    </article>
    <aside><h3>Related Links</h3></aside>
  </main>
  <footer><p>&copy; 2026 Sanskar</p></footer>
</body>`) + `
<div class="tip"><strong>💡 Rule:</strong> If you can describe <em>what</em> the content is, use semantic. If it's just a wrapper, use &lt;div&gt;.</div>`},

  // 6
  {
    id: "tag-list", title: 'List Tags — ul, ol, dl', badge: "BLOCK", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>An advanced HTML element essential for semantic and accessible web development.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the list element --&gt;
&lt;list class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/list&gt;
    </code></pre>
        
        `+ codeBlock("Lists", "html", `<!-- Unordered List -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered (Roman numerals) -->
<ol type="I">
  <li>Plan</li>
  <li>Code</li>
  <li>Test</li>
</ol>

<!-- Nested List -->
<ul>
  <li>Frontend
    <ul><li>HTML</li><li>CSS</li><li>JS</li></ul>
  </li>
  <li>Backend
    <ul><li>Node.js</li><li>Python</li></ul>
  </li>
</ul>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`)
  },

  // 7
  {
    id: "tag-media", title: 'The <video> & <audio> Tags', badge: "MEDIA", emoji: "🎬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML5 native media playback — no plugins needed!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>This element often triggers a separate network request or instantiates a specialized rendering context (like WebGL or Canvas 2D) which runs on the GPU.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always provide 'alt' attributes or fallback content. Use 'loading="lazy"' for images below the fold to improve LCP (Largest Contentful Paint).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the media element --&gt;
&lt;media class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/media&gt;
    </code></pre>
        
        `+ codeBlock("Video & Audio", "html", `<!-- Video with controls -->
<video controls width="640" poster="thumb.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser doesn't support video.
</video>

<!-- Background video (autoplay muted loop) -->
<video autoplay muted loop playsinline width="100%">
  <source src="bg.mp4" type="video/mp4">
</video>

<!-- Audio player -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
</audio>`) + `
<div class="tip"><strong>💡 Tip:</strong> Browsers block autoplay with sound. You must add <code>muted</code> for autoplay to work.</div>`},

  // 8 - NEW
  {
    id: "tag-canvas", title: 'The <canvas> Tag', badge: "GRAPHICS", emoji: "🎨", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;canvas&gt;</code> tag provides a <strong>drawable region</strong> for rendering graphics via JavaScript. Used for charts, games, animations, image manipulation, and data visualization.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>This element often triggers a separate network request or instantiates a specialized rendering context (like WebGL or Canvas 2D) which runs on the GPU.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always provide 'alt' attributes or fallback content. Use 'loading="lazy"' for images below the fold to improve LCP (Largest Contentful Paint).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the canvas element --&gt;
&lt;canvas class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/canvas&gt;
    </code></pre>
        
        `+ codeBlock("Canvas", "html", `<canvas id="myCanvas" width="400" height="200"
  role="img" aria-label="Drawing demo">
  Your browser does not support canvas.
</canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Gradient rectangle
const grad = ctx.createLinearGradient(0, 0, 400, 0);
grad.addColorStop(0, "#6c63ff");
grad.addColorStop(1, "#3ecfcf");
ctx.fillStyle = grad;
ctx.fillRect(10, 10, 380, 80);

// Text
ctx.fillStyle = "#fff";
ctx.font = "24px Inter";
ctx.fillText("Hello Sanskar! 🎨", 100, 60);

// Circle
ctx.beginPath();
ctx.arc(200, 150, 40, 0, Math.PI * 2);
ctx.fillStyle = "#ff7eb6";
ctx.fill();
<${'/'}script>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<canvas id="demoCanvas" width="400" height="120" style="border-radius:8px;border:1px solid var(--border);max-width:100%;background:var(--codeBg)"></canvas>
</div>`},

  // 9 - NEW
  {
    id: "tag-details", title: 'The <details> & <summary> Tags', badge: "INTERACTIVE", emoji: "🔽", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Creates a <strong>collapsible disclosure widget</strong> — content that users can show/hide by clicking, with <strong>zero JavaScript</strong> required! The <code>&lt;summary&gt;</code> is the clickable label.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the details element --&gt;
&lt;details class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/details&gt;
    </code></pre>
        
        `+ codeBlock("Details/Summary", "html", `<!-- Basic collapsible -->
<details>
  <summary>Click to see the answer</summary>
  <p>HTML stands for HyperText Markup Language!</p>
</details>

<!-- Open by default -->
<details open>
  <summary>This is already open</summary>
  <p>You can see this content immediately.</p>
</details>

<!-- FAQ Accordion -->
<details>
  <summary>What is CSS?</summary>
  <p>CSS (Cascading Style Sheets) controls how HTML
  elements look — colors, fonts, layouts, animations.</p>
</details>
<details>
  <summary>What is JavaScript?</summary>
  <p>JavaScript adds interactivity — click handlers,
  animations, API calls, dynamic content.</p>
</details>

<!-- Nested -->
<details>
  <summary>Web Technologies</summary>
  <details>
    <summary>Frontend</summary>
    <p>HTML, CSS, JavaScript, React, Vue</p>
  </details>
  <details>
    <summary>Backend</summary>
    <p>Node.js, Python, Java, Go</p>
  </details>
</details>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<details style="margin:6px 0;padding:10px;background:var(--bg4);border-radius:8px;cursor:pointer">
<summary style="color:var(--accent);font-weight:600">What does HTML stand for?</summary>
<p style="margin-top:8px">HTML = <strong>HyperText Markup Language</strong>. It's the standard language for creating web pages.</p></details>
<details style="margin:6px 0;padding:10px;background:var(--bg4);border-radius:8px;cursor:pointer">
<summary style="color:var(--accent);font-weight:600">Is HTML a programming language?</summary>
<p style="margin-top:8px"><strong>No!</strong> HTML is a <em>markup</em> language. It structures content but doesn't have logic, loops, or variables.</p></details></div>`},

  // 10 - NEW
  {
    id: "tag-iframe", title: 'The <iframe> Tag', badge: "EMBED", emoji: "🪟", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;iframe&gt;</code> (Inline Frame) embeds <strong>another complete HTML page inside your current page</strong>. Think of it as a window within your window — it loads a completely separate document with its own DOM, CSS, and JavaScript, all rendered inside a rectangular area on your page.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the iframe element --&gt;
&lt;iframe class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/iframe&gt;
    </code></pre>
        
        `+ codeBlock("Parent ↔ iframe Communication", "javascript", `// === PARENT PAGE (sending message TO iframe) ===
const iframe = document.getElementById("myIframe");

// Send a message to the iframe
iframe.contentWindow.postMessage(
  { action: "changeTheme", theme: "dark" },  // data
  "https://child-site.com"                    // target origin (security!)
);

// Listen for messages FROM the iframe
window.addEventListener("message", (event) => {
  // ALWAYS verify the origin for security!
  if (event.origin !== "https://child-site.com") return;

  console.log("Message from iframe:", event.data);
  // Example: event.data = { status: "theme changed!" }
});


// === IFRAME PAGE (receiving message FROM parent) ===
window.addEventListener("message", (event) => {
  // Verify parent origin
  if (event.origin !== "https://parent-site.com") return;

  if (event.data.action === "changeTheme") {
    document.body.classList.add(event.data.theme);
  }

  // Send response back to parent
  event.source.postMessage(
    { status: "theme changed!" },
    event.origin
  );
});`) + `

<div class="warn"><strong>⚠️ Always verify <code>event.origin</code>!</strong> Without checking the origin, any website could embed your page in an iframe and send fake messages. This is a common security vulnerability called <em>cross-origin message spoofing</em>.</div>

<h3>📐 The <code>srcdoc</code> Attribute — Deep Dive</h3>
<p>Instead of loading an external URL, you can embed HTML directly. Key points:</p>
<ul>
<li><code>srcdoc</code> takes <strong>priority over src</strong> — if both exist, srcdoc wins</li>
<li>The content inherits the <strong>parent page's origin</strong> (unless sandboxed)</li>
<li>You can use full HTML including <code>&lt;style&gt;</code> and scripts</li>
<li>Great for <strong>previews</strong>, <strong>email templates</strong>, and <strong>code output</strong></li>
<li>Quote special characters with HTML entities since the value is in an HTML attribute</li>
</ul>
`+ codeBlock("iframe — srcdoc", "html", `<!-- Inline HTML content (no external HTTP request!) -->
<iframe srcdoc="
  <style>
    body { font-family: Arial; background: #1a1a2e; color: #fff;
           padding: 20px; margin: 0; }
    h2 { color: #6c63ff; }
  </style>
  <h2>Hello from srcdoc!</h2>
  <p>This HTML is embedded directly — no server needed!</p>
  <button onclick='alert(&quot;Clicked!&quot;)'>Click Me</button>
"
  width="100%" height="180"
  title="Inline content demo"
  sandbox="allow-scripts">
</iframe>`) + `

<h3>🚀 Performance Optimization</h3>
<p>Iframes can be <strong>performance-expensive</strong>. Here's how to optimize:</p>
<table class="at"><tr><th>Technique</th><th>How It Helps</th><th>Implementation</th></tr>
<tr><td><strong>Lazy Loading</strong></td><td>Defers iframe loading until user scrolls near it</td><td><code>loading="lazy"</code></td></tr>
<tr><td><strong>Facade Pattern</strong></td><td>Show a static image/thumbnail first, load iframe only on click</td><td>Replace <code>&lt;img&gt;</code> with <code>&lt;iframe&gt;</code> on click via JS</td></tr>
<tr><td><strong>Minimal sandbox</strong></td><td>Restricting features reduces browser work inside the iframe</td><td>Only allow what's needed</td></tr>
<tr><td><strong>Preconnect</strong></td><td>Pre-establish connection to iframe origin before the iframe loads</td><td><code>&lt;link rel="preconnect" href="..."&gt;</code></td></tr>
<tr><td><strong>Avoid excessive iframes</strong></td><td>Each iframe creates overhead (~2-5MB memory). Limit to 2-3 per page.</td><td>Use embeds only when necessary</td></tr></table>

<div class="tip"><strong>💡 Facade Pattern for Video Embeds:</strong> Instead of loading a heavy video iframe on page load (which downloads ~800KB of JS), show a thumbnail image. Replace it with the real iframe only when the user clicks play. This can improve page load by 2-3 seconds!</div>

<h3>♿ Accessibility Best Practices</h3>
<ul>
<li><strong>Always add <code>title</code></strong> — Screen readers announce: "iframe: Video player" instead of just "iframe"</li>
<li><strong>Make title descriptive</strong> — "Video embed" is bad. "Tutorial: How to learn HTML in 10 minutes" is good.</li>
<li><strong>Keyboard navigation</strong> — Users can Tab into iframes. Ensure the iframe content is also keyboard-accessible.</li>
<li><strong>Provide alternatives</strong> — For users who can't interact with embeds, provide a direct link: <code>&lt;a href="..."&gt;Watch video directly&lt;/a&gt;</code></li>
<li><strong>Use <code>aria-hidden="true"</code></strong> for decorative iframes (like background animations) that add no content value</li>
</ul>

<h3>🆚 iframe vs Other Embedding Methods</h3>
<table class="at"><tr><th>Method</th><th>Use For</th><th>Isolation</th><th>Performance</th></tr>
<tr><td><code>&lt;iframe&gt;</code></td><td>External pages, videos, maps, third-party content</td><td>✅ Full isolation (separate DOM/CSS/JS)</td><td>❌ Heavy (separate document)</td></tr>
<tr><td><code>&lt;embed&gt;</code></td><td>Plugins, PDFs (deprecated for most uses)</td><td>Varies</td><td>Varies</td></tr>
<tr><td><code>&lt;object&gt;</code></td><td>PDFs, SVGs, fallback content</td><td>Partial</td><td>Better than iframe</td></tr>
<tr><td><code>&lt;video&gt;/&lt;audio&gt;</code></td><td>Self-hosted media files</td><td>❌ No isolation (same page)</td><td>✅ Lightest</td></tr>
<tr><td>JavaScript API</td><td>Dynamic content from APIs</td><td>❌ No isolation</td><td>✅ Best (no extra document)</td></tr>
<tr><td>Web Components</td><td>Reusable custom elements with Shadow DOM</td><td>Partial (Shadow DOM CSS)</td><td>✅ Good</td></tr></table>

<h3>💻 All Examples</h3>
`+ codeBlock("iframe — All Uses", "html", `<!-- 1. Embed video stream -->
<iframe width="560" height="315"
  src="https://video.example.com/embed/tutorial-intro"
  title="Interactive video player"
  allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
  style="border:none; border-radius:12px;">
</iframe>

<!-- 2. Embed Google Maps -->
<iframe
  src="https://maps.google.com/maps?q=New+Delhi&output=embed"
  width="100%" height="400"
  style="border:0; border-radius:12px;"
  title="Google Maps showing New Delhi, India"
  loading="lazy"
  referrerpolicy="no-referrer">
</iframe>

<!-- 3. Sandboxed iframe for untrusted content -->
<iframe src="untrusted-page.html"
  sandbox="allow-scripts"
  width="100%" height="300"
  title="User submitted content (sandboxed)"
  style="border:2px solid red;">
</iframe>

<!-- 4. Open links inside an iframe -->
<a href="https://example.com" target="myFrame">
  Load Example.com in the iframe below ↓
</a>
<iframe name="myFrame" width="100%" height="300"
  title="Link target frame"
  style="border:1px solid #ccc; border-radius:8px;">
</iframe>

<!-- 5. Responsive iframe (16:9 video) -->
<div style="position:relative; padding-bottom:56.25%;
            height:0; overflow:hidden;">
  <iframe src="https://video.example.com/embed/tutorial-intro"
    style="position:absolute; top:0; left:0;
           width:100%; height:100%; border:none;"
    title="Responsive video"
    allowfullscreen loading="lazy">
  </iframe>
</div>

<!-- 6. Video Facade (performance optimized) -->
<div id="videoFacade" style="cursor:pointer; position:relative;"
  onclick="this.innerHTML='<iframe src=&quot;https://video.example.com/embed/tutorial-intro?autoplay=1&quot; width=&quot;100%&quot; height=&quot;315&quot; allowfullscreen style=&quot;border:none&quot;></iframe>'">
  <div style="background:#1e293b; color:#fff; padding:60px 20px; text-align:center; border-radius:12px;">
    <div style="font-size:48px;">▶️</div>
    <p style="margin-top:10px;font-weight:600;">Click to load video player</p>
  </div>
</div>`) + `

<div class="demo"><h4>▶ Live Demo 1 — srcdoc iframe (self-contained)</h4>
<iframe srcdoc="<div style='font-family:Inter,sans-serif;padding:20px;background:linear-gradient(135deg,#6c63ff,#3ecfcf);color:#fff;border-radius:8px;text-align:center'><h2>🪟 Hello from inside an iframe!</h2><p>This content is loaded via <b>srcdoc</b> — no external URL needed!</p><p style='font-size:.85em;opacity:.8'>I have my own DOM, CSS, and JavaScript context.</p></div>"
  width="100%" height="140" style="border:none;border-radius:8px;" title="srcdoc demo" sandbox></iframe>
</div>

<div class="demo"><h4>▶ Live Demo 2 — Interactive srcdoc with JavaScript</h4>
<iframe srcdoc="<div style='font-family:Inter,sans-serif;padding:20px;background:#0a0a2a;color:#d0d0ee;border-radius:8px;text-align:center'><h3 style='color:#6c63ff'>🎨 Interactive iframe</h3><p>Click the button to change my background!</p><button onclick=&quot;document.body.style.background=document.body.style.background==='#1a3e1a'?'#0a0a2a':'#1a3e1a';this.textContent=document.body.style.background==='#1a3e1a'?'Go Dark':'Go Green'&quot; style='padding:8px 20px;background:linear-gradient(135deg,#6c63ff,#3ecfcf);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px'>Go Green</button></div>"
  width="100%" height="140" style="border:none;border-radius:8px;" title="Interactive iframe demo" sandbox="allow-scripts"></iframe>
</div>

<div class="demo"><h4>▶ Live Demo 3 — Named iframe with link target</h4>
<p style="margin-bottom:8px">Click a link to load content in the iframe below:</p>
<a href="https://en.wikipedia.org/wiki/HTML" target="demoFrame" style="color:var(--accent);margin-right:12px">📖 Wikipedia: HTML</a>
<a href="https://en.wikipedia.org/wiki/CSS" target="demoFrame" style="color:var(--accent2)">🎨 Wikipedia: CSS</a>
<iframe name="demoFrame" width="100%" height="200" style="border:1px solid var(--border);border-radius:8px;margin-top:8px;" title="Wikipedia content viewer" loading="lazy"></iframe>
</div>

<h3>❌ Common Mistakes & Pitfalls</h3>
<table class="at"><tr><th>Mistake</th><th>Why It's Bad</th><th>Fix</th></tr>
<tr><td>Missing <code>title</code> attribute</td><td>Screen readers say "iframe" with no context — fails accessibility audit</td><td>Always add a descriptive <code>title</code></td></tr>
<tr><td>Using iframe for page layout</td><td>Creates navigation problems, breaks browser back button, bad for SEO</td><td>Use CSS Grid/Flexbox for layouts</td></tr>
<tr><td>Too many iframes (5+)</td><td>Each iframe uses ~2-5MB memory and adds network requests</td><td>Use facade pattern or lazy loading</td></tr>
<tr><td>Not setting dimensions</td><td>Causes layout shift (CLS) when iframe loads — hurts performance score</td><td>Always set <code>width</code> and <code>height</code></td></tr>
<tr><td>Embedding sites that block iframes</td><td>Shows blank/error — sites use X-Frame-Options or CSP frame-ancestors to block</td><td>Check if the site provides an embed URL</td></tr>
<tr><td>Using <code>frameborder</code> attribute</td><td>Deprecated in HTML5</td><td>Use CSS: <code>border: none;</code></td></tr></table>

<div class="tip"><strong>💡 Pro Tip — Responsive Embeds:</strong> Video providers often give fixed-size iframes. To make any iframe responsive, wrap it in a container with <code>position: relative; padding-bottom: 56.25%;</code> (that's the 16:9 aspect ratio: 9÷16 = 0.5625). Then position the iframe absolutely to fill the container. This technique works for any modern video or interactive canvas embed!</div>

<div class="info"><strong>📝 X-Frame-Options & CSP:</strong> Websites can prevent being embedded in iframes via:<br>
• <code>X-Frame-Options: DENY</code> — blocks all iframe embedding<br>
• <code>X-Frame-Options: SAMEORIGIN</code> — only allows same-domain iframes<br>
• <code>Content-Security-Policy: frame-ancestors 'self' https://trusted.com</code> — modern, more flexible<br>
You CANNOT override these — they are server-side security decisions. If a site blocks iframing, you must use their official embed/API instead.</div>

<div class="warn"><strong>⚠️ SEO Note:</strong> Content inside iframes is NOT indexed by Google as part of your page. If you put important text inside an iframe, search engines won't associate it with your page. Only use iframes for third-party embeds, not for your own content.</div>
`},

  // 11 - NEW
  {
    id: "tag-meta", title: 'The <meta> & Head Tags', badge: "DOCUMENT", emoji: "🧠", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;meta&gt;</code> tag provides <strong>metadata</strong> — data <em>about</em> the HTML document itself. It lives inside the <code>&lt;head&gt;</code> section and is <strong>invisible to users</strong> but critical for browsers, search engines, social media platforms, and mobile devices. Without proper meta tags, your page won't look right on mobile, won't show up correctly in Google, and won't have a proper preview when shared on WhatsApp or Twitter.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the meta element --&gt;
&lt;meta class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/meta&gt;
    </code></pre>
        
        `+ codeBlock("Complete Head Section", "html", `<head>
  <!-- 1. Character encoding (MUST be first!) -->
  <meta charset="UTF-8">

  <!-- 2. Viewport for responsive design -->
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">

  <!-- 3. Page title (SEO — keep under 60 chars) -->
  <title>Sanskar Developer | Web Development Portfolio</title>

  <!-- 4. SEO meta tags -->
  <meta name="description"
    content="Sanskar is a web developer specializing in HTML, CSS, and JavaScript. View projects and get in touch.">
  <meta name="keywords" content="web developer, HTML, CSS, JavaScript, portfolio">
  <meta name="author" content="Sanskar">
  <meta name="robots" content="index, follow">

  <!-- 5. Open Graph (WhatsApp, Facebook, LinkedIn preview) -->
  <meta property="og:title" content="Sanskar Developer">
  <meta property="og:description" content="Web development portfolio">
  <meta property="og:image" content="https://mysite.com/preview.jpg">
  <meta property="og:url" content="https://mysite.com/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Sanskar Developer">

  <!-- 6. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sanskar Developer">
  <meta name="twitter:description" content="Web dev portfolio">
  <meta name="twitter:image" content="https://mysite.com/preview.jpg">

  <!-- 7. Favicon -->
  <link rel="icon" type="image/svg+xml" href="logo.svg">
  <link rel="apple-touch-icon" href="apple-icon-180x180.png">

  <!-- 8. Preconnect for faster font loading -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- 9. Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet">

  <!-- 10. External CSS -->
  <link rel="stylesheet" href="styles.css">

  <!-- 11. Canonical URL (prevent duplicate content issues) -->
  <link rel="canonical" href="https://mysite.com/">

  <!-- 12. JavaScript with defer -->
  <script src="app.js" defer><${'/'}script>

  <!-- 13. Theme color (mobile browser address bar color) -->
  <meta name="theme-color" content="#6c63ff">
</head>`) + `

<div class="demo"><h4>▶ Live Demo — This page's own &lt;head&gt;</h4>
<p>Right-click this page → <strong>View Page Source</strong> to see the real <code>&lt;head&gt;</code> section. You'll find: charset, viewport, description, favicon, and Google Fonts — all working together!</p>
<p style="margin-top:8px"><strong>This page's meta:</strong></p>
<ul>
<li><code>charset</code> = UTF-8 ✅</li>
<li><code>viewport</code> = device-width, scale 1.0 ✅</li>
<li><code>description</code> = "Deep dive into HTML tags..." ✅</li>
<li><code>favicon</code> = Sanskar Developer.svg ✅</li>
</ul>
</div>

<div class="warn"><strong>⚠️ Common Mistakes:</strong><br>
• Putting <code>&lt;meta charset&gt;</code> AFTER <code>&lt;title&gt;</code> — charset MUST come first!<br>
• Missing viewport meta — page looks broken on mobile<br>
• Writing <code>og:image</code> with a relative path — use full absolute URL!<br>
• Using <code>user-scalable=no</code> — accessibility violation!</div>
`},

  // 12 - NEW
  {
    id: "tag-pre-code", title: 'The <pre> & <code> Tags', badge: "TEXT", emoji: "💻", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;pre&gt;</code> = <strong>Preformatted Text</strong> — preserves ALL whitespace (spaces, tabs, and line breaks) exactly as written in the source code. The browser normally collapses multiple spaces into one, but <code>&lt;pre&gt;</code> stops this behavior.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the pre-code element --&gt;
&lt;pre-code class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/pre-code&gt;
    </code></pre>
        
        `+ codeBlock("pre & code — All Uses", "html", `<!-- 1. Inline code mention -->
<p>Use the <code>console.log()</code> function to debug JavaScript.</p>
<p>Run <code>npm install</code> in your terminal.</p>
<p>The <code>background-color</code> CSS property sets the background.</p>

<!-- 2. Code block (pre + code = best practice) -->
<pre><code>
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Sanskar");
// Output: Hello, Sanskar!
</code></pre>

<!-- 3. ASCII Art — pre preserves all spacing -->
<pre>
  ╔═══════════════════════╗
  ║    Sanskar Developer   ║
  ║   ==================   ║
  ║   &lt;/&gt; HTML Expert     ║
  ╚═══════════════════════╝
</pre>

<!-- 4. Keyboard shortcuts using kbd -->
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open DevTools.</p>
<p>Press <kbd>Alt</kbd> + <kbd>Tab</kbd> to switch windows.</p>

<!-- 5. Sample program output -->
<p>Terminal output:</p>
<pre><samp>
$ node app.js
Server running on port 3000
Connected to database successfully
</samp></pre>

<!-- 6. Mathematical variables -->
<p>The quadratic formula: <var>x</var> = (-<var>b</var> &plusmn;
&radic;(<var>b</var><sup>2</sup> - 4<var>a</var><var>c</var>))
/ 2<var>a</var></p>

<!-- 7. Abbreviations with tooltips -->
<p><abbr title="HyperText Markup Language">HTML</abbr>,
<abbr title="Cascading Style Sheets">CSS</abbr>, and
<abbr title="JavaScript">JS</abbr> are the core web technologies.</p>

<!-- 8. Subscript and Superscript -->
<p>Water: H<sub>2</sub>O</p>
<p>Einstein: E = mc<sup>2</sup></p>

<!-- 9. Highlighted text -->
<p>The most <mark>important</mark> thing to remember is...</p>`) + `

<div class="demo"><h4>▶ Live Demo — All Text Tags in Action</h4>
<p style="margin:6px 0"><strong>Inline code:</strong> Use <code style="background:var(--bg4);padding:2px 8px;border-radius:4px">console.log()</code> to debug. Run <code style="background:var(--bg4);padding:2px 8px;border-radius:4px">npm install</code> in terminal.</p>

<pre style="background:var(--bg4);padding:14px;border-radius:8px;font-family:'Fira Code',monospace;font-size:.85rem;overflow-x:auto;color:var(--accent2);margin:8px 0">function greet(name) {
  console.log("Hello, " + name);
}
greet("Sanskar"); // Hello, Sanskar</pre>

<pre style="background:var(--bg4);padding:14px;border-radius:8px;font-family:'Fira Code',monospace;font-size:.85rem;color:var(--accent);margin:8px 0">  ╔═══════════════════════╗
  ║    Sanskar Developer   ║
  ╚═══════════════════════╝</pre>

<p style="margin:6px 0"><strong>Keyboard:</strong> Press <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Ctrl</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">S</kbd> to save. <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Ctrl</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Shift</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">I</kbd> for DevTools.</p>

<p style="margin:6px 0"><strong>Variables:</strong> The equation: <var style="font-style:italic;color:var(--accent3)">x</var> = <var style="font-style:italic;color:var(--accent3)">y</var><sup>2</sup> + 5</p>

<p style="margin:6px 0"><strong>Abbreviation:</strong> <abbr title="HyperText Markup Language" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">HTML</abbr> (hover to see full form!)</p>

<p style="margin:6px 0"><strong>Chemistry:</strong> Water = H<sub>2</sub>O &nbsp;|&nbsp; <strong>Math:</strong> E = mc<sup>2</sup></p>

<p style="margin:6px 0"><strong>Marked:</strong> This is <mark style="background:#ffd70044;padding:1px 6px;border-radius:3px">very important</mark> text.</p>

<p style="margin:6px 0"><strong>Sample output:</strong> <samp style="font-family:'Fira Code',monospace;color:var(--accent2)">Error 404: Page not found</samp></p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> When building documentation or tutorials (like this page!), combine <code>&lt;pre&gt;&lt;code&gt;</code> with CSS for syntax highlighting. Libraries like <strong>Prism.js</strong> or <strong>Highlight.js</strong> can auto-color your code blocks beautifully.</div>
`},

  // 13 - NEW
  {
    id: "tag-dialog", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;dialog&gt;</code> tag creates a <strong>native modal or non-modal dialog box</strong> — popups, alerts, confirmations, forms, and lightboxes — built right into the browser with <strong>zero external libraries needed</strong>. Before <code>&lt;dialog&gt;</code>, developers had to build modals from scratch using divs, CSS, and complex JavaScript.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the dialog element --&gt;
&lt;dialog class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/dialog&gt;
    </code></pre>
        
        `+ codeBlock("Dialog Styling", "css", `/* Style the dialog box */
dialog {
  border: none;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  max-width: 500px;
  width: 90%;
}

/* Style the dark overlay behind modal */
dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}`) + `

<h3>🔒 Why use <code>&lt;dialog&gt;</code> over custom modals?</h3>
<table class="at"><tr><th>Feature</th><th>Native &lt;dialog&gt;</th><th>Custom div modal</th></tr>
<tr><td>Focus trapping</td><td>✅ Automatic</td><td>❌ Manual JS needed</td></tr>
<tr><td>Escape to close</td><td>✅ Built-in</td><td>❌ Manual event listener</td></tr>
<tr><td>Backdrop</td><td>✅ ::backdrop CSS</td><td>❌ Extra div needed</td></tr>
<tr><td>Accessibility</td><td>✅ role="dialog" auto</td><td>❌ Must add ARIA manually</td></tr>
<tr><td>Scroll lock</td><td>✅ Automatic</td><td>❌ Custom CSS/JS</td></tr>
<tr><td>Top layer</td><td>✅ Always on top</td><td>❌ z-index battles</td></tr></table>

`+ codeBlock("Dialog — All Uses", "html", `<!-- 1. Basic modal dialog -->
<dialog id="myDialog">
  <h2>Welcome!</h2>
  <p>This is a native HTML dialog.</p>
  <button onclick="this.closest('dialog').close()">
    Close
  </button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">
  Open Modal
</button>

<!-- 2. Confirmation dialog with return value -->
<dialog id="confirmDialog">
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm Delete</button>
  </form>
</dialog>

<!-- 3. Form inside a dialog -->
<dialog id="loginDialog">
  <h3>Login</h3>
  <form method="dialog">
    <label>Email: <input type="email" required></label>
    <label>Password: <input type="password" required></label>
    <button value="login">Login</button>
    <button value="cancel" formnovalidate>Cancel</button>
  </form>
</dialog>

<script>
  // Listen for close event
  confirmDialog.addEventListener("close", () => {
    if (confirmDialog.returnValue === "confirm") {
      console.log("User confirmed!");
    }
  });
<${'/'}script>`) + `

<div class="demo"><h4>▶ Live Demo — Native Modal Dialog</h4>
<button onclick="document.getElementById('liveDialog').showModal()" style="padding:10px 24px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.9rem;font-weight:600">✨ Open Dialog</button>
<dialog id="liveDialog" style="border:none;border-radius:14px;padding:28px;box-shadow:0 10px 40px #00000044;background:var(--card);color:var(--text);max-width:400px;font-family:Inter,sans-serif">
<h3 style="margin-bottom:12px;color:var(--accent)">💬 Hello Sanskar!</h3>
<p style="color:var(--text2)">This is a <strong>native HTML dialog</strong> — no library needed! Press Escape or click Close.</p>
<form method="dialog" style="margin-top:16px;text-align:right"><button value="close" style="padding:8px 20px;background:var(--accent);color:#fff;border:none;border-radius:6px;cursor:pointer">Close</button></form>
</dialog>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Use <code>&lt;form method="dialog"&gt;</code> inside your dialog — clicking a submit button will automatically close the dialog and set <code>.returnValue</code> to the button's <code>value</code>. No JavaScript needed to close it!</div>
`},

  // 14 - NEW
  {
    id: "tag-picture", title: 'The <picture> & <source> Tags', badge: "MEDIA", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;picture&gt;</code> tag lets you serve <strong>different images for different screen sizes, resolutions, and formats</strong>. It contains one or more <code>&lt;source&gt;</code> elements and one <code>&lt;img&gt;</code> fallback. The browser picks the FIRST <code>&lt;source&gt;</code> that matches.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the picture element --&gt;
&lt;picture class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/picture&gt;
    </code></pre>
        
        `+ codeBlock("picture — All Uses", "html", `<!-- 1. Art Direction (different images per screen) -->
<picture>
  <source media="(min-width: 1024px)"
    srcset="hero-desktop.jpg">
  <source media="(min-width: 640px)"
    srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg"
    alt="Hero banner" width="800" height="400"
    loading="lazy">
</picture>

<!-- 2. Modern format with fallback -->
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Beautiful landscape"
    width="800" height="600">
</picture>

<!-- 3. Resolution switching (retina) -->
<picture>
  <source srcset="logo-1x.png 1x, logo-2x.png 2x,
                  logo-3x.png 3x">
  <img src="logo-1x.png" alt="Company Logo"
    width="200" height="60">
</picture>

<!-- 4. Dark mode different image -->
<picture>
  <source srcset="logo-dark.png"
    media="(prefers-color-scheme: dark)">
  <img src="logo-light.png" alt="Site logo"
    width="200">
</picture>`) + `

<div class="demo"><h4>▶ Live Demo — format-aware image</h4>
<picture>
  <source srcset="Sanskar Developer.svg" type="image/svg+xml">
  <img src="Sanskar Developer.svg" alt="Sanskar Logo" width="80" style="border-radius:12px;border:2px solid var(--accent)">
</picture>
<p style="font-size:.8rem;color:var(--text3)">↑ SVG served via &lt;picture&gt; with type checking</p>
</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Forgetting the <code>&lt;img&gt;</code> inside <code>&lt;picture&gt;</code>. The <code>&lt;img&gt;</code> is NOT optional — without it, nothing displays! The <code>&lt;source&gt;</code> elements only provide alternatives.</div>

<div class="tip"><strong>💡 Format Priority Order:</strong> Always list formats from newest to oldest: <strong>AVIF → WebP → JPEG</strong>. AVIF saves ~50% vs JPEG, WebP saves ~30%. The browser picks the first format it supports!</div>
`},

  // 15 - NEW
  {
    id: "tag-progress-meter", title: 'The <progress> & <meter> Tags', badge: "WIDGET", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;progress&gt;</code> shows the <strong>completion progress</strong> of a task (like file uploads, installations, loading).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the progress-meter element --&gt;
&lt;progress-meter class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/progress-meter&gt;
    </code></pre>
        
        `+ codeBlock("progress & meter", "html", `<!-- 1. Determinate progress bar (70%) -->
<label>Download: <progress value="70" max="100">70%</progress></label>

<!-- 2. Indeterminate progress (loading...) -->
<label>Loading: <progress>Please wait...</progress></label>

<!-- 3. File upload progress with JS -->
<progress id="uploadBar" value="0" max="100"></progress>
<script>
  // Simulate upload
  let pct = 0;
  const timer = setInterval(() => {
    pct += 10;
    document.getElementById("uploadBar").value = pct;
    if (pct >= 100) clearInterval(timer);
  }, 500);
<${'/'}script>

<!-- 4. Meter — Disk usage (good range) -->
<label>Disk Space:
  <meter value="45" min="0" max="100"
    low="70" high="90" optimum="30">
    45 GB / 100 GB
  </meter>
</label>

<!-- 5. Meter — Low battery (warning) -->
<label>Battery:
  <meter value="15" min="0" max="100"
    low="20" high="80" optimum="90">
    15%
  </meter>
</label>

<!-- 6. Meter — Exam score -->
<label>Score:
  <meter value="85" min="0" max="100"
    low="40" high="70" optimum="90">
    85/100
  </meter>
</label>`) + `

<div class="demo"><h4>▶ Live Demo — progress & meter</h4>
<p style="margin:6px 0"><strong>Progress (70%):</strong><br>
<progress value="70" max="100" style="width:100%;height:22px;border-radius:6px">70%</progress></p>

<p style="margin:6px 0"><strong>Indeterminate (loading):</strong><br>
<progress style="width:100%;height:22px;border-radius:6px">Loading...</progress></p>

<p style="margin:6px 0"><strong>Meter — Disk OK (45%):</strong><br>
<meter value="45" min="0" max="100" low="70" high="90" optimum="30" style="width:100%;height:22px">45%</meter></p>

<p style="margin:6px 0"><strong>Meter — Battery Low (15%):</strong><br>
<meter value="15" min="0" max="100" low="20" high="80" optimum="90" style="width:100%;height:22px">15%</meter></p>

<p style="margin:6px 0"><strong>Meter — Great Score (85%):</strong><br>
<meter value="85" min="0" max="100" low="40" high="70" optimum="90" style="width:100%;height:22px">85%</meter></p>
</div>

<div class="info"><strong>📝 Fallback Content:</strong> Text between <code>&lt;progress&gt;</code> or <code>&lt;meter&gt;</code> tags is shown in browsers that don't support them. Always include fallback text!</div>
`},

  // 16 - NEW
  {
    id: "tag-template", title: 'The <template> Tag', badge: "ADVANCED", emoji: "📄", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;template&gt;</code> tag holds <strong>HTML content that is NOT rendered</strong> when the page loads. It acts as a reusable blueprint/stamp — you use JavaScript to <strong>clone and insert</strong> its contents whenever needed. Think of it like a cookie cutter: the template is the cutter, and each clone is a new cookie.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the template element --&gt;
&lt;template class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/template&gt;
    </code></pre>
        
        `+ codeBlock("template — All Uses", "html", `<!-- 1. Basic template (invisible on page) -->
<template id="cardTemplate">
  <div class="card" style="border:1px solid #ccc;
    padding:16px; border-radius:8px; margin:8px 0">
    <h3 class="card-title">Title</h3>
    <p class="card-desc">Description</p>
    <button class="card-btn">Learn More</button>
  </div>
</template>

<!-- 2. Use JS to clone and insert -->
<div id="cardContainer"></div>
<script>
  const template = document.getElementById("cardTemplate");
  const container = document.getElementById("cardContainer");

  const courses = [
    { title: "HTML", desc: "Structure of the web" },
    { title: "CSS", desc: "Styling and layout" },
    { title: "JavaScript", desc: "Logic and interactivity" }
  ];

  courses.forEach(course => {
    // Clone the template content
    const clone = template.content.cloneNode(true);

    // Fill in the data
    clone.querySelector(".card-title").textContent
      = course.title;
    clone.querySelector(".card-desc").textContent
      = course.desc;

    // Insert into the page
    container.appendChild(clone);
  });
<${'/'}script>

<!-- 3. Table row template -->
<template id="rowTemplate">
  <tr>
    <td class="name"></td>
    <td class="email"></td>
    <td class="role"></td>
  </tr>
</template>`) + `

<div class="demo"><h4>▶ Live Demo — template cannot be seen!</h4>
<p>There's a <code>&lt;template&gt;</code> element below this text. Can you see it? <strong>No!</strong> Because templates are invisible until cloned via JavaScript.</p>
<template id="hiddenTemplate"><div style="background:var(--accent);color:#fff;padding:12px;border-radius:8px">🎉 You can't see me! I'm inside a template.</div></template>
<p style="color:var(--text3);font-size:.85rem">↑ There IS a template here with content, but the browser doesn't render it. Inspect the HTML to see it!</p>
</div>

<div class="tip"><strong>💡 template vs innerHTML:</strong> Using <code>&lt;template&gt;</code> is cleaner and safer than building HTML strings in JavaScript. Templates are pre-parsed by the browser, prevent XSS vulnerabilities, and keep your HTML out of JS strings.</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Trying to select elements inside a template with <code>querySelector</code> directly won't work — you must access them through <code>template.content.querySelector()</code> first!</div>
`},

  // 17 - NEW
  {
    id: "tag-map-area", title: 'The <map> & <area> Tags', badge: "INTERACTIVE", emoji: "🗺️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;map&gt;</code> tag creates an <strong>image map</strong> — making specific regions of an image <strong>clickable</strong>. Each clickable region is defined by an <code>&lt;area&gt;</code> element. It's like having invisible hotspot buttons overlaid on an image. The <code>&lt;img&gt;</code> tag connects to the map using the <code>usemap</code> attribute.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the map-area element --&gt;
&lt;map-area class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/map-area&gt;
    </code></pre>
        
        `+ codeBlock("Image Map", "html", `<!-- Step 1: Create the image with usemap -->
<img src="office-floor-plan.png"
  alt="Office Floor Plan"
  usemap="#officeMap"
  width="600" height="400">

<!-- Step 2: Define the map with areas -->
<map name="officeMap">
  <!-- Rectangle: Conference Room -->
  <area shape="rect" coords="50,30,200,150"
    href="#conference-room"
    alt="Conference Room"
    title="Conference Room A">

  <!-- Circle: Reception Desk -->
  <area shape="circle" coords="400,200,50"
    href="#reception"
    alt="Reception Desk"
    title="Reception Area">

  <!-- Polygon: Kitchen (irregular shape) -->
  <area shape="poly"
    coords="300,300,450,300,450,380,350,380,300,350"
    href="#kitchen"
    alt="Kitchen Area"
    title="Kitchen & Break Room">

  <!-- Default: catch-all for rest of image -->
  <area shape="default"
    href="#overview"
    alt="General Office" >
</map>

<!-- With JavaScript event handlers -->
<map name="interactiveMap">
  <area shape="rect" coords="0,0,100,100"
    alt="Zone A"
    onclick="alert('You clicked Zone A!')"
    style="cursor:pointer">
  <area shape="circle" coords="200,100,60"
    alt="Zone B"
    onmouseover="showTooltip(this)"
    onmouseout="hideTooltip(this)">
</map>`) + `

<div class="demo"><h4>▶ Live Demo — Clickable Image Map</h4>
<div style="position:relative;display:inline-block">
<svg width="300" height="200" viewBox="0 0 300 200" style="border-radius:8px;border:1px solid var(--border)">
  <rect width="300" height="200" fill="var(--bg3)"/>
  <rect x="20" y="20" width="100" height="70" rx="8" fill="var(--accent)" opacity="0.3"/>
  <text x="70" y="60" fill="var(--accent)" font-size="12" text-anchor="middle" font-family="Inter">Zone A</text>
  <circle cx="210" cy="55" r="35" fill="var(--accent2)" opacity="0.3"/>
  <text x="210" y="60" fill="var(--accent2)" font-size="12" text-anchor="middle" font-family="Inter">Zone B</text>
  <rect x="50" y="130" width="200" height="50" rx="8" fill="var(--accent3)" opacity="0.3"/>
  <text x="150" y="160" fill="var(--accent3)" font-size="12" text-anchor="middle" font-family="Inter">Zone C</text>
</svg>
<p style="font-size:.8rem;color:var(--text3)">↑ Shapes showing how image maps define clickable regions (rect, circle, polygon). In a real map, these would be invisible hotspots over a photograph.</p>
</div>
</div>

<div class="warn"><strong>⚠️ Responsiveness:</strong> Image maps use <strong>pixel coordinates</strong>, which means they DON'T scale when the image resizes. For responsive designs, either use SVG-based clickable regions, JavaScript-based solutions, or recalculate coords on resize.</div>

<div class="tip"><strong>💡 Modern Alternative:</strong> For responsive interactive images, consider using <strong>SVG with clickable elements</strong> or <strong>CSS overlay divs with position:absolute</strong>. These scale with the image. Image maps are still useful for quick, non-responsive implementations.</div>
`},

  // 18 - NEW
  {
    id: "tag-datalist", title: 'The <datalist> Tag', badge: "FORM", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;datalist&gt;</code> tag provides an <strong>autocomplete dropdown</strong> for input fields. It creates a list of suggested options that appears as the user types, but unlike <code>&lt;select&gt;</code>, the user can still type <strong>any custom value</strong>. Think of it as Google's search suggestions — it offers options but doesn't restrict input.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the datalist element --&gt;
&lt;datalist class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/datalist&gt;
    </code></pre>
        
        `+ codeBlock("datalist — All Uses", "html", `<!-- 1. Basic autocomplete -->
<label>Choose a language:
  <input type="text" list="languages" placeholder="Start typing...">
</label>
<datalist id="languages">
  <option value="HTML">
  <option value="CSS">
  <option value="JavaScript">
  <option value="Python">
  <option value="Java">
  <option value="C++">
  <option value="TypeScript">
  <option value="Go">
  <option value="Rust">
</datalist>

<!-- 2. With labels (shown as hints) -->
<input type="text" list="browsers">
<datalist id="browsers">
  <option value="Chrome" label="Google Chrome - Most popular">
  <option value="Firefox" label="Mozilla Firefox - Privacy focused">
  <option value="Safari" label="Apple Safari - Mac/iOS">
  <option value="Edge" label="Microsoft Edge - Chromium based">
</datalist>

<!-- 3. Email suggestions -->
<input type="email" list="emails" placeholder="Enter email">
<datalist id="emails">
  <option value="sanskar@gmail.com">
  <option value="sanskar@outlook.com">
  <option value="sanskar@yahoo.com">
</datalist>

<!-- 4. Color picker with presets -->
<input type="color" list="colors">
<datalist id="colors">
  <option value="#6c63ff">
  <option value="#3ecfcf">
  <option value="#ff7eb6">
  <option value="#ffd700">
</datalist>

<!-- 5. Range with tick marks -->
<input type="range" min="0" max="100" list="ticks">
<datalist id="ticks">
  <option value="0">
  <option value="25">
  <option value="50">
  <option value="75">
  <option value="100">
</datalist>`) + `

<div class="demo"><h4>▶ Live Demo — Autocomplete Input</h4>
<label style="display:block;margin-bottom:8px;color:var(--text2)">Your favorite language:</label>
<input type="text" list="demolang" placeholder="Start typing..." style="width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem">
<datalist id="demolang">
<option value="HTML"><option value="CSS"><option value="JavaScript"><option value="Python"><option value="Java"><option value="TypeScript"><option value="React"><option value="Node.js"><option value="Go"><option value="Rust">
</datalist>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Type "J" to see JavaScript and Java suggestions. You can also type anything custom!</p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Datalists work with <code>type="color"</code> to provide preset color swatches, and with <code>type="range"</code> to add visible tick marks on the slider. Very few developers know this!</div>
`},

  // 19 - NEW
  {
    id: "tag-output", title: 'The <output> Tag', badge: "FORM", emoji: "🖥️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;output&gt;</code> tag represents the <strong>result of a calculation or user action</strong>. It's a semantic element that tells the browser and screen readers: "this content is a computed result." Perfect for calculators, dynamic totals, live previews, and form output.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the output element --&gt;
&lt;output class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/output&gt;
    </code></pre>
        
        `+ codeBlock("output — All Uses", "html", `<!-- 1. Simple calculator -->
<form oninput="result.value = Number(a.value) + Number(b.value)">
  <input type="number" id="a" value="50"> +
  <input type="number" id="b" value="25"> =
  <output name="result" for="a b">75</output>
</form>

<!-- 2. Price calculator -->
<form id="shop" oninput="
  total.value = '$' + (price.value * qty.value).toFixed(2)
">
  <label>Price: $<input type="number" id="price" value="29.99"></label>
  <label>Qty: <input type="number" id="qty" value="2" min="1"></label>
  <p>Total: <output name="total" for="price qty">$59.98</output></p>
</form>

<!-- 3. Live slider value -->
<input type="range" id="slider" min="0" max="100" value="50"
  oninput="sliderOut.value = this.value + '%'">
<output id="sliderOut" for="slider">50%</output>

<!-- 4. Character counter -->
<textarea id="msg" maxlength="280"
  oninput="charCount.value = this.value.length + '/280'"
></textarea>
<output id="charCount" for="msg">0/280</output>`) + `

<div class="demo"><h4>▶ Live Demo — Calculator</h4>
<form oninput="demoResult.value = Number(demoA.value) + Number(demoB.value)" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
<input type="number" id="demoA" value="50" style="width:80px;padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:Inter;text-align:center"> <span style="font-size:1.2rem;color:var(--text3)">+</span>
<input type="number" id="demoB" value="25" style="width:80px;padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:Inter;text-align:center"> <span style="font-size:1.2rem;color:var(--text3)">=</span>
<output name="demoResult" for="demoA demoB" style="font-size:1.4rem;font-weight:700;color:var(--accent);min-width:60px">75</output>
</form>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Change the numbers — the output updates instantly!</p>
</div>

<div class="info"><strong>📝 Accessibility:</strong> <code>&lt;output&gt;</code> has an implicit ARIA <code>role="status"</code>, which means screen readers automatically announce changes. This makes it perfect for dynamic content that updates without page reload.</div>
`},

  // 20 - NEW
  {
    id: "tag-fieldset", title: 'The <fieldset> & <legend> Tags', badge: "FORM", emoji: "📦", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;fieldset&gt;</code> groups <strong>related form controls</strong> together with a visible border. <code>&lt;legend&gt;</code> provides a <strong>caption/title</strong> for the group that sits inside the border. Together they improve form readability, accessibility, and organization.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the fieldset element --&gt;
&lt;fieldset class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/fieldset&gt;
    </code></pre>
        
        `+ codeBlock("fieldset & legend", "html", `<!-- 1. Basic grouping -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label>Name: <input type="text" name="name"></label><br>
    <label>Email: <input type="email" name="email"></label><br>
    <label>Phone: <input type="tel" name="phone"></label>
  </fieldset>

  <fieldset>
    <legend>Shipping Address</legend>
    <label>Street: <input type="text" name="street"></label><br>
    <label>City: <input type="text" name="city"></label><br>
    <label>PIN: <input type="text" name="pin"></label>
  </fieldset>
</form>

<!-- 2. Radio button group (BEST PRACTICE) -->
<fieldset>
  <legend>Select Plan</legend>
  <label><input type="radio" name="plan" value="free"> Free</label>
  <label><input type="radio" name="plan" value="pro"> Pro - $9/mo</label>
  <label><input type="radio" name="plan" value="team"> Team - $29/mo</label>
</fieldset>

<!-- 3. Disabled fieldset (disables ALL inputs inside) -->
<fieldset disabled>
  <legend>Premium Features (Upgrade Required)</legend>
  <label><input type="checkbox"> Dark Mode</label>
  <label><input type="checkbox"> Custom Domain</label>
  <label><input type="checkbox"> Analytics</label>
  <p><em>Upgrade to Pro to unlock these features.</em></p>
</fieldset>

<!-- 4. Styled fieldset -->
<fieldset style="border:2px solid #6c63ff; border-radius:12px;
  padding:20px;">
  <legend style="background:#6c63ff; color:white;
    padding:4px 16px; border-radius:20px; font-weight:bold;">
    ✨ Contact Us
  </legend>
  <label>Message: <textarea rows="3" style="width:100%"></textarea></label>
  <button type="submit">Send</button>
</fieldset>`) + `

<div class="demo"><h4>▶ Live Demo — Styled Fieldset</h4>
<fieldset style="border:2px solid var(--accent);border-radius:12px;padding:16px;background:var(--bg3)">
<legend style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;padding:4px 16px;border-radius:20px;font-weight:700;font-size:.85rem">✨ Choose Your Theme</legend>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="dark"> 🌙 Dark Mode</label>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="light" checked> ☀️ Light Mode</label>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="ocean"> 🌊 Ocean Mode</label>
</fieldset>
</div>

<div class="warn"><strong>⚠️ Accessibility Rule:</strong> Radio button groups should <strong>ALWAYS</strong> be wrapped in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>. Without it, screen readers can't tell users what the radio group is about. This is a WCAG requirement.</div>
`},

  // 21 - NEW
  {
    id: "tag-blockquote", title: 'Quotation Tags — blockquote, q, cite', badge: "TEXT", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML provides three dedicated tags for handling quotations and citations — each for a different purpose:</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the blockquote element --&gt;
&lt;blockquote class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/blockquote&gt;
    </code></pre>
        
        `+ codeBlock("Quotation Tags", "html", `<!-- 1. Block quotation -->
<blockquote cite="https://en.wikipedia.org/wiki/HTML">
  <p>HyperText Markup Language (HTML) is the standard
  markup language for documents designed to be displayed
  in a web browser.</p>
  <footer>— <cite>Wikipedia</cite></footer>
</blockquote>

<!-- 2. Inline quotation (adds quotes automatically) -->
<p>As Steve Jobs said,
  <q cite="https://example.com/jobs-speech">
    Stay hungry, stay foolish.
  </q>
</p>

<!-- 3. Citing a work title -->
<p>My favorite book is
  <cite>Atomic Habits</cite> by James Clear.</p>
<p>The movie <cite>Inception</cite> was directed
  by Christopher Nolan.</p>
<p>I love the song
  <cite>Bohemian Rhapsody</cite> by Queen.</p>

<!-- 4. Styled blockquote (modern design) -->
<blockquote style="border-left:4px solid #6c63ff;
  padding:16px 20px; margin:16px 0;
  background:#6c63ff10; border-radius:0 8px 8px 0;
  font-style:italic; font-size:1.1rem;">
  <p>"The only way to do great work is to love
  what you do."</p>
  <footer style="font-style:normal; font-size:.85rem;
    margin-top:8px; color:#888;">
    — Steve Jobs
  </footer>
</blockquote>

<!-- 5. Nested quotation -->
<blockquote>
  <p>The report states:
    <q>Our findings show that
      <q>nested quotes</q>
    work correctly in HTML.</q>
  </p>
</blockquote>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<blockquote style="border-left:4px solid var(--accent);padding:16px 20px;margin:8px 0;background:var(--bg4);border-radius:0 8px 8px 0;font-style:italic;font-size:1.05rem;color:var(--text)">
<p>“The best way to predict the future is to create it.”</p>
<footer style="font-style:normal;font-size:.85rem;margin-top:8px;color:var(--text3)">— <cite style="color:var(--accent2)">Abraham Lincoln</cite></footer>
</blockquote>
<p style="color:var(--text2);margin-top:8px">As the saying goes, <q style="color:var(--accent)">knowledge is power</q> — and HTML is the foundation of all web knowledge!</p>
<p style="color:var(--text2);margin-top:6px">Currently reading <cite style="color:var(--accent3);font-style:italic">Eloquent JavaScript</cite> by Marijn Haverbeke.</p>
</div>

<div class="info"><strong>📝 <code>&lt;q&gt;</code> quotation marks:</strong> Different languages use different quote marks. The <code>&lt;q&gt;</code> tag automatically uses the correct ones based on the <code>lang</code> attribute: English uses “”, French uses «», German uses „“. This is why <code>&lt;q&gt;</code> is better than typing manual quote characters!</div>
`},

  // 22 - NEW
  {
    id: "tag-object-embed", title: 'The <object> & <embed> Tags', badge: "EMBED", emoji: "📥", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;object&gt;</code> embeds <strong>external resources</strong> like PDFs, SVGs, Flash (deprecated), and other HTML pages. It supports <strong>fallback content</strong> between its tags. <code>&lt;embed&gt;</code> is a simpler, <strong>void element</strong> for embedding content with no fallback support.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the object-embed element --&gt;
&lt;object-embed class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/object-embed&gt;
    </code></pre>
        
        `+ codeBlock("object & embed", "html", `<!-- 1. Embed a PDF with fallback -->
<object data="resume.pdf" type="application/pdf"
  width="100%" height="600"
  title="Sanskar's Resume">
  <p>Your browser can't display PDFs.
    <a href="resume.pdf">Download the PDF</a>.
  </p>
</object>

<!-- 2. Embed SVG via object (allows interaction) -->
<object data="diagram.svg" type="image/svg+xml"
  width="400" height="300"
  title="Architecture Diagram">
  <img src="diagram-fallback.png"
    alt="Architecture Diagram (static)">
</object>

<!-- 3. Simple embed (no fallback) -->
<embed src="document.pdf" type="application/pdf"
  width="100%" height="500"
  title="PDF Viewer">

<!-- 4. Nested object fallback chain -->
<object data="video.mp4" type="video/mp4" width="640" height="360">
  <object data="video.webm" type="video/webm" width="640" height="360">
    <p>Your browser doesn't support embedded video.
      <a href="video.mp4">Download the video</a>.
    </p>
  </object>
</object>

<!-- 5. Embed another HTML page -->
<object data="widget.html" type="text/html"
  width="100%" height="200"
  title="Embedded widget">
  <p>Widget failed to load.</p>
</object>`) + `

<div class="demo"><h4>▶ Live Demo — SVG via &lt;object&gt;</h4>
<object data="Sanskar Developer.svg" type="image/svg+xml" width="80" height="80" title="Sanskar Logo" style="border-radius:12px;border:2px solid var(--accent)">
<p style="color:var(--text3)">SVG not supported — fallback text shown instead.</p>
</object>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ SVG loaded via <code>&lt;object&gt;</code>. Unlike <code>&lt;img&gt;</code>, this allows you to interact with SVG elements via JavaScript!</p>
</div>

<div class="tip"><strong>💡 object vs img for SVG:</strong> When you use <code>&lt;img src="logo.svg"&gt;</code>, the SVG is treated as a static image — no interaction possible. But <code>&lt;object data="logo.svg"&gt;</code> loads it as a live document, so you can style SVG elements with CSS and add JavaScript event listeners to individual paths!</div>

<div class="warn"><strong>⚠️ PDF Support Varies:</strong> Some mobile browsers don't have built-in PDF viewers. Always provide a <strong>download link</strong> as fallback content inside your <code>&lt;object&gt;</code> tag. Never assume the user can view embedded PDFs.</div>
`},

  // 23 - NEW
  {
    id: "tag-select", title: 'The <select> & <optgroup> Tags', badge: "FORM", emoji: "📩", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;select&gt;</code> tag creates a <strong>dropdown menu</strong> for choosing one or more options. Each choice is an <code>&lt;option&gt;</code>. The <code>&lt;optgroup&gt;</code> tag lets you <strong>group related options</strong> under labeled headings — making long dropdowns much easier to navigate.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the select element --&gt;
&lt;select class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/select&gt;
    </code></pre>
        
        `+ codeBlock("select & optgroup", "html", `<!-- 1. Basic dropdown -->
<label>Country:
  <select name="country" required>
    <option value="" disabled selected>-- Choose --</option>
    <option value="IN">India</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
    <option value="JP">Japan</option>
  </select>
</label>

<!-- 2. Grouped options with optgroup -->
<select name="language">
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
    <option>TypeScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option>Node.js</option>
    <option>Python</option>
    <option>Java</option>
    <option>Go</option>
  </optgroup>
  <optgroup label="Database">
    <option>MySQL</option>
    <option>MongoDB</option>
    <option>PostgreSQL</option>
  </optgroup>
</select>

<!-- 3. Multiple selection -->
<label>Skills (hold Ctrl to select multiple):
  <select name="skills" multiple size="5">
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
    <option>React</option>
    <option>Node.js</option>
  </select>
</label>

<!-- 4. Placeholder option pattern -->
<select required>
  <option value="" hidden>Select your role...</option>
  <option>Developer</option>
  <option>Designer</option>
  <option>Manager</option>
</select>`) + `

<div class="demo"><h4>▶ Live Demo — Grouped Dropdown</h4>
<select style="width:100%;padding:10px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem">
<option value="" disabled selected>-- Pick a Technology --</option>
<optgroup label="🎨 Frontend"><option>HTML</option><option>CSS</option><option>JavaScript</option><option>React</option></optgroup>
<optgroup label="⚙️ Backend"><option>Node.js</option><option>Python</option><option>Java</option></optgroup>
<optgroup label="🗄️ Database"><option>MongoDB</option><option>MySQL</option><option>PostgreSQL</option></optgroup>
</select>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Options are organized into labeled groups using <code>&lt;optgroup&gt;</code></p>
</div>

<div class="tip"><strong>💡 Placeholder Pattern:</strong> Use <code>&lt;option value="" disabled selected&gt;Choose...&lt;/option&gt;</code> as your first option to create a placeholder. Add <code>hidden</code> to hide it from the dropdown list after selection. Combine with <code>required</code> on the select to force a real choice.</div>
`},

  // 24 - NEW
  {
    id: "tag-ins-del", title: 'The <ins> & <del> Tags', badge: "TEXT", emoji: "✍️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;del&gt;</code> marks text that has been <strong>deleted/removed</strong> from the document (shown with strikethrough). <code>&lt;ins&gt;</code> marks text that has been <strong>inserted/added</strong> (shown with underline). Together they track changes — like "Track Changes" in Microsoft Word or Google Docs.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the ins-del element --&gt;
&lt;ins-del class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/ins-del&gt;
    </code></pre>
        
        `+ codeBlock("ins & del", "html", `<!-- 1. Basic text changes -->
<p>My favorite language is
  <del>Java</del>
  <ins>JavaScript</ins>.
</p>

<!-- 2. Price update (e-commerce) -->
<p class="price">
  <del style="color:#888">$99.99</del>
  <ins style="color:#22c55e; text-decoration:none;
    font-weight:bold;">$49.99</ins>
  <span style="color:red">(50% OFF!)</span>
</p>

<!-- 3. With cite and datetime metadata -->
<del cite="/changelog#v2.0"
  datetime="2026-04-01T10:00:00">
  Old API endpoint: /api/v1/users
</del>
<ins cite="/changelog#v2.0"
  datetime="2026-04-09T14:30:00">
  New API endpoint: /api/v2/users
</ins>

<!-- 4. Todo list with completed items -->
<ul>
  <li><del>Learn HTML basics</del> ✅</li>
  <li><del>Build first webpage</del> ✅</li>
  <li><ins>Learn CSS Grid</ins> 🟡 In Progress</li>
  <li>Learn JavaScript ⭕ Pending</li>
</ul>

<!-- 5. Legal document amendment -->
<p>The agreement shall be valid for
  <del>12 months</del>
  <ins>24 months</ins>
  from the date of signing.</p>

<!-- 6. Block-level changes -->
<del>
  <p>This entire paragraph has been removed
  from the updated version of the document.</p>
</del>
<ins>
  <p>This new paragraph replaces the old content
  with updated information.</p>
</ins>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">My favorite framework is <del style="color:var(--accent3);text-decoration:line-through">Angular</del> <ins style="color:var(--accent2);text-decoration:none;font-weight:700">React</ins>.</p>
<p style="font-size:1.3rem;margin:10px 0"><del style="color:var(--text3);text-decoration:line-through">₹999</del> <ins style="color:#22c55e;text-decoration:none;font-weight:800">₹499</ins> <span style="background:#ff000022;color:#ff4444;padding:2px 8px;border-radius:4px;font-size:.75rem;font-weight:700">50% OFF</span></p>
<ul style="color:var(--text2);list-style:none;padding:0">
<li><del style="color:var(--text3)">Learn HTML</del> ✅</li>
<li><del style="color:var(--text3)">Build first page</del> ✅</li>
<li style="color:var(--accent)"><ins style="text-decoration:none">Learn CSS Grid</ins> 🟡</li>
</ul>
</div>

<div class="info"><strong>📝 <code>&lt;s&gt;</code> vs <code>&lt;del&gt;</code>:</strong> Both show strikethrough, but they mean different things! <code>&lt;del&gt;</code> = "this WAS here and was removed" (edit tracking). <code>&lt;s&gt;</code> = "this is no longer accurate or relevant" (like an expired offer). Use the right one for the right purpose!</div>
`},

  // 25 - NEW
  {
    id: "tag-ruby", title: 'The <ruby>, <rt> & <rp> Tags', badge: "TEXT", emoji: "🌼", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><strong>Ruby annotations</strong> are small text placed above or beside characters to show <strong>pronunciation guides</strong>. Essential for East Asian languages (Japanese, Chinese, Korean) where characters may have multiple pronunciations. The <code>&lt;ruby&gt;</code> tag wraps the base text, <code>&lt;rt&gt;</code> provides the annotation, and <code>&lt;rp&gt;</code> adds fallback parentheses for browsers that don't support ruby.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the ruby element --&gt;
&lt;ruby class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/ruby&gt;
    </code></pre>
        
        `+ codeBlock("ruby annotations", "html", `<!-- 1. Japanese Kanji with Furigana -->
<p>
  <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>
  <ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>
  = Kanji (Chinese characters used in Japanese)
</p>

<!-- 2. Chinese with Pinyin -->
<p>
  <ruby>你<rp>(</rp><rt>nǐ</rt><rp>)</rp></ruby>
  <ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby>
  = Hello in Chinese
</p>

<!-- 3. English pronunciation guide -->
<p>The word
  <ruby>colonel<rp>(</rp><rt>KER-nul</rt><rp>)</rp></ruby>
  is often mispronounced.</p>

<!-- 4. Chemical elements -->
<p>
  <ruby>Fe<rp>(</rp><rt>Iron</rt><rp>)</rp></ruby> +
  <ruby>O₂<rp>(</rp><rt>Oxygen</rt><rp>)</rp></ruby> →
  <ruby>Fe₂O₃<rp>(</rp><rt>Rust</rt><rp>)</rp></ruby>
</p>

<!-- 5. Music chords above lyrics -->
<p style="font-size:1.1rem">
  <ruby>Twinkle<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
  <ruby>twinkle<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
  <ruby>little<rp>(</rp><rt>F</rt><rp>)</rp></ruby>
  <ruby>star<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
</p>

<!-- 6. Styled ruby -->
<style>
  rt { color: #6c63ff; font-size: 0.6em; }
</style>`) + `

<div class="demo"><h4>▶ Live Demo — Ruby Annotations</h4>
<p style="font-size:1.6rem;line-height:2.2;color:var(--text)">
<ruby>漢<rp>(</rp><rt style="color:var(--accent);font-size:.5em">かん</rt><rp>)</rp></ruby><ruby>字<rp>(</rp><rt style="color:var(--accent);font-size:.5em">じ</rt><rp>)</rp></ruby> —
<ruby>你<rp>(</rp><rt style="color:var(--accent2);font-size:.5em">nǐ</rt><rp>)</rp></ruby><ruby>好<rp>(</rp><rt style="color:var(--accent2);font-size:.5em">hǎo</rt><rp>)</rp></ruby>
</p>
<p style="font-size:1.1rem;color:var(--text2)"><ruby>colonel<rp>(</rp><rt style="color:var(--accent3);font-size:.6em">KER-nul</rt><rp>)</rp></ruby> — English words with surprising pronunciation</p>
<p style="font-size:1.2rem;color:var(--text2);margin-top:8px">🎵 <ruby>Twinkle<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby> <ruby>twinkle<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby> <ruby>little<rp>(</rp><rt style="color:var(--accent2);font-size:.55em">F</rt><rp>)</rp></ruby> <ruby>star<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby></p>
</div>

<div class="info"><strong>📝 Why <code>&lt;rp&gt;</code>?</strong> Most modern browsers support ruby. But if an old browser doesn't, without <code>&lt;rp&gt;</code> the annotation would just appear inline with the text, making it unreadable. The <code>&lt;rp&gt;</code> tags add parentheses as fallback: 漢(かん) instead of 漢かん.</div>
`},

  // 26 - NEW
  {
    id: "tag-data-time", title: 'The <data> & <time> Tags', badge: "SEMANTIC", emoji: "⏰", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;time&gt;</code> represents a <strong>date, time, or duration</strong> in a machine-readable format. It helps search engines, calendars, and screen readers understand temporal data.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the data-time element --&gt;
&lt;data-time class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/data-time&gt;
    </code></pre>
        
        `+ codeBlock("data & time", "html", `<!-- 1. Simple date -->
<p>Published on
  <time datetime="2026-04-09">April 9, 2026</time></p>

<!-- 2. Date and time -->
<p>Event starts at
  <time datetime="2026-04-09T18:00:00+05:30">
    6:00 PM IST, April 9
  </time></p>

<!-- 3. Duration -->
<p>Course duration:
  <time datetime="PT2H30M">2 hours 30 minutes</time></p>

<!-- 4. Relative dates -->
<p>Last updated:
  <time datetime="2026-04-09">2 days ago</time></p>

<!-- 5. Data tag for product info -->
<p>Product:
  <data value="SKU-HTML-101">HTML Masterclass</data></p>
<p>Price:
  <data value="49.99">$49.99 USD</data></p>
<p>Rating:
  <data value="4.8">4.8 out of 5 stars</data></p>

<!-- 6. Event listing with time -->
<article>
  <h3>Web Dev Meetup</h3>
  <p><time datetime="2026-04-15T19:00:00">April 15, 7 PM</time></p>
  <p>Duration: <time datetime="PT1H30M">1.5 hours</time></p>
  <p>Tickets: <data value="0">Free!</data></p>
</article>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">This page was built on <time datetime="2026-04-09" style="color:var(--accent);font-weight:600">April 9, 2026</time></p>
<p style="color:var(--text2)">Current session started at <time datetime="2026-04-09T20:00:00+05:30" style="color:var(--accent2);font-weight:600">8:00 PM IST</time></p>
<p style="color:var(--text2)">Study time today: <time datetime="PT3H15M" style="color:var(--accent3);font-weight:600">3 hours 15 minutes</time></p>
<p style="color:var(--text2)">Course price: <data value="0" style="color:#22c55e;font-weight:700">Free!</data></p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Always use <code>&lt;time&gt;</code> for dates in blog posts and articles. Google can use the <code>datetime</code> attribute to show "Published 2 hours ago" in search results. Without <code>&lt;time&gt;</code>, Google has to guess what "April 9" means — and might get it wrong!</div>
`},

  // 27 - NEW
  {
    id: "tag-wbr-br", title: 'The <br> & <wbr> Tags', badge: "INLINE", emoji: "↩️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;br&gt;</code> forces a <strong>hard line break</strong> — the text after it always starts on a new line. <code>&lt;wbr&gt;</code> (Word Break Opportunity) suggests a <strong>possible break point</strong> — the browser only breaks here if the line is too long to fit. Both are <strong>void elements</strong> (no closing tag).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the wbr-br element --&gt;
&lt;wbr-br class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/wbr-br&gt;
    </code></pre>
        
        `+ codeBlock("br & wbr", "html", `<!-- 1. Address (correct use of br) -->
<address>
  Sanskar Developer<br>
  123 Web Street<br>
  New Delhi, India 110001<br>
  Phone: +91 98765 43210
</address>

<!-- 2. Poem / Song lyrics -->
<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is awesome,<br>
  And so are you!
</p>

<!-- 3. wbr in long URLs -->
<p>Visit:
  https://www.<wbr>example.<wbr>com/<wbr>very/<wbr>long/<wbr>path/<wbr>to/<wbr>page.<wbr>html
</p>

<!-- 4. wbr in long words -->
<p>The medicine name is
  Pneumono<wbr>ultra<wbr>microscopic<wbr>silico<wbr>volcano<wbr>coniosis.</p>

<!-- 5. wbr in file paths -->
<p>File location:
  C:\<wbr>Users\<wbr>Sanskar\<wbr>Desktop\<wbr>Projects\<wbr>Web\<wbr>index.html
</p>

<!-- 6. wbr in email -->
<p>Email:
  sanskar.<wbr>developer.<wbr>2026@<wbr>gmail.<wbr>com
</p>

<!-- 7. Haiku (line breaks matter!) -->
<p class="haiku">
  An old silent pond<br>
  A frog jumps into the pond—<br>
  Splash! Silence again.
</p>

<!-- BAD: Don't use br for spacing! -->
<!-- <br><br><br> = WRONG! Use CSS margin instead -->`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg4);padding:14px;border-radius:8px;margin:8px 0">
<p style="color:var(--text2);font-style:italic;line-height:1.8">
  Roses are red,<br>
  Violets are blue,<br>
  HTML is awesome,<br>
  And so are you! 🌹
</p>
</div>
<p style="color:var(--text2);margin-top:8px"><strong>Long URL with &lt;wbr&gt;:</strong><br>
<span style="font-family:'Fira Code',monospace;font-size:.85rem;color:var(--accent2)">https://www.<wbr>sanskar<wbr>developer.<wbr>com/<wbr>projects/<wbr>html-deep-dive/<wbr>chapter-27</span></p>
<p style="color:var(--text2);margin-top:8px"><strong>Address:</strong></p>
<address style="color:var(--text2);font-style:normal;background:var(--bg4);padding:10px;border-radius:6px">
Sanskar Developer<br>
123 Web Dev Lane<br>
New Delhi, India 110001
</address>
</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> to add spacing between elements. This is semantically wrong and makes your HTML unmaintainable. Always use CSS <code>margin</code> or <code>padding</code> for spacing!</div>

<div class="tip"><strong>💡 <code>&amp;shy;</code> vs <code>&lt;wbr&gt;</code>:</strong> Both create break opportunities. The difference: <code>&amp;shy;</code> adds a visible <strong>hyphen</strong> (-) when it breaks, while <code>&lt;wbr&gt;</code> breaks <strong>silently</strong> with no character. Use <code>&amp;shy;</code> for long compound words (like super&shy;cali&shy;fragilistic), and <code>&lt;wbr&gt;</code> for URLs and code where a hyphen would be confusing.</div>
`},

  // 28 - NEW
  {
    id: "tag-abbr-dfn", title: 'The <abbr> & <dfn> Tags', badge: "TEXT", emoji: "📚", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;abbr&gt;</code> marks an <strong>abbreviation or acronym</strong> and shows its full form in a tooltip on hover. <code>&lt;dfn&gt;</code> marks the <strong>defining instance</strong> of a term — the place where a term is first introduced and explained. Together they improve accessibility, SEO, and reader comprehension.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the abbr-dfn element --&gt;
&lt;abbr-dfn class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/abbr-dfn&gt;
    </code></pre>
        
        `+ codeBlock("abbr & dfn", "html", `<!-- 1. Basic abbreviation with tooltip -->
<p>Learn <abbr title="HyperText Markup Language">HTML</abbr>
  and <abbr title="Cascading Style Sheets">CSS</abbr>
  to build websites.</p>

<!-- 2. Definition of a term -->
<p><dfn>Semantic HTML</dfn> means using HTML elements
  that describe the MEANING of content, not just how
  it looks.</p>

<!-- 3. Combining dfn + abbr (FIRST use) -->
<p><dfn><abbr title="Application Programming Interface">
  API</abbr></dfn> is a set of rules that allows
  software programs to communicate with each other.</p>

<!-- 4. Linking to definitions -->
<p><dfn id="def-dom">
  <abbr title="Document Object Model">DOM</abbr></dfn>
  is the tree structure that browsers create from
  your HTML.</p>
<!--  Later in the document: -->
<p>JavaScript manipulates the
  <a href="#def-dom">DOM</a> to update the page.</p>

<!-- 5. Styled abbreviation -->
<style>
  abbr {
    text-decoration: underline dotted;
    cursor: help;
    color: #6c63ff;
  }
</style>

<!-- 6. Multiple tech abbreviations -->
<p>The <abbr title="Representational State Transfer">REST</abbr>
  <abbr title="Application Programming Interface">API</abbr>
  returns <abbr title="JavaScript Object Notation">JSON</abbr>
  data over <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>.</p>`) + `

<div class="demo"><h4>▶ Live Demo — Hover to see full forms</h4>
<p style="color:var(--text2);line-height:1.8">
Learn <abbr title="HyperText Markup Language" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">HTML</abbr>,
<abbr title="Cascading Style Sheets" style="text-decoration:underline dotted;cursor:help;color:var(--accent2)">CSS</abbr>, and
<abbr title="JavaScript" style="text-decoration:underline dotted;cursor:help;color:var(--accent3)">JS</abbr> to become a
<dfn style="font-style:italic;color:var(--accent)" title="A developer skilled in both frontend and backend">Full-Stack Developer</dfn>.
</p>
<p style="color:var(--text2)">The <abbr title="Representational State Transfer" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">REST</abbr> <abbr title="Application Programming Interface" style="text-decoration:underline dotted;cursor:help;color:var(--accent2)">API</abbr> returns <abbr title="JavaScript Object Notation" style="text-decoration:underline dotted;cursor:help;color:var(--accent3)">JSON</abbr> data.</p>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Hover over the dotted-underlined words to see their full meanings!</p>
</div>

<div class="tip"><strong>💡 Best Practice:</strong> Use <code>&lt;dfn&gt;&lt;abbr&gt;</code> together the FIRST time you introduce an acronym, then just <code>&lt;abbr&gt;</code> for every subsequent use. This mimics how academic papers define terms on first use!</div>
`},

  // 29 - NEW
  {
    id: "tag-bdo-bdi", title: 'The <bdo> & <bdi> Tags', badge: "TEXT", emoji: "↔️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;bdo&gt;</code> (<strong>Bidirectional Override</strong>) <strong>forces</strong> text direction. <code>&lt;bdi&gt;</code> (<strong>Bidirectional Isolation</strong>) <strong>isolates</strong> text that might have a different direction from surrounding content. Essential for supporting Arabic, Hebrew, Urdu, and other right-to-left (RTL) languages alongside left-to-right (LTR) content.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the bdo-bdi element --&gt;
&lt;bdo-bdi class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/bdo-bdi&gt;
    </code></pre>
        
        `+ codeBlock("bdo & bdi", "html", `<!-- 1. bdo: Force right-to-left -->
<p><bdo dir="rtl">This text is reversed!</bdo></p>
<!-- Output: !desrever si txet sihT -->

<!-- 2. bdo: Force left-to-right for RTL content -->
<p><bdo dir="ltr">مرحبا</bdo></p>
<!-- Forces Arabic to display LTR -->

<!-- 3. bdi: Isolate user-generated content -->
<ul>
  <li>User: <bdi>أحمد</bdi> - Score: 85</li>
  <li>User: <bdi>Sanskar</bdi> - Score: 92</li>
  <li>User: <bdi>דניאל</bdi> - Score: 78</li>
</ul>

<!-- 4. Without bdi (BROKEN layout) -->
<p>User أحمد posted 3 comments</p>
<!-- The "3" might appear in wrong place! -->

<!-- 5. With bdi (FIXED layout) -->
<p>User <bdi>أحمد</bdi> posted 3 comments</p>
<!-- Everything displays correctly -->

<!-- 6. Combining with lang attribute -->
<p>The Arabic word <bdi lang="ar">مرحبا</bdi>
  means "hello".</p>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)"><strong>Reversed text:</strong> <bdo dir="rtl" style="color:var(--accent)">Hello Sanskar!</bdo></p>
<p style="color:var(--text2)"><strong>User list with bdi:</strong></p>
<ul style="color:var(--text2);list-style:none;padding:0">
<li style="margin:4px 0">👤 <bdi style="color:var(--accent)">أحمد</bdi> — Score: 85</li>
<li style="margin:4px 0">👤 <bdi style="color:var(--accent2)">Sanskar</bdi> — Score: 92</li>
<li style="margin:4px 0">👤 <bdi style="color:var(--accent3)">דניאל</bdi> — Score: 78</li>
</ul>
</div>

<div class="info"><strong>📝 When to use <code>&lt;bdi&gt;</code>:</strong> Whenever you display user-generated text where you DON'T know the language — usernames, reviews, search results, forum posts. It prevents RTL text from breaking your layout. If you build international apps, this tag is essential!</div>
`},

  // 30 - NEW
  {
    id: "tag-colgroup", title: 'The <colgroup> & <col> Tags', badge: "TABLE", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;colgroup&gt;</code> groups one or more <strong>table columns</strong> for styling. <code>&lt;col&gt;</code> defines a single column within the group. These tags let you <strong>style entire columns at once</strong> without adding classes to every <code>&lt;td&gt;</code> in that column.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the colgroup element --&gt;
&lt;colgroup class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/colgroup&gt;
    </code></pre>
        
        `+ codeBlock("colgroup & col", "html", `<!-- 1. Basic column styling -->
<table>
  <colgroup>
    <col style="background:#6c63ff22; width:150px">
    <col style="background:#3ecfcf22">
    <col style="background:#ff7eb622">
  </colgroup>
  <thead>
    <tr><th>Name</th><th>Role</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Sanskar</td><td>Developer</td><td>95</td></tr>
    <tr><td>Rahul</td><td>Designer</td><td>88</td></tr>
  </tbody>
</table>

<!-- 2. Using span to cover multiple columns -->
<table>
  <colgroup>
    <col><!-- Column 1 -->
    <col span="2" style="background:#ffd70033">
    <!-- Columns 2 & 3 share same style -->
  </colgroup>
  <tr><td>A</td><td>B</td><td>C</td></tr>
</table>

<!-- 3. Highlight a specific column -->
<table>
  <colgroup>
    <col>
    <col class="highlight">
    <col>
  </colgroup>
  <!-- The 2nd column gets the 'highlight' class -->
</table>

<!-- 4. Set column widths -->
<table style="width:100%">
  <colgroup>
    <col style="width:20%">
    <col style="width:50%">
    <col style="width:30%">
  </colgroup>
  <tr><td>Small</td><td>Wide</td><td>Medium</td></tr>
</table>`) + `

<div class="demo"><h4>▶ Live Demo — Column Colors</h4>
<table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden">
<colgroup>
<col style="background:color-mix(in srgb,var(--accent),transparent 80%)">
<col style="background:color-mix(in srgb,var(--accent2),transparent 80%)">
<col style="background:color-mix(in srgb,var(--accent3),transparent 80%)">
</colgroup>
<thead><tr style="color:var(--text)"><th style="padding:8px;text-align:left">Name</th><th style="padding:8px;text-align:left">Tech</th><th style="padding:8px;text-align:left">Score</th></tr></thead>
<tbody style="color:var(--text2)"><tr><td style="padding:8px">Sanskar</td><td style="padding:8px">HTML/CSS</td><td style="padding:8px">95</td></tr><tr><td style="padding:8px">Rahul</td><td style="padding:8px">React</td><td style="padding:8px">88</td></tr><tr><td style="padding:8px">Ayush</td><td style="padding:8px">Node.js</td><td style="padding:8px">91</td></tr></tbody>
</table>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Each column has a different background color set via <code>&lt;col&gt;</code> — no classes on individual cells!</p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> <code>&lt;col&gt;</code> is great for setting column widths in percentage-based layouts. Define <code>width</code> on each <code>&lt;col&gt;</code> to control how the table distributes space, without touching any <code>&lt;td&gt;</code> elements.</div>
`},

  // 31 - NEW
  {
    id: "tag-noscript", title: 'The <noscript> Tag', badge: "META", emoji: "🚫", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;noscript&gt;</code> tag defines content that is <strong>only displayed when JavaScript is disabled</strong> or not supported. It's your fallback message or alternative content for users who can't run scripts — search engine crawlers, users with JS disabled for security, old browsers, or corporate networks that block JavaScript.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the noscript element --&gt;
&lt;noscript class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/noscript&gt;
    </code></pre>
        
        `+ codeBlock("noscript", "html", `<!-- 1. Basic warning message -->
<noscript>
  <div style="background:#ff4444; color:white;
    padding:16px; text-align:center;">
    ⚠️ This website requires JavaScript to work.
    Please enable it in your browser settings.
  </div>
</noscript>

<!-- 2. In the <head> for redirect -->
<head>
  <noscript>
    <meta http-equiv="refresh"
      content="0; url=/no-js-version.html">
  </noscript>
</head>

<!-- 3. Fallback content -->
<div id="app">
  <!-- React/Vue app renders here -->
</div>
<noscript>
  <h1>Welcome to My Website</h1>
  <p>For the best experience, please enable
    JavaScript. Here's a basic version:</p>
  <nav>
    <a href="/about">About</a> |
    <a href="/contact">Contact</a>
  </nav>
</noscript>

<!-- 4. Analytics fallback (no-JS tracking) -->
<noscript>
  <img src="https://analytics.example.com/pixel.gif"
    width="1" height="1" alt="">
</noscript>

<!-- 5. Alternative styles for no-JS -->
<noscript>
  <style>
    .js-only { display: none !important; }
    .no-js-msg { display: block !important; }
  </style>
</noscript>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">Since you're viewing this page with JavaScript enabled, the <code>&lt;noscript&gt;</code> content below is <strong>hidden</strong>:</p>
<noscript><div style="background:#ff444433;color:var(--text);padding:12px;border-radius:8px;border:2px solid #ff4444">🚫 JavaScript is disabled! You're seeing this fallback message.</div></noscript>
<div style="background:color-mix(in srgb,var(--accent2),transparent 85%);padding:12px;border-radius:8px;margin-top:8px"><p style="color:var(--text2);margin:0">✅ JavaScript is <strong>enabled</strong> — the noscript content above is invisible. Disable JS in DevTools to see it appear!</p></div>
</div>

<div class="info"><strong>📝 Who disables JavaScript?</strong> About 1-2% of web users have JS disabled. But more importantly, <strong>search engine crawlers</strong>, <strong>screen readers</strong>, and <strong>RSS feed parsers</strong> may not run JavaScript. Always provide meaningful noscript fallbacks for critical content.</div>
`},

  // 32 - NEW
  {
    id: "tag-textarea", title: 'The <textarea> Tag', badge: "FORM", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;textarea&gt;</code> tag creates a <strong>multi-line text input field</strong>. Unlike <code>&lt;input type="text"&gt;</code> which is single-line, textarea can hold <strong>paragraphs, code, messages, comments, and any long-form text</strong>. It's a replaced element with its own scrollbar when content overflows.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the textarea element --&gt;
&lt;textarea class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/textarea&gt;
    </code></pre>
        
        `+ codeBlock("textarea — resize CSS", "css", `/* Allow both directions (default) */
textarea { resize: both; }

/* Only vertical resize */
textarea { resize: vertical; }

/* Only horizontal resize */
textarea { resize: horizontal; }

/* No resize at all */
textarea { resize: none; }

/* Auto-growing textarea (modern CSS) */
textarea {
  field-sizing: content; /* NEW! Auto-grows */
  min-height: 3lh;
  max-height: 10lh;
}`) + `

`+ codeBlock("textarea — All Uses", "html", `<!-- 1. Basic textarea -->
<label>Your message:
  <textarea name="message" rows="5" cols="40"
    placeholder="Type your message here..."
    required></textarea>
</label>

<!-- 2. With character limit -->
<textarea maxlength="280" minlength="10"
  placeholder="What's happening? (max 280 chars)"
  id="tweet"></textarea>
<p id="counter">0 / 280</p>
<script>
  tweet.oninput = () =>
    counter.textContent =
      tweet.value.length + " / 280";
<${'/'}script>

<!-- 3. Pre-filled content -->
<textarea name="bio" rows="3">
Hi! I'm Sanskar, a web developer
who loves HTML, CSS, and JavaScript.
</textarea>

<!-- 4. Read-only (display code/logs) -->
<textarea readonly rows="4" style="font-family:monospace">
console.log("Hello World");
document.title = "My Page";
alert("Done!");
</textarea>

<!-- 5. Styled modern textarea -->
<textarea rows="4" style="
  width: 100%; padding: 12px;
  border: 2px solid #6c63ff;
  border-radius: 10px;
  font-family: Inter, sans-serif;
  resize: vertical;
  background: #6c63ff08;
" placeholder="Write something beautiful..."></textarea>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<textarea rows="4" placeholder="Type anything here... this is a real textarea!" style="width:100%;padding:12px;background:var(--bg3);border:2px solid var(--border);border-radius:10px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem;resize:vertical"></textarea>
<p style="font-size:.8rem;color:var(--text3);margin-top:4px">↑ Try typing, resizing the handle at the bottom-right, and scrolling with lots of text!</p>
</div>

<div class="warn"><strong>⚠️ Default Value Gotcha:</strong> The textarea's default value goes <strong>between the tags</strong>, NOT in a <code>value</code> attribute. Also, any whitespace/newlines between the tags IS preserved — including indentation in your HTML! Start the content immediately after the opening tag to avoid unwanted spaces.</div>

<div class="tip"><strong>💡 Auto-Growing Textarea:</strong> The new CSS <code>field-sizing: content</code> property makes textareas grow automatically as the user types. It's supported in Chrome 123+ and is the cleanest solution for auto-growing inputs without JavaScript!</div>
`},

  // 33 - NEW
  {
    id: "tag-figure", title: 'The <figure> & <figcaption> Tags', badge: "SEMANTIC", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;figure&gt;</code> tag encapsulates <strong>self-contained content</strong>, such as an image, diagram, code snippet, or illustration, which is referenced from the main text but can be moved without affecting the document's flow. The <code>&lt;figcaption&gt;</code> provides an optional <strong>caption</strong> or legend for the figure.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the figure element --&gt;
&lt;figure class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/figure&gt;
    </code></pre>
        
        `+ codeBlock("figure & figcaption", "html", `<!-- 1. Traditional Image with Caption -->
<figure>
  <img src="photo.jpg" alt="A beautiful sunset">
  <figcaption>Fig 1. Sunset over the ocean.</figcaption>
</figure>

<!-- 2. Figure containing a Code Block -->
<figure>
  <figcaption>Example CSS for an auto-growing textarea:</figcaption>
  <pre><code>
    textarea { field-sizing: content; }
  </code></pre>
</figure>

<!-- 3. Figure containing a Blockquote -->
<figure>
  <blockquote>
    "Talk is cheap. Show me the code."
  </blockquote>
  <figcaption>— Linus Torvalds</figcaption>
</figure>

<!-- 4. Multiple Images in one Figure -->
<figure>
  <img src="before.png" alt="Before redesign">
  <img src="after.png" alt="After redesign">
  <figcaption>Comparison of our website redesign.</figcaption>
</figure>

<!-- 5. Styled Figure -->
<figure style="margin:0; padding:16px; background:#f0f0f0; border-left:4px solid #6c63ff;">
  <img src="chart.svg" alt="Growth chart" style="width:100%">
  <figcaption style="font-size:0.85em; color:#666; margin-top:8px; text-align:center;">
    Q3 Financial Growth Chart
  </figcaption>
</figure>`) + `

<div class="demo"><h4>▶ Live Demo — Semantic Figure</h4>
<figure style="margin:16px 0;padding:12px;background:var(--bg3);border:1px solid var(--border);border-radius:12px;display:flex;flex-direction:column;align-items:center;">
  <div style="font-size:3rem;margin-bottom:8px;">🚀</div>
  <figcaption style="font-size:.9rem;color:var(--text2);font-weight:600;text-align:center;">Fig 1. A rocket representing modern web dev speed.</figcaption>
</figure>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ The caption is semantically tied to the content. Screen readers know they belong together!</p>
</div>

<div class="warn"><strong>⚠️ Placement Rules:</strong> A <code>&lt;figcaption&gt;</code> must be the <strong>first</strong> or <strong>last</strong> child of the <code>&lt;figure&gt;</code>. You can only have ONE figcaption per figure.</div>
`},

  // 34 - NEW
  {
    id: "tag-button", title: 'The <button> Tag', badge: "FORM", emoji: "🔘", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;button&gt;</code> element is a clickable interactive control used for submitting forms, resetting forms, or triggering custom JavaScript actions. It is highly versatile and can contain HTML content (unlike <code>&lt;input type="button"&gt;</code>).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the button element --&gt;
&lt;button class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/button&gt;
    </code></pre>
        
        `+ codeBlock("button — All Uses", "html", `<!-- 1. The 3 Standard Types -->
<form>
  <!-- Triggers JS without submitting -->
  <button type="button" onclick="alert('Hi!')">Just a Button</button>
  
  <!-- Resets all inputs in the form -->
  <button type="reset">Clear Form</button>

  <!-- Submits the form (Default behavior) -->
  <button type="submit">Submit Data</button>
</form>

<!-- 2. Rich Content inside Buttons (Why button > input) -->
<button type="button">
  <img src="icon.svg" alt="">
  <span>Save Profile</span>
  <strong>(Pro)</strong>
</button>

<!-- 3. Form Overrides (Advanced) -->
<form action="/publish" method="POST">
  <input type="text" name="title" required>
  
  <!-- Normal submit (/publish) -->
  <button type="submit">Publish</button>
  
  <!-- Overrides action URL & skips required validation validation -->
  <button type="submit" formaction="/draft" formnovalidate>
    Save Draft
  </button>
</form>

<!-- 4. Disabled State -->
<button disabled>Processing...</button>`) + `

<div class="demo"><h4>▶ Live Demo — Buttons</h4>
<div style="display:flex;gap:12px;flex-wrap:wrap;">
  <button type="button" onclick="alert('Custom Action!')" style="padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:Inter;font-weight:600;">✨ JS Action</button>
  <button type="button" disabled style="padding:10px 16px;background:var(--bg3);color:var(--text3);border:1px solid var(--border);border-radius:8px;cursor:not-allowed;font-family:Inter;font-weight:600;">Processing ⏳</button>
  <button type="button" style="padding:10px 16px;background:transparent;color:var(--accent2);border:2px solid var(--accent2);border-radius:8px;cursor:pointer;font-family:Inter;font-weight:600;display:flex;align-items:center;gap:6px;"><span>Icon Inside</span> 🚀</button>
</div>
</div>

<div class="warn"><strong>⚠️ The "type" Gotcha:</strong> If you use a <code>&lt;button&gt;</code> inside a form AND DON'T specify a <code>type</code>, it defaults to <code>type="submit"</code>! This causes pages to refresh unexpectedly when you just wanted a JS trigger. ALWAYS explicitly add <code>type="button"</code> if it's not meant to submit a form!</div>
`},

  // 35 - NEW
  {
    id: "tag-label", title: 'The <label> Tag', badge: "FORM", emoji: "🏷️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;label&gt;</code> tag defines a caption for a user interface item. It is <strong>critical for accessibility</strong> and usability. Clicking on a label automatically focuses (or toggles) the input it is associated with.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the label element --&gt;
&lt;label class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/label&gt;
    </code></pre>
        
        `+ codeBlock("label", "html", `<!-- 1. Explicit Linking (Best Practice) -->
<label for="username">Enter Username:</label>
<input type="text" id="username" name="user">

<!-- 2. Implicit Linking (Wrapping) -->
<label>
  Enter Email:
  <input type="email" name="email">
</label>

<!-- 3. The Checkbox Hit Area Trick -->
<!-- Clicking the text "Subscribe to newsletter" checks the box! -->
<label for="news" style="cursor:pointer">
  <input type="checkbox" id="news" value="yes">
  Subscribe to newsletter
</label>

<!-- 4. Hidden Labels for Screen Readers -->
<!-- Sometimes design doesn't want a visual label (like a search bar),
     but accessibility still requires one! -->
<label for="search" class="sr-only">Search the site:</label>
<input type="search" id="search" placeholder="Search...">
<style>
  /* Screen Reader Only CSS class */
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    padding: 0; overflow: hidden; clip: rect(0,0,0,0);
    white-space: nowrap; border: 0;
  }
</style>

<!-- 5. Custom Checkbox Hacks -->
<!-- You can hide the input and style the label instead! -->
<input type="checkbox" id="toggle" hidden>
<label for="toggle" class="custom-btn">Toggle Me</label>`) + `

<div class="demo"><h4>▶ Live Demo — The Power of Labels</h4>
<div style="background:var(--bg3);padding:16px;border-radius:8px;border:1px solid var(--border);">
  <p style="margin:0 0 10px 0;color:var(--text2);">Try clicking the TEXT to toggle the checkboxes:</p>
  
  <div style="margin-bottom:8px">
    <input type="checkbox" id="demoBad">
    <span style="color:var(--text3);">No Label (Hard to click text)</span>
  </div>
  
  <div>
    <input type="checkbox" id="demoGood">
    <label for="demoGood" style="color:var(--accent);font-weight:600;cursor:pointer;user-select:none;">With Label ✅ (Click my text!)</label>
  </div>
</div>
</div>

<div class="tip"><strong>💡 Custom Styled Switches:</strong> Because clicking a label checks its input, developers build custom "toggle switches" by hiding the real <code>&lt;input type="checkbox"&gt;</code> and applying CSS to the <code>&lt;label&gt;</code>!</div>
`},

  // 36 - NEW
  {
    id: "tag-track", title: 'The <track> Tag', badge: "MEDIA", emoji: "🔤", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;track&gt;</code> tag is used as a child of the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements. It specifies timed text tracks (like <strong>subtitles, captions, translation tracks, and chapter markers</strong>). The subtitle data is usually stored in a <strong>WebVTT</strong> (.vtt) file.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the track element --&gt;
&lt;track class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/track&gt;
    </code></pre>
        
        `+ codeBlock("track & WebVTT", "html", `<!-- 1. Video with Multi-Language Subtitles -->
<video controls src="movie.mp4" width="100%">
  <!-- Default English Captions -->
  <track default
         kind="captions"
         srclang="en"
         label="English (CC)"
         src="captions_en.vtt">
         
  <!-- Spanish Subtitles -->
  <track kind="subtitles"
         srclang="es"
         label="Español"
         src="subs_es.vtt">
         
  <!-- French Subtitles -->
  <track kind="subtitles"
         srclang="fr"
         label="Français"
         src="subs_fr.vtt">
</video>

<!-- 2. What does a .vtt file look like? -->
<!-- Save this as "captions_en.vtt" -->
<pre>
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to the HTML Deep Dive!

00:00:05.500 --> 00:00:08.000
<i>[Upbeat music playing]</i>
Today, we learn the track tag.
</pre>`) + `

<div class="demo"><h4>▶ WebVTT Concept</h4>
<p style="color:var(--text2);margin-bottom:8px">The video player extracts timestamps from the VTT file and overlays text. The browser provides a native "CC" button to select tracks!</p>
<div style="background:#000;color:#fff;border-radius:8px;padding:40px 10px 10px;text-align:center;position:relative;height:120px;display:flex;align-items:flex-end;justify-content:center;box-shadow:inset 0 0 20px rgba(0,0,0,0.8);">
  <div style="position:absolute;top:10px;right:10px;background:#333;padding:4px 8px;border-radius:4px;font-size:.7rem;">⚙️ CC</div>
  <div style="background:rgba(0,0,0,0.75);padding:4px 12px;border-radius:4px;font-size:1.1rem;font-weight:600;"><i>[Music]</i> Welcome to the HTML Deep Dive!</div>
</div>
</div>

<div class="warn"><strong>⚠️ Cross-Origin Restrictions (CORS):</strong> If your video is hosted on <code>example.com</code> and your <code>.vtt</code> track is on <code>cdn.com</code>, the browser blocks the track for security. You must configure CORS headers or use <code>crossorigin="anonymous"</code> on the video tag!</div>
`},

  // 37 - NEW
  {
    id: "tag-search", title: 'The <search> Tag', badge: "SEMANTIC", emoji: "🔍", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;search&gt;</code> tag is a brand new semantic element (introduced in HTML5.2 / 2023) representing a section of the document used to <strong>search or filter</strong> content. It replaces the old pattern of doing <code>&lt;div role="search"&gt;</code>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the search element --&gt;
&lt;search class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/search&gt;
    </code></pre>
        
        `+ codeBlock("search container", "html", `<!-- 1. The Modern Search Pattern (2024+) -->
<search>
  <form action="/results">
    <label for="q">Search articles:</label>
    <input type="search" id="q" name="query" placeholder="Type to search...">
    <button type="submit">Go</button>
  </form>
</search>

<!-- 2. Search with advanced filters -->
<search>
  <h2>Find a Product</h2>
  <form action="/shop">
    <input type="search" name="keyword" placeholder="Laptop, Keyboard...">
    
    <fieldset>
      <legend>Filters</legend>
      <label><input type="checkbox" name="sale"> On Sale</label>
      <label><input type="checkbox" name="stock"> In Stock</label>
      <select name="sort">
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </fieldset>
    
    <button type="submit">Filter Results</button>
  </form>
</search>

<!-- 3. Client-side filtering (No Form) -->
<!-- search doesn't STRICTLY need a form if JS handles it -->
<search>
  <label for="table-filter">Filter table rows:</label>
  <input type="search" id="table-filter" oninput="filterRows(this.value)">
</search>

<!-- The Old Way (For historical context, don't use this anymore!) -->
<!-- <div role="search"> ... </div> -->`) + `

<div class="demo"><h4>▶ Live Demo — Modern Search Component</h4>
<search style="display:block;background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);">
  <form onsubmit="event.preventDefault(); alert('Searching for: ' + document.getElementById('demoQ').value)" style="display:flex;gap:8px;">
    <input type="search" id="demoQ" placeholder="Search the guide..." style="flex:1;padding:10px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-family:Inter;">
    <button type="submit" style="padding:10px 20px;border-radius:8px;border:none;background:var(--accent);color:white;font-family:Inter;font-weight:600;cursor:pointer;">Search</button>
  </form>
</search>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ The entire container is wrapped in a <code>&lt;search&gt;</code> tag for modern accessibility!</p>
</div>

<div class="tip"><strong>💡 ARIA Fallback:</strong> Since <code>&lt;search&gt;</code> is relatively new (supported in all browsers since late 2023), it's highly recommended right now to use it, but no longer necessary to add <code>role="search"</code> fallback. Screen readers fully support it natively now!</div>
`},

  // 38 - NEW
  {
    id: "tag-svg", title: 'The <svg> Tag', badge: "MEDIA", emoji: "📐", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;svg&gt;</code> (Scalable Vector Graphics) tag defines vector-based graphics in XML format. Unlike JPEGs or PNGs (which are grids of pixels), SVGs are made of mathematical paths, circles, and polygons, so they <strong>never lose quality</strong> no matter how much you zoom in.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the svg element --&gt;
&lt;svg class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/svg&gt;
    </code></pre>
        
        `+ codeBlock("SVG drawing primitives", "html", `<!-- 1. A Basic SVG ViewBox with primitives -->
<!-- viewBox="x y width height" defines the coordinate system -->
<svg viewBox="0 0 100 100" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <!-- A red circle in the center -->
  <circle cx="50" cy="50" r="40" fill="tomato" />
  
  <!-- A blue outline rectangle -->
  <rect x="20" y="20" width="60" height="60" fill="none" stroke="royalblue" stroke-width="4" />
</svg>

<!-- 2. Complex Paths & Gradients -->
<svg viewBox="0 0 200 100" width="100%" height="150">
  <defs>
    <!-- Define a linear gradient -->
    <linearGradient id="myGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6c63ff" />
      <stop offset="100%" stop-color="#3ecfcf" />
    </linearGradient>
  </defs>
  
  <!-- "d" means definition. M=Move to, Q=Quadratic curve, T=Smooth curve -->
  <path d="M 10 50 Q 50 10 100 50 T 190 50" fill="none" stroke="url(#myGrad)" stroke-width="8" stroke-linecap="round" />
</svg>`) + `

<div class="demo"><h4>▶ Live Demo — Interactive SVG</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <svg viewBox="0 0 100 100" width="120" style="overflow:visible;cursor:pointer;">
    <style>
      .heart { fill: var(--text3); transition: fill 0.3s, transform 0.3s; transform-origin: center; }
      .heart:hover { fill: #ff4a8b; transform: scale(1.2); }
    </style>
    <!-- SVG Heart Path -->
    <path class="heart" d="M50,88 C50,88 20,60 10,40 C0,20 20,5 35,15 C50,30 50,30 50,30 C50,30 50,30 65,15 C80,5 100,20 90,40 C80,60 50,88 50,88 Z" />
  </svg>
  <p style="font-size:0.85rem;color:var(--text2);margin-top:10px;">Hover over the SVG heart!<br>Because it is inline HTML, CSS handles the color transition perfectly.</p>
</div>
</div>
`},

  // 39 - NEW
  {
    id: "tag-details-deep", title: 'The <details> & <summary> Tags', badge: "CONTENT", emoji: "🔽", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;details&gt;</code> element creates a disclosure widget. The <code>&lt;summary&gt;</code> element serves as the clickable heading/button. When you click the summary, the details "open" and reveal the hidden content.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the details-deep element --&gt;
&lt;details-deep class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/details-deep&gt;
    </code></pre>
        
        `+ codeBlock("Native Accordions", "html", `<!-- 1. Basic Toggle (Closed by default) -->
<details>
  <summary>Click to read terms and conditions</summary>
  <p>Here are all the extensive terms you never read anyway.</p>
</details>

<!-- 2. Open by Default -->
<details open>
  <summary>Advanced Settings</summary>
  <label><input type="checkbox"> Enable dark mode</label>
</details>

<!-- 3. Exclusive Accordion (New 'name' attribute!) -->
<!-- Works in Chrome 120+, Safari 17.4+ -->
<div class="faq-group">
  <details name="faq">
    <summary>How much does it cost?</summary>
    <p>It's completely free.</p>
  </details>
  
  <details name="faq">
    <summary>Is there a refund policy?</summary>
    <p>Yes, 30 days money back guaranteed.</p>
  </details>
</div>

<!-- 4. Styling the Marker -->
<style>
  /* Remove the default black triangle marker */
  details > summary { list-style: none; }
  details > summary::-webkit-details-marker { display: none; }
  
  /* Add custom marker via CSS pseudo-elements */
  summary::before { content: "👉 "; }
  details[open] summary::before { content: "👇 "; }
</style>`) + `

<div class="demo"><h4>▶ Live Demo — CSS Styled Details</h4>
<div style="display:flex;flex-direction:column;gap:10px;">
  <details style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
    <summary style="padding:14px;background:var(--bg4);font-weight:600;cursor:pointer;color:var(--accent);">Question 1: Do I need JavaScript for this?</summary>
    <div style="padding:14px;border-top:1px solid var(--border);">No! The open and close tracking is handled natively by the HTML specifications.</div>
  </details>
  <details style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
    <summary style="padding:14px;background:var(--bg4);font-weight:600;cursor:pointer;color:var(--accent);">Question 2: Is it accessible?</summary>
    <div style="padding:14px;border-top:1px solid var(--border);">Yes, screen readers natively announce the expanded/collapsed state to users.</div>
  </details>
</div>
</div>
`},

  // 40 - NEW
  {
    id: "tag-form", title: 'The <form> Tag', badge: "FORM", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;form&gt;</code> element is the foundational container for collecting and submitting user data. It bundles all inputs together and defines <em>where</em> the data is sent and <em>how</em> it is sent to the server.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Forms interact directly with the browser's built-in state management and validation APIs, intercepting default submission behaviors when JavaScript event listeners are attached.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always associate labels with inputs (using 'for' and 'id') and leverage native HTML5 validation attributes before relying on JS validation.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the form element --&gt;
&lt;form class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/form&gt;
    </code></pre>
        
        `+ codeBlock("Form Architectures", "html", `<!-- 1. Standard Login Form (POST) -->
<!-- Sends credentials securely in the request body -->
<form action="/login" method="POST">
  <label>Email: <input type="email" name="email" required></label>
  <label>Password: <input type="password" name="pwd" required></label>
  <button type="submit">Login</button>
</form>

<!-- 2. Search Form (GET) -->
<!-- Sends query in URL: /search?q=cats -->
<form action="/search" method="GET">
  <input type="search" name="q" placeholder="Search...">
  <button type="submit">Go</button>
</form>

<!-- 3. File Upload Form (Requires multipart/form-data) -->
<form action="/upload-avatar" method="POST" enctype="multipart/form-data">
  <label>Profile Pic: <input type="file" name="avatar" accept="image/*"></label>
  <button type="submit">Upload</button>
</form>

<!-- 4. JS-Only Form (Prevent Default) -->
<form id="js-form">
  <input type="text" id="demoField" required>
  <button type="submit">Submit via Fetch</button>
</form>

<${''}script>
  document.getElementById("js-form").onsubmit = function(event) {
    event.preventDefault(); // STOPS the page from reloading!
    const val = document.getElementById("demoField").value;
    alert("Captured via JS: " + val);
    // You would use fetch() here to send data
  };
<${'/'}script>`) + `

<div class="warn"><strong>⚠️ The "name" identifier:</strong> Elements inside a form <strong>must</strong> have a <code>name</code> attribute to be submitted. If an input only has an <code>id</code>, the server will never receive its data! The browser uses the <code>name</code> attribute as the "key" in the data payload.</div>
`},

  // 41 - NEW
  {
    id: "tag-text-semantics", title: 'Text Semantics: sup, sub, small, mark', badge: "TEXT", emoji: "🔠", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML provides highly specific inline tags to give semantic meaning and default styling to small portions of text without having to rely on generic <code>&lt;span&gt;</code> tags and CSS classes.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the text-semantics element --&gt;
&lt;text-semantics class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/text-semantics&gt;
    </code></pre>
        
        `+ codeBlock("Text Semantics Usage", "html", `<!-- 1. Typography and Math -->
<p>Albert Einstein's famous equation is E = mc<sup>2</sup>.</p>

<p>The chemical formula for water is H<sub>2</sub>O.</p>

<p>Today is the 10<sup>th</sup> of November.</p>

<!-- 2. Legal / Secondary content -->
<div class="product-price">
  $99.00
  <br>
  <small>*Plus applicable taxes and fees.</small>
</div>

<!-- 3. Search Highlighting -->
<p>
  Search results for "HTML": <br>
  Learning <mark>HTML</mark> tags is the best way to understand <mark>HTML</mark> architecture.
</p>

<!-- 4. CSS Customization -->
<!-- You can easily style <mark> to fit your theme! -->
<style>
  mark {
    background-color: var(--accent);
    color: white;
    padding: 0 4px;
    border-radius: 4px;
  }
</style>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:8px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  O<sub>2</sub> + 2H<sub>2</sub> → 2H<sub>2</sub>O 🧪<br>
  My computer ranks 1<sup>st</sup> in speed! 🏆<br>
  Did you read the <mark style="background:var(--accent2);color:#000;padding:2px 6px;border-radius:4px;font-weight:bold;">highlighted</mark> section? 🔦<br>
  <small style="color:var(--text3);font-size:0.75rem;">(Terms and conditions apply. Batteries not included.)</small>
</div>
</div>
`},

  // 42 - NEW
  {
    id: "tag-document-semantics", title: 'Document Structure: header, main, footer & more', badge: "SEMANTIC", emoji: "🏗️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Introduced in HTML5, these are the architectural landmark tags. Before these existed, developers built entire wireframes out of <code>&lt;div id="header"&gt;</code>. Using layout semantics tells screen readers, search engines, and reading modes exactly <strong>what part of the page is the core content, and what is chrome/fluff</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the document-semantics element --&gt;
&lt;document-semantics class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/document-semantics&gt;
    </code></pre>
        
        `+ codeBlock("Semantic Page Skeleton", "html", `<body>
  
  <header>
    <h1>My Awesome Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <main>
    <article>
      <header>
        <h2>Getting Started with HTML</h2>
        <p><i>Posted on Nov 10</i></p>
      </header>
      
      <section id="introduction">
        <h3>Introduction</h3>
        <p>In this post we will learn about semantics...</p>
      </section>
      
      <section id="conclusion">
        <h3>Conclusion</h3>
        <p>Semantics are important.</p>
      </section>
      
      <footer>
        <p>Written by Sanskar</p>
      </footer>
    </article>
    
    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li><a href="/css">Learn CSS next</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2026 Developer Space</p>
  </footer>
  
</body>`) + `

<div class="tip"><strong>💡 Reading Mode:</strong> Ever used "Reader View" in Safari or Firefox? It strips away sidebars, ads, and footers, leaving only the text. How does it know what the text is? It explicitly strips <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;aside&gt;</code>, and extracts the text inside <code>&lt;main&gt;</code> and <code>&lt;article&gt;</code>! Without semantic tags, Reader View fails.</div>
`},

  // 43 - NEW
  {
    id: "tag-template-2", title: 'The <template> Tag', badge: "META", emoji: "📋", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;template&gt;</code> tag holds <strong>HTML content that is NOT rendered when the page loads</strong>. It acts as a reusable blueprint that JavaScript can clone and insert into the page dynamically. Think of it as a cookie cutter — you define the shape once and stamp out copies whenever needed.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the template-2 element --&gt;
&lt;template-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/template-2&gt;
    </code></pre>
        
        `+ codeBlock("Template Usage", "html", `<!-- 1. Define a reusable card template -->
<template id="user-card-template">
  <div class="user-card" style="border:1px solid #ccc;padding:16px;border-radius:8px;margin:8px 0;">
    <img class="avatar" src="" alt="" width="50" style="border-radius:50%;">
    <h3 class="name">Name Here</h3>
    <p class="email">email@here.com</p>
    <span class="role">Role</span>
  </div>
</template>

<div id="user-list"></div>

<script>
const template = document.getElementById('user-card-template');
const container = document.getElementById('user-list');

// Sample data (could come from an API)
const users = [
  { name: 'Sanskar', email: 'sanskar@dev.com', role: 'Admin' },
  { name: 'Ayush Singh', email: 'ayush@dev.com', role: 'Editor' },
  { name: 'Rahul Kumar', email: 'rahul@dev.com', role: 'Viewer' }
];

// Clone template for each user and fill in data
users.forEach(user => {
  // Clone the template's content
  const clone = template.content.cloneNode(true);
  
  // Fill in the blanks
  clone.querySelector('.name').textContent = user.name;
  clone.querySelector('.email').textContent = user.email;
  clone.querySelector('.role').textContent = user.role;
  
  // Add to the live DOM (NOW it renders!)
  container.appendChild(clone);
});
<\/script>`) + `
<div class="demo"><h4>▶ Live Demo — Dynamic Card Generation</h4>
<template id="demoTplCard"><div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;margin:6px 0;display:flex;align-items:center;gap:12px;"><div class="tpl-icon" style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;"></div><div><strong class="tpl-name" style="color:var(--text)"></strong><br><small class="tpl-desc" style="color:var(--text3)"></small></div></div></template>
<div id="demoTplList"></div>
<button onclick="addDemoCard()" style="margin-top:10px;padding:8px 20px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">+ Add Card from Template</button>
<script>
let cardCount=0;
const demoItems=[{icon:'🎨',name:'Design',desc:'UI/UX Design',bg:'#6c63ff33'},{icon:'💻',name:'Code',desc:'Frontend Dev',bg:'#3ecfcf33'},{icon:'🚀',name:'Deploy',desc:'CI/CD Pipeline',bg:'#ffa36b33'},{icon:'📊',name:'Analytics',desc:'Data Insights',bg:'#ff7eb633'},{icon:'🔒',name:'Security',desc:'Auth & Encryption',bg:'#4ade8033'}];
function addDemoCard(){
const t=document.getElementById('demoTplCard');
const c=t.content.cloneNode(true);
const item=demoItems[cardCount%demoItems.length];
c.querySelector('.tpl-icon').textContent=item.icon;
c.querySelector('.tpl-icon').style.background=item.bg;
c.querySelector('.tpl-name').textContent=item.name;
c.querySelector('.tpl-desc').textContent=item.desc;
document.getElementById('demoTplList').appendChild(c);
cardCount++;
}
<\/script>
</div>

<div class="tip"><strong>💡 Web Components:</strong> The <code>&lt;template&gt;</code> tag is one of the pillars of the <strong>Web Components</strong> standard (along with Custom Elements and Shadow DOM). Frameworks like Lit and Stencil use templates heavily under the hood to define reusable component blueprints!</div>`},

  // 44 - NEW
  {
    id: "tag-dialog-2", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;dialog&gt;</code> tag creates a <strong>native modal or non-modal dialog box</strong> built right into HTML. Before this tag existed, developers had to build modals from scratch using divs, overlays, JavaScript focus trapping, and z-index stacking — all error-prone. Now the browser handles all of this natively!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the dialog-2 element --&gt;
&lt;dialog-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/dialog-2&gt;
    </code></pre>
        
        `+ codeBlock("Dialog Usage", "html", `<!-- 1. Basic Modal Dialog -->
<dialog id="myDialog">
  <h2>Hello Sanskar! 👋</h2>
  <p>This is a native HTML modal dialog.</p>
  <button onclick="document.getElementById('myDialog').close()">
    Close
  </button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">
  Open Modal
</button>

<!-- 2. Confirm/Cancel Pattern (No JS needed for closing!) -->
<dialog id="confirmDialog">
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <!-- value becomes dialog.returnValue -->
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<script>
  const d = document.getElementById('confirmDialog');
  d.addEventListener('close', () => {
    console.log('User chose:', d.returnValue);
    // "cancel" or "confirm"
  });
<\/script>

<!-- 3. Styling the Backdrop -->
<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }
  dialog {
    border: 1px solid #6c63ff;
    border-radius: 16px;
    padding: 24px;
    max-width: 400px;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo — Native Modal Dialog</h4>
<dialog id="liveDialog" style="border:1px solid var(--accent);border-radius:16px;padding:24px;background:var(--bg2);color:var(--text);max-width:400px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
  <h3 style="color:var(--accent);margin-bottom:12px;">🎉 Native Dialog!</h3>
  <p style="color:var(--text2);margin-bottom:16px;">This modal was created using only the <code>&lt;dialog&gt;</code> tag. The backdrop, focus trapping, and Escape key are all handled by the browser!</p>
  <form method="dialog" style="display:flex;gap:8px;justify-content:flex-end;">
    <button value="cancel" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg3);color:var(--text);cursor:pointer;font-weight:600;">Cancel</button>
    <button value="ok" style="padding:8px 16px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">Got it!</button>
  </form>
</dialog>
<button onclick="document.getElementById('liveDialog').showModal()" style="padding:10px 22px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">Open Modal Dialog</button>
<span id="dialogResult" style="margin-left:12px;color:var(--text3);font-size:0.9rem;"></span>
<script>
document.getElementById('liveDialog').addEventListener('close',function(){document.getElementById('dialogResult').textContent='You clicked: '+this.returnValue;});
<\/script>
</div>

<div class="tip"><strong>💡 Top Layer:</strong> When you use <code>.showModal()</code>, the dialog enters the browser's <strong>top layer</strong>. This is a special stacking context that sits above everything — even elements with <code>z-index: 999999</code>. This solves the classic "modal appears behind another element" bug that plagued JavaScript-based modals for decades!</div>`},

  // 45 - NEW
  {
    id: "tag-progress-meter-2", title: 'The <progress> & <meter> Tags', badge: "WIDGET", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>These two tags create <strong>native visual indicators</strong> — progress bars and gauges — without any CSS or JavaScript tricks. They look different on each operating system because they use native OS styling.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the progress-meter-2 element --&gt;
&lt;progress-meter-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/progress-meter-2&gt;
    </code></pre>
        
        `+ codeBlock("Progress & Meter", "html", `<!-- 1. Determinate Progress (known completion) -->
<label>File Upload: 75%</label>
<progress value="75" max="100">75%</progress>

<!-- 2. Indeterminate Progress (unknown duration) -->
<label>Loading, please wait...</label>
<progress>Loading...</progress>
<!-- No value attribute = indeterminate animated bar! -->

<!-- 3. Meter — Disk Usage (high is bad) -->
<label>Disk Space Used: 85 GB / 100 GB</label>
<meter value="85" min="0" max="100"
       low="30" high="80" optimum="20">
  85 out of 100 GB
</meter>
<!-- optimum=20 means LOW values are good.
     value=85 is above high=80, so it shows RED! -->

<!-- 4. Meter — Exam Score (high is good) -->
<label>Exam Score: 92 / 100</label>
<meter value="92" min="0" max="100"
       low="40" high="75" optimum="100">
  92 out of 100
</meter>
<!-- optimum=100 means HIGH values are good.
     value=92 is above high=75, so it shows GREEN! -->

<!-- 5. Meter — Battery (high is good) -->
<label>Battery: 25%</label>
<meter value="0.25" min="0" max="1"
       low="0.2" high="0.6" optimum="1">
  25%
</meter>
<!-- value=0.25 is between low and high = YELLOW -->`) + `
<div class="demo"><h4>▶ Live Demo — Progress & Meter</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;">📥 File Download</p>
  <progress id="demoProgress" value="0" max="100" style="width:100%;height:22px;border-radius:8px;">0%</progress>
  <p style="font-size:0.85rem;color:var(--text3);" id="progText">0% — Click Start</p>
  <button onclick="startProgress()" style="margin-top:8px;padding:6px 16px;border-radius:6px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">▶ Start Download</button>
  <button onclick="resetProgress()" style="margin-top:8px;padding:6px 16px;border-radius:6px;border:none;background:var(--bg4);color:var(--text);border:1px solid var(--border);cursor:pointer;font-weight:600;margin-left:6px;">🔄 Reset</button>

  <hr style="border:none;border-top:1px solid var(--border);margin:20px 0;">

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;">💾 Disk Usage</p>
  <meter value="85" min="0" max="100" low="30" high="80" optimum="20" style="width:100%;height:22px;">85/100</meter>
  <p style="font-size:0.85rem;color:var(--text3);">85 GB / 100 GB — <span style="color:#ff4a4a;">Critical! (RED)</span></p>

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;margin-top:14px;">📝 Exam Score</p>
  <meter value="92" min="0" max="100" low="40" high="75" optimum="100" style="width:100%;height:22px;">92/100</meter>
  <p style="font-size:0.85rem;color:var(--text3);">92 / 100 — <span style="color:#4ade80;">Excellent! (GREEN)</span></p>

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;margin-top:14px;">⏳ Loading (Indeterminate)</p>
  <progress style="width:100%;height:22px;">Loading...</progress>
  <p style="font-size:0.85rem;color:var(--text3);">No value set → animated loading bar!</p>
</div>
<script>
let progInterval;
function startProgress(){
  const p=document.getElementById('demoProgress');
  const t=document.getElementById('progText');
  clearInterval(progInterval);
  p.value=0;
  progInterval=setInterval(()=>{
    p.value=Math.min(100,p.value+Math.random()*5);
    t.textContent=Math.round(p.value)+'% — '+(p.value>=100?'✅ Complete!':'Downloading...');
    if(p.value>=100)clearInterval(progInterval);
  },150);
}
function resetProgress(){
  clearInterval(progInterval);
  document.getElementById('demoProgress').value=0;
  document.getElementById('progText').textContent='0% — Click Start';
}
<\/script>
</div>

<div class="info"><strong>ℹ️ Accessibility:</strong> Both <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code> automatically announce their values to screen readers. The fallback text between the tags (e.g., <code>&lt;progress&gt;75%&lt;/progress&gt;</code>) displays in browsers that don't support these elements.</div>`},

  // 46 - NEW
  {
    id: "tag-quotation", title: 'Quotation & Citation Tags: blockquote, q, cite, abbr', badge: "TEXT", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML provides specific tags for quoting text, citing sources, and abbreviating terms. These are <strong>semantic</strong> — they tell the browser, search engines, and screen readers the <em>meaning</em> of the content, not just how it looks.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the quotation element --&gt;
&lt;quotation class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/quotation&gt;
    </code></pre>
        
        `+ codeBlock("Quotation & Citation", "html", `<!-- 1. Blockquote — Long Quote -->
<blockquote cite="https://en.wikipedia.org/wiki/Albert_Einstein">
  <p>Imagination is more important than knowledge.
  Knowledge is limited. Imagination encircles the world.</p>
</blockquote>
<p>— Albert Einstein, from <cite>What Life Means to Einstein</cite></p>

<!-- 2. Inline Quote with <q> -->
<p>As Steve Jobs once said,
  <q cite="https://example.com/jobs-speech">
    Stay hungry, stay foolish.
  </q>
  This inspired millions of developers.
</p>
<!-- Browser output: As Steve Jobs once said, "Stay hungry, stay foolish." -->

<!-- 3. Abbreviation with tooltip -->
<p>The <abbr title="World Wide Web Consortium">W3C</abbr> defines
  the standards for <abbr title="HyperText Markup Language">HTML</abbr>,
  <abbr title="Cascading Style Sheets">CSS</abbr>, and other technologies.
</p>
<!-- Hovering over W3C shows "World Wide Web Consortium" -->

<!-- 4. Cite — Title of a Work -->
<p>My favorite book is <cite>The Pragmatic Programmer</cite>
  by Andrew Hunt and David Thomas.</p>

<p>The movie <cite>Interstellar</cite> has amazing visuals.</p>

<!-- 5. Styling Blockquote -->
<style>
  blockquote {
    border-left: 4px solid #6c63ff;
    padding: 16px 24px;
    margin: 20px 0;
    background: #f5f5ff;
    font-style: italic;
    border-radius: 0 8px 8px 0;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <blockquote style="border-left:4px solid var(--accent);padding:16px 20px;margin:0 0 12px;background:var(--bg4);border-radius:0 8px 8px 0;font-style:italic;color:var(--text2);">
    <p style="margin:0">The only way to do great work is to love what you do.</p>
  </blockquote>
  <p style="color:var(--text3);font-size:0.9rem;">— Steve Jobs, from <cite style="color:var(--accent);font-style:italic;">Stanford Commencement Speech</cite></p>
  <hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">
  <p>As Mahatma Gandhi said, <q style="color:var(--accent2);">Be the change you wish to see in the world.</q></p>
  <hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">
  <p>Hover these: <abbr title="HyperText Markup Language" style="text-decoration:underline dotted var(--accent);cursor:help;font-weight:600;">HTML</abbr> · <abbr title="Cascading Style Sheets" style="text-decoration:underline dotted var(--accent2);cursor:help;font-weight:600;">CSS</abbr> · <abbr title="JavaScript" style="text-decoration:underline dotted var(--accent3);cursor:help;font-weight:600;">JS</abbr></p>
</div>
</div>

<div class="tip"><strong>💡 SEO Benefit:</strong> Google recognizes <code>&lt;blockquote&gt;</code> content as quoted material and may display it as a <strong>featured snippet</strong> in search results. Properly citing sources with the <code>cite</code> attribute helps search engines understand content relationships!</div>`},

  // 47 - NEW
  {
    id: "tag-map-area-2", title: 'The <map> & <area> Tags — Image Maps', badge: "MEDIA", emoji: "🗺️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;map&gt;</code> and <code>&lt;area&gt;</code> tags create <strong>clickable regions on an image</strong> — also called an "image map". Different parts of a single image can link to different URLs. Think of a map of India where clicking each state goes to a different page!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the map-area-2 element --&gt;
&lt;map-area-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/map-area-2&gt;
    </code></pre>
        
        `+ codeBlock("Image Map", "html", `<!-- 1. Basic Image Map -->
<img src="office-floor.png" alt="Office Floor Plan"
     usemap="#officemap" width="500" height="300">

<map name="officemap">
  <!-- Rectangle: Meeting Room -->
  <area shape="rect" coords="0,0,150,150"
        href="/meeting-room" alt="Meeting Room"
        title="Meeting Room A">
  
  <!-- Circle: Coffee Station -->
  <area shape="circle" coords="400,80,50"
        href="/coffee" alt="Coffee Station"
        title="Coffee & Snacks">
  
  <!-- Polygon: Reception Area (triangle) -->
  <area shape="poly" coords="200,200,300,200,250,100"
        href="/reception" alt="Reception"
        title="Reception Desk">
  
  <!-- Default: Everything else -->
  <area shape="default"
        href="/floor-plan" alt="General Area">
</map>

<!-- 2. Navigation Map (like a site map image) -->
<img src="site-banner.jpg" alt="Site sections"
     usemap="#sitemap" width="600" height="100">

<map name="sitemap">
  <area shape="rect" coords="0,0,200,100"
        href="/about" alt="About Us">
  <area shape="rect" coords="200,0,400,100"
        href="/services" alt="Our Services">
  <area shape="rect" coords="400,0,600,100"
        href="/contact" alt="Contact Us">
</map>`) + `
<div class="demo"><h4>▶ Live Demo — Clickable Image Map</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <p style="color:var(--text2);margin-bottom:12px;">Click different colored regions below:</p>
  <svg width="350" height="180" viewBox="0 0 350 180" style="max-width:100%;border-radius:8px;border:1px solid var(--border);background:var(--bg4);">
    <a href="javascript:void(0)" onclick="alert('📦 You clicked the Rectangle zone!')">
      <rect x="10" y="10" width="120" height="70" rx="8" fill="#6c63ff44" stroke="#6c63ff" stroke-width="2" style="cursor:pointer;"/>
      <text x="70" y="50" fill="var(--accent)" text-anchor="middle" font-size="12" font-weight="600">Rectangle</text>
    </a>
    <a href="javascript:void(0)" onclick="alert('⭕ You clicked the Circle zone!')">
      <circle cx="250" cy="50" r="40" fill="#3ecfcf44" stroke="#3ecfcf" stroke-width="2" style="cursor:pointer;"/>
      <text x="250" y="55" fill="var(--accent2)" text-anchor="middle" font-size="12" font-weight="600">Circle</text>
    </a>
    <a href="javascript:void(0)" onclick="alert('🔺 You clicked the Polygon zone!')">
      <polygon points="175,100 120,170 230,170" fill="#ffa36b44" stroke="#ffa36b" stroke-width="2" style="cursor:pointer;"/>
      <text x="175" y="155" fill="var(--accent3)" text-anchor="middle" font-size="12" font-weight="600">Polygon</text>
    </a>
  </svg>
  <p style="font-size:0.8rem;color:var(--text3);margin-top:8px;">This demo uses inline SVG (the modern approach). Classic image maps use <code>&lt;map&gt;</code> + <code>&lt;area&gt;</code> with pixel coordinates over an <code>&lt;img&gt;</code>.</p>
</div>
</div>

<div class="warn"><strong>⚠️ Responsive Issues:</strong> Classic image map coordinates are in fixed pixels. If the image scales (responsive design), the clickable areas do NOT scale with it — they stay at the original pixel positions. For responsive sites, use CSS/SVG-based solutions or a JavaScript library like <code>image-map-resizer</code>.</div>
<div class="tip"><strong>💡 Free Tools:</strong> You don't need to calculate coordinates manually! Use free online tools like <strong>image-map.net</strong> — just upload your image, draw shapes with your mouse, and it generates the HTML code for you.</div>`},

  // 48 - NEW
  {
    id: "tag-picture-2", title: 'The <picture> Tag (Responsive Media)', badge: "MEDIA", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;picture&gt;</code> element is a container for multiple <code>&lt;source&gt;</code> tags and one <code>&lt;img&gt;</code> tag. It enables <strong>Art Direction</strong> and <strong>Format Switching</strong>, letting the browser decide exactly which image to load based on screen size or supported formats.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the picture-2 element --&gt;
&lt;picture-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/picture-2&gt;
    </code></pre>
        
        `+ codeBlock("Picture Tag Usage", "html", `<!-- 1. Art Direction (Different crop for mobile vs desktop) -->
<picture>
  <!-- If screen is wide, use landscape crop -->
  <source media="(min-width: 800px)" srcset="banner-wide.jpg">
  <!-- If screen is medium, use square crop -->
  <source media="(min-width: 400px)" srcset="banner-square.jpg">
  <!-- Fallback (Mobile): use portrait crop -->
  <img src="banner-portrait.jpg" alt="Hero banner">
</picture>

<!-- 2. Format Switching (Serve modern formats to supporting browsers) -->
<picture>
  <!-- Browsers supporting AVIF will use this -->
  <source type="image/avif" srcset="photo.avif">
  <!-- Browsers supporting WebP will use this -->
  <source type="image/webp" srcset="photo.webp">
  <!-- Older browsers fallback to JPEG -->
  <img src="photo.jpg" alt="A cute cat" loading="lazy">
</picture>`) + `
<div class="demo"><h4>▶ Live Concept Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <p style="font-size:0.9rem;color:var(--text2);margin-bottom:12px;">Resize your browser window! The text below will switch depending on viewport width.</p>
  <style>
    .art-dir-demo::after { content: "📱 Mobile View (< 600px)"; color: #ff6b6b; font-weight: bold; }
    @media(min-width: 600px) { .art-dir-demo::after { content: "💻 Desktop View (>= 600px)"; color: #4ade80; } }
  </style>
  <div class="art-dir-demo" style="background:var(--bg4);padding:20px;border-radius:8px;border:1px dashed var(--accent);"></div>
</div>
</div>
<div class="tip"><strong>💡 Performance Boost:</strong> Using <code>&lt;picture&gt;</code> for format switching (WebP/AVIF) can shrink your image payloads by 50-70% while keeping full compatibility with older browsers like IE11/Safari that fall back to the JPG.</div>`},

  // 49 - NEW
  {
    id: "tag-edits", title: 'Document Edits: <ins> & <del>', badge: "SEMANTIC", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code> tags are used to semantically mark changes in a document. They represent <strong>insertions</strong> and <strong>deletions</strong> respectively. This is highly useful for tracking modifications in legal documents, blog posts, wikis, or to-do lists.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the edits element --&gt;
&lt;edits class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/edits&gt;
    </code></pre>
        
        `+ codeBlock("Edit Semantics", "html", `<!-- 1. Updating a price on an ecommerce site -->
<p>
  Price:
  <del>₹1,200</del>
  <ins style="color: green; font-weight: bold;">₹899</ins>
  (Special Discount!)
</p>

<!-- 2. Updating a blog post fact with context -->
<p>
  The population of the city is 
  <del cite="/corrections" datetime="2026-04-10">4.5 million</del>
  <ins cite="/corrections" datetime="2026-04-10">4.8 million</ins> 
  according to the new census data.
</p>

<!-- 3. A To-Do List application -->
<ul>
  <li><del>Buy groceries</del></li>
  <li><del>Call Mom</del></li>
  <li><ins>Finish web dev project</ins></li>
</ul>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  Today's Meeting: <del>3:00 PM</del> <ins style="color:var(--accent2);font-weight:bold;">4:30 PM</ins> (Rescheduled)<br>
  Total Cost: <del style="color:var(--accent3);">₹1,500</del> <ins style="color:#4ade80;">₹1,200</ins>
</div>
</div>
<div class="info"><strong>ℹ️ Screen Reader Support:</strong> Most screen readers will announce these tags! For example, NVDA will read "deleted 3:00 PM, inserted 4:30 PM", giving visually impaired users full context of the document's history.</div>`},

  // 50 - NEW
  {
    id: "tag-computer", title: 'Computer Semantics: <kbd>, <code>, <samp>, <var>', badge: "TEXT", emoji: "⌨️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML has hyper-specific semantic tags for documenting computer interactions, terminal commands, coding tutorials, and mathematical variables. By default, browsers style these tags using a monospace font.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the computer element --&gt;
&lt;computer class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/computer&gt;
    </code></pre>
        
        `+ codeBlock("Computer Code Semantics", "html", `<!-- 1. Keyboard Shortcuts -->
<p>
  To open the developer tools, press 
  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>.
</p>

<!-- 2. Terminal Commands and Output -->
<p>
  Run the command: <kbd>npm start</kbd><br>
  The server will respond with: <samp>Listening on port 3000...</samp>
</p>

<!-- 3. Math and Variables -->
<p>
  The area of a circle matches the formula: 
  <var>A</var> = <var>π</var><var>r</var><sup>2</sup>, 
  where <var>r</var> is the radius.
</p>

<!-- 4. Advanced: Combining them! -->
<p>
  To exit the <kbd>nano</kbd> editor, press <kbd><kbd>Ctrl</kbd> + <kbd>X</kbd></kbd>.
  (Yes, you can nest kbd for key combinations!)
</p>

<!-- 5. Creating a "Mac Key" CSS Style -->
<style>
  kbd {
    background: #f4f4f4;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 2px 6px;
    box-shadow: 0 2px 0 rgba(0,0,0,0.2);
    font-size: 0.9em;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.05rem;line-height:2.2;">
  <p style="margin:0">Save your work by pressing <kbd style="background:var(--bg4);border:1px solid var(--border);border-radius:6px;padding:2px 8px;box-shadow:0 3px 0 var(--border), 0 3px 2px rgba(0,0,0,0.2);">Ctrl</kbd> + <kbd style="background:var(--bg4);border:1px solid var(--border);border-radius:6px;padding:2px 8px;box-shadow:0 3px 0 var(--border), 0 3px 2px rgba(0,0,0,0.2);">S</kbd></p>
  <p style="margin:0">If <var style="color:var(--accent2);font-weight:bold;font-style:italic;">x</var> = 5, then <code style="background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--accent2);padding:2px 6px;border-radius:4px;">return x * 2</code> will output <samp style="background:#000;color:#0f0;padding:2px 6px;border-radius:4px;font-family:monospace;">10</samp></p>
</div>
</div>
</div>
`},

  // 51 - NEW
  {
    id: "tag-figure-2", title: 'The <figure> & <figcaption> Tags', badge: "SEMANTIC", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;figure&gt;</code> element represents self-contained content, optionally with a caption provided by <code>&lt;figcaption&gt;</code>. While often used for images, it's actually perfect for <strong>illustrations, diagrams, code snippets, or quotes</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the figure-2 element --&gt;
&lt;figure-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/figure-2&gt;
    </code></pre>
        
        `+ codeBlock("Figure Implementation", "html", `<!-- 1. The Classic: Image with Caption -->
<figure>
  <img src="mountain-view.jpg" alt="A snowy mountain peak at sunrise">
  <figcaption>Fig. 1: Mount Everest viewed from base camp.</figcaption>
</figure>

<!-- 2. A Code Snippet with Caption -->
<figure>
  <pre><code>
function greet(name) {
  return "Hello " + name;
}
  </code></pre>
  <figcaption>Listing 1: A basic greeting function in JavaScript.</figcaption>
</figure>

<!-- 3. A Data Table in a Figure -->
<figure>
  <table>
    <tr><th>Year</th><th>Revenue</th></tr>
    <tr><td>2025</td><td>$2.4M</td></tr>
    <tr><td>2026</td><td>$3.8M</td></tr>
  </table>
  <figcaption>Table 1: Company revenue growth over two years.</figcaption>
</figure>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);display:flex;justify-content:center;">
  <figure style="margin:0;background:var(--bg4);border:1px solid var(--border);border-radius:8px;padding:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1);max-width:300px;text-align:center;">
    <div style="width:100%;height:150px;background:linear-gradient(135deg,var(--accent),var(--accent2));border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:3rem;margin-bottom:8px;">🎨</div>
    <figcaption style="font-size:0.85rem;color:var(--text2);font-family:monospace;">Figure A: A CSS Gradient Artpiece.</figcaption>
  </figure>
</div>
</div>
<div class="tip"><strong>💡 Default Margins:</strong> Browsers apply default left and right margins (usually 40px) to <code>&lt;figure&gt;</code> elements. You will almost always want to reset this in your CSS with <code>figure { margin: 0; }</code>!</div>`},

  // 52 - NEW
  {
    id: "tag-wbr", title: 'Word Breaks: <wbr> & <nobr>', badge: "TEXT", emoji: "✂️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>These tags give you surgical control over how text wraps (or doesn't wrap) onto new lines. <code>&lt;wbr&gt;</code> stands for <strong>Word Break Opportunity</strong>. <code>&lt;nobr&gt;</code> stands for <strong>No Break</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the wbr element --&gt;
&lt;wbr class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/wbr&gt;
    </code></pre>
        
        `+ codeBlock("Word Breaking", "html", `<!-- 1. Handling Long URLs -->
<p>
  My super long API endpoint is:
  https://api.myawesomeapp.com<wbr>/v1<wbr>/users<wbr>/profiles<wbr>/images<wbr>/avatar.png
</p>

<!-- 2. Handling Long Compound Words (German, etc) -->
<p>
  The longest German word is:
  Rindfleisch<wbr>etikettierungs<wbr>überwachungs<wbr>aufgaben<wbr>übertragungs<wbr>gesetz.
</p>

<!-- 3. The Modern Alternative to <nobr> -->
<!-- Instead of <nobr>Don't wrap this</nobr>, use CSS: -->
<p>
  You can contact us at our 
  <span style="white-space: nowrap;">1-800-WEB-DEV</span> hot-line.
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1rem;line-height:1.6;display:flex;gap:20px;">
  <div style="flex:1;background:var(--bg4);border:1px dashed #ff4a4a;padding:12px;overflow:hidden;">
    <strong style="color:#ff4a4a;font-size:0.8rem;">Without &lt;wbr&gt; (Overflows visually)</strong>
    <p style="word-break:keep-all;">https://en.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis</p>
  </div>
  <div style="flex:1;background:var(--bg4);border:1px dashed #4ade80;padding:12px;">
    <strong style="color:#4ade80;font-size:0.8rem;">With &lt;wbr&gt; (Breaks cleanly)</strong>
    <p>https://en.wikipedia.org/wiki/<wbr>Pneumono<wbr>ultra<wbr>microscopic<wbr>silico<wbr>volcano<wbr>coniosis</p>
  </div>
</div>
</div>
`},

  // 53 - NEW
  {
    id: "tag-quote", title: 'The <blockquote>, <q> & <cite> Tags', badge: "SEMANTIC", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>HTML has three dedicated tags for <strong>quotations and citations</strong>. Using them correctly improves SEO, provides semantic meaning for screen readers, and unlocks beautiful typographic styles.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the quote element --&gt;
&lt;quote class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/quote&gt;
    </code></pre>
        
        `},

  // 54 - NEW
  {
    id: "tag-time", title: 'The <time> Tag', badge: "SEMANTIC", emoji: "⏱️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;time&gt;</code> tag represents a specific period in time. Its superpower is the <code>datetime</code> attribute, which lets you display a <strong>human-readable</strong> date to the user while providing a strict <strong>machine-readable</strong> timestamp for search engines, calendars, and screen readers.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the time element --&gt;
&lt;time class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/time&gt;
    </code></pre>
        
        `},

  // 55 - NEW
  {
    id: "tag-ruby-2", title: 'Ruby Annotations: <ruby>, <rt>, <rp>', badge: "TEXT", emoji: "🇯🇵", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;ruby&gt;</code> element is used to display annotations (short pronunciation guides) above or beside base text. It is overwhelmingly used for East Asian languages (like Japanese Furigana or Chinese Pinyin) to teach readers how to pronounce complex characters.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the ruby-2 element --&gt;
&lt;ruby-2 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/ruby-2&gt;
    </code></pre>
        
        `+ codeBlock("Ruby Usage", "html", `<!-- 1. Basic Japanese Furigana (Kanji with Hiragana reading) -->
<p>
  I am learning to speak 
  <ruby>
    日本<rt>にほん</rt>
  </ruby>
  (Japanese).
</p>

<!-- 2. Bulletproof Fallback (with <rp>) -->
<!-- If the browser doesn't support <ruby>, it will display: 漢字 (かんじ) -->
<p>
  <ruby>
    漢字
    <rp>(</rp><rt>かんじ</rt><rp>)</rp>
  </ruby>
</p>

<!-- 3. Chinese Pinyin example -->
<p>
  <ruby>
    汉<rp>(</rp><rt>hàn</rt><rp>)</rp>
    字<rp>(</rp><rt>zì</rt><rp>)</rp>
  </ruby>
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);font-size:2rem;text-align:center;">
  <p style="margin:0;">
    <ruby>東<rt>とう</rt></ruby>
    <ruby>京<rt>きょう</rt></ruby>
    <span style="font-size:1rem;color:var(--text2);margin-left:12px;">(Tokyo)</span>
  </p>
</div>
</div>
`},

  // 56 - NEW
  {
    id: "tag-bdi-bdo", title: 'Bi-Directional Text: <bdi> & <bdo>', badge: "TEXT", emoji: "🔀", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>These tags handle texts that read right-to-left (RTL) like Arabic or Hebrew, mixed with texts that read left-to-right (LTR) like English. Mixing them is notoriously difficult without semantic structural help!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the bdi-bdo element --&gt;
&lt;bdi-bdo class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/bdi-bdo&gt;
    </code></pre>
        
        `+ codeBlock("BDI and BDO in action", "html", `<!-- 1. The problem without <bdi> -->
<!-- If the username is Arabic (RTL), it will completely flip the number and text surrounding it! -->
<ul>
  <li>User إيان has 90 points.</li> <!-- Could render wrong! -->
</ul>

<!-- 2. The solution with <bdi> -->
<ul>
  <li>User <bdi>إيان</bdi> has 90 points.</li> <!-- Guaranteed to render correctly! -->
</ul>

<!-- 3. Using <bdo> to force visual text flipping -->
<p>
  You can read this backwards: 
  <bdo dir="rtl">This text will be completely mirrored.</bdo>
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  <p><strong>Winner 1:</strong> User <bdi style="color:var(--accent);">إيان</bdi> placed 1st.</p>
  <p><strong>Winner 2:</strong> User <bdi style="color:var(--accent2);">Sanskar</bdi> placed 2nd.</p>
  <hr style="border-top:1px solid var(--border);margin:12px 0;">
  <p>Force Override: <bdo dir="rtl" style="color:#ff6b6b;">?siht daer uoy naC</bdo></p>
</div>
</div>
`},

  // 57 - NEW
  {
    id: "tag-dfn", title: 'The <dfn> Tag', badge: "SEMANTIC", emoji: "📖", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;dfn&gt;</code> (Definition) element is used to indicate the <strong>defining instance</strong> of a term. If you are writing an article and you introduce a new vocabulary word or jargon, you wrap it in <code>&lt;dfn&gt;</code> the very first time you explain it.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the dfn element --&gt;
&lt;dfn class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/dfn&gt;
    </code></pre>
        
        `+ codeBlock("Definition Examples", "html", `<!-- 1. Basic inline definition -->
<p>
  A <dfn>Client-Side Framework</dfn> is a web architecture 
  where UI rendering happens in the browser rather than on the server.
</p>

<!-- 2. Defining an abbreviation -->
<p>
  The <dfn><abbr title="Document Object Model">DOM</abbr></dfn> 
  is a programming interface for HTML and XML documents.
</p>

<!-- 3. Using the title attribute -->
<p>
  To measure layout shifts, we use 
  <dfn title="Cumulative Layout Shift">CLS</dfn>, which tracks 
  visual stability on the page.
</p>

<!-- Custom Styling -->
<style>
  dfn {
    font-weight: bold;
    font-style: italic;
    color: #6c63ff;
    border-bottom: 1px dashed #6c63ff;
    cursor: help;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.05rem;">
  <p>An <dfn title="Application Programming Interface" style="color:var(--accent);font-weight:bold;border-bottom:1px dashed var(--accent);cursor:help;">API</dfn> is a set of rules that lets different software entities communicate with each other. (Hover over the term!)</p>
</div>
</div>
<div class="tip"><strong>💡 Rule of Thumb:</strong> Only use <code>&lt;dfn&gt;</code> <strong>once</strong> per term per document! It marks the exact place the term is defined, not every time it is used.</div>`},

  // 58 - NEW
  {
    id: "tag-address", title: 'The <address> Tag', badge: "SEMANTIC", emoji: "🏢", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;address&gt;</code> tag indicates that the enclosed HTML provides <strong>contact information</strong> for a person, people, or organization. Search engines heavily rely on this block to power local search results and business directories.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the address element --&gt;
&lt;address class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/address&gt;
    </code></pre>
        
        `+ codeBlock("Address Implementation", "html", `<!-- 1. Standard Footer Contact Block -->
<footer>
  <address>
    <strong>Sanskar Web Studio</strong><br>
    123 Developer Lane<br>
    Tech City, TX 75001<br>
    <a href="mailto:contact@sanskar.dev">contact@sanskar.dev</a><br>
    <a href="tel:+15551234567">+1 (555) 123-4567</a>
  </address>
</footer>

<!-- 2. Author Contact Info in an Article -->
<article>
  <h1>Mastering HTML5</h1>
  <p>HTML5 brought so many semantic tags...</p>
  
  <address>
    Written by <a href="/author/sanskar">Sanskar</a>.<br>
    Find me on <a href="https://twitter.com/sanskar">Twitter</a>.
  </address>
</article>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);">
  <address style="font-style:normal;line-height:1.8;border-left:4px solid var(--accent);padding-left:16px;">
    <strong style="color:var(--text);font-size:1.1rem;">Digital Headquarters</strong><br>
    <span style="color:var(--text2);">Internet Space, Planet Earth</span><br>
    📧 <a href="mailto:hello@example.com" style="color:var(--accent2);text-decoration:none;">hello@example.com</a><br>
    🐦 <a href="#" style="color:var(--accent2);text-decoration:none;">@SanskarDev</a>
  </address>
</div>
</div>`},

  // 59 - NEW
  {
    id: "tag-data", title: 'The <data> Tag', badge: "META", emoji: "🔢", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;data&gt;</code> element links a given piece of content to a <strong>machine-readable translation</strong>. If you are displaying a product name, a custom measurement, or an item ID to a human, the <code>&lt;data&gt;</code> tag uses a <code>value</code> attribute to give the computer the exact numerical ID behind it.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the data element --&gt;
&lt;data class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/data&gt;
    </code></pre>
        
        `+ codeBlock("Data Semantics", "html", `<!-- 1. Ecommerce Product IDs -->
<ul>
  <li>
    <data value="PROD-3921">Wireless Headphones</data> 
    - $99
  </li>
  <li>
    <data value="PROD-7489">Mechanical Keyboard</data> 
    - $120
  </li>
</ul>

<!-- 2. Providing exact measurements -->
<p>
  The package weighs exactly
  <data value="2.54">2.54 kilograms</data>.
</p>

<!-- 3. Using it with JavaScript! -->
<!-- This is cleaner than using data-* attributes on generic spans -->
<script>
  // Get all data tags and read their machine values!
  const items = document.querySelectorAll('data');
  items.forEach(item => {
    console.log("Human read:", item.textContent);
    console.log("Database ID:", item.value);
  });
<\/script>`) + `
<div class="demo"><h4>▶ Live JavaScript Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <ul style="list-style:none;padding:0;margin:0 0 16px;">
    <li style="margin-bottom:8px;padding:8px;background:var(--bg4);border-radius:8px;">🛒 <data value="SKU-8991" class="demo-data">Gaming Mouse</data></li>
    <li style="margin-bottom:8px;padding:8px;background:var(--bg4);border-radius:8px;">🛒 <data value="SKU-2045" class="demo-data">4K Monitor</data></li>
  </ul>
  <button onclick="window.readDataDemo()" style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:bold;">⚙️ Read Database IDs</button>
</div>
</div>
</div>
`},

  // 60 - NEW
  {
    id: "tag-template-3", title: 'The <template> Tag', badge: "ADVANCED", emoji: "🧩", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;template&gt;</code> element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. It's essentially a blueprint for Web Components!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the template-3 element --&gt;
&lt;template-3 class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/template-3&gt;
    </code></pre>
        
        `+ codeBlock("Template Blueprint", "html", `<!-- 1. Define the Template -->
<!-- Note: The image won't load and the script won't run yet! -->
<template id="user-card-template">
  <div class="user-card">
    <img src="avatar.jpg" alt="User" class="avatar">
    <h2 class="name"></h2>
    <p class="role"></p>
  </div>
</template>

<!-- 2. Container to inject into -->
<div id="users-container"></div>

<!-- 3. Instantiate with JavaScript -->
<script>
  // Get the template and container
  const temp = document.getElementById("user-card-template");
  const container = document.getElementById("users-container");

  // Create a new instance (clone everything inside)
  const clone = temp.content.cloneNode(true);
  
  // Populate the cloned elements with real data
  clone.querySelector(".name").textContent = "Sanskar Developer";
  clone.querySelector(".role").textContent = "Full-Stack Engineer";

  // Attach to the active DOM!
  container.appendChild(clone);
<\\/script>`) + `
<div class="demo"><h4>▶ Live JavaScript Clone Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <!-- HIDDEN TEMPLATE -->
  <template id="demo-badge-template">
    <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:var(--accent);color:#fff;border-radius:20px;margin:8px;font-weight:bold;transform:scale(0);animation:popInDemo 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;box-shadow:0 10px 20px rgba(0,0,0,0.2);">
      <span class="ico">🚀</span>
      <span class="text">Instantiated!</span>
    </div>
  </template>
  <style>@keyframes popInDemo { to { transform: scale(1); } }</style>

  <p style="margin-top:0;color:var(--text2);margin-bottom:16px;">The template component is secretly waiting inside the DOM...</p>
  
  <div id="demo-injection-zone" style="min-height:70px;margin-bottom:16px;padding:12px;border:2px dashed var(--border);border-radius:12px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;">
    <span style="color:var(--text3);font-size:0.9rem;" id="demo-iz-txt">Injection Zone Empty</span>
  </div>
  
  <button onclick="window.instantiateTemplateDemo()" style="padding:10px 24px;background:var(--accent2);color:#000;border:none;border-radius:8px;cursor:pointer;font-weight:bold;font-size:1.05rem;box-shadow:0 4px 12px rgba(62, 207, 207, 0.4); transition:transform 0.2s;">
    🧬 Clone & Inject Component
  </button>
  <button onclick="document.getElementById('demo-injection-zone').innerHTML='<span style=\\'color:var(--text3);font-size:0.9rem;\\' id=\\'demo-iz-txt\\'>Injection Zone Empty</span>';" style="padding:10px 24px;background:var(--bg4);color:var(--text);border:1px solid var(--border);border-radius:8px;cursor:pointer;font-weight:bold;font-size:1.05rem;margin-left:8px;">
    🧹 Clear
  </button>
</div>
</div>
`},
  // 61
  {
    id: "tag-math", title: 'The <math> (MathML) Tag', badge: "ADVANCED", emoji: "🔢", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;math&gt;</code> element is the root for <strong>MathML (Mathematical Markup Language)</strong>. It allows you to natively render complex mathematical equations, fractions, square roots, and matrices in the browser without needing heavy JavaScript libraries like LaTeX or MathJax.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the math element --&gt;
&lt;math class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/math&gt;
    </code></pre>
        
        `+ codeBlock("MathML Quadratic Formula", "html", `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>&#x2212;</mo>
        <mi>b</mi>
        <mo>&#xB1;</mo>
        <msqrt>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo>
          <mn>4</mn>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>`)
  },
  // 62
  {
    id: "tag-slot", title: 'The <slot> (Web Components) Tag', badge: "ARCHITECTURAL", emoji: "🔌", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;slot&gt;</code> tag is a placeholder inside a <strong>Web Component's Shadow DOM</strong>. It allows developers to create reusable custom elements that can accept custom user content, similar to how React uses "props.children".</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the slot element --&gt;
&lt;slot class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/slot&gt;
    </code></pre>
        
        `+ codeBlock("Web Component Slots", "html", `<!-- 1. The Component Template (Hidden in Shadow DOM) -->
<template id="card-template">
  <style>
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; }
    .card-header { font-weight: bold; font-size: 1.2em; margin-bottom: 8px; }
  </style>
  <div class="card">
    <div class="card-header">
      <!-- Named Slot for the Title -->
      <slot name="title">Default Title</slot>
    </div>
    <div class="card-body">
      <!-- Default Slot for the Content -->
      <slot>Default Content</slot>
    </div>
  </div>
</template>

<!-- 2. Using the Custom Component in HTML -->
<my-custom-card>
  <!-- This goes into the 'title' slot -->
  <span slot="title">Premium User Profile</span>
  
  <!-- This goes into the default slot -->
  <p>Welcome to your customized dashboard experience.</p>
</my-custom-card>`)
  },
  // 63
  {
    id: "tag-base", title: 'The <base> Tag', badge: "DOCUMENT", emoji: "🎯", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;base&gt;</code> tag specifies a <strong>base URL</strong> and a <strong>default target</strong> for all relative links and URLs in a document. This means you don't have to write out the full domain path for every single link or image on your page.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the base element --&gt;
&lt;base class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/base&gt;
    </code></pre>
        
        `+ codeBlock("Base URL Routing", "html", `<!-- Inside your <head> section -->
<head>
  <!-- Set the base URL for the entire page -->
  <base href="https://www.example.com/images/" target="_blank">
</head>

<body>
  <!-- Because of the <base> tag, this image actually loads from:
       https://www.example.com/images/logo.png -->
  <img src="logo.png" alt="Logo">

  <!-- Because of the <base target="_blank">, this link will 
       automatically open in a new tab without needing the attribute! -->
  <a href="https://google.com">Search Google</a>
</body>`)
  },
  // 64
  {
    id: "tag-hr", title: 'The <hr> (Horizontal Rule) Tag', badge: "SEMANTIC", emoji: "➖", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>In modern HTML5, the <code>&lt;hr&gt;</code> tag represents a <strong>thematic break</strong> in the content. While it draws a horizontal line by default, its semantic purpose is to signal a shift in topic, a scene change in a story, or a transition to a new section within an article.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the hr element --&gt;
&lt;hr class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/hr&gt;
    </code></pre>
        
        `+ codeBlock("Thematic Breaks", "html", `<style>
  /* Modern CSS styling for <hr> */
  .gradient-break {
    border: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #6c63ff, transparent);
    margin: 40px 0;
  }
  
  .star-break {
    border: 0;
    text-align: center;
    margin: 40px 0;
  }
  .star-break::before {
    content: "✦ ✦ ✦";
    font-size: 24px;
    letter-spacing: 12px;
    color: #ffd700;
  }
</style>

<p>The hero finally defeated the dragon and returned to the village, collapsing in exhaustion.</p>

<!-- Thematic break indicating a passage of time / scene change -->
<hr class="star-break">

<p>Three weeks later, a mysterious letter arrived at the hero's doorstep...</p>

<!-- Standard styled line break -->
<hr class="gradient-break">

<p>End of chapter 1.</p>`)
  },
  // 65
  {
    id: "tag-legacy", title: 'Legacy: <marquee> & <blink>', badge: "HISTORICAL", emoji: "👻", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Welcome to the <strong>"Graveyard Tags"</strong> of the 1990s web!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the legacy element --&gt;
&lt;legacy class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/legacy&gt;
    </code></pre>
        
        `+ codeBlock("Modern CSS Tickers", "html", `<style>
  /* The accessible, modern alternative to <marquee> */
  .css-marquee {
    width: 100%;
    overflow: hidden;
    background: #1a1a2e;
    color: #4ade80;
    padding: 10px;
    border-radius: 8px;
    white-space: nowrap;
  }
  
  .css-marquee p {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 10s linear infinite;
    margin: 0;
  }
  
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  /* Respect user accessibility settings! */
  @media (prefers-reduced-motion: reduce) {
    .css-marquee p {
      animation: none;
      padding-left: 0;
    }
  }
</style>

<div class="css-marquee">
  <p>🚀 Breaking News: CSS Animations officially replace the marquee tag! 🚀</p>
</div>`)
  },
  // 66
  {
    id: "tag-input", title: 'The <input> Tag', badge: "FORM", emoji: "📝", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;input&gt;</code> tag is the <strong>single most versatile element in HTML</strong>. It creates interactive controls inside forms — from simple text boxes and checkboxes to date pickers, color selectors, file uploaders, and sliders. Its behavior is entirely controlled by the <code>type</code> attribute, making it one element that can morph into over <strong>22 different input types</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Forms interact directly with the browser's built-in state management and validation APIs, intercepting default submission behaviors when JavaScript event listeners are attached.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always associate labels with inputs (using 'for' and 'id') and leverage native HTML5 validation attributes before relying on JS validation.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the input element --&gt;
&lt;input class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/input&gt;
    </code></pre>
        
        `+ codeBlock("Input Types Demo", "html", `<form>
  <!-- Text input with label -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" 
         placeholder="Enter your name" required minlength="3">

  <!-- Email with validation -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" 
         placeholder="you@example.com" required>

  <!-- Password -->
  <label for="pass">Password:</label>
  <input type="password" id="pass" minlength="8">

  <!-- Range slider -->
  <label for="vol">Volume:</label>
  <input type="range" id="vol" min="0" max="100" value="50">

  <!-- Color picker -->
  <label for="color">Favorite Color:</label>
  <input type="color" id="color" value="#6c63ff">

  <!-- Date picker -->
  <label for="bday">Birthday:</label>
  <input type="date" id="bday">

  <!-- File upload -->
  <label for="avatar">Upload Photo:</label>
  <input type="file" id="avatar" accept="image/*">

  <input type="submit" value="Submit Form">
</form>`)
  },
  // 67
  {
    id: "tag-link", title: 'The <link> Tag', badge: "DOCUMENT", emoji: "🔗", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;link&gt;</code> tag defines a <strong>relationship between the current document and an external resource</strong>. It lives inside the <code>&lt;head&gt;</code> and is most commonly used to load <strong>CSS stylesheets</strong>, but it's also essential for favicons, font preloading, canonical URLs, web app manifests, and preconnecting to CDNs.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the link element --&gt;
&lt;link class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/link&gt;
    </code></pre>
        
        `+ codeBlock("Link Tag Examples", "html", ` < !--Load an external CSS stylesheet-- >
      <link rel="stylesheet" href="styles.css">

        <!-- Favicon -->
        <link rel="icon" type="image/svg+xml" href="favicon.svg">

          <!-- Preconnect to Google Fonts (performance boost) -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

              <!-- Preload a critical font file -->
              <link rel="preload" as="font" type="font/woff2"
                href="/fonts/Inter.woff2" crossorigin="anonymous">

                <!-- Canonical URL for SEO -->
                <link rel="canonical" href="https://example.com/page">

                  <!-- Responsive CSS: only load on mobile -->
                  <link rel="stylesheet" href="mobile.css"
                    media="(max-width: 768px)">`)
  },
  // 68
  {
    id: "tag-script", title: 'The <script> Tag', badge: "DOCUMENT", emoji: "⚡", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;script&gt;</code> tag is the <strong>gateway to JavaScript</strong> in HTML. It either contains inline JavaScript code or points to an external <code>.js</code> file. It is arguably the most powerful tag in HTML because it can dynamically manipulate the entire DOM, handle user events, fetch data from servers, and transform a static page into a full web application.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the script element --&gt;
&lt;script class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/script&gt;
    </code></pre>
        
        `+ codeBlock("Script Loading Demo", "html", `<!-- Try this interactive script demo! -->
<p id="scriptDemo" style="padding:12px; background:#1a1a2e; border-radius:8px;">Click the button below</p>

<button onclick="document.getElementById('scriptDemo').innerHTML='<strong>Script ran at: '+new Date().toLocaleTimeString()+'</strong>'" style="padding:8px 16px; background:#6c63ff; color:white; border:none; border-radius:6px; cursor:pointer; margin-top:8px;">
  Run Script
</button>

<!-- SCRIPT LOADING STRATEGIES: -->
<!-- defer: Downloads in parallel, runs after DOM ready -->
<!-- async: Downloads in parallel, runs immediately -->
<!-- type=module: ES Modules, deferred by default -->
<!-- Best practice: Always use defer in the head -->`)
  },
  // 69
  {
    id: "tag-style", title: 'The <style> Tag', badge: "DOCUMENT", emoji: "🎨", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;style&gt;</code> tag allows you to write <strong>CSS directly inside your HTML document</strong>. It's placed in the <code>&lt;head&gt;</code> (or sometimes in the <code>&lt;body&gt;</code> for scoped/component styles) and applies styling rules to the page without needing an external <code>.css</code> file.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the style element --&gt;
&lt;style class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/style&gt;
    </code></pre>
        
        `+ codeBlock("Style Tag Examples", "html", `<!-- 1. Critical CSS inlined in head -->
                        <style>
                          body {
                            font - family: 'Inter', sans-serif;
                          margin: 0;
                          background: #0a0a1a;
                          color: #e0e0e0;
  }
                          .hero {padding: 4rem 2rem; text-align: center; }
                        </style>

                        <!-- 2. Print-only styles -->
                        <style media="print">
                          nav, footer, .sidebar {display: none; }
                          body {font - size: 12pt; color: #000; }
                        </style>

                        <!-- 3. Dark mode styles -->
                        <style>
                          @media (prefers-color-scheme: dark) {
    :root {--bg: #111; --text: #eee; }
  }
                          @media (prefers-color-scheme: light) {
    :root {--bg: #fff; --text: #111; }
  }
                        </style>`)
  },
  // 70
  {
    id: "tag-hgroup", title: 'The <hgroup> Tag', badge: "SEMANTIC", emoji: "📑", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;hgroup&gt;</code> tag groups a <strong>heading with its related sub-headings or taglines</strong> into a single semantic unit. It tells the browser and assistive technologies that a subtitle, tagline, or alternative heading is <em>subordinate</em> to the primary heading and should not create its own entry in the document outline.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the hgroup element --&gt;
&lt;hgroup class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/hgroup&gt;
    </code></pre>
        
        `+ codeBlock("Hgroup Examples", "html", `<!-- Modern hgroup with subtitle -->
                          <hgroup>
                            <h1>Deep Dive into HTML Tags</h1>
                            <p>A comprehensive reference guide by Sanskar Developer</p>
                          </hgroup>

                          <!-- Blog post header -->
                          <article>
                            <hgroup>
                              <h2>Understanding Semantic HTML</h2>
                              <p>Published on April 25, 2026 — 8 min read</p>
                            </hgroup>
                            <p>Semantic HTML is the foundation of accessible web development...</p>
                          </article>

                          <!-- Product card -->
                          <hgroup>
                            <h3>Premium Plan</h3>
                            <p>Best for teams and professionals</p>
                          </hgroup>`)
  },
  // 71
  {
    id: "tag-headings", title: 'Heading Tags: <h1> through <h6>', badge: "SEMANTIC", emoji: "🏷️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> tags define <strong>section headings</strong> in a document. <code>&lt;h1&gt;</code> is the most important (highest level), and <code>&lt;h6&gt;</code> is the least. They create the <strong>document outline</strong> — the invisible "table of contents" used by search engines and screen readers to understand your page structure.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the headings element --&gt;
&lt;headings class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/headings&gt;
    </code></pre>
        
        `+ codeBlock("Heading Hierarchy", "html", `<h1>Page Title (only one per page)</h1>

                              <section>
                                <h2>Major Section</h2>
                                <p>Content for this section...</p>

                                <h3>Sub-section</h3>
                                <p>More specific content...</p>

                                <h4>Detail Section</h4>
                                <p>Even more specific...</p>
                              </section>

                              <section>
                                <h2>Another Major Section</h2>
                                <p>Each section can have its own heading hierarchy.</p>
                              </section>`)
  },
  // 72
  {
    id: "tag-emphasis", title: 'Semantic Text: <em>, <strong>, <i>, <b>', badge: "TEXT", emoji: "✍️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>These four tags all make text look different, but they carry <strong>very different semantic meanings</strong>. Understanding the distinction between <em>semantic</em> (meaning-based) and <em>presentational</em> (visual-only) tags is fundamental to writing professional HTML.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the emphasis element --&gt;
&lt;emphasis class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/emphasis&gt;
    </code></pre>
        
        `+ codeBlock("Semantic Text Examples", "html", `<!-- em = stress emphasis (changes meaning) -->
                                  <p>I <em>never</em> said she stole my money.</p>
                                  <p>I never said <em>she</em> stole my money.</p>

                                  <!-- strong = important info -->
                                  <p><strong>Warning:</strong> Do not delete system files.</p>

                                  <!-- i = foreign terms, technical terms -->
                                  <p>The French word <i lang="fr">bonjour</i> means hello.</p>

                                  <!-- b = visual attention, no extra importance -->
                                  <p>Try our <b>Premium Plan</b> for unlimited access.</p>

                                  <!-- Nesting for maximum emphasis -->
                                  <p><strong><em>CRITICAL:</em></strong> Back up your data now!</p>`)
  },
  // 73
  {
    id: "tag-menu", title: 'The <menu> Tag', badge: "SEMANTIC", emoji: "📋", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;menu&gt;</code> tag is a <strong>semantic alternative to <code>&lt;ul&gt;</code></strong> specifically designed for <strong>interactive toolbar commands and action lists</strong>. While <code>&lt;ul&gt;</code> represents a generic unordered list of items, <code>&lt;menu&gt;</code> explicitly signals to browsers and assistive technologies that its children are <em>actionable commands</em> — like toolbar buttons, context menu actions, or form controls.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the menu element --&gt;
&lt;menu class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/menu&gt;
    </code></pre>
        
        `+ codeBlock("Menu Tag - Toolbar", "html", `<!-- Toolbar using menu -->
                                    <menu style="display:flex; gap:8px; list-style:none; padding:8px; background:#1a1a2e; border-radius:8px;">
                                      <li><button onclick="document.execCommand('bold')">Bold</button></li>
                                      <li><button onclick="document.execCommand('italic')">Italic</button></li>
                                      <li><button onclick="document.execCommand('underline')">Underline</button></li>
                                      <li><button onclick="alert('Saved!')">Save</button></li>
                                    </menu>

                                    <!-- Editable area to test the toolbar -->
                                    <div contenteditable="true"
                                      style="border:1px solid #444; padding:12px; margin-top:8px; border-radius:8px; min-height:80px;">
                                      Click the toolbar buttons above, then type here!
                                    </div>`)
  },
  // 74
  {
    id: "tag-table-sections", title: 'Table Sections: <thead>, <tbody>, <tfoot>, <caption>', badge: "TABLE", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>These four tags provide <strong>semantic structure inside a <code>&lt;table&gt;</code></strong>. While you can build a table with just <code>&lt;tr&gt;</code> and <code>&lt;td&gt;</code>, adding these section tags transforms a flat data grid into a <em>professionally structured</em> data table with a header, body, footer, and caption — which is critical for accessibility, printability, and styling.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the table-sections element --&gt;
&lt;table-sections class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/table-sections&gt;
    </code></pre>
        
        `+ codeBlock("Complete Table Structure", "html", `<table border="1" style="border-collapse:collapse; width:100%;">
                                          <caption>Q1 2026 Sales Report</caption>
                                          <thead style="background:#6c63ff; color:white;">
                                            <tr>
                                              <th scope="col">Product</th>
                                              <th scope="col">Units</th>
                                              <th scope="col">Revenue</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr><td>Widget A</td><td>1,200</td><td>$24,000</td></tr>
                                            <tr><td>Widget B</td><td>800</td><td>$16,000</td></tr>
                                            <tr><td>Widget C</td><td>450</td><td>$13,500</td></tr>
                                          </tbody>
                                          <tfoot style="background:#222; font-weight:bold;">
                                            <tr><td>Total</td><td>2,450</td><td>$53,500</td></tr>
                                          </tfoot>
                                        </table>`)
  },
  // 75
  {
    id: "tag-paragraph", title: 'The <p> (Paragraph) Tag', badge: "TEXT", emoji: "📄", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;p&gt;</code> tag defines a <strong>paragraph of text</strong> — the most fundamental building block of written content on the web. While it seems simple, the <code>&lt;p&gt;</code> tag has important rules about what it can and cannot contain, and understanding its behavior is essential for writing valid, accessible HTML.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the paragraph element --&gt;
&lt;paragraph class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/paragraph&gt;
    </code></pre>
        
        `+ codeBlock("Paragraph Best Practices", "html", `<!-- Good: clean paragraphs -->
                                          <p>Semantic HTML gives your content <em>meaning</em>,
                                            not just appearance. Screen readers use paragraph
                                            structure to help users navigate long documents.</p>

                                          <p>Each paragraph should focus on a single idea.
                                            This makes your content scannable and accessible.</p>

                                          <!-- CSS typography for readability -->
                                          <style>
                                            .readable {
                                              max - width: 65ch;        /* optimal line length */
                                            line-height: 1.7;       /* comfortable spacing */
                                            font-size: 1.125rem;    /* slightly larger base */
  }
                                            .readable::first-letter {
                                              font - size: 2.5em;       /* drop cap effect */
                                            font-weight: bold;
                                            color: #6c63ff;
                                            float: left;
                                            margin-right: 8px;
  }
                                          </style>
                                          <p class="readable">This paragraph demonstrates a drop-cap
                                            effect using the ::first-letter pseudo-element. This classic
                                            typographic technique draws the reader's eye and adds a
                                            professional touch to long-form content.</p>`)
  },
  // 76
  {
    id: "tag-nav", title: 'The <nav> Tag', badge: "SEMANTIC", emoji: "🧭", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;nav&gt;</code> element represents a <strong>section of navigation links</strong>. It tells browsers and screen readers "this block contains links for navigating the site or page." Not every group of links needs a <code>&lt;nav&gt;</code> — it's reserved for <em>major navigation blocks</em> like the primary menu, breadcrumbs, table of contents, or pagination.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the nav element --&gt;
&lt;nav class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/nav&gt;
    </code></pre>
        
        `+ codeBlock("Nav Examples", "html", `<!-- Primary site navigation -->
                                            <nav aria-label="Primary">
                                              <ul style="display:flex; gap:16px; list-style:none; padding:12px; background:#1a1a2e; border-radius:8px;">
                                                <li><a href="#home" style="color:#6c63ff;">Home</a></li>
                                                <li><a href="#about" style="color:#6c63ff;">About</a></li>
                                                <li><a href="#blog" style="color:#6c63ff;">Blog</a></li>
                                                <li><a href="#contact" style="color:#6c63ff;">Contact</a></li>
                                              </ul>
                                            </nav>

                                            <!-- Breadcrumb navigation -->
                                            <nav aria-label="Breadcrumb">
                                              <ol style="display:flex; gap:8px; list-style:none; padding:0; font-size:0.9em;">
                                                <li><a href="#">Home</a> &raquo;</li>
                                                <li><a href="#">Blog</a> &raquo;</li>
                                                <li aria-current="page"><strong>This Article</strong></li>
                                              </ol>
                                            </nav>`)
  },
  // 77
  {
    id: "tag-article-section", title: '<article> vs <section> — When to Use Which', badge: "SEMANTIC", emoji: "📰", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p><code>&lt;article&gt;</code> and <code>&lt;section&gt;</code> are both semantic containers, but they serve <strong>fundamentally different purposes</strong>. Confusing them is one of the most common mistakes in modern HTML.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the article-section element --&gt;
&lt;article-section class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/article-section&gt;
    </code></pre>
        
        `+ codeBlock("Article vs Section", "html", `<!-- Blog listing: section contains articles -->
                                                <main>
                                                  <section>
                                                    <h2>Latest Blog Posts</h2>

                                                    <article>
                                                      <h3>Understanding Semantic HTML</h3>
                                                      <p>Published: April 25, 2026</p>
                                                      <p>Semantic HTML is the foundation of accessible...</p>
                                                    </article>

                                                    <article>
                                                      <h3>CSS Grid vs Flexbox</h3>
                                                      <p>Published: April 20, 2026</p>
                                                      <p>When should you use Grid vs Flexbox?...</p>
                                                    </article>
                                                  </section>
                                                </main>`)
  },
  // 78
  {
    id: "tag-aside", title: 'The <aside> Tag', badge: "SEMANTIC", emoji: "📎", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;aside&gt;</code> element represents content that is <strong>tangentially related</strong> to the main content — it could be removed without reducing the meaning of the main content. Think of it as a sidebar callout, a pull quote, a glossary, related links, or an advertisement.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the aside element --&gt;
&lt;aside class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/aside&gt;
    </code></pre>
        
        `+ codeBlock("Aside Examples", "html", `<article>
                                                    <h2>Understanding CSS Grid</h2>
                                                    <p>CSS Grid is a powerful layout system...</p>

                                                    <!-- Pull quote inside article -->
                                                    <aside style="border-left:4px solid #6c63ff; padding:12px 16px; margin:16px 0; background:#1a1a2e; border-radius:0 8px 8px 0;">
                                                      <p><em>"CSS Grid changed how I think about layouts entirely."</em></p>
                                                    </aside>

                                                    <p>More article content continues here...</p>
                                                  </article>

                                                  <!-- Page-level sidebar -->
                                                  <aside aria-label="Related articles" style="background:#1a1a2e; padding:16px; border-radius:8px; margin-top:16px;">
                                                    <h3>Related Articles</h3>
                                                    <ul>
                                                      <li><a href="#">Flexbox Guide</a></li>
                                                      <li><a href="#">Responsive Design Tips</a></li>
                                                    </ul>
                                                  </aside>`)
  },
  // 79
  {
    id: "tag-s-u", title: 'The <s> & <u> Tags — Strikethrough & Underline', badge: "TEXT", emoji: "✏️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;s&gt;</code> and <code>&lt;u&gt;</code> tags are <strong>semantic text-level elements</strong> that look like simple formatting (strikethrough and underline), but in modern HTML they carry specific meanings that go beyond visual decoration.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the s-u element --&gt;
&lt;s-u class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/s-u&gt;
    </code></pre>
        
        `+ codeBlock("Strikethrough & Underline", "html", `<!-- Sale price using s tag -->
                                                      <p style="font-size:1.2em;">
                                                        <s style="color:#888;">$49.99</s>
                                                        <strong style="color:#4ade80; margin-left:8px;">$29.99</strong>
                                                        <span style="background:#f92672; color:white; padding:2px 8px; border-radius:4px; font-size:0.8em; margin-left:8px;">40% OFF</span>
                                                      </p>

                                                      <!-- Retracted statement -->
                                                      <p><s>The event is scheduled for March 15.</s></p>
                                                      <p><strong>UPDATE:</strong> The event has been moved to April 1.</p>

                                                      <!-- u tag for Chinese proper nouns -->
                                                      <p lang="zh">The novel was written by <u>\u8001\u820D</u> (Lao She).</p>

                                                      <!-- Don't confuse with del/ins -->
                                                      <p>Contract clause: <del>30 days</del> <ins>60 days</ins> notice required.</p>`)
  },
  // 80
  {
    id: "tag-main", title: 'The <main> Tag', badge: "SEMANTIC", emoji: "🎯", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;main&gt;</code> element represents the <strong>dominant, unique content</strong> of the <code>&lt;body&gt;</code> — the content that is specific to this page and not repeated across other pages on the site. It excludes site-wide elements like headers, footers, navigation, and sidebars.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the main element --&gt;
&lt;main class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/main&gt;
    </code></pre>
        
        `+ codeBlock("Main Tag Structure", "html", `<!DOCTYPE html>
                                                        <html lang="en">
                                                          <head>
                                                            <title>My Website</title>
                                                          </head>
                                                          <body>
                                                            <!-- Skip link for accessibility -->
                                                            <a href="#content" class="skip-link">Skip to main content</a>

                                                            <header>
                                                              <nav aria-label="Primary">
                                                                <a href="/">Home</a>
                                                                <a href="/about">About</a>
                                                              </nav>
                                                            </header>

                                                            <!-- Main content: unique to this page -->
                                                            <main id="content">
                                                              <h1>Welcome to My Website</h1>
                                                              <p>This is the main content area.</p>
                                                            </main>

                                                            <footer>
                                                              <p>&copy; 2026 My Website</p>
                                                            </footer>
                                                          </body>
                                                        </html>`)
  },
  // 81
  {
    id: "tag-html", title: 'The <html> (Root) Tag', badge: "DOCUMENT", emoji: "🌍", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;html&gt;</code> element is the <strong>root element</strong> of every HTML document. It wraps all the content on the page and is the absolute top-level container. It also serves as the foundation for global accessibility and styling.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the html element --&gt;
&lt;html class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/html&gt;
    </code></pre>
        
        `+ codeBlock("The HTML Root Element", "html", ` < !--1. The minimal required structure-- >
< !DOCTYPE html >
<html lang="en" data-theme="dark">
  <head>
    <title>My App</title>
  </head>
  <body>
    <!-- Content goes here -->
    <!-- BOTTOM NAV (Mobile Only) -->
  <nav class="mobile-nav" id="mobileNav">
    <a href="javascript:void(0)" onclick="window.scrollTo({top:0, behavior:'smooth'})" class="nav-item">🏠<span>Home</span></a>
    <a href="javascript:void(0)" onclick="openCmdK()" class="nav-item">🔍<span>Search</span></a>
    <a href="javascript:void(0)" onclick="openQuiz()" class="nav-item">🎯<span>Quiz</span></a>
    <a href="javascript:void(0)" onclick="openTranslateModal()" class="nav-item">🌍<span>Translate</span></a>
    <a href="javascript:void(0)" onclick="document.getElementById('sbOpen').click()" class="nav-item">☰<span>Menu</span></a>
  </nav>
</body>
</html>

<!--2. Using the HTML tag in CSS-- >
      <style>
  /* :root is exactly the same as selecting 'html', but with higher specificity */
        :root {
          --primary - color: #6c63ff;
        --bg-color: #ffffff;
  }

        html[data-theme="dark"] {
          --bg - color: #1a1a2e;
  }

        /* Smooth scrolling applied to the root */
        html {
          scroll - behavior: smooth;
        font-size: 16px;
  }
      </style>`)
  },
  // 82
  {
    id: "tag-title", title: 'The <title> Tag', badge: "DOCUMENT", emoji: "🏷️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;title&gt;</code> tag defines the document's title. It is strictly metadata and does NOT appear in the webpage body. However, it is arguably the <strong>most important SEO tag</strong> on your entire site.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the title element --&gt;
&lt;title class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/title&gt;
    </code></pre>
        
        `+ codeBlock("SEO-Optimized Title", "html", ` < !DOCTYPE html >
      <html lang="en">
        <head>
          <!-- ❌ BAD: Too vague, no keywords, poor SEO -->
          <!-- <title>Home</title> -->

          <!-- ❌ BAD: Too long, will be truncated in Google -->
          <!-- <title>Buy The Best Cheap Running Shoes For Men And Women Online Fast Shipping</title> -->

          <!-- ✅ GOOD: Concise, keyword-rich, branded -->
          <title>Men's Running Shoes | Free Shipping | ShoeBrand</title>

          <!-- Title should always be paired with a description -->
          <meta name="description" content="Shop the latest men's running shoes. Free shipping on orders over $50.">
        </head>
        <body>
          ...
        </body>
      </html>`)
  },
  // 83
  {
    id: "tag-body", title: 'The <body> Tag', badge: "DOCUMENT", emoji: "📄", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;body&gt;</code> tag contains all the <strong>rendered, visible content</strong> of an HTML document. Text, images, links, buttons, and videos — if the user can see it, it belongs inside the body.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the body element --&gt;
&lt;body class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/body&gt;
    </code></pre>
        
        `+ codeBlock("Body Setup and Reset", "html", ` < !--HTML Structure-- >
<body onload="console.log('Page loaded!')">
  <h1>Welcome to the Page</h1>
  <p>All visible content lives here.</p>
</body>

<!--Standard Body CSS Reset-- >
      <style>
        body {
          /* 1. Remove the browser's default 8px margin */
          margin: 0;

        /* 2. Set the global font family */
        font-family: system-ui, -apple-system, sans-serif;

        /* 3. Improve text rendering on macOS/iOS */
        -webkit-font-smoothing: antialiased;

        /* 4. Ensure body fills the screen vertically */
        min-height: 100vh;

        /* 5. Set default text color and background */
        color: #333;
        background-color: #f9f9f9;
  }
      </style>`)
  },
  // 84
  {
    id: "tag-fencedframe", title: 'The <fencedframe> Tag', badge: "ADVANCED", emoji: "🛡️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;fencedframe&gt;</code> is a cutting-edge HTML proposal (currently championed by Google Chrome's Privacy Sandbox). It is designed as a <strong>privacy-preserving alternative to the <code>&lt;iframe&gt;</code></strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the fencedframe element --&gt;
&lt;fencedframe class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/fencedframe&gt;
    </code></pre>
        
        `+ codeBlock("Fenced Frame Implementation", "html", ` < !--Standard iframe(allows tracking and communication)-- >
<iframe src="https://ads.example.com/ad123"></iframe>

<!--Fenced frame(strict privacy boundary)-- >
<fencedframe src="urn:uuid:12345678-9abc-def0-1234-56789abcdef0"></fencedframe>

<!--JavaScript integration with Privacy Sandbox APIs-- >
      <script>
  // Fenced frames use special Opaque URLs generated by browser APIs
  // like FLEDGE (Protected Audience API)
  
  navigator.runAdAuction(auctionConfig).then((opaqueUrl) => {
    // The top-level page gets a URL, but cannot read its actual contents!
    const frame = document.createElement('fencedframe');
        frame.src = opaqueUrl;
        document.body.appendChild(frame);
  });
        <\/script>`)
  },
  // 85
  {
    id: "tag-portal", title: 'The <portal> Tag', badge: "EXPERIMENTAL", emoji: "🚪", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;portal&gt;</code> tag is an experimental HTML element designed to enable <strong>seamless page transitions</strong>. It allows a web page to embed another page (like an iframe) and then instantly "activate" it, replacing the current page entirely without a white flash or network delay!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the portal element --&gt;
&lt;portal class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/portal&gt;
    </code></pre>
        
        `+ codeBlock("Portal Navigation Demo", "html", `<!-- 1. The Portal Element -->
          <style>
  /* Portals can be styled and animated just like iframes */
            portal {
              width: 300px;
            height: 200px;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            transition: all 0.4s ease;
  }

            /* When activated, it expands to fill the screen */
            portal.expanding {
              width: 100vw;
            height: 100vh;
            border-radius: 0;
  }
          </style>

          <!-- Embed the next article so it pre-renders in the background -->
          <portal id="nextArticle" src="/article-2"></portal>

          <!-- 2. The JavaScript Activation -->
          <script>
            const portal = document.getElementById('nextArticle');
  
  portal.addEventListener('click', () => {
              // Play a CSS animation first
              portal.classList.add('expanding');

    // Listen for animation end
    portal.addEventListener('transitionend', () => {
              // Instantly swap the entire browser context to the new page!
              // No network request needed, no blank white screen.
              portal.activate();
    });
  });
            <\/script>`)
  },
  // 86
  {
    id: "tag-entity-basics", title: 'Entities: Escaping Syntax', badge: "ENTITIES", emoji: "🔤", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>An <strong>HTML Entity</strong> is a piece of text (a string) that begins with an ampersand (<code>&amp;</code>) and ends with a semicolon (<code>;</code>). Entities are used to display reserved characters (which would otherwise be interpreted as HTML code), or invisible characters (like non-breaking spaces).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the entity-basics element --&gt;
&lt;entity-basics class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/entity-basics&gt;
    </code></pre>
        
        `+ codeBlock("Escaping HTML Output", "html", `<!-- ❌ BAD: The browser thinks you are opening a bold tag! -->
<p>To make text bold, use the <b> tag.</p>

<!-- ✅ GOOD: The browser will literally print out "<b>" -->
<p>To make text bold, use the &lt;b&gt; tag.</p>

<!-- Escaping quotes inside an attribute (though HTML5 allows mix & match) -->
<input type="text" value="She said &quot;Hello!&quot; to me.">`)
  },
  // 87
  {
    id: "tag-entity-spacing", title: 'Entities: Whitespace', badge: "ENTITIES", emoji: "📏", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>In HTML, if you type 10 spaces between two words, the browser will "collapse" them and only display <strong>one single space</strong>. To force the browser to render multiple spaces, or to prevent two words from wrapping onto different lines, you must use <strong>Whitespace Entities</strong>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the entity-spacing element --&gt;
&lt;entity-spacing class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/entity-spacing&gt;
    </code></pre>
        
        `+ codeBlock("Controlling Typography with Spaces", "html", `<!-- 1. Preventing Line Breaks (Orphan control) -->
<!-- "10" and "km" will NEVER be separated onto different lines -->
<p>The marathon distance is exactly 10&nbsp;km.</p>

<!-- 2. Forcing multiple spaces (Legacy indenting) -->
<p>First Place: John</p>
<p>Second Place:&ensp;&ensp;Jane</p>
<p>Third Place:&emsp;&emsp;&emsp;Bob</p>`)
  },
  // 88
  {
    id: "tag-entity-symbols", title: 'Entities: Copyright & Symbols', badge: "ENTITIES", emoji: "©️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>There are hundreds of special symbols that are difficult or impossible to type on a standard keyboard. HTML entities provide an easy, memorable text-alias for these symbols.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the entity-symbols element --&gt;
&lt;entity-symbols class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/entity-symbols&gt;
    </code></pre>
        
        `+ codeBlock("Professional Footers & Buttons", "html", `<!-- Standard Footer -->
<footer>
  <p>&copy; 2026 Sanskar Developer. All rights reserved.</p>
  <p>Our Product&trade; is the best on the market.</p>
</footer>

<!-- A Premium Close Button -->
<style>
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  }
  .close-btn:hover { color: red; }
</style>

<!-- Looks much better than a capital X! -->
<button class="close-btn" aria-label="Close modal">&times;</button>`)
  },
  // 89
  {
    id: "tag-entity-math", title: 'Entities: Math & Currency', badge: "ENTITIES", emoji: "💱", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>When building eCommerce stores or scientific dashboards, you need accurate representations of currency and mathematical operators. While you can copy-paste unicode characters, entities ensure the character is encoded perfectly regardless of the server's database encoding.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the entity-math element --&gt;
&lt;entity-math class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/entity-math&gt;
    </code></pre>
        
        `+ codeBlock("eCommerce and Data Displays", "html", `<!-- Currency Display -->
<div class="product-card">
  <h2>Premium Headphones</h2>
  <p class="price">Price: &euro;149.99</p>
  <p class="shipping">Shipping to UK: &pound;12.00</p>
</div>

<!-- Scientific Notation -->
<div class="equation">
  <p>The margin of error is &plusmn; 5&percnt;.</p>
  <p>To infinity and beyond: &infin;</p>
</div>`)
  },
  // 90
  {
    id: "tag-entity-hex", title: 'Entities: Hexadecimal Emojis', badge: "ENTITIES", emoji: "🧑‍💻", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>What if there is NO named entity for a character? HTML allows you to render <strong>any Unicode character</strong> in existence (including every single Emoji!) using its Decimal or Hexadecimal code.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the entity-hex element --&gt;
&lt;entity-hex class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/entity-hex&gt;
    </code></pre>
        
        `+ codeBlock("Rendering Native Emojis via Hex", "html", `<!-- Standard Grinning Face 😀 -->
<p>Decimal: &#128512;</p>
<p>Hexadecimal: &#x1F600;</p>

<!-- Rocket Ship 🚀 -->
<p>Houston, we have liftoff! &#x1F680;</p>

<!-- Checkmark ✔️ (Great for To-Do lists!) -->
<ul>
  <li>&#x2714; Build the Website</li>
  <li>&#x2714; Learn HTML Entities</li>
  <li>&#x2714; Profit!</li>
</ul>`)
  },
  // 91
  {
    id: "tag-doctype", title: '<!DOCTYPE html> (The Declaration)', badge: "DOCUMENT", emoji: "📜", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>While it looks like a tag, <code>&lt;!DOCTYPE html&gt;</code> is actually an <strong>information declaration</strong> for the browser. It must be the very first thing in your HTML file, appearing even before the <code>&lt;html&gt;</code> tag.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the doctype element --&gt;
&lt;doctype class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/doctype&gt;
    </code></pre>
        
        `+ codeBlock("The Doctype Evolution", "html", `<!-- HTML5 (Modern, Beautiful, Simple) -->
<!DOCTYPE html>
<html>...

<!-- HTML 4.01 Strict (The dark ages of 1999) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>...

<!-- XHTML 1.0 (When we tried to make HTML strictly XML) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>...`)
  },
  // 92
  {
    id: "tag-popover", title: 'The popover API (Modern HTML)', badge: "ADVANCED", emoji: "🪄", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>While not a new standalone tag, <code>popover</code> is a groundbreaking <strong>Global HTML Attribute</strong> introduced in 2024. It allows you to create native tooltips, dropdowns, and popup menus using purely HTML — <strong>zero JavaScript required!</strong></p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the popover element --&gt;
&lt;popover class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/popover&gt;
    </code></pre>
        
        `+ codeBlock("Native HTML Popover (No JS!)", "html", `<!-- 1. The Trigger Button -->
<button popovertarget="user-menu">Open User Settings</button>

<!-- 2. The Popover Content -->
<div id="user-menu" popover>
  <style>
    /* Styling the native popover */
    [popover] {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    /* Animating the backdrop */
    [popover]::backdrop {
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
    }
  </style>

  <h3>⚙️ Settings</h3>
  <ul>
    <li>Profile</li>
    <li>Billing</li>
    <li>Logout</li>
  </ul>
</div>`)
  },
  // 93
  {
    id: "tag-param", title: 'The <param> Tag', badge: "HISTORICAL", emoji: "⚙️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;param&gt;</code> tag is a self-closing element used to pass parameters (data and configuration) to plugins embedded via the <code>&lt;object&gt;</code> tag. It defines a "name/value" pair that the external plugin reads upon initialization.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the param element --&gt;
&lt;param class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/param&gt;
    </code></pre>
        
        `+ codeBlock("Configuring a Plugin", "html", `<!-- Embedding a legacy Flash video player -->
<object data="videoplayer.swf" type="application/x-shockwave-flash" width="640" height="480">
  <!-- Passing configuration parameters to the Flash SWF -->
  <param name="movie" value="videoplayer.swf">
  <param name="autoplay" value="true">
  <param name="loop" value="false">
  <param name="quality" value="high">
  
  <!-- Fallback content if the plugin fails -->
  <p>Please install Adobe Flash Player to view this content.</p>
</object>`)
  },
  // 94
  {
    id: "tag-applet", title: 'The <applet> Tag (Java)', badge: "GRAVEYARD", emoji: "☕", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;applet&gt;</code> tag is an entirely <strong>obsolete and deprecated</strong> element used in the late 1990s and 2000s to embed <strong>Java Applets</strong> directly into a webpage.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the applet element --&gt;
&lt;applet class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/applet&gt;
    </code></pre>
        
        `+ codeBlock("The Java Applet Era", "html", `<!-- ❌ Completely Obsolete: Will not work in modern browsers -->

<applet code="InteractiveChessGame.class" width="400" height="400">
  <!-- Passing initial parameters to the Java application -->
  <param name="difficulty" value="hard">
  <param name="theme" value="wood">
  
  <!-- What renders if Java is missing -->
  <strong>Your browser does not support Java.</strong>
</applet>

<!-- ✅ Modern Equivalent -->
<canvas id="chessBoard" width="400" height="400"></canvas>
<script src="chessGame.js"><\/script>`)
  },
  // 95
  {
    id: "tag-frameset", title: 'The <frameset> & <frame> Tags', badge: "GRAVEYARD", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Before CSS existed, web developers had absolutely no way to create sidebars or grid layouts. The solution was the <code>&lt;frameset&gt;</code> tag, which allowed you to literally <strong>chop the browser window into multiple pieces</strong>, loading a completely different HTML file into each "frame".</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the frameset element --&gt;
&lt;frameset class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/frameset&gt;
    </code></pre>
        
        `+ codeBlock("1990s Frameset Layout", "html", `<!-- ❌ Completely Obsolete: Do not use! -->
<!-- Notice there is NO <body> tag! -->

<frameset cols="25%, 75%">
  <!-- The left 25% of the screen loads the menu -->
  <frame src="menu.html" name="sidebar">
  
  <!-- The right 75% of the screen loads the main content -->
  <frame src="welcome.html" name="main_content">
  
  <!-- Fallback for browsers that don't support frames -->
  <noframes>
    <body>
      <p>Please upgrade your browser to view this site.</p>
    </body>
  </noframes>
</frameset>`)
  },
  // 96
  {
    id: "tag-bgsound", title: 'The <bgsound> Tag (Legacy Audio)', badge: "GRAVEYARD", emoji: "📻", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;bgsound&gt;</code> tag was a proprietary HTML element introduced by Microsoft Internet Explorer in the 1990s. Its sole purpose was to invisibly play background music (usually MIDI or WAV files) the moment a user landed on a webpage.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the bgsound element --&gt;
&lt;bgsound class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/bgsound&gt;
    </code></pre>
        
        `+ codeBlock("The Evolution of Web Audio", "html", `<!-- ❌ 1990s: The Internet Explorer Way (Obsolete) -->
<bgsound src="super-mario-theme.mid" loop="infinite">

<!-- ✅ Modern HTML5 Way -->
<!-- Note: 'autoplay' will be blocked by browsers unless 'muted' is also present, 
     or the user has interacted with the document! -->
<audio controls>
  <source src="background-music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`)
  },
  // 97
  {
    id: "tag-keygen", title: 'The <keygen> Tag', badge: "GRAVEYARD", emoji: "🔐", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;keygen&gt;</code> element was a highly specialized form control used to facilitate web-based certificate authentication. When placed inside a <code>&lt;form&gt;</code>, it generated a cryptographic key-pair (public and private) directly in the browser!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the keygen element --&gt;
&lt;keygen class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/keygen&gt;
    </code></pre>
        
        `+ codeBlock("Browser-Native Cryptography", "html", `<!-- ❌ The HTML5 Keygen Tag (Removed) -->
<form action="/generate-cert" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="user">
  
  <!-- This generated a dropdown letting the user pick encryption strength (e.g., 2048 RSA) -->
  <keygen name="public_key" challenge="random_string">
  
  <input type="submit" value="Register Certificate">
</form>

<!-- ✅ Modern Alternative: WebAuthn (Via JavaScript) -->
<button onclick="registerPasskey()">Register via FaceID/TouchID</button>
<script>
  // Uses navigator.credentials.create() internally
<\/script>`)
  },
  // 98
  {
    id: "tag-isindex", title: 'The <isindex> Tag', badge: "GRAVEYARD", emoji: "🔍", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Before standard <code>&lt;form&gt;</code> tags, <code>&lt;input type="text"&gt;</code>, or submit buttons even existed on the web, there was <code>&lt;isindex&gt;</code>. Introduced in HTML 2.0 (1995), it was the original, primitive way to create a searchable webpage.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the isindex element --&gt;
&lt;isindex class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/isindex&gt;
    </code></pre>
        
        `+ codeBlock("Search in 1995 vs Today", "html", `<!-- ❌ HTML 2.0 Search (Completely Obsolete) -->
<head>
  <isindex prompt="Search this document:">
</head>

<!-- ✅ HTML5 Modern Search Form -->
<form action="/search" method="GET" role="search">
  <label for="site-search">Search the site:</label>
  <input type="search" id="site-search" name="q" placeholder="Enter keywords..." required>
  <button type="submit">🔍 Search</button>
</form>`)
  },
  // 99
  {
    id: "tag-tt", title: 'The <tt> Tag (Teletype)', badge: "GRAVEYARD", emoji: "📠", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;tt&gt;</code> tag stood for <strong>Teletype Text</strong>. It was a presentational tag used to render text in a fixed-width, monospaced font (like a typewriter or terminal window).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the tt element --&gt;
&lt;tt class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/tt&gt;
    </code></pre>
        
        `+ codeBlock("Presentational vs Semantic HTML", "html", `<!-- ❌ Presentational (Tells the browser HOW it should look) -->
<p>The variable <tt>x</tt> is undefined.</p>
<center>
  <font color="red" size="5">Error occurred!</font>
</center>

<!-- ✅ Semantic (Tells the browser WHAT it means) -->
<p>The variable <code>x</code> is undefined.</p>
<div class="error-box">
  <h2>Error occurred!</h2>
</div>

<style>
  /* Let CSS handle the visual design! */
  code { font-family: 'Courier New', monospace; background: #eee; }
  .error-box { text-align: center; color: red; font-size: 24px; }
</style>`)
  },
  // 100
  {
    id: "tag-contenteditable", title: 'The contenteditable Attribute', badge: "ADVANCED", emoji: "✍️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>To conclude our 100-tag journey, we look at <code>contenteditable</code>! While technically a Global Attribute and not a standalone tag, it is so incredibly powerful it deserves the final spot. Adding this single attribute to <strong>any HTML element</strong> instantly transforms it into a rich-text word processor!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this HTML tag, it constructs a corresponding DOM (Document Object Model) node and assigns default ARIA roles and styling computed by the browser's User Agent stylesheet.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Ensure you are using this tag semantically. Avoid using it just for visual styling, as it impacts screen readers and SEO.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Initialize and execute the contenteditable element --&gt;
&lt;contenteditable class="example-usage"&gt;
    &lt;!-- Review the default code panel for interactive usage! --&gt;
&lt;/contenteditable&gt;
    </code></pre>
        
        `+ codeBlock("Creating a Mini Word Processor", "html", `<!-- 1. Turn a standard DIV into a Rich Text Editor! -->
<div 
  contenteditable="true" 
  class="editor-box"
  spellcheck="true">
  <h2>My Document</h2>
  <p>Try clicking right here and typing!</p>
  <p>You can even <b>copy-paste images</b> directly into this box!</p>
</div>

<!-- 2. Styling the editor so it looks like a piece of paper -->
<style>
  .editor-box {
    width: 100%;
    min-height: 300px;
    padding: 30px;
    background: white;
    color: black;
    border: 1px solid #ccc;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    outline: none; /* Hide the glowing blue focus ring */
  }
  
  /* Show placeholder text if empty */
  .editor-box:empty:before {
    content: "Start typing your masterpiece...";
    color: #888;
  }
</style>`)
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
let pgCurrentFileName = 'untitled.html';

// Templates
const PG_TEMPLATES = {
  landing: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; }\n    header { background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; padding:80px 20px; text-align:center; }\n    header h1 { font-size:3rem; margin-bottom:12px; }\n    header p { font-size:1.2rem; opacity:0.9; }\n    .btn { display:inline-block; margin-top:24px; background:#fff; color:#764ba2; padding:14px 32px; border-radius:30px; text-decoration:none; font-weight:bold; transition:0.3s; }\n    .btn:hover { transform:translateY(-3px); box-shadow:0 10px 25px rgba(0,0,0,0.2); }\n    .features { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:900px; margin:50px auto; padding:0 20px; }\n    .card { padding:30px; border-radius:16px; background:#f8f9fa; text-align:center; box-shadow:0 4px 15px rgba(0,0,0,0.08); }\n    .card h3 { margin:12px 0 8px; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n    <p>Build beautiful things with HTML5</p>\n    <a href="#" class="btn">Get Started →</a>\n  </header>\n  <div class="features">\n    <div class="card"><div style="font-size:2.5rem;">🚀</div><h3>Fast</h3><p>Lightning quick performance</p></div>\n    <div class="card"><div style="font-size:2.5rem;">🎨</div><h3>Beautiful</h3><p>Modern and clean design</p></div>\n    <div class="card"><div style="font-size:2.5rem;">📱</div><h3>Responsive</h3><p>Works on all devices</p></div>\n  </div>\n</body>\n</html>`,
  form: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family:'Segoe UI',sans-serif; background:#f0f2f5; display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; }\n    form { background:#fff; padding:40px; border-radius:16px; box-shadow:0 10px 40px rgba(0,0,0,0.1); width:400px; }\n    h2 { margin:0 0 24px; color:#333; }\n    label { display:block; margin-bottom:6px; font-weight:600; color:#555; font-size:0.9rem; }\n    input, textarea { width:100%; padding:12px; border:2px solid #e0e0e0; border-radius:10px; font-size:1rem; margin-bottom:16px; box-sizing:border-box; outline:none; transition:0.2s; font-family:inherit; }\n    input:focus, textarea:focus { border-color:#667eea; }\n    button { width:100%; padding:14px; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; border:none; border-radius:10px; font-size:1rem; font-weight:bold; cursor:pointer; transition:0.3s; }\n    button:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(102,126,234,0.4); }\n  </style>\n</head>\n<body>\n  <form onsubmit="event.preventDefault();alert('Submitted!')">\n    <h2>📬 Contact Us</h2>\n    <label>Full Name</label>\n    <input type="text" placeholder="John Doe" required>\n    <label>Email Address</label>\n    <input type="email" placeholder="john@example.com" required>\n    <label>Message</label>\n    <textarea rows="4" placeholder="Write your message..."></textarea>\n    <button type="submit">Send Message →</button>\n  </form>\n</body>\n</html>`,
  article: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family:Georgia,serif; max-width:700px; margin:50px auto; padding:0 20px; line-height:1.8; color:#222; }\n    h1 { font-size:2.5rem; margin-bottom:8px; }\n    .meta { color:#888; font-style:italic; margin-bottom:24px; }\n    hr { border:none; border-top:1px solid #eee; margin:24px 0; }\n    blockquote { border-left:4px solid #667eea; margin:20px 0; padding:12px 20px; background:#f8f9ff; font-style:italic; border-radius:0 8px 8px 0; }\n    mark { background:linear-gradient(120deg,#ffeaa7 0%,#fdcb6e 100%); padding:2px 4px; border-radius:3px; }\n    code { background:#f0f0f0; padding:2px 6px; border-radius:4px; font-size:0.9em; }\n  </style>\n</head>\n<body>\n  <article>\n    <h1>The Future of Web Development</h1>\n    <p class="meta">Published on May 15, 2026 by Sanskar</p>\n    <hr>\n    <p><mark>Web development</mark> is evolving faster than ever. With new standards like the Popover API and native CSS nesting, we are entering a new era.</p>\n    <blockquote>"The web is for everyone, and it starts with clean markup."</blockquote>\n    <p>Don't forget to use tags like <code>&lt;main&gt;</code> and <code>&lt;article&gt;</code> for accessibility.</p>\n    <h2>Key Takeaways</h2>\n    <ul>\n      <li>Semantic HTML improves SEO</li>\n      <li>CSS Grid replaces old float layouts</li>\n      <li>Web Components are the future</li>\n    </ul>\n  </article>\n</body>\n</html>`,
  dashboard: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; display:grid; grid-template-columns:220px 1fr; height:100vh; }\n    aside { background:#1e293b; color:#94a3b8; padding:24px; }\n    aside h2 { color:#fff; font-size:1.2rem; margin-bottom:24px; }\n    aside a { display:block; color:#94a3b8; text-decoration:none; padding:10px 12px; border-radius:8px; margin-bottom:4px; transition:0.2s; }\n    aside a:hover { background:#334155; color:#fff; }\n    main { background:#f1f5f9; padding:32px; overflow-y:auto; }\n    .cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:24px; }\n    .card { background:#fff; padding:24px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); }\n    .card h3 { color:#64748b; font-size:0.85rem; margin-bottom:8px; }\n    .card .value { font-size:2rem; font-weight:800; }\n    .green { color:#10b981; } .blue { color:#3b82f6; } .orange { color:#f59e0b; }\n  </style>\n</head>\n<body>\n  <aside>\n    <h2>🎛️ Admin</h2>\n    <a href="#">📊 Analytics</a>\n    <a href="#">👥 Users</a>\n    <a href="#">📦 Products</a>\n    <a href="#">⚙️ Settings</a>\n  </aside>\n  <main>\n    <h1>Dashboard</h1>\n    <div class="cards">\n      <div class="card"><h3>Revenue</h3><div class="value green">$12,450</div></div>\n      <div class="card"><h3>Active Users</h3><div class="value blue">1,284</div></div>\n      <div class="card"><h3>Uptime</h3><div class="value orange">99.9%</div></div>\n    </div>\n  </main>\n</body>\n</html>`,
  portfolio: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; background:#0f172a; color:#e2e8f0; }\n    header { text-align:center; padding:80px 20px 40px; }\n    header h1 { font-size:3rem; background:linear-gradient(135deg,#667eea,#f093fb); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }\n    header p { margin-top:12px; color:#94a3b8; font-size:1.1rem; }\n    .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; max-width:1000px; margin:30px auto; padding:0 20px; }\n    .project { background:#1e293b; border-radius:16px; overflow:hidden; transition:0.3s; border:1px solid #334155; }\n    .project:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,0.3); border-color:#667eea; }\n    .project .thumb { height:160px; background:linear-gradient(135deg,#667eea,#764ba2); display:flex; align-items:center; justify-content:center; font-size:3rem; }\n    .project .info { padding:20px; }\n    .project h3 { margin-bottom:6px; }\n    .project p { color:#94a3b8; font-size:0.9rem; }\n    .tag { display:inline-block; background:#334155; padding:4px 10px; border-radius:20px; font-size:0.75rem; margin-top:8px; margin-right:4px; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>My Portfolio</h1>\n    <p>A showcase of my best work</p>\n  </header>\n  <div class="grid">\n    <div class="project"><div class="thumb">🎨</div><div class="info"><h3>Design System</h3><p>A complete UI component library</p><span class="tag">CSS</span><span class="tag">HTML</span></div></div>\n    <div class="project"><div class="thumb">🚀</div><div class="info"><h3>Startup Landing</h3><p>Modern SaaS landing page</p><span class="tag">JS</span><span class="tag">HTML</span></div></div>\n    <div class="project"><div class="thumb">📊</div><div class="info"><h3>Analytics Dashboard</h3><p>Real-time data visualization</p><span class="tag">Chart.js</span><span class="tag">CSS Grid</span></div></div>\n  </div>\n</body>\n</html>`
};

function openPlayground(btn) {
  const pre = btn.closest('.cb').querySelector('.cb-b');
  const code = pre.innerText;
  const modal = document.getElementById('playgroundModal');
  modal.showModal();
  initPgEditor();
  pgEditorInstance.setValue(code);
  pgEditorInstance.refresh();
  setTimeout(() => { pgEditorInstance.refresh(); updatePgPreview(); }, 100);
}

function initPgEditor() {
  if (pgEditorInstance) return;
  const ta = document.getElementById('pgEditor');
  pgEditorInstance = CodeMirror.fromTextArea(ta, {
    mode: 'htmlmixed',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    matchTags: { bothTags: true },
    styleActiveLine: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
    extraKeys: {
      'Ctrl-/': 'toggleComment',
      'Cmd-/': 'toggleComment',
      'Ctrl-S': function (cm) { pgManualSave(); },
      'Cmd-S': function (cm) { pgManualSave(); },
      'Ctrl-Enter': function (cm) { pgRunPreview(); },
      'Cmd-Enter': function (cm) { pgRunPreview(); },
      'Ctrl-Shift-F': function (cm) { pgFormat(); },
      'Cmd-Shift-F': function (cm) { pgFormat(); },
      'Tab': function (cm) {
        if (cm.somethingSelected()) cm.indentSelection('add');
        else cm.replaceSelection('  ', 'end');
      }
    }
  });
  pgEditorInstance.on('change', function () {
    pgMarkUnsaved();
    clearTimeout(pgAutosaveTimer);
    pgAutosaveTimer = setTimeout(pgAutosave, 2000);
    updatePgPreview();
  });
  pgEditorInstance.on('cursorActivity', pgUpdateStatusBar);
  if (pgIsVertical) document.getElementById('pgBody').classList.add('vertical');

  // Try restore autosave
  
    let saved = null;
    try {
        saved = localStorage.getItem('pgAutoSave');
    } catch(e) {
        console.warn('localStorage not available for loadProgress');
    }
  if (saved) {
    pgEditorInstance.setValue(saved);
    setTimeout(updatePgPreview, 100);
  }

  // Console message listener
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'pg-console') {
      appendPgConsole(e.data.level, e.data.args);
    }
  });
}

function updatePgPreview() {
  if (!pgEditorInstance) return;
  const code = pgEditorInstance.getValue();
  const frame = document.getElementById('pgFrame');
  // Inject console capture script
  const consoleScript = `<script>
        ['log','warn','error','info'].forEach(function(m){
          var orig = console[m];
          console[m] = function(){
            var args = Array.prototype.slice.call(arguments).map(function(a){
              try { return typeof a==='object'?JSON.stringify(a):String(a); } catch(e){ return String(a); }
            });
            parent.postMessage({type:'pg-console',level:m,args:args},'*');
            orig.apply(console,arguments);
          };
        });
        window.onerror=function(m,s,l){parent.postMessage({type:'pg-console',level:'error',args:[m+' (line '+l+')']},'*');};
      <\/script>`;
  const injected = code.replace(/<head>/i, '<head>' + consoleScript);
  frame.srcdoc = injected.includes('<head>') ? injected : consoleScript + code;
}

function pgRunPreview() { updatePgPreview(); }

function loadPgTemplate() {
  const val = document.getElementById('pgTemplate').value;
  if (val && PG_TEMPLATES[val]) {
    initPgEditor();
    pgEditorInstance.setValue(PG_TEMPLATES[val]);
    pgEditorInstance.refresh();
    pgCurrentFileName = val + '.html';
    document.getElementById('pgFileName').textContent = pgCurrentFileName;
    setTimeout(updatePgPreview, 50);
  }
  document.getElementById('pgTemplate').value = '';
}

function copyPgCode() {
  const code = pgEditorInstance ? pgEditorInstance.getValue() : '';
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = orig, 1500);
  });
}

// File operations
function pgNewFile() {
  if (pgEditorInstance && pgEditorInstance.getValue().trim()) {
    if (!confirm('Create new file? Unsaved changes will be lost.')) return;
  }
  if (pgEditorInstance) pgEditorInstance.setValue('<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; padding: 20px; }\n  </style>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Start coding here...</p>\n</body>\n</html>');
  pgCurrentFileName = 'untitled.html';
  document.getElementById('pgFileName').textContent = pgCurrentFileName;
  setTimeout(updatePgPreview, 50);
}

function pgOpenFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    initPgEditor();
    pgEditorInstance.setValue(e.target.result);
    pgEditorInstance.refresh();
    pgCurrentFileName = file.name;
    document.getElementById('pgFileName').textContent = pgCurrentFileName;
    setTimeout(updatePgPreview, 50);
  };
  reader.readAsText(file);
  event.target.value = '';
}

function pgDownloadFile() {
  const code = pgEditorInstance ? pgEditorInstance.getValue() : '';
  const blob = new Blob([code], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = pgCurrentFileName;
  a.click();
  URL.revokeObjectURL(url);
  pgMarkSaved();
}

// Undo / Redo
function pgUndo() { if (pgEditorInstance) pgEditorInstance.undo(); }
function pgRedo() { if (pgEditorInstance) pgEditorInstance.redo(); }

// Format (basic HTML beautifier)
function pgFormat() {
  if (!pgEditorInstance) return;
  let code = pgEditorInstance.getValue();
  // Simple indent-based formatter
  let formatted = '';
  let indent = 0;
  const lines = code.replace(/>\s*</g, '>\n<').split('\n');
  const selfClosing = /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i;
  const closing = /^<\//;
  const opening = /^<[a-zA-Z]/;
  lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    if (closing.test(line)) indent = Math.max(0, indent - 1);
    formatted += '  '.repeat(indent) + line + '\n';
    if (opening.test(line) && !selfClosing.test(line) && !closing.test(line) && !line.endsWith('/>') && !line.includes('</')) indent++;
  });
  pgEditorInstance.setValue(formatted.trim());
  setTimeout(updatePgPreview, 50);
}

// Autosave
function pgAutosave() {
  if (!pgEditorInstance) return;
  
    try {
        localStorage.setItem('pgAutoSave', pgEditorInstance.getValue());
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  pgMarkSaved();
}

function pgManualSave() {
  pgAutosave();
}

function pgMarkUnsaved() {
  const el = document.getElementById('pgAutosaveStatus');
  if (el) { el.textContent = '● Unsaved'; el.classList.add('unsaved'); }
}

function pgMarkSaved() {
  const el = document.getElementById('pgAutosaveStatus');
  if (el) { el.textContent = '💾 Saved'; el.classList.remove('unsaved'); }
}

// Status bar
function pgUpdateStatusBar() {
  if (!pgEditorInstance) return;
  const cur = pgEditorInstance.getCursor();
  document.getElementById('pgLine').textContent = cur.line + 1;
  document.getElementById('pgCol').textContent = cur.ch + 1;
  document.getElementById('pgChars').textContent = pgEditorInstance.getValue().length;
}

// Layout toggle
function togglePgLayout() {
  pgIsVertical = !pgIsVertical;
  const body = document.getElementById('pgBody');
  body.classList.toggle('vertical', pgIsVertical);
  
    try {
        localStorage.setItem('pgLayout', pgIsVertical ? 'vertical' : 'horizontal');
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  if (pgEditorInstance) setTimeout(() => pgEditorInstance.refresh(), 100);
}

// Fullscreen
function togglePgFullscreen() {
  const dialog = document.getElementById('playgroundModal');
  dialog.classList.toggle('pg-fullscreen');
  if (pgEditorInstance) setTimeout(() => pgEditorInstance.refresh(), 100);
}

// Console
function appendPgConsole(level, args) {
  const log = document.getElementById('pgConsoleLog');
  if (!log) return;
  const cls = level === 'error' ? 'log-error' : level === 'warn' ? 'log-warn' : 'log-info';
  const div = document.createElement('div');
  div.className = 'log-line ' + cls;
  div.textContent = (level === 'error' ? '❌ ' : level === 'warn' ? '⚠️ ' : '→ ') + args.join(' ');
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function togglePgConsole() {
  const c = document.getElementById('pgConsole');
  c.style.display = c.style.display === 'none' ? 'flex' : 'none';
}

function clearPgConsole() {
  document.getElementById('pgConsoleLog').innerHTML = '';
}

function closePgModal() {
  pgAutosave();
  document.getElementById('playgroundModal').close();
}

function copyAnchor(e, id) {
  e.preventDefault();
  const url = window.location.href.split('#')[0] + '#' + id;
  navigator.clipboard.writeText(url).then(() => {
    const btn = e.target;
    btn.textContent = '✓';
    btn.style.color = 'var(--accent2)';
    setTimeout(() => { btn.textContent = '#'; btn.style.color = ''; }, 1500);
  });
}

window.readDataDemo = function () {
  let v = '';
  document.querySelectorAll('.demo-data').forEach(d => {
    v += d.textContent.trim() + ' is Database ID: ' + d.getAttribute('value') + '\\n';
  });
  alert(v);
};

window.instantiateTemplateDemo = function () {
  const temp = document.getElementById('demo-badge-template');
  const zone = document.getElementById('demo-injection-zone');
  const txt = document.getElementById('demo-iz-txt');
  if (!temp || !zone) return;

  if (txt) txt.remove(); // Remove placeholder

  const clone = temp.content.cloneNode(true);
  const labels = ["Frontend", "Backend", "Full-Stack", "Web3 Architect", "UI/UX", "Creator", "HTML Master", "Innovator"];
  const icos = ["🎨", "⚙️", "🚀", "💎", "✨", "🔥", "👑", "💡"];
  const rand = Math.floor(Math.random() * labels.length);

  clone.querySelector(".text").textContent = labels[rand];
  clone.querySelector(".ico").textContent = icos[rand];

  // Custom random background colors for fun
  const colors = ["#6c63ff", "#3ecfcf", "#ff7eb6", "#f92672", "#4ade80", "#ff952b"];
  clone.querySelector("div").style.background = colors[Math.floor(Math.random() * colors.length)];

  zone.appendChild(clone);
};

let currentSpeakingId = null;

function speakText(id) {
  if (!('speechSynthesis' in window)) {
    alert("Sorry, your browser doesn't support text to speech!");
    return;
  }

  const btn = document.getElementById('listen-btn-' + id);

  // If already speaking this section, STOP.
  if (currentSpeakingId === id) {
    window.speechSynthesis.cancel();
    currentSpeakingId = null;
    if (btn) btn.innerHTML = '🔊 Listen';
    return;
  }

  // Stop whatever is playing and reset its button
  window.speechSynthesis.cancel();
  if (currentSpeakingId) {
    const oldBtn = document.getElementById('listen-btn-' + currentSpeakingId);
    if (oldBtn) oldBtn.innerHTML = '🔊 Listen';
  }

  const section = document.getElementById(id);
  if (!section) return;

  let textToRead = "";
  section.querySelectorAll('h3, p, li, .tip, .warn, .info').forEach(el => {
    textToRead += el.innerText + ". ";
  });

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.rate = 0.95;
  utterance.pitch = 1.05;

  utterance.onend = function () {
    if (currentSpeakingId === id) {
      currentSpeakingId = null;
      if (btn) btn.innerHTML = '🔊 Listen';
    }
  };

  currentSpeakingId = id;
  if (btn) btn.innerHTML = '⏹️ Stop';

  window.speechSynthesis.speak(utterance);
}


const INTERVIEW_QUESTIONS = [
  { q: "What is the difference between HTML and XHTML?", a: "HTML is more forgiving with syntax (can omit closing tags), whereas XHTML is a strict XML-based language that requires perfect syntax and all tags must be closed." },
  { q: "What is the purpose of the 'alt' attribute on images?", a: "It provides alternative text for screen readers (accessibility) and displays if the image fails to load, also helping with SEO." },
  { q: "What are semantic elements?", a: "Elements like <header>, <footer>, and <article> that clearly describe their meaning to both the browser and the developer, improving SEO and accessibility." },
  { q: "Explain the 'viewport' meta tag.", a: "It gives instructions to the browser on how to control the page's dimensions and scaling, essential for responsive mobile design." },
  { q: "What is the difference between local storage and session storage?", a: "Local storage persists even after the browser is closed, while session storage is cleared when the tab/window is closed." }
];

const BEST_PRACTICES = [
  { t: "Use Semantic HTML", d: "Always prefer <nav> or <header> over <div> for structure. It helps search engines and screen readers understand your page." },
  { t: "Keep it Accessible", d: "Use 'alt' for images, 'label' for inputs, and ensure high color contrast for readability." },
  { t: "Optimize for Speed", d: "Use 'loading=lazy' for images and minimize external script calls to keep your page fast." },
  { t: "Validate Your Code", d: "Use the W3C Validator to ensure your HTML follows standard rules and prevents rendering bugs." }
];

const FLASHCARDS = [
  { f: "Which tag is used for the largest heading?", b: "<h1>" },
  { f: "How do you create a line break?", b: "<br>" },
  { f: "Which attribute opens a link in a new tab?", b: 'target="_blank"' },
  { f: "What tag is used for a numbered list?", b: "<ol>" },
  { f: "Which tag embeds a video?", b: "<video>" },
  {
    id: "tag-dialog", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;dialog&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;dialog&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;dialog&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the dialog element --&gt;
&lt;dialog&gt;
  &lt;!-- Content goes here --&gt;
&lt;/dialog&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-dialog", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;dialog&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;dialog&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;dialog&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the dialog element --&gt;
&lt;dialog&gt;
  &lt;!-- Content goes here --&gt;
&lt;/dialog&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-details", title: 'The <details>/<summary> Tags', badge: "INTERACTIVE", emoji: "📂", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;details/summary&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;details/summary&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;details/summary&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the details/summary element --&gt;
&lt;details/summary&gt;
  &lt;!-- Content goes here --&gt;
&lt;/details/summary&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-template", title: 'The <template> Tag', badge: "SCRIPTING", emoji: "📄", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;template&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;template&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;template&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the template element --&gt;
&lt;template&gt;
  &lt;!-- Content goes here --&gt;
&lt;/template&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-picture", title: 'The <picture> Tag', badge: "MEDIA", emoji: "🖼️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;picture&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;picture&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;picture&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the picture element --&gt;
&lt;picture&gt;
  &lt;!-- Content goes here --&gt;
&lt;/picture&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-datalist", title: 'The <datalist> Tag', badge: "FORMS", emoji: "📋", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;datalist&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;datalist&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;datalist&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the datalist element --&gt;
&lt;datalist&gt;
  &lt;!-- Content goes here --&gt;
&lt;/datalist&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-meter", title: 'The <meter> Tag', badge: "FORMS", emoji: "📊", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;meter&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;meter&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;meter&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the meter element --&gt;
&lt;meter&gt;
  &lt;!-- Content goes here --&gt;
&lt;/meter&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-progress", title: 'The <progress> Tag', badge: "FORMS", emoji: "⏳", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;progress&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;progress&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;progress&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the progress element --&gt;
&lt;progress&gt;
  &lt;!-- Content goes here --&gt;
&lt;/progress&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-output", title: 'The <output> Tag', badge: "FORMS", emoji: "📤", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;output&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;output&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;output&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the output element --&gt;
&lt;output&gt;
  &lt;!-- Content goes here --&gt;
&lt;/output&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-mark", title: 'The <mark> Tag', badge: "INLINE", emoji: "🖍️", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;mark&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;mark&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;mark&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the mark element --&gt;
&lt;mark&gt;
  &lt;!-- Content goes here --&gt;
&lt;/mark&gt;
    </code></pre>
    `
  }
,
  {
    id: "tag-time", title: 'The <time> Tag', badge: "INLINE", emoji: "🕐", content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>&lt;time&gt;</code> element is a powerful semantic HTML5 element that enables developers to create more meaningful, accessible, and interactive web pages without relying on JavaScript workarounds.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses the <code>&lt;time&gt;</code> tag, it constructs a corresponding DOM node with built-in behaviors and ARIA roles. Modern browsers provide native styling and interaction patterns, reducing the need for custom JavaScript implementations.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always use semantic HTML elements like <code>&lt;time&gt;</code> when available instead of building custom solutions with divs and JavaScript. This improves accessibility, reduces code complexity, and leverages browser-native optimizations.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-html">
&lt;!-- Using the time element --&gt;
&lt;time&gt;
  &lt;!-- Content goes here --&gt;
&lt;/time&gt;
    </code></pre>
    `
  }

];

// ===== MASTERY LOGIC =====
let masteredTags = JSON.parse(localStorage.getItem('htmlMasteredTags') || '[]');
let xp = parseInt(localStorage.getItem('htmlUserXP') || '0');

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
    triggerConfetti(btn);
  }
  
    try {
        localStorage.setItem('htmlMasteredTags', JSON.stringify(masteredTags));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  
    try {
        localStorage.setItem('htmlUserXP', xp.toString());
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  updateMasteryUI();
}

function updateMasteryUI() {
  const count = masteredTags.length;
  const level = Math.floor(xp / 500) + 1;
  let rank = "Novice";
  if (count >= 100) rank = "HTML Grandmaster";
  else if (count >= 75) rank = "Wizard";
  else if (count >= 50) rank = "Expert";
  else if (count >= 25) rank = "Intermediate";
  else if (count >= 10) rank = "Apprentice";

  if (document.getElementById('sbMasteryCount')) document.getElementById('sbMasteryCount').innerText = count;
  if (document.getElementById('masteryCountStat')) document.getElementById('masteryCountStat').innerText = count;
  if (document.getElementById('masteryLevel')) document.getElementById('masteryLevel').innerText = level;
  if (document.getElementById('masteryRank')) document.getElementById('masteryRank').innerText = rank;
  if (document.getElementById('mcRank')) document.getElementById('mcRank').innerText = rank;

  const bar = document.getElementById('masteryProgressBar');
  if (bar) bar.style.width = count + '%';

  document.querySelectorAll('#sbNav a').forEach(a => {
    const tid = a.getAttribute('href').substring(1);
    if (masteredTags.includes(tid)) {
      a.style.borderLeft = '4px solid #22c55e';
    } else {
      a.style.borderLeft = '';
    }
  });
}

function openCheatSheet() {
  renderCheatSheet();
  document.getElementById('cheatSheetModal').showModal();
}

function renderCheatSheet() {
  const q = document.getElementById('csSearch').value.toLowerCase();
  const grid = document.getElementById('csGrid');
  const filtered = TAGS.filter(t => t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
  grid.innerHTML = filtered.map(t => `<div class="cs-item"><a href="#${t.id}" onclick="document.getElementById('cheatSheetModal').close();"><span style="font-size:1.2rem;margin-right:8px;">${t.emoji}</span><strong>${t.title.replace(/<|>/g, '')}</strong><div style="font-size:0.7rem;opacity:0.6;margin-top:4px;">${t.badge}</div></a></div>`).join('');
}

function openMasteryCenter() {
  showMasteryTab('interview');
  document.getElementById('masteryCenterModal').showModal();
}

function showMasteryTab(tab) {
  const content = document.getElementById('mcContent');
  const btns = document.querySelectorAll('.extra-tab-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (tab === 'interview') {
    btns[0].classList.add('active');
    content.innerHTML = `<h3>💬 Interview Questions</h3><div style="display:flex;flex-direction:column;gap:20px;">` + INTERVIEW_QUESTIONS.map(i => `<div style="background:var(--bg3);padding:20px;border-radius:16px;border:1px solid var(--border);"><strong style="color:var(--accent);display:block;margin-bottom:8px;">Q: ${i.q}</strong><p style="margin:0;font-size:0.95rem;line-height:1.6;">${i.a}</p></div>`).join('') + `</div>`;
  } else if (tab === 'best-practices') {
    btns[1].classList.add('active');
    content.innerHTML = `<h3>🛡️ Best Practices</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">` + BEST_PRACTICES.map(b => `<div style="background:var(--bg3);padding:20px;border-radius:16px;border-bottom:4px solid var(--accent2);"><strong style="display:block;margin-bottom:8px;">${b.t}</strong><p style="margin:0;font-size:0.85rem;opacity:0.8;">${b.d}</p></div>`).join('') + `</div>`;
  } else if (tab === 'flashcards') {
    btns[2].classList.add('active');
    content.innerHTML = `<h3>🃏 Flashcards</h3><p style="opacity:0.6;margin-bottom:20px;">Click to flip the card and reveal the answer!</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">` + FLASHCARDS.map(f => `<div class="flash-card-container" onclick="this.classList.toggle('flipped')"><div class="flash-inner"><div class="flash-front"><span>${f.f}</span></div><div class="flash-back"><strong>${f.b}</strong></div></div></div>`).join('') + `</div>`;
  }
}



function exportProgress() {
  const data = { favorites, masteredTags, xp, userName: localStorage.getItem('userNameData'), theme: localStorage.getItem('themeMode'), date: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `HTML_Mastery_Progress_${new Date().toLocaleDateString()}.json`;
  a.click();
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.favorites) favorites = data.favorites;
      if (data.masteredTags) masteredTags = data.masteredTags;
      if (data.xp) xp = data.xp;
      if (data.userName) 
    try {
        localStorage.setItem('userNameData', data.userName);
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
      if (data.theme) applyTheme(data.theme);
      
    try {
        localStorage.setItem('htmlTagsFavorites', JSON.stringify(favorites));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
      
    try {
        localStorage.setItem('htmlMasteredTags', JSON.stringify(masteredTags));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
      
    try {
        localStorage.setItem('htmlUserXP', xp.toString());
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
      alert('Progress imported successfully!');
      location.reload();
    } catch (err) {
      alert('Error importing file. Please ensure it is a valid JSON file.');
    }
  };
  reader.readAsText(file);
}

let favorites = JSON.parse(localStorage.getItem('htmlTagsFavorites') || '[]');

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
  
    try {
        localStorage.setItem('htmlTagsFavorites', JSON.stringify(favorites));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  updateFavCount();
};

function updateFavCount() {
  const count = favorites.length;
  if (document.getElementById('favCountStat')) document.getElementById('favCountStat').innerText = count;
}

function renderAll() {
  const nav = document.getElementById("sbNav");
  const content = document.getElementById("content");
  let navHTML = "";

  // Tag of the Day Logic
  const today = new Date();
  const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
  const tagIndex = seed % TAGS.length;
  const totDay = TAGS[tagIndex];
  const totDayText = totDay.content.match(/<p>(.*?)<\/p>/)?.[1]?.replace(/<[^>]+>/g, '') || "Discover something new today!";

  // Update Header Card
  if (document.getElementById('totDayCard')) {
    document.getElementById('totDayCard').style.display = 'block';
    document.getElementById('totDayText').innerText = `Did you know? ${totDay.emoji} ${totDay.title.replace(/<|>/g, '')} - ${totDayText.substring(0, 120)}...`;
    document.getElementById('totDayBtn').onclick = () => document.getElementById(totDay.id).scrollIntoView({ behavior: 'smooth' });
  }

  let contentHTML = "";
  const badges = new Set();
  TAGS.forEach((t, i) => {
    badges.add(t.badge);
    navHTML += `<a href="#${t.id}" data-idx="${i}" data-badge="${t.badge}">${t.emoji} ${i + 1}. ${t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>`;
    const safeTitle = t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const isFav = favorites.includes(t.id);
    const favIcon = isFav ? '❤️' : '♡';
    const favClass = isFav ? 'fav-btn active' : 'fav-btn';
    const favTitle = isFav ? 'Remove from Favorites' : 'Add to Favorites';

    const isMastered = masteredTags.includes(t.id);
    const masteryClass = isMastered ? 'mastery-btn mastered' : 'mastery-btn';
    const masteryText = isMastered ? '✅ Mastered' : '🎓 Mark Mastered';

    contentHTML += `<section id="${t.id}">
          <h2>
            <a href="#${t.id}" class="anchor-link" title="Copy link to tag" onclick="copyAnchor(event, '${t.id}')">#</a> 
            ${i + 1}. ${safeTitle} 
            <span class="tag-badge">${t.badge}</span> 
            <button class="${favClass}" onclick="toggleFavorite('${t.id}', this)" title="${favTitle}">${favIcon}</button> 
            <button class="${masteryClass}" onclick="toggleMastery('${t.id}', this)">${masteryText}</button>
            <button class="listen-btn" id="listen-btn-${t.id}" onclick="speakText('${t.id}')" title="Listen to explanation (Text-to-Speech)" aria-label="Listen to explanation">🔊 Listen</button>
          </h2>
          ${t.content}
        </section>`;

    // Add a motivational divider every 10 tags
    if ((i + 1) % 10 === 0 && i !== TAGS.length - 1) {
      const quotes = [
        "Consistency is what transforms average into excellence.",
        "Every expert was once a beginner. Keep going!",
        "Code is like humor. When you have to explain it, it's bad.",
        "First, solve the problem. Then, write the code.",
        "Knowledge is power, but practice is the key.",
        "The only way to learn a new programming language is by writing programs in it.",
        "Don't practice until you get it right. Practice until you can't get it wrong.",
        "Small daily improvements over time lead to stunning results.",
        "The best error message is the one that never shows up."
      ];
      const quote = quotes[Math.floor((i + 1) / 10) % quotes.length];
      contentHTML += `<div style="margin: 60px 0; text-align: center; border-top: 1px dashed var(--border); border-bottom: 1px dashed var(--border); padding: 30px 20px; border-radius: 16px; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 5%, transparent), color-mix(in srgb, var(--accent2) 5%, transparent));">
            <span style="font-size: 2rem; display: block; margin-bottom: 10px;">🌟</span>
            <p style="font-size: 1.2rem; font-style: italic; color: var(--text); margin-bottom: 16px;">"${quote}"</p>
            <span style="font-weight: 700; color: var(--accent); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Milestone: ${i + 1} Tags Mastered</span>
            <button onclick="window.scrollTo({top:0, behavior:'smooth'})" style="display: block; margin: 20px auto 0; background: var(--bg2); color: var(--text); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">⬆️ Back to Top</button>
          </div>`;
    }
  });
  nav.innerHTML = navHTML;
  content.innerHTML = contentHTML;

  // Update dynamic totals
  if (document.getElementById('totalTagsDesc')) document.getElementById('totalTagsDesc').innerText = TAGS.length;
  if (document.getElementById('totalTagsStat')) document.getElementById('totalTagsStat').innerText = TAGS.length;

  // Render Filter Categories
  const filter = document.getElementById("sbFilter");
  if (filter && filter.options.length === 1) {
    filter.innerHTML += `<option value="FAVORITES">⭐ Favorites Only</option>`;
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
  // sidebar nav click
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 900) toggleSidebar();
  }));

  const dc = document.getElementById("demoCanvas");
  if (dc) {
    const cx = dc.getContext("2d"), g = cx.createLinearGradient(0, 0, 400, 0);
    g.addColorStop(0, "#6c63ff"); g.addColorStop(1, "#3ecfcf");
    cx.fillStyle = g; cx.fillRect(0, 0, 400, 120);
    cx.fillStyle = "#fff"; cx.font = "20px Inter"; cx.fillText("Hello Sanskar! 🎨", 110, 50);
    cx.beginPath(); cx.arc(60, 70, 25, 0, Math.PI * 2); cx.fillStyle = "#ff7eb6"; cx.fill();
    cx.beginPath(); cx.arc(340, 70, 25, 0, Math.PI * 2); cx.fillStyle = "#ffd700"; cx.fill();
  }

  // Calculate Reading Time
  const words = document.getElementById("content").innerText.split(/\s+/).length;
  const readTimeEl = document.getElementById("readTime");
  if (readTimeEl) readTimeEl.textContent = Math.ceil(words / 200);

  updateMasteryUI();
}

// ===== COPY =====
function triggerConfetti(btn) {
  for (let i = 0; i < 15; i++) {
    const c = document.createElement('div');
    c.style.cssText = `position: absolute; width: 6px; height: 6px; background:${['#6c63ff', '#3ecfcf', '#ff7eb6', '#ffd700'][Math.floor(Math.random() * 4)]}; left:${btn.getBoundingClientRect().left + 30}px; top:${btn.getBoundingClientRect().top + window.scrollY}px; border-radius: 50%; pointer-events: none; z-index: 9999; `;
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
    btn.textContent = '✅ Copied!'; btn.classList.add('ok');
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('ok'); }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea'); ta.value = pre.innerText;
    ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    btn.textContent = '✅ Copied!'; btn.classList.add('ok');
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('ok'); }, 2000);
  });
}

// ===== SIDEBAR =====
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const btn = document.getElementById("sbOpen");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
  const isOpen = sidebar.classList.contains("open");
  btn.setAttribute("aria-expanded", isOpen);
  // Prevent body scroll when sidebar is open on mobile
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
  const th = isCustom ? JSON.parse(localStorage.getItem("customThemeObj")) : PRESET_THEMES.find(t => t.id === id);
  if (!th) return;
  applyThemeObj(th);
  
    try {
        localStorage.setItem('themeMode', id);
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  // Highlight active card
  document.querySelectorAll(".theme-card").forEach(c => c.classList.remove("active"));
  if (!isCustom) {
    const idx = PRESET_THEMES.findIndex(t => t.id === id);
    if (idx !== -1) document.querySelectorAll(".theme-card")[idx]?.classList.add("active");
  }
}
function saveCustomTheme() {
  const th = {
    id: "custom", name: "Custom Builder",
    bg: document.getElementById("ct-bg").value,
    bg2: document.getElementById("ct-bg2").value,
    bg3: document.getElementById("ct-bg").value,
    bg4: document.getElementById("ct-bg2").value,
    text: document.getElementById("ct-text").value,
    text2: document.getElementById("ct-text").value,
    text3: document.getElementById("ct-text").value,
    accent: document.getElementById("ct-accent").value,
    accent2: document.getElementById("ct-accent2").value,
    accent3: document.getElementById("ct-accent").value,
    border: document.getElementById("ct-accent").value + "33",
    card: document.getElementById("ct-bg2").value,
    codeBg: document.getElementById("ct-bg").value,
    sbBg: document.getElementById("ct-bg2").value,
    hdrBg: "linear-gradient(135deg, " + document.getElementById("ct-bg2").value + ", " + document.getElementById("ct-accent").value + ")"
  };
  
    try {
        localStorage.setItem('customThemeObj', JSON.stringify(th));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  applyTheme("custom");
  document.getElementById("themeModal").close();
}

// Restore Theme
const savedMode = localStorage.getItem("themeMode");
if (savedMode) applyTheme(savedMode);
else applyTheme("dark");

// Make pickers live preview when dragging
["bg", "bg2", "text", "accent", "accent2"].forEach(p => {
  document.getElementById("ct-" + p).addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--" + p, e.target.value);
  });
});

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
    const pct = Math.min(100, Math.max(0, window.scrollY / h * 100));
    document.getElementById("progress-bar").style.width = pct + "%";
  }
}, { passive: true });

// ===== SEARCH & FILTER =====
function applyFilters() {
  const q = document.getElementById("sbSearch").value.toLowerCase();
  const cat = document.getElementById("sbFilter") ? document.getElementById("sbFilter").value : "ALL";

  let visibleCount = 0;

  document.querySelectorAll("#sbNav a").forEach(a => {
    const id = a.getAttribute("href").substring(1);
    const matchesQ = a.textContent.toLowerCase().includes(q);
    let matchesCat = false;

    if (cat === "ALL") {
      matchesCat = true;
    } else if (cat === "FAVORITES") {
      matchesCat = favorites.includes(id);
    } else {
      matchesCat = a.getAttribute("data-badge") === cat;
    }

    const isVisible = matchesQ && matchesCat;
    a.style.display = isVisible ? "" : "none";

    // Hide/show the actual content section as well
    const section = document.getElementById(id);
    if (section) {
      section.style.display = isVisible ? "" : "none";
    }

    if (isVisible) visibleCount++;
  });

  // Update dynamic totals
  const totalStat = document.getElementById('totalTagsStat');
  const totalDesc = document.getElementById('totalTagsDesc');
  if (totalStat) totalStat.innerText = visibleCount;
  if (totalDesc) totalDesc.innerText = visibleCount;
}
document.getElementById("sbSearch").addEventListener("input", applyFilters);
if (document.getElementById("sbFilter")) {
  document.getElementById("sbFilter").addEventListener("change", applyFilters);
}


// ===== ACTIVE NAV HIGHLIGHT =====
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  document.querySelectorAll("#sbNav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// ===== SIDEBAR CLOSE BUTTON =====
document.getElementById("sbClose").addEventListener("click", toggleSidebar);

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
    wrap.innerHTML = `<span style="color:var(--text2);">${timeStr},</span> <span style="color:var(--accent2);">${name}</span>! ☀️`;
  } else {
    wrap.innerHTML = `<span style="color:var(--text2);">${timeStr}</span>! ☀️`;
  }
}

function saveUsername() {
  const name = document.getElementById("wmUsername").value.trim();
  
    try {
        localStorage.setItem('userNameData', name);
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  
    try {
        localStorage.setItem('hasVisitedGuide', "true");
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  document.getElementById("welcomeModal").close();
  updateGreetingDisplay();
}

function skipUsername() {
  
    try {
        localStorage.setItem('hasVisitedGuide', "true");
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
  document.getElementById("welcomeModal").close();
  updateGreetingDisplay();
}

function initGreeting() {
  try {
    const hasVisited = localStorage.getItem("hasVisitedGuide");
    if (!hasVisited) {
      const modal = document.getElementById("welcomeModal");
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      } else if (modal) {
        modal.style.display = "block"; // Polyfill fallback
      }
    }
    updateGreetingDisplay();
  } catch (e) {
    console.error("Greeting system error:", e);
  }
}

// ===== INIT =====
try {
  renderAll();
  updateFavCount();
  initGreeting();
  // Apply saved theme on load
  const savedTheme = localStorage.getItem("themeMode");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme("dark");
  }
} catch (e) {
  console.error("Init error:", e);
  // Ensure at least the header loads
  document.querySelector("header").style.display = "block";
}
// Code optimized and documented by Sanskar Developer
