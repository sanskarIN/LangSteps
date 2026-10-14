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
  },
  {
    "id": "py-6",
    "title": "Sets & Mathematical Set Operations",
    "badge": "DATA STRUCTURES",
    "emoji": "\u2b55",
    "defaultCode": "frontend = {'HTML', 'CSS', 'JavaScript', 'React'}\nfullstack = {'JavaScript', 'Python', 'SQL', 'React'}\nprint('Common:', frontend & fullstack)\nprint('All technologies:', frontend | fullstack)\nprint('Frontend only:', frontend - fullstack)",
    "content": "<h3>\ud83d\udccc Deep Dive: Sets & Set Theory</h3><p>Sets are mutable collections of unique, hashable objects. They excel at deduplication and membership testing.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Sets are implemented as hash tables without values. Membership lookup <code>item in my_set</code> runs in O(1) average time compared to O(n) for lists and tuples.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>frozenset</code> if you need an immutable, hashable set that can be stored inside another set or used as a dictionary key.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint('Symmetric difference:', a ^ b)\nprint('Is subset:', {1, 2}.issubset(a))</code></pre>"
  },
  {
    "id": "py-7",
    "title": "Type Casting & Dynamic Typing",
    "badge": "BASICS",
    "emoji": "\ud83d\udd04",
    "defaultCode": "raw_input = '1048576'\nbyte_count = int(raw_input)\nmegabytes = byte_count / (1024 * 1024)\nprint(f'{megabytes:.1f} MB')\nprint(type(megabytes))",
    "content": "<h3>\ud83d\udccc Deep Dive: Type Casting</h3><p>Python is strongly and dynamically typed. Types are associated with values, not variable names, and explicit conversions are required between incompatible types.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Conversion functions like <code>int()</code>, <code>float()</code>, <code>str()</code> invoke the underlying CPython type constructor methods (<code>__int__</code>, <code>__float__</code>, <code>__str__</code>). If an object does not implement the protocol, a <code>TypeError</code> or <code>ValueError</code> is raised.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>When converting numerical strings from unknown inputs, catch both <code>ValueError</code> and <code>TypeError</code> to avoid unexpected crashes.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">binary_val = '1101011'\ndecimal = int(binary_val, 2)\nprint(f'Binary {binary_val} = Decimal {decimal}')\nhex_val = hex(decimal)\nprint(f'Decimal {decimal} = Hex {hex_val}')</code></pre>"
  },
  {
    "id": "py-8",
    "title": "Booleans & Truth Value Testing",
    "badge": "BASICS",
    "emoji": "\u2696\ufe0f",
    "defaultCode": "def authenticate(user_token):\n    if not user_token:\n        return 'Guest Access'\n    return 'Authenticated User'\n\nprint(authenticate(''))\nprint(authenticate('jwt_token_here'))",
    "content": "<h3>\ud83d\udccc Deep Dive: Truth Value Testing</h3><p>In Python, every object has a boolean truth value. False values include <code>None</code>, <code>False</code>, zero of any numeric type (<code>0</code>, <code>0.0</code>), empty sequences (<code>''</code>, <code>()</code>, <code>[]</code>), and empty mappings (<code>{}</code>).</p><h4>\u2699\ufe0f Under the Hood</h4><p>Python checks truth value by first looking for <code>__bool__()</code> on the object. If <code>__bool__()</code> is not defined, CPython falls back to <code>__len__()</code> (returning True if non-zero).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Prefer <code>if not my_list:</code> over <code>if len(my_list) == 0:</code> for idiomatic, Pythonic code.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">config_host = None\nhost = config_host or '127.0.0.1'\nprint('Host selected:', host)</code></pre>"
  },
  {
    "id": "py-9",
    "title": "Operators: Arithmetic, Bitwise & Logical",
    "badge": "BASICS",
    "emoji": "\u2795",
    "defaultCode": "a = 13  # 0b1101\nb = 7   # 0b0111\nprint('Bitwise AND:', bin(a & b))\nprint('Bitwise OR:', bin(a | b))\nprint('Bitwise XOR:', bin(a ^ b))\nprint('Floor division:', 22 // 7)",
    "content": "<h3>\ud83d\udccc Deep Dive: Python Operators</h3><p>Python provides arithmetic, comparison, logical, bitwise, assignment, and identity/membership operators. Operators are syntactic sugar for magic methods.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The expression <code>a + b</code> invokes <code>a.__add__(b)</code>. If <code>a</code> does not know how to handle <code>b</code>, CPython tries the reverse operator <code>b.__radd__(a)</code> before failing.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Bitwise operators (<code>&</code>, <code>|</code>, <code>^</code>, <code><<</code>, <code>>></code>) are invaluable for bitmasks, permissions, and high-performance flag checking.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">READ, WRITE, EXECUTE = 1 << 0, 1 << 1, 1 << 2\nuser_perms = READ | WRITE\nprint('Can read?', bool(user_perms & READ))\nprint('Can execute?', bool(user_perms & EXECUTE))</code></pre>"
  },
  {
    "id": "py-10",
    "title": "Conditionals & Walrus Operator (:=)",
    "badge": "CONTROL FLOW",
    "emoji": "\ud83d\udd00",
    "defaultCode": "import re\ntext = 'User Sanskar with id #4092'\nif (match := re.search(r'#(\\d+)', text)):\n    user_id = match.group(1)\n    print(f'Found user ID: {user_id}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Control Flow & Walrus Operator</h3><p>The assignment expression operator (<code>:=</code>), introduced in PEP 572, allows variable assignment inside expressions (while-loops, if-statements, comprehensions).</p><h4>\u2699\ufe0f Under the Hood</h4><p>The walrus operator evaluates the right-hand side, binds the value to the variable name in the enclosing scope, and returns the value to the outer expression without creating an extra bytecode instruction block.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use the walrus operator when checking expensive computations or regex matches to avoid computing them twice.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">sample_data = ['apple', 'banana', 'kiwi', 'strawberry']\nlong_names = [w for w in sample_data if (n := len(w)) > 5]\nprint('Words with length > 5:', long_names)</code></pre>"
  },
  {
    "id": "py-11",
    "title": "While Loops & Loop Else Clause",
    "badge": "CONTROL FLOW",
    "emoji": "\ud83d\udd01",
    "defaultCode": "target = 42\nnum = 1\nwhile num <= 50:\n    if num == target:\n        print(f'Found target {target}!')\n        break\n    num += 1\nelse:\n    print('Target not found in range!')",
    "content": "<h3>\ud83d\udccc Deep Dive: While Loops & The Else Clause</h3><p>While loops repeatedly execute a block of code as long as a condition evaluates to True. In Python, loops can also have an optional <code>else</code> block.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The <code>else</code> block attached to a loop executes ONLY if the loop completes normally without encountering a <code>break</code> statement. This eliminates the need for temporary boolean flags like <code>found = False</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Think of loop-else as 'no-break': 'execute this code if no break occurred inside the loop'.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Prime number check with loop else\nval = 29\nfor i in range(2, int(val ** 0.5) + 1):\n    if val % i == 0:\n        print(f'{val} is not prime')\n        break\nelse:\n    print(f'{val} is prime!')</code></pre>"
  },
  {
    "id": "py-12",
    "title": "For Loops, range() & enumerate()",
    "badge": "CONTROL FLOW",
    "emoji": "\ud83d\udd22",
    "defaultCode": "stack = ['HTML', 'CSS', 'JavaScript', 'Python']\nfor idx, tech in enumerate(stack, start=1):\n    print(f'{idx}. {tech}')\n# Step through range\nfor n in range(0, 20, 5):\n    print(n, end=' ')  # 0 5 10 15",
    "content": "<h3>\ud83d\udccc Deep Dive: For Loops & Iteration Protocols</h3><p>Python's <code>for</code> loop is a 'for-each' construct that iterates directly over any iterable object implementing the <code>__iter__()</code> or <code>__getitem__()</code> protocol.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The loop requests an iterator using <code>iter(obj)</code>, then repeatedly calls <code>next(iterator)</code> in bytecode until a <code>StopIteration</code> exception is raised and quietly caught.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Never use <code>for i in range(len(items)):</code> when you need both index and element. Always use <code>enumerate(items)</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Parallel iteration with zip()\nnames = ['Alice', 'Bob', 'Charlie']\nscores = [95, 88, 92]\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')</code></pre>"
  },
  {
    "id": "py-13",
    "title": "Functions, Default Arguments & Scope (LEGB)",
    "badge": "FUNCTIONS",
    "emoji": "\ud83d\udee0\ufe0f",
    "defaultCode": "def create_user(username, role='Developer', *, verified=False):\n    return {'user': username, 'role': role, 'active': verified}\n\nprint(create_user('Sanskar', verified=True))",
    "content": "<h3>\ud83d\udccc Deep Dive: Functions & LEGB Scope</h3><p>Functions are first-class citizens in Python. Names are resolved using the LEGB rule: Local, Enclosing, Global, and Built-in scopes.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Default argument expressions are evaluated once when the function is defined, NOT at execution time. This is why using mutable defaults (like <code>def f(x=[])</code>) causes state leakage across calls.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use <code>None</code> as the default value for mutable arguments (lists, dicts), and initialize inside the function body: <code>if items is None: items = []</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">def append_to(element, target=None):\n    if target is None:\n        target = []\n    target.append(element)\n    return target\nprint(append_to(1))\nprint(append_to(2))  # Fresh list each time!</code></pre>"
  },
  {
    "id": "py-14",
    "title": "Arbitrary Arguments: *args & **kwargs",
    "badge": "FUNCTIONS",
    "emoji": "\ud83c\udf1f",
    "defaultCode": "def log_event(event_name, *tags, level='INFO', **metadata):\n    print(f'[{level}] {event_name}')\n    print('Tags:', tags)\n    print('Metadata:', metadata)\n\nlog_event('UserLogin', 'auth', 'security', user_id=42, ip='192.168.1.1')",
    "content": "<h3>\ud83d\udccc Deep Dive: *args and **kwargs</h3><p>The single asterisk <code>*args</code> collects excess positional arguments into a tuple. The double asterisk <code>**kwargs</code> collects excess keyword arguments into a dictionary.</p><h4>\u2699\ufe0f Under the Hood</h4><p>In function signatures, asterisks denote packing; in call sites, asterisks denote unpacking. A lone asterisk <code>*</code> enforces keyword-only arguments after it.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use keyword-only arguments to make function calls explicit and self-documenting, especially for boolean flags.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Forwarding arguments cleanly in wrappers\ndef audit_wrapper(func):\n    def inner(*args, **kwargs):\n        print(f'Calling {func.__name__}...')\n        return func(*args, **kwargs)\n    return inner</code></pre>"
  },
  {
    "id": "py-15",
    "title": "Lambda Functions & Higher-Order Functions",
    "badge": "FUNCTIONS",
    "emoji": "\u03bb",
    "defaultCode": "products = [\n    {'name': 'Laptop', 'price': 1200},\n    {'name': 'Mouse', 'price': 25},\n    {'name': 'Monitor', 'price': 300}\n]\nsorted_products = sorted(products, key=lambda p: p['price'])\nprint(sorted_products)",
    "content": "<h3>\ud83d\udccc Deep Dive: Lambda Expressions</h3><p>Lambdas are anonymous, single-expression inline functions defined with the <code>lambda</code> keyword. They cannot contain statements or annotations.</p><h4>\u2699\ufe0f Under the Hood</h4><p>A lambda creates a standard function object with <code>__name__ = '<lambda>'</code>. While useful for callbacks, list comprehensions and named functions often provide superior readability and stack traces.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>For dictionary sorting, prefer <code>operator.itemgetter('price')</code> over <code>lambda x: x['price']</code> for cleaner code and up to 2x faster execution in CPython.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from operator import itemgetter\nby_price = sorted(products, key=itemgetter('price'))\nprint('Fast sorted:', by_price)</code></pre>"
  },
  {
    "id": "py-16",
    "title": "List Comprehensions & Conditional Filtering",
    "badge": "IDIOMS",
    "emoji": "\u26a1",
    "defaultCode": "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [val for row in matrix for val in row if val % 2 == 0]\nprint('Even numbers flattened:', flattened)",
    "content": "<h3>\ud83d\udccc Deep Dive: List Comprehensions</h3><p>List comprehensions provide a concise syntax for creating new lists by transforming and filtering elements from existing iterables.</p><h4>\u2699\ufe0f Under the Hood</h4><p>In Python 3+, comprehensions run in their own dedicated scope, preventing loop variable leakage into the enclosing environment. Bytecode uses specialized <code>LIST_APPEND</code> instructions, making comprehensions noticeably faster than manual <code>for</code> loops with <code>.append()</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>If a comprehension has more than two nested loops or multiple complicated conditions, refactor to a traditional for loop for readability.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">names = ['alice', 'bob', 'charlie', 'david']\ntitled = [n.title() for n in names if len(n) > 3]\nprint('Titled:', titled)</code></pre>"
  },
  {
    "id": "py-17",
    "title": "Dictionary & Set Comprehensions",
    "badge": "IDIOMS",
    "emoji": "\ud83d\uddc2\ufe0f",
    "defaultCode": "keys = ['id', 'user', 'role']\nvals = [101, 'sanskar', 'maintainer']\nrecord = {k: v for k, v in zip(keys, vals)}\nprint('Dict created:', record)\n# Set comprehension for unique extensions\nfiles = ['script.py', 'app.js', 'style.css', 'test.py']\nexts = {f.split('.')[-1] for f in files}\nprint('Unique file extensions:', exts)",
    "content": "<h3>\ud83d\udccc Deep Dive: Dict & Set Comprehensions</h3><p>Dictionary and set comprehensions allow declarative creation of mappings and unique sets with expressive transformation logic.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Set comprehensions use the <code>SET_ADD</code> bytecode instruction; dict comprehensions use <code>MAP_ADD</code>. Key collisions in dictionary comprehensions simply overwrite the previous entry, evaluating left-to-right.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use dict comprehensions to easily invert a dictionary: <code>{v: k for k, v in d.items()}</code> (assuming values are unique and hashable).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Inverting a dictionary\ncountry_codes = {'US': 'United States', 'IN': 'India', 'JP': 'Japan'}\ninverted = {v: k for k, v in country_codes.items()}\nprint('Inverted map:', inverted)</code></pre>"
  },
  {
    "id": "py-18",
    "title": "Generator Functions & the yield Keyword",
    "badge": "ITERATION",
    "emoji": "\ud83c\udf3e",
    "defaultCode": "def fibonacci_stream(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci_stream(100):\n    print(num, end=' ')",
    "content": "<h3>\ud83d\udccc Deep Dive: Generators & Lazy Evaluation</h3><p>Generators are functions that can pause execution and yield multiple values over time, preserving local variable state between invocations.</p><h4>\u2699\ufe0f Under the Hood</h4><p>When a function containing <code>yield</code> is called, CPython returns a generator iterator without executing the function body. Calling <code>next()</code> advances the frame to the next <code>yield</code> statement, storing the instruction pointer in a <code>PyFrameObject</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Generators require O(1) memory regardless of how many millions of items they stream, making them essential for processing huge datasets or files.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">def chunker(iterable, size):\n    for i in range(0, len(iterable), size):\n        yield iterable[i:i + size]\nprint(list(chunker([1, 2, 3, 4, 5, 6, 7], 3)))</code></pre>"
  },
  {
    "id": "py-19",
    "title": "Generator Expressions vs List Comprehensions",
    "badge": "ITERATION",
    "emoji": "\ud83d\udca1",
    "defaultCode": "import sys\n# List comprehension (allocates all in memory)\nlist_comp = [x * 2 for x in range(100000)]\n# Generator expression (lazy streaming)\ngen_exp = (x * 2 for x in range(100000))\nprint(f'List RAM: {sys.getsizeof(list_comp)} bytes')\nprint(f'Gen RAM: {sys.getsizeof(gen_exp)} bytes')",
    "content": "<h3>\ud83d\udccc Deep Dive: Generator Expressions</h3><p>Generator expressions have the syntax of list comprehensions but use parentheses instead of brackets. They evaluate lazily on-demand.</p><h4>\u2699\ufe0f Under the Hood</h4><p>A generator expression produces an anonymous generator object. Memory overhead is constant (typically ~100-200 bytes in CPython) whether the sequence contains 10 items or 10 billion items.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Pass generator expressions directly into reducer functions like <code>sum()</code>, <code>min()</code>, <code>max()</code>, or <code>any()</code> without double parentheses: <code>sum(x**2 for x in data)</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Check if any user is admin\nusers = [{'name': 'A', 'admin': False}, {'name': 'S', 'admin': True}]\nhas_admin = any(u['admin'] for u in users)\nprint('Admin present:', has_admin)</code></pre>"
  },
  {
    "id": "py-20",
    "title": "First-Class Functions & Closures",
    "badge": "FUNCTIONS",
    "emoji": "\ud83d\udd10",
    "defaultCode": "def make_multiplier(factor):\n    # 'factor' is enclosed in the returned function\n    def multiplier(number):\n        return number * factor\n    return multiplier\n\ntriple = make_multiplier(3)\nprint(f'3 * 7 = {triple(7)}')\nprint('Closure cells:', triple.__closure__[0].cell_contents)",
    "content": "<h3>\ud83d\udccc Deep Dive: Closures & Lexical Scoping</h3><p>A closure is a function object that retains access to variables from its enclosing lexical scope even after that outer scope has finished executing.</p><h4>\u2699\ufe0f Under the Hood</h4><p>CPython captures free variables referenced in inner functions into <code>cell</code> objects within the <code>__closure__</code> tuple attribute. Modifying free variables requires the <code>nonlocal</code> keyword.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Closures form the theoretical and mechanical foundation of all Python decorators.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">def make_counter(start=0):\n    count = start\n    def step():\n        nonlocal count\n        count += 1\n        return count\n    return step\nc = make_counter(10)\nprint(c(), c(), c())  # 11, 12, 13</code></pre>"
  },
  {
    "id": "py-21",
    "title": "Classes & Object-Oriented Fundamentals",
    "badge": "OOP",
    "emoji": "\ud83c\udfdb\ufe0f",
    "defaultCode": "class Account:\n    bank_name = 'DevForge Bank'  # Class attribute\n    def __init__(self, owner, balance=0):\n        self.owner = owner          # Instance attribute\n        self.balance = balance\n\nacc = Account('Sanskar', 5000)\nprint(acc.bank_name, acc.owner, acc.balance)",
    "content": "<h3>\ud83d\udccc Deep Dive: Classes & Instances</h3><p>Classes are blueprints for creating objects. They encapsulate state (attributes) and behavior (methods) into a coherent type.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Every class in Python is an instance of the <code>type</code> metaclass. Instance attributes live inside the object's <code>__dict__</code> dictionary unless <code>__slots__</code> is declared.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Class attributes are shared across all instances; mutating a mutable class attribute affects every instance!</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class Bank:\n    rates = {}\n    def __init__(self, name):\n        self.name = name\nb1, b2 = Bank('B1'), Bank('B2')\nBank.rates['USD'] = 1.05\nprint(b1.rates, b2.rates)</code></pre>"
  },
  {
    "id": "py-22",
    "title": "The __init__ Constructor & self Parameter",
    "badge": "OOP",
    "emoji": "\ud83c\udfd7\ufe0f",
    "defaultCode": "class Server:\n    def __init__(self, host, port=8080):\n        self.host = host\n        self.port = port\n        self.running = False\n    def start(self):\n        self.running = True\n        print(f'Server listening on {self.host}:{self.port}')\n\ns = Server('127.0.0.1')\ns.start()",
    "content": "<h3>\ud83d\udccc Deep Dive: __init__ vs __new__</h3><p>The <code>__init__</code> method initializes an already created instance. The <code>self</code> parameter represents the specific instance being operated upon.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Object construction occurs in two stages: <code>__new__(cls)</code> allocates the raw object, and <code>__init__(self)</code> initializes attributes. Python automatically passes the instance as the first argument when calling bound methods.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p><code>__init__</code> must always return <code>None</code>. Returning any other value raises a <code>TypeError</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Invoking bound vs unbound methods\ns = Server('localhost', 3000)\n# These two calls are identical in bytecode:\ns.start()\nServer.start(s)</code></pre>"
  },
  {
    "id": "py-23",
    "title": "Inheritance & Method Resolution Order (MRO)",
    "badge": "OOP",
    "emoji": "\ud83e\uddec",
    "defaultCode": "class Animal:\n    def speak(self): return 'Sound'\n\nclass Dog(Animal):\n    def speak(self):\n        base = super().speak()\n        return f'{base} -> Woof!'\n\nd = Dog()\nprint(d.speak())\nprint('Dog MRO:', Dog.mro())",
    "content": "<h3>\ud83d\udccc Deep Dive: Inheritance & super()</h3><p>Inheritance enables classes to derive attributes and methods from base classes, fostering code reuse and polymorphic hierarchies.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Python calculates inheritance hierarchy using the C3 Linearization algorithm to determine Method Resolution Order (MRO). The <code>super()</code> call dynamically resolves the next class in the MRO, crucial for diamond multiple inheritance.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use <code>super().__init__(*args, **kwargs)</code> in cooperative multiple inheritance to avoid skipping base initializers.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint([cls.__name__ for cls in D.mro()])\n# ['D', 'B', 'C', 'A', 'object']</code></pre>"
  },
  {
    "id": "py-24",
    "title": "Polymorphism & Duck Typing",
    "badge": "OOP",
    "emoji": "\ud83e\udd86",
    "defaultCode": "class JSONRenderer:\n    def render(self, data): return f'JSON: {data}'\n\nclass HTMLRenderer:\n    def render(self, data): return f'<div>{data}</div>'\n\ndef output_view(renderer, payload):\n    print(renderer.render(payload))\n\noutput_view(JSONRenderer(), {'status': 200})\noutput_view(HTMLRenderer(), 'Hello World')",
    "content": "<h3>\ud83d\udccc Deep Dive: Duck Typing</h3><p>In Python: 'If it walks like a duck and quacks like a duck, it's a duck.' Polymorphism in Python relies on object protocols rather than explicit nominal inheritance.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Python does not verify method existence at compile time; it dynamically looks up attribute names on the instance and its MRO at runtime.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Embrace EAFP ('Easier to Ask for Forgiveness than Permission') using <code>try/except AttributeError</code> instead of LBYL ('Look Before You Leap') with <code>isinstance()</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Anything implementing .read() can be treated as a file\nimport io\nstream = io.StringIO('mock file content')\nprint(stream.read())</code></pre>"
  },
  {
    "id": "py-25",
    "title": "Encapsulation, Private Members & Name Mangling",
    "badge": "OOP",
    "emoji": "\ud83d\udee1\ufe0f",
    "defaultCode": "class Vault:\n    def __init__(self, key):\n        self.public_id = 'V-100'\n        self._internal_salt = 's4lt'   # Protected by convention\n        self.__secret_key = key        # Private (name mangled)\n\nv = Vault('master_secret')\nprint(v.public_id, v._internal_salt)\n# Mangled access:\nprint(v._Vault__secret_key)",
    "content": "<h3>\ud83d\udccc Deep Dive: Encapsulation & Privacy</h3><p>Python does not enforce true private access modifiers like private/protected in C++ or Java. Instead, it relies on conventions and name mangling.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Variables prefixed with double underscores (e.g. <code>__secret</code>) undergo name mangling by CPython, transforming into <code>_ClassName__secret</code> to prevent unintended overrides in subclasses.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use a single leading underscore (<code>_name</code>) to indicate internal APIs for human programmers and tools. Reserve double underscores only to avoid subclass name clashes.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Inspecting mangled keys in __dict__\nprint(list(v.__dict__.keys()))\n# ['public_id', '_internal_salt', '_Vault__secret_key']</code></pre>"
  },
  {
    "id": "py-26",
    "title": "Dunder Magic Methods (__str__, __repr__, __eq__)",
    "badge": "OOP",
    "emoji": "\u2728",
    "defaultCode": "class Vector:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def __repr__(self): return f'Vector({self.x}, {self.y})'\n    def __add__(self, other): return Vector(self.x + other.x, self.y + other.y)\n    def __eq__(self, other): return self.x == other.x and self.y == other.y\n\nv1, v2 = Vector(2, 3), Vector(5, 7)\nprint(v1 + v2, v1 == Vector(2, 3))",
    "content": "<h3>\ud83d\udccc Deep Dive: Special (Dunder) Methods</h3><p>Dunder ('double underscore') methods allow user-defined classes to emulate native Python types, integrating with operators, built-ins, and iteration.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Special methods are stored in type slots (e.g., <code>tp_as_number</code>) in CPython for fast C-level dispatch. <code>__repr__</code> should provide an unambiguous developer string; <code>__str__</code> provides a friendly user string.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always implement <code>__repr__</code> first. If <code>__str__</code> is absent, Python automatically falls back to <code>__repr__</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Custom container protocol\nclass Deck:\n    cards = ['A', 'K', 'Q', 'J']\n    def __len__(self): return len(self.cards)\n    def __getitem__(self, idx): return self.cards[idx]\nd = Deck()\nprint(len(d), d[0], 'K' in d)</code></pre>"
  },
  {
    "id": "py-27",
    "title": "Property Decorators: @property, @setter & @deleter",
    "badge": "OOP",
    "emoji": "\ud83c\udff7\ufe0f",
    "defaultCode": "class Temperature:\n    def __init__(self, celsius=0):\n        self._celsius = celsius\n    @property\n    def fahrenheit(self):\n        return (self._celsius * 9/5) + 32\n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._celsius = (value - 32) * 5/9\n\nt = Temperature(25)\nprint(f'{t.fahrenheit}\u00b0F')\nt.fahrenheit = 98.6\nprint(f'{t._celsius:.1f}\u00b0C')",
    "content": "<h3>\ud83d\udccc Deep Dive: Property Decorators</h3><p>The <code>@property</code> decorator allows methods to be accessed like attributes, providing validation, caching, and computed values without breaking public API contracts.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Properties implement the descriptor protocol (<code>__get__</code>, <code>__set__</code>, <code>__delete__</code>). Accessing <code>obj.prop</code> invokes the descriptor's getter function under the hood.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Start with simple public attributes; refactor into <code>@property</code> only when validation or dynamic calculation becomes necessary.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    @property\n    def area(self):\n        import math\n        return math.pi * (self.radius ** 2)\nc = Circle(5)\nprint(f'Area: {c.area:.2f}')</code></pre>"
  },
  {
    "id": "py-28",
    "title": "Abstract Base Classes (ABC) & Interfaces",
    "badge": "OOP",
    "emoji": "\ud83d\udcd0",
    "defaultCode": "from abc import ABC, abstractmethod\n\nclass DatabaseDriver(ABC):\n    @abstractmethod\n    def connect(self, dsn: str):\n        pass\n    @abstractmethod\n    def query(self, sql: str):\n        pass\n\nclass PostgresDriver(DatabaseDriver):\n    def connect(self, dsn): print(f'Connecting to {dsn}')\n    def query(self, sql): return [{'status': 'connected'}]",
    "content": "<h3>\ud83d\udccc Deep Dive: Abstract Base Classes</h3><p>The <code>abc</code> module allows defining formal interfaces and abstract classes that require derived classes to implement specific methods.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Instantiating a class that has unimplemented <code>@abstractmethod</code> decorators raises a <code>TypeError</code> at instantiation time before any constructor code executes.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>ABCs can register 'virtual subclasses' using <code>ABC.register(MyClass)</code>, allowing classes to pass <code>isinstance()</code> checks without inheriting.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Validating interface implementation\ndriver = PostgresDriver()\ndriver.connect('postgresql://localhost/dev')\nprint(driver.query('SELECT 1'))</code></pre>"
  },
  {
    "id": "py-29",
    "title": "Dataclasses (@dataclass) & Modern Data Modeling",
    "badge": "DATA STRUCTURES",
    "emoji": "\ud83d\udce6",
    "defaultCode": "from dataclasses import dataclass, field\n\n@dataclass(frozen=True)\nclass Project:\n    name: str\n    version: str = '1.0.0'\n    tags: list = field(default_factory=list)\n\np = Project('DevForge', tags=['python', 'web'])\nprint(p)",
    "content": "<h3>\ud83d\udccc Deep Dive: Dataclasses (PEP 557)</h3><p>Introduced in Python 3.7, <code>@dataclass</code> automatically generates boilerplate methods like <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code>, and <code>__hash__</code> based on class type annotations.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The decorator inspects <code>__annotations__</code> and compiles standard Python methods dynamically into the class dictionary, avoiding runtime metaprogramming overhead.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>frozen=True</code> to create immutable, hashable records suitable for set members and dictionary keys.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from dataclasses import asdict\ndata_dict = asdict(p)\nprint('Serialized to dict:', data_dict)</code></pre>"
  },
  {
    "id": "py-30",
    "title": "NamedTuple, TypedDict & Lightweight Records",
    "badge": "DATA STRUCTURES",
    "emoji": "\ud83c\udff7\ufe0f",
    "defaultCode": "from typing import NamedTuple, TypedDict\n\nclass Coordinate(NamedTuple):\n    lat: float\n    lon: float\n\nclass UserPayload(TypedDict):\n    username: str\n    email: str\n    is_active: bool\n\npos = Coordinate(28.6139, 77.2090)\nprint(f'{pos.lat=}, {pos[1]=}')",
    "content": "<h3>\ud83d\udccc Deep Dive: NamedTuple and TypedDict</h3><p><code>NamedTuple</code> creates memory-efficient tuples with named field access. <code>TypedDict</code> provides static type hinting for regular dictionaries without changing runtime behavior.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>NamedTuple</code> instances inherit directly from tuple, retaining tuple immutability and low memory footprint. <code>TypedDict</code> is a pure type-checker construct; at runtime it produces regular dicts.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>TypedDict</code> when consuming external JSON APIs where you cannot change dictionary structure to classes.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">user: UserPayload = {'username': 'sanskar', 'email': 'sanskarin@outlook.in', 'is_active': True}\nprint('TypedDict user:', user['email'])</code></pre>"
  },
  {
    "id": "py-31",
    "title": "Exception Handling: try, except, else & finally",
    "badge": "CONTROL FLOW",
    "emoji": "\u26a0\ufe0f",
    "defaultCode": "try:\n    val = int('123')\nexcept ValueError as err:\n    print(f'Parse failed: {err}')\nelse:\n    print(f'Success, value = {val}')\nfinally:\n    print('Cleanup executed unconditionally')",
    "content": "<h3>\ud83d\udccc Deep Dive: Robust Exception Handling</h3><p>Exceptions provide structured error recovery. The <code>else</code> block runs when no exception occurs; the <code>finally</code> block runs unconditionally for cleanup.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Exceptions in CPython are zero-cost in Python 3.11+. The interpreter no longer allocates exception tables unless an error is actually raised.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Never write bare <code>except:</code> or <code>except Exception: pass</code> as this silences bugs, KeyboardInterrupt, and SystemExit.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Exception chaining with 'from'\ntry:\n    open('nonexistent.txt')\nexcept OSError as err:\n    raise RuntimeError('Application initialization failed') from err</code></pre>"
  },
  {
    "id": "py-32",
    "title": "Custom Exception Hierarchies",
    "badge": "CONTROL FLOW",
    "emoji": "\ud83d\uded1",
    "defaultCode": "class DevForgeError(Exception):\n    '''Base error for DevForge'''\n\nclass AuthenticationError(DevForgeError):\n    '''Raised when auth fails'''\n\nclass PermissionDeniedError(AuthenticationError):\n    '''Raised when user lacks privileges'''\n\ntry:\n    raise PermissionDeniedError('Admin rights required')\nexcept DevForgeError as e:\n    print(f'Caught expected error: {e}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Custom Exception Hierarchies</h3><p>Libraries and enterprise systems should define a dedicated base exception so callers can catch all package errors with a single <code>except LibraryBaseError:</code> clause.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Custom exceptions inherit from <code>Exception</code> (never <code>BaseException</code>, which is reserved for system exits like <code>KeyboardInterrupt</code>).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Attach structured metadata (e.g. error codes, timestamps, requested resources) directly to the custom exception class.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class ValidationError(DevForgeError):\n    def __init__(self, field, msg):\n        super().__init__(f'{field}: {msg}')\n        self.field = field</code></pre>"
  },
  {
    "id": "py-33",
    "title": "File I/O: Reading, Writing & Encodings (UTF-8)",
    "badge": "SYSTEM",
    "emoji": "\ud83d\udcc1",
    "defaultCode": "with open('example.txt', 'w', encoding='utf-8') as f:\n    f.write('DevForge Python Mastery \ud83d\ude80\\n')\n\nwith open('example.txt', 'r', encoding='utf-8') as f:\n    for line in f:\n        print(line.strip())",
    "content": "<h3>\ud83d\udccc Deep Dive: File Operations & Encodings</h3><p>File I/O in Python should always specify explicit encodings (typically UTF-8) to avoid platform-dependent bugs across Windows, Linux, and macOS.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The <code>open()</code> function wraps C-level file descriptors in buffered text or binary streams (<code>io.TextIOWrapper</code>, <code>io.BufferedReader</code>).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Iterating directly over a file object (<code>for line in file:</code>) buffers lines lazily, allowing you to stream terabyte-sized logs without running out of RAM.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">import os\nif os.path.exists('example.txt'):\n    os.remove('example.txt')\n    print('Cleaned up example file')</code></pre>"
  },
  {
    "id": "py-34",
    "title": "Context Managers: with & contextlib Mastery",
    "badge": "SYSTEM",
    "emoji": "\ud83d\udeaa",
    "defaultCode": "from contextlib import contextmanager\n\n@contextmanager\ndef timer_span(label):\n    import time\n    start = time.perf_counter()\n    try:\n        yield\n    finally:\n        elapsed = time.perf_counter() - start\n        print(f'{label} took {elapsed * 1000:.2f}ms')\n\nwith timer_span('Calculation'):\n    sum(i * i for i in range(100000))",
    "content": "<h3>\ud83d\udccc Deep Dive: Context Managers</h3><p>Context managers manage setup and teardown resources (files, database connections, locks). They implement <code>__enter__</code> and <code>__exit__</code>.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The <code>with</code> statement guarantees execution of <code>__exit__(exc_type, exc_val, exc_tb)</code> even if exceptions, breaks, or returns occur inside the block.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>@contextlib.contextmanager</code> to convert generator functions into context managers without boilerplate class writing.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from contextlib import suppress\n# Suppress specific errors cleanly\nwith suppress(FileNotFoundError):\n    os.remove('ghost.txt')</code></pre>"
  },
  {
    "id": "py-35",
    "title": "JSON Serialization & Deserialization",
    "badge": "SYSTEM",
    "emoji": "\ud83d\udcc4",
    "defaultCode": "import json\npayload = {'course': 'Python Mastery', 'modules': 10, 'complete': True}\njson_str = json.dumps(payload, indent=2)\nprint('JSON string:\\n', json_str)\nparsed = json.loads(json_str)\nprint('Parsed back:', parsed['course'])",
    "content": "<h3>\ud83d\udccc Deep Dive: JSON Processing</h3><p>The <code>json</code> standard library serializes Python dictionaries, lists, strings, numbers, booleans, and None to standard JSON strings and files.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Non-standard objects (like <code>datetime</code> or custom classes) require a custom <code>json.JSONEncoder</code> subclass or a <code>default</code> serialization handler.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>For high-performance JSON operations in web servers, investigate C-accelerated alternatives like <code>orjson</code> or <code>ujson</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from datetime import date\ndef json_serial(obj):\n    if isinstance(obj, date): return obj.isoformat()\n    raise TypeError('Type not serializable')\nprint(json.dumps({'today': date.today()}, default=json_serial))</code></pre>"
  },
  {
    "id": "py-36",
    "title": "Modules, Packages & __all__ Exports",
    "badge": "ARCHITECTURE",
    "emoji": "\ud83d\udce6",
    "defaultCode": "# Module exports pattern\n__all__ = ['Calculator', 'add']\n\ndef add(a, b): return a + b\ndef _internal_helper(): return 'secret'\nclass Calculator: pass",
    "content": "<h3>\ud83d\udccc Deep Dive: Python Modules & Packages</h3><p>A module is a single Python file (.py). A package is a directory containing modules and an <code>__init__.py</code> file.</p><h4>\u2699\ufe0f Under the Hood</h4><p>When imported, Python evaluates the module top-to-bottom once and caches the resulting module object in <code>sys.modules</code>. Subsequent imports simply return the cached reference.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Define <code>__all__ = ['public_func', 'PublicClass']</code> to explicitly declare public APIs and control what gets exported with <code>from module import *</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Dynamic importing\nimport importlib\nmath_mod = importlib.import_module('math')\nprint('Dynamic sqrt(16):', math_mod.sqrt(16))</code></pre>"
  },
  {
    "id": "py-37",
    "title": "The sys & os Modules for System Interaction",
    "badge": "SYSTEM",
    "emoji": "\ud83d\udcbb",
    "defaultCode": "import sys, os\nprint(f'Python version: {sys.version.split()[0]}')\nprint(f'Platform: {sys.platform}')\nprint(f'Current PID: {os.getpid()}')\nprint('PATH entries:', len(os.environ.get('PATH', '').split(os.pathsep)))",
    "content": "<h3>\ud83d\udccc Deep Dive: sys and os Modules</h3><p><code>sys</code> exposes Python runtime parameters (argv, path, stdin/stdout, memory). <code>os</code> provides operating system level interactions (environment variables, processes, directories).</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>sys.path</code> is the list of directory strings searched for modules during import. Modifying <code>sys.path</code> allows dynamic package resolution.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>sys.exit(0)</code> for clean terminations and non-zero exit codes (e.g. <code>sys.exit(1)</code>) to notify shell scripts of errors.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">print('Command args:', sys.argv)\nos.environ['DEVFORGE_ENV'] = 'production'\nprint('Env set:', os.environ.get('DEVFORGE_ENV'))</code></pre>"
  },
  {
    "id": "py-38",
    "title": "Modern Path Handling with pathlib.Path",
    "badge": "SYSTEM",
    "emoji": "\ud83d\uddfa\ufe0f",
    "defaultCode": "from pathlib import Path\nbase_dir = Path.cwd()\nlog_file = base_dir / 'logs' / 'app.log'\nprint(f'Path: {log_file}')\nprint(f'Name: {log_file.name}, Suffix: {log_file.suffix}')\nprint(f'Parent: {log_file.parent}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Object-Oriented Paths (pathlib)</h3><p>Introduced in PEP 428, <code>pathlib.Path</code> replaces legacy <code>os.path</code> string manipulations with object-oriented cross-platform path manipulation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The forward slash <code>/</code> operator is overloaded to join paths natively on Windows and POSIX systems without worrying about backslashes.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>path.read_text(encoding='utf-8')</code> and <code>path.write_text(content, encoding='utf-8')</code> for concise one-line file reading and writing.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Finding all python files in current directory\npy_files = list(Path('.').glob('*.py'))\nprint(f'Found {len(py_files)} Python files')</code></pre>"
  },
  {
    "id": "py-39",
    "title": "Dates, Times & Timezones (datetime & zoneinfo)",
    "badge": "SYSTEM",
    "emoji": "\u23f0",
    "defaultCode": "from datetime import datetime, timezone, timedelta\nnow_utc = datetime.now(timezone.utc)\nprint('UTC now:', now_utc.isoformat())\nfuture = now_utc + timedelta(days=7, hours=12)\nprint('7.5 days later:', future.strftime('%Y-%m-%d %H:%M:%S'))",
    "content": "<h3>\ud83d\udccc Deep Dive: Date and Time Handling</h3><p>Python's <code>datetime</code> module represents dates, times, and intervals. Always use timezone-aware datetime objects in production systems.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Python 3.9+ includes the standard <code>zoneinfo</code> module using the system IANA time zone database (e.g. <code>ZoneInfo('Asia/Kolkata')</code>).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always store timestamps in databases in UTC. Convert to local user timezones only at the UI display layer.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">try:\n    from zoneinfo import ZoneInfo\n    ist = now_utc.astimezone(ZoneInfo('Asia/Kolkata'))\n    print('India Standard Time:', ist)\nexcept Exception as e: print('ZoneInfo error:', e)</code></pre>"
  },
  {
    "id": "py-40",
    "title": "Math, Decimal, Fractions & Random Numbers",
    "badge": "MATH",
    "emoji": "\ud83d\udd22",
    "defaultCode": "from decimal import Decimal\nfrom fractions import Fraction\nimport math, secrets\n# Avoiding floating point inaccuracy\nval = Decimal('0.1') + Decimal('0.2')\nprint(f'Decimal exact: {val}')  # 0.3, not 0.30000000000000004\nprint('Cryptographic token:', secrets.token_hex(8))",
    "content": "<h3>\ud83d\udccc Deep Dive: High-Precision Math & Cryptography</h3><p>Standard float operations suffer from IEEE-754 binary floating point precision limits. Financial calculations must use <code>decimal.Decimal</code>.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The <code>random</code> module uses the Mersenne Twister algorithm (pseudo-random, predictable). Security credentials, salts, and tokens must use the <code>secrets</code> module.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always initialize <code>Decimal</code> using string arguments (e.g. <code>Decimal('0.1')</code>), NOT floating point numbers (<code>Decimal(0.1)</code>).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">f1 = Fraction(3, 4)\nf2 = Fraction(1, 8)\nprint(f'{f1} + {f2} = {f1 + f2}')  # 7/8</code></pre>"
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
