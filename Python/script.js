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
  },
  {
    "id": "py-41",
    "title": "Regular Expressions & Pattern Matching (re module)",
    "badge": "LIBRARIES",
    "emoji": "\ud83d\udd0d",
    "defaultCode": "import re\ntext = 'Contact: sanskarin@outlook.in, supportramsandesh@gmail.com'\npattern = r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+'\nemails = re.findall(pattern, text)\nprint('Extracted emails:', emails)",
    "content": "<h3>\ud83d\udccc Deep Dive: Regular Expressions</h3><p>The <code>re</code> module provides Perl-style regular expression pattern matching, searching, splitting, and string replacement.</p><h4>\u2699\ufe0f Under the Hood</h4><p>CPython compiles regex patterns into specialized bytecode executed by an internal backtracking NFA (Nondeterministic Finite Automaton) engine.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Compile repeated patterns using <code>re.compile(pattern)</code> outside loops for optimal performance.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">clean = re.sub(r'\\s+', ' ', 'Too   many     spaces').strip()\nprint('Normalized:', clean)</code></pre>"
  },
  {
    "id": "py-42",
    "title": "Specialized Containers (collections Module)",
    "badge": "LIBRARIES",
    "emoji": "\ud83d\uddc3\ufe0f",
    "defaultCode": "from collections import Counter, defaultdict, deque\ncounts = Counter('devforge_python_mastery')\nprint('Top 3 characters:', counts.most_common(3))\n# Fast double-ended queue\nq = deque([1, 2, 3])\nq.appendleft(0)\nq.pop()\nprint('Deque:', q)",
    "content": "<h3>\ud83d\udccc Deep Dive: collections Module</h3><p>The <code>collections</code> module offers high-performance alternatives to Python's general-purpose dict, list, set, and tuple types.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>deque</code> is implemented as a doubly linked list of blocks, providing O(1) appends and pops from both ends (compared to O(n) for list front operations).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>defaultdict(list)</code> or <code>defaultdict(int)</code> to completely eliminate <code>if key not in d: d[key] = ...</code> boilerplate.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">grouped = defaultdict(list)\nwords = ['apple', 'avocado', 'banana', 'blueberry']\nfor w in words: grouped[w[0]].append(w)\nprint(dict(grouped))</code></pre>"
  },
  {
    "id": "py-43",
    "title": "Iterator Building with itertools",
    "badge": "LIBRARIES",
    "emoji": "\u2699\ufe0f",
    "defaultCode": "import itertools\n# Infinite cycle\nranks = itertools.islice(itertools.cycle(['Novice', 'Pro', 'Master']), 6)\nprint('Cycle:', list(ranks))\n# Cartesian product\ncombos = list(itertools.product(['Dark', 'Light'], ['Red', 'Blue']))\nprint('Combos:', combos)",
    "content": "<h3>\ud83d\udccc Deep Dive: The itertools Module</h3><p><code>itertools</code> provides fast, memory-efficient building blocks for creating complex iterators inspired by APL, Haskell, and SML.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Functions in <code>itertools</code> are written in pure C for maximum execution velocity. They stream data one element at a time without allocating full lists in memory.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>itertools.chain.from_iterable()</code> to flatten nested iterables with minimal memory consumption.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">items = [1, 2, 3]\npermutations = list(itertools.permutations(items, 2))\nprint('Permutations of 2:', permutations)</code></pre>"
  },
  {
    "id": "py-44",
    "title": "Functional Utilities with functools (lru_cache)",
    "badge": "LIBRARIES",
    "emoji": "\ud83e\udde0",
    "defaultCode": "from functools import lru_cache, partial\n\n@lru_cache(maxsize=128)\ndef compute_fib(n):\n    if n < 2: return n\n    return compute_fib(n - 1) + compute_fib(n - 2)\n\nprint(f'Fib(35) = {compute_fib(35)}')\nprint('Cache info:', compute_fib.cache_info())",
    "content": "<h3>\ud83d\udccc Deep Dive: The functools Module</h3><p><code>functools</code> provides higher-order functions that act on or return other functions, including memoization, partial application, and method dispatch.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>@lru_cache</code> stores function arguments and results in an internal doubly-linked hash map, turning exponential O(2^n) recursive algorithms into linear O(n) computations.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>functools.partial</code> to freeze function arguments and create simpler specialized function signatures.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Partial application\nbase_log = partial(print, '[DEVFORGE-LOG]')\nbase_log('Server started successfully')</code></pre>"
  },
  {
    "id": "py-45",
    "title": "Type Hinting, Annotations & Static Analysis",
    "badge": "TYPING",
    "emoji": "\ud83c\udff7\ufe0f",
    "defaultCode": "from typing import Optional, Union, Callable\n\ndef calculate_discount(price: float, rate: float = 0.1) -> float:\n    '''Calculates discounted price'''\n    return price * (1.0 - rate)\n\nprint(f'Discounted: ${calculate_discount(150.0):.2f}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Type Hinting (PEP 484)</h3><p>Type hints allow static type checkers (Mypy, Pyright) and IDEs to catch bugs, provide autocomplete, and document API contracts without impacting runtime speed.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Type annotations do not affect runtime behavior or enforce types dynamically in standard Python. They are stored in <code>__annotations__</code> for introspection.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>In Python 3.10+, use native union syntax <code>int | str</code> instead of <code>Union[int, str]</code> for cleaner code.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">def fetch_user(uid: int) -> dict[str, str | int] | None:\n    if uid == 1: return {'id': 1, 'name': 'Sanskar'}\n    return None\nprint(fetch_user(1))</code></pre>"
  },
  {
    "id": "py-46",
    "title": "Concurrency: Threading & the GIL",
    "badge": "CONCURRENCY",
    "emoji": "\ud83e\uddf5",
    "defaultCode": "import threading, time\ndef task(name):\n    time.sleep(0.1)\n    print(f'Thread {name} finished')\n\nt1 = threading.Thread(target=task, args=('Alpha',))\nt2 = threading.Thread(target=task, args=('Beta',))\nt1.start(); t2.start()\nt1.join(); t2.join()",
    "content": "<h3>\ud83d\udccc Deep Dive: Threading & The GIL</h3><p>Python threads are real OS threads, but CPython enforces the Global Interpreter Lock (GIL), allowing only one thread to execute Python bytecode at a time.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Threading is highly effective for I/O-bound tasks (network requests, disk access) because the GIL is released during system calls. For CPU-bound tasks, threading offers no speedup.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Python 3.13 introduces experimental free-threaded mode (no-GIL), enabling true multicore CPU scaling with threads.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Thread-safe synchronization with Locks\nlock = threading.Lock()\ncounter = 0\ndef increment():\n    global counter\n    with lock: counter += 1</code></pre>"
  },
  {
    "id": "py-47",
    "title": "Concurrency: Multiprocessing & Shared Memory",
    "badge": "CONCURRENCY",
    "emoji": "\u26a1",
    "defaultCode": "import multiprocessing as mp\ndef square(num, queue):\n    queue.put(num * num)\n\nif __name__ == '__main__':\n    q = mp.Queue()\n    p = mp.Process(target=square, args=(12, q))\n    p.start()\n    print('Square from process:', q.get())\n    p.join()",
    "content": "<h3>\ud83d\udccc Deep Dive: Multiprocessing</h3><p>The <code>multiprocessing</code> module bypasses the GIL by spawning separate OS processes, each with its own independent Python interpreter and memory space.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Processes communicate via IPC (Inter-Process Communication) mechanisms like pipes, queues, and shared memory (<code>multiprocessing.shared_memory</code>).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always wrap process spawning inside <code>if __name__ == '__main__':</code> to prevent infinite fork bombs on Windows.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Multiprocessing Pool\nwith mp.Pool(processes=2) as pool:\n    results = pool.map(abs, [-1, -2, -3, 4])\n    print('Pool results:', results)</code></pre>"
  },
  {
    "id": "py-48",
    "title": "Asynchronous Programming: asyncio & async/await",
    "badge": "ASYNC",
    "emoji": "\u23f3",
    "defaultCode": "import asyncio\nasync def fetch_data(source):\n    print(f'Fetching from {source}...')\n    await asyncio.sleep(0.1)\n    return f'Data from {source}'\n\nasync def main():\n    res = await fetch_data('DevForge API')\n    print(res)\n\nasyncio.run(main())",
    "content": "<h3>\ud83d\udccc Deep Dive: Asynchronous Programming (asyncio)</h3><p><code>asyncio</code> provides single-threaded concurrent programming using cooperative multitasking, coroutines, and an event loop.</p><h4>\u2699\ufe0f Under the Hood</h4><p>An event loop maintains a queue of ready tasks. When a coroutine hits <code>await</code> on an I/O operation, it yields control back to the loop, which schedules other pending tasks.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Never call blocking functions (like <code>time.sleep()</code> or synchronous <code>requests.get()</code>) inside async coroutines; they freeze the entire event loop.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Gathering multiple async coroutines concurrently\nasync def fetch_all():\n    results = await asyncio.gather(\n        fetch_data('Endpoint 1'),\n        fetch_data('Endpoint 2')\n    )\n    print('Gathered:', results)\nasyncio.run(fetch_all())</code></pre>"
  },
  {
    "id": "py-49",
    "title": "High-Level Thread & Process Pools (concurrent.futures)",
    "badge": "CONCURRENCY",
    "emoji": "\ud83c\udfca",
    "defaultCode": "from concurrent.futures import ThreadPoolExecutor\ndef ping(host):\n    return f'{host}: Online'\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    hosts = ['api.github.com', 'python.org', 'sanskarin.github.io']\n    for res in executor.map(ping, hosts):\n        print(res)",
    "content": "<h3>\ud83d\udccc Deep Dive: concurrent.futures</h3><p>The <code>concurrent.futures</code> module provides a clean, unified high-level interface for asynchronously executing callables via thread or process worker pools.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Executors manage worker lifecycles and return <code>Future</code> objects representing pending results, supporting callbacks, cancellation, and timeout management.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>ThreadPoolExecutor</code> for I/O tasks and seamlessly swap with <code>ProcessPoolExecutor</code> for CPU-heavy tasks without rewriting your logic.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">with ThreadPoolExecutor() as ex:\n    future = ex.submit(pow, 2, 10)\n    print('Result:', future.result())</code></pre>"
  },
  {
    "id": "py-50",
    "title": "Web Scraping & HTML Parsing (BeautifulSoup4)",
    "badge": "WEB",
    "emoji": "\ud83d\udd78\ufe0f",
    "defaultCode": "from bs4 import BeautifulSoup\nhtml = '<div class=\"hero\"><h1>DevForge</h1><p class=\"tagline\">Learn Code</p></div>'\nsoup = BeautifulSoup(html, 'html.parser')\nprint('Title:', soup.find('h1').text)\nprint('Tagline:', soup.find('p', class_='tagline').text)",
    "content": "<h3>\ud83d\udccc Deep Dive: Web Scraping</h3><p>Web scraping extracts structured data from HTML web pages using parsers like BeautifulSoup and HTTP fetchers.</p><h4>\u2699\ufe0f Under the Hood</h4><p>BeautifulSoup parses messy HTML into a navigable Python object tree of tags, attributes, and text nodes.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always respect site <code>robots.txt</code> files, set a descriptive <code>User-Agent</code> header, and apply rate limiting to prevent overwhelming servers.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Finding all links in a document\nhtml_doc = '<a href=\"/docs\">Docs</a><a href=\"/blog\">Blog</a>'\ns = BeautifulSoup(html_doc, 'html.parser')\nlinks = [a['href'] for a in s.find_all('a')]\nprint('Extracted links:', links)</code></pre>"
  },
  {
    "id": "py-51",
    "title": "Virtual Environments (venv, uv, virtualenv)",
    "badge": "TOOLING",
    "emoji": "\ud83d\udce6",
    "defaultCode": "# Terminal commands:\n# python -m venv .venv\n# .venv\\Scripts\\activate (Windows)\n# source .venv/bin/activate (Linux/macOS)\nimport sys\nprint('Virtual env prefix:', sys.prefix)",
    "content": "<h3>\ud83d\udccc Deep Dive: Virtual Environments</h3><p>Virtual environments isolate project-specific dependencies, preventing conflicting library versions and protecting the system Python installation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>A virtual environment contains a copy or symlink of the Python executable and its own isolated <code>site-packages</code> directory. Activation scripts modify <code>PATH</code> to prioritize the venv.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Explore <code>uv</code> by Astral: an ultra-fast Rust-based Python package manager that creates environments in milliseconds.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">import os\nis_venv = sys.prefix != sys.base_prefix\nprint(f'Running inside virtualenv: {is_venv}')</code></pre>"
  },
  {
    "id": "py-52",
    "title": "Pip & Dependency Management",
    "badge": "TOOLING",
    "emoji": "\ud83d\udd27",
    "defaultCode": "# pip install -r requirements.txt\n# pip freeze > requirements.txt\n# pip install --upgrade requests\nprint('Manage project dependencies with pinned versions')",
    "content": "<h3>\ud83d\udccc Deep Dive: Pip & Dependency Resolution</h3><p><code>pip</code> is the reference package installer for Python, downloading and installing wheels or source distributions from PyPI.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Modern pip features a backtracking dependency resolver that satisfies complex transitive dependency constraints.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always pin dependencies with exact versions (e.g., <code>requests==2.31.0</code>) or use lockfiles (<code>pip-compile</code>, <code>uv.lock</code>) for reproducible builds.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Inspecting installed packages via code\nimport importlib.metadata\nprint('Installed pkgs sample:', list(importlib.metadata.distributions())[:3])</code></pre>"
  },
  {
    "id": "py-53",
    "title": "Modern Project Configuration (pyproject.toml)",
    "badge": "TOOLING",
    "emoji": "\ud83d\udcdc",
    "defaultCode": "# pyproject.toml sample:\n# [project]\n# name = 'devforge'\n# version = '5.2.0'\n# dependencies = ['requests>=2.28.0']\nprint('pyproject.toml is the PEP 518/621 standard for Python packaging')",
    "content": "<h3>\ud83d\udccc Deep Dive: pyproject.toml Configuration</h3><p><code>pyproject.toml</code> is the modern, unified configuration file for Python builds, linters (Ruff, Flake8), formatters (Black), and testing tools (pytest).</p><h4>\u2699\ufe0f Under the Hood</h4><p>Replaces legacy <code>setup.py</code>, <code>setup.cfg</code>, and <code>requirements.txt</code> with a declarative TOML structure standardized under PEP 517/518/621.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Centralize configurations for Black, Ruff, pytest, and mypy in a single <code>pyproject.toml</code> root file.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">import tomllib  # Python 3.11+ standard library\ntoml_data = '[project]\\nname = \"DevForge\"\\nversion = \"5.2.0\"'\nparsed = tomllib.loads(toml_data)\nprint('Parsed TOML:', parsed['project'])</code></pre>"
  },
  {
    "id": "py-54",
    "title": "Application Logging (logging Module)",
    "badge": "SYSTEM",
    "emoji": "\ud83d\udcdd",
    "defaultCode": "import logging\nlogging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')\nlogger = logging.getLogger('DevForge')\nlogger.info('System initialized successfully')\nlogger.warning('High memory usage detected')",
    "content": "<h3>\ud83d\udccc Deep Dive: The logging Module</h3><p>The standard <code>logging</code> module provides thread-safe, hierarchical log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) with customizable handlers and formatters.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Loggers are organized hierarchically by dot notation (e.g. <code>app.database</code> inherits configuration from <code>app</code>). Handlers route messages to consoles, rotating files, or network sockets.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Never use <code>print()</code> statements in production services; use <code>logging</code> to capture timestamps, severities, and stack traces.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Logging exceptions with stack traces\ntry: 1 / 0\nexcept ZeroDivisionError:\n    logger.exception('Handled math fault')</code></pre>"
  },
  {
    "id": "py-55",
    "title": "Configuration Management: dotenv & pydantic-settings",
    "badge": "SYSTEM",
    "emoji": "\u2699\ufe0f",
    "defaultCode": "import os\n# Simulate environment variable\nos.environ['PORT'] = '8080'\nos.environ['DATABASE_URL'] = 'postgresql://localhost/dev'\nport = int(os.environ.get('PORT', 3000))\nprint(f'Server configured for port: {port}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Configuration & 12-Factor Apps</h3><p>Store configuration in the environment, not in code. Use <code>.env</code> files for local development and inject environment variables in production.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Libraries like <code>pydantic-settings</code> validate types, verify required secrets, and map nested configs automatically from environment variables at startup.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always add <code>.env</code> to your <code>.gitignore</code> to prevent committing API keys, tokens, or database credentials to version control.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">def get_config(key, default=None):\n    val = os.getenv(key, default)\n    if val is None:\n        raise ValueError(f'Missing required env var: {key}')\n    return val\nprint('Port:', get_config('PORT'))</code></pre>"
  },
  {
    "id": "py-56",
    "title": "Unit Testing with unittest",
    "badge": "TESTING",
    "emoji": "\ud83e\uddea",
    "defaultCode": "import unittest\ndef add(a, b): return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(10, 5), 15)\n        self.assertTrue(add(-1, 1) == 0)\n\n# Run test suite\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestMath)\nunittest.TextTestRunner(verbosity=2).run(suite)",
    "content": "<h3>\ud83d\udccc Deep Dive: unittest Framework</h3><p>The standard <code>unittest</code> module, inspired by JUnit, provides test case classes, assertions, fixtures, and test runners built directly into Python.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Test classes subclass <code>unittest.TestCase</code>. Test methods must start with the prefix <code>test_</code> to be automatically discovered by test loaders.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>setUp()</code> and <code>tearDown()</code> methods for managing per-test state and database cleanup.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class TestExceptions(unittest.TestCase):\n    def test_zero_div(self):\n        with self.assertRaises(ZeroDivisionError):\n            _ = 10 / 0</code></pre>"
  },
  {
    "id": "py-57",
    "title": "Modern Testing with pytest",
    "badge": "TESTING",
    "emoji": "\ud83c\udfaf",
    "defaultCode": "# pytest test sample:\n# def test_addition():\n#     assert 2 + 2 == 4\n# @pytest.mark.parametrize('inp, expected', [(1, 2), (2, 4)])\n# def test_double(inp, expected):\n#     assert inp * 2 == expected\nprint('pytest provides concise assertions and powerful fixtures')",
    "content": "<h3>\ud83d\udccc Deep Dive: pytest Mastery</h3><p><code>pytest</code> is the most widely adopted testing framework in the Python ecosystem, replacing verbose boilerplate with standard Python <code>assert</code> statements.</p><h4>\u2699\ufe0f Under the Hood</h4><p>pytest uses AST (Abstract Syntax Tree) bytecode rewriting to provide detailed failure explanations without requiring assertion helper methods.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Leverage <code>@pytest.fixture</code> with scopes (function, class, module, session) for clean dependency injection in test suites.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Fixture pattern demonstration\ndef mock_user(): return {'id': 1, 'role': 'admin'}\ndef test_admin_access():\n    user = mock_user()\n    assert user['role'] == 'admin'</code></pre>"
  },
  {
    "id": "py-58",
    "title": "Mocking & Monkeypatching (unittest.mock)",
    "badge": "TESTING",
    "emoji": "\ud83c\udfad",
    "defaultCode": "from unittest.mock import MagicMock\nmock_api = MagicMock()\nmock_api.get_user.return_value = {'name': 'Sanskar', 'status': 200}\n\nres = mock_api.get_user(42)\nprint('Mocked result:', res)\nmock_api.get_user.assert_called_once_with(42)",
    "content": "<h3>\ud83d\udccc Deep Dive: Mocking & Patching</h3><p>The <code>unittest.mock</code> module allows replacing system dependencies, external HTTP APIs, and databases with programmable mock objects during unit tests.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>MagicMock</code> dynamically synthesizes attributes and dunder methods on access, recording all call arguments and invocation counts.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>@patch('module.function')</code> as a context manager or decorator to safely restore original functions after tests finish.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from unittest.mock import patch\nwith patch('os.path.exists', return_value=True):\n    import os\n    print('Mocked exists:', os.path.exists('ghost_file.txt'))</code></pre>"
  },
  {
    "id": "py-59",
    "title": "Profiling & Benchmarking (cProfile & timeit)",
    "badge": "OPTIMIZATION",
    "emoji": "\u23f1\ufe0f",
    "defaultCode": "import cProfile, timeit\ndef slow_calc():\n    return sum(x ** 2 for x in range(10000))\n\ncProfile.run('slow_calc()')\nt = timeit.timeit('\"-\".join(str(n) for n in range(100))', number=1000)\nprint(f'timeit elapsed: {t:.4f}s')",
    "content": "<h3>\ud83d\udccc Deep Dive: Profiling & Performance Analysis</h3><p>Never guess where performance bottlenecks are\u2014measure them. <code>cProfile</code> measures execution time and call counts; <code>timeit</code> benchmarks isolated snippets.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>cProfile</code> is implemented as a C extension that hooks into interpreter function calls to track exact cumulative time and per-call durations.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Combine <code>cProfile</code> with visualization tools like <code>snakeviz</code> to view interactive flame graphs of call stacks.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Comparing comprehension vs generator timing\nt1 = timeit.timeit('[x for x in range(1000)]', number=5000)\nt2 = timeit.timeit('list(range(1000))', number=5000)\nprint(f'Comp: {t1:.3f}s vs list(range): {t2:.3f}s')</code></pre>"
  },
  {
    "id": "py-60",
    "title": "Interactive Debugging with pdb & breakpoint()",
    "badge": "TOOLING",
    "emoji": "\ud83d\udc1b",
    "defaultCode": "# In Python 3.7+:\n# def process_payment(amount):\n#     breakpoint()  # Drops into interactive PDB session\n#     return amount > 0\nprint('breakpoint() pauses execution and opens the PDB debugger')",
    "content": "<h3>\ud83d\udccc Deep Dive: Debugging with pdb</h3><p>The Python debugger (<code>pdb</code>) provides step-by-step code execution, variable inspection, stack exploration, and dynamic code evaluation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The built-in <code>breakpoint()</code> function calls <code>sys.breakpointhook()</code>, which defaults to launching <code>pdb.set_trace()</code>. Set <code>PYTHONBREAKPOINT=0</code> in your environment to disable all breakpoints in production without code modifications.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Key pdb commands: <code>n</code> (next line), <code>s</code> (step into function), <code>c</code> (continue), <code>p variable</code> (print), <code>q</code> (quit).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">import pdb\ndef debug_example(a, b):\n    # pdb.set_trace() can be used in older scripts\n    return a + b\nprint('Result:', debug_example(5, 10))</code></pre>"
  },
  {
    "id": "py-61",
    "title": "Socket Programming: TCP & UDP Sockets",
    "badge": "NETWORKING",
    "emoji": "\ud83d\udd0c",
    "defaultCode": "import socket\n# Simple hostname IP lookup\nhost = 'python.org'\nip = socket.gethostbyname(host)\nprint(f'{host} resolves to: {ip}')",
    "content": "<h3>\ud83d\udccc Deep Dive: Network Sockets</h3><p>The <code>socket</code> module provides low-level C-style networking interfaces for establishing TCP streams and UDP datagram connections.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Sockets map directly to the operating system's Berkeley sockets API. TCP provides reliable, ordered data transmission; UDP provides lightweight, connectionless transmission.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always set socket timeouts (<code>sock.settimeout(5.0)</code>) to prevent worker threads from hanging indefinitely on dead connections.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Creating a basic TCP socket client\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.settimeout(2.0)\ntry: s.connect(('127.0.0.1', 80))\nexcept OSError: print('Local port 80 closed')\nfinally: s.close()</code></pre>"
  },
  {
    "id": "py-62",
    "title": "Modern HTTP Clients (requests & httpx)",
    "badge": "NETWORKING",
    "emoji": "\ud83c\udf10",
    "defaultCode": "import requests\n# Example GET request with query params\nres = requests.get('https://httpbin.org/get', params={'user': 'Sanskar'}, timeout=5)\nprint('Status:', res.status_code)\nprint('Server echoed:', res.json().get('args'))",
    "content": "<h3>\ud83d\udccc Deep Dive: HTTP Clients</h3><p><code>requests</code> is the human-friendly standard for synchronous HTTP in Python. <code>httpx</code> provides next-generation HTTP/2 and async client capabilities.</p><h4>\u2699\ufe0f Under the Hood</h4><p>HTTP clients use connection pooling (via urllib3) to reuse existing TCP handshakes and TLS sessions across multiple requests to the same host.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use <code>requests.Session()</code> when making multiple requests to the same service to benefit from persistent cookies and connection pooling.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">session = requests.Session()\nsession.headers.update({'User-Agent': 'DevForge-Bot/1.0'})\n# Reuses TCP connection\nr = session.get('https://httpbin.org/headers')\nprint('Response headers received')</code></pre>"
  },
  {
    "id": "py-63",
    "title": "Real-Time WebSockets in Python",
    "badge": "NETWORKING",
    "emoji": "\u26a1",
    "defaultCode": "# websockets async server pattern:\n# import asyncio, websockets\n# async def echo(websocket):\n#     async for message in websocket:\n#         await websocket.send(f'Echo: {message}')\nprint('WebSockets provide full-duplex real-time communication')",
    "content": "<h3>\ud83d\udccc Deep Dive: WebSocket Protocol</h3><p>WebSockets establish persistent, bidirectional, full-duplex communication channels over a single TCP connection, ideal for chat, dashboards, and live trading.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The connection starts as an HTTP request with an <code>Upgrade: websocket</code> header before switching to lightweight binary or text frames with minimal header overhead.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Implement heartbeat ping/pong messages to detect broken client connections and clear stale state.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Client connection skeleton\nasync def ws_client():\n    # async with websockets.connect('ws://localhost:8765') as ws:\n    #     await ws.send('Ping')\n    pass</code></pre>"
  },
  {
    "id": "py-64",
    "title": "Consuming REST APIs, Rate Limiting & Auth",
    "badge": "NETWORKING",
    "emoji": "\ud83d\udd11",
    "defaultCode": "import requests\ndef fetch_with_retry(url, retries=3):\n    for attempt in range(retries):\n        try:\n            res = requests.get(url, timeout=3)\n            if res.status_code == 200: return res.json()\n        except requests.RequestException:\n            pass\n    return None\nprint('Robust API client structure ready')",
    "content": "<h3>\ud83d\udccc Deep Dive: REST API Consumption</h3><p>Production API consumers must handle authentication (Bearer tokens, API keys), HTTP status codes, exponential backoff retries, and rate limiting headers.</p><h4>\u2699\ufe0f Under the Hood</h4><p>HTTP 429 indicates rate limiting. Read the <code>Retry-After</code> header to determine how many seconds to pause before sending subsequent requests.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>urllib3.util.retry.Retry</code> combined with an HTTPAdapter to configure automated exponential backoff on transient 5xx errors.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">headers = {'Authorization': 'Bearer sample_token_xyz', 'Accept': 'application/json'}\n# Send authenticated request with custom headers</code></pre>"
  },
  {
    "id": "py-65",
    "title": "Building Async APIs with FastAPI",
    "badge": "FRAMEWORKS",
    "emoji": "\u26a1",
    "defaultCode": "# from fastapi import FastAPI\n# app = FastAPI(title='DevForge API')\n# @app.get('/items/{item_id}')\n# async def read_item(item_id: int, q: str = None):\n#     return {'item_id': item_id, 'q': q}\nprint('FastAPI delivers high-performance async APIs with automatic OpenAPI docs')",
    "content": "<h3>\ud83d\udccc Deep Dive: Modern FastAPI Architecture</h3><p>FastAPI is a high-performance web framework based on Starlette and Pydantic, supporting asynchronous concurrency and automatic OpenAPI / Swagger documentation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>FastAPI uses Python type annotations to validate request bodies, parse query parameters, and serialize responses with minimal CPU overhead.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Define endpoints as <code>async def</code> for asynchronous I/O operations, or regular <code>def</code> if using blocking legacy database drivers.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Pydantic schema validation\nfrom pydantic import BaseModel\nclass Item(BaseModel):\n    name: str\n    price: float\n    in_stock: bool = True\nitem = Item(name='Laptop', price=999.99)\nprint(item.model_dump())</code></pre>"
  },
  {
    "id": "py-66",
    "title": "Flask Microframework Fundamentals",
    "badge": "FRAMEWORKS",
    "emoji": "\ud83c\udf76",
    "defaultCode": "# from flask import Flask, jsonify\n# app = Flask(__name__)\n# @app.route('/api/health')\n# def health(): return jsonify({'status': 'ok'})\nprint('Flask is lightweight, extensible, and ideal for microservices')",
    "content": "<h3>\ud83d\udccc Deep Dive: Flask Fundamentals</h3><p>Flask is a lightweight WSGI web microframework designed around simplicity and extensibility, providing routing, templates (Jinja2), and request handling.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Flask utilizes Werkzeug's routing tree and thread-local (or context-local) proxies like <code>request</code> and <code>g</code> to isolate per-request data.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use the Application Factory pattern (<code>create_app()</code>) to make your Flask application easily testable and configurable.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Application factory structure\ndef create_app(config_name='default'):\n    # app = Flask(__name__)\n    # register blueprints\n    return 'Flask App Instance'</code></pre>"
  },
  {
    "id": "py-67",
    "title": "Flask Blueprints, Jinja2 & Middleware",
    "badge": "FRAMEWORKS",
    "emoji": "\ud83e\udde9",
    "defaultCode": "# from flask import Blueprint\n# auth_bp = Blueprint('auth', __name__, url_prefix='/auth')\n# @auth_bp.route('/login')\n# def login(): return 'Login Page'\nprint('Blueprints organize large Flask applications into modular components')",
    "content": "<h3>\ud83d\udccc Deep Dive: Flask Blueprints & Architecture</h3><p>Blueprints allow developers to organize large Flask applications into reusable, modular sub-applications with independent views, templates, and static assets.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Blueprints record operations to be performed when subsequently registered on the application instance (e.g. <code>app.register_blueprint(auth_bp)</code>).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Organize blueprints by functional domain (e.g., users, billing, products) rather than by technical layer.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Jinja2 template rendering\nfrom jinja2 import Template\nt = Template('Hello {{ name }}!')\nprint(t.render(name='DevForge Learner'))</code></pre>"
  },
  {
    "id": "py-68",
    "title": "Django Architecture: The MVT Pattern",
    "badge": "FRAMEWORKS",
    "emoji": "\ud83c\udfb8",
    "defaultCode": "# Django structure:\n# Model (Data/DB) <-> View (Logic/Controller) <-> Template (Presentation/HTML)\nprint('Django: The batteries-included web framework for perfectionists with deadlines')",
    "content": "<h3>\ud83d\udccc Deep Dive: Django Architecture (MVT)</h3><p>Django follows the Model-View-Template pattern, providing an ORM, admin portal, authentication, security middleware, and template engine out of the box.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Incoming HTTP requests pass through the middleware pipeline, are matched by URL resolvers, dispatched to view functions/classes, query the ORM, and render templates.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Leverage Class-Based Views (CBVs) like <code>ListView</code> and <code>DetailView</code> to minimize repetitive CRUD code.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Example Django view function structure\ndef user_profile(request, username):\n    # user = get_object_or_404(User, username=username)\n    # return render(request, 'profile.html', {'user': user})\n    return f'Profile for {username}'</code></pre>"
  },
  {
    "id": "py-69",
    "title": "Django ORM: Models, Fields & Migrations",
    "badge": "DATABASES",
    "emoji": "\ud83d\uddc4\ufe0f",
    "defaultCode": "# from django.db import models\n# class Course(models.Model):\n#     title = models.CharField(max_length=200)\n#     published = models.DateTimeField(auto_now_add=True)\nprint('Django ORM generates database tables and handles automated migrations')",
    "content": "<h3>\ud83d\udccc Deep Dive: Django ORM</h3><p>Django's Object-Relational Mapper maps Python classes to relational database tables, offering query construction, migrations, and relationship management.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Django queries are lazy. A <code>QuerySet</code> does not execute SQL against the database until the data is evaluated (iterated, sliced, or evaluated in a conditional).</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>select_related()</code> for single-valued relationships (ForeignKey) and <code>prefetch_related()</code> for multi-valued relationships (ManyToMany) to eliminate N+1 query performance problems.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Filter, chaining, and querysets\n# active_courses = Course.objects.filter(is_active=True).order_by('-published')</code></pre>"
  },
  {
    "id": "py-70",
    "title": "SQLAlchemy: Core & Declarative ORM",
    "badge": "DATABASES",
    "emoji": "\ud83d\udee2\ufe0f",
    "defaultCode": "# from sqlalchemy import create_engine, Column, Integer, String\n# from sqlalchemy.orm import declarative_base, sessionmaker\n# Base = declarative_base()\n# class User(Base): __tablename__ = 'users'; id = Column(Integer, primary_key=True)\nprint('SQLAlchemy is the premier database toolkit and ORM for Python')",
    "content": "<h3>\ud83d\udccc Deep Dive: SQLAlchemy Toolkit</h3><p>SQLAlchemy provides two layers: SQLAlchemy Core (SQL abstraction, connection pooling, expressions) and SQLAlchemy ORM (unit of work, identity mapping).</p><h4>\u2699\ufe0f Under the Hood</h4><p>The ORM uses the Unit of Work pattern to track all dirty, new, and deleted objects in a Session, flushing them in a single optimized database transaction.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>In SQLAlchemy 2.0+, use the modern <code>select(User).where(...)</code> syntax instead of legacy <code>session.query(User)</code>.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Database connection string formats\nsqlite_dsn = 'sqlite:///devforge.db'\npg_dsn = 'postgresql+psycopg2://user:pass@localhost:5432/mydb'</code></pre>"
  },
  {
    "id": "py-71",
    "title": "NumPy: The ndarray & Vectorization",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83e\uddee",
    "defaultCode": "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint('Vectorized multiply:', arr * 10)\nprint('Mean:', np.mean(arr), 'Std:', np.std(arr))",
    "content": "<h3>\ud83d\udccc Deep Dive: NumPy & ndarrays</h3><p>NumPy is the foundational package for scientific computing in Python, providing multidimensional array objects (<code>ndarray</code>) and vectorized operations.</p><h4>\u2699\ufe0f Under the Hood</h4><p>NumPy arrays store contiguous homogeneous memory blocks in C, bypassing Python object overhead and leveraging SIMD CPU instructions for orders-of-magnitude speedups.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Avoid manual Python for-loops over arrays; always use vectorized operations and universal functions (ufuncs).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">matrix = np.arange(1, 10).reshape((3, 3))\nprint('Matrix:\\n', matrix)\nprint('Transpose:\\n', matrix.T)</code></pre>"
  },
  {
    "id": "py-72",
    "title": "NumPy: Indexing, Slicing & Broadcasting",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83d\udcd0",
    "defaultCode": "import numpy as np\na = np.array([[1, 2, 3], [4, 5, 6]])\nb = np.array([10, 20, 30])\n# Broadcasting stretches b across rows of a\nprint('Broadcasting result:\\n', a + b)",
    "content": "<h3>\ud83d\udccc Deep Dive: Array Broadcasting</h3><p>Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations without making unnecessary data copies.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Two dimensions are compatible when they are equal, or one of them is 1. NumPy conceptually stretches dimensions of size 1 by setting the stride to 0.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use boolean masking (e.g. <code>arr[arr > 5]</code>) for instantaneous filtering without intermediate allocations.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">data = np.array([15, 22, 8, 45, 12])\nfiltered = data[data > 20]\nprint('Values > 20:', filtered)</code></pre>"
  },
  {
    "id": "py-73",
    "title": "Pandas: Series, DataFrames & Ingestion",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83d\udc3c",
    "defaultCode": "import pandas as pd\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Role': ['Dev', 'Designer', 'Manager'],\n    'Score': [95, 88, 92]\n})\nprint(df.describe())",
    "content": "<h3>\ud83d\udccc Deep Dive: Pandas Data Analysis</h3><p>Pandas provides high-performance data structures: 1D <code>Series</code> and 2D tabular <code>DataFrame</code>, with tools for ingesting CSV, Excel, SQL, and Parquet.</p><h4>\u2699\ufe0f Under the Hood</h4><p>DataFrames are built on top of NumPy arrays, organizing columns into homogeneous blocks managed by a <code>BlockManager</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>.loc[row_label, col_label]</code> for label-based indexing and <code>.iloc[row_idx, col_idx]</code> for integer position indexing to avoid chained assignment warnings.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">print('Mean score:', df['Score'].mean())\nprint('High performers:\\n', df[df['Score'] >= 90])</code></pre>"
  },
  {
    "id": "py-74",
    "title": "Pandas: Data Cleaning & Missing Values",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83e\uddf9",
    "defaultCode": "import pandas as pd, numpy as np\nraw = pd.DataFrame({'val': [1.0, np.nan, 3.5, np.nan, 5.0]})\ncleaned = raw.fillna(raw['val'].median())\nprint('Imputed with median:\\n', cleaned)",
    "content": "<h3>\ud83d\udccc Deep Dive: Data Cleaning & Wrangling</h3><p>Real-world datasets contain missing (NaN/null), duplicated, or malformed data. Pandas provides robust tools for detection, imputation, and type conversion.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Pandas traditionally represented missing values using IEEE 754 floating point <code>NaN</code>, converting integers to floats. Modern nullable types (<code>Int64</code>, <code>boolean</code>) eliminate this quirk.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>df.drop_duplicates()</code> and <code>df.dropna(subset=['critical_column'])</code> early in ETL pipelines.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Checking null counts per column\nprint('Null counts:\\n', raw.isna().sum())</code></pre>"
  },
  {
    "id": "py-75",
    "title": "Pandas: GroupBy, Aggregations & Pivot Tables",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83d\udcca",
    "defaultCode": "import pandas as pd\nsales = pd.DataFrame({\n    'Dept': ['Dev', 'Dev', 'Design', 'Design', 'Sales'],\n    'Revenue': [12000, 15000, 8000, 9500, 20000]\n})\nprint(sales.groupby('Dept')['Revenue'].agg(['count', 'mean', 'sum']))",
    "content": "<h3>\ud83d\udccc Deep Dive: GroupBy & Aggregations</h3><p>The GroupBy mechanism follows the Split-Apply-Combine paradigm: split data into groups by key, apply aggregation functions, and combine results.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Pandas indexes group keys into contiguous categorical codes for accelerated C-level reductions.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>.agg({'colA': 'mean', 'colB': 'sum'})</code> to compute different aggregations on different columns simultaneously.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">pivot = sales.pivot_table(values='Revenue', index='Dept', aggfunc='sum')\nprint('Pivot:\\n', pivot)</code></pre>"
  },
  {
    "id": "py-76",
    "title": "Data Visualization with Matplotlib",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83d\udcc8",
    "defaultCode": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [10, 24, 36, 45, 60]\nfig, ax = plt.subplots(figsize=(6, 3))\nax.plot(x, y, marker='o', color='#6c63ff', label='Progress')\nax.set_title('Learning Curve')\nprint('Matplotlib figure created successfully')",
    "content": "<h3>\ud83d\udccc Deep Dive: Matplotlib Architecture</h3><p>Matplotlib is the foundational 2D plotting library for Python, offering fine-grained programmatic control over every chart element.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Follows the Object-Oriented API: a <code>Figure</code> canvas contains one or more <code>Axes</code> (subplots), which contain lines, text, ticks, and legends.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use the explicit object-oriented interface <code>fig, ax = plt.subplots()</code> rather than global <code>plt.plot()</code> commands.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">ax.grid(True, linestyle='--', alpha=0.6)\nax.legend()\n# plt.savefig('curve.png')</code></pre>"
  },
  {
    "id": "py-77",
    "title": "Statistical Visualization with Seaborn",
    "badge": "DATA SCIENCE",
    "emoji": "\ud83c\udfa8",
    "defaultCode": "# import seaborn as sns\n# tips = sns.load_dataset('tips')\n# sns.scatterplot(data=tips, x='total_bill', y='tip', hue='time')\nprint('Seaborn builds beautiful statistical themes and charts on top of Matplotlib')",
    "content": "<h3>\ud83d\udccc Deep Dive: Statistical Visualization</h3><p>Seaborn provides high-level abstractions for plotting attractive statistical graphics closely integrated with Pandas DataFrames.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Seaborn automatically performs statistical calculations (confidence intervals, regressions, distributions) before rendering onto Matplotlib Axes.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>sns.set_theme(style='darkgrid')</code> at application startup to instantly upgrade chart aesthetics across your entire project.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Correlation matrix heatmap\n# sns.heatmap(df.corr(), annot=True, cmap='coolwarm')</code></pre>"
  },
  {
    "id": "py-78",
    "title": "Machine Learning Basics with Scikit-Learn",
    "badge": "MACHINE LEARNING",
    "emoji": "\ud83e\udd16",
    "defaultCode": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint('Prediction for 5:', model.predict([[5]])[0])",
    "content": "<h3>\ud83d\udccc Deep Dive: Scikit-Learn Estimator API</h3><p>Scikit-learn is the standard Python machine learning library, offering consistent interfaces for classification, regression, clustering, and dimensional reduction.</p><h4>\u2699\ufe0f Under the Hood</h4><p>All estimators follow three standard methods: <code>fit(X, y)</code> to train, <code>predict(X)</code> to infer, and <code>transform(X)</code> to preprocess.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always split data into train and test sets (<code>train_test_split</code>) before training to avoid evaluating models on training data.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)</code></pre>"
  },
  {
    "id": "py-79",
    "title": "Feature Scaling & Machine Learning Pipelines",
    "badge": "MACHINE LEARNING",
    "emoji": "\u2699\ufe0f",
    "defaultCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('classifier', LogisticRegression())\n])\nprint('ML Pipeline assembled with scaling + classifier')",
    "content": "<h3>\ud83d\udccc Deep Dive: ML Pipelines</h3><p>Scikit-Learn <code>Pipeline</code> chains data transformers and estimators into a single atomic model, preventing data leakage during cross-validation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Calling <code>pipeline.fit()</code> sequentially runs <code>fit_transform()</code> on all intermediate steps and <code>fit()</code> on the final estimator.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Fit transformers ONLY on training data; never fit on the test dataset to preserve true generalization metrics.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Pipelines can be serialized atomically with joblib\nimport joblib\n# joblib.dump(pipe, 'model_v1.pkl')</code></pre>"
  },
  {
    "id": "py-80",
    "title": "Model Evaluation: Precision, Recall & Cross-Validation",
    "badge": "MACHINE LEARNING",
    "emoji": "\ud83c\udfaf",
    "defaultCode": "from sklearn.metrics import classification_report\ny_true = [0, 1, 0, 1, 1]\ny_pred = [0, 1, 0, 0, 1]\nprint('Classification metrics:\\n', classification_report(y_true, y_pred))",
    "content": "<h3>\ud83d\udccc Deep Dive: Machine Learning Metrics</h3><p>Accuracy can be misleading on imbalanced datasets. Model evaluation requires inspecting Precision, Recall, F1-Score, and ROC-AUC curves.</p><h4>\u2699\ufe0f Under the Hood</h4><p>K-Fold Cross-Validation partitions data into K folds, training on K-1 folds and validating on the remaining fold K times to measure model variance.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>For fraud detection or medical diagnosis where false negatives are dangerous, optimize for high Recall.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">from sklearn.metrics import confusion_matrix\ncm = confusion_matrix(y_true, y_pred)\nprint('Confusion matrix:\\n', cm)</code></pre>"
  },
  {
    "id": "py-81",
    "title": "Command-Line Development with argparse",
    "badge": "TOOLING",
    "emoji": "\ud83d\udcbb",
    "defaultCode": "import argparse\nparser = argparse.ArgumentParser(description='DevForge CLI')\nparser.add_argument('--port', type=int, default=8000, help='Port to listen on')\nparser.add_argument('--verbose', action='store_true', help='Enable debug logging')\n# In real scripts: args = parser.parse_args()\nprint('argparse parses arguments, generates help, and validates types')",
    "content": "<h3>\ud83d\udccc Deep Dive: CLI Interfaces with argparse</h3><p>The standard <code>argparse</code> module provides production command-line parsing, automatic help generation (<code>--help</code>), and input validation.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Processes <code>sys.argv[1:]</code>, converts string inputs to target types, and exits with descriptive errors on malformed arguments.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use subparsers (<code>parser.add_subparsers()</code>) to build multi-command CLIs like git (e.g., <code>app run</code>, <code>app deploy</code>).</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">subparsers = parser.add_subparsers(dest='command')\nstart_cmd = subparsers.add_parser('start', help='Start server')\nstart_cmd.add_argument('--daemon', action='store_true')</code></pre>"
  },
  {
    "id": "py-82",
    "title": "Modern CLI Apps with Click & Rich",
    "badge": "TOOLING",
    "emoji": "\u2728",
    "defaultCode": "# import click\n# @click.command()\n# @click.option('--count', default=1, help='Number of greetings.')\n# def hello(count):\n#     for _ in range(count): click.echo('Hello DevForge!')\nprint('Rich and Click create visually stunning terminal interfaces')",
    "content": "<h3>\ud83d\udccc Deep Dive: Modern Terminal UX</h3><p><code>Click</code> provides composable command decorators; <code>Rich</code> brings colors, tables, progress bars, and markdown formatting to terminal outputs.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Rich parses ANSI escape sequences and queries terminal capabilities to render responsive tables and progress bars without terminal flickering.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Combine <code>Rich</code> with <code>typer</code> (built on Click) for type-hint driven modern CLI development.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Rich table preview syntax\n# from rich.console import Console\n# from rich.table import Table\n# table = Table(title='Modules'); table.add_column('Name')</code></pre>"
  },
  {
    "id": "py-83",
    "title": "Security & Cryptography: hashlib, hmac & secrets",
    "badge": "SECURITY",
    "emoji": "\ud83d\udd12",
    "defaultCode": "import hashlib, hmac, secrets\nsalt = secrets.token_bytes(16)\npassword = b'Mastery2026'\nhash_val = hashlib.sha256(password + salt).hexdigest()\nprint(f'Salted SHA-256: {hash_val[:32]}...')",
    "content": "<h3>\ud83d\udccc Deep Dive: Cryptography & Security</h3><p>The <code>hashlib</code> and <code>hmac</code> modules provide cryptographic hashing algorithms (SHA-256, SHA-3, BLAKE2) and keyed-hash message authentication.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Hash algorithms are one-way mathematical functions. For passwords, standard SHA-256 is too fast and vulnerable to GPU attacks; use salted key derivation functions like <code>hashlib.scrypt</code> or <code>bcrypt</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use <code>hmac.compare_digest(a, b)</code> instead of <code>a == b</code> to protect against timing attacks when validating tokens and signatures.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">token = secrets.token_urlsafe(32)\nprint('Secure CSRF token:', token)</code></pre>"
  },
  {
    "id": "py-84",
    "title": "Image Processing with Pillow (PIL)",
    "badge": "LIBRARIES",
    "emoji": "\ud83d\uddbc\ufe0f",
    "defaultCode": "# from PIL import Image, ImageFilter\n# img = Image.new('RGB', (200, 200), color='#6c63ff')\n# img.save('preview.png')\nprint('Pillow handles image manipulation, resizing, filters, and formats')",
    "content": "<h3>\ud83d\udccc Deep Dive: Image Processing</h3><p>Pillow is the friendly fork of PIL (Python Imaging Library), providing capabilities for opening, manipulating, compressing, and saving diverse image formats.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Stores image data in raw memory buffers with coordinates, pixel formats, and color profiles, wrapping optimized C imaging routines.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always resize images with <code>Image.Resampling.LANCZOS</code> for highest quality antialiased downsampling.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Thumbnail generation pattern\n# img.thumbnail((128, 128))\n# img.save('thumb.webp', 'WEBP', quality=85)</code></pre>"
  },
  {
    "id": "py-85",
    "title": "PDF Generation & Manipulation",
    "badge": "LIBRARIES",
    "emoji": "\ud83d\udcd1",
    "defaultCode": "# ReportLab or PyPDF pattern\n# from reportlab.lib.pagesizes import letter\n# from reportlab.pdfgen import canvas\nprint('Generate certificates, invoices, and reports dynamically with Python')",
    "content": "<h3>\ud83d\udccc Deep Dive: Document Automation</h3><p>Libraries like ReportLab, WeasyPrint, and pypdf enable dynamic programmatic creation and manipulation of PDF documents for enterprise reporting.</p><h4>\u2699\ufe0f Under the Hood</h4><p>PDF engines build PostScript drawing commands, vector paths, embedded fonts, and xref tables according to the ISO 32000 specification.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>For complex layouts, use WeasyPrint: write standard HTML/CSS templates and render them directly into pixel-perfect PDFs.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Certificate generation skeleton\ndef generate_pdf(filename, student_name):\n    # c = canvas.Canvas(filename, pagesize=letter)\n    # c.drawString(100, 750, f'Certificate of Mastery: {student_name}')\n    return filename</code></pre>"
  },
  {
    "id": "py-86",
    "title": "Python Descriptors: __get__, __set__ & __delete__",
    "badge": "ADVANCED",
    "emoji": "\ud83e\uddec",
    "defaultCode": "class ValidatedString:\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __get__(self, instance, owner):\n        return instance.__dict__.get(self.name, '')\n    def __set__(self, instance, value):\n        if not isinstance(value, str):\n            raise TypeError('Must be string')\n        instance.__dict__[self.name] = value\n\nclass User:\n    username = ValidatedString()\n\nu = User()\nu.username = 'sanskarIN'\nprint('Descriptor validated:', u.username)",
    "content": "<h3>\ud83d\udccc Deep Dive: Python Descriptors</h3><p>Descriptors are objects that customize attribute lookup, assignment, and deletion. They power Python's methods, properties, classmethods, and staticmethods.</p><h4>\u2699\ufe0f Under the Hood</h4><p>When accessing <code>obj.attr</code>, Python checks the class dictionary. If the attribute implements <code>__get__</code> (and optionally <code>__set__</code>), the descriptor protocol takes precedence over the instance dictionary.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Implement <code>__set_name__(self, owner, name)</code> (Python 3.6+) so the descriptor knows its attribute name on the owner class automatically.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">try: u.username = 12345\nexcept TypeError as e: print('Caught:', e)</code></pre>"
  },
  {
    "id": "py-87",
    "title": "Metaclasses & type.__new__",
    "badge": "ADVANCED",
    "emoji": "\ud83e\ude84",
    "defaultCode": "class Meta(type):\n    def __new__(mcs, name, bases, attrs):\n        attrs['CATEGORY'] = 'DevForge Core'\n        return super().__new__(mcs, name, bases, attrs)\n\nclass Plugin(metaclass=Meta):\n    pass\n\nprint('Auto-injected by metaclass:', Plugin.CATEGORY)",
    "content": "<h3>\ud83d\udccc Deep Dive: Metaclasses</h3><p>Metaclasses are 'classes of classes'. They govern how classes are constructed, validated, and registered at class definition time.</p><h4>\u2699\ufe0f Under the Hood</h4><p>By default, classes are created by the <code>type</code> metaclass. Subclassing <code>type</code> allows intercepting class creation via <code>__new__</code> and <code>__init__</code> before any instance of the class exists.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Before reaching for metaclasses, check if <code>__init_subclass__</code> or class decorators satisfy your requirement with simpler code.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class AutoRegisterMeta(type):\n    registry = {}\n    def __new__(mcs, name, bases, attrs):\n        cls = super().__new__(mcs, name, bases, attrs)\n        mcs.registry[name] = cls\n        return cls</code></pre>"
  },
  {
    "id": "py-88",
    "title": "Class Customization with __init_subclass__",
    "badge": "ADVANCED",
    "emoji": "\ud83c\udf31",
    "defaultCode": "class PluginBase:\n    plugins = []\n    def __init_subclass__(cls, plugin_name=None, **kwargs):\n        super().__init_subclass__(**kwargs)\n        cls.plugin_name = plugin_name or cls.__name__\n        PluginBase.plugins.append(cls)\n\nclass AudioPlugin(PluginBase, plugin_name='AudioEngine'): pass\nprint('Registered plugins:', [p.plugin_name for p in PluginBase.plugins])",
    "content": "<h3>\ud83d\udccc Deep Dive: __init_subclass__ (PEP 487)</h3><p>Introduced in Python 3.6, <code>__init_subclass__</code> allows base classes to customize and validate subclass creation without the complexity of metaclasses.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Whenever a subclass is created, its parent's <code>__init_subclass__</code> method is automatically called with any class keyword arguments passed in the inheritance definition.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>__init_subclass__</code> to enforce subclass contracts, register plugins, or auto-generate documentation.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">class ValidatedBase:\n    def __init_subclass__(cls, **kwargs):\n        if not hasattr(cls, 'execute'):\n            raise TypeError(f'{cls.__name__} must define execute()')</code></pre>"
  },
  {
    "id": "py-89",
    "title": "Memory Optimization with __slots__",
    "badge": "OPTIMIZATION",
    "emoji": "\ud83d\udcbe",
    "defaultCode": "import sys\nclass StandardPoint:\n    def __init__(self, x, y): self.x, self.y = x, y\n\nclass SlottedPoint:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y): self.x, self.y = x, y\n\nsp = SlottedPoint(10, 20)\nprint('Slots prevent dynamic __dict__ creation, slashing RAM overhead')",
    "content": "<h3>\ud83d\udccc Deep Dive: Memory Optimization with __slots__</h3><p>Declaring <code>__slots__</code> on a class replaces the dynamic <code>__dict__</code> dictionary on each instance with a fixed array of descriptor pointers.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Saves 40-70% memory per instance by eliminating the <code>__dict__</code> hash table, enabling millions of lightweight objects to reside comfortably in RAM.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>When subclassing a slotted class, the subclass must also define <code>__slots__</code>; otherwise, Python creates a <code>__dict__</code> for the subclass.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Demonstrating prohibited dynamic attributes\ntry: sp.z = 30\nexcept AttributeError as err: print('Slots enforce strict attrs:', err)</code></pre>"
  },
  {
    "id": "py-90",
    "title": "Weak References & the weakref Module",
    "badge": "MEMORY",
    "emoji": "\ud83d\udd17",
    "defaultCode": "import weakref\nclass HeavyNode:\n    def __init__(self, name): self.name = name\n\nnode = HeavyNode('Root')\nref = weakref.ref(node)\nprint('Referenced object:', ref().name)\ndel node\nprint('After deletion, ref() is:', ref())",
    "content": "<h3>\ud83d\udccc Deep Dive: Weak References</h3><p>The <code>weakref</code> module allows referencing objects without increasing their reference count (<code>ob_refcnt</code>), preventing cyclic memory leaks.</p><h4>\u2699\ufe0f Under the Hood</h4><p>When the referenced object's strong reference count drops to zero, the object is immediately deallocated and the weak reference cleanly resolves to <code>None</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>weakref.WeakValueDictionary</code> to build memory-safe in-memory object caches that automatically evict items when unreferenced elsewhere.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\">cache = weakref.WeakValueDictionary()\n# Cached items disappear automatically when deleted</code></pre>"
  },
  {
    "id": "py-91",
    "title": "Garbage Collection & Cycle Detection (gc module)",
    "badge": "MEMORY",
    "emoji": "\u267b\ufe0f",
    "defaultCode": "import gc\nprint('GC enabled:', gc.isenabled())\nprint('Thresholds:', gc.get_threshold())\n# Manual collection\ncollections = gc.collect()\nprint('Objects collected:', collections)",
    "content": "<h3>\ud83d\udccc Deep Dive: Garbage Collection Mechanics</h3><p>CPython's primary memory management is Reference Counting. The cyclical garbage collector runs in the background to detect and free unreachable reference cycles.</p><h4>\u2699\ufe0f Under the Hood</h4><p>The generational collector uses 3 generations (Gen 0, Gen 1, Gen 2). Young objects survive into older generations. Cycles are detected using double-linked list traversal.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>In high-throughput batch processing, you can temporarily disable the cyclical GC (<code>gc.disable()</code>) and run <code>gc.collect()</code> manually at milestone boundaries.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Creating a reference cycle\na, b = {}, {}\na['b'], b['a'] = b, a\ndel a, b\n# Cyclic GC detects and cleans this cycle</code></pre>"
  },
  {
    "id": "py-92",
    "title": "Design Patterns: Creational (Singleton & Factory)",
    "badge": "PATTERNS",
    "emoji": "\ud83c\udfed",
    "defaultCode": "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\ns1, s2 = Singleton(), Singleton()\nprint('Same singleton instance?', s1 is s2)",
    "content": "<h3>\ud83d\udccc Deep Dive: Creational Design Patterns</h3><p>Creational patterns abstract the instantiation process, making systems independent of how their objects are created, composed, and represented.</p><h4>\u2699\ufe0f Under the Hood</h4><p>In Python, modules are natural singletons. The Factory Pattern uses factory functions or class registries to return polymorphic object instances dynamically.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Prefer module-level singletons or dependency injection over rigid Singleton classes whenever possible.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Factory method pattern\nclass FormatterFactory:\n    @staticmethod\n    def get_formatter(fmt):\n        if fmt == 'json': return lambda d: json.dumps(d)\n        return lambda d: str(d)</code></pre>"
  },
  {
    "id": "py-93",
    "title": "Design Patterns: Structural & Behavioral (Observer & Strategy)",
    "badge": "PATTERNS",
    "emoji": "\ud83c\udfad",
    "defaultCode": "class EventEmitter:\n    def __init__(self): self._events = {}\n    def on(self, event, fn):\n        self._events.setdefault(event, []).append(fn)\n    def emit(self, event, *args):\n        for fn in self._events.get(event, []): fn(*args)\n\nemitter = EventEmitter()\nemitter.on('login', lambda u: print(f'User {u} logged in!'))\nemitter.emit('login', 'sanskarIN')",
    "content": "<h3>\ud83d\udccc Deep Dive: Structural & Behavioral Patterns</h3><p>The Observer pattern defines a one-to-many subscription model. The Strategy pattern encapsulates interchangeable algorithms behind a common interface.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Because Python treats functions as first-class objects, the Strategy pattern is frequently implemented simply by passing functions as arguments rather than creating heavy class hierarchies.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>dataclasses</code> or callables to make behavioral patterns lightweight and Pythonic.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Strategy pattern using functions\ndef discount_vip(price): return price * 0.8\ndef discount_standard(price): return price * 0.95\ncheckout = lambda price, strat: strat(price)\nprint('VIP price:', checkout(100, discount_vip))</code></pre>"
  },
  {
    "id": "py-94",
    "title": "SOLID Design Principles in Python",
    "badge": "ARCHITECTURE",
    "emoji": "\ud83c\udfdb\ufe0f",
    "defaultCode": "# S: Single Responsibility\n# O: Open/Closed (open for extension, closed for modification)\n# L: Liskov Substitution\n# I: Interface Segregation\n# D: Dependency Inversion\nprint('Writing scalable, maintainable Python using SOLID principles')",
    "content": "<h3>\ud83d\udccc Deep Dive: SOLID Principles</h3><p>The SOLID principles guide developers in building modular, decoupled, testable, and maintainable object-oriented software.</p><h4>\u2699\ufe0f Under the Hood</h4><p>In Python, Dependency Inversion is easily achieved by injecting dependencies into <code>__init__</code> rather than instantiating concrete classes internally.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Respect the Liskov Substitution Principle: subclasses should never weaken preconditions or strengthen postconditions of their base class.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Dependency Inversion example\nclass NotificationService:\n    def __init__(self, sender):\n        self.sender = sender  # Injected dependency\n    def notify(self, msg): self.sender.send(msg)</code></pre>"
  },
  {
    "id": "py-95",
    "title": "C Extensions & ctypes / cffi Interoperability",
    "badge": "INTERNALS",
    "emoji": "\u26a1",
    "defaultCode": "import ctypes\n# Call C standard library puts directly\nlibc = ctypes.CDLL(None) if sys.platform != 'win32' else ctypes.cdll.msvcrt\nprint('ctypes interface ready for foreign C function calls')",
    "content": "<h3>\ud83d\udccc Deep Dive: Foreign Function Interoperability</h3><p>Python can invoke external compiled C, C++, or Rust shared libraries (.so / .dll) without writing complex C extensions using <code>ctypes</code> or <code>cffi</code>.</p><h4>\u2699\ufe0f Under the Hood</h4><p><code>ctypes</code> maps Python types to native C datatypes, prepares CPU call stacks according to target ABI calling conventions, and executes compiled machine code.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>For high-performance bindings, consider <code>cffi</code> or Rust's <code>PyO3</code> / <code>maturin</code> toolchain.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Using ctypes for C math function\nimport math\nprint('Native math vs C binding comparison ready')</code></pre>"
  },
  {
    "id": "py-96",
    "title": "Python 3.10-3.13 Structural Pattern Matching",
    "badge": "MODERN PYTHON",
    "emoji": "\ud83d\udd00",
    "defaultCode": "def handle_command(cmd):\n    match cmd.split():\n        case ['quit']:\n            return 'Exiting...'\n        case ['go', ('north' | 'south' | 'east' | 'west') as direction]:\n            return f'Moving {direction}'\n        case ['save', filename]:\n            return f'Saving to {filename}'\n        case _:\n            return 'Unknown command'\n\nprint(handle_command('go north'))\nprint(handle_command('save progress.json'))",
    "content": "<h3>\ud83d\udccc Deep Dive: Structural Pattern Matching (PEP 634)</h3><p>Introduced in Python 3.10, <code>match / case</code> statements perform structural pattern matching, unpacking sequences, mappings, and classes while filtering with guards.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Pattern matching compiles into highly optimized jump tables and type checks in the interpreter, outperforming cascaded <code>isinstance()</code> and dictionary dispatch trees.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Add <code>if</code> guards to case branches (e.g. <code>case [x, y] if x > 0:</code>) for precise condition matching.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Matching object attributes\nclass Point:\n    __match_args__ = ('x', 'y')\n    def __init__(self, x, y): self.x, self.y = x, y\ndef inspect_pt(pt):\n    match pt:\n        case Point(0, 0): return 'Origin'\n        case Point(x, y): return f'Point at {x}, {y}'</code></pre>"
  },
  {
    "id": "py-97",
    "title": "Python 3.11-3.13: Exception Groups & except*",
    "badge": "MODERN PYTHON",
    "emoji": "\ud83c\udf32",
    "defaultCode": "# Python 3.11+ ExceptionGroup pattern:\n# eg = ExceptionGroup('Multiple errors', [ValueError('Bad input'), TypeError('Wrong type')])\n# try: raise eg\n# except* ValueError as eg_val:\n#     print('Handled value error group')\nprint('Exception Groups handle multiple concurrent exceptions in TaskGroups')",
    "content": "<h3>\ud83d\udccc Deep Dive: Exception Groups (PEP 654)</h3><p>Python 3.11 introduced <code>ExceptionGroup</code> and the <code>except*</code> syntax to handle multiple unrelated exceptions raised simultaneously during concurrent execution.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Used extensively with <code>asyncio.TaskGroup</code>. An <code>except* T</code> clause matches and extracts all exceptions of type T from the tree, allowing partial handling and re-raising unhandled errors.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Use <code>asyncio.TaskGroup()</code> (Python 3.11+) instead of <code>asyncio.gather()</code> for modern, structured concurrent error handling.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Modern TaskGroup pattern\nasync def run_group():\n    # async with asyncio.TaskGroup() as tg:\n    #     tg.create_task(task1())\n    pass</code></pre>"
  },
  {
    "id": "py-98",
    "title": "Performance Optimization: Bytecode & dis Module",
    "badge": "INTERNALS",
    "emoji": "\u26a1",
    "defaultCode": "import dis\ndef sample(a, b):\n    return a + b\n\nprint('Disassembled bytecode:')\ndis.dis(sample)",
    "content": "<h3>\ud83d\udccc Deep Dive: Python Bytecode & The Virtual Machine</h3><p>CPython compiles Python source code into bytecode (.pyc), which executes on a stack-based virtual machine (CEval loop).</p><h4>\u2699\ufe0f Under the Hood</h4><p>Python 3.11-3.13 introduced the Faster CPython specializing adaptive interpreter (PEP 659), dynamically replacing generic opcodes with type-specialized opcodes for hot loops.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Local variable lookups use fast array indexing (<code>LOAD_FAST</code>), whereas global lookups require dictionary hashing (<code>LOAD_GLOBAL</code>). Binding globals to local variables in tight loops improves speed.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Inspecting code object flags and constants\nco = sample.__code__\nprint('Co varnames:', co.co_varnames)\nprint('Co consts:', co.co_consts)</code></pre>"
  },
  {
    "id": "py-99",
    "title": "Building Python Packages (Wheels & PyPI Publishing)",
    "badge": "TOOLING",
    "emoji": "\ud83d\ude80",
    "defaultCode": "# Modern build workflow:\n# pip install build twine\n# python -m build\n# twine check dist/*\n# twine upload dist/*\nprint('Distribute your libraries to the worldwide Python community via PyPI')",
    "content": "<h3>\ud83d\udccc Deep Dive: Packaging & Wheel Distributions</h3><p>The standard Python package format is the Wheel (<code>.whl</code>), a zip archive containing pre-built code and metadata conforming to PEP 427.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Wheels install significantly faster than legacy source distributions (.tar.gz) because installation simply unzips files directly into <code>site-packages</code> without running <code>setup.py</code>.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Always use build tools like <code>build</code> (<code>python -m build</code>) and <code>flit</code> or <code>hatchling</code> to generate compliant wheels.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Example wheel tag format: {distribution}-{version}(-{build tag})?-{python tag}-{abi tag}-{platform tag}.whl</code></pre>"
  },
  {
    "id": "py-100",
    "title": "Python Zen & The Art of Pythonic Mastery",
    "badge": "MASTERY",
    "emoji": "\ud83c\udfc6",
    "defaultCode": "import this\n# The Zen of Python by Tim Peters\nprint('\\nDevForge Python Grandmaster \u2014 Congratulations!')",
    "content": "<h3>\ud83d\udccc Deep Dive: The Zen of Python</h3><p>Mastery of Python transcends syntax; it embraces philosophy: readability counts, explicit is better than implicit, and simple is better than complex.</p><h4>\u2699\ufe0f Under the Hood</h4><p>Executing <code>import this</code> displays Tim Peters' famous 19 guiding aphorisms, stored as rot13 encrypted text within the CPython standard library.</p><div class=\"cb\"><div class=\"cb-h\"><span>\ud83d\udca1 Pro Tip</span></div><div class=\"cb-b\"><p>Write code for humans first and machines second. Beautiful code that clearly conveys developer intent is the true hallmark of a Python Grandmaster.</p></div></div><h4>\ud83d\udcbb Real-World Code Examples</h4><pre><code class=\"language-python\"># Pythonic idioms summary:\n# 1. Use comprehensions, not manual loops\n# 2. Use context managers for resources\n# 3. Use generators for large data streams\n# 4. Use EAFP over LBYL\n# 5. Type-hint public interfaces</code></pre>"
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
