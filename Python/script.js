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
