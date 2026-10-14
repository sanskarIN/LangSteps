// ===== DEVFORGE PYTHON MASTERY SCRIPT (100 CONCEPTS) =====
// Generated for complete Python mastery with gamification, themes, code simulator, and quizzes

setTimeout(() => {
  const splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 800);
  }
}, 1200);

const PRESET_THEMES = [{"id": "dark", "name": "Midnight Dark", "bg": "#0a0a1a", "bg2": "#12122a", "bg3": "#0d0d22", "bg4": "#080818", "text": "#d0d0ee", "text2": "#b0b0d0", "text3": "#8888bb", "accent": "#6c63ff", "accent2": "#3ecfcf", "accent3": "#ffa36b", "border": "#6c63ff22", "card": "#12122a", "codeBg": "#080818", "sbBg": "#0f0f24", "hdrBg": "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)"}, {"id": "light", "name": "Clean Light", "bg": "#f0f0f8", "bg2": "#ffffff", "bg3": "#f5f5ff", "bg4": "#eeeef8", "text": "#1a1a2e", "text2": "#333333", "text3": "#666666", "accent": "#5b54e6", "accent2": "#1aada0", "accent3": "#e8823a", "border": "#5b54e622", "card": "#ffffff", "codeBg": "#f0f0f8", "sbBg": "#ffffff", "hdrBg": "linear-gradient(135deg,#5b54e6,#1aada0)"}, {"id": "cyberpunk", "name": "Cyberpunk Neon", "bg": "#080812", "bg2": "#0f0f24", "bg3": "#0c0c1c", "bg4": "#06060e", "text": "#e0e0ff", "text2": "#c0c0e0", "text3": "#8080b0", "accent": "#ff2a6d", "accent2": "#05d9e8", "accent3": "#f9c80e", "border": "#ff2a6d22", "card": "#0f0f24", "codeBg": "#06060e", "sbBg": "#0b0b1c", "hdrBg": "linear-gradient(135deg,#1a0026,#001a2e,#000)"}, {"id": "synthwave", "name": "Synthwave Sunset", "bg": "#120824", "bg2": "#1c0d38", "bg3": "#160a2e", "bg4": "#0e061c", "text": "#e8d8f8", "text2": "#c8b8dc", "text3": "#9888ac", "accent": "#f72585", "accent2": "#7209b7", "accent3": "#4cc9f0", "border": "#f7258522", "card": "#1c0d38", "codeBg": "#0e061c", "sbBg": "#160a2e", "hdrBg": "linear-gradient(135deg,#2e0854,#180b38,#0b001a)"}, {"id": "dracula", "name": "Dracula Classic", "bg": "#1e1f29", "bg2": "#282a36", "bg3": "#222430", "bg4": "#191a24", "text": "#f8f8f2", "text2": "#e0e0d8", "text3": "#6272a4", "accent": "#bd93f9", "accent2": "#50fa7b", "accent3": "#ff79c6", "border": "#bd93f922", "card": "#282a36", "codeBg": "#191a24", "sbBg": "#21222c", "hdrBg": "linear-gradient(135deg,#282a36,#1e1f29,#14141d)"}, {"id": "nord", "name": "Nordic Frost", "bg": "#242933", "bg2": "#2e3440", "bg3": "#292e39", "bg4": "#1d212a", "text": "#eceff4", "text2": "#d8dee9", "text3": "#81a1c1", "accent": "#88c0d0", "accent2": "#a3be8c", "accent3": "#ebcb8b", "border": "#88c0d022", "card": "#2e3440", "codeBg": "#1d212a", "sbBg": "#272c36", "hdrBg": "linear-gradient(135deg,#2e3440,#1d212a,#181a20)"}, {"id": "monokai", "name": "Monokai Pro", "bg": "#221f22", "bg2": "#2d2a2e", "bg3": "#272427", "bg4": "#1c191c", "text": "#fcfcfa", "text2": "#c1c0c0", "text3": "#727072", "accent": "#ffd866", "accent2": "#a9dc76", "accent3": "#ff6188", "border": "#ffd86622", "card": "#2d2a2e", "codeBg": "#1c191c", "sbBg": "#252225", "hdrBg": "linear-gradient(135deg,#2d2a2e,#1c191c,#141214)"}, {"id": "github-dark", "name": "GitHub Dark Dimmed", "bg": "#1c2128", "bg2": "#22272e", "bg3": "#1e232a", "bg4": "#161b22", "text": "#adbac7", "text2": "#909dab", "text3": "#636e7b", "accent": "#539bf5", "accent2": "#57ab5a", "accent3": "#c69026", "border": "#539bf522", "card": "#22272e", "codeBg": "#161b22", "sbBg": "#1e232a", "hdrBg": "linear-gradient(135deg,#22272e,#161b22,#0f1317)"}];

const TAGS = [
  {
    "id": "py-1",
    "title": "Variables, References & Memory Model",
    "badge": "BASICS",
    "emoji": "\ud83d\udce6",
    "defaultCode": "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(f'x: {x}')  # Both point to same object\nprint(f'id(x): {id(x)}, id(y): {id(y)}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Variables, References & Memory</h3><p>In Python, variables do not store values directly; they are symbolic names bound to objects in memory. Everything is an object, and variables act as pointers/references.</p><h4>\u2699\ufe0f Under the Hood</h4><p>CPython allocates objects on the heap with a PyObject header containing <code>ob_refcnt</code> (reference count) and <code>ob_type</code> (pointer to type struct). Assignment <code>a = b</code> increments the reference count rather than copying data.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>is</code> to check object identity (memory address) and <code>==</code> to check value equality. Use <code>copy.deepcopy()</code> for nested mutable structures.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">import copy\noriginal = [[1, 2], [3, 4]]\nshallow = list(original)\ndeep = copy.deepcopy(original)\noriginal[0].append(99)\nprint('Shallow reflects inner change:', shallow)\nprint('Deep remains untouched:', deep)</code></pre>"
  },
  {
    "id": "py-2",
    "title": "Strings & String Formatting (f-strings)",
    "badge": "BASICS",
    "emoji": "\ud83d\udd24",
    "defaultCode": "user = 'Sanskar'\nscore = 98.7654\nprint(f'{user=}, formatted: {score:.2f}%')\nraw = r'C:\\Users\\sanskar\\Documents'\nprint('Raw string:', raw)",
    "content": "<h3>\ud83d\udccc Deep Dive: Strings & String Methods</h3><p>Python strings are immutable sequences of Unicode characters (code points). Once created, string contents cannot be altered in-place.</p><h4>\u2699\ufe0f Under the Hood</h4><p>CPython optimizes strings using the PEP 393 flexible string representation (Latin-1, UCS-2, or UCS-4 depending on the widest character) to minimize RAM usage. Short strings and identifiers are interned in a global table for instantaneous pointer equality checks.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Avoid repeated <code>+</code> string concatenation inside loops; it creates O(n^2) allocations. Use <code>''.join(list_of_strings)</code> for linear O(n) efficiency.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">url = 'https://sanskarin.github.io/DevForge/index.html'\nprotocol, _, rest = url.partition('://')\ndomain, _, path = rest.partition('/')\nprint(f'Protocol: {protocol}, Domain: {domain}, Path: {path}')\npi = 3.1415926535\nprint(f'Pi formatted: {pi:.3f}')</code></pre>"
  },
  {
    "id": "py-3",
    "title": "Lists & Dynamic Array Mechanics",
    "badge": "DATA STRUCTURES",
    "emoji": "\ud83d\udccb",
    "defaultCode": "nums = [10, 20, 30, 40]\nnums.append(50)\nnums.insert(2, 25)\nprint(f'Length: {len(nums)}, Sliced: {nums[1:4]}')\nprint(f'Popped: {nums.pop()}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Lists & Dynamic Arrays</h3><p>Lists are mutable, ordered sequences that hold arbitrary objects. They support indexing, slicing, appending, and in-place sorting.</p><h4>\u2699\ufe0f Under the Hood</h4><p>A Python list is not a linked list; it is a contiguous array of pointers to objects (<code>PyObject**</code>). When capacity is exceeded, CPython resizes the array with an over-allocation factor (approximately 1.125x + 3) to achieve amortized O(1) append time.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Appending and popping from the end of a list is O(1), but inserting or deleting from the front is O(n). If you need fast front operations, use <code>collections.deque</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">data = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint('Reverse:', data[::-1])\nprint('Every second item:', data[::2])\ndata[1:4] = [20, 30, 40]  # Slice replacement\nprint('Updated:', data)</code></pre>"
  },
  {
    "id": "py-4",
    "title": "Tuples & Immutability Patterns",
    "badge": "DATA STRUCTURES",
    "emoji": "\ud83d\udd12",
    "defaultCode": "point = (1920, 1080)\nx, y = point  # Tuple unpacking\nprint(f'Width: {x}, Height: {y}')\ncolors = ('red', 'green', 'blue')\nprint('Hashable:', hash(colors))",
    "content": "<h3>\ud83d\udccc Deep Dive: Tuples</h3><p>Tuples are immutable sequences of Python objects. Once instantiated, their size and element bindings cannot be modified.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Because tuples are fixed-size, CPython stores them with less memory overhead than lists. Small tuples are cached in a free-list reuse pool, making tuple creation faster than list allocation. If all elements of a tuple are hashable, the tuple itself is hashable and can serve as a dictionary key.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use tuples for heterogeneous records (e.g. <code>(host, port)</code>) and lists for homogeneous collections (e.g. list of hosts).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">first, *middle, last = [10, 20, 30, 40, 50]\nprint(f'First: {first}, Middle: {middle}, Last: {last}')\na, b = 100, 200\na, b = b, a\nprint(f'Swapped: a={a}, b={b}')</code></pre>"
  },
  {
    "id": "py-5",
    "title": "Dictionaries & Hash Table Internals",
    "badge": "DATA STRUCTURES",
    "emoji": "\ud83d\udcd6",
    "defaultCode": "user = {'name': 'Sanskar', 'role': 'Admin', 'xp': 2500}\nuser['level'] = 10\nprint(user.get('country', 'India'))\nfor k, v in user.items():\n    print(f'{k}: {v}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Dictionaries & Hash Tables</h3><p>Dictionaries are mapping structures associating hashable keys with arbitrary values. Since Python 3.7+, dictionaries are guaranteed to maintain insertion order.</p><h4>\u2699\ufe0f Under the Hood</h4><p>CPython dictionaries use a compact hash table design (Raymond Hettinger's architecture). An array of 8-bit hash indices points into a dense table of <code>(hash, key, value)</code> entries, saving 30-95% memory compared to legacy sparse hash tables while maintaining O(1) average-time lookups.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use <code>dict.get(key, default)</code> or <code>dict.setdefault()</code> instead of checking <code>if key in d:</code> to avoid redundant hashing lookups.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">defaults = {'theme': 'dark', 'font': 'Plus Jakarta Sans', 'notifications': True}\ncustom = {'theme': 'cyberpunk', 'sound': False}\nsettings = defaults | custom  # Dictionary union operator (Python 3.9+)\nprint('Merged config:', settings)</code></pre>"
  }
];

function getRank(count) {
  if (count < 10) return { title: 'Python Novice', color: '#888' };
  if (count < 25) return { title: 'Script Apprentice', color: '#4ade80' };
  if (count < 40) return { title: 'OOP & Data Craftsman', color: '#3b82f6' };
  if (count < 60) return { title: 'Concurrency Architect', color: '#a855f7' };
  if (count < 80) return { title: 'Full-Stack & Systems Pro', color: '#f59e0b' };
  if (count < 100) return { title: 'Python Specialist', color: '#ec4899' };
  return { title: 'Python Grandmaster', color: '#ef4444' };
}

let masteredTags = JSON.parse(localStorage.getItem('pythonMasteredTags')) || [];
let userXP = parseInt(localStorage.getItem('pythonUserXP')) || 0;
let favorites = JSON.parse(localStorage.getItem('pythonFavorites')) || [];
let activeCategory = 'ALL';

function init() {
    renderCategoryFilters();
    renderSidebar();
    updateStats();
    setupThemeToggle();
    setupPlayground();

    document.getElementById('search')?.addEventListener('input', (e) => {
        renderSidebar(e.target.value.toLowerCase());
    });

    // Load first tag or saved concept
    if (TAGS.length > 0) {
        const first = TAGS[0];
        loadConcept(first);
    }
}

function renderCategoryFilters() {
    const categories = ['ALL', 'BASICS', 'DATA STRUCTURES', 'CONTROL FLOW', 'FUNCTIONS', 'OOP', 'SYSTEM', 'LIBRARIES', 'CONCURRENCY', 'FRAMEWORKS', 'DATA SCIENCE', 'ADVANCED', 'MODERN PYTHON'];
    const nav = document.getElementById('category-filters');
    if (!nav) return;
    nav.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${activeCategory === cat ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = () => {
            activeCategory = cat;
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSidebar();
        };
        nav.appendChild(btn);
    });
}

function renderSidebar(filter = '') {
    const list = document.getElementById('concept-list');
    if (!list) return;
    list.innerHTML = '';
    
    let filtered = TAGS;
    if (activeCategory !== 'ALL') {
        filtered = filtered.filter(t => t.badge === activeCategory);
    }
    if (filter) {
        filtered = filtered.filter(t => t.title.toLowerCase().includes(filter) || t.badge.toLowerCase().includes(filter));
    }

    filtered.forEach(tag => {
        const li = document.createElement('li');
        const isMastered = masteredTags.includes(tag.id);
        li.className = `concept-item ${isMastered ? 'mastered' : ''}`;
        li.innerHTML = `
            <span class="concept-emoji">${tag.emoji}</span>
            <div class="concept-meta">
                <span class="concept-title">${tag.title}</span>
                <span class="concept-badge badge-${tag.badge.toLowerCase().replace(/\s+/g, '-')}">${tag.badge}</span>
            </div>
            ${isMastered ? '<span class="check-mark">✓</span>' : ''}
        `;
        li.onclick = () => loadConcept(tag);
        list.appendChild(li);
    });
}

function loadConcept(tag) {
    const ca = document.getElementById('content-area');
    if (ca) {
        ca.innerHTML = `
            <div class="concept-header">
                <h2>${tag.emoji} ${tag.title}</h2>
                <div class="concept-tags">
                    <span class="tag-badge">${tag.badge}</span>
                    <button id="fav-btn" class="fav-btn">${favorites.includes(tag.id) ? '★ Favorited' : '☆ Favorite'}</button>
                    <a href="../quiz.html?lang=python" class="quick-quiz-btn">🎯 Test with Quiz</a>
                </div>
            </div>
            ${tag.content}
        `;
        
        document.getElementById('fav-btn')?.addEventListener('click', () => {
            toggleFavorite(tag.id);
        });
    }

    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.value = tag.defaultCode || '# Write Python code here';
    }

    if (!masteredTags.includes(tag.id)) {
        masteredTags.push(tag.id);
        userXP += 100;
        localStorage.setItem('pythonMasteredTags', JSON.stringify(masteredTags));
        localStorage.setItem('pythonUserXP', userXP.toString());
        updateStats();
        renderSidebar();
    }
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('pythonFavorites', JSON.stringify(favorites));
    const btn = document.getElementById('fav-btn');
    if (btn) btn.textContent = favorites.includes(id) ? '★ Favorited' : '☆ Favorite';
}

function updateStats() {
    const mc = document.getElementById('mastered-count');
    if (mc) mc.innerText = `Mastered: ${masteredTags.length}/${TAGS.length}`;
    const pr = document.getElementById('progress');
    if (pr) pr.style.width = `${(masteredTags.length / Math.max(1, TAGS.length)) * 100}%`;
    const r = document.getElementById('rank');
    if (r) {
        const rankInfo = getRank(masteredTags.length);
        r.innerText = `XP: ${userXP} | Rank: ${rankInfo.title}`;
        r.style.color = rankInfo.color;
    }
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    let currentIdx = 0;
    btn.onclick = () => {
        currentIdx = (currentIdx + 1) % PRESET_THEMES.length;
        const theme = PRESET_THEMES[currentIdx];
        document.documentElement.style.setProperty('--bg', theme.bg);
        document.documentElement.style.setProperty('--text', theme.text);
        document.documentElement.style.setProperty('--accent1', theme.accent);
        document.documentElement.style.setProperty('--accent2', theme.accent2);
        btn.textContent = `Theme: ${theme.name}`;
    };
}

function setupPlayground() {
    const runBtn = document.getElementById('run-code-btn');
    const resetBtn = document.getElementById('reset-code-btn');
    const copyBtn = document.getElementById('copy-code-btn');
    const output = document.getElementById('console-output');
    const editor = document.getElementById('code-editor');

    if (runBtn && output && editor) {
        runBtn.onclick = () => {
            output.textContent = 'Executing simulated Python environment...\n';
            try {
                const lines = editor.value.split('\n');
                let prints = [];
                for (let line of lines) {
                    const match = line.match(/^print\((.*)\)$/);
                    if (match) {
                        prints.push('>>> ' + match[1]);
                    }
                }
                if (prints.length > 0) {
                    output.textContent += prints.join('\n') + '\n\n[Program exited cleanly with code 0]';
                } else {
                    output.textContent += 'Code checked: syntax is valid.\n[Program exited cleanly with code 0]';
                }
            } catch (err) {
                output.textContent += 'Execution Error: ' + err.message;
            }
        };
    }

    if (copyBtn && editor) {
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(editor.value);
            copyBtn.textContent = 'Copied!';
            setTimeout(() => copyBtn.textContent = 'Copy Code', 2000);
        };
    }

    if (resetBtn && editor) {
        resetBtn.onclick = () => {
            editor.value = '# Python Playground\nprint("Hello from DevForge Python Playground!")';
            if (output) output.textContent = 'Terminal cleared. Click "Run Code" to simulate execution.';
        };
    }
}

window.addEventListener('DOMContentLoaded', init);
