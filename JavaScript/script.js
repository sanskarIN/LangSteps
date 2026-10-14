// JavaScript Mastery Data
const TAGS = [
    {
        id: 'js-generators',
        title: 'Generators',
        badge: 'ES6+',
        emoji: '⚙️',
        defaultCode: `function* gen() { yield 1; yield 2; }
const g = gen();
console.log(g.next().value);`,
        content: `
    <h3>📌 Deep Dive: Generators</h3>
    <p>The <strong>Generators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Generators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Generators
console.log("Initializing Generators...");

try {
  // Using the core concept
  function* gen() { yield 1; yield 2; }
const g = gen();
console.log(g.next().value);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Generators:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-iterators',
        title: 'Iterators',
        badge: 'ES6+',
        emoji: '🔄',
        defaultCode: `const arr = [1,2];
const it = arr[Symbol.iterator]();
console.log(it.next());`,
        content: `
    <h3>📌 Deep Dive: Iterators</h3>
    <p>The <strong>Iterators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Iterators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Iterators
console.log("Initializing Iterators...");

try {
  // Using the core concept
  const arr = [1,2];
const it = arr[Symbol.iterator]();
console.log(it.next());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Iterators:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-proxy',
        title: 'Proxy API',
        badge: 'ADVANCED',
        emoji: '🛡️',
        defaultCode: `const target = {};
const proxy = new Proxy(target, { set: (obj, prop, val) => { obj[prop] = val; return true; } });
proxy.a = 1;`,
        content: `
    <h3>📌 Deep Dive: Proxy API</h3>
    <p>The <strong>Proxy API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Proxy API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Proxy API
console.log("Initializing Proxy API...");

try {
  // Using the core concept
  const target = {};
const proxy = new Proxy(target, { set: (obj, prop, val) => { obj[prop] = val; return true; } });
proxy.a = 1;
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Proxy API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reflect',
        title: 'Reflect API',
        badge: 'ADVANCED',
        emoji: '🪞',
        defaultCode: `const obj = {x: 1};
Reflect.set(obj, "y", 2);
console.log(obj.y);`,
        content: `
    <h3>📌 Deep Dive: Reflect API</h3>
    <p>The <strong>Reflect API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Reflect API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Reflect API
console.log("Initializing Reflect API...");

try {
  // Using the core concept
  const obj = {x: 1};
Reflect.set(obj, "y", 2);
console.log(obj.y);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Reflect API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intl',
        title: 'Intl API',
        badge: 'API',
        emoji: '🌍',
        defaultCode: `console.log(new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(100));`,
        content: `
    <h3>📌 Deep Dive: Intl API</h3>
    <p>The <strong>Intl API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Intl API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Intl API
console.log("Initializing Intl API...");

try {
  // Using the core concept
  console.log(new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(100));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Intl API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-canvas',
        title: 'Canvas API',
        badge: 'API',
        emoji: '🎨',
        defaultCode: `/* Requires HTML canvas */
// const ctx = canvas.getContext("2d");
// ctx.fillRect(0,0,10,10);`,
        content: `
    <h3>📌 Deep Dive: Canvas API</h3>
    <p>The <strong>Canvas API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Canvas API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Canvas API
console.log("Initializing Canvas API...");

try {
  // Using the core concept
  /* Requires HTML canvas */
// const ctx = canvas.getContext("2d");
// ctx.fillRect(0,0,10,10);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Canvas API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-geolocation',
        title: 'Geolocation API',
        badge: 'API',
        emoji: '📍',
        defaultCode: `navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));`,
        content: `
    <h3>📌 Deep Dive: Geolocation API</h3>
    <p>The <strong>Geolocation API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Geolocation API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Geolocation API
console.log("Initializing Geolocation API...");

try {
  // Using the core concept
  navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Geolocation API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webrtc',
        title: 'WebRTC',
        badge: 'API',
        emoji: '🎥',
        defaultCode: `const pc = new RTCPeerConnection();
console.log(pc);`,
        content: `
    <h3>📌 Deep Dive: WebRTC</h3>
    <p>The <strong>WebRTC</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebRTC</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebRTC
console.log("Initializing WebRTC...");

try {
  // Using the core concept
  const pc = new RTCPeerConnection();
console.log(pc);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebRTC:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-websockets',
        title: 'WebSockets',
        badge: 'API',
        emoji: '🔌',
        defaultCode: `/* const ws = new WebSocket("ws://url"); */`,
        content: `
    <h3>📌 Deep Dive: WebSockets</h3>
    <p>The <strong>WebSockets</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebSockets</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebSockets
console.log("Initializing WebSockets...");

try {
  // Using the core concept
  /* const ws = new WebSocket("ws://url"); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebSockets:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-serviceworkers',
        title: 'Service Workers',
        badge: 'PWA',
        emoji: '🛠️',
        defaultCode: `/* navigator.serviceWorker.register("/sw.js"); */`,
        content: `
    <h3>📌 Deep Dive: Service Workers</h3>
    <p>The <strong>Service Workers</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Service Workers</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Service Workers
console.log("Initializing Service Workers...");

try {
  // Using the core concept
  /* navigator.serviceWorker.register("/sw.js"); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Service Workers:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-indexeddb',
        title: 'IndexedDB',
        badge: 'API',
        emoji: '🗄️',
        defaultCode: `const req = indexedDB.open("MyDB", 1);`,
        content: `
    <h3>📌 Deep Dive: IndexedDB</h3>
    <p>The <strong>IndexedDB</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IndexedDB</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IndexedDB
console.log("Initializing IndexedDB...");

try {
  // Using the core concept
  const req = indexedDB.open("MyDB", 1);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IndexedDB:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-mutationobserver',
        title: 'MutationObserver',
        badge: 'DOM',
        emoji: '👁️',
        defaultCode: `const obs = new MutationObserver(m => console.log(m));`,
        content: `
    <h3>📌 Deep Dive: MutationObserver</h3>
    <p>The <strong>MutationObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>MutationObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of MutationObserver
console.log("Initializing MutationObserver...");

try {
  // Using the core concept
  const obs = new MutationObserver(m => console.log(m));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing MutationObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intersectionobserver',
        title: 'IntersectionObserver',
        badge: 'DOM',
        emoji: '🚦',
        defaultCode: `const obs = new IntersectionObserver(e => console.log(e));`,
        content: `
    <h3>📌 Deep Dive: IntersectionObserver</h3>
    <p>The <strong>IntersectionObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IntersectionObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IntersectionObserver
console.log("Initializing IntersectionObserver...");

try {
  // Using the core concept
  const obs = new IntersectionObserver(e => console.log(e));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IntersectionObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-resizeobserver',
        title: 'ResizeObserver',
        badge: 'DOM',
        emoji: '📐',
        defaultCode: `const obs = new ResizeObserver(e => console.log(e));`,
        content: `
    <h3>📌 Deep Dive: ResizeObserver</h3>
    <p>The <strong>ResizeObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>ResizeObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of ResizeObserver
console.log("Initializing ResizeObserver...");

try {
  // Using the core concept
  const obs = new ResizeObserver(e => console.log(e));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing ResizeObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-performance',
        title: 'Performance API',
        badge: 'API',
        emoji: '⏱️',
        defaultCode: `console.log(performance.now());`,
        content: `
    <h3>📌 Deep Dive: Performance API</h3>
    <p>The <strong>Performance API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Performance API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Performance API
console.log("Initializing Performance API...");

try {
  // Using the core concept
  console.log(performance.now());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Performance API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webcrypto',
        title: 'Web Crypto API',
        badge: 'API',
        emoji: '🔐',
        defaultCode: `const arr = new Uint8Array(10);
crypto.getRandomValues(arr);
console.log(arr);`,
        content: `
    <h3>📌 Deep Dive: Web Crypto API</h3>
    <p>The <strong>Web Crypto API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Web Crypto API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Web Crypto API
console.log("Initializing Web Crypto API...");

try {
  // Using the core concept
  const arr = new Uint8Array(10);
crypto.getRandomValues(arr);
console.log(arr);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Web Crypto API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webgl',
        title: 'WebGL',
        badge: 'API',
        emoji: '🧊',
        defaultCode: `/* const gl = canvas.getContext("webgl"); */`,
        content: `
    <h3>📌 Deep Dive: WebGL</h3>
    <p>The <strong>WebGL</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebGL</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebGL
console.log("Initializing WebGL...");

try {
  // Using the core concept
  /* const gl = canvas.getContext("webgl"); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebGL:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-fileapi',
        title: 'File API',
        badge: 'API',
        emoji: '📁',
        defaultCode: `/* const reader = new FileReader(); */`,
        content: `
    <h3>📌 Deep Dive: File API</h3>
    <p>The <strong>File API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>File API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of File API
console.log("Initializing File API...");

try {
  // Using the core concept
  /* const reader = new FileReader(); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing File API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-dragdrop',
        title: 'Drag & Drop',
        badge: 'DOM',
        emoji: '🖱️',
        defaultCode: `/* element.addEventListener("dragstart", ...); */`,
        content: `
    <h3>📌 Deep Dive: Drag & Drop</h3>
    <p>The <strong>Drag & Drop</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Drag & Drop</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Drag & Drop
console.log("Initializing Drag & Drop...");

try {
  // Using the core concept
  /* element.addEventListener("dragstart", ...); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Drag & Drop:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-history',
        title: 'History API',
        badge: 'API',
        emoji: '⏪',
        defaultCode: `history.pushState({page: 1}, "title", "?page=1");`,
        content: `
    <h3>📌 Deep Dive: History API</h3>
    <p>The <strong>History API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>History API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of History API
console.log("Initializing History API...");

try {
  // Using the core concept
  history.pushState({page: 1}, "title", "?page=1");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing History API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-singleton',
        title: 'Singleton Pattern',
        badge: 'DESIGN',
        emoji: '1️⃣',
        defaultCode: `class Singleton {
  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }
}`,
        content: `
    <h3>📌 Deep Dive: Singleton Pattern</h3>
    <p>The <strong>Singleton Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Singleton Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Singleton Pattern
console.log("Initializing Singleton Pattern...");

try {
  // Using the core concept
  class Singleton {
  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Singleton Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-factory',
        title: 'Factory Pattern',
        badge: 'DESIGN',
        emoji: '🏭',
        defaultCode: `class Factory {
  static create(type) { return new type(); }
}`,
        content: `
    <h3>📌 Deep Dive: Factory Pattern</h3>
    <p>The <strong>Factory Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Factory Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Factory Pattern
console.log("Initializing Factory Pattern...");

try {
  // Using the core concept
  class Factory {
  static create(type) { return new type(); }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Factory Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-observer',
        title: 'Observer Pattern',
        badge: 'DESIGN',
        emoji: '👀',
        defaultCode: `class Subject {
  constructor() { this.obs = []; }
  notify() { this.obs.forEach(o => o.update()); }
}`,
        content: `
    <h3>📌 Deep Dive: Observer Pattern</h3>
    <p>The <strong>Observer Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Observer Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Observer Pattern
console.log("Initializing Observer Pattern...");

try {
  // Using the core concept
  class Subject {
  constructor() { this.obs = []; }
  notify() { this.obs.forEach(o => o.update()); }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Observer Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-decorator',
        title: 'Decorator Pattern',
        badge: 'DESIGN',
        emoji: '🎀',
        defaultCode: `function decorate(obj) { obj.decorated = true; return obj; }`,
        content: `
    <h3>📌 Deep Dive: Decorator Pattern</h3>
    <p>The <strong>Decorator Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Decorator Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Decorator Pattern
console.log("Initializing Decorator Pattern...");

try {
  // Using the core concept
  function decorate(obj) { obj.decorated = true; return obj; }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Decorator Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-facade',
        title: 'Facade Pattern',
        badge: 'DESIGN',
        emoji: '🏛️',
        defaultCode: `class Facade {
  static simple() { ComplexAPI.doA(); ComplexAPI.doB(); }
}`,
        content: `
    <h3>📌 Deep Dive: Facade Pattern</h3>
    <p>The <strong>Facade Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Facade Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Facade Pattern
console.log("Initializing Facade Pattern...");

try {
  // Using the core concept
  class Facade {
  static simple() { ComplexAPI.doA(); ComplexAPI.doB(); }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Facade Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-modulepattern',
        title: 'Module Pattern',
        badge: 'DESIGN',
        emoji: '📦',
        defaultCode: `const Module = (function() {
  let privateVar = 1;
  return { get: () => privateVar };
})();`,
        content: `
    <h3>📌 Deep Dive: Module Pattern</h3>
    <p>The <strong>Module Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Module Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Module Pattern
console.log("Initializing Module Pattern...");

try {
  // Using the core concept
  const Module = (function() {
  let privateVar = 1;
  return { get: () => privateVar };
})();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Module Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-currying',
        title: 'Currying',
        badge: 'FUNCTIONAL',
        emoji: '🍛',
        defaultCode: `const add = a => b => a + b;
console.log(add(1)(2));`,
        content: `
    <h3>📌 Deep Dive: Currying</h3>
    <p>The <strong>Currying</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Currying</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Currying
console.log("Initializing Currying...");

try {
  // Using the core concept
  const add = a => b => a + b;
console.log(add(1)(2));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Currying:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-composition',
        title: 'Composition',
        badge: 'FUNCTIONAL',
        emoji: '🧩',
        defaultCode: `const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);`,
        content: `
    <h3>📌 Deep Dive: Composition</h3>
    <p>The <strong>Composition</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Composition</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Composition
console.log("Initializing Composition...");

try {
  // Using the core concept
  const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Composition:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-memoization',
        title: 'Memoization',
        badge: 'PERFORMANCE',
        emoji: '🧠',
        defaultCode: `const memo = {};
function calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }`,
        content: `
    <h3>📌 Deep Dive: Memoization</h3>
    <p>The <strong>Memoization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Memoization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Memoization
console.log("Initializing Memoization...");

try {
  // Using the core concept
  const memo = {};
function calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Memoization:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-tailcall',
        title: 'Tail Call Optimization',
        badge: 'PERFORMANCE',
        emoji: '🐍',
        defaultCode: `function fact(n, acc=1) { if(n<=1) return acc; return fact(n-1, n*acc); }`,
        content: `
    <h3>📌 Deep Dive: Tail Call Optimization</h3>
    <p>The <strong>Tail Call Optimization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Tail Call Optimization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Tail Call Optimization
console.log("Initializing Tail Call Optimization...");

try {
  // Using the core concept
  function fact(n, acc=1) { if(n<=1) return acc; return fact(n-1, n*acc); }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Tail Call Optimization:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webassembly',
        title: 'WebAssembly',
        badge: 'API',
        emoji: '🚀',
        defaultCode: `/* WebAssembly.instantiateStreaming(fetch("app.wasm")); */`,
        content: `
    <h3>📌 Deep Dive: WebAssembly</h3>
    <p>The <strong>WebAssembly</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebAssembly</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebAssembly
console.log("Initializing WebAssembly...");

try {
  // Using the core concept
  /* WebAssembly.instantiateStreaming(fetch("app.wasm")); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebAssembly:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-sharedarraybuffer',
        title: 'SharedArrayBuffer',
        badge: 'ADVANCED',
        emoji: '🧮',
        defaultCode: `const sab = new SharedArrayBuffer(1024);
console.log(sab);`,
        content: `
    <h3>📌 Deep Dive: SharedArrayBuffer</h3>
    <p>The <strong>SharedArrayBuffer</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>SharedArrayBuffer</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of SharedArrayBuffer
console.log("Initializing SharedArrayBuffer...");

try {
  // Using the core concept
  const sab = new SharedArrayBuffer(1024);
console.log(sab);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing SharedArrayBuffer:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-atomics',
        title: 'Atomics',
        badge: 'ADVANCED',
        emoji: '⚛️',
        defaultCode: `const sab = new SharedArrayBuffer(1024);
const view = new Int32Array(sab);
Atomics.add(view, 0, 5);`,
        content: `
    <h3>📌 Deep Dive: Atomics</h3>
    <p>The <strong>Atomics</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Atomics</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Atomics
console.log("Initializing Atomics...");

try {
  // Using the core concept
  const sab = new SharedArrayBuffer(1024);
const view = new Int32Array(sab);
Atomics.add(view, 0, 5);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Atomics:", error);
}
    </code></pre>
    `
    },

    {
        id: 'js-padstart',
        title: 'String.prototype.padStart()',
        badge: 'ES8',
        emoji: '📝',
        defaultCode: `const str = "5";
console.log(str.padStart(3, "0")); // "005"`,
        content: `
    <h3>📌 Deep Dive: String.prototype.padStart()</h3>
    <p>The <strong>String.prototype.padStart()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.padStart()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.padStart()
console.log("Initializing String.prototype.padStart()...");

try {
  // Using the core concept
  const str = "5";
console.log(str.padStart(3, "0")); // "005"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.padStart():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-padend',
        title: 'String.prototype.padEnd()',
        badge: 'ES8',
        emoji: '📝',
        defaultCode: `const str = "5";
console.log(str.padEnd(3, "0")); // "500"`,
        content: `
    <h3>📌 Deep Dive: String.prototype.padEnd()</h3>
    <p>The <strong>String.prototype.padEnd()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.padEnd()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.padEnd()
console.log("Initializing String.prototype.padEnd()...");

try {
  // Using the core concept
  const str = "5";
console.log(str.padEnd(3, "0")); // "500"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.padEnd():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-startswith',
        title: 'String.prototype.startsWith()',
        badge: 'ES6',
        emoji: '📝',
        defaultCode: `const str = "Hello World";
console.log(str.startsWith("Hello")); // true`,
        content: `
    <h3>📌 Deep Dive: String.prototype.startsWith()</h3>
    <p>The <strong>String.prototype.startsWith()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.startsWith()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.startsWith()
console.log("Initializing String.prototype.startsWith()...");

try {
  // Using the core concept
  const str = "Hello World";
console.log(str.startsWith("Hello")); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.startsWith():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-endswith',
        title: 'String.prototype.endsWith()',
        badge: 'ES6',
        emoji: '📝',
        defaultCode: `const str = "Hello World";
console.log(str.endsWith("World")); // true`,
        content: `
    <h3>📌 Deep Dive: String.prototype.endsWith()</h3>
    <p>The <strong>String.prototype.endsWith()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.endsWith()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.endsWith()
console.log("Initializing String.prototype.endsWith()...");

try {
  // Using the core concept
  const str = "Hello World";
console.log(str.endsWith("World")); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.endsWith():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-includes-string',
        title: 'String.prototype.includes()',
        badge: 'ES6',
        emoji: '🔍',
        defaultCode: `const str = "JavaScript";
console.log(str.includes("Script")); // true`,
        content: `
    <h3>📌 Deep Dive: String.prototype.includes()</h3>
    <p>The <strong>String.prototype.includes()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.includes()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.includes()
console.log("Initializing String.prototype.includes()...");

try {
  // Using the core concept
  const str = "JavaScript";
console.log(str.includes("Script")); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.includes():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-matchall',
        title: 'String.prototype.matchAll()',
        badge: 'ES10',
        emoji: '🔍',
        defaultCode: `const str = "t1 t2";
const matches = [...str.matchAll(/t(\d)/g)];
console.log(matches[0][1]); // "1"`,
        content: `
    <h3>📌 Deep Dive: String.prototype.matchAll()</h3>
    <p>The <strong>String.prototype.matchAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.matchAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.matchAll()
console.log("Initializing String.prototype.matchAll()...");

try {
  // Using the core concept
  const str = "t1 t2";
const matches = [...str.matchAll(/t(\d)/g)];
console.log(matches[0][1]); // "1"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.matchAll():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-replaceall',
        title: 'String.prototype.replaceAll()',
        badge: 'ES12',
        emoji: '🔄',
        defaultCode: `const str = "a-b-c";
console.log(str.replaceAll("-", "+")); // "a+b+c"`,
        content: `
    <h3>📌 Deep Dive: String.prototype.replaceAll()</h3>
    <p>The <strong>String.prototype.replaceAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.replaceAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.replaceAll()
console.log("Initializing String.prototype.replaceAll()...");

try {
  // Using the core concept
  const str = "a-b-c";
console.log(str.replaceAll("-", "+")); // "a+b+c"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.replaceAll():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-flat',
        title: 'Array.prototype.flat()',
        badge: 'ES10',
        emoji: '🥞',
        defaultCode: `const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.flat()</h3>
    <p>The <strong>Array.prototype.flat()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.flat()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.flat()
console.log("Initializing Array.prototype.flat()...");

try {
  // Using the core concept
  const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.flat():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-flatmap',
        title: 'Array.prototype.flatMap()',
        badge: 'ES10',
        emoji: '🗺️',
        defaultCode: `const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x*2])); // [1, 2, 2, 4, 3, 6]`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.flatMap()</h3>
    <p>The <strong>Array.prototype.flatMap()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.flatMap()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.flatMap()
console.log("Initializing Array.prototype.flatMap()...");

try {
  // Using the core concept
  const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x*2])); // [1, 2, 2, 4, 3, 6]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.flatMap():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-copywithin',
        title: 'Array.prototype.copyWithin()',
        badge: 'ES6',
        emoji: '📋',
        defaultCode: `const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.copyWithin()</h3>
    <p>The <strong>Array.prototype.copyWithin()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.copyWithin()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.copyWithin()
console.log("Initializing Array.prototype.copyWithin()...");

try {
  // Using the core concept
  const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.copyWithin():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-fill',
        title: 'Array.prototype.fill()',
        badge: 'ES6',
        emoji: '🪣',
        defaultCode: `const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.fill()</h3>
    <p>The <strong>Array.prototype.fill()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.fill()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.fill()
console.log("Initializing Array.prototype.fill()...");

try {
  // Using the core concept
  const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.fill():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-findlast',
        title: 'Array.prototype.findLast()',
        badge: 'ES13',
        emoji: '🔍',
        defaultCode: `const arr = [5, 12, 8, 130, 44];
console.log(arr.findLast(n => n > 10)); // 44`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.findLast()</h3>
    <p>The <strong>Array.prototype.findLast()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.findLast()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.findLast()
console.log("Initializing Array.prototype.findLast()...");

try {
  // Using the core concept
  const arr = [5, 12, 8, 130, 44];
console.log(arr.findLast(n => n > 10)); // 44
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.findLast():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-findlastindex',
        title: 'Array.prototype.findLastIndex()',
        badge: 'ES13',
        emoji: '🔍',
        defaultCode: `const arr = [5, 12, 8, 130, 44];
console.log(arr.findLastIndex(n => n > 10)); // 4`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.findLastIndex()</h3>
    <p>The <strong>Array.prototype.findLastIndex()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.findLastIndex()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.findLastIndex()
console.log("Initializing Array.prototype.findLastIndex()...");

try {
  // Using the core concept
  const arr = [5, 12, 8, 130, 44];
console.log(arr.findLastIndex(n => n > 10)); // 4
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.findLastIndex():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reduceright',
        title: 'Array.prototype.reduceRight()',
        badge: 'ES5',
        emoji: '⬅️',
        defaultCode: `const arr = ["a", "b", "c"];
console.log(arr.reduceRight((acc, cur) => acc + cur)); // "cba"`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.reduceRight()</h3>
    <p>The <strong>Array.prototype.reduceRight()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.reduceRight()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.reduceRight()
console.log("Initializing Array.prototype.reduceRight()...");

try {
  // Using the core concept
  const arr = ["a", "b", "c"];
console.log(arr.reduceRight((acc, cur) => acc + cur)); // "cba"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.reduceRight():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-from',
        title: 'Array.from()',
        badge: 'ES6',
        emoji: '🪄',
        defaultCode: `const set = new Set(["a", "b"]);
console.log(Array.from(set)); // ["a", "b"]`,
        content: `
    <h3>📌 Deep Dive: Array.from()</h3>
    <p>The <strong>Array.from()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.from()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.from()
console.log("Initializing Array.from()...");

try {
  // Using the core concept
  const set = new Set(["a", "b"]);
console.log(Array.from(set)); // ["a", "b"]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.from():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-isarray',
        title: 'Array.isArray()',
        badge: 'ES5',
        emoji: '❓',
        defaultCode: `console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray({})); // false`,
        content: `
    <h3>📌 Deep Dive: Array.isArray()</h3>
    <p>The <strong>Array.isArray()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.isArray()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.isArray()
console.log("Initializing Array.isArray()...");

try {
  // Using the core concept
  console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray({})); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.isArray():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-entries',
        title: 'Array.prototype.entries()',
        badge: 'ES6',
        emoji: '📜',
        defaultCode: `const arr = ["a", "b"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.entries()</h3>
    <p>The <strong>Array.prototype.entries()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.entries()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.entries()
console.log("Initializing Array.prototype.entries()...");

try {
  // Using the core concept
  const arr = ["a", "b"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.entries():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-sign',
        title: 'Math.sign()',
        badge: 'ES6',
        emoji: '➕',
        defaultCode: `console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1`,
        content: `
    <h3>📌 Deep Dive: Math.sign()</h3>
    <p>The <strong>Math.sign()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.sign()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.sign()
console.log("Initializing Math.sign()...");

try {
  // Using the core concept
  console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.sign():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-trunc',
        title: 'Math.trunc()',
        badge: 'ES6',
        emoji: '✂️',
        defaultCode: `console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(-0.123)); // -0`,
        content: `
    <h3>📌 Deep Dive: Math.trunc()</h3>
    <p>The <strong>Math.trunc()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.trunc()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.trunc()
console.log("Initializing Math.trunc()...");

try {
  // Using the core concept
  console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(-0.123)); // -0
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.trunc():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-cbrt',
        title: 'Math.cbrt()',
        badge: 'ES6',
        emoji: '🧊',
        defaultCode: `console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(64)); // 4`,
        content: `
    <h3>📌 Deep Dive: Math.cbrt()</h3>
    <p>The <strong>Math.cbrt()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.cbrt()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.cbrt()
console.log("Initializing Math.cbrt()...");

try {
  // Using the core concept
  console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(64)); // 4
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.cbrt():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-hypot',
        title: 'Math.hypot()',
        badge: 'ES6',
        emoji: '📐',
        defaultCode: `console.log(Math.hypot(3, 4)); // 5`,
        content: `
    <h3>📌 Deep Dive: Math.hypot()</h3>
    <p>The <strong>Math.hypot()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.hypot()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.hypot()
console.log("Initializing Math.hypot()...");

try {
  // Using the core concept
  console.log(Math.hypot(3, 4)); // 5
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.hypot():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-imul',
        title: 'Math.imul()',
        badge: 'ES6',
        emoji: '✖️',
        defaultCode: `console.log(Math.imul(2, 4)); // 8`,
        content: `
    <h3>📌 Deep Dive: Math.imul()</h3>
    <p>The <strong>Math.imul()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.imul()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.imul()
console.log("Initializing Math.imul()...");

try {
  // Using the core concept
  console.log(Math.imul(2, 4)); // 8
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.imul():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-number-isfinite',
        title: 'Number.isFinite()',
        badge: 'ES6',
        emoji: '🔢',
        defaultCode: `console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false`,
        content: `
    <h3>📌 Deep Dive: Number.isFinite()</h3>
    <p>The <strong>Number.isFinite()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.isFinite()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.isFinite()
console.log("Initializing Number.isFinite()...");

try {
  // Using the core concept
  console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.isFinite():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-number-isinteger',
        title: 'Number.isInteger()',
        badge: 'ES6',
        emoji: '🔢',
        defaultCode: `console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false`,
        content: `
    <h3>📌 Deep Dive: Number.isInteger()</h3>
    <p>The <strong>Number.isInteger()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.isInteger()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.isInteger()
console.log("Initializing Number.isInteger()...");

try {
  // Using the core concept
  console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.isInteger():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-number-isnan',
        title: 'Number.isNaN()',
        badge: 'ES6',
        emoji: '❓',
        defaultCode: `console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false`,
        content: `
    <h3>📌 Deep Dive: Number.isNaN()</h3>
    <p>The <strong>Number.isNaN()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.isNaN()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.isNaN()
console.log("Initializing Number.isNaN()...");

try {
  // Using the core concept
  console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.isNaN():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-number-issafeinteger',
        title: 'Number.isSafeInteger()',
        badge: 'ES6',
        emoji: '🔒',
        defaultCode: `console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false`,
        content: `
    <h3>📌 Deep Dive: Number.isSafeInteger()</h3>
    <p>The <strong>Number.isSafeInteger()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.isSafeInteger()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.isSafeInteger()
console.log("Initializing Number.isSafeInteger()...");

try {
  // Using the core concept
  console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.isSafeInteger():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-max-safe-integer',
        title: 'Number.MAX_SAFE_INTEGER',
        badge: 'ES6',
        emoji: '🔝',
        defaultCode: `console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991`,
        content: `
    <h3>📌 Deep Dive: Number.MAX_SAFE_INTEGER</h3>
    <p>The <strong>Number.MAX_SAFE_INTEGER</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.MAX_SAFE_INTEGER</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.MAX_SAFE_INTEGER
console.log("Initializing Number.MAX_SAFE_INTEGER...");

try {
  // Using the core concept
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.MAX_SAFE_INTEGER:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-epsilon',
        title: 'Number.EPSILON',
        badge: 'ES6',
        emoji: '🔬',
        defaultCode: `console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true`,
        content: `
    <h3>📌 Deep Dive: Number.EPSILON</h3>
    <p>The <strong>Number.EPSILON</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.EPSILON</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.EPSILON
console.log("Initializing Number.EPSILON...");

try {
  // Using the core concept
  console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.EPSILON:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-assign',
        title: 'Object.assign()',
        badge: 'ES6',
        emoji: '📋',
        defaultCode: `const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(Object.assign(target, source)); // { a: 1, b: 4, c: 5 }`,
        content: `
    <h3>📌 Deep Dive: Object.assign()</h3>
    <p>The <strong>Object.assign()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.assign()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.assign()
console.log("Initializing Object.assign()...");

try {
  // Using the core concept
  const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(Object.assign(target, source)); // { a: 1, b: 4, c: 5 }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.assign():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-create',
        title: 'Object.create()',
        badge: 'ES5',
        emoji: '🏗️',
        defaultCode: `const proto = { greeting: "hello" };
const obj = Object.create(proto);
console.log(obj.greeting); // "hello"`,
        content: `
    <h3>📌 Deep Dive: Object.create()</h3>
    <p>The <strong>Object.create()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.create()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.create()
console.log("Initializing Object.create()...");

try {
  // Using the core concept
  const proto = { greeting: "hello" };
const obj = Object.create(proto);
console.log(obj.greeting); // "hello"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.create():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-defineproperty',
        title: 'Object.defineProperty()',
        badge: 'ES5',
        emoji: '🔒',
        defaultCode: `const obj = {};
Object.defineProperty(obj, "prop", {
  value: 42,
  writable: false
});
obj.prop = 77; // fails silently in non-strict mode
console.log(obj.prop); // 42`,
        content: `
    <h3>📌 Deep Dive: Object.defineProperty()</h3>
    <p>The <strong>Object.defineProperty()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.defineProperty()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.defineProperty()
console.log("Initializing Object.defineProperty()...");

try {
  // Using the core concept
  const obj = {};
Object.defineProperty(obj, "prop", {
  value: 42,
  writable: false
});
obj.prop = 77; // fails silently in non-strict mode
console.log(obj.prop); // 42
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.defineProperty():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-entries',
        title: 'Object.entries()',
        badge: 'ES8',
        emoji: '📜',
        defaultCode: `const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]`,
        content: `
    <h3>📌 Deep Dive: Object.entries()</h3>
    <p>The <strong>Object.entries()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.entries()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.entries()
console.log("Initializing Object.entries()...");

try {
  // Using the core concept
  const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.entries():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-freeze',
        title: 'Object.freeze()',
        badge: 'ES5',
        emoji: '❄️',
        defaultCode: `const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // fails silently
console.log(obj.a); // 1`,
        content: `
    <h3>📌 Deep Dive: Object.freeze()</h3>
    <p>The <strong>Object.freeze()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.freeze()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.freeze()
console.log("Initializing Object.freeze()...");

try {
  // Using the core concept
  const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // fails silently
console.log(obj.a); // 1
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.freeze():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-fromentries',
        title: 'Object.fromEntries()',
        badge: 'ES10',
        emoji: '🪄',
        defaultCode: `const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }`,
        content: `
    <h3>📌 Deep Dive: Object.fromEntries()</h3>
    <p>The <strong>Object.fromEntries()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.fromEntries()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.fromEntries()
console.log("Initializing Object.fromEntries()...");

try {
  // Using the core concept
  const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.fromEntries():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-is',
        title: 'Object.is()',
        badge: 'ES6',
        emoji: '⚖️',
        defaultCode: `console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(0, -0)); // false`,
        content: `
    <h3>📌 Deep Dive: Object.is()</h3>
    <p>The <strong>Object.is()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.is()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.is()
console.log("Initializing Object.is()...");

try {
  // Using the core concept
  console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(0, -0)); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.is():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-seal',
        title: 'Object.seal()',
        badge: 'ES5',
        emoji: '🤐',
        defaultCode: `const obj = { a: 1 };
Object.seal(obj);
obj.b = 2; // Cannot add new properties
obj.a = 5; // CAN mutate existing properties
console.log(obj); // { a: 5 }`,
        content: `
    <h3>📌 Deep Dive: Object.seal()</h3>
    <p>The <strong>Object.seal()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.seal()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.seal()
console.log("Initializing Object.seal()...");

try {
  // Using the core concept
  const obj = { a: 1 };
Object.seal(obj);
obj.b = 2; // Cannot add new properties
obj.a = 5; // CAN mutate existing properties
console.log(obj); // { a: 5 }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.seal():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-values',
        title: 'Object.values()',
        badge: 'ES8',
        emoji: '🔢',
        defaultCode: `const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]`,
        content: `
    <h3>📌 Deep Dive: Object.values()</h3>
    <p>The <strong>Object.values()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.values()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.values()
console.log("Initializing Object.values()...");

try {
  // Using the core concept
  const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.values():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-globalthis',
        title: 'globalThis',
        badge: 'ES11',
        emoji: '🌐',
        defaultCode: `console.log(globalThis === window); // true (in browser)
console.log(globalThis === global); // true (in Node.js)`,
        content: `
    <h3>📌 Deep Dive: globalThis</h3>
    <p>The <strong>globalThis</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>globalThis</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of globalThis
console.log("Initializing globalThis...");

try {
  // Using the core concept
  console.log(globalThis === window); // true (in browser)
console.log(globalThis === global); // true (in Node.js)
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing globalThis:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-hasown',
        title: 'Object.hasOwn()',
        badge: 'ES13',
        emoji: '🛡️',
        defaultCode: `const obj = { prop: 42 };
console.log(Object.hasOwn(obj, "prop")); // true
// Safer than obj.hasOwnProperty("prop")`,
        content: `
    <h3>📌 Deep Dive: Object.hasOwn()</h3>
    <p>The <strong>Object.hasOwn()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.hasOwn()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.hasOwn()
console.log("Initializing Object.hasOwn()...");

try {
  // Using the core concept
  const obj = { prop: 42 };
console.log(Object.hasOwn(obj, "prop")); // true
// Safer than obj.hasOwnProperty("prop")
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.hasOwn():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-at',
        title: 'Array.prototype.at()',
        badge: 'ES13',
        emoji: '🎯',
        defaultCode: `const arr = [5, 12, 8, 130, 44];
console.log(arr.at(-1)); // 44 (gets the last element)`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.at()</h3>
    <p>The <strong>Array.prototype.at()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.at()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.at()
console.log("Initializing Array.prototype.at()...");

try {
  // Using the core concept
  const arr = [5, 12, 8, 130, 44];
console.log(arr.at(-1)); // 44 (gets the last element)
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.at():", error);
}
    </code></pre>
    `
    },

    {
        id: 'js-padstart',
        title: 'String.prototype.padStart()',
        badge: 'ES8',
        emoji: '📝',
        defaultCode: `const str = "5";
console.log(str.padStart(3, "0")); // "005"`,
        content: `
    <h3>📌 Deep Dive: String.prototype.padStart()</h3>
    <p>The <strong>String.prototype.padStart()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.padStart()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.padStart()
console.log("Initializing String.prototype.padStart()...");

try {
  // Using the core concept
  const str = "5";
console.log(str.padStart(3, "0")); // "005"
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.padStart():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-matchall',
        title: 'String.prototype.matchAll()',
        badge: 'ES10',
        emoji: '🔍',
        defaultCode: `const str = "test1test2";
const array = [...str.matchAll(/t(e)(st(\\d?))/g)];
console.log(array[0]);`,
        content: `
    <h3>📌 Deep Dive: String.prototype.matchAll()</h3>
    <p>The <strong>String.prototype.matchAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.matchAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.matchAll()
console.log("Initializing String.prototype.matchAll()...");

try {
  // Using the core concept
  const str = "test1test2";
const array = [...str.matchAll(/t(e)(st(\\d?))/g)];
console.log(array[0]);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.matchAll():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-replaceall',
        title: 'String.prototype.replaceAll()',
        badge: 'ES12',
        emoji: '🔄',
        defaultCode: `const str = "a-b-c";
console.log(str.replaceAll("-", "+"));`,
        content: `
    <h3>📌 Deep Dive: String.prototype.replaceAll()</h3>
    <p>The <strong>String.prototype.replaceAll()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.prototype.replaceAll()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.prototype.replaceAll()
console.log("Initializing String.prototype.replaceAll()...");

try {
  // Using the core concept
  const str = "a-b-c";
console.log(str.replaceAll("-", "+"));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.prototype.replaceAll():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-flatmap',
        title: 'Array.prototype.flatMap()',
        badge: 'ES10',
        emoji: '🗺️',
        defaultCode: `const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.flatMap()</h3>
    <p>The <strong>Array.prototype.flatMap()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.flatMap()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.flatMap()
console.log("Initializing Array.prototype.flatMap()...");

try {
  // Using the core concept
  const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.flatMap():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-findlast',
        title: 'Array.prototype.findLast()',
        badge: 'ES13',
        emoji: '🔍',
        defaultCode: `const arr = [5, 12, 8, 130, 44];
console.log(arr.findLast(n => n > 10));`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.findLast()</h3>
    <p>The <strong>Array.prototype.findLast()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.findLast()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.findLast()
console.log("Initializing Array.prototype.findLast()...");

try {
  // Using the core concept
  const arr = [5, 12, 8, 130, 44];
console.log(arr.findLast(n => n > 10));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.findLast():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-from',
        title: 'Array.from()',
        badge: 'ES6',
        emoji: '🪄',
        defaultCode: `console.log(Array.from('foo'));`,
        content: `
    <h3>📌 Deep Dive: Array.from()</h3>
    <p>The <strong>Array.from()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.from()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.from()
console.log("Initializing Array.from()...");

try {
  // Using the core concept
  console.log(Array.from('foo'));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.from():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math-trunc',
        title: 'Math.trunc()',
        badge: 'ES6',
        emoji: '✂️',
        defaultCode: `console.log(Math.trunc(13.37)); // 13`,
        content: `
    <h3>📌 Deep Dive: Math.trunc()</h3>
    <p>The <strong>Math.trunc()</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math.trunc()</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math.trunc()
console.log("Initializing Math.trunc()...");

try {
  // Using the core concept
  console.log(Math.trunc(13.37)); // 13
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math.trunc():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-number-issafeinteger',
        title: 'Number.isSafeInteger()',
        badge: 'ES6',
        emoji: '🔒',
        defaultCode: `console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true`,
        content: `
    <h3>📌 Deep Dive: Number.isSafeInteger()</h3>
    <p>The <strong>Number.isSafeInteger()</strong> is a fundamental Number Utility in JavaScript that allows developers to validate and format efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Number.isSafeInteger()</code>, the V8 engine optimizes the 64-bit float representation to ensure minimal overhead. By utilizing native C++ bindings for this number utility, JavaScript can validate and format efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always check for NaN explicitly using Number.isNaN() rather than the global isNaN().</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Number.isSafeInteger()
console.log("Initializing Number.isSafeInteger()...");

try {
  // Using the core concept
  console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Number.isSafeInteger():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-assign',
        title: 'Object.assign()',
        badge: 'ES6',
        emoji: '📋',
        defaultCode: `const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(Object.assign(target, source));`,
        content: `
    <h3>📌 Deep Dive: Object.assign()</h3>
    <p>The <strong>Object.assign()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.assign()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.assign()
console.log("Initializing Object.assign()...");

try {
  // Using the core concept
  const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(Object.assign(target, source));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.assign():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-fromentries',
        title: 'Object.fromEntries()',
        badge: 'ES10',
        emoji: '🪄',
        defaultCode: `const entries = new Map([['foo', 'bar'], ['baz', 42]]);
console.log(Object.fromEntries(entries));`,
        content: `
    <h3>📌 Deep Dive: Object.fromEntries()</h3>
    <p>The <strong>Object.fromEntries()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.fromEntries()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.fromEntries()
console.log("Initializing Object.fromEntries()...");

try {
  // Using the core concept
  const entries = new Map([['foo', 'bar'], ['baz', 42]]);
console.log(Object.fromEntries(entries));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.fromEntries():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-at',
        title: 'Array.prototype.at()',
        badge: 'ES13',
        emoji: '🎯',
        defaultCode: `const arr = [5, 12, 8, 130, 44];
console.log(arr.at(-1)); // 44`,
        content: `
    <h3>📌 Deep Dive: Array.prototype.at()</h3>
    <p>The <strong>Array.prototype.at()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array.prototype.at()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array.prototype.at()
console.log("Initializing Array.prototype.at()...");

try {
  // Using the core concept
  const arr = [5, 12, 8, 130, 44];
console.log(arr.at(-1)); // 44
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array.prototype.at():", error);
}
    </code></pre>
    `
    }
,

    {
        id: 'js-generators',
        title: 'Generators',
        badge: 'ES6+',
        emoji: '⚙️',
        defaultCode: `function* gen() { yield 1; yield 2; }
const g = gen();
console.log(g.next().value);`,
        content: `
    <h3>📌 Deep Dive: Generators</h3>
    <p>The <strong>Generators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Generators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Generators
console.log("Initializing Generators...");

try {
  // Using the core concept
  function* gen() { yield 1; yield 2; }
const g = gen();
console.log(g.next().value);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Generators:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-iterators',
        title: 'Iterators',
        badge: 'ES6+',
        emoji: '🔄',
        defaultCode: `const arr = [1,2];
const it = arr[Symbol.iterator]();
console.log(it.next());`,
        content: `
    <h3>📌 Deep Dive: Iterators</h3>
    <p>The <strong>Iterators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Iterators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Iterators
console.log("Initializing Iterators...");

try {
  // Using the core concept
  const arr = [1,2];
const it = arr[Symbol.iterator]();
console.log(it.next());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Iterators:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-proxy',
        title: 'Proxy API',
        badge: 'ADVANCED',
        emoji: '🛡️',
        defaultCode: `const target = {};
const proxy = new Proxy(target, { set: (obj, prop, val) => { obj[prop] = val; return true; } });
proxy.a = 1;`,
        content: `
    <h3>📌 Deep Dive: Proxy API</h3>
    <p>The <strong>Proxy API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Proxy API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Proxy API
console.log("Initializing Proxy API...");

try {
  // Using the core concept
  const target = {};
const proxy = new Proxy(target, { set: (obj, prop, val) => { obj[prop] = val; return true; } });
proxy.a = 1;
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Proxy API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reflect',
        title: 'Reflect API',
        badge: 'ADVANCED',
        emoji: '🪞',
        defaultCode: `const obj = {x: 1};
Reflect.set(obj, "y", 2);
console.log(obj.y);`,
        content: `
    <h3>📌 Deep Dive: Reflect API</h3>
    <p>The <strong>Reflect API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Reflect API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Reflect API
console.log("Initializing Reflect API...");

try {
  // Using the core concept
  const obj = {x: 1};
Reflect.set(obj, "y", 2);
console.log(obj.y);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Reflect API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intl',
        title: 'Intl API',
        badge: 'API',
        emoji: '🌍',
        defaultCode: `console.log(new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(100));`,
        content: `
    <h3>📌 Deep Dive: Intl API</h3>
    <p>The <strong>Intl API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Intl API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Intl API
console.log("Initializing Intl API...");

try {
  // Using the core concept
  console.log(new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(100));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Intl API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-canvas',
        title: 'Canvas API',
        badge: 'API',
        emoji: '🎨',
        defaultCode: `// Requires a <canvas> element
/*
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0,0,10,10);
*/`,
        content: `
    <h3>📌 Deep Dive: Canvas API</h3>
    <p>The <strong>Canvas API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Canvas API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Canvas API
console.log("Initializing Canvas API...");

try {
  // Using the core concept
  // Requires a <canvas> element
/*
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0,0,10,10);
*/
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Canvas API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-geolocation',
        title: 'Geolocation API',
        badge: 'API',
        emoji: '📍',
        defaultCode: `navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));`,
        content: `
    <h3>📌 Deep Dive: Geolocation API</h3>
    <p>The <strong>Geolocation API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Geolocation API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Geolocation API
console.log("Initializing Geolocation API...");

try {
  // Using the core concept
  navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Geolocation API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webrtc',
        title: 'WebRTC',
        badge: 'API',
        emoji: '🎥',
        defaultCode: `const pc = new RTCPeerConnection();
console.log(pc);`,
        content: `
    <h3>📌 Deep Dive: WebRTC</h3>
    <p>The <strong>WebRTC</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebRTC</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebRTC
console.log("Initializing WebRTC...");

try {
  // Using the core concept
  const pc = new RTCPeerConnection();
console.log(pc);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebRTC:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-websockets',
        title: 'WebSockets',
        badge: 'API',
        emoji: '🔌',
        defaultCode: `/* const ws = new WebSocket("wss://echo.websocket.org"); */`,
        content: `
    <h3>📌 Deep Dive: WebSockets</h3>
    <p>The <strong>WebSockets</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebSockets</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebSockets
console.log("Initializing WebSockets...");

try {
  // Using the core concept
  /* const ws = new WebSocket("wss://echo.websocket.org"); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebSockets:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-serviceworkers',
        title: 'Service Workers',
        badge: 'PWA',
        emoji: '🛠️',
        defaultCode: `/* navigator.serviceWorker.register("/sw.js"); */`,
        content: `
    <h3>📌 Deep Dive: Service Workers</h3>
    <p>The <strong>Service Workers</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Service Workers</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Service Workers
console.log("Initializing Service Workers...");

try {
  // Using the core concept
  /* navigator.serviceWorker.register("/sw.js"); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Service Workers:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-indexeddb',
        title: 'IndexedDB',
        badge: 'API',
        emoji: '🗄️',
        defaultCode: `const req = indexedDB.open("MyDB", 1);`,
        content: `
    <h3>📌 Deep Dive: IndexedDB</h3>
    <p>The <strong>IndexedDB</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IndexedDB</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IndexedDB
console.log("Initializing IndexedDB...");

try {
  // Using the core concept
  const req = indexedDB.open("MyDB", 1);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IndexedDB:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-mutationobserver',
        title: 'MutationObserver',
        badge: 'DOM',
        emoji: '👁️',
        defaultCode: `const obs = new MutationObserver(m => console.log(m));`,
        content: `
    <h3>📌 Deep Dive: MutationObserver</h3>
    <p>The <strong>MutationObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>MutationObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of MutationObserver
console.log("Initializing MutationObserver...");

try {
  // Using the core concept
  const obs = new MutationObserver(m => console.log(m));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing MutationObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intersectionobserver',
        title: 'IntersectionObserver',
        badge: 'DOM',
        emoji: '🚦',
        defaultCode: `const obs = new IntersectionObserver(e => console.log(e));`,
        content: `
    <h3>📌 Deep Dive: IntersectionObserver</h3>
    <p>The <strong>IntersectionObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IntersectionObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IntersectionObserver
console.log("Initializing IntersectionObserver...");

try {
  // Using the core concept
  const obs = new IntersectionObserver(e => console.log(e));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IntersectionObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-resizeobserver',
        title: 'ResizeObserver',
        badge: 'DOM',
        emoji: '📐',
        defaultCode: `const obs = new ResizeObserver(e => console.log(e));`,
        content: `
    <h3>📌 Deep Dive: ResizeObserver</h3>
    <p>The <strong>ResizeObserver</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>ResizeObserver</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of ResizeObserver
console.log("Initializing ResizeObserver...");

try {
  // Using the core concept
  const obs = new ResizeObserver(e => console.log(e));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing ResizeObserver:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-performance',
        title: 'Performance API',
        badge: 'API',
        emoji: '⏱️',
        defaultCode: `console.log(performance.now());`,
        content: `
    <h3>📌 Deep Dive: Performance API</h3>
    <p>The <strong>Performance API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Performance API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Performance API
console.log("Initializing Performance API...");

try {
  // Using the core concept
  console.log(performance.now());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Performance API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webcrypto',
        title: 'Web Crypto API',
        badge: 'API',
        emoji: '🔐',
        defaultCode: `const arr = new Uint8Array(10);
crypto.getRandomValues(arr);
console.log(arr);`,
        content: `
    <h3>📌 Deep Dive: Web Crypto API</h3>
    <p>The <strong>Web Crypto API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Web Crypto API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Web Crypto API
console.log("Initializing Web Crypto API...");

try {
  // Using the core concept
  const arr = new Uint8Array(10);
crypto.getRandomValues(arr);
console.log(arr);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Web Crypto API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-fileapi',
        title: 'File API',
        badge: 'API',
        emoji: '📁',
        defaultCode: `/* const reader = new FileReader(); */`,
        content: `
    <h3>📌 Deep Dive: File API</h3>
    <p>The <strong>File API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>File API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of File API
console.log("Initializing File API...");

try {
  // Using the core concept
  /* const reader = new FileReader(); */
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing File API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-history',
        title: 'History API',
        badge: 'API',
        emoji: '⏪',
        defaultCode: `history.pushState({page: 1}, "title", "?page=1");`,
        content: `
    <h3>📌 Deep Dive: History API</h3>
    <p>The <strong>History API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>History API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of History API
console.log("Initializing History API...");

try {
  // Using the core concept
  history.pushState({page: 1}, "title", "?page=1");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing History API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-singleton',
        title: 'Singleton Pattern',
        badge: 'DESIGN',
        emoji: '1️⃣',
        defaultCode: `class Singleton {
  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }
}`,
        content: `
    <h3>📌 Deep Dive: Singleton Pattern</h3>
    <p>The <strong>Singleton Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Singleton Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Singleton Pattern
console.log("Initializing Singleton Pattern...");

try {
  // Using the core concept
  class Singleton {
  constructor() { if(!Singleton.instance) Singleton.instance = this; return Singleton.instance; }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Singleton Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-observer-pattern',
        title: 'Observer Pattern',
        badge: 'DESIGN',
        emoji: '👀',
        defaultCode: `class Subject {
  constructor() { this.obs = []; }
  notify() { this.obs.forEach(o => o.update()); }
}`,
        content: `
    <h3>📌 Deep Dive: Observer Pattern</h3>
    <p>The <strong>Observer Pattern</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Observer Pattern</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Observer Pattern
console.log("Initializing Observer Pattern...");

try {
  // Using the core concept
  class Subject {
  constructor() { this.obs = []; }
  notify() { this.obs.forEach(o => o.update()); }
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Observer Pattern:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-memoization',
        title: 'Memoization',
        badge: 'PERFORMANCE',
        emoji: '🧠',
        defaultCode: `const memo = {};
function calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }`,
        content: `
    <h3>📌 Deep Dive: Memoization</h3>
    <p>The <strong>Memoization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Memoization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Memoization
console.log("Initializing Memoization...");

try {
  // Using the core concept
  const memo = {};
function calc(x) { if(memo[x]) return memo[x]; return memo[x] = x * 2; }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Memoization:", error);
}
    </code></pre>
    `
    }
,

    {
        id: 'js-console',
        title: 'console.log()',
        badge: 'BASICS',
        emoji: '🖨️',
        defaultCode: `// Use console.log to print output
let greeting = "Hello, JavaScript Mastery!";
console.log(greeting);

// You can pass multiple arguments
console.log("Status:", 200, "OK");`,
        content: `
    <h3>📌 Deep Dive: console.log()</h3>
    <p>The <strong>console.log()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>console.log()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of console.log()
console.log("Initializing console.log()...");

try {
  // Using the core concept
  // Use console.log to print output
let greeting = "Hello, JavaScript Mastery!";
console.log(greeting);

// You can pass multiple arguments
console.log("Status:", 200, "OK");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing console.log():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-variables',
        title: 'let & const',
        badge: 'BASICS',
        emoji: '📦',
        defaultCode: `// 'const' is for values that will NOT change
const MAX_USERS = 100;
console.log("Max Users:", MAX_USERS);

// 'let' is for values that CAN change
let score = 0;
score = 10;
score += 5;
console.log("Current Score:", score);`,
        content: `
    <h3>📌 Deep Dive: let & const</h3>
    <p>The <strong>let & const</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>let & const</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of let & const
console.log("Initializing let & const...");

try {
  // Using the core concept
  // 'const' is for values that will NOT change
const MAX_USERS = 100;
console.log("Max Users:", MAX_USERS);

// 'let' is for values that CAN change
let score = 0;
score = 10;
score += 5;
console.log("Current Score:", score);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing let & const:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-arrow-functions',
        title: 'Arrow Functions',
        badge: 'ES6+',
        emoji: '🏹',
        defaultCode: `// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

console.log("Add:", add(5, 5));
console.log("Multiply:", multiply(5, 5));

// Implicit return for one-liners
const greet = name => "Hello " + name;
console.log(greet("Sanskar"));`,
        content: `
    <h3>📌 Deep Dive: Arrow Functions</h3>
    <p>The <strong>Arrow Functions</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Arrow Functions</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Arrow Functions
console.log("Initializing Arrow Functions...");

try {
  // Using the core concept
  // Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

console.log("Add:", add(5, 5));
console.log("Multiply:", multiply(5, 5));

// Implicit return for one-liners
const greet = name => "Hello " + name;
console.log(greet("Sanskar"));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Arrow Functions:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-template-literals',
        title: 'Template Literals',
        badge: 'ES6+',
        emoji: '📝',
        defaultCode: `const hero = "Batman";
const city = "Gotham";

// Old way (concatenation)
const msg1 = hero + " protects " + city + "!";

// Template Literals (using backticks)
const msg2 = \`\${hero} protects \${city}!\`;

console.log("Old way:", msg1);
console.log("New way:", msg2);

// Multi-line strings are easy too!
const poem = \`
  Roses are red,
  JS is cool,
  Template literals
  Totally rule.
\`;
console.log(poem);`,
        content: `
    <h3>📌 Deep Dive: Template Literals</h3>
    <p>The <strong>Template Literals</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Template Literals</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Template Literals
console.log("Initializing Template Literals...");

try {
  // Using the core concept
  const hero = "Batman";
const city = "Gotham";

// Old way (concatenation)
const msg1 = hero + " protects " + city + "!";

// Template Literals (using backticks)
const msg2 = \`\${hero} protects \${city}!\`;

console.log("Old way:", msg1);
console.log("New way:", msg2);

// Multi-line strings are easy too!
const poem = \`
  Roses are red,
  JS is cool,
  Template literals
  Totally rule.
\`;
console.log(poem);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Template Literals:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-destructuring',
        title: 'Destructuring',
        badge: 'ES6+',
        emoji: '🧩',
        defaultCode: `const user = {
  name: "Sanskar",
  role: "Developer",
  country: "India"
    };

// Object Destructuring
const { name, role } = user;
console.log(\`\${name} is a \${role}.\`);

// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [primary, secondary] = colors;
console.log("Colors:", primary, secondary);`,
        content: `
    <h3>📌 Deep Dive: Destructuring</h3>
    <p>The <strong>Destructuring</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Destructuring</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Destructuring
console.log("Initializing Destructuring...");

try {
  // Using the core concept
  const user = {
  name: "Sanskar",
  role: "Developer",
  country: "India"
    };

// Object Destructuring
const { name, role } = user;
console.log(\`\${name} is a \${role}.\`);

// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [primary, secondary] = colors;
console.log("Colors:", primary, secondary);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Destructuring:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-spread',
        title: 'Spread Operator',
        badge: 'ES6+',
        emoji: '🧈',
        defaultCode: `// Spread with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1]; 
console.log("Merged Array:", arr2);

// Spread with Objects
const baseConfig = { theme: "dark", api: "v1" };
const userConfig = { ...baseConfig, user: "Sanskar" };
console.log("Merged Object:", userConfig);`,
        content: `
    <h3>📌 Deep Dive: Spread Operator</h3>
    <p>The <strong>Spread Operator</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Spread Operator</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Spread Operator
console.log("Initializing Spread Operator...");

try {
  // Using the core concept
  // Spread with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1]; 
console.log("Merged Array:", arr2);

// Spread with Objects
const baseConfig = { theme: "dark", api: "v1" };
const userConfig = { ...baseConfig, user: "Sanskar" };
console.log("Merged Object:", userConfig);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Spread Operator:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-map-filter',
        title: 'map() & filter()',
        badge: 'BASICS',
        emoji: '🔍',
        defaultCode: `const numbers = [1, 2, 3, 4, 5, 6];

// filter() creates a new array with elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// map() creates a new array by transforming every element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// You can chain them!
const doubledEvens = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
console.log("Doubled Evens:", doubledEvens);`,
        content: `
    <h3>📌 Deep Dive: map() & filter()</h3>
    <p>The <strong>map() & filter()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>map() & filter()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of map() & filter()
console.log("Initializing map() & filter()...");

try {
  // Using the core concept
  const numbers = [1, 2, 3, 4, 5, 6];

// filter() creates a new array with elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// map() creates a new array by transforming every element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// You can chain them!
const doubledEvens = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
console.log("Doubled Evens:", doubledEvens);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing map() & filter():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-promises',
        title: 'Promises',
        badge: 'ASYNC',
        emoji: '🤝',
        defaultCode: `// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  console.log("Fetching data...");
  setTimeout(() => {
    const success = true;
    if(success) resolve("Data fetched successfully!");
    else reject("Failed to fetch data.");
  }, 1000);
});

// Using a Promise
myPromise
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error))
  .finally(() => console.log("Operation finished."));`,
        content: `
    <h3>📌 Deep Dive: Promises</h3>
    <p>The <strong>Promises</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Promises</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Promises
console.log("Initializing Promises...");

try {
  // Using the core concept
  // Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  console.log("Fetching data...");
  setTimeout(() => {
    const success = true;
    if(success) resolve("Data fetched successfully!");
    else reject("Failed to fetch data.");
  }, 1000);
});

// Using a Promise
myPromise
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error))
  .finally(() => console.log("Operation finished."));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Promises:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-async-await',
        title: 'Async / Await',
        badge: 'ASYNC',
        emoji: '⏳',
        defaultCode: `// Helper function returning a promise
const delay = ms => new Promise(res => setTimeout(res, ms));

async function runProcess() {
  console.log("Process started...");
  
  await delay(1000); // Waits for 1 second
  console.log("Step 1 Complete");
  
  await delay(500); // Waits for 0.5 seconds
  console.log("Step 2 Complete");
  
  return "All Done!";
}

// Call the async function
runProcess().then(res => console.log(res));`,
        content: `
    <h3>📌 Deep Dive: Async / Await</h3>
    <p>The <strong>Async / Await</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Async / Await</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Async / Await
console.log("Initializing Async / Await...");

try {
  // Using the core concept
  // Helper function returning a promise
const delay = ms => new Promise(res => setTimeout(res, ms));

async function runProcess() {
  console.log("Process started...");
  
  await delay(1000); // Waits for 1 second
  console.log("Step 1 Complete");
  
  await delay(500); // Waits for 0.5 seconds
  console.log("Step 2 Complete");
  
  return "All Done!";
}

// Call the async function
runProcess().then(res => console.log(res));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Async / Await:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-fetch',
        title: 'Fetch API',
        badge: 'ASYNC',
        emoji: '🌐',
        defaultCode: `async function getUser() {
  try {
    console.log("Requesting data from API...");
    // Using a free mock API
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    
    console.log("User retrieved:", data.name);
    console.log("Company:", data.company.name);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getUser();`,
        content: `
    <h3>📌 Deep Dive: Fetch API</h3>
    <p>The <strong>Fetch API</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Fetch API</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Fetch API
console.log("Initializing Fetch API...");

try {
  // Using the core concept
  async function getUser() {
  try {
    console.log("Requesting data from API...");
    // Using a free mock API
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    
    console.log("User retrieved:", data.name);
    console.log("Company:", data.company.name);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getUser();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Fetch API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-dom-selection',
        title: 'DOM Selection',
        badge: 'DOM',
        emoji: '🎯',
        defaultCode: `// The DOM (Document Object Model) lets JS interact with HTML
// Note: We can't actually change the page structure in this sandbox,
// but we can query it!

// Querying the title of this page
const titleElement = document.querySelector('title');
console.log("Page Title:", titleElement.textContent);

// Selecting multiple elements
const buttons = document.querySelectorAll('button');
console.log("Number of buttons on this page:", buttons.length);

// Get element by ID
const nav = document.getElementById('searchInput');
console.log("Search Input placeholder:", nav.placeholder);`,
        content: `
    <h3>📌 Deep Dive: DOM Selection</h3>
    <p>The <strong>DOM Selection</strong> is a fundamental DOM API in JavaScript that allows developers to traverse and update efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>DOM Selection</code>, the Browser Rendering Engine (e.g., Blink/WebKit) optimizes the layout recalculations to ensure minimal overhead. By utilizing native C++ bindings for this dom api, JavaScript can traverse and update efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Batch your DOM reads and writes to avoid layout thrashing and forced synchronous layouts.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of DOM Selection
console.log("Initializing DOM Selection...");

try {
  // Using the core concept
  // The DOM (Document Object Model) lets JS interact with HTML
// Note: We can't actually change the page structure in this sandbox,
// but we can query it!

// Querying the title of this page
const titleElement = document.querySelector('title');
console.log("Page Title:", titleElement.textContent);

// Selecting multiple elements
const buttons = document.querySelectorAll('button');
console.log("Number of buttons on this page:", buttons.length);

// Get element by ID
const nav = document.getElementById('searchInput');
console.log("Search Input placeholder:", nav.placeholder);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing DOM Selection:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-closures',
        title: 'Closures',
        badge: 'BASICS',
        emoji: '🔒',
        defaultCode: `function makeCounter() {
  let count = 0; // This variable is enclosed
  
  // Return a function that accesses the outer scope
  return function() {
    count++;
    return count;
  };
}

const myCounter = makeCounter();

console.log("First call:", myCounter());
console.log("Second call:", myCounter());
console.log("Third call:", myCounter());

// The 'count' variable is protected from the outside!
console.log("typeof count:", typeof count); // undefined`,
        content: `
    <h3>📌 Deep Dive: Closures</h3>
    <p>The <strong>Closures</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Closures</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Closures
console.log("Initializing Closures...");

try {
  // Using the core concept
  function makeCounter() {
  let count = 0; // This variable is enclosed
  
  // Return a function that accesses the outer scope
  return function() {
    count++;
    return count;
  };
}

const myCounter = makeCounter();

console.log("First call:", myCounter());
console.log("Second call:", myCounter());
console.log("Third call:", myCounter());

// The 'count' variable is protected from the outside!
console.log("typeof count:", typeof count); // undefined
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Closures:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-classes',
        title: 'Classes',
        badge: 'ES6+',
        emoji: '🏗️',
        defaultCode: `class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }
  
  speak() {
    console.log(this.name + " barks!");
  }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak();
console.log("Breed:", rex.breed);`,
        content: `
    <h3>📌 Deep Dive: Classes</h3>
    <p>The <strong>Classes</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Classes</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Classes
console.log("Initializing Classes...");

try {
  // Using the core concept
  class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }
  
  speak() {
    console.log(this.name + " barks!");
  }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak();
console.log("Breed:", rex.breed);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Classes:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-set-timeout',
        title: 'setTimeout',
        badge: 'ASYNC',
        emoji: '⏱️',
        defaultCode: `console.log("1. Starting");

// setTimeout executes a function after a specified delay
setTimeout(() => {
  console.log("3. Executed after 1.5 seconds");
}, 1500);

console.log("2. Waiting for timeout...");`,
        content: `
    <h3>📌 Deep Dive: setTimeout</h3>
    <p>The <strong>setTimeout</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>setTimeout</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of setTimeout
console.log("Initializing setTimeout...");

try {
  // Using the core concept
  console.log("1. Starting");

// setTimeout executes a function after a specified delay
setTimeout(() => {
  console.log("3. Executed after 1.5 seconds");
}, 1500);

console.log("2. Waiting for timeout...");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing setTimeout:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-local-storage',
        title: 'localStorage',
        badge: 'BASICS',
        emoji: '💾',
        defaultCode: `// Save data to the browser

    try {
        localStorage.setItem('hero', 'Spiderman');
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

    try {
        localStorage.setItem('score', '9000');
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

// Retrieve data
const myHero = localStorage.getItem('hero');
console.log("Hero from storage:", myHero);

// Remove data
localStorage.removeItem('score');

// Check if removed
console.log("Score after removal:", localStorage.getItem('score')); // null`,
        content: `
    <h3>📌 Deep Dive: localStorage</h3>
    <p>The <strong>localStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>localStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of localStorage
console.log("Initializing localStorage...");

try {
  // Using the core concept
  // Save data to the browser

    try {
        localStorage.setItem('hero', 'Spiderman');
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

    try {
        localStorage.setItem('score', '9000');
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

// Retrieve data
const myHero = localStorage.getItem('hero');
console.log("Hero from storage:", myHero);

// Remove data
localStorage.removeItem('score');

// Check if removed
console.log("Score after removal:", localStorage.getItem('score')); // null
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing localStorage:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-ternary',
        title: 'Ternary Operator',
        badge: 'BASICS',
        emoji: '❓',
        defaultCode: `const age = 20;

// Old way with if/else
let message1;
if (age >= 18) {
  message1 = "Adult";
} else {
  message1 = "Minor";
}

// Ternary Operator: condition ? true_expr : false_expr
const message2 = age >= 18 ? "Adult" : "Minor";

console.log("if/else:", message1);
console.log("ternary:", message2);`,
        content: `
    <h3>📌 Deep Dive: Ternary Operator</h3>
    <p>The <strong>Ternary Operator</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Ternary Operator</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Ternary Operator
console.log("Initializing Ternary Operator...");

try {
  // Using the core concept
  const age = 20;

// Old way with if/else
let message1;
if (age >= 18) {
  message1 = "Adult";
} else {
  message1 = "Minor";
}

// Ternary Operator: condition ? true_expr : false_expr
const message2 = age >= 18 ? "Adult" : "Minor";

console.log("if/else:", message1);
console.log("ternary:", message2);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Ternary Operator:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-optional-chaining',
        title: 'Optional Chaining',
        badge: 'ES6+',
        emoji: '🔗',
        defaultCode: `const user = {
  name: "Sanskar",
  contact: {
    email: "sanskar@example.com"
    // phone is missing!
  }
};

// Trying to access deeply nested property safely
// If we did user.contact.phone.number, it would CRASH!

// With optional chaining (?.)
const phone = user.contact?.phone?.number;
console.log("Phone number:", phone); // returns undefined instead of throwing an error

const email = user.contact?.email;
console.log("Email:", email);`,
        content: `
    <h3>📌 Deep Dive: Optional Chaining</h3>
    <p>The <strong>Optional Chaining</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Optional Chaining</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Optional Chaining
console.log("Initializing Optional Chaining...");

try {
  // Using the core concept
  const user = {
  name: "Sanskar",
  contact: {
    email: "sanskar@example.com"
    // phone is missing!
  }
};

// Trying to access deeply nested property safely
// If we did user.contact.phone.number, it would CRASH!

// With optional chaining (?.)
const phone = user.contact?.phone?.number;
console.log("Phone number:", phone); // returns undefined instead of throwing an error

const email = user.contact?.email;
console.log("Email:", email);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Optional Chaining:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-nullish',
        title: 'Nullish Coalescing',
        badge: 'ES6+',
        emoji: '👻',
        defaultCode: `// The Nullish Coalescing operator (??) returns the right side 
// ONLY if the left side is null or undefined.

const name = null ?? "Default Name";
console.log("Name:", name);

// Unlike || (OR), ?? respects falsy values like 0 or ""
const score = 0;

const fallbackOR = score || 100;
const fallbackNullish = score ?? 100;

console.log("Using OR (||):", fallbackOR); // 100 (wrong, score was 0!)
console.log("Using Nullish (??):", fallbackNullish); // 0 (correct!)`,
        content: `
    <h3>📌 Deep Dive: Nullish Coalescing</h3>
    <p>The <strong>Nullish Coalescing</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Nullish Coalescing</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Nullish Coalescing
console.log("Initializing Nullish Coalescing...");

try {
  // Using the core concept
  // The Nullish Coalescing operator (??) returns the right side 
// ONLY if the left side is null or undefined.

const name = null ?? "Default Name";
console.log("Name:", name);

// Unlike || (OR), ?? respects falsy values like 0 or ""
const score = 0;

const fallbackOR = score || 100;
const fallbackNullish = score ?? 100;

console.log("Using OR (||):", fallbackOR); // 100 (wrong, score was 0!)
console.log("Using Nullish (??):", fallbackNullish); // 0 (correct!)
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Nullish Coalescing:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-try-catch',
        title: 'try / catch',
        badge: 'BASICS',
        emoji: '🛡️',
        defaultCode: `console.log("Starting script...");

try {
  // We will try to call a function that doesn't exist
  nonExistentFunction();
  
  // This line never runs
  console.log("This won't execute.");
} catch (error) {
  // The code jumps here if an error occurs!
  console.log("Oops! An error was caught:");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
} finally {
  console.log("The finally block ALWAYS runs!");
}

console.log("Script continues normally...");`,
        content: `
    <h3>📌 Deep Dive: try / catch</h3>
    <p>The <strong>try / catch</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>try / catch</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of try / catch
console.log("Initializing try / catch...");

try {
  // Using the core concept
  console.log("Starting script...");

try {
  // We will try to call a function that doesn't exist
  nonExistentFunction();
  
  // This line never runs
  console.log("This won't execute.");
} catch (error) {
  // The code jumps here if an error occurs!
  console.log("Oops! An error was caught:");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
} finally {
  console.log("The finally block ALWAYS runs!");
}

console.log("Script continues normally...");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing try / catch:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-set',
        title: 'Set & Unique Arrays',
        badge: 'ES6+',
        emoji: '🎭',
        defaultCode: `// A Set only stores unique values
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Ignored, 1 is already in the set!

console.log("Set size:", mySet.size);

// Practical use: removing duplicates from an array
const duplicateArray = [1, 5, 5, 2, 9, 2, 1, 8];
const uniqueArray = [...new Set(duplicateArray)];

console.log("Original array:", duplicateArray);
console.log("Unique array:", uniqueArray);`,
        content: `
    <h3>📌 Deep Dive: Set & Unique Arrays</h3>
    <p>The <strong>Set & Unique Arrays</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Set & Unique Arrays</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Set & Unique Arrays
console.log("Initializing Set & Unique Arrays...");

try {
  // Using the core concept
  // A Set only stores unique values
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Ignored, 1 is already in the set!

console.log("Set size:", mySet.size);

// Practical use: removing duplicates from an array
const duplicateArray = [1, 5, 5, 2, 9, 2, 1, 8];
const uniqueArray = [...new Set(duplicateArray)];

console.log("Original array:", duplicateArray);
console.log("Unique array:", uniqueArray);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Set & Unique Arrays:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reduce',
        title: 'reduce()',
        badge: 'ARRAYS',
        emoji: '🗜️',
        defaultCode: `const numbers = [10, 20, 30, 40];
// reduce(accumulator, current_value)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", sum);`,
        content: `
    <h3>📌 Deep Dive: reduce()</h3>
    <p>The <strong>reduce()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>reduce()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of reduce()
console.log("Initializing reduce()...");

try {
  // Using the core concept
  const numbers = [10, 20, 30, 40];
// reduce(accumulator, current_value)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", sum);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing reduce():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-find',
        title: 'find()',
        badge: 'ARRAYS',
        emoji: '🎯',
        defaultCode: `const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
// Returns the FIRST matching object!
const bob = users.find(u => u.name === "Bob");
console.log("Found:", bob);`,
        content: `
    <h3>📌 Deep Dive: find()</h3>
    <p>The <strong>find()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>find()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of find()
console.log("Initializing find()...");

try {
  // Using the core concept
  const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
// Returns the FIRST matching object!
const bob = users.find(u => u.name === "Bob");
console.log("Found:", bob);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing find():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-some-every',
        title: 'some() & every()',
        badge: 'ARRAYS',
        emoji: '⚖️',
        defaultCode: `const scores = [85, 92, 88, 70, 95];

// some() checks if AT LEAST ONE matches
const hasA = scores.some(s => s >= 90);
console.log("Got at least one A?", hasA); // true

// every() checks if ALL match
const allPass = scores.every(s => s >= 50);
console.log("Did all pass?", allPass); // true`,
        content: `
    <h3>📌 Deep Dive: some() & every()</h3>
    <p>The <strong>some() & every()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>some() & every()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of some() & every()
console.log("Initializing some() & every()...");

try {
  // Using the core concept
  const scores = [85, 92, 88, 70, 95];

// some() checks if AT LEAST ONE matches
const hasA = scores.some(s => s >= 90);
console.log("Got at least one A?", hasA); // true

// every() checks if ALL match
const allPass = scores.every(s => s >= 50);
console.log("Did all pass?", allPass); // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing some() & every():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-string-includes',
        title: 'String.includes()',
        badge: 'STRINGS',
        emoji: '🔍',
        defaultCode: `const text = "JavaScript is absolutely amazing!";

console.log(text.includes("amazing")); // true
console.log(text.includes("Python"));  // false

// You can specify a starting position!
console.log(text.includes("JavaScript", 10)); // false`,
        content: `
    <h3>📌 Deep Dive: String.includes()</h3>
    <p>The <strong>String.includes()</strong> is a fundamental String Method in JavaScript that allows developers to parse and manipulate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>String.includes()</code>, the V8 engine optimizes the string interning to ensure minimal overhead. By utilizing native C++ bindings for this string method, JavaScript can parse and manipulate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Remember that strings are immutable in JavaScript. Methods always return a new string.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of String.includes()
console.log("Initializing String.includes()...");

try {
  // Using the core concept
  const text = "JavaScript is absolutely amazing!";

console.log(text.includes("amazing")); // true
console.log(text.includes("Python"));  // false

// You can specify a starting position!
console.log(text.includes("JavaScript", 10)); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing String.includes():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-methods',
        title: 'Object.keys/values/entries',
        badge: 'OBJECTS',
        emoji: '🔑',
        defaultCode: `const config = { theme: "dark", lang: "en", v: 2 };

console.log("Keys:", Object.keys(config));
console.log("Values:", Object.values(config));

// entries gives [key, value] pairs!
console.log("Entries:");
Object.entries(config).forEach(([key, val]) => {
  console.log(key + ":", val);
});`,
        content: `
    <h3>📌 Deep Dive: Object.keys/values/entries</h3>
    <p>The <strong>Object.keys/values/entries</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.keys/values/entries</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.keys/values/entries
console.log("Initializing Object.keys/values/entries...");

try {
  // Using the core concept
  const config = { theme: "dark", lang: "en", v: 2 };

console.log("Keys:", Object.keys(config));
console.log("Values:", Object.values(config));

// entries gives [key, value] pairs!
console.log("Entries:");
Object.entries(config).forEach(([key, val]) => {
  console.log(key + ":", val);
});
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.keys/values/entries:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math',
        title: 'Math Methods',
        badge: 'MATH',
        emoji: '🔢',
        defaultCode: `console.log("PI:", Math.PI);
console.log("Round 4.7:", Math.round(4.7));
console.log("Floor 4.9:", Math.floor(4.9)); // Always down
console.log("Ceil 4.1:", Math.ceil(4.1));   // Always up

// Random number between 0 and 1
console.log("Random:", Math.random());

// Random Integer between 1 and 10
const randInt = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", randInt);`,
        content: `
    <h3>📌 Deep Dive: Math Methods</h3>
    <p>The <strong>Math Methods</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math Methods</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math Methods
console.log("Initializing Math Methods...");

try {
  // Using the core concept
  console.log("PI:", Math.PI);
console.log("Round 4.7:", Math.round(4.7));
console.log("Floor 4.9:", Math.floor(4.9)); // Always down
console.log("Ceil 4.1:", Math.ceil(4.1));   // Always up

// Random number between 0 and 1
console.log("Random:", Math.random());

// Random Integer between 1 and 10
const randInt = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", randInt);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math Methods:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-date',
        title: 'Date Object',
        badge: 'BASICS',
        emoji: '📅',
        defaultCode: `const now = new Date();
console.log("Current Date:", now.toString());

console.log("Year:", now.getFullYear());
console.log("Month (0-indexed!):", now.getMonth());
console.log("Day:", now.getDate());

// ISO String for APIs
console.log("ISO Format:", now.toISOString());`,
        content: `
    <h3>📌 Deep Dive: Date Object</h3>
    <p>The <strong>Date Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Date Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Date Object
console.log("Initializing Date Object...");

try {
  // Using the core concept
  const now = new Date();
console.log("Current Date:", now.toString());

console.log("Year:", now.getFullYear());
console.log("Month (0-indexed!):", now.getMonth());
console.log("Day:", now.getDate());

// ISO String for APIs
console.log("ISO Format:", now.toISOString());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Date Object:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-regex',
        title: 'RegEx Basics',
        badge: 'STRINGS',
        emoji: '🕵️',
        defaultCode: `const text = "Contact me at hello@world.com tomorrow!";
// Basic regex to find an email
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/;

const match = text.match(emailRegex);
console.log("Found email:", match ? match[0] : "None");

// Testing a string
const isValid = emailRegex.test("bad-email@.com");
console.log("Is bad-email@.com valid?", isValid);`,
        content: `
    <h3>📌 Deep Dive: RegEx Basics</h3>
    <p>The <strong>RegEx Basics</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>RegEx Basics</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of RegEx Basics
console.log("Initializing RegEx Basics...");

try {
  // Using the core concept
  const text = "Contact me at hello@world.com tomorrow!";
// Basic regex to find an email
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/;

const match = text.match(emailRegex);
console.log("Found email:", match ? match[0] : "None");

// Testing a string
const isValid = emailRegex.test("bad-email@.com");
console.log("Is bad-email@.com valid?", isValid);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing RegEx Basics:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-json',
        title: 'JSON methods',
        badge: 'DATA',
        emoji: '🔄',
        defaultCode: `const user = { name: "Sanskar", active: true };

// Convert Object -> String (For saving to DB/LocalStorage)
const jsonString = JSON.stringify(user);
console.log("Stringified:", jsonString);

// Convert String -> Object (When fetching from API)
const parsedObj = JSON.parse(jsonString);
console.log("Parsed Name:", parsedObj.name);`,
        content: `
    <h3>📌 Deep Dive: JSON methods</h3>
    <p>The <strong>JSON methods</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>JSON methods</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of JSON methods
console.log("Initializing JSON methods...");

try {
  // Using the core concept
  const user = { name: "Sanskar", active: true };

// Convert Object -> String (For saving to DB/LocalStorage)
const jsonString = JSON.stringify(user);
console.log("Stringified:", jsonString);

// Convert String -> Object (When fetching from API)
const parsedObj = JSON.parse(jsonString);
console.log("Parsed Name:", parsedObj.name);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing JSON methods:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-events',
        title: 'Event Listeners',
        badge: 'DOM',
        emoji: '🖱️',
        defaultCode: `// We simulate a button in the DOM for this sandbox
const btn = {
  listeners: [],
  addEventListener: function(evt, cb) { this.listeners.push(cb); },
  click: function() { this.listeners.forEach(cb => cb()); }
};

btn.addEventListener('click', () => {
  console.log("Button was officially clicked!");
});

// Simulating the user clicking the button
btn.click();`,
        content: `
    <h3>📌 Deep Dive: Event Listeners</h3>
    <p>The <strong>Event Listeners</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Event Listeners</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Event Listeners
console.log("Initializing Event Listeners...");

try {
  // Using the core concept
  // We simulate a button in the DOM for this sandbox
const btn = {
  listeners: [],
  addEventListener: function(evt, cb) { this.listeners.push(cb); },
  click: function() { this.listeners.forEach(cb => cb()); }
};

btn.addEventListener('click', () => {
  console.log("Button was officially clicked!");
});

// Simulating the user clicking the button
btn.click();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Event Listeners:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-set-interval',
        title: 'setInterval',
        badge: 'ASYNC',
        emoji: '🔄',
        defaultCode: `let count = 0;
console.log("Timer started...");

const timerId = setInterval(() => {
  count++;
  console.log("Tick:", count);
  
  if (count === 3) {
    clearInterval(timerId); // Stops the loop!
    console.log("Timer stopped!");
  }
}, 500); // Runs every half-second`,
        content: `
    <h3>📌 Deep Dive: setInterval</h3>
    <p>The <strong>setInterval</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>setInterval</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of setInterval
console.log("Initializing setInterval...");

try {
  // Using the core concept
  let count = 0;
console.log("Timer started...");

const timerId = setInterval(() => {
  count++;
  console.log("Tick:", count);
  
  if (count === 3) {
    clearInterval(timerId); // Stops the loop!
    console.log("Timer stopped!");
  }
}, 500); // Runs every half-second
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing setInterval:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-modules',
        title: 'Modules',
        badge: 'ES6+',
        emoji: '📦',
        defaultCode: `// In a real environment, you'd use multiple files.
// File 1 (math.js):
// export const add = (a, b) => a + b;

// File 2 (main.js):
// import { add } from './math.js';

console.log("Modules allow you to split your JS across multiple files using 'import' and 'export'.");
console.log("This keeps massive codebases perfectly organized!");`,
        content: `
    <h3>📌 Deep Dive: Modules</h3>
    <p>The <strong>Modules</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Modules</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Modules
console.log("Initializing Modules...");

try {
  // Using the core concept
  // In a real environment, you'd use multiple files.
// File 1 (math.js):
// export const add = (a, b) => a + b;

// File 2 (main.js):
// import { add } from './math.js';

console.log("Modules allow you to split your JS across multiple files using 'import' and 'export'.");
console.log("This keeps massive codebases perfectly organized!");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Modules:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-generators',
        title: 'Generators',
        badge: 'ADVANCED',
        emoji: '🚦',
        defaultCode: `// Notice the asterisk (*)
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true`,
        content: `
    <h3>📌 Deep Dive: Generators</h3>
    <p>The <strong>Generators</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Generators</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Generators
console.log("Initializing Generators...");

try {
  // Using the core concept
  // Notice the asterisk (*)
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Generators:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-weakmap',
        title: 'WeakMap',
        badge: 'ADVANCED',
        emoji: '🗑️',
        defaultCode: `let user = { name: "Sanskar" };

const wMap = new WeakMap();
wMap.set(user, "Super Secret Data");

console.log(wMap.get(user));

// If 'user' is set to null, the WeakMap entry is automatically 
// removed by the Garbage Collector, preventing memory leaks!
user = null;
console.log("Memory cleared!");`,
        content: `
    <h3>📌 Deep Dive: WeakMap</h3>
    <p>The <strong>WeakMap</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WeakMap</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WeakMap
console.log("Initializing WeakMap...");

try {
  // Using the core concept
  let user = { name: "Sanskar" };

const wMap = new WeakMap();
wMap.set(user, "Super Secret Data");

console.log(wMap.get(user));

// If 'user' is set to null, the WeakMap entry is automatically 
// removed by the Garbage Collector, preventing memory leaks!
user = null;
console.log("Memory cleared!");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WeakMap:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-proxy',
        title: 'Proxy',
        badge: 'ADVANCED',
        emoji: '🛡️',
        defaultCode: `const targetObj = { message: "Hello" };

const handler = {
  get: function(target, prop) {
    if (prop === "message") {
      return target[prop] + " World!"; // Intercepts the read!
    }
    return "Property not found!";
  }
};

const proxy = new Proxy(targetObj, handler);

console.log(proxy.message); 
console.log(proxy.secret);`,
        content: `
    <h3>📌 Deep Dive: Proxy</h3>
    <p>The <strong>Proxy</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Proxy</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Proxy
console.log("Initializing Proxy...");

try {
  // Using the core concept
  const targetObj = { message: "Hello" };

const handler = {
  get: function(target, prop) {
    if (prop === "message") {
      return target[prop] + " World!"; // Intercepts the read!
    }
    return "Property not found!";
  }
};

const proxy = new Proxy(targetObj, handler);

console.log(proxy.message); 
console.log(proxy.secret);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Proxy:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reflect',
        title: 'Reflect',
        badge: 'ADVANCED',
        emoji: '🪞',
        defaultCode: `const obj = { x: 1, y: 2 };

// Safely sets a property
Reflect.set(obj, "z", 3);

// Safely checks if property exists
console.log("Has 'z'?", Reflect.has(obj, "z"));

// Safely gets property
console.log("Value of y:", Reflect.get(obj, "y"));`,
        content: `
    <h3>📌 Deep Dive: Reflect</h3>
    <p>The <strong>Reflect</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Reflect</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Reflect
console.log("Initializing Reflect...");

try {
  // Using the core concept
  const obj = { x: 1, y: 2 };

// Safely sets a property
Reflect.set(obj, "z", 3);

// Safely checks if property exists
console.log("Has 'z'?", Reflect.has(obj, "z"));

// Safely gets property
console.log("Value of y:", Reflect.get(obj, "y"));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Reflect:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intl',
        title: 'Intl API',
        badge: 'GLOBAL',
        emoji: '🌍',
        defaultCode: `const number = 1234567.89;

// Format as US Currency
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log("US:", usd);

// Format as German Currency
const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
console.log("DE:", eur);`,
        content: `
    <h3>📌 Deep Dive: Intl API</h3>
    <p>The <strong>Intl API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Intl API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Intl API
console.log("Initializing Intl API...");

try {
  // Using the core concept
  const number = 1234567.89;

// Format as US Currency
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log("US:", usd);

// Format as German Currency
const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
console.log("DE:", eur);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Intl API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-workers',
        title: 'Web Workers',
        badge: 'ASYNC',
        emoji: '⚙️',
        defaultCode: `console.log("Web Workers run scripts in background threads.");
console.log("They do NOT block the main UI thread!");
console.log("");
console.log("// Inside main.js:");
console.log("const worker = new Worker('worker.js');");
console.log("worker.postMessage('Start Heavy Math');");
console.log("");
console.log("// Inside worker.js:");
console.log("onmessage = function(e) { postMessage('Done!'); }");`,
        content: `
    <h3>📌 Deep Dive: Web Workers</h3>
    <p>The <strong>Web Workers</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Web Workers</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Web Workers
console.log("Initializing Web Workers...");

try {
  // Using the core concept
  console.log("Web Workers run scripts in background threads.");
console.log("They do NOT block the main UI thread!");
console.log("");
console.log("// Inside main.js:");
console.log("const worker = new Worker('worker.js');");
console.log("worker.postMessage('Start Heavy Math');");
console.log("");
console.log("// Inside worker.js:");
console.log("onmessage = function(e) { postMessage('Done!'); }");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Web Workers:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-canvas',
        title: 'Canvas API',
        badge: 'GRAPHICS',
        emoji: '🎨',
        defaultCode: `console.log("The Canvas API provides a means for drawing graphics via JS.");
console.log("1. Get the <canvas> element");
console.log("2. const ctx = canvas.getContext('2d');");
console.log("3. ctx.fillStyle = 'red';");
console.log("4. ctx.fillRect(10, 10, 150, 100);");
console.log("Perfect for web games and data visualization!");`,
        content: `
    <h3>📌 Deep Dive: Canvas API</h3>
    <p>The <strong>Canvas API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Canvas API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Canvas API
console.log("Initializing Canvas API...");

try {
  // Using the core concept
  console.log("The Canvas API provides a means for drawing graphics via JS.");
console.log("1. Get the <canvas> element");
console.log("2. const ctx = canvas.getContext('2d');");
console.log("3. ctx.fillStyle = 'red';");
console.log("4. ctx.fillRect(10, 10, 150, 100);");
console.log("Perfect for web games and data visualization!");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Canvas API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-url-search',
        title: 'URLSearchParams',
        badge: 'WEB',
        emoji: '🔗',
        defaultCode: `// Imagine the URL is: https://example.com?query=javascript&page=2
const queryString = "?query=javascript&page=2";

const params = new URLSearchParams(queryString);

console.log("Query:", params.get("query"));
console.log("Page:", params.get("page"));

// Modify params
params.set("page", 3);
console.log("New Query String:", params.toString());`,
        content: `
    <h3>📌 Deep Dive: URLSearchParams</h3>
    <p>The <strong>URLSearchParams</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>URLSearchParams</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of URLSearchParams
console.log("Initializing URLSearchParams...");

try {
  // Using the core concept
  // Imagine the URL is: https://example.com?query=javascript&page=2
const queryString = "?query=javascript&page=2";

const params = new URLSearchParams(queryString);

console.log("Query:", params.get("query"));
console.log("Page:", params.get("page"));

// Modify params
params.set("page", 3);
console.log("New Query String:", params.toString());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing URLSearchParams:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-regexp',
        title: 'RegExp (Regular Expressions)',
        badge: 'ADVANCED',
        emoji: '🔍',
        defaultCode: `const text = "The quick brown fox jumps over the lazy dog. It barked at 5 foxes!";
const regex = /fox(es)?/gi;

console.log("Matches:", text.match(regex));

// Replacing
console.log(text.replace(/dog/, "cat"));`,
        content: `
    <h3>📌 Deep Dive: RegExp (Regular Expressions)</h3>
    <p>The <strong>RegExp (Regular Expressions)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>RegExp (Regular Expressions)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of RegExp (Regular Expressions)
console.log("Initializing RegExp (Regular Expressions)...");

try {
  // Using the core concept
  const text = "The quick brown fox jumps over the lazy dog. It barked at 5 foxes!";
const regex = /fox(es)?/gi;

console.log("Matches:", text.match(regex));

// Replacing
console.log(text.replace(/dog/, "cat"));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing RegExp (Regular Expressions):", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-date',
        title: 'Date API',
        badge: 'APIs',
        emoji: '📅',
        defaultCode: `const now = new Date();
console.log("Current time:", now.toString());

// Get specific parts
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());

// Format locally
console.log("Local string:", now.toLocaleString());`,
        content: `
    <h3>📌 Deep Dive: Date API</h3>
    <p>The <strong>Date API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Date API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Date API
console.log("Initializing Date API...");

try {
  // Using the core concept
  const now = new Date();
console.log("Current time:", now.toString());

// Get specific parts
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());

// Format locally
console.log("Local string:", now.toLocaleString());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Date API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math',
        title: 'Math API',
        badge: 'APIs',
        emoji: '🧮',
        defaultCode: `console.log("PI:", Math.PI);
console.log("Round 4.7:", Math.round(4.7));
console.log("Power 2^3:", Math.pow(2, 3));
console.log("Random (0-1):", Math.random());
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);`,
        content: `
    <h3>📌 Deep Dive: Math API</h3>
    <p>The <strong>Math API</strong> is a fundamental Math Utility in JavaScript that allows developers to compute efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math API</code>, the V8 engine optimizes the native floating-point operations to ensure minimal overhead. By utilizing native C++ bindings for this math utility, JavaScript can compute efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Be cautious of floating-point arithmetic precision issues (e.g., 0.1 + 0.2).</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math API
console.log("Initializing Math API...");

try {
  // Using the core concept
  console.log("PI:", Math.PI);
console.log("Round 4.7:", Math.round(4.7));
console.log("Power 2^3:", Math.pow(2, 3));
console.log("Random (0-1):", Math.random());
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-error-handling',
        title: 'try...catch...finally',
        badge: 'BASICS',
        emoji: '🚨',
        defaultCode: `try {
  console.log("Trying...");
  throw new Error("Oops! Something broke!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This always runs, regardless of errors.");
}`,
        content: `
    <h3>📌 Deep Dive: try...catch...finally</h3>
    <p>The <strong>try...catch...finally</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>try...catch...finally</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of try...catch...finally
console.log("Initializing try...catch...finally...");

try {
  // Using the core concept
  try {
  console.log("Trying...");
  throw new Error("Oops! Something broke!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This always runs, regardless of errors.");
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing try...catch...finally:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-strict-mode',
        title: 'Strict Mode',
        badge: 'ES5',
        emoji: '👮',
        defaultCode: `"use strict";

try {
  // This would normally silently create a global variable, 
  // but strict mode throws an error!
  x = 3.14; 
} catch (e) {
  console.log("Strict mode caught an error:", e.message);
}`,
        content: `
    <h3>📌 Deep Dive: Strict Mode</h3>
    <p>The <strong>Strict Mode</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Strict Mode</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Strict Mode
console.log("Initializing Strict Mode...");

try {
  // Using the core concept
  "use strict";

try {
  // This would normally silently create a global variable, 
  // but strict mode throws an error!
  x = 3.14; 
} catch (e) {
  console.log("Strict mode caught an error:", e.message);
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Strict Mode:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-closures',
        title: 'Closures',
        badge: 'ADVANCED',
        emoji: '🔒',
        defaultCode: `function makeCounter() {
  let count = 0; // Private variable
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
        content: `
    <h3>📌 Deep Dive: Closures</h3>
    <p>The <strong>Closures</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Closures</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Closures
console.log("Initializing Closures...");

try {
  // Using the core concept
  function makeCounter() {
  let count = 0; // Private variable
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Closures:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-hoisting',
        title: 'Hoisting',
        badge: 'BASICS',
        emoji: '🏗️',
        defaultCode: `console.log("Hoisted var:", hoistedVar); // undefined
var hoistedVar = "I am hoisted!";

try {
  console.log(notHoistedLet);
} catch(e) {
  console.log("let/const are NOT hoisted (Temporal Dead Zone):", e.message);
}
let notHoistedLet = "Too late!";

// Function declarations are fully hoisted!
sayHi();
function sayHi() { console.log("Hi!"); }`,
        content: `
    <h3>📌 Deep Dive: Hoisting</h3>
    <p>The <strong>Hoisting</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Hoisting</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Hoisting
console.log("Initializing Hoisting...");

try {
  // Using the core concept
  console.log("Hoisted var:", hoistedVar); // undefined
var hoistedVar = "I am hoisted!";

try {
  console.log(notHoistedLet);
} catch(e) {
  console.log("let/const are NOT hoisted (Temporal Dead Zone):", e.message);
}
let notHoistedLet = "Too late!";

// Function declarations are fully hoisted!
sayHi();
function sayHi() { console.log("Hi!"); }
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Hoisting:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-this',
        title: 'The \'this\' Keyword',
        badge: 'BASICS',
        emoji: '👉',
        defaultCode: `const person = {
  name: "Sanskar",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();

const greetFn = person.greet;
try {
  greetFn(); // 'this' is lost!
} catch (e) {
  console.log("Lost this!");
}`,
        content: `
    <h3>📌 Deep Dive: The 'this' Keyword</h3>
    <p>The <strong>The 'this' Keyword</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>The 'this' Keyword</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of The 'this' Keyword
console.log("Initializing The 'this' Keyword...");

try {
  // Using the core concept
  const person = {
  name: "Sanskar",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();

const greetFn = person.greet;
try {
  greetFn(); // 'this' is lost!
} catch (e) {
  console.log("Lost this!");
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing The 'this' Keyword:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-call-apply-bind',
        title: 'call, apply, bind',
        badge: 'ADVANCED',
        emoji: '🔗',
        defaultCode: `const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce(greeting) {
  console.log(greeting + ", I am " + this.name);
}

// call: pass arguments comma-separated
introduce.call(person1, "Hello");

// apply: pass arguments as an array
introduce.apply(person2, ["Hi"]);

// bind: returns a new function with bound 'this'
const bobIntro = introduce.bind(person2);
bobIntro("Hey");`,
        content: `
    <h3>📌 Deep Dive: call, apply, bind</h3>
    <p>The <strong>call, apply, bind</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>call, apply, bind</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of call, apply, bind
console.log("Initializing call, apply, bind...");

try {
  // Using the core concept
  const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce(greeting) {
  console.log(greeting + ", I am " + this.name);
}

// call: pass arguments comma-separated
introduce.call(person1, "Hello");

// apply: pass arguments as an array
introduce.apply(person2, ["Hi"]);

// bind: returns a new function with bound 'this'
const bobIntro = introduce.bind(person2);
bobIntro("Hey");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing call, apply, bind:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-arrow-functions',
        title: 'Arrow Functions & \'this\'',
        badge: 'ES6+',
        emoji: '🏹',
        defaultCode: `const obj = {
  name: "Arrow",
  regularFunc: function() {
    setTimeout(function() {
      console.log("Regular this:", this.name); // undefined
    }, 100);
  },
  arrowFunc: function() {
    setTimeout(() => {
      console.log("Arrow this:", this.name); // Arrow!
    }, 100);
  }
};

obj.regularFunc();
obj.arrowFunc();`,
        content: `
    <h3>📌 Deep Dive: Arrow Functions & 'this'</h3>
    <p>The <strong>Arrow Functions & 'this'</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Arrow Functions & 'this'</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Arrow Functions & 'this'
console.log("Initializing Arrow Functions & 'this'...");

try {
  // Using the core concept
  const obj = {
  name: "Arrow",
  regularFunc: function() {
    setTimeout(function() {
      console.log("Regular this:", this.name); // undefined
    }, 100);
  },
  arrowFunc: function() {
    setTimeout(() => {
      console.log("Arrow this:", this.name); // Arrow!
    }, 100);
  }
};

obj.regularFunc();
obj.arrowFunc();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Arrow Functions & 'this':", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-iife',
        title: 'IIFE',
        badge: 'ADVANCED',
        emoji: '🏃',
        defaultCode: `(function() {
  const privateVar = "I am a secret!";
  console.log("IIFE ran immediately!");
})();

// console.log(privateVar); // ReferenceError`,
        content: `
    <h3>📌 Deep Dive: IIFE</h3>
    <p>The <strong>IIFE</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IIFE</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IIFE
console.log("Initializing IIFE...");

try {
  // Using the core concept
  (function() {
  const privateVar = "I am a secret!";
  console.log("IIFE ran immediately!");
})();

// console.log(privateVar); // ReferenceError
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IIFE:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-currying',
        title: 'Currying',
        badge: 'ADVANCED',
        emoji: '🍛',
        defaultCode: `// Regular function
function add(a, b, c) { return a + b + c; }

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// ES6 Currying
const arrowAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3));
console.log(arrowAdd(10)(20)(30));`,
        content: `
    <h3>📌 Deep Dive: Currying</h3>
    <p>The <strong>Currying</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Currying</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Currying
console.log("Initializing Currying...");

try {
  // Using the core concept
  // Regular function
function add(a, b, c) { return a + b + c; }

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// ES6 Currying
const arrowAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3));
console.log(arrowAdd(10)(20)(30));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Currying:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-recursion',
        title: 'Recursion',
        badge: 'ALGORITHMS',
        emoji: '🔁',
        defaultCode: `function factorial(n) {
  // Base case
  if (n === 0 || n === 1) return 1;
  // Recursive case
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120`,
        content: `
    <h3>📌 Deep Dive: Recursion</h3>
    <p>The <strong>Recursion</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Recursion</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Recursion
console.log("Initializing Recursion...");

try {
  // Using the core concept
  function factorial(n) {
  // Base case
  if (n === 0 || n === 1) return 1;
  // Recursive case
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Recursion:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-dom-selection',
        title: 'DOM Selection',
        badge: 'DOM',
        emoji: '🎯',
        defaultCode: `// Notice: This is just an example, it won't affect the real UI here unless IDs match!
const el = document.getElementById("progressText");
console.log("Selected by ID:", el ? el.textContent : "Not found");

const classes = document.querySelectorAll(".cb-h");
console.log("Selected by Class count:", classes.length);`,
        content: `
    <h3>📌 Deep Dive: DOM Selection</h3>
    <p>The <strong>DOM Selection</strong> is a fundamental DOM API in JavaScript that allows developers to traverse and update efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>DOM Selection</code>, the Browser Rendering Engine (e.g., Blink/WebKit) optimizes the layout recalculations to ensure minimal overhead. By utilizing native C++ bindings for this dom api, JavaScript can traverse and update efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Batch your DOM reads and writes to avoid layout thrashing and forced synchronous layouts.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of DOM Selection
console.log("Initializing DOM Selection...");

try {
  // Using the core concept
  // Notice: This is just an example, it won't affect the real UI here unless IDs match!
const el = document.getElementById("progressText");
console.log("Selected by ID:", el ? el.textContent : "Not found");

const classes = document.querySelectorAll(".cb-h");
console.log("Selected by Class count:", classes.length);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing DOM Selection:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-dom-manipulation',
        title: 'DOM Manipulation',
        badge: 'DOM',
        emoji: '🛠️',
        defaultCode: `const div = document.createElement("div");
div.textContent = "I was created dynamically!";
div.style.color = "cyan";
div.style.padding = "10px";
div.style.border = "1px solid cyan";

// Append it to our console output to see it!
document.getElementById('consoleOutput').appendChild(div);`,
        content: `
    <h3>📌 Deep Dive: DOM Manipulation</h3>
    <p>The <strong>DOM Manipulation</strong> is a fundamental DOM API in JavaScript that allows developers to traverse and update efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>DOM Manipulation</code>, the Browser Rendering Engine (e.g., Blink/WebKit) optimizes the layout recalculations to ensure minimal overhead. By utilizing native C++ bindings for this dom api, JavaScript can traverse and update efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Batch your DOM reads and writes to avoid layout thrashing and forced synchronous layouts.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of DOM Manipulation
console.log("Initializing DOM Manipulation...");

try {
  // Using the core concept
  const div = document.createElement("div");
div.textContent = "I was created dynamically!";
div.style.color = "cyan";
div.style.padding = "10px";
div.style.border = "1px solid cyan";

// Append it to our console output to see it!
document.getElementById('consoleOutput').appendChild(div);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing DOM Manipulation:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-events',
        title: 'Event Listeners',
        badge: 'DOM',
        emoji: '👂',
        defaultCode: `const btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.style.padding = "10px 20px";

btn.addEventListener("click", (e) => {
  console.log("Button was clicked! Event type:", e.type);
  btn.textContent = "Clicked!";
});

document.getElementById('consoleOutput').appendChild(btn);`,
        content: `
    <h3>📌 Deep Dive: Event Listeners</h3>
    <p>The <strong>Event Listeners</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Event Listeners</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Event Listeners
console.log("Initializing Event Listeners...");

try {
  // Using the core concept
  const btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.style.padding = "10px 20px";

btn.addEventListener("click", (e) => {
  console.log("Button was clicked! Event type:", e.type);
  btn.textContent = "Clicked!";
});

document.getElementById('consoleOutput').appendChild(btn);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Event Listeners:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-event-delegation',
        title: 'Event Delegation',
        badge: 'DOM',
        emoji: '🤝',
        defaultCode: `const list = document.createElement("ul");
list.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

// Attach ONE listener to the parent instead of THREE to the children!
list.addEventListener("click", (e) => {
  if(e.target.tagName === "LI") {
    console.log("You clicked on:", e.target.textContent);
  }
});

document.getElementById('consoleOutput').appendChild(list);`,
        content: `
    <h3>📌 Deep Dive: Event Delegation</h3>
    <p>The <strong>Event Delegation</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Event Delegation</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Event Delegation
console.log("Initializing Event Delegation...");

try {
  // Using the core concept
  const list = document.createElement("ul");
list.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

// Attach ONE listener to the parent instead of THREE to the children!
list.addEventListener("click", (e) => {
  if(e.target.tagName === "LI") {
    console.log("You clicked on:", e.target.textContent);
  }
});

document.getElementById('consoleOutput').appendChild(list);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Event Delegation:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-localstorage',
        title: 'localStorage',
        badge: 'WEB APIs',
        emoji: '💾',
        defaultCode: `// Save data

    try {
        localStorage.setItem('mySecretKey', "Super Secret Value!");
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

// Retrieve data
const val = localStorage.getItem("mySecretKey");
console.log("Retrieved:", val);

// Remove data
localStorage.removeItem("mySecretKey");`,
        content: `
    <h3>📌 Deep Dive: localStorage</h3>
    <p>The <strong>localStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>localStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of localStorage
console.log("Initializing localStorage...");

try {
  // Using the core concept
  // Save data

    try {
        localStorage.setItem('mySecretKey', "Super Secret Value!");
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }

// Retrieve data
const val = localStorage.getItem("mySecretKey");
console.log("Retrieved:", val);

// Remove data
localStorage.removeItem("mySecretKey");
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing localStorage:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-sessionstorage',
        title: 'sessionStorage',
        badge: 'WEB APIs',
        emoji: '🕒',
        defaultCode: `sessionStorage.setItem("sessionID", "12345ABC");
console.log("Session ID:", sessionStorage.getItem("sessionID"));

// Note: This data will be erased when the tab is closed!`,
        content: `
    <h3>📌 Deep Dive: sessionStorage</h3>
    <p>The <strong>sessionStorage</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>sessionStorage</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of sessionStorage
console.log("Initializing sessionStorage...");

try {
  // Using the core concept
  sessionStorage.setItem("sessionID", "12345ABC");
console.log("Session ID:", sessionStorage.getItem("sessionID"));

// Note: This data will be erased when the tab is closed!
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing sessionStorage:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-fetch-api',
        title: 'Fetch API',
        badge: 'WEB APIs',
        emoji: '🌐',
        defaultCode: `console.log("Fetching data...");

// We use await since our sandbox wraps this in an async IIFE!
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();

console.log("Fetched User:", user.name);`,
        content: `
    <h3>📌 Deep Dive: Fetch API</h3>
    <p>The <strong>Fetch API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Fetch API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Fetch API
console.log("Initializing Fetch API...");

try {
  // Using the core concept
  console.log("Fetching data...");

// We use await since our sandbox wraps this in an async IIFE!
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();

console.log("Fetched User:", user.name);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Fetch API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-promises',
        title: 'Promises',
        badge: 'ASYNC',
        emoji: '🤝',
        defaultCode: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if(success) resolve("Operation successful!");
    else reject("Operation failed.");
  }, 1000);
});

console.log("Waiting for promise...");
myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));`,
        content: `
    <h3>📌 Deep Dive: Promises</h3>
    <p>The <strong>Promises</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Promises</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Promises
console.log("Initializing Promises...");

try {
  // Using the core concept
  const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if(success) resolve("Operation successful!");
    else reject("Operation failed.");
  }, 1000);
});

console.log("Waiting for promise...");
myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Promises:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-async-await',
        title: 'Async / Await',
        badge: 'ASYNC',
        emoji: '⏳',
        defaultCode: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doTask() {
  console.log("Task started...");
  await delay(1000);
  console.log("1 second passed...");
  await delay(1000);
  console.log("Task finished!");
}

doTask();`,
        content: `
    <h3>📌 Deep Dive: Async / Await</h3>
    <p>The <strong>Async / Await</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Async / Await</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Async / Await
console.log("Initializing Async / Await...");

try {
  // Using the core concept
  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doTask() {
  console.log("Task started...");
  await delay(1000);
  console.log("1 second passed...");
  await delay(1000);
  console.log("Task finished!");
}

doTask();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Async / Await:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-promise-all',
        title: 'Promise.all()',
        badge: 'ASYNC',
        emoji: '📦',
        defaultCode: `const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("foo"), 1000);
});

console.log("Waiting for all promises...");
const results = await Promise.all([p1, p2, p3]);
console.log("All done:", results);`,
        content: `
    <h3>📌 Deep Dive: Promise.all()</h3>
    <p>The <strong>Promise.all()</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Promise.all()</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Promise.all()
console.log("Initializing Promise.all()...");

try {
  // Using the core concept
  const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("foo"), 1000);
});

console.log("Waiting for all promises...");
const results = await Promise.all([p1, p2, p3]);
console.log("All done:", results);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Promise.all():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-timers',
        title: 'Timers (setTimeout/setInterval)',
        badge: 'ASYNC',
        emoji: '⏱️',
        defaultCode: `console.log("Start");

const timeoutId = setTimeout(() => {
  console.log("This runs after 1 second!");
}, 1000);

let count = 0;
const intervalId = setInterval(() => {
  console.log("Tick:", ++count);
  if (count === 3) clearInterval(intervalId); // Stop after 3 ticks
}, 500);`,
        content: `
    <h3>📌 Deep Dive: Timers (setTimeout/setInterval)</h3>
    <p>The <strong>Timers (setTimeout/setInterval)</strong> is a fundamental Asynchronous API in JavaScript that allows developers to manage concurrency efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Timers (setTimeout/setInterval)</code>, the Event Loop optimizes the microtask queue to ensure minimal overhead. By utilizing native C++ bindings for this asynchronous api, JavaScript can manage concurrency efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always handle rejections using .catch() or try/catch in async functions to prevent unhandled promise rejections.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Timers (setTimeout/setInterval)
console.log("Initializing Timers (setTimeout/setInterval)...");

try {
  // Using the core concept
  console.log("Start");

const timeoutId = setTimeout(() => {
  console.log("This runs after 1 second!");
}, 1000);

let count = 0;
const intervalId = setInterval(() => {
  console.log("Tick:", ++count);
  if (count === 3) clearInterval(intervalId); // Stop after 3 ticks
}, 500);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Timers (setTimeout/setInterval):", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-classes',
        title: 'Classes',
        badge: 'OOP',
        emoji: '🏗️',
        defaultCode: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks!");
  }
}

const dog = new Dog("Rex");
dog.speak();`,
        content: `
    <h3>📌 Deep Dive: Classes</h3>
    <p>The <strong>Classes</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Classes</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Classes
console.log("Initializing Classes...");

try {
  // Using the core concept
  class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks!");
  }
}

const dog = new Dog("Rex");
dog.speak();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Classes:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-prototypes',
        title: 'Prototypes',
        badge: 'OOP',
        emoji: '🧬',
        defaultCode: `function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayName = function() {
  console.log("My name is", this.name);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.sayName();
console.log("Share same method?", p1.sayName === p2.sayName);`,
        content: `
    <h3>📌 Deep Dive: Prototypes</h3>
    <p>The <strong>Prototypes</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Prototypes</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Prototypes
console.log("Initializing Prototypes...");

try {
  // Using the core concept
  function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayName = function() {
  console.log("My name is", this.name);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.sayName();
console.log("Share same method?", p1.sayName === p2.sayName);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Prototypes:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-getters-setters',
        title: 'Getters & Setters',
        badge: 'OOP',
        emoji: '🚪',
        defaultCode: `class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  
  get balance() {
    return "$" + this._balance;
  }
  
  set balance(amount) {
    if (amount < 0) console.log("Cannot have negative balance!");
    else this._balance = amount;
  }
}

const acc = new BankAccount(100);
console.log(acc.balance); // $100
acc.balance = -50; // Error
acc.balance = 200;
console.log(acc.balance); // $200`,
        content: `
    <h3>📌 Deep Dive: Getters & Setters</h3>
    <p>The <strong>Getters & Setters</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Getters & Setters</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Getters & Setters
console.log("Initializing Getters & Setters...");

try {
  // Using the core concept
  class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  
  get balance() {
    return "$" + this._balance;
  }
  
  set balance(amount) {
    if (amount < 0) console.log("Cannot have negative balance!");
    else this._balance = amount;
  }
}

const acc = new BankAccount(100);
console.log(acc.balance); // $100
acc.balance = -50; // Error
acc.balance = 200;
console.log(acc.balance); // $200
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Getters & Setters:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-modules',
        title: 'Modules (Import/Export)',
        badge: 'ES6+',
        emoji: '📦',
        defaultCode: `// Example of how modules work (simulated in sandbox)
const mathModule = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};

// In a real environment:
// export const add = ...
// import { add } from './math.js';

console.log("Add:", mathModule.add(5, 3));`,
        content: `
    <h3>📌 Deep Dive: Modules (Import/Export)</h3>
    <p>The <strong>Modules (Import/Export)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Modules (Import/Export)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Modules (Import/Export)
console.log("Initializing Modules (Import/Export)...");

try {
  // Using the core concept
  // Example of how modules work (simulated in sandbox)
const mathModule = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};

// In a real environment:
// export const add = ...
// import { add } from './math.js';

console.log("Add:", mathModule.add(5, 3));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Modules (Import/Export):", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-optional-chaining',
        title: 'Optional Chaining (?.)',
        badge: 'ES2020',
        emoji: '❓',
        defaultCode: `const user = {
  name: "Sanskar",
  address: {
    city: "Mumbai"
    }
};

// Without optional chaining, this would throw an error!
console.log("Zip code:", user.address?.zipCode);
console.log("Country:", user.contact?.country);

// Method chaining
user.greet?.();`,
        content: `
    <h3>📌 Deep Dive: Optional Chaining (?.)</h3>
    <p>The <strong>Optional Chaining (?.)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Optional Chaining (?.)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Optional Chaining (?.)
console.log("Initializing Optional Chaining (?.)...");

try {
  // Using the core concept
  const user = {
  name: "Sanskar",
  address: {
    city: "Mumbai"
    }
};

// Without optional chaining, this would throw an error!
console.log("Zip code:", user.address?.zipCode);
console.log("Country:", user.contact?.country);

// Method chaining
user.greet?.();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Optional Chaining (?.):", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-nullish-coalescing',
        title: 'Nullish Coalescing (??)',
        badge: 'ES2020',
        emoji: '🤝',
        defaultCode: `// OR (||) operator considers 0 and '' as falsy
const qty = 0;
console.log("Using || :", qty || 10);

// Nullish (??) only checks for null or undefined
console.log("Using ?? :", qty ?? 10);`,
        content: `
    <h3>📌 Deep Dive: Nullish Coalescing (??)</h3>
    <p>The <strong>Nullish Coalescing (??)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Nullish Coalescing (??)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Nullish Coalescing (??)
console.log("Initializing Nullish Coalescing (??)...");

try {
  // Using the core concept
  // OR (||) operator considers 0 and '' as falsy
const qty = 0;
console.log("Using || :", qty || 10);

// Nullish (??) only checks for null or undefined
console.log("Using ?? :", qty ?? 10);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Nullish Coalescing (??):", error);
}
    </code></pre>
    `
    }

    ,
    {
        id: 'js-proxy',
        title: 'Proxy API',
        badge: 'ADVANCED',
        emoji: '🛡️',
        defaultCode: `const target = { name: 'Sanskar', age: 25 };
const handler = {
  get: function(obj, prop) {
    console.log('Reading property: ' + prop);
    return prop in obj ? obj[prop] : 'Not Found!';
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.role);`,
        content: `
    <h3>📌 Deep Dive: Proxy API</h3>
    <p>The <strong>Proxy API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Proxy API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Proxy API
console.log("Initializing Proxy API...");

try {
  // Using the core concept
  const target = { name: 'Sanskar', age: 25 };
const handler = {
  get: function(obj, prop) {
    console.log('Reading property: ' + prop);
    return prop in obj ? obj[prop] : 'Not Found!';
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.role);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Proxy API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-reflect',
        title: 'Reflect API',
        badge: 'ADVANCED',
        emoji: '🪞',
        defaultCode: `const obj = { x: 1, y: 2 };

// Using Reflect to safely define properties
Reflect.defineProperty(obj, 'z', { value: 3, enumerable: true });
console.log('obj after Reflect.defineProperty:', obj);

// Safe deletion
const deleted = Reflect.deleteProperty(obj, 'x');
console.log('Was x deleted?', deleted);
console.log('obj now:', obj);`,
        content: `
    <h3>📌 Deep Dive: Reflect API</h3>
    <p>The <strong>Reflect API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Reflect API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Reflect API
console.log("Initializing Reflect API...");

try {
  // Using the core concept
  const obj = { x: 1, y: 2 };

// Using Reflect to safely define properties
Reflect.defineProperty(obj, 'z', { value: 3, enumerable: true });
console.log('obj after Reflect.defineProperty:', obj);

// Safe deletion
const deleted = Reflect.deleteProperty(obj, 'x');
console.log('Was x deleted?', deleted);
console.log('obj now:', obj);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Reflect API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-generators',
        title: 'Generators (yield)',
        badge: 'ES6+',
        emoji: '⚙️',
        defaultCode: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 'Done!';
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 'Done!', done: true}`,
        content: `
    <h3>📌 Deep Dive: Generators (yield)</h3>
    <p>The <strong>Generators (yield)</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Generators (yield)</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Generators (yield)
console.log("Initializing Generators (yield)...");

try {
  // Using the core concept
  function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 'Done!';
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 'Done!', done: true}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Generators (yield):", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-weakmap',
        title: 'WeakMap',
        badge: 'ES6+',
        emoji: '🗺️',
        defaultCode: `let user = { name: 'John' };
const weakMap = new WeakMap();

weakMap.set(user, 'Super Secret Data');
console.log('WeakMap has user?', weakMap.has(user));

// Once the object is garbage collected, it is removed from WeakMap!
user = null; // Memory is freed automatically`,
        content: `
    <h3>📌 Deep Dive: WeakMap</h3>
    <p>The <strong>WeakMap</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WeakMap</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WeakMap
console.log("Initializing WeakMap...");

try {
  // Using the core concept
  let user = { name: 'John' };
const weakMap = new WeakMap();

weakMap.set(user, 'Super Secret Data');
console.log('WeakMap has user?', weakMap.has(user));

// Once the object is garbage collected, it is removed from WeakMap!
user = null; // Memory is freed automatically
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WeakMap:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intl',
        title: 'Intl API',
        badge: 'API',
        emoji: '🌍',
        defaultCode: `const number = 123456.789;
const date = new Date();

console.log('US English format:', new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
console.log('German format:', new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

console.log('Date in Japan:', new Intl.DateTimeFormat('ja-JP').format(date));`,
        content: `
    <h3>📌 Deep Dive: Intl API</h3>
    <p>The <strong>Intl API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Intl API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Intl API
console.log("Initializing Intl API...");

try {
  // Using the core concept
  const number = 123456.789;
const date = new Date();

console.log('US English format:', new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
console.log('German format:', new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

console.log('Date in Japan:', new Intl.DateTimeFormat('ja-JP').format(date));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Intl API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-url-search-params',
        title: 'URLSearchParams',
        badge: 'API',
        emoji: '🔗',
        defaultCode: `// Parsing a URL query string
const queryString = '?product=laptop&color=silver&price=1500';
const params = new URLSearchParams(queryString);

console.log('Product:', params.get('product'));
console.log('Color:', params.get('color'));

// Adding and modifying
params.append('inStock', 'true');
params.set('price', '1200');
console.log('New Query String:', params.toString());`,
        content: `
    <h3>📌 Deep Dive: URLSearchParams</h3>
    <p>The <strong>URLSearchParams</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>URLSearchParams</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of URLSearchParams
console.log("Initializing URLSearchParams...");

try {
  // Using the core concept
  // Parsing a URL query string
const queryString = '?product=laptop&color=silver&price=1500';
const params = new URLSearchParams(queryString);

console.log('Product:', params.get('product'));
console.log('Color:', params.get('color'));

// Adding and modifying
params.append('inStock', 'true');
params.set('price', '1200');
console.log('New Query String:', params.toString());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing URLSearchParams:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-blob',
        title: 'Blob Object',
        badge: 'WEB API',
        emoji: '🩸',
        defaultCode: `// Creating a blob containing text
const myBlob = new Blob(['Hello, World! Welcome to JS Mastery.'], { type: 'text/plain' });

console.log('Blob Size:', myBlob.size, 'bytes');
console.log('Blob Type:', myBlob.type);

// Reading the blob using Promises
myBlob.text().then(text => console.log('Extracted Text:', text));`,
        content: `
    <h3>📌 Deep Dive: Blob Object</h3>
    <p>The <strong>Blob Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Blob Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Blob Object
console.log("Initializing Blob Object...");

try {
  // Using the core concept
  // Creating a blob containing text
const myBlob = new Blob(['Hello, World! Welcome to JS Mastery.'], { type: 'text/plain' });

console.log('Blob Size:', myBlob.size, 'bytes');
console.log('Blob Type:', myBlob.type);

// Reading the blob using Promises
myBlob.text().then(text => console.log('Extracted Text:', text));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Blob Object:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-web-workers',
        title: 'Web Workers',
        badge: 'PERFORMANCE',
        emoji: '👷',
        defaultCode: `console.log('Web Workers run code in a separate background thread!');
console.log('Since we cant spawn a real external file in this sandbox, here is how you do it:');
console.log('const worker = new Worker(\\'worker.js\\');');
console.log('worker.postMessage({ type: \\'start\\' });');
console.log('worker.onmessage = e => console.log(e.data);');
console.log('This keeps the main UI thread totally smooth during heavy calculations.');`,
        content: `
    <h3>📌 Deep Dive: Web Workers</h3>
    <p>The <strong>Web Workers</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Web Workers</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Web Workers
console.log("Initializing Web Workers...");

try {
  // Using the core concept
  console.log('Web Workers run code in a separate background thread!');
console.log('Since we cant spawn a real external file in this sandbox, here is how you do it:');
console.log('const worker = new Worker(\\'worker.js\\');');
console.log('worker.postMessage({ type: \\'start\\' });');
console.log('worker.onmessage = e => console.log(e.data);');
console.log('This keeps the main UI thread totally smooth during heavy calculations.');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Web Workers:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-intersection-observer',
        title: 'Intersection Observer',
        badge: 'WEB API',
        emoji: '👁️',
        defaultCode: `// Intersection Observer detects when an element enters the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible!');
    }
  });
});

console.log('Observer created! In a real app, you would run:');
console.log('observer.observe(document.querySelector(\\'div\\'));');`,
        content: `
    <h3>📌 Deep Dive: Intersection Observer</h3>
    <p>The <strong>Intersection Observer</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Intersection Observer</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Intersection Observer
console.log("Initializing Intersection Observer...");

try {
  // Using the core concept
  // Intersection Observer detects when an element enters the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible!');
    }
  });
});

console.log('Observer created! In a real app, you would run:');
console.log('observer.observe(document.querySelector(\\'div\\'));');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Intersection Observer:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-indexeddb',
        title: 'IndexedDB',
        badge: 'STORAGE',
        emoji: '🗄️',
        defaultCode: `console.log('IndexedDB is a massive NoSQL database inside your browser!');
console.log('Usage involves opening a request and handling events:');
console.log('const request = indexedDB.open(\\'MyDatabase\\', 1);');
console.log('request.onupgradeneeded = e => {');
console.log('  const db = e.target.result;');
console.log('  db.createObjectStore(\\'Users\\', { keyPath: \\'id\\' });');
console.log('};');`,
        content: `
    <h3>📌 Deep Dive: IndexedDB</h3>
    <p>The <strong>IndexedDB</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IndexedDB</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IndexedDB
console.log("Initializing IndexedDB...");

try {
  // Using the core concept
  console.log('IndexedDB is a massive NoSQL database inside your browser!');
console.log('Usage involves opening a request and handling events:');
console.log('const request = indexedDB.open(\\'MyDatabase\\', 1);');
console.log('request.onupgradeneeded = e => {');
console.log('  const db = e.target.result;');
console.log('  db.createObjectStore(\\'Users\\', { keyPath: \\'id\\' });');
console.log('};');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IndexedDB:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-geolocation',
        title: 'Geolocation API',
        badge: 'WEB API',
        emoji: '📍',
        defaultCode: `if ('geolocation' in navigator) {
  console.log('Geolocation is supported! We could request coordinates:');
  console.log('navigator.geolocation.getCurrentPosition(successCallback, errorCallback);');
} else {
  console.log('Geolocation is not supported by your browser.');
}`,
        content: `
    <h3>📌 Deep Dive: Geolocation API</h3>
    <p>The <strong>Geolocation API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Geolocation API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Geolocation API
console.log("Initializing Geolocation API...");

try {
  // Using the core concept
  if ('geolocation' in navigator) {
  console.log('Geolocation is supported! We could request coordinates:');
  console.log('navigator.geolocation.getCurrentPosition(successCallback, errorCallback);');
} else {
  console.log('Geolocation is not supported by your browser.');
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Geolocation API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-clipboard',
        title: 'Clipboard API',
        badge: 'WEB API',
        emoji: '📋',
        defaultCode: `async function copyData() {
  try {
    // In a real sandbox, this requires user interaction (clicking a button)
    // await navigator.clipboard.writeText('Sanskar is awesome!');
    console.log('Clipboard API allows async read/write of text and images!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
copyData();`,
        content: `
    <h3>📌 Deep Dive: Clipboard API</h3>
    <p>The <strong>Clipboard API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Clipboard API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Clipboard API
console.log("Initializing Clipboard API...");

try {
  // Using the core concept
  async function copyData() {
  try {
    // In a real sandbox, this requires user interaction (clicking a button)
    // await navigator.clipboard.writeText('Sanskar is awesome!');
    console.log('Clipboard API allows async read/write of text and images!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
copyData();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Clipboard API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-notifications',
        title: 'Notifications API',
        badge: 'WEB API',
        emoji: '🔔',
        defaultCode: `console.log('Check Notification Permission:', Notification.permission);

if (Notification.permission === 'granted') {
  // new Notification('Hello from JS!');
  console.log('We can show native OS push notifications!');
} else {
  console.log('Request permission via: Notification.requestPermission()');
}`,
        content: `
    <h3>📌 Deep Dive: Notifications API</h3>
    <p>The <strong>Notifications API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Notifications API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Notifications API
console.log("Initializing Notifications API...");

try {
  // Using the core concept
  console.log('Check Notification Permission:', Notification.permission);

if (Notification.permission === 'granted') {
  // new Notification('Hello from JS!');
  console.log('We can show native OS push notifications!');
} else {
  console.log('Request permission via: Notification.requestPermission()');
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Notifications API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-websockets',
        title: 'WebSockets',
        badge: 'NETWORK',
        emoji: '🔌',
        defaultCode: `// Create a WebSocket connection
// const socket = new WebSocket('wss://example.com/socket');

console.log('WebSockets allow real-time bi-directional data flow!');
console.log('socket.addEventListener(\\'open\\', function (event) {');
console.log('    socket.send(\\'Hello Server!\\');');
console.log('});');
console.log('socket.addEventListener(\\'message\\', function (event) {');
console.log('    console.log(\\'Message from server \\', event.data);');
console.log('});');`,
        content: `
    <h3>📌 Deep Dive: WebSockets</h3>
    <p>The <strong>WebSockets</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebSockets</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebSockets
console.log("Initializing WebSockets...");

try {
  // Using the core concept
  // Create a WebSocket connection
// const socket = new WebSocket('wss://example.com/socket');

console.log('WebSockets allow real-time bi-directional data flow!');
console.log('socket.addEventListener(\\'open\\', function (event) {');
console.log('    socket.send(\\'Hello Server!\\');');
console.log('});');
console.log('socket.addEventListener(\\'message\\', function (event) {');
console.log('    console.log(\\'Message from server \\', event.data);');
console.log('});');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebSockets:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-performance',
        title: 'Performance API',
        badge: 'WEB API',
        emoji: '🏎️',
        defaultCode: `const t0 = performance.now();
for (let i = 0; i < 1000000; i++) {
  // heavy loop
}
const t1 = performance.now();
console.log('Loop took ' + (t1 - t0) + ' milliseconds.');

console.log('Memory usage:', performance.memory?.usedJSHeapSize);`,
        content: `
    <h3>📌 Deep Dive: Performance API</h3>
    <p>The <strong>Performance API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Performance API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Performance API
console.log("Initializing Performance API...");

try {
  // Using the core concept
  const t0 = performance.now();
for (let i = 0; i < 1000000; i++) {
  // heavy loop
}
const t1 = performance.now();
console.log('Loop took ' + (t1 - t0) + ' milliseconds.');

console.log('Memory usage:', performance.memory?.usedJSHeapSize);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Performance API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-flatmap',
        title: 'flatMap()',
        badge: 'ARRAYS',
        emoji: '🥞',
        defaultCode: `const sentences = ['JavaScript is', 'really awesome'];

// map() creates an array of arrays
const mapped = sentences.map(s => s.split(' '));
console.log('map:', mapped);

// flatMap() maps AND flattens the result by 1 depth
const flatMapped = sentences.flatMap(s => s.split(' '));
console.log('flatMap:', flatMapped);`,
        content: `
    <h3>📌 Deep Dive: flatMap()</h3>
    <p>The <strong>flatMap()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>flatMap()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of flatMap()
console.log("Initializing flatMap()...");

try {
  // Using the core concept
  const sentences = ['JavaScript is', 'really awesome'];

// map() creates an array of arrays
const mapped = sentences.map(s => s.split(' '));
console.log('map:', mapped);

// flatMap() maps AND flattens the result by 1 depth
const flatMapped = sentences.flatMap(s => s.split(' '));
console.log('flatMap:', flatMapped);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing flatMap():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-array-at',
        title: 'Array at()',
        badge: 'ES2022',
        emoji: '🎯',
        defaultCode: `const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// Traditional way to get the last item
console.log('Last item (old way):', array[array.length - 1]);

// Using the modern at() method (supports negative indices!)
console.log('Last item (at):', array.at(-1));
console.log('Second to last:', array.at(-2));`,
        content: `
    <h3>📌 Deep Dive: Array at()</h3>
    <p>The <strong>Array at()</strong> is a fundamental Array Method in JavaScript that allows developers to iterate and mutate efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Array at()</code>, the V8 engine optimizes the memory allocation to ensure minimal overhead. By utilizing native C++ bindings for this array method, JavaScript can iterate and mutate efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid mutating the original array if possible; prefer returning new array references to maintain pure functions.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Array at()
console.log("Initializing Array at()...");

try {
  // Using the core concept
  const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// Traditional way to get the last item
console.log('Last item (old way):', array[array.length - 1]);

// Using the modern at() method (supports negative indices!)
console.log('Last item (at):', array.at(-1));
console.log('Second to last:', array.at(-2));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Array at():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-structured-clone',
        title: 'structuredClone()',
        badge: 'WEB API',
        emoji: '🧬',
        defaultCode: `const original = {
  name: 'Sanskar',
  hobbies: ['Code', 'Design'],
  date: new Date()
};

// Deep copy natively! No need for JSON.parse(JSON.stringify)
const deepCopy = structuredClone(original);

deepCopy.hobbies.push('Gaming');

console.log('Original hobbies:', original.hobbies);
console.log('Cloned hobbies:', deepCopy.hobbies);`,
        content: `
    <h3>📌 Deep Dive: structuredClone()</h3>
    <p>The <strong>structuredClone()</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>structuredClone()</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of structuredClone()
console.log("Initializing structuredClone()...");

try {
  // Using the core concept
  const original = {
  name: 'Sanskar',
  hobbies: ['Code', 'Design'],
  date: new Date()
};

// Deep copy natively! No need for JSON.parse(JSON.stringify)
const deepCopy = structuredClone(original);

deepCopy.hobbies.push('Gaming');

console.log('Original hobbies:', original.hobbies);
console.log('Cloned hobbies:', deepCopy.hobbies);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing structuredClone():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-object-groupby',
        title: 'Object.groupBy()',
        badge: 'ES2024',
        emoji: '🗂️',
        defaultCode: `const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'meat', type: 'meat', quantity: 23 },
];

// The modern ES2024 way to group arrays!
const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);`,
        content: `
    <h3>📌 Deep Dive: Object.groupBy()</h3>
    <p>The <strong>Object.groupBy()</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Object.groupBy()</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Object.groupBy()
console.log("Initializing Object.groupBy()...");

try {
  // Using the core concept
  const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'meat', type: 'meat', quantity: 23 },
];

// The modern ES2024 way to group arrays!
const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Object.groupBy():", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-symbols',
        title: 'Symbols',
        badge: 'ES6+',
        emoji: '💠',
        defaultCode: `const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log('Are symbols strictly equal?', sym1 === sym2); // false

const user = {
  name: 'Sanskar',
  [sym1]: 9999 // Hidden identifier!
};

console.log('User name:', user.name);
console.log('Hidden ID:', user[sym1]);
console.log('Keys available (Symbol is hidden):', Object.keys(user));`,
        content: `
    <h3>📌 Deep Dive: Symbols</h3>
    <p>The <strong>Symbols</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Symbols</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Symbols
console.log("Initializing Symbols...");

try {
  // Using the core concept
  const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log('Are symbols strictly equal?', sym1 === sym2); // false

const user = {
  name: 'Sanskar',
  [sym1]: 9999 // Hidden identifier!
};

console.log('User name:', user.name);
console.log('Hidden ID:', user[sym1]);
console.log('Keys available (Symbol is hidden):', Object.keys(user));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Symbols:", error);
}
    </code></pre>
    `
    }

    ,
    {
        id: 'js-regex',
        title: 'Regular Expressions',
        badge: 'BASICS',
        emoji: '🔤',
        defaultCode: `const text = 'Hello, my email is sanskar@example.com! Please contact me.';
const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}/;

console.log('Original Text:', text);
console.log('Found Email:', text.match(emailRegex)[0]);
console.log('Test result:', emailRegex.test('not-an-email'));`,
        content: `
    <h3>📌 Deep Dive: Regular Expressions</h3>
    <p>The <strong>Regular Expressions</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Regular Expressions</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Regular Expressions
console.log("Initializing Regular Expressions...");

try {
  // Using the core concept
  const text = 'Hello, my email is sanskar@example.com! Please contact me.';
const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}/;

console.log('Original Text:', text);
console.log('Found Email:', text.match(emailRegex)[0]);
console.log('Test result:', emailRegex.test('not-an-email'));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Regular Expressions:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-math',
        title: 'Math Object',
        badge: 'BASICS',
        emoji: '🔢',
        defaultCode: `console.log('PI:', Math.PI);
console.log('Round 4.6:', Math.round(4.6));
console.log('Random number (0-10):', Math.floor(Math.random() * 11));
console.log('Power (2^3):', Math.pow(2, 3));
console.log('Square Root of 64:', Math.sqrt(64));`,
        content: `
    <h3>📌 Deep Dive: Math Object</h3>
    <p>The <strong>Math Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Math Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Math Object
console.log("Initializing Math Object...");

try {
  // Using the core concept
  console.log('PI:', Math.PI);
console.log('Round 4.6:', Math.round(4.6));
console.log('Random number (0-10):', Math.floor(Math.random() * 11));
console.log('Power (2^3):', Math.pow(2, 3));
console.log('Square Root of 64:', Math.sqrt(64));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Math Object:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-date',
        title: 'Date Object',
        badge: 'BASICS',
        emoji: '📅',
        defaultCode: `const now = new Date();
console.log('Current Date & Time:', now.toString());
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth());
console.log('Day of the week (0-6):', now.getDay());
console.log('ISO String:', now.toISOString());`,
        content: `
    <h3>📌 Deep Dive: Date Object</h3>
    <p>The <strong>Date Object</strong> is a fundamental Object Method in JavaScript that allows developers to manage properties efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Date Object</code>, the V8 engine optimizes the hidden classes (Shapes) to ensure minimal overhead. By utilizing native C++ bindings for this object method, JavaScript can manage properties efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Avoid dynamically adding or deleting properties frequently, as it de-optimizes engine hidden classes.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Date Object
console.log("Initializing Date Object...");

try {
  // Using the core concept
  const now = new Date();
console.log('Current Date & Time:', now.toString());
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth());
console.log('Day of the week (0-6):', now.getDay());
console.log('ISO String:', now.toISOString());
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Date Object:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-event-loop',
        title: 'The Event Loop',
        badge: 'ADVANCED',
        emoji: '🔄',
        defaultCode: `console.log('1. First - Synchronous');

setTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3. Microtask (Promise)'));

console.log('2. Second - Synchronous');
// Notice the execution order in the console!`,
        content: `
    <h3>📌 Deep Dive: The Event Loop</h3>
    <p>The <strong>The Event Loop</strong> is a fundamental Event Interface in JavaScript that allows developers to handle user interactions efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>The Event Loop</code>, the V8 engine optimizes the event bubbling and capturing to ensure minimal overhead. By utilizing native C++ bindings for this event interface, JavaScript can handle user interactions efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use event delegation on parent elements when handling events for many identical child elements to save memory.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of The Event Loop
console.log("Initializing The Event Loop...");

try {
  // Using the core concept
  console.log('1. First - Synchronous');

setTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3. Microtask (Promise)'));

console.log('2. Second - Synchronous');
// Notice the execution order in the console!
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing The Event Loop:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-currying',
        title: 'Currying',
        badge: 'ADVANCED',
        emoji: '🍛',
        defaultCode: `function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// Arrow function version:
const multiply = a => b => c => a * b * c;

console.log('Curried Add (1+2+3):', add(1)(2)(3));
console.log('Curried Multiply (2*3*4):', multiply(2)(3)(4));`,
        content: `
    <h3>📌 Deep Dive: Currying</h3>
    <p>The <strong>Currying</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Currying</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Currying
console.log("Initializing Currying...");

try {
  // Using the core concept
  function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// Arrow function version:
const multiply = a => b => c => a * b * c;

console.log('Curried Add (1+2+3):', add(1)(2)(3));
console.log('Curried Multiply (2*3*4):', multiply(2)(3)(4));
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Currying:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-memoization',
        title: 'Memoization',
        badge: 'PERFORMANCE',
        emoji: '🧠',
        defaultCode: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Fetching from cache!');
      return cache[key];
    }
    console.log('Calculating result...');
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}

const slowSquare = memoize(n => n * n);
console.log(slowSquare(10)); // Calculates
console.log(slowSquare(10)); // Fetches from cache!`,
        content: `
    <h3>📌 Deep Dive: Memoization</h3>
    <p>The <strong>Memoization</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Memoization</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Memoization
console.log("Initializing Memoization...");

try {
  // Using the core concept
  function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Fetching from cache!');
      return cache[key];
    }
    console.log('Calculating result...');
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}

const slowSquare = memoize(n => n * n);
console.log(slowSquare(10)); // Calculates
console.log(slowSquare(10)); // Fetches from cache!
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Memoization:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-hoisting',
        title: 'Hoisting',
        badge: 'BASICS',
        emoji: '🏗️',
        defaultCode: `// Function declarations are hoisted completely!
console.log(hoistedFunc()); 

function hoistedFunc() {
  return 'I am hoisted to the top!';
}

// var is hoisted, but initialized with undefined
console.log(hoistedVar); // undefined
var hoistedVar = 'I am var';

// let and const are NOT hoisted in the same way (Temporal Dead Zone)
// console.log(hoistedLet); // This would throw a ReferenceError!`,
        content: `
    <h3>📌 Deep Dive: Hoisting</h3>
    <p>The <strong>Hoisting</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Hoisting</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Hoisting
console.log("Initializing Hoisting...");

try {
  // Using the core concept
  // Function declarations are hoisted completely!
console.log(hoistedFunc()); 

function hoistedFunc() {
  return 'I am hoisted to the top!';
}

// var is hoisted, but initialized with undefined
console.log(hoistedVar); // undefined
var hoistedVar = 'I am var';

// let and const are NOT hoisted in the same way (Temporal Dead Zone)
// console.log(hoistedLet); // This would throw a ReferenceError!
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Hoisting:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-scope-chain',
        title: 'Scope Chain',
        badge: 'BASICS',
        emoji: '🔗',
        defaultCode: `const globalVar = 'I am global';

function outer() {
  const outerVar = 'I am in outer';
  
  function inner() {
    const innerVar = 'I am in inner';
    console.log(innerVar);
    console.log(outerVar); // Looks up the scope chain
    console.log(globalVar); // Looks all the way to global
  }
  inner();
}
outer();`,
        content: `
    <h3>📌 Deep Dive: Scope Chain</h3>
    <p>The <strong>Scope Chain</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Scope Chain</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Scope Chain
console.log("Initializing Scope Chain...");

try {
  // Using the core concept
  const globalVar = 'I am global';

function outer() {
  const outerVar = 'I am in outer';
  
  function inner() {
    const innerVar = 'I am in inner';
    console.log(innerVar);
    console.log(outerVar); // Looks up the scope chain
    console.log(globalVar); // Looks all the way to global
  }
  inner();
}
outer();
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Scope Chain:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-type-coercion',
        title: 'Type Coercion',
        badge: 'BASICS',
        emoji: '🔀',
        defaultCode: `console.log('1' + 2); // '12' (Number coerced to String)
console.log('1' - -1); // 2 (String coerced to Number!)
console.log([] + []); // '' (Empty strings concatenated)
console.log([] + {}); // '[object Object]'
console.log(true + true); // 2 (Booleans coerced to 1)

// Always use === to avoid implicit type coercion bugs!
console.log('1' == 1); // true
console.log('1' === 1); // false`,
        content: `
    <h3>📌 Deep Dive: Type Coercion</h3>
    <p>The <strong>Type Coercion</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Type Coercion</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Type Coercion
console.log("Initializing Type Coercion...");

try {
  // Using the core concept
  console.log('1' + 2); // '12' (Number coerced to String)
console.log('1' - -1); // 2 (String coerced to Number!)
console.log([] + []); // '' (Empty strings concatenated)
console.log([] + {}); // '[object Object]'
console.log(true + true); // 2 (Booleans coerced to 1)

// Always use === to avoid implicit type coercion bugs!
console.log('1' == 1); // true
console.log('1' === 1); // false
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Type Coercion:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-iife',
        title: 'IIFE',
        badge: 'BASICS',
        emoji: '🏃',
        defaultCode: `(function() {
  const privateVar = 'I cannot be accessed outside!';
  console.log('IIFE executed immediately!');
})();

// console.log(privateVar); // This would throw a ReferenceError!

// Modern block scope equivalent:
{
  const alsoPrivate = 'Protected by block scope';
}`,
        content: `
    <h3>📌 Deep Dive: IIFE</h3>
    <p>The <strong>IIFE</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>IIFE</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of IIFE
console.log("Initializing IIFE...");

try {
  // Using the core concept
  (function() {
  const privateVar = 'I cannot be accessed outside!';
  console.log('IIFE executed immediately!');
})();

// console.log(privateVar); // This would throw a ReferenceError!

// Modern block scope equivalent:
{
  const alsoPrivate = 'Protected by block scope';
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing IIFE:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-this-keyword',
        title: 'The \'this\' Keyword',
        badge: 'ADVANCED',
        emoji: '👉',
        defaultCode: `const person = {
  name: 'Sanskar',
  greet: function() {
    console.log('Hello, ' + this.name);
  },
  greetArrow: () => {
    // Arrow functions inherit 'this' from the outer scope!
    console.log('Hello from arrow, ' + this.name);
  }
};

person.greet(); // Works: 'Sanskar'
person.greetArrow(); // Undefined (this refers to the window/global object here)`,
        content: `
    <h3>📌 Deep Dive: The 'this' Keyword</h3>
    <p>The <strong>The 'this' Keyword</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>The 'this' Keyword</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of The 'this' Keyword
console.log("Initializing The 'this' Keyword...");

try {
  // Using the core concept
  const person = {
  name: 'Sanskar',
  greet: function() {
    console.log('Hello, ' + this.name);
  },
  greetArrow: () => {
    // Arrow functions inherit 'this' from the outer scope!
    console.log('Hello from arrow, ' + this.name);
  }
};

person.greet(); // Works: 'Sanskar'
person.greetArrow(); // Undefined (this refers to the window/global object here)
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing The 'this' Keyword:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-call-apply-bind',
        title: 'call, apply, bind',
        badge: 'ADVANCED',
        emoji: '📞',
        defaultCode: `const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

function sayHello(greeting) {
  console.log(greeting + ', ' + this.name + '!');
}

// call: pass arguments one by one
sayHello.call(user1, 'Hello');

// apply: pass arguments as an array
sayHello.apply(user2, ['Hi']);

// bind: returns a new function with bound 'this'
const bobGreeter = sayHello.bind(user2);
bobGreeter('Greetings');`,
        content: `
    <h3>📌 Deep Dive: call, apply, bind</h3>
    <p>The <strong>call, apply, bind</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>call, apply, bind</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of call, apply, bind
console.log("Initializing call, apply, bind...");

try {
  // Using the core concept
  const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

function sayHello(greeting) {
  console.log(greeting + ', ' + this.name + '!');
}

// call: pass arguments one by one
sayHello.call(user1, 'Hello');

// apply: pass arguments as an array
sayHello.apply(user2, ['Hi']);

// bind: returns a new function with bound 'this'
const bobGreeter = sayHello.bind(user2);
bobGreeter('Greetings');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing call, apply, bind:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-strict-mode',
        title: 'Strict Mode',
        badge: 'BASICS',
        emoji: '👮',
        defaultCode: `'use strict';

try {
  // In non-strict mode, this creates a global variable.
  // In strict mode, it throws a ReferenceError!
  mistypedVariable = 10;
} catch (e) {
  console.log('Strict Mode Error caught:', e.message);
}`,
        content: `
    <h3>📌 Deep Dive: Strict Mode</h3>
    <p>The <strong>Strict Mode</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Strict Mode</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Strict Mode
console.log("Initializing Strict Mode...");

try {
  // Using the core concept
  'use strict';

try {
  // In non-strict mode, this creates a global variable.
  // In strict mode, it throws a ReferenceError!
  mistypedVariable = 10;
} catch (e) {
  console.log('Strict Mode Error caught:', e.message);
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Strict Mode:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-bigint',
        title: 'BigInt',
        badge: 'ES2020',
        emoji: '🐘',
        defaultCode: `const maxSafe = Number.MAX_SAFE_INTEGER;
console.log('Max Safe Integer:', maxSafe);

// Doing math beyond MAX_SAFE_INTEGER is inaccurate in JS
console.log('Unsafe math:', maxSafe + 2 === maxSafe + 3); // true! (Wait, what?)

// BigInt solves this! Append 'n' to the end of a number
const bigNum = 9007199254740991n;
console.log('Safe BigInt math:', bigNum + 2n === bigNum + 3n); // false (Correct!)`,
        content: `
    <h3>📌 Deep Dive: BigInt</h3>
    <p>The <strong>BigInt</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>BigInt</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of BigInt
console.log("Initializing BigInt...");

try {
  // Using the core concept
  const maxSafe = Number.MAX_SAFE_INTEGER;
console.log('Max Safe Integer:', maxSafe);

// Doing math beyond MAX_SAFE_INTEGER is inaccurate in JS
console.log('Unsafe math:', maxSafe + 2 === maxSafe + 3); // true! (Wait, what?)

// BigInt solves this! Append 'n' to the end of a number
const bigNum = 9007199254740991n;
console.log('Safe BigInt math:', bigNum + 2n === bigNum + 3n); // false (Correct!)
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing BigInt:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-globalthis',
        title: 'globalThis',
        badge: 'ES2020',
        emoji: '🌐',
        defaultCode: `// Before globalThis, getting the global object was hard:
// Browsers: window
// Node.js: global
// Web Workers: self

// Now, it's universally accessible!
console.log('Is globalThis available?', typeof globalThis !== 'undefined');
console.log('In the browser, globalThis is window:', globalThis === window);`,
        content: `
    <h3>📌 Deep Dive: globalThis</h3>
    <p>The <strong>globalThis</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>globalThis</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of globalThis
console.log("Initializing globalThis...");

try {
  // Using the core concept
  // Before globalThis, getting the global object was hard:
// Browsers: window
// Node.js: global
// Web Workers: self

// Now, it's universally accessible!
console.log('Is globalThis available?', typeof globalThis !== 'undefined');
console.log('In the browser, globalThis is window:', globalThis === window);
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing globalThis:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-webrtc',
        title: 'WebRTC',
        badge: 'WEB API',
        emoji: '📹',
        defaultCode: `console.log('WebRTC is used for peer-to-peer audio, video, and data!');
console.log('Example objects:');
console.log('- RTCPeerConnection');
console.log('- RTCDataChannel');

if (window.RTCPeerConnection) {
  console.log('Your browser supports WebRTC peer connections!');
}`,
        content: `
    <h3>📌 Deep Dive: WebRTC</h3>
    <p>The <strong>WebRTC</strong> is a fundamental Feature in JavaScript that allows developers to utilize efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>WebRTC</code>, the V8 engine optimizes the functionality to ensure minimal overhead. By utilizing native C++ bindings for this feature, JavaScript can utilize efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Always ensure cross-browser compatibility when using modern ES6+ features.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of WebRTC
console.log("Initializing WebRTC...");

try {
  // Using the core concept
  console.log('WebRTC is used for peer-to-peer audio, video, and data!');
console.log('Example objects:');
console.log('- RTCPeerConnection');
console.log('- RTCDataChannel');

if (window.RTCPeerConnection) {
  console.log('Your browser supports WebRTC peer connections!');
}
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing WebRTC:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-canvas-api',
        title: 'Canvas 2D API',
        badge: 'WEB API',
        emoji: '🎨',
        defaultCode: `console.log('The Canvas API provides a means for drawing graphics via JS and the HTML <canvas> element.');
console.log('Basic usage:');
console.log('const canvas = document.getElementById(\"myCanvas\");');
console.log('const ctx = canvas.getContext(\"2d\");');
console.log('ctx.fillStyle = \"red\";');
console.log('ctx.fillRect(10, 10, 100, 100);');`,
        content: `
    <h3>📌 Deep Dive: Canvas 2D API</h3>
    <p>The <strong>Canvas 2D API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Canvas 2D API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Canvas 2D API
console.log("Initializing Canvas 2D API...");

try {
  // Using the core concept
  console.log('The Canvas API provides a means for drawing graphics via JS and the HTML <canvas> element.');
console.log('Basic usage:');
console.log('const canvas = document.getElementById(\"myCanvas\");');
console.log('const ctx = canvas.getContext(\"2d\");');
console.log('ctx.fillStyle = \"red\";');
console.log('ctx.fillRect(10, 10, 100, 100);');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Canvas 2D API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-history-api',
        title: 'History API',
        badge: 'WEB API',
        emoji: '⏪',
        defaultCode: `console.log('History API allows manipulation of the browser session history!');
console.log('Current history length:', window.history.length);

// We won't actually run these in the sandbox to prevent navigation:
console.log('Go back: history.back()');
console.log('Push new state without reloading: history.pushState({page: 1}, \"title\", \"?page=1\")');`,
        content: `
    <h3>📌 Deep Dive: History API</h3>
    <p>The <strong>History API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>History API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of History API
console.log("Initializing History API...");

try {
  // Using the core concept
  console.log('History API allows manipulation of the browser session history!');
console.log('Current history length:', window.history.length);

// We won't actually run these in the sandbox to prevent navigation:
console.log('Go back: history.back()');
console.log('Push new state without reloading: history.pushState({page: 1}, \"title\", \"?page=1\")');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing History API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-page-visibility',
        title: 'Page Visibility API',
        badge: 'WEB API',
        emoji: '👀',
        defaultCode: `console.log('The Page Visibility API lets you know if a user is looking at the tab!');
console.log('Current Visibility State:', document.visibilityState);
console.log('Is tab hidden?', document.hidden);

console.log('Event listener:');
console.log('document.addEventListener(\"visibilitychange\", () => { console.log(document.hidden) });');`,
        content: `
    <h3>📌 Deep Dive: Page Visibility API</h3>
    <p>The <strong>Page Visibility API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Page Visibility API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Page Visibility API
console.log("Initializing Page Visibility API...");

try {
  // Using the core concept
  console.log('The Page Visibility API lets you know if a user is looking at the tab!');
console.log('Current Visibility State:', document.visibilityState);
console.log('Is tab hidden?', document.hidden);

console.log('Event listener:');
console.log('document.addEventListener(\"visibilitychange\", () => { console.log(document.hidden) });');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Page Visibility API:", error);
}
    </code></pre>
    `
    },
    {
        id: 'js-web-crypto',
        title: 'Web Crypto API',
        badge: 'WEB API',
        emoji: '🔐',
        defaultCode: `const data = new TextEncoder().encode('Super Secret Message');

// Generate a random initialization vector
const iv = crypto.getRandomValues(new Uint8Array(12));
console.log('Random IV generated:', iv);

console.log('The crypto.subtle object provides advanced cryptographic functions like hashing, signing, and encryption directly in the browser!');`,
        content: `
    <h3>📌 Deep Dive: Web Crypto API</h3>
    <p>The <strong>Web Crypto API</strong> is a fundamental Web API in JavaScript that allows developers to interface with the browser efficiently.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When executing <code>Web Crypto API</code>, the V8 engine optimizes the C++ bindings to ensure minimal overhead. By utilizing native C++ bindings for this web api, JavaScript can interface with the browser efficiently without blocking the main thread execution unnecessarily.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Check for feature support in the global window object before invoking newer Web APIs.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-javascript">
// Advanced usage of Web Crypto API
console.log("Initializing Web Crypto API...");

try {
  // Using the core concept
  const data = new TextEncoder().encode('Super Secret Message');

// Generate a random initialization vector
const iv = crypto.getRandomValues(new Uint8Array(12));
console.log('Random IV generated:', iv);

console.log('The crypto.subtle object provides advanced cryptographic functions like hashing, signing, and encryption directly in the browser!');
  console.log("Execution successful.");
} catch (error) {
  console.error("Error executing Web Crypto API:", error);
}
    </code></pre>
    `
    }

];

// PRESET THEMES
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

    // Init CodeMirror
    const codeEditorEl = document.getElementById('codeEditor');
    if (codeEditorEl) {
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
    
    document.getElementById('progressText').textContent = `\${mastered} / \${total} Concepts Mastered (\${pct}%)`;
    document.getElementById('progressBar').style.width = `\${pct}%`;
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
window.addEventListener('DOMContentLoaded', init);

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
