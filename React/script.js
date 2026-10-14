
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 800);
  }
}, 2000);

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

const TAGS = [
    {
        "id": "jsx_intro",
        "title": "Introduction to JSX",
        "category": "Fundamentals",
        "xp": 10,
        "description": "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
        "syntax": "const element = <h1>Hello, world!</h1>;",
        "example": "const App = () => {\n    return (\n        <div style={{ textAlign: 'center', color: 'white' }}>\n            <h1 style={{ color: '#61dafb' }}>Hello, JSX!</h1>\n            <p>Welcome to React.</p>\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>JSX Under the Hood</h3><p>Babel compiles JSX down to React.createElement().</p>",
        "challenge": "Add a new paragraph below the greeting."
    },
    {
        "id": "components",
        "title": "Functional Components",
        "category": "Fundamentals",
        "xp": 15,
        "description": "Components let you split the UI into independent, reusable pieces.",
        "syntax": "function Welcome(props) { return <h1>Hello, {props.name}</h1>; }",
        "example": "const Greeting = ({ name }) => <h2 style={{color:'#61dafb'}}>Hi {name}!</h2>;\nconst App = () => {\n    return (\n        <div style={{ padding: '20px', background: '#282c34', color: 'white' }}>\n            <Greeting name=\"Alice\" />\n            <Greeting name=\"Bob\" />\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Components</h3><p>Always start component names with a capital letter.</p>",
        "challenge": "Add a third Greeting for 'Charlie'."
    },
    {
        "id": "props",
        "title": "React Props",
        "category": "Fundamentals",
        "xp": 15,
        "description": "Props are arguments passed into React components.",
        "syntax": "<Component propName=\"value\" />",
        "example": "const Card = (props) => (\n    <div style={{ border: '1px solid #61dafb', padding: '10px', margin: '10px', color: 'white' }}>\n        <h3>{props.title}</h3>\n        <p>{props.content}</p>\n    </div>\n);\nconst App = () => (\n    <div style={{ background: '#282c34', padding: '20px' }}>\n        <Card title=\"Card 1\" content=\"This is the first card\" />\n    </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Understanding Props</h3><p>Props are read-only. A component must never modify its own props.</p>",
        "challenge": "Pass a 'color' prop to Card to change the border color."
    },
    {
        "id": "usestate",
        "title": "useState Hook",
        "category": "Hooks",
        "xp": 20,
        "description": "useState lets you add state to functional components.",
        "syntax": "const [state, setState] = React.useState(initialValue);",
        "example": "const Counter = () => {\n    const [count, setCount] = React.useState(0);\n    return (\n        <div style={{ padding: '20px', color: 'white' }}>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(count + 1)} style={{ background: '#61dafb', padding: '10px' }}>Increment</button>\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Counter />);",
        "content": "<h3>State</h3><p>State variables are preserved between renders.</p>",
        "challenge": "Add a decrement button."
    },
    {
        "id": "useeffect",
        "title": "useEffect Hook",
        "category": "Hooks",
        "xp": 25,
        "description": "useEffect lets you perform side effects in components.",
        "syntax": "React.useEffect(() => { /* effect */ }, [deps]);",
        "example": "const Timer = () => {\n    const [time, setTime] = React.useState(0);\n    React.useEffect(() => {\n        const interval = setInterval(() => setTime(t => t + 1), 1000);\n        return () => clearInterval(interval);\n    }, []);\n    return <h2 style={{color: 'white'}}>Time: {time}s</h2>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Timer />);",
        "content": "<h3>Side Effects</h3><p>Used for data fetching, subscriptions, etc.</p>",
        "challenge": "Log the time to the console every time it changes."
    },
    {
        "id": "events",
        "title": "Handling Events",
        "category": "Fundamentals",
        "xp": 15,
        "description": "React events are named using camelCase.",
        "syntax": "<button onClick={handleClick}>Click Me</button>",
        "example": "const App = () => {\n    const handleClick = (e) => {\n        alert('Button clicked!');\n    };\n    return (\n        <div style={{ padding: '20px' }}>\n            <button onClick={handleClick} style={{ padding: '10px', background: '#61dafb' }}>Alert</button>\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Events</h3><p>You cannot return false to prevent default behavior; you must call e.preventDefault().</p>",
        "challenge": "Change the alert to a console.log."
    },
    {
        "id": "conditional",
        "title": "Conditional Rendering",
        "category": "Fundamentals",
        "xp": 20,
        "description": "Render different UI depending on application state.",
        "syntax": "{condition && <Component />}",
        "example": "const App = () => {\n    const [show, setShow] = React.useState(true);\n    return (\n        <div style={{ padding: '20px', color: 'white' }}>\n            <button onClick={() => setShow(!show)}>Toggle</button>\n            {show && <h2 style={{color: '#61dafb'}}>I am visible!</h2>}\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Conditional Rendering</h3><p>Use JS operators like && or ternary ? :</p>",
        "challenge": "Use a ternary operator to show 'Hidden' when show is false."
    },
    {
        "id": "lists",
        "title": "Lists and Keys",
        "category": "Fundamentals",
        "xp": 20,
        "description": "Render multiple components from arrays using map().",
        "syntax": "items.map(item => <li key={item.id}>{item.name}</li>)",
        "example": "const App = () => {\n    const items = ['React', 'Vue', 'Angular'];\n    return (\n        <ul style={{ color: 'white' }}>\n            {items.map((item, index) => <li key={index} style={{color: '#61dafb'}}>{item}</li>)}\n        </ul>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Keys</h3><p>Keys help React identify which items have changed, been added, or removed.</p>",
        "challenge": "Add 'Svelte' to the items array."
    },
    {
        "id": "forms",
        "title": "Controlled Components",
        "category": "Fundamentals",
        "xp": 25,
        "description": "Form data is handled by the React component.",
        "syntax": "<input value={state} onChange={e => setState(e.target.value)} />",
        "example": "const App = () => {\n    const [name, setName] = React.useState('');\n    return (\n        <div style={{ padding: '20px', color: 'white' }}>\n            <input value={name} onChange={e => setName(e.target.value)} placeholder=\"Type name...\" />\n            <h2>Hello, {name || 'Stranger'}!</h2>\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Forms</h3><p>An input whose value is controlled by React is called a controlled component.</p>",
        "challenge": "Add a second input for 'lastName'."
    },
    {
        "id": "lifting_state",
        "title": "Lifting State Up",
        "category": "Patterns",
        "xp": 30,
        "description": "Move state to the closest common ancestor of components that need it.",
        "syntax": "Pass state and setState down as props.",
        "example": "const Display = ({ value }) => <h2 style={{color: 'white'}}>Value: {value}</h2>;\nconst Editor = ({ value, onChange }) => (\n    <input value={value} onChange={e => onChange(e.target.value)} />\n);\nconst App = () => {\n    const [text, setText] = React.useState('Shared state');\n    return (\n        <div style={{ padding: '20px' }}>\n            <Editor value={text} onChange={setText} />\n            <Display value={text} />\n        </div>\n    );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Lifting State</h3><p>Sharing state is accomplished by moving it up to the closest common ancestor.</p>",
        "challenge": "Add a button that clears the shared state."
    },
    {
        "id": "usereducer_hook",
        "title": "useReducer Hook",
        "category": "Advanced Hooks",
        "xp": 30,
        "description": "An alternative to useState for complex state logic that involves multiple sub-values.",
        "syntax": "const [state, dispatch] = useReducer(reducer, initialState);",
        "example": "const initialState = { count: 0 };\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    case 'decrement': return { count: state.count - 1 };\n    default: throw new Error();\n  }\n}\nconst Counter = () => {\n  const [state, dispatch] = React.useReducer(reducer, initialState);\n  return (\n    <div style={{color:'white'}}>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Counter />);",
        "content": "<h3>useReducer</h3><p>If you're familiar with Redux, you already know how this works. It's preferable when the next state depends on the previous one.</p>",
        "challenge": "Add a reset action to the reducer."
    },
    {
        "id": "usecontext_hook",
        "title": "useContext Hook",
        "category": "Context API",
        "xp": 25,
        "description": "Accepts a context object and returns the current context value.",
        "syntax": "const value = useContext(MyContext);",
        "example": "const ThemeContext = React.createContext('light');\nconst App = () => {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n};\nconst Toolbar = () => <ThemedButton />;\nconst ThemedButton = () => {\n  const theme = React.useContext(ThemeContext);\n  return <button style={{ background: theme === 'dark' ? '#333' : '#ccc', color: 'white' }}>Theme: {theme}</button>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Context API</h3><p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>",
        "challenge": "Change the Provider value to 'light'."
    },
    {
        "id": "usememo_hook",
        "title": "useMemo Hook",
        "category": "Advanced Hooks",
        "xp": 30,
        "description": "Returns a memoized value to optimize performance.",
        "syntax": "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
        "example": "const App = () => {\n  const [count, setCount] = React.useState(0);\n  const [words, setWords] = React.useState(0);\n  \n  const expensiveComputation = React.useMemo(() => {\n    console.log('Computing...');\n    let sum = 0;\n    for(let i=0; i<1000000; i++) sum += i;\n    return sum + count;\n  }, [count]); // only re-run if count changes\n\n  return (\n    <div style={{color:'white'}}>\n      <p>Result: {expensiveComputation}</p>\n      <button onClick={() => setCount(c => c + 1)}>Change Count</button>\n      <button onClick={() => setWords(w => w + 1)}>Change Words (No Re-compute)</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Memoization</h3><p>useMemo will only recompute the memoized value when one of the dependencies has changed.</p>",
        "challenge": "Remove the dependency array and see what happens to the console.log."
    },
    {
        "id": "usecallback_hook",
        "title": "useCallback Hook",
        "category": "Advanced Hooks",
        "xp": 30,
        "description": "Returns a memoized callback.",
        "syntax": "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);",
        "example": "const Button = React.memo(({ handleClick, children }) => {\n  console.log('Rendering button - ', children);\n  return <button onClick={handleClick}>{children}</button>;\n});\nconst App = () => {\n  const [age, setAge] = React.useState(25);\n  const [salary, setSalary] = React.useState(50000);\n  \n  const incrementAge = React.useCallback(() => setAge(a => a + 1), []);\n  const incrementSalary = React.useCallback(() => setSalary(s => s + 1000), []);\n\n  return (\n    <div style={{color:'white'}}>\n      <p>Age: {age} | Salary: {salary}</p>\n      <Button handleClick={incrementAge}>Increment Age</Button>\n      <Button handleClick={incrementSalary}>Increment Salary</Button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useCallback vs useMemo</h3><p>useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).</p>",
        "challenge": "Remove useCallback from incrementAge and observe the console logs when salary changes."
    },
    {
        "id": "useref_hook",
        "title": "useRef Hook",
        "category": "Hooks",
        "xp": 20,
        "description": "Returns a mutable ref object whose .current property is initialized to the passed argument.",
        "syntax": "const refContainer = useRef(initialValue);",
        "example": "const TextInputWithFocusButton = () => {\n  const inputEl = React.useRef(null);\n  const onButtonClick = () => {\n    // `current` points to the mounted text input element\n    inputEl.current.focus();\n  };\n  return (\n    <div>\n      <input ref={inputEl} type=\"text\" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<TextInputWithFocusButton />);",
        "content": "<h3>Refs</h3><p>useRef is like a “box” that can hold a mutable value in its .current property. Modifying it doesn't trigger re-renders.</p>",
        "challenge": "Log inputEl.current.value when the button is clicked."
    },
    {
        "id": "custom_hooks",
        "title": "Custom Hooks",
        "category": "Advanced Hooks",
        "xp": 35,
        "description": "Extract component logic into reusable functions.",
        "syntax": "function useMyCustomHook() { /* hooks logic */ }",
        "example": "function useWindowWidth() {\n  const [width, setWidth] = React.useState(window.innerWidth);\n  React.useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}\nconst App = () => {\n  const width = useWindowWidth();\n  return <h2 style={{color:'white'}}>Window width is: {width}px</h2>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Custom Hooks</h3><p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>",
        "challenge": "Create a useLocalStorage hook and use it."
    },
    {
        "id": "react_memo",
        "title": "React.memo",
        "category": "Performance",
        "xp": 25,
        "description": "A higher order component for memoizing functional components.",
        "syntax": "const MyComponent = React.memo(function MyComponent(props) { /* render */ });",
        "example": "const MyComponent = React.memo(({ text }) => {\n  console.log('Rendering MyComponent');\n  return <div style={{color:'white'}}>{text}</div>;\n});\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c+1)}>Count: {count}</button>\n      <MyComponent text=\"I will not re-render!\" />\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Memoization</h3><p>If your component renders the same result given the same props, React.memo skips rendering the component.</p>",
        "challenge": "Pass the count state to MyComponent and observe the re-renders."
    },
    {
        "id": "fragments",
        "title": "React Fragments",
        "category": "Fundamentals",
        "xp": 10,
        "description": "Let you group a list of children without adding extra nodes to the DOM.",
        "syntax": "<React.Fragment><ChildA /><ChildB /></React.Fragment>",
        "example": "const Columns = () => {\n  return (\n    <React.Fragment>\n      <td>Hello</td>\n      <td>World</td>\n    </React.Fragment>\n  );\n};\nconst App = () => (\n  <table style={{color:'white', border: '1px solid white'}}>\n    <tbody>\n      <tr><Columns /></tr>\n    </tbody>\n  </table>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Fragments</h3><p>You can also use the short syntax <></> if your build setup supports it.</p>",
        "challenge": "Add a third column to the table."
    },
    {
        "id": "portals",
        "title": "Portals",
        "category": "Advanced",
        "xp": 30,
        "description": "Provide a first-class way to render children into a DOM node that exists outside the hierarchy of the parent component.",
        "syntax": "ReactDOM.createPortal(child, container)",
        "example": "const Modal = ({ children }) => {\n  return ReactDOM.createPortal(\n    <div style={{position:'absolute', top:0, left:0, background:'rgba(0,0,0,0.8)', color:'white', padding:'20px'}}>\n      {children}\n    </div>,\n    document.body\n  );\n};\nconst App = () => (\n  <div style={{color:'white'}}>\n    <h2>My App</h2>\n    <Modal>This is a portal modal attached to body!</Modal>\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Portals</h3><p>Typical use cases include dialogs, hovercards, and tooltips.</p>",
        "challenge": "Add a close button to the modal."
    },
    {
        "id": "error_boundaries",
        "title": "Error Boundaries",
        "category": "Advanced",
        "xp": 35,
        "description": "Catch JavaScript errors anywhere in their child component tree.",
        "syntax": "class ErrorBoundary extends React.Component { componentDidCatch(error, info) {} }",
        "example": "class ErrorBoundary extends React.Component {\n  constructor(props) { super(props); this.state = { hasError: false }; }\n  static getDerivedStateFromError(error) { return { hasError: true }; }\n  render() {\n    if (this.state.hasError) return <h2 style={{color:'red'}}>Something went wrong.</h2>;\n    return this.props.children;\n  }\n}\nconst BuggyComponent = () => {\n  throw new Error('I crashed!');\n  return <div>Won't render</div>;\n};\nconst App = () => (\n  <ErrorBoundary>\n    <BuggyComponent />\n  </ErrorBoundary>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Error Boundaries</h3><p>Note: Error boundaries only catch errors in the components below them in the tree. They do not catch errors inside event handlers.</p>",
        "challenge": "Try removing the ErrorBoundary and see what happens."
    },
    {
        "id": "strict_mode",
        "title": "React Strict Mode",
        "category": "Performance",
        "xp": 15,
        "description": "A tool for highlighting potential problems in an application.",
        "syntax": "<React.StrictMode><App /></React.StrictMode>",
        "example": "const App = () => {\n  // StrictMode renders components twice (on dev but not prod) in order to detect any problems with your code and warn you about them.\n  React.useEffect(() => {\n    console.log(\"Component mounted\");\n    return () => console.log(\"Component unmounted\");\n  }, []);\n  return <h2 style={{color:'white'}}>Check the console for mount logs!</h2>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<React.StrictMode><App /></React.StrictMode>);",
        "content": "<h3>Strict Mode</h3><p>Strict mode checks are run in development mode only; they do not impact the production build.</p>",
        "challenge": "Remove StrictMode and see how the console logs change."
    },
    {
        "id": "higher_order_components",
        "title": "Higher-Order Components",
        "category": "Patterns",
        "xp": 35,
        "description": "A function that takes a component and returns a new component.",
        "syntax": "const EnhancedComponent = higherOrderComponent(WrappedComponent);",
        "example": "const withLogger = (WrappedComponent) => {\n  return (props) => {\n    React.useEffect(() => {\n      console.log('Component rendered with props:', props);\n    }, [props]);\n    return <WrappedComponent {...props} />;\n  };\n};\nconst SimpleComponent = ({ message }) => <h2 style={{color:'white'}}>{message}</h2>;\nconst EnhancedComponent = withLogger(SimpleComponent);\n\nconst App = () => (\n  <div style={{padding: '20px'}}>\n    <EnhancedComponent message=\"Hello from HOC!\" />\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>HOCs</h3><p>HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.</p>",
        "challenge": "Create a withAuth HOC that only renders the component if an isAdmin prop is true."
    },
    {
        "id": "render_props",
        "title": "Render Props",
        "category": "Patterns",
        "xp": 35,
        "description": "A technique for sharing code between components using a prop whose value is a function.",
        "syntax": "<DataProvider render={data => <h1>Hello {data.target}</h1>} />",
        "example": "const MouseTracker = ({ render }) => {\n  const [pos, setPos] = React.useState({ x: 0, y: 0 });\n  const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });\n  return (\n    <div style={{ height: '200px', border: '1px solid white' }} onMouseMove={handleMouseMove}>\n      {render(pos)}\n    </div>\n  );\n};\nconst App = () => (\n  <div style={{color:'white', padding: '20px'}}>\n    <MouseTracker render={(pos) => <h2>Mouse position: {pos.x}, {pos.y}</h2>} />\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Render Props</h3><p>Components with a render prop take a function that returns a React element and call it instead of implementing their own render logic.</p>",
        "challenge": "Change the render prop to render an absolute positioned element following the cursor."
    },
    {
        "id": "react_router_basics",
        "title": "React Router Basics",
        "category": "Routing",
        "xp": 20,
        "description": "The standard routing library for React.",
        "syntax": "<BrowserRouter><App /></BrowserRouter>",
        "example": "const App = () => {\n  const [route, setRoute] = React.useState('home');\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <nav style={{display:'flex', gap:'10px'}}>\n        <button onClick={() => setRoute('home')}>Home</button>\n        <button onClick={() => setRoute('about')}>About</button>\n      </nav>\n      <div style={{marginTop: '20px'}}>\n        {route === 'home' && <h2>Home Page</h2>}\n        {route === 'about' && <h2>About Page</h2>}\n      </div>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Routing</h3><p>This sandbox simulates routing. In a real app, you'd use react-router-dom components like BrowserRouter, Routes, and Route.</p>",
        "challenge": "Add a 'Contact' route."
    },
    {
        "id": "suspense",
        "title": "React Suspense",
        "category": "Performance",
        "xp": 40,
        "description": "Lets you specify the loading indicator in case some components in the tree below it are not yet ready to render.",
        "syntax": "<Suspense fallback={<Spinner />}>",
        "example": "const DataComponent = () => {\n  const [data, setData] = React.useState(null);\n  React.useEffect(() => {\n    setTimeout(() => setData('Data loaded successfully!'), 2000);\n  }, []);\n  if (!data) throw new Promise(resolve => setTimeout(resolve, 2000)); // Simulate suspense\n  return <h2>{data}</h2>;\n};\nconst App = () => (\n  <div style={{color:'white'}}>\n    <React.Suspense fallback={<h2 style={{color:'yellow'}}>Loading data...</h2>}>\n      <DataComponent />\n    </React.Suspense>\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Suspense</h3><p>Suspense lets your components \"wait\" for something before they can render.</p>",
        "challenge": "Change the fallback to a spinning loader animation."
    },
    {
        "id": "lazy_loading",
        "title": "React.lazy",
        "category": "Performance",
        "xp": 30,
        "description": "Lets you define a component that is loaded dynamically.",
        "syntax": "const OtherComponent = React.lazy(() => import('./OtherComponent'));",
        "example": "// Simulating a lazy-loaded component\nconst LazyComponent = React.lazy(() => new Promise(resolve => {\n  setTimeout(() => resolve({ default: () => <h2 style={{color:'#61dafb'}}>I was lazy loaded!</h2> }), 1500);\n}));\n\nconst App = () => (\n  <div style={{color:'white', padding: '20px'}}>\n    <React.Suspense fallback={<h2>Loading Component...</h2>}>\n      <LazyComponent />\n    </React.Suspense>\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Code Splitting</h3><p>React.lazy takes a function that must call a dynamic import().</p>",
        "challenge": "Add a button to mount the LazyComponent on demand."
    },
    {
        "id": "use_transition",
        "title": "useTransition Hook",
        "category": "React 18",
        "xp": 35,
        "description": "Lets you update the state without blocking the UI.",
        "syntax": "const [isPending, startTransition] = useTransition();",
        "example": "const App = () => {\n  const [isPending, startTransition] = React.useTransition();\n  const [count, setCount] = React.useState(0);\n  const [list, setList] = React.useState([]);\n\n  const handleClick = () => {\n    startTransition(() => {\n      setCount(c => c + 1);\n      const l = [];\n      for(let i=0; i<10000; i++) l.push(i);\n      setList(l);\n    });\n  };\n\n  return (\n    <div style={{color:'white'}}>\n      <button onClick={handleClick}>Transition</button>\n      {isPending ? <p>Loading...</p> : <p>Count: {count}, Items: {list.length}</p>}\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Transitions</h3><p>Transitions let you keep the user interface responsive even during large screen updates.</p>",
        "challenge": "Render the large list to the DOM to see the transition in action."
    },
    {
        "id": "use_deferred_value",
        "title": "useDeferredValue Hook",
        "category": "React 18",
        "xp": 35,
        "description": "Lets you defer updating a part of the UI.",
        "syntax": "const deferredValue = useDeferredValue(value);",
        "example": "const List = ({ text }) => {\n  const items = [];\n  for(let i=0; i<10000; i++) items.push(<li key={i}>{text} {i}</li>);\n  return <ul style={{height:'100px', overflow:'auto'}}>{items}</ul>;\n};\nconst App = () => {\n  const [text, setText] = React.useState('');\n  const deferredText = React.useDeferredValue(text);\n  \n  return (\n    <div style={{color:'white'}}>\n      <input value={text} onChange={e => setText(e.target.value)} placeholder=\"Type here...\" />\n      <p>Typing is responsive, but list lags slightly:</p>\n      <List text={deferredText} />\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Deferred Value</h3><p>useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates.</p>",
        "challenge": "Compare performance by removing useDeferredValue."
    },
    {
        "id": "use_id",
        "title": "useId Hook",
        "category": "React 18",
        "xp": 15,
        "description": "A hook for generating unique IDs that are stable across the server and client.",
        "syntax": "const id = useId();",
        "example": "const PasswordField = () => {\n  const passwordHintId = React.useId();\n  return (\n    <div style={{color:'white', padding: '10px'}}>\n      <label>Password: <input type=\"password\" aria-describedby={passwordHintId} /></label>\n      <p id={passwordHintId} style={{fontSize: '12px', color: '#aaa'}}>\n        The password should contain at least 18 characters\n      </p>\n    </div>\n  );\n};\nconst App = () => (\n  <div><PasswordField /><PasswordField /></div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Unique IDs</h3><p>useId is not for generating keys in a list. Keys should be generated from your data.</p>",
        "challenge": "Add a username field with its own useId for an aria-label."
    },
    {
        "id": "react_forward_ref",
        "title": "forwardRef",
        "category": "Advanced Hooks",
        "xp": 30,
        "description": "Lets your component expose a DOM node to parent component with a ref.",
        "syntax": "const MyInput = forwardRef((props, ref) => <input ref={ref} />);",
        "example": "const FancyInput = React.forwardRef((props, ref) => (\n  <input ref={ref} className=\"FancyInput\" style={{border: '2px solid cyan', padding: '5px'}} {...props} />\n));\n\nconst App = () => {\n  const inputRef = React.useRef(null);\n  const handleClick = () => inputRef.current.focus();\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <FancyInput ref={inputRef} placeholder=\"I am fancy\" />\n      <button onClick={handleClick} style={{marginLeft: '10px'}}>Focus Input</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Forwarding Refs</h3><p>Ref forwarding is a technique for automatically passing a ref through a component to one of its children.</p>",
        "challenge": "Log the input's value when the button is clicked."
    },
    {
        "id": "profiler",
        "title": "React Profiler",
        "category": "Performance",
        "xp": 20,
        "description": "Measures how often a React application renders and what the 'cost' of rendering is.",
        "syntax": "<Profiler id=\"Navigation\" onRender={callback}><App /></Profiler>",
        "example": "const onRenderCallback = (id, phase, actualDuration) => {\n  console.log(id, phase, actualDuration);\n};\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  return (\n    <React.Profiler id=\"App\" onRender={onRenderCallback}>\n      <div style={{color:'white', padding: '20px'}}>\n        <button onClick={() => setCount(c => c+1)}>Count {count}</button>\n        <p>Check the console for Profiler logs!</p>\n      </div>\n    </React.Profiler>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Profiler API</h3><p>Its purpose is to help identify parts of an application that are slow and may benefit from optimizations.</p>",
        "challenge": "Add a slow component and measure its render time."
    },
    {
        "id": "controlled_vs_uncontrolled",
        "title": "Controlled vs Uncontrolled",
        "category": "Forms",
        "xp": 30,
        "description": "Two ways of handling form inputs in React.",
        "syntax": "// Controlled: <input value={state} onChange={fn} />\n// Uncontrolled: <input ref={inputRef} />",
        "example": "const App = () => {\n  const [val, setVal] = React.useState('');\n  const inputRef = React.useRef(null);\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Controlled: ${val} \\nUncontrolled: ${inputRef.current.value}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit} style={{color:'white', padding:'20px'}}>\n      <div>\n        <label>Controlled: </label>\n        <input value={val} onChange={e => setVal(e.target.value)} />\n      </div>\n      <div style={{marginTop: '10px'}}>\n        <label>Uncontrolled: </label>\n        <input ref={inputRef} defaultValue=\"Default\" />\n      </div>\n      <button type=\"submit\" style={{marginTop: '10px'}}>Submit</button>\n    </form>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Forms</h3><p>In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>",
        "challenge": "Reset the uncontrolled component's value using its ref when the form submits."
    },
    {
        "id": "react_children",
        "title": "React.Children API",
        "category": "Advanced",
        "xp": 25,
        "description": "Provides utilities for dealing with the this.props.children opaque data structure.",
        "syntax": "React.Children.map(children, function[(thisArg)])",
        "example": "const ListBox = ({ children }) => {\n  return (\n    <ul style={{ border: '1px solid #61dafb', padding: '20px', color: 'white' }}>\n      {React.Children.map(children, (child, index) => {\n        // Clone child and inject an index prop\n        return React.cloneElement(child, { index });\n      })}\n    </ul>\n  );\n};\nconst ListItem = ({ children, index }) => (\n  <li>Item {index}: {children}</li>\n);\n\nconst App = () => (\n  <ListBox>\n    <ListItem>Apple</ListItem>\n    <ListItem>Banana</ListItem>\n    <ListItem>Cherry</ListItem>\n  </ListBox>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Manipulating Children</h3><p>React.Children.map and React.cloneElement let you intercept and modify children before they are rendered.</p>",
        "challenge": "Only render children that are of type ListItem."
    },
    {
        "id": "pure_component",
        "title": "PureComponent",
        "category": "Performance",
        "xp": 20,
        "description": "A base class for React components that implements a shallow comparison in shouldComponentUpdate.",
        "syntax": "class MyComponent extends React.PureComponent { ... }",
        "example": "class PureCounter extends React.PureComponent {\n  render() {\n    console.log('Rendering PureCounter');\n    return <h3 style={{color:'white'}}>Pure Count: {this.props.count}</h3>;\n  }\n}\nclass App extends React.Component {\n  state = { count: 0, uselessCount: 0 };\n  render() {\n    return (\n      <div style={{padding:'20px'}}>\n        <button onClick={() => this.setState({count: this.state.count + 1})}>Inc Count</button>\n        <button onClick={() => this.setState({uselessCount: this.state.uselessCount + 1})}>Inc Useless</button>\n        <PureCounter count={this.state.count} />\n        <p style={{color:'white'}}>Useless: {this.state.uselessCount}</p>\n      </div>\n    );\n  }\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>PureComponent</h3><p>It is the class-based equivalent of React.memo for functional components.</p>",
        "challenge": "Convert PureCounter to a functional component using React.memo."
    },
    {
        "id": "custom_events",
        "title": "SyntheticEvents",
        "category": "Fundamentals",
        "xp": 15,
        "description": "React's cross-browser wrapper around the browser's native event.",
        "syntax": "function handleClick(e) { e.preventDefault(); }",
        "example": "const App = () => {\n  const handleAction = (e) => {\n    console.log('Event type:', e.type);\n    console.log('Target:', e.target.tagName);\n    console.log('Native event:', e.nativeEvent);\n  };\n  return (\n    <div style={{color:'white', padding:'20px'}} onClick={handleAction}>\n      <h2>Click me</h2>\n      <button>Or click me</button>\n      <input type=\"text\" onChange={handleAction} placeholder=\"Type...\" />\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>SyntheticEvents</h3><p>React normalizes events so that they have consistent properties across different browsers.</p>",
        "challenge": "Stop the event from bubbling up to the div when clicking the button."
    },
    {
        "id": "lifecycle_methods",
        "title": "Class Lifecycles",
        "category": "Advanced",
        "xp": 30,
        "description": "Special methods on component classes that run at specific points in a component's life.",
        "syntax": "componentDidMount() { ... }",
        "example": "class LifecycleDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { date: new Date() };\n  }\n  componentDidMount() {\n    this.timerID = setInterval(() => this.tick(), 1000);\n  }\n  componentWillUnmount() {\n    clearInterval(this.timerID);\n  }\n  tick() {\n    this.setState({ date: new Date() });\n  }\n  render() {\n    return <h2 style={{color:'white'}}>Time is {this.state.date.toLocaleTimeString()}.</h2>;\n  }\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<LifecycleDemo />);",
        "content": "<h3>Lifecycles</h3><p>While hooks are standard now, it's important to understand class lifecycles as you will often encounter them in legacy codebases.</p>",
        "challenge": "Add a componentDidUpdate method that logs when the state changes."
    },
    {
        "id": "state_batching",
        "title": "State Batching",
        "category": "Performance",
        "xp": 30,
        "description": "React groups multiple state updates into a single re-render for better performance.",
        "syntax": "React batches updates inside event handlers and hooks.",
        "example": "const App = () => {\n  const [count, setCount] = React.useState(0);\n  const [flag, setFlag] = React.useState(false);\n  \n  console.log('Rendered! Count:', count, 'Flag:', flag);\n  \n  const handleClick = () => {\n    // Both of these will be batched into one render in React 18\n    setCount(c => c + 1);\n    setFlag(f => !f);\n  };\n\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <button onClick={handleClick}>Batch Update</button>\n      <p>Check console for render logs.</p>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Automatic Batching</h3><p>In React 18, automatic batching was introduced, meaning updates inside promises, timeouts, and native event handlers are also batched.</p>",
        "challenge": "Wrap the state updates in a setTimeout to see if they are still batched."
    },
    {
        "id": "use_layout_effect",
        "title": "useLayoutEffect",
        "category": "Hooks",
        "xp": 35,
        "description": "Fires synchronously after all DOM mutations.",
        "syntax": "useLayoutEffect(() => { /* effect */ }, [deps]);",
        "example": "const App = () => {\n  const [value, setValue] = React.useState(0);\n  \n  // This runs synchronously before the browser paints\n  React.useLayoutEffect(() => {\n    if (value === 0) {\n      setValue(10 + Math.random() * 200); // Prevents flicker\n    }\n  }, [value]);\n\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <h2>Value: {value}</h2>\n      <button onClick={() => setValue(0)}>Reset to 0 (will instantly become random)</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useLayoutEffect</h3><p>Use it to read layout from the DOM and synchronously re-render to avoid visual flickers.</p>",
        "challenge": "Change useLayoutEffect to useEffect to see if you can spot a flicker."
    },
    {
        "id": "use_imperative_handle",
        "title": "useImperativeHandle",
        "category": "Advanced Hooks",
        "xp": 40,
        "description": "Customizes the instance value that is exposed to parent components when using ref.",
        "syntax": "useImperativeHandle(ref, () => ({ focus: () => {} }));",
        "example": "const FancyInput = React.forwardRef((props, ref) => {\n  const inputRef = React.useRef();\n  React.useImperativeHandle(ref, () => ({\n    focusAndShake: () => {\n      inputRef.current.focus();\n      console.log('Shaking input...');\n    }\n  }));\n  return <input ref={inputRef} />;\n});\n\nconst App = () => {\n  const ref = React.useRef();\n  return (\n    <div style={{padding:'20px'}}>\n      <FancyInput ref={ref} />\n      <button onClick={() => ref.current.focusAndShake()}>Call Child Method</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useImperativeHandle</h3><p>This hook should be used with React.forwardRef. It allows a child component to expose specific methods to a parent.</p>",
        "challenge": "Add a clearValue method exposed to the parent."
    },
    {
        "id": "react_lazy_suspense",
        "title": "Concurrent Rendering",
        "category": "React 18",
        "xp": 40,
        "description": "A new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time.",
        "syntax": "// Enabled by default in React 18's createRoot",
        "example": "const SlowComponent = () => {\n  const start = performance.now();\n  while (performance.now() - start < 20) {\n    // Artificial delay for every render\n  }\n  return <span>Slow</span>;\n};\nconst App = () => {\n  const [val, setVal] = React.useState('');\n  const [isPending, startTransition] = React.useTransition();\n  const arr = Array.from({ length: 500 });\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <input onChange={e => {\n        // Typing remains fast, rendering is deferred\n        startTransition(() => setVal(e.target.value));\n      }} />\n      <p>{isPending ? 'Updating...' : ''}</p>\n      {arr.map((_, i) => <SlowComponent key={i} />)}\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Concurrent Features</h3><p>Concurrent React is opt-in by using features like useTransition or useDeferredValue. It prevents large renders from blocking the main thread.</p>",
        "challenge": "Remove startTransition and notice how typing becomes extremely sluggish."
    },
    {
        "id": "server_components",
        "title": "React Server Components",
        "category": "React Architecture",
        "xp": 50,
        "description": "A new mental model allowing components to render exclusively on the server.",
        "syntax": "// In Next.js App Router, components are RSC by default",
        "example": "// Simulated environment - RSCs can't run in standard browser DOM\nconst ServerComponent = () => {\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <h2 style={{color: '#61dafb'}}>React Server Component Concept</h2>\n      <p>Server Components never send their JS to the client.</p>\n      <p>They can directly access backend resources like databases!</p>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<ServerComponent />);",
        "content": "<h3>Server Components</h3><p>RSCs run only on the server and have zero impact on bundle size. They seamlessly integrate with Client Components (which use standard hooks).</p>",
        "challenge": "Imagine converting a standard useEffect data fetch into a direct async/await RSC fetch."
    },
    {
        "id": "client_components",
        "title": "Client Components",
        "category": "React Architecture",
        "xp": 20,
        "description": "Standard components that run on the client, required for interactivity.",
        "syntax": "'use client';\n\nexport default function Interactive() {}",
        "example": "const ClientComponent = () => {\n  const [clicked, setClicked] = React.useState(false);\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <h2 style={{color: '#61dafb'}}>Client Component Concept</h2>\n      <button onClick={() => setClicked(!clicked)}>Toggle</button>\n      {clicked && <p>I am interactive! Therefore I must be a Client Component.</p>}\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<ClientComponent />);",
        "content": "<h3>'use client'</h3><p>In modern meta-frameworks like Next.js, you add 'use client' at the top of a file to declare a boundary between the server and client module graphs.</p>",
        "challenge": "Remove the button and state to see if it could be a Server Component."
    },
    {
        "id": "server_actions",
        "title": "Server Actions",
        "category": "React Architecture",
        "xp": 45,
        "description": "Asynchronous functions that are executed on the server, built directly into React.",
        "syntax": "async function createPost(formData) { 'use server'; ... }",
        "example": "const ServerActionDemo = () => {\n  // Simulating a Server Action\n  const submitAction = (e) => {\n    e.preventDefault();\n    console.log(\"Pretending to run on the server: Saved data!\");\n    alert(\"Data saved (simulated server action)\");\n  };\n  return (\n    <form onSubmit={submitAction} style={{color:'white', padding: '20px'}}>\n      <h2>Server Actions Concept</h2>\n      <input name=\"title\" placeholder=\"Post Title\" />\n      <button type=\"submit\">Submit (to server)</button>\n    </form>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<ServerActionDemo />);",
        "content": "<h3>Server Actions</h3><p>Server Actions can be invoked from both Server and Client Components to handle form submissions and data mutations natively.</p>",
        "challenge": "Imagine this form functioning without JavaScript enabled in the browser."
    },
    {
        "id": "error_boundaries_v18",
        "title": "useActionState",
        "category": "React 19 (Preview)",
        "xp": 50,
        "description": "A Hook that allows you to update state based on the result of a form action.",
        "syntax": "const [state, formAction] = useActionState(fn, initialState, permalink?);",
        "example": "const Demo = () => {\n  const [loading, setLoading] = React.useState(false);\n  \n  const simulateAction = (e) => {\n    e.preventDefault();\n    setLoading(true);\n    setTimeout(() => {\n      setLoading(false);\n      alert(\"Action complete!\");\n    }, 1000);\n  };\n\n  return (\n    <form onSubmit={simulateAction} style={{color:'white', padding: '20px'}}>\n      <h2>Form State Simulation</h2>\n      <button disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>\n    </form>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Demo />);",
        "content": "<h3>useActionState</h3><p>In newer versions of React, hooks are being introduced to seamlessly handle form submissions and their pending states.</p>",
        "challenge": "Add a success message after the action completes."
    },
    {
        "id": "use_form_status",
        "title": "useFormStatus",
        "category": "React 19 (Preview)",
        "xp": 40,
        "description": "Provides status information of the last form submission.",
        "syntax": "const { pending, data, method, action } = useFormStatus();",
        "example": "// Simulated useFormStatus\nconst SubmitButton = ({ pending }) => {\n  return (\n    <button disabled={pending}>\n      {pending ? 'Uploading...' : 'Upload'}\n    </button>\n  );\n};\nconst App = () => {\n  const [pending, setPending] = React.useState(false);\n  const onSubmit = (e) => {\n    e.preventDefault();\n    setPending(true);\n    setTimeout(() => setPending(false), 2000);\n  };\n  return (\n    <form onSubmit={onSubmit} style={{color:'white', padding: '20px'}}>\n      <h2>useFormStatus Concept</h2>\n      <SubmitButton pending={pending} />\n    </form>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useFormStatus</h3><p>This hook must be called from a component that is rendered inside a <form>. It reads the status of the parent form.</p>",
        "challenge": "Change the text to 'Done!' after submission."
    },
    {
        "id": "optimistic_updates",
        "title": "useOptimistic",
        "category": "React 19 (Preview)",
        "xp": 45,
        "description": "A React Hook that lets you show a different state while an async action is underway.",
        "syntax": "const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);",
        "example": "const App = () => {\n  const [messages, setMessages] = React.useState(['Hello']);\n  const [opt, setOpt] = React.useState(null);\n  \n  const sendMessage = (e) => {\n    e.preventDefault();\n    const msg = e.target.msg.value;\n    e.target.reset();\n    \n    setOpt(msg); // Optimistic UI\n    \n    // Simulate network latency\n    setTimeout(() => {\n      setMessages(m => [...m, msg]);\n      setOpt(null);\n    }, 1500);\n  };\n\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <ul>\n        {messages.map((m,i) => <li key={i}>{m}</li>)}\n        {opt && <li style={{opacity: 0.5}}>{opt} (Sending...)</li>}\n      </ul>\n      <form onSubmit={sendMessage}>\n        <input name=\"msg\" placeholder=\"Message...\" />\n      </form>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Optimistic Updates</h3><p>Optimistic UI is a pattern that you can use to simulate the results of a mutation and update the UI before receiving a response from the server.</p>",
        "challenge": "Change the color of the optimistic message."
    },
    {
        "id": "react_compiler",
        "title": "React Compiler",
        "category": "React Architecture",
        "xp": 50,
        "description": "An upcoming build-time tool that automatically memoizes React code.",
        "syntax": "// No syntax! Just write standard React.",
        "example": "const App = () => {\n  // With React Compiler, you won't need useMemo or useCallback here.\n  // The compiler analyzes your code and caches it automatically!\n  const [count, setCount] = React.useState(0);\n  \n  const handleCount = () => setCount(count + 1);\n\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <h2 style={{color: '#61dafb'}}>React Compiler Concept</h2>\n      <button onClick={handleCount}>Count {count}</button>\n      <p>Goodbye manual memoization!</p>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React Compiler</h3><p>React Compiler is an experimental tool that analyzes your JavaScript code and automatically applies optimizations, removing the need for boilerplate like useMemo.</p>",
        "challenge": "Write an expensive math loop here, imagining the compiler optimizing it."
    },
    {
        "id": "dom_nodes_refs",
        "title": "Refs for DOM nodes",
        "category": "Fundamentals",
        "xp": 20,
        "description": "Accessing underlying DOM elements directly.",
        "syntax": "<div ref={myRef}>",
        "example": "const App = () => {\n  const divRef = React.useRef(null);\n  \n  const measure = () => {\n    const rect = divRef.current.getBoundingClientRect();\n    alert(`Width: ${rect.width}, Height: ${rect.height}`);\n  };\n\n  return (\n    <div style={{color:'white', padding: '20px'}}>\n      <div ref={divRef} style={{ width: '50%', background: '#444', padding: '10px' }}>\n        Measure Me\n      </div>\n      <button onClick={measure} style={{marginTop: '10px'}}>Get Dimensions</button>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>DOM Refs</h3><p>While React abstracts the DOM away, sometimes you need to escape the abstraction to measure a node, focus it, or integrate with a third-party DOM library.</p>",
        "challenge": "Change the div's width and measure it again."
    },
    {
        "id": "component_composition",
        "title": "Component Composition",
        "category": "Patterns",
        "xp": 25,
        "description": "Using the children prop to create highly reusable layouts and components.",
        "syntax": "function Layout({ left, right }) { return <div>{left}{right}</div>; }",
        "example": "const SplitPane = ({ left, right }) => (\n  <div style={{ display: 'flex', color: 'white', border: '1px solid #ccc' }}>\n    <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>{left}</div>\n    <div style={{ flex: 1, padding: '10px' }}>{right}</div>\n  </div>\n);\n\nconst App = () => (\n  <div style={{padding: '20px'}}>\n    <SplitPane \n      left={<h3>Sidebar</h3>}\n      right={<p>Main Content Area</p>}\n    />\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Composition</h3><p>Composition is a powerful pattern. Sometimes it's better to pass components as props rather than passing raw data and rendering it inside.</p>",
        "challenge": "Add a 'header' slot to the SplitPane."
    },
    {
        "id": "react_memo",
        "title": "React.memo",
        "category": "Optimization",
        "xp": 15,
        "description": "Higher-order component that memoizes the rendered output of a functional component.",
        "syntax": "const MemoizedComponent = React.memo(MyComponent);",
        "example": "const Child = React.memo(({ name }) => {\n  console.log('Child rendering');\n  return <div>Hello, {name}!</div>;\n});\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  return <div style={{color:'white'}}>\n    <Child name=\"Alice\" />\n    <button onClick={() => setCount(c => c+1)}>Count: {count}</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React.memo</h3><p>Prevents unnecessary re-renders if props have not changed. Use for heavy components.</p>",
        "challenge": "Verify that clicking the button doesn't trigger the 'Child rendering' log."
    },
    {
        "id": "use_callback",
        "title": "useCallback",
        "category": "Optimization",
        "xp": 15,
        "description": "Returns a memoized callback function to prevent unnecessary recreation of functions.",
        "syntax": "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);",
        "example": "const Child = React.memo(({ onClick }) => {\n  console.log('Child rendering');\n  return <button onClick={onClick}>Click Me</button>;\n});\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = React.useCallback(() => console.log('Clicked'), []);\n  return <div style={{color:'white'}}>\n    <Child onClick={handleClick} />\n    <button onClick={() => setCount(c => c+1)}>Count: {count}</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useCallback</h3><p>Essential when passing callbacks to optimized child components that rely on reference equality.</p>",
        "challenge": "Remove useCallback and observe the child re-rendering."
    },
    {
        "id": "use_memo",
        "title": "useMemo",
        "category": "Optimization",
        "xp": 15,
        "description": "Returns a memoized value, recomputing it only when dependencies change.",
        "syntax": "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
        "example": "const App = () => {\n  const [count, setCount] = React.useState(0);\n  const [word, setWord] = React.useState('');\n  const expensiveLength = React.useMemo(() => {\n    console.log('Computing...');\n    let i = 0; while(i < 1000000) i++;\n    return word.length;\n  }, [word]);\n  return <div style={{color:'white'}}>\n    <input value={word} onChange={e => setWord(e.target.value)} />\n    <p>Length: {expensiveLength}</p>\n    <button onClick={() => setCount(c => c+1)}>Count: {count}</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useMemo</h3><p>Use it to cache expensive calculations between re-renders.</p>",
        "challenge": "Remove useMemo and see if the counter button feels sluggish."
    },
    {
        "id": "forward_ref",
        "title": "forwardRef",
        "category": "Advanced Components",
        "xp": 20,
        "description": "Lets a component expose a DOM node to a parent component with a ref.",
        "syntax": "const MyInput = React.forwardRef((props, ref) => <input ref={ref} {...props} />);",
        "example": "const FancyInput = React.forwardRef((props, ref) => (\n  <input ref={ref} className=\"FancyInput\" style={{border:'2px solid #61dafb'}} {...props} />\n));\nconst App = () => {\n  const ref = React.useRef(null);\n  return <div style={{color:'white'}}>\n    <FancyInput ref={ref} placeholder=\"Focus me\" />\n    <button onClick={() => ref.current.focus()}>Focus</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>forwardRef</h3><p>Often used with reusable component libraries to allow direct DOM manipulation.</p>",
        "challenge": "Add an onBlur event to the input."
    },
    {
        "id": "use_imperative_handle",
        "title": "useImperativeHandle",
        "category": "Advanced Hooks",
        "xp": 25,
        "description": "Customizes the instance value that is exposed to parent components when using ref.",
        "syntax": "useImperativeHandle(ref, () => ({ myMethod() { ... } }));",
        "example": "const CustomInput = React.forwardRef((props, ref) => {\n  const inputRef = React.useRef();\n  React.useImperativeHandle(ref, () => ({\n    customFocus: () => { inputRef.current.focus(); inputRef.current.style.background = 'yellow'; }\n  }));\n  return <input ref={inputRef} />;\n});\nconst App = () => {\n  const ref = React.useRef();\n  return <div>\n    <CustomInput ref={ref} />\n    <button onClick={() => ref.current.customFocus()}>Custom Focus</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useImperativeHandle</h3><p>Useful for hiding DOM nodes and exposing specific imperative methods instead.</p>",
        "challenge": "Add a customClear method."
    },
    {
        "id": "use_layout_effect",
        "title": "useLayoutEffect",
        "category": "Advanced Hooks",
        "xp": 20,
        "description": "Fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.",
        "syntax": "useLayoutEffect(() => { ... }, []);",
        "example": "const App = () => {\n  const [width, setWidth] = React.useState(0);\n  const ref = React.useRef();\n  React.useLayoutEffect(() => {\n    setWidth(ref.current.getBoundingClientRect().width);\n  }, []);\n  return <div style={{color:'white'}}>\n    <div ref={ref} style={{width:'50%', background:'#61dafb', color:'black'}}>Measuring my width...</div>\n    <p>Measured Width: {width}px</p>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useLayoutEffect</h3><p>Prefer useEffect over useLayoutEffect unless you notice visual flickering.</p>",
        "challenge": "Change the width percentage and re-run."
    },
    {
        "id": "use_debug_value",
        "title": "useDebugValue",
        "category": "Advanced Hooks",
        "xp": 10,
        "description": "Can be used to display a label for custom hooks in React DevTools.",
        "syntax": "useDebugValue(value);",
        "example": "const useFriendStatus = (friendID) => {\n  const [isOnline, setIsOnline] = React.useState(true);\n  React.useDebugValue(isOnline ? 'Online' : 'Offline');\n  return isOnline;\n};\nconst App = () => {\n  const status = useFriendStatus(1);\n  return <div style={{color:'white'}}>Friend is {status ? 'Online' : 'Offline'} (Check React DevTools)</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useDebugValue</h3><p>Only useful if you are developing custom hooks for a library or large codebase.</p>",
        "challenge": "Add a toggle button to change the online status."
    },
    {
        "id": "use_id",
        "title": "useId",
        "category": "Advanced Hooks",
        "xp": 15,
        "description": "Generates unique IDs that are stable across the server and client.",
        "syntax": "const id = useId();",
        "example": "const PasswordField = () => {\n  const passwordHintId = React.useId();\n  return <div style={{color:'white'}}>\n    <label>Password:</label>\n    <input type=\"password\" aria-describedby={passwordHintId} />\n    <p id={passwordHintId}>Must be 8 characters long</p>\n  </div>;\n};\nconst App = () => <PasswordField />;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useId</h3><p>Crucial for accessibility attributes like aria-describedby without worrying about ID collisions.</p>",
        "challenge": "Render two PasswordField components and inspect their IDs."
    },
    {
        "id": "use_sync_external_store",
        "title": "useSyncExternalStore",
        "category": "Advanced Hooks",
        "xp": 30,
        "description": "Recommended for reading and subscribing from external data sources in a way that's compatible with concurrent rendering.",
        "syntax": "const state = useSyncExternalStore(subscribe, getSnapshot);",
        "example": "let externalState = 0; const listeners = new Set();\nconst store = {\n  subscribe: (l) => { listeners.add(l); return () => listeners.delete(l); },\n  getSnapshot: () => externalState,\n  inc: () => { externalState++; listeners.forEach(l => l()); }\n};\nconst App = () => {\n  const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot);\n  return <div style={{color:'white'}}>\n    <p>Store: {state}</p>\n    <button onClick={store.inc}>Inc External</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useSyncExternalStore</h3><p>Replaces older patterns for integrating Redux or Zustand with React 18+.</p>",
        "challenge": "Create a second component that also reads from the same store."
    },
    {
        "id": "use_insertion_effect",
        "title": "useInsertionEffect",
        "category": "Advanced Hooks",
        "xp": 35,
        "description": "Fires before DOM mutations. Intended for CSS-in-JS libraries to inject styles before reading layout.",
        "syntax": "useInsertionEffect(() => { ... }, []);",
        "example": "const App = () => {\n  React.useInsertionEffect(() => {\n    const style = document.createElement('style');\n    style.innerHTML = '.dynamic-class { color: #61dafb; font-size: 24px; }';\n    document.head.appendChild(style);\n    return () => document.head.removeChild(style);\n  }, []);\n  return <div className=\"dynamic-class\">Injected Styles!</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useInsertionEffect</h3><p>You should almost never use this in application code. It's strictly for CSS-in-JS authors.</p>",
        "challenge": "Change the injected font size to 36px."
    },
    {
        "id": "suspense_data",
        "title": "Suspense for Data Fetching",
        "category": "Concurrent",
        "xp": 30,
        "description": "Allows components to 'wait' for something before they render.",
        "syntax": "<Suspense fallback={<Spinner />}><Component /></Suspense>",
        "example": "let cache = null;\nconst fetchResource = () => {\n  if(cache) return cache;\n  throw new Promise(res => setTimeout(() => { cache = 'Data loaded!'; res(); }, 1500));\n};\nconst Resource = () => <div style={{color:'#61dafb'}}>{fetchResource()}</div>;\nconst App = () => (\n  <div style={{color:'white'}}>\n    <React.Suspense fallback={<p>Loading...</p>}>\n      <Resource />\n    </React.Suspense>\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Suspense</h3><p>Works natively with React.lazy and experimental data fetching libraries like Relay or React Server Components.</p>",
        "challenge": "Change the timeout to 3000ms."
    },
    {
        "id": "portals",
        "title": "React Portals",
        "category": "Advanced Components",
        "xp": 20,
        "description": "Provides a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
        "syntax": "ReactDOM.createPortal(child, container);",
        "example": "const Modal = ({ children }) => {\n  return ReactDOM.createPortal(\n    <div style={{position:'absolute', top:0, left:0, background:'rgba(0,0,0,0.8)', padding:'50px', color:'white'}}>\n      {children}\n    </div>,\n    document.body\n  );\n};\nconst App = () => {\n  const [show, setShow] = React.useState(false);\n  return <div>\n    <button onClick={() => setShow(true)}>Show Portal Modal</button>\n    {show && <Modal><button onClick={() => setShow(false)}>Close</button></Modal>}\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Portals</h3><p>Essential for modals, tooltips, and popovers to escape container `overflow: hidden` issues.</p>",
        "challenge": "Add some text inside the Modal."
    },
    {
        "id": "render_props",
        "title": "Render Props Pattern",
        "category": "Patterns",
        "xp": 25,
        "description": "A technique for sharing code between components using a prop whose value is a function.",
        "syntax": "<DataProvider render={data => <h1>{data}</h1>} />",
        "example": "const MouseTracker = ({ render }) => {\n  const [pos, setPos] = React.useState({x:0, y:0});\n  return <div style={{height:'200px', border:'1px solid white'}}\n    onMouseMove={e => setPos({x: e.clientX, y: e.clientY})}>\n    {render(pos)}\n  </div>;\n};\nconst App = () => (\n  <div style={{color:'white'}}>\n    <MouseTracker render={({x, y}) => <p>Mouse is at {x}, {y}</p>} />\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Render Props</h3><p>Mostly superseded by Custom Hooks, but still useful for inversion of control in JSX rendering.</p>",
        "challenge": "Change the output to render an absolute positioned dot at the mouse coordinates."
    },
    {
        "id": "hoc",
        "title": "Higher-Order Components (HOC)",
        "category": "Patterns",
        "xp": 25,
        "description": "A function that takes a component and returns a new component.",
        "syntax": "const EnhancedComponent = higherOrderComponent(WrappedComponent);",
        "example": "const withLogger = (Wrapped) => {\n  return (props) => {\n    React.useEffect(() => { console.log('Component Mounted') }, []);\n    return <Wrapped {...props} />;\n  };\n};\nconst Hello = ({ name }) => <div style={{color:'white'}}>Hello {name}</div>;\nconst LoggedHello = withLogger(Hello);\nconst App = () => <LoggedHello name=\"Sanskar\" />;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>HOCs</h3><p>Another pattern largely replaced by hooks, but very common in older codebases (e.g., Redux connect).</p>",
        "challenge": "Add a log statement for component unmount in the HOC."
    },
    {
        "id": "compound_components",
        "title": "Compound Components",
        "category": "Patterns",
        "xp": 30,
        "description": "A pattern where multiple components are used together to share implicit state (often via Context).",
        "syntax": "<Tabs><Tab>1</Tab><Panel>A</Panel></Tabs>",
        "example": "const ToggleContext = React.createContext();\nconst Toggle = ({children}) => {\n  const [on, setOn] = React.useState(false);\n  return <ToggleContext.Provider value={{on, setOn}}>{children}</ToggleContext.Provider>;\n};\nconst ToggleOn = ({children}) => { const {on} = React.useContext(ToggleContext); return on ? children : null; };\nconst ToggleOff = ({children}) => { const {on} = React.useContext(ToggleContext); return on ? null : children; };\nconst ToggleBtn = () => { const {on, setOn} = React.useContext(ToggleContext); return <button onClick={() => setOn(!on)}>Toggle</button>; };\nconst App = () => (\n  <Toggle>\n    <ToggleOn><p style={{color:'#61dafb'}}>It is ON</p></ToggleOn>\n    <ToggleOff><p style={{color:'red'}}>It is OFF</p></ToggleOff>\n    <ToggleBtn />\n  </Toggle>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Compound Components</h3><p>Highly flexible UI pattern used by libraries like Headless UI and Radix UI.</p>",
        "challenge": "Add a ToggleStatus component that just prints 'True' or 'False'."
    },
    {
        "id": "controlled_components",
        "title": "Controlled Components",
        "category": "Fundamentals",
        "xp": 15,
        "description": "Form data is handled by the React component's state.",
        "syntax": "<input value={state} onChange={e => setState(e.target.value)} />",
        "example": "const App = () => {\n  const [val, setVal] = React.useState('Hello');\n  return <div style={{color:'white'}}>\n    <input value={val} onChange={e => setVal(e.target.value)} />\n    <p>You typed: {val}</p>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Controlled</h3><p>React is the single source of truth for the input's value.</p>",
        "challenge": "Make the text upper case inside the p tag."
    },
    {
        "id": "uncontrolled_components",
        "title": "Uncontrolled Components",
        "category": "Fundamentals",
        "xp": 15,
        "description": "Form data is handled by the DOM itself using refs.",
        "syntax": "<input ref={inputRef} defaultValue=\"Initial\" />",
        "example": "const App = () => {\n  const ref = React.useRef();\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert('Submitted: ' + ref.current.value);\n  };\n  return <form onSubmit={handleSubmit} style={{color:'white'}}>\n    <input ref={ref} defaultValue=\"Initial\" />\n    <button type=\"submit\">Submit</button>\n  </form>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Uncontrolled</h3><p>Useful for integrating with non-React libraries or reducing re-renders on every keystroke.</p>",
        "challenge": "Add a second ref for an email input."
    },
    {
        "id": "error_boundaries",
        "title": "Error Boundaries",
        "category": "Resilience",
        "xp": 25,
        "description": "React components that catch JavaScript errors anywhere in their child component tree.",
        "syntax": "static getDerivedStateFromError(error) { return { hasError: true }; }",
        "example": "class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  render() { return this.state.hasError ? <h2 style={{color:'red'}}>Crash handled!</h2> : this.props.children; }\n}\nconst Buggy = () => { throw new Error(); };\nconst App = () => (\n  <ErrorBoundary><Buggy /></ErrorBoundary>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Error Boundaries</h3><p>Only class components can be error boundaries currently.</p>",
        "challenge": "Add a button to reset the error state (requires expanding the class component)."
    },
    {
        "id": "react_router_setup",
        "title": "React Router: BrowserRouter",
        "category": "Routing",
        "xp": 20,
        "description": "The foundation of client-side routing in React.",
        "syntax": "<BrowserRouter><App /></BrowserRouter>",
        "example": "// Mock environment: We use MemoryRouter in Sandbox\nconst { MemoryRouter, Routes, Route, Link } = window.ReactRouterDOM || {};\nconst App = () => {\n  if(!MemoryRouter) return <p style={{color:'red'}}>Router not loaded in sandbox</p>;\n  return (\n    <MemoryRouter>\n      <nav style={{color:'white'}}><Link style={{color:'#61dafb'}} to=\"/\">Home</Link> | <Link style={{color:'#61dafb'}} to=\"/about\">About</Link></nav>\n      <Routes>\n        <Route path=\"/\" element={<p style={{color:'white'}}>Home Page</p>} />\n        <Route path=\"/about\" element={<p style={{color:'white'}}>About Page</p>} />\n      </Routes>\n    </MemoryRouter>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React Router</h3><p>Enables navigation between views without reloading the page.</p>",
        "challenge": "Note: Since we are in a sandbox without imports, imagine setting up BrowserRouter at the root."
    },
    {
        "id": "react_router_params",
        "title": "React Router: useParams",
        "category": "Routing",
        "xp": 20,
        "description": "Hooks to access dynamic URL parameters.",
        "syntax": "const { id } = useParams();",
        "example": "const App = () => <div style={{color:'white'}}>const { id } = useParams(); allows reading /users/:id</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useParams</h3><p>Used to read the dynamic segments of the URL.</p>",
        "challenge": "Think about how you would fetch user data based on the ID parameter."
    },
    {
        "id": "redux_pattern",
        "title": "State: Redux Pattern",
        "category": "State Management",
        "xp": 25,
        "description": "A predictable state container using actions and reducers.",
        "syntax": "const reducer = (state, action) => { ... }",
        "example": "const reducer = (state, action) => {\n  switch(action.type) {\n    case 'INC': return { count: state.count + 1 };\n    default: return state;\n  }\n};\nconst App = () => {\n  const [state, dispatch] = React.useReducer(reducer, { count: 0 });\n  return <div style={{color:'white'}}>\n    <p>Count: {state.count}</p>\n    <button onClick={() => dispatch({type: 'INC'})}>Dispatch INC</button>\n  </div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Redux Pattern</h3><p>useReducer is React's built-in version of the Redux pattern for local state.</p>",
        "challenge": "Add a 'DEC' action to decrement the count."
    },
    {
        "id": "zustand_pattern",
        "title": "State: Zustand Pattern",
        "category": "State Management",
        "xp": 25,
        "description": "A small, fast and scalable bearbones state-management solution.",
        "syntax": "const useStore = create(set => ({ bears: 0, increase: () => set(state => ({ bears: state.bears + 1 })) }))",
        "example": "const App = () => <div style={{color:'white'}}>Zustand creates global hooks without Context Providers!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Zustand</h3><p>Very popular modern alternative to Redux for global state.</p>",
        "challenge": "Research Zustand's create() function online."
    },
    {
        "id": "react_query",
        "title": "Data: React Query",
        "category": "Data Fetching",
        "xp": 30,
        "description": "Powerful asynchronous state management for React.",
        "syntax": "const { data, isLoading } = useQuery('todos', fetchTodos);",
        "example": "const App = () => <div style={{color:'white'}}>React Query handles caching, deduping, and background updates automatically.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React Query (TanStack Query)</h3><p>The industry standard for fetching and caching API data in React.</p>",
        "challenge": "Compare React Query with a manual useEffect fetch."
    },
    {
        "id": "react_hook_form",
        "title": "Forms: React Hook Form",
        "category": "Forms",
        "xp": 25,
        "description": "Performant, flexible and extensible forms with easy-to-use validation.",
        "syntax": "const { register, handleSubmit } = useForm();",
        "example": "const App = () => <div style={{color:'white'}}>React Hook Form uses uncontrolled components under the hood for massive performance gains.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React Hook Form</h3><p>Reduces re-renders by not storing every keystroke in React state.</p>",
        "challenge": "Imagine replacing your Controlled Components with React Hook Form."
    },
    {
        "id": "styled_components",
        "title": "Styling: Styled Components",
        "category": "Styling",
        "xp": 20,
        "description": "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.",
        "syntax": "const Button = styled.button`color: red;`;",
        "example": "const App = () => <div style={{color:'white'}}>Styled Components use Tagged Template Literals to create components with scoped CSS.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>CSS-in-JS</h3><p>Styles are scoped automatically, preventing class name collisions.</p>",
        "challenge": "Research how styled components pass dynamic props (e.g. ${props => props.primary})."
    },
    {
        "id": "tailwind_react",
        "title": "Styling: Tailwind in React",
        "category": "Styling",
        "xp": 20,
        "description": "Utility-first CSS framework packed with classes that can be composed to build any design.",
        "syntax": "<div className=\"bg-blue-500 text-white p-4 rounded\">",
        "example": "const App = () => (\n  <div style={{color:'white'}}>\n    <p>Using Tailwind:</p>\n    <button className=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">\n      Tailwind Button (Requires Tailwind CSS injected)\n    </button>\n  </div>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Tailwind</h3><p>Extremely popular with React as it allows you to style components without leaving the JSX file.</p>",
        "challenge": "Add a margin-top utility class like 'mt-4'."
    },
    {
        "id": "react_testing_library",
        "title": "Testing: React Testing Library",
        "category": "Testing",
        "xp": 30,
        "description": "Simple and complete React DOM testing utilities that encourage good testing practices.",
        "syntax": "render(<MyComponent />); expect(screen.getByText('Hello')).toBeInTheDocument();",
        "example": "const App = () => <div style={{color:'white'}}>Testing Library focuses on testing behavior from the user's perspective rather than implementation details.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>RTL</h3><p>Replaced Enzyme as the standard for testing React components.</p>",
        "challenge": "Write a mock test in your head for a button click."
    },
    {
        "id": "code_splitting",
        "title": "Optimization: React.lazy",
        "category": "Optimization",
        "xp": 25,
        "description": "Dynamically import components to reduce initial bundle size.",
        "syntax": "const OtherComponent = React.lazy(() => import('./OtherComponent'));",
        "example": "const App = () => <div style={{color:'white'}}>React.lazy must be wrapped in a &lt;Suspense&gt; boundary!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Code Splitting</h3><p>Crucial for large SPAs to maintain fast load times.</p>",
        "challenge": "Research how webpack handles dynamic imports."
    },
    {
        "id": "virtualization",
        "title": "Optimization: Virtualization",
        "category": "Optimization",
        "xp": 30,
        "description": "Rendering only the items currently visible on the screen.",
        "syntax": "<FixedSizeList height={150} itemCount={1000} itemSize={35}>...</FixedSizeList>",
        "example": "const App = () => <div style={{color:'white'}}>Libraries like react-window render thousands of items by only DOM-rendering the 10 you can see.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Virtualization</h3><p>Solves performance issues with massive tables or lists.</p>",
        "challenge": "Find out what 'overscan' means in virtualization."
    },
    {
        "id": "server_side_rendering",
        "title": "Server-Side Rendering (SSR)",
        "category": "Architecture",
        "xp": 35,
        "description": "Rendering React components to HTML on the server.",
        "syntax": "ReactDOMServer.renderToString(<App />);",
        "example": "const App = () => <div style={{color:'white'}}>Next.js and Remix do this out of the box! It improves SEO and First Contentful Paint (FCP).</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>SSR</h3><p>The server sends fully formed HTML, then React 'hydrates' it to become interactive.</p>",
        "challenge": "Research the difference between renderToString and renderToPipeableStream."
    },
    {
        "id": "static_site_generation",
        "title": "Static Site Generation (SSG)",
        "category": "Architecture",
        "xp": 30,
        "description": "Pre-rendering pages at build time.",
        "syntax": "export async function getStaticProps() { ... }",
        "example": "const App = () => <div style={{color:'white'}}>SSG produces extremely fast, cacheable HTML files. Great for blogs and documentation.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>SSG</h3><p>Often combined with Incremental Static Regeneration (ISR) in Next.js.</p>",
        "challenge": "Think about why SSG is faster than SSR."
    },
    {
        "id": "react_19_use",
        "title": "React 19: use() API",
        "category": "Bleeding Edge",
        "xp": 40,
        "description": "A new Hook that lets you read the value of a resource like a Promise or Context.",
        "syntax": "const data = use(promise);",
        "example": "const App = () => <div style={{color:'white'}}>The use() hook can be called conditionally, unlike standard hooks!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>use()</h3><p>Simplifies fetching and context consumption in React 19.</p>",
        "challenge": "Imagine calling use(Context) inside an if statement."
    },
    {
        "id": "react_19_actions",
        "title": "React 19: Actions",
        "category": "Bleeding Edge",
        "xp": 40,
        "description": "First-class support for async functions in form actions.",
        "syntax": "<form action={myAsyncAction}>",
        "example": "const App = () => <div style={{color:'white'}}>React handles the pending state automatically when you pass an async function to the action prop!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Actions</h3><p>Say goodbye to manual e.preventDefault() and loading state management for forms.</p>",
        "challenge": "Research the useFormStatus hook."
    },
    {
        "id": "react_19_useactionstate",
        "title": "React 19: useActionState",
        "category": "Bleeding Edge",
        "xp": 45,
        "description": "A Hook that allows you to update state based on the result of a form action.",
        "syntax": "const [state, formAction] = useActionState(fn, initialState, permalink?);",
        "example": "const App = () => <div style={{color:'white'}}>useActionState seamlessly bridges server mutations with local UI state updates without manual loading toggles.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useActionState</h3><p>Replaces older manual form state tracking for React 19 actions.</p>",
        "challenge": "Learn how this compares to useReducer."
    },
    {
        "id": "react_19_useformstatus",
        "title": "React 19: useFormStatus",
        "category": "Bleeding Edge",
        "xp": 45,
        "description": "Provides status information of the last form submission.",
        "syntax": "const { pending, data, method, action } = useFormStatus();",
        "example": "const App = () => <div style={{color:'white'}}>useFormStatus must be called from a component rendered inside a &lt;form&gt; to work!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useFormStatus</h3><p>Perfect for disabling submit buttons while a server action is running.</p>",
        "challenge": "Imagine writing a generic SubmitButton component."
    },
    {
        "id": "react_19_useoptimistic",
        "title": "React 19: useOptimistic",
        "category": "Bleeding Edge",
        "xp": 50,
        "description": "Lets you optimistically update the UI before the server confirms the mutation.",
        "syntax": "const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);",
        "example": "const App = () => <div style={{color:'white'}}>Optimistic UI makes applications feel instant, even on slow networks.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>useOptimistic</h3><p>Rolls back automatically if the action throws an error.</p>",
        "challenge": "Think about what happens to optimisticState when the server action succeeds."
    },
    {
        "id": "strict_mode",
        "title": "Strict Mode",
        "category": "Fundamentals",
        "xp": 10,
        "description": "A tool for highlighting potential problems in an application.",
        "syntax": "<React.StrictMode><App /></React.StrictMode>",
        "example": "const App = () => <div style={{color:'white'}}>Strict Mode double-invokes render methods in development to flush out side effects!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Strict Mode</h3><p>Does not render any visible UI. It enables additional checks and warnings for its descendants.</p>",
        "challenge": "Add a console.log in a component and see it run twice in dev mode."
    },
    {
        "id": "profiler_api",
        "title": "Profiler API",
        "category": "Optimization",
        "xp": 25,
        "description": "Measures how often a React application renders and what the \"cost\" of rendering is.",
        "syntax": "<Profiler id=\"Navigation\" onRender={callback}><App /></Profiler>",
        "example": "const App = () => <div style={{color:'white'}}>The Profiler API is invaluable for finding performance bottlenecks in large component trees.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Profiler</h3><p>The onRender callback receives timings like actualDuration and baseDuration.</p>",
        "challenge": "Use the React DevTools Profiler tab."
    },
    {
        "id": "react_children",
        "title": "React.Children",
        "category": "Advanced API",
        "xp": 20,
        "description": "Provides utilities for dealing with the this.props.children opaque data structure.",
        "syntax": "React.Children.map(children, child => ...)",
        "example": "const App = () => <div style={{color:'white'}}>React.Children is considered legacy. Use array mapping or passing arrays explicitly in modern React.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>React.Children</h3><p>Still found in many UI libraries to inject props into nested children.</p>",
        "challenge": "Research why React.Children.map is better than children.map."
    },
    {
        "id": "react_cloneelement",
        "title": "React.cloneElement",
        "category": "Advanced API",
        "xp": 20,
        "description": "Clone and return a new React element using element as the starting point.",
        "syntax": "React.cloneElement(element, [props], [...children])",
        "example": "const App = () => <div style={{color:'white'}}>Often paired with React.Children.map to override props of children dynamically.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>cloneElement</h3><p>Considered a legacy pattern. Render props or custom hooks are preferred today.</p>",
        "challenge": "Think about how RadioGroup passes its 'name' prop to Radio components."
    },
    {
        "id": "react_isvalidelement",
        "title": "React.isValidElement",
        "category": "Advanced API",
        "xp": 10,
        "description": "Verifies the object is a React element.",
        "syntax": "React.isValidElement(object)",
        "example": "const App = () => <div style={{color:'white'}}>Prevents crashes when your component expects a React Element but gets a string or null.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>isValidElement</h3><p>Returns true or false.</p>",
        "challenge": "Write a guard clause using isValidElement."
    },
    {
        "id": "context_selector",
        "title": "Context Selector Pattern",
        "category": "Patterns",
        "xp": 35,
        "description": "A pattern to prevent unnecessary re-renders when using Context.",
        "syntax": "const value = useStoreSelector(state => state.specificValue);",
        "example": "const App = () => <div style={{color:'white'}}>Libraries like Zustand use selectors so components only re-render if the specific slice of state they need changes.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Selectors</h3><p>Standard React Context triggers a re-render for ALL consumers when ANY value changes, requiring the selector pattern for scale.</p>",
        "challenge": "Look up 'use-context-selector' library."
    },
    {
        "id": "state_colocation",
        "title": "State Colocation",
        "category": "Architecture",
        "xp": 15,
        "description": "Moving state as close as possible to where it's used.",
        "syntax": "// Move useState from Parent to Child",
        "example": "const App = () => <div style={{color:'white'}}>State colocation is the easiest and most effective performance optimization in React!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Colocation</h3><p>If only a Modal uses the `isOpen` state, don't put `isOpen` in the global Redux store or top-level App.</p>",
        "challenge": "Identify a state variable in your app that is defined too high up."
    },
    {
        "id": "lifting_state",
        "title": "Lifting State Up",
        "category": "Architecture",
        "xp": 15,
        "description": "Moving state to the closest common ancestor of the components that need it.",
        "syntax": "// Move useState from Sibling to Parent",
        "example": "const App = () => <div style={{color:'white'}}>When two sibling components need to share state, you must 'lift' it up to their parent.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Lifting State</h3><p>The inverse of colocation. Required for standard cross-component communication.</p>",
        "challenge": "Pass a state setter from the parent to a child."
    },
    {
        "id": "prop_drilling",
        "title": "Prop Drilling",
        "category": "Architecture",
        "xp": 15,
        "description": "Passing props down through multiple levels of components that don't need the data themselves.",
        "syntax": "<Child data={data} /> -> <Grandchild data={data} />",
        "example": "const App = () => <div style={{color:'white'}}>Prop drilling is fine for 1-3 levels, but becomes a maintenance nightmare in deep trees. Use Context or Redux instead.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Prop Drilling</h3><p>An anti-pattern when taken to the extreme.</p>",
        "challenge": "Refactor a deeply drilled prop using Context."
    },
    {
        "id": "separation_concerns",
        "title": "Container/Presenter Pattern",
        "category": "Patterns",
        "xp": 25,
        "description": "Separating data fetching (Container) from rendering (Presenter).",
        "syntax": "<UserListContainer /> renders <UserList users={data} />",
        "example": "const App = () => <div style={{color:'white'}}>Modern React often replaces this pattern with Custom Hooks, which separate logic from UI even better!</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Separation of Concerns</h3><p>Keeps components dumb, testable, and reusable.</p>",
        "challenge": "Create a custom hook useUsers() to replace a Container component."
    },
    {
        "id": "debouncing",
        "title": "Debouncing in React",
        "category": "Optimization",
        "xp": 20,
        "description": "Delaying the execution of a function until after a period of inactivity.",
        "syntax": "const debouncedFn = useMemo(() => debounce(fn, 300), []);",
        "example": "const App = () => <div style={{color:'white'}}>Debouncing search inputs prevents API spam on every single keystroke.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Debouncing</h3><p>Often implemented via custom hooks like useDebounce(value, delay).</p>",
        "challenge": "Write a useDebounce hook using useEffect and setTimeout."
    },
    {
        "id": "throttling",
        "title": "Throttling in React",
        "category": "Optimization",
        "xp": 20,
        "description": "Ensuring a function is only called at most once in a specified time period.",
        "syntax": "const throttledFn = useMemo(() => throttle(fn, 300), []);",
        "example": "const App = () => <div style={{color:'white'}}>Throttling is perfect for scroll or resize event listeners to ensure smooth performance at 60fps.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Throttling</h3><p>Guarantees execution at a regular interval, unlike debouncing which waits for a pause.</p>",
        "challenge": "Use lodash.throttle in a scroll handler."
    },
    {
        "id": "suspense_transition",
        "title": "Suspense with Transition",
        "category": "Concurrent",
        "xp": 35,
        "description": "Combining Suspense and Transitions to avoid hiding existing UI with a fallback when loading new data.",
        "syntax": "startTransition(() => setTab('newTab'))",
        "example": "const App = () => <div style={{color:'white'}}>This prevents the screen from jarringly returning to a Loading spinner when navigating.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Transitions + Suspense</h3><p>The hallmark of premium React Concurrent rendering.</p>",
        "challenge": "Read about 'isPending' states in useTransition."
    },
    {
        "id": "error_boundary_fallback",
        "title": "ErrorBoundary Fallback",
        "category": "Resilience",
        "xp": 20,
        "description": "Providing an actionable fallback UI when an error boundary catches a crash.",
        "syntax": "render() { return this.state.hasError ? <Fallback reset={this.reset} /> : children; }",
        "example": "const App = () => <div style={{color:'white'}}>Libraries like react-error-boundary provide a useErrorBoundary hook to easily trigger crashes from async code.</div>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Fallback UI</h3><p>Always provide a 'Try Again' button to recover gracefully.</p>",
        "challenge": "Implement a retry function in an error boundary."
    },
    {
        "id": "react_conclusion",
        "title": "Mastery Complete",
        "category": "Masterclass",
        "xp": 100,
        "description": "You have completed the React Mastery curriculum.",
        "syntax": "<App />",
        "example": "const App = () => {\n  return (\n    <div style={{color:'white', padding: '20px', textAlign: 'center'}}>\n      <h1 style={{color: '#61dafb', fontSize: '3rem'}}>🎉 Congratulations!</h1>\n      <p style={{fontSize: '1.2rem'}}>You have mastered React.</p>\n      <div style={{\n        marginTop: '20px',\n        padding: '20px',\n        background: 'linear-gradient(45deg, #61dafb, #d946ef)',\n        borderRadius: '10px',\n        color: 'black',\n        fontWeight: 'bold'\n      }}>\n        You are now ready to build massive, interactive single-page applications!\n      </div>\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "content": "<h3>Conclusion</h3><p>This covers exactly 100 concepts, from useState to the bleeding edge React 19 Actions. Build incredible things!</p>",
        "challenge": "Review all 100 concepts and start your next big project!"
    },
    {

            "id": "react_memo_perf",
            "title": "React.memo",
            "category": "Performance",
            "xp": 25,
            "description": "Performance optimization with memoization to prevent unnecessary re-renders.",
            "syntax": "const MemoizedComponent = React.memo(MyComponent);",
            "example": "const MyComponent = React.memo((props) => {\n  return <div>{props.text}</div>;\n});\nconst App = () => <MyComponent text=\"Hello\" />;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>React.memo</h3><p>React.memo is a higher-order component. If your component renders the same result given the same props, React will skip rendering the component, and use the last rendered result.</p><h4>Best Practices</h4><p>Use it for pure components that render often with the same props.</p><h4>Common Pitfalls</h4><p>Don't use it everywhere. The comparison itself has a cost.</p>",
            "challenge": "Wrap a component in React.memo and log when it renders."
    },
    {

            "id": "react_lazy_suspense",
            "title": "React.lazy and Suspense",
            "category": "Code Splitting",
            "xp": 30,
            "description": "Code splitting and lazy loading of components to reduce initial bundle size.",
            "syntax": "const LazyComp = React.lazy(() => import('./LazyComp'));",
            "example": "const LazyComp = React.lazy(() => import('./LazyComp'));\nconst App = () => (\n  <React.Suspense fallback={<div>Loading...</div>}>\n    <LazyComp />\n  </React.Suspense>\n);\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Lazy Loading</h3><p>React.lazy lets you render a dynamic import as a regular component.</p><h4>Best Practices</h4><p>Use lazy loading for large routes or components not immediately visible.</p><h4>Common Pitfalls</h4><p>Forgetting to wrap lazy components in a Suspense boundary will crash the app.</p>",
            "challenge": "Implement lazy loading for a heavy component."
    },
    {

            "id": "error_boundaries_handling",
            "title": "Error Boundaries",
            "category": "Error Handling",
            "xp": 30,
            "description": "Catching and handling component errors in the React tree gracefully.",
            "syntax": "class ErrorBoundary extends React.Component { ... }",
            "example": "class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  render() { return this.state.hasError ? <h1>Error!</h1> : this.props.children; }\n}\nconst App = () => <ErrorBoundary><MyBuggyComponent /></ErrorBoundary>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Error Boundaries</h3><p>Error boundaries catch JavaScript errors anywhere in their child component tree.</p><h4>Best Practices</h4><p>Place error boundaries at logical boundaries like routes or major UI sections.</p><h4>Common Pitfalls</h4><p>Error boundaries do not catch errors inside event handlers.</p>",
            "challenge": "Create an ErrorBoundary and intentionally throw an error in a child."
    },
    {

            "id": "react_portals_rendering",
            "title": "React Portals",
            "category": "Advanced",
            "xp": 25,
            "description": "Rendering outside the DOM hierarchy for modals, tooltips, etc.",
            "syntax": "ReactDOM.createPortal(child, container)",
            "example": "const Modal = ({ children }) => {\n  return ReactDOM.createPortal(<div>{children}</div>, document.getElementById('modal-root'));\n};\nconst App = () => <Modal>Hello Portal!</Modal>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Portals</h3><p>Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p><h4>Best Practices</h4><p>Use for modals, tooltips, and popovers to avoid z-index and overflow issues.</p><h4>Common Pitfalls</h4><p>Events bubble up through the React tree, not the DOM tree.</p>",
            "challenge": "Create a portal for a tooltip."
    },
    {

            "id": "react_forward_ref_passing",
            "title": "React.forwardRef",
            "category": "Advanced Hooks",
            "xp": 25,
            "description": "Forwarding refs to child components directly.",
            "syntax": "const FancyButton = React.forwardRef((props, ref) => <button ref={ref}>{props.children}</button>);",
            "example": "const FancyButton = React.forwardRef((props, ref) => (\n  <button ref={ref} className=\"FancyButton\">\n    {props.children}\n  </button>\n));\nconst App = () => {\n  const ref = React.useRef();\n  return <FancyButton ref={ref}>Click me!</FancyButton>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>forwardRef</h3><p>Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down to a child.</p><h4>Best Practices</h4><p>Useful for reusable component libraries (like inputs or buttons).</p><h4>Common Pitfalls</h4><p>Overusing refs breaks the declarative paradigm of React.</p>",
            "challenge": "Forward a ref to a custom input component."
    },
    {

            "id": "use_imperative_handle",
            "title": "useImperativeHandle",
            "category": "Advanced Hooks",
            "xp": 35,
            "description": "Customizing the ref instance value that is exposed to parent components.",
            "syntax": "useImperativeHandle(ref, createHandle, [deps])",
            "example": "const FancyInput = React.forwardRef((props, ref) => {\n  const inputRef = React.useRef();\n  React.useImperativeHandle(ref, () => ({\n    focus: () => { inputRef.current.focus(); }\n  }));\n  return <input ref={inputRef} />;\n});\nconst App = () => {\n  const ref = React.useRef();\n  return <FancyInput ref={ref} />;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>useImperativeHandle</h3><p>Customizes the instance value that is exposed to parent components when using ref.</p><h4>Best Practices</h4><p>Should be used with forwardRef. Only expose necessary methods.</p><h4>Common Pitfalls</h4><p>Avoid using imperative code in mostly declarative React applications.</p>",
            "challenge": "Expose a 'clear' method on a custom input component."
    },
    {

            "id": "use_layout_effect_sync",
            "title": "useLayoutEffect",
            "category": "Advanced Hooks",
            "xp": 30,
            "description": "Synchronous side effects after DOM mutations but before browser paint.",
            "syntax": "useLayoutEffect(() => { ... }, [deps])",
            "example": "const App = () => {\n  const ref = React.useRef();\n  React.useLayoutEffect(() => {\n    console.log(ref.current.getBoundingClientRect());\n  }, []);\n  return <div ref={ref}>Hello</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>useLayoutEffect</h3><p>The signature is identical to useEffect, but it fires synchronously after all DOM mutations.</p><h4>Best Practices</h4><p>Use it to read layout from the DOM and synchronously re-render to prevent visual flickers.</p><h4>Common Pitfalls</h4><p>Blocks browser painting; use useEffect instead whenever possible.</p>",
            "challenge": "Measure a DOM node's width synchronously before paint."
    },
    {

            "id": "use_deferred_value_state",
            "title": "useDeferredValue",
            "category": "React 18",
            "xp": 35,
            "description": "Deferring non-urgent state updates to keep the UI responsive.",
            "syntax": "const deferredValue = useDeferredValue(value);",
            "example": "const App = () => {\n  const [text, setText] = React.useState('');\n  const deferredText = React.useDeferredValue(text);\n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <SlowList text={deferredText} />\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>useDeferredValue</h3><p>Allows you to defer updating a part of the UI. It's like debouncing, but integrated into React's rendering pipeline.</p><h4>Best Practices</h4><p>Use it for slow-rendering components that depend on fast-updating state like user input.</p><h4>Common Pitfalls</h4><p>Do not use for network requests, only for rendering optimizations.</p>",
            "challenge": "Defer a search query used in a heavy list."
    },
    {

            "id": "use_transition_blocking",
            "title": "useTransition",
            "category": "React 18",
            "xp": 35,
            "description": "Marking state updates as non-blocking transitions.",
            "syntax": "const [isPending, startTransition] = useTransition();",
            "example": "const App = () => {\n  const [isPending, startTransition] = React.useTransition();\n  const [val, setVal] = React.useState(0);\n  const update = () => startTransition(() => setVal(val + 1));\n  return <button onClick={update}>{isPending ? 'Loading...' : 'Update'}</button>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>useTransition</h3><p>Lets you update state without blocking the UI. Urgent updates (like typing) interrupt non-urgent transitions.</p><h4>Best Practices</h4><p>Wrap slow, non-urgent state updates (like filtering a large list) in startTransition.</p><h4>Common Pitfalls</h4><p>Cannot be used for controlled inputs directly.</p>",
            "challenge": "Wrap a slow filtering operation in a transition."
    },
    {

            "id": "use_id_accessibility",
            "title": "useId",
            "category": "React 18",
            "xp": 20,
            "description": "Generating unique IDs for accessibility attributes.",
            "syntax": "const id = useId();",
            "example": "const App = () => {\n  const id = React.useId();\n  return (\n    <div>\n      <label htmlFor={id}>Name</label>\n      <input id={id} type=\"text\" />\n    </div>\n  );\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>useId</h3><p>A hook for generating unique IDs that are stable across the server and client, avoiding hydration mismatches.</p><h4>Best Practices</h4><p>Use for connecting labels and inputs with aria attributes.</p><h4>Common Pitfalls</h4><p>Do not use useId to generate keys for lists.</p>",
            "challenge": "Connect an input and an error message using useId and aria-describedby."
    },
    {

            "id": "server_components_concept",
            "title": "Server Components",
            "category": "Architecture",
            "xp": 40,
            "description": "React Server Components (RSC) for rendering directly on the server.",
            "syntax": "export default async function ServerComponent() { ... }",
            "example": "export default async function Page() {\n  const data = await db.query('SELECT * FROM users');\n  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
            "content": "<h3>Server Components</h3><p>RSC allow components to run only on the server, resulting in zero bundle size on the client.</p><h4>Best Practices</h4><p>Use server components for data fetching and heavy dependencies.</p><h4>Common Pitfalls</h4><p>Server components cannot use state, effects, or event listeners.</p>",
            "challenge": "Identify a component that could be converted to a Server Component."
    },
    {

            "id": "concurrent_rendering_features",
            "title": "Concurrent Rendering",
            "category": "React 18",
            "xp": 45,
            "description": "React 18+ concurrent features allowing interruptible rendering.",
            "syntax": "ReactDOM.createRoot(root).render(<App />);",
            "example": "const App = () => {\n  // Concurrent mode is enabled automatically with createRoot\n  return <div>Welcome to Concurrent React!</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Concurrent Rendering</h3><p>React can pause, abort, or resume rendering work to keep the UI responsive.</p><h4>Best Practices</h4><p>Utilize useTransition and useDeferredValue to fully leverage concurrency.</p><h4>Common Pitfalls</h4><p>Assuming renders run uninterrupted synchronously can lead to bugs in strict mode.</p>",
            "challenge": "Read the React docs on how createRoot enables concurrent features."
    },
    {

            "id": "automatic_batching_18",
            "title": "Automatic Batching",
            "category": "React 18",
            "xp": 30,
            "description": "React 18 batched state updates for better performance out-of-the-box.",
            "syntax": "// State updates in promises or timeouts are batched automatically",
            "example": "const App = () => {\n  const [count, setCount] = React.useState(0);\n  const [flag, setFlag] = React.useState(false);\n  const handleClick = () => {\n    setTimeout(() => {\n      setCount(c => c + 1);\n      setFlag(f => !f);\n      // Only one re-render happens!\n    }, 1000);\n  };\n  return <button onClick={handleClick}>Click</button>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Automatic Batching</h3><p>React batches multiple state updates into a single re-render, even inside promises, setTimeout, or native event handlers.</p><h4>Best Practices</h4><p>Trust React to batch updates; use flushSync if you absolutely need a synchronous update.</p><h4>Common Pitfalls</h4><p>Don't assume intermediate states will be painted to the screen.</p>",
            "challenge": "Test automatic batching in an async function."
    },
    {

            "id": "react_compiler_forget",
            "title": "React Compiler",
            "category": "Bleeding Edge",
            "xp": 50,
            "description": "React Forget / compiler optimization to remove the need for manual memoization.",
            "syntax": "// No need for useMemo or useCallback anymore!",
            "example": "const App = () => {\n  // The React Compiler automatically memoizes this component and its values\n  return <div>Compiled React Code</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>React Compiler</h3><p>An optimizing compiler that automatically applies memoization (equivalent to useMemo/useCallback/React.memo) during the build step.</p><h4>Best Practices</h4><p>Write standard, idiomatic React and let the compiler optimize it.</p><h4>Common Pitfalls</h4><p>Mutating variables instead of updating state can break compiler guarantees.</p>",
            "challenge": "Read the React Compiler documentation."
    },
    {

            "id": "react_testing_library_concept",
            "title": "React Testing",
            "category": "Testing",
            "xp": 35,
            "description": "Testing React components reliably with React Testing Library.",
            "syntax": "render(<App />); expect(screen.getByRole('button')).toBeInTheDocument();",
            "example": "import { render, screen } from '@testing-library/react';\nimport App from './App';\ntest('renders button', () => {\n  render(<App />);\n  const btn = screen.getByRole('button', { name: /submit/i });\n  expect(btn).toBeInTheDocument();\n});",
            "content": "<h3>Testing Library</h3><p>Focuses on testing components from the user's perspective rather than implementation details.</p><h4>Best Practices</h4><p>Query by accessibility roles or text content, rather than class names or test IDs.</p><h4>Common Pitfalls</h4><p>Testing internal component state directly instead of DOM output.</p>",
            "challenge": "Write a test that clicks a button and verifies new text appears."
    },
    {

            "id": "react_router_v6_modern",
            "title": "React Router v6",
            "category": "Routing",
            "xp": 35,
            "description": "Modern declarative routing with React Router v6.",
            "syntax": "<Route path=\"/\" element={<Home />} />",
            "example": "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nconst App = () => (\n  <BrowserRouter>\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n      <Route path=\"/about\" element={<About />} />\n    </Routes>\n  </BrowserRouter>\n);",
            "content": "<h3>React Router v6</h3><p>Introduces a more declarative API, nested routes, and powerful data loading capabilities via the newer Data Routers.</p><h4>Best Practices</h4><p>Use the latest createBrowserRouter for data fetching and action mutations.</p><h4>Common Pitfalls</h4><p>Confusing v5 syntax (like Switch) with v6 (Routes).</p>",
            "challenge": "Create a nested route layout using the Outlet component."
    },
    {

            "id": "redux_toolkit_state",
            "title": "Redux Toolkit",
            "category": "State Management",
            "xp": 40,
            "description": "Modern, opinionated state management with Redux Toolkit (RTK).",
            "syntax": "const slice = createSlice({ name: 'counter', initialState, reducers: { ... } });",
            "example": "import { createSlice, configureStore } from '@reduxjs/toolkit';\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: { increment: s => { s.value += 1 } }\n});\nconst store = configureStore({ reducer: counterSlice.reducer });",
            "content": "<h3>Redux Toolkit</h3><p>The official, recommended way to write Redux logic. It simplifies store setup, reduces boilerplate, and uses Immer for immutable updates.</p><h4>Best Practices</h4><p>Use RTK Query for data fetching instead of writing manual thunks.</p><h4>Common Pitfalls</h4><p>Overusing Redux for local UI state that should just be in useState.</p>",
            "challenge": "Create a basic RTK slice and dispatch an action."
    },
    {

            "id": "react_query_tanstack_server",
            "title": "React Query / TanStack Query",
            "category": "Data Fetching",
            "xp": 40,
            "description": "Server state management and data fetching with TanStack Query.",
            "syntax": "const { data, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });",
            "example": "import { useQuery } from '@tanstack/react-query';\nconst App = () => {\n  const { data, isLoading } = useQuery({ queryKey: ['data'], queryFn: fetchMyAPI });\n  if (isLoading) return <div>Loading...</div>;\n  return <div>{JSON.stringify(data)}</div>;\n};",
            "content": "<h3>TanStack Query</h3><p>Handles caching, background updates, stale data, and deduplication for server state.</p><h4>Best Practices</h4><p>Treat server state as a cache. Let React Query manage it entirely.</p><h4>Common Pitfalls</h4><p>Setting staleTime too low or zero, causing excessive network requests.</p>",
            "challenge": "Configure a global staleTime for your QueryClient."
    },
    {

            "id": "nextjs_integration_framework",
            "title": "Next.js Integration",
            "category": "Frameworks",
            "xp": 45,
            "description": "Using React with the Next.js framework for full-stack applications.",
            "syntax": "export default function Page() { return <div>Next.js Page</div>; }",
            "example": "import Link from 'next/link';\nexport default function Home() {\n  return (\n    <div>\n      <h1>Welcome to Next.js</h1>\n      <Link href=\"/about\">About Us</Link>\n    </div>\n  );\n}",
            "content": "<h3>Next.js</h3><p>The standard React framework. Provides SSR, SSG, file-system routing, API routes, and first-class React Server Components support.</p><h4>Best Practices</h4><p>Use the App Router for new projects to fully leverage React 18/19 features.</p><h4>Common Pitfalls</h4><p>Mixing client and server logic improperly in Server Components.</p>",
            "challenge": "Create a dynamic route like [id].js or [id]/page.js."
    },
    {

            "id": "react_performance_profiling",
            "title": "React Performance Profiling",
            "category": "Optimization",
            "xp": 35,
            "description": "Using the React DevTools Profiler to find performance bottlenecks.",
            "syntax": "// Open React DevTools -> Profiler -> Record",
            "example": "const App = () => {\n  return <div>Profile me in the React DevTools!</div>;\n};\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
            "content": "<h3>Performance Profiling</h3><p>The Profiler plugin in browser DevTools lets you record rendering sessions to see which components render, why, and how long they take.</p><h4>Best Practices</h4><p>Profile in a production build or use the DevTools with 'Record why each component rendered' enabled.</p><h4>Common Pitfalls</h4><p>Optimizing components that take less than 1ms to render.</p>",
            "challenge": "Record a profiling session while interacting with your app."
    }
];

// --- App State ---
let currentTag = TAGS[0];
let masteredTags = new Set();
let favoriteTags = new Set();
let editor;
let isDarkTheme = true;
let currentTheme = PRESET_THEMES[0];
let xp = 0;
let isZenMode = false;

// --- SIDEBAR MANAGEMENT ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sbOpen = document.getElementById('sbOpen');
    if (!sidebar) return;
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        sidebar.classList.remove('open');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.classList.remove('show');
        }
        document.body.classList.remove('sb-open');
        if (sbOpen) sbOpen.setAttribute('aria-expanded', 'false');
    } else {
        sidebar.classList.add('open');
        if (overlay) {
            overlay.classList.add('active');
            overlay.classList.add('show');
        }
        document.body.classList.add('sb-open');
        if (sbOpen) sbOpen.setAttribute('aria-expanded', 'true');
    }
}

// Global Escape listener to close drawer or modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
});

// --- GREETING & USERNAME ---
function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return '🌅 Good Morning';
    if (h < 17) return '☀️ Good Afternoon';
    if (h < 21) return '🌆 Good Evening';
    return '🌙 Good Night';
}

function updateGreeting() {
    const wrap = document.getElementById('greetingWrap');
    if (!wrap) return;
    let name = '';
    try { name = localStorage.getItem('reactMasteryUsername') || ''; } catch (e) { }
    const greeting = getGreeting();
    wrap.textContent = name ? `${greeting}, ${name}!` : `${greeting}, Developer!`;
}

function saveUsername() {
    const input = document.getElementById('wmUsername');
    const name = input ? input.value.trim() : '';
    if (name) {
        try { localStorage.setItem('reactMasteryUsername', name); } catch (e) { }
    }
    try { localStorage.setItem('reactMasteryWelcomed', 'true'); } catch (e) { }
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.close();
    updateGreeting();
}

function skipUsername() {
    try { localStorage.setItem('reactMasteryWelcomed', 'true'); } catch (e) { }
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.close();
    updateGreeting();
}

// --- MASTERY RANK ---
function getMasteryRank(count) {
    if (count >= 100) return '👑 Grandmaster';
    if (count >= 80) return '🏆 Master';
    if (count >= 60) return '💎 Expert';
    if (count >= 40) return '🔥 Intermediate';
    if (count >= 20) return '⚡ Apprentice';
    if (count >= 5) return '🌱 Beginner';
    return '🆕 Novice';
}

function updateMasteryStats() {
    const count = masteredTags.size;
    const level = Math.floor(count / 10) + 1;

    const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    el('masteryCountStat', count);
    el('masteryLevel', level);
    el('sbMasteryCount', count);
    el('masteryRank', getMasteryRank(count));
    el('favCountStat', favoriteTags.size);

    // Estimate reading time (~2 min per concept)
    el('readTime', Math.max(1, Math.round(TAGS.length * 2)));

    // Progress bars
    const pct = TAGS.length ? Math.round((count / TAGS.length) * 100) : 0;
    const bar = document.getElementById('masteryProgressBar');
    if (bar) bar.style.width = pct + '%';

    // Mastery Center rank
    const mcRank = document.getElementById('mcRank');
    if (mcRank) mcRank.textContent = getMasteryRank(count);
}

// --- CONCEPT OF THE DAY ---
function initConceptOfDay() {
    const card = document.getElementById('totDayCard');
    const text = document.getElementById('totDayText');
    const btn = document.getElementById('totDayBtn');
    if (!card || !text || !btn) return;

    const dayIndex = Math.floor(Date.now() / 86400000) % TAGS.length;
    const tag = TAGS[dayIndex];
    text.textContent = `Today's concept: ${tag.title} — ${tag.description || ''}`;
    btn.onclick = () => {
        loadTag(tag.id);
        const contentEl = document.getElementById('content');
        if (contentEl) contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    card.style.display = 'block';
}

// --- ZEN MODE ---
function toggleZenMode() {
    isZenMode = !isZenMode;
    document.body.classList.toggle('zen-mode', isZenMode);
    const btn = document.getElementById('zenBtn');
    if (btn) btn.textContent = isZenMode ? '👁️ Exit Zen' : '👁️ Zen Mode';
}

// --- FONT SIZE ---
function changeFontSize(delta) {
    const root = document.documentElement;
    let current = parseFloat(getComputedStyle(root).fontSize) || 16;
    current = Math.max(12, Math.min(24, current + delta));
    root.style.fontSize = current + 'px';
    try { localStorage.setItem('reactMasteryFontSize', current); } catch (e) { }
}

// --- EXPORT / IMPORT PROGRESS ---
function exportProgress() {
    const data = {
        mastered: [...masteredTags],
        favorites: [...favoriteTags],
        theme: currentTheme.id,
        xp: xp,
        username: localStorage.getItem('reactMasteryUsername') || '',
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'react-mastery-progress.json';
    a.click();
    URL.revokeObjectURL(url);
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
                try { localStorage.setItem('react-mastery-favorites', JSON.stringify([...favoriteTags])); } catch (e) { }
            }
            if (data.xp) {
                xp = data.xp;
                try { localStorage.setItem('react_xp', xp); } catch (e) { }
            }
            if (data.username) {
                try { localStorage.setItem('reactMasteryUsername', data.username); } catch (e) { }
            }
            if (data.theme) {
                applyTheme(data.theme);
            }
            updateProgressUI();
            updateMasteryStats();
            updateGreeting();
            renderSidebar();
            alert('Progress imported successfully! 🎉');
        } catch (err) {
            alert('Invalid file format.');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// --- QUIZ SYSTEM ---
const QUIZ_QUESTIONS = [
    { q: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON and XML", "JavaScript Expression"], correct: 0 },
    { q: "Which hook is used for state management in functional components?", options: ["useEffect", "useState", "useReducer", "useContext"], correct: 1 },
    { q: "What method is used to render a React element into the DOM?", options: ["React.render()", "ReactDOM.createRoot().render()", "document.render()", "React.mount()"], correct: 1 },
    { q: "What is the Virtual DOM?", options: ["A real DOM copy", "A lightweight JS representation of the real DOM", "A CSS framework", "A database"], correct: 1 },
    { q: "Which of these is NOT a React hook?", options: ["useState", "useEffect", "useHistory", "useCallback"], correct: 2 },
    { q: "What does useEffect do?", options: ["Creates state", "Performs side effects", "Creates refs", "Memoizes values"], correct: 1 },
    { q: "Props in React are:", options: ["Mutable", "Read-only", "Optional always", "Only strings"], correct: 1 },
    { q: "React components must return:", options: ["A string", "An object", "A single root element or fragment", "An array only"], correct: 2 },
    { q: "What is the purpose of the key prop in lists?", options: ["Styling", "Identifying elements uniquely", "Event handling", "Creating refs"], correct: 1 },
    { q: "Which hook replaces componentDidMount?", options: ["useState", "useEffect with []", "useRef", "useMemo"], correct: 1 },
    { q: "React.memo is used for:", options: ["State management", "Performance optimization via memoization", "Routing", "Error handling"], correct: 1 },
    { q: "What is a Higher-Order Component (HOC)?", options: ["A class component", "A function that takes a component and returns a new one", "A built-in React hook", "A CSS technique"], correct: 1 },
    { q: "useRef is primarily used for:", options: ["State management", "Accessing DOM elements directly", "Routing", "API calls"], correct: 1 },
    { q: "What is React Fiber?", options: ["A CSS library", "React's reconciliation algorithm", "A state management tool", "A testing framework"], correct: 1 },
    { q: "Which React 18 feature enables concurrent rendering?", options: ["useEffect", "Suspense + useTransition", "useRef", "React.memo"], correct: 1 },
    { q: "What does useMemo do?", options: ["Memoizes a computed value", "Creates state", "Handles side effects", "Creates refs"], correct: 0 },
    { q: "Error Boundaries catch errors in:", options: ["Event handlers", "Async code", "Rendering and lifecycle methods", "setTimeout callbacks"], correct: 2 },
    { q: "React Context is used for:", options: ["Database queries", "Passing data without prop drilling", "Routing", "Animation"], correct: 1 },
    { q: "What is the correct way to update state based on previous state?", options: ["setState(newValue)", "setState(prev => newValue)", "setState(prev => prev + change)", "state = newValue"], correct: 2 },
    { q: "useReducer is preferred over useState when:", options: ["State is simple", "State logic is complex with multiple sub-values", "You don't need state", "Using class components"], correct: 1 }
];

let quizState = { questions: [], currentIndex: 0, score: 0, answered: false };

function openQuiz(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('quizModal');
    if (!modal) return;

    // Shuffle and pick 5
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);
    quizState = { questions: shuffled, currentIndex: 0, score: 0, answered: false };

    document.getElementById('quizActiveArea').style.display = 'block';
    document.getElementById('quizResultArea').style.display = 'none';
    document.getElementById('quizFooterActions').style.display = 'flex';

    showQuizQuestion();
    modal.showModal();
}

function showQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    document.getElementById('quizQuestion').textContent = `Q${quizState.currentIndex + 1}. ${q.q}`;
    document.getElementById('quizScoreDisplay').textContent = `Score: ${quizState.score}/${quizState.questions.length}`;

    const optContainer = document.getElementById('quizOptions');
    optContainer.innerHTML = q.options.map((opt, i) => `
        <button type="button" class="quiz-opt" onclick="selectQuizAnswer(${i})"
            style="text-align:left; padding:14px 18px; border-radius:10px; background:var(--bg2); border:1px solid var(--border); color:var(--text); font-size:0.95rem; cursor:pointer; transition:0.2s; font-family:inherit;"
            onmouseover="this.style.borderColor='var(--accent)'" onmouseout="if(!this.classList.contains('selected'))this.style.borderColor='var(--border)'">
            ${opt}
        </button>
    `).join('');

    quizState.answered = false;
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) { nextBtn.style.opacity = '0.5'; nextBtn.style.pointerEvents = 'none'; }
}

function selectQuizAnswer(index) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const buttons = document.querySelectorAll('.quiz-opt');
    buttons.forEach((btn, i) => {
        btn.style.pointerEvents = 'none';
        if (i === q.correct) {
            btn.style.background = 'rgba(16, 185, 129, 0.2)';
            btn.style.borderColor = '#10b981';
            btn.style.color = '#10b981';
        } else if (i === index && i !== q.correct) {
            btn.style.background = 'rgba(239, 68, 68, 0.2)';
            btn.style.borderColor = '#ef4444';
            btn.style.color = '#ef4444';
        }
    });

    if (index === q.correct) quizState.score++;
    document.getElementById('quizScoreDisplay').textContent = `Score: ${quizState.score}/${quizState.questions.length}`;

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) { nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto'; }
}

function nextQuizQuestion() {
    quizState.currentIndex++;
    if (quizState.currentIndex >= quizState.questions.length) {
        // Show results
        document.getElementById('quizActiveArea').style.display = 'none';
        document.getElementById('quizFooterActions').style.display = 'none';
        document.getElementById('quizResultArea').style.display = 'block';
        document.getElementById('quizFinalScore').textContent = `${quizState.score}/${quizState.questions.length}`;
    } else {
        showQuizQuestion();
    }
}

function shareScore() {
    const text = `🎯 I scored ${quizState.score}/${quizState.questions.length} on the React Mastery Quiz!\nTest your React knowledge: https://github.com/sanskarIN/LangSteps`;
    navigator.clipboard.writeText(text).then(() => alert('Score copied to clipboard! 📋'));
}

// --- CHEAT SHEET ---
function openCheatSheet() {
    renderCheatSheet();
    const modal = document.getElementById('cheatSheetModal');
    if (modal) modal.showModal();
}

function renderCheatSheet() {
    const grid = document.getElementById('csGrid');
    if (!grid) return;
    const search = (document.getElementById('csSearch') || {}).value || '';
    const q = search.toLowerCase().trim();

    const filtered = q ? TAGS.filter(t => t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)) : TAGS;

    grid.innerHTML = filtered.map(t => `
        <div style="background:var(--bg3); border:1px solid var(--border); border-radius:12px; padding:16px; cursor:pointer; transition:0.2s;"
            onclick="document.getElementById('cheatSheetModal').close(); loadTag('${t.id}');"
            onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateY(-2px)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.transform=''">
            <div style="font-weight:700; font-size:0.95rem; margin-bottom:4px; color:var(--text);">${t.title}</div>
            <div style="font-size:0.78rem; color:var(--accent); margin-bottom:6px;">${t.category}</div>
            <div style="font-size:0.82rem; color:var(--text2); line-height:1.4;">${t.description.substring(0, 100)}${t.description.length > 100 ? '...' : ''}</div>
            <code style="display:block; margin-top:8px; font-size:0.75rem; color:var(--accent2); background:var(--bg); padding:6px 8px; border-radius:6px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.syntax.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 60)}</code>
        </div>
    `).join('');
}

// --- MASTERY CENTER ---
const INTERVIEW_QA = [
    { q: "What is the Virtual DOM and how does it work?", a: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React creates a new Virtual DOM tree, diffs it against the previous one (reconciliation), and applies only the minimal necessary changes to the real DOM." },
    { q: "Explain the difference between useState and useReducer.", a: "useState is ideal for simple state updates (single values). useReducer is better for complex state logic with multiple sub-values or when the next state depends on the previous one. useReducer also makes state transitions more predictable and testable." },
    { q: "What are React Hooks rules?", a: "1) Only call Hooks at the top level (not inside loops, conditions, or nested functions). 2) Only call Hooks from React function components or custom Hooks. These rules ensure Hooks are called in the same order each render." },
    { q: "How does React handle reconciliation?", a: "React uses the Fiber architecture for reconciliation. It compares the new Virtual DOM tree with the previous one using a diffing algorithm. It uses element type and key props to determine which elements to update, add, or remove." },
    { q: "What is the purpose of useCallback and useMemo?", a: "useCallback memoizes a function reference to prevent unnecessary re-creation on re-renders. useMemo memoizes a computed value. Both are used for performance optimization, especially when passing callbacks or computed values to child components." },
    { q: "Explain React's Context API.", a: "Context provides a way to pass data through the component tree without having to pass props manually at every level. It consists of React.createContext(), Context.Provider, and useContext() hook for consuming values." },
    { q: "What are Error Boundaries?", a: "Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI. They catch errors during rendering, in lifecycle methods, and in constructors." },
    { q: "What is code splitting in React?", a: "Code splitting lets you split your bundle into smaller chunks that are loaded on demand. React supports this via React.lazy() for components and dynamic import() for modules. Suspense provides a loading fallback." },
    { q: "What is the difference between controlled and uncontrolled components?", a: "Controlled components have their form data handled by React state (value + onChange). Uncontrolled components store form data in the DOM itself, accessed via refs. Controlled components give React full control over the form." },
    { q: "Explain Server Components in React 19.", a: "Server Components render on the server and send HTML to the client. They can directly access databases and file systems, reduce bundle size by keeping server-only code off the client, and seamlessly integrate with Client Components for interactivity." }
];

const BEST_PRACTICES = [
    { title: "Keep Components Small", desc: "Each component should ideally do one thing. If it grows too large, break it into smaller sub-components." },
    { title: "Use Proper Key Props", desc: "Always use unique, stable keys when rendering lists. Avoid using array indices as keys when items can be reordered." },
    { title: "Lift State Up", desc: "Share state between components by moving it to their closest common ancestor. Use Context for deeply nested data." },
    { title: "Avoid Premature Optimization", desc: "Don't use useMemo/useCallback everywhere. Profile first, then optimize the actual bottlenecks." },
    { title: "Use TypeScript", desc: "TypeScript catches bugs at compile time, provides better IDE support, and makes refactoring safer." },
    { title: "Handle Loading and Error States", desc: "Always show loading indicators and handle errors gracefully. Use Suspense and Error Boundaries." },
    { title: "Keep Side Effects in useEffect", desc: "Don't perform side effects directly in the render. Use useEffect with proper dependency arrays." },
    { title: "Use Custom Hooks for Logic Reuse", desc: "Extract shared logic into custom hooks (useAuth, useFetch, useForm) instead of duplicating code." }
];

const FLASHCARDS = [
    { front: "useState", back: "Returns a stateful value and a function to update it. Re-renders the component when state changes." },
    { front: "useEffect", back: "Runs side effects after render. Takes a callback and an optional dependency array. Returns a cleanup function." },
    { front: "useContext", back: "Accepts a context object and returns the current context value. Subscribes to context changes." },
    { front: "useRef", back: "Returns a mutable ref object. The .current property persists across renders without causing re-renders." },
    { front: "useMemo", back: "Memoizes a computed value. Recalculates only when dependencies change. For expensive computations." },
    { front: "useCallback", back: "Memoizes a callback function. Returns the same function reference unless dependencies change." },
    { front: "useReducer", back: "Alternative to useState for complex state logic. Takes a reducer function and initial state." },
    { front: "React.memo", back: "Higher-order component that memoizes the rendered output. Re-renders only when props change." },
    { front: "React.lazy", back: "Lets you define a component that is loaded dynamically via code splitting with dynamic import()." },
    { front: "Suspense", back: "Lets you declaratively specify loading states for lazy components or data fetching." }
];

let currentFlashcard = 0;
let flashcardFlipped = false;

function openMasteryCenter() {
    const modal = document.getElementById('masteryCenterModal');
    if (modal) {
        showMasteryTab('interview');
        modal.showModal();
    }
}

function showMasteryTab(tab) {
    document.querySelectorAll('.extra-tab-btn').forEach(b => b.classList.remove('active'));
    const btns = document.querySelectorAll('.extra-tab-btn');
    if (tab === 'interview' && btns[0]) btns[0].classList.add('active');
    if (tab === 'best-practices' && btns[1]) btns[1].classList.add('active');
    if (tab === 'flashcards' && btns[2]) btns[2].classList.add('active');

    const content = document.getElementById('mcContent');
    if (!content) return;

    if (tab === 'interview') {
        content.innerHTML = `
            <h2 style="margin:0 0 24px;font-family:'Plus Jakarta Sans',sans-serif;">💬 React Interview Q&A</h2>
            ${INTERVIEW_QA.map((item, i) => `
                <div style="margin-bottom:20px;padding:20px;background:var(--bg2);border:1px solid var(--border);border-radius:12px;">
                    <div style="font-weight:700;font-size:1rem;color:var(--text);margin-bottom:8px;">Q${i + 1}. ${item.q}</div>
                    <div style="color:var(--text2);font-size:0.9rem;line-height:1.6;padding:12px;background:var(--bg3);border-radius:8px;border-left:3px solid var(--accent);">${item.a}</div>
                </div>
            `).join('')}
        `;
    } else if (tab === 'best-practices') {
        content.innerHTML = `
            <h2 style="margin:0 0 24px;font-family:'Plus Jakarta Sans',sans-serif;">🛡️ React Best Practices</h2>
            <div style="display:grid;gap:16px;">
                ${BEST_PRACTICES.map(bp => `
                    <div style="padding:20px;background:var(--bg2);border:1px solid var(--border);border-radius:12px;">
                        <div style="font-weight:700;color:var(--accent);margin-bottom:6px;font-size:1rem;">${bp.title}</div>
                        <div style="color:var(--text2);font-size:0.9rem;line-height:1.5;">${bp.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (tab === 'flashcards') {
        currentFlashcard = 0;
        flashcardFlipped = false;
        renderFlashcard(content);
    }
}

function renderFlashcard(container) {
    if (!container) container = document.getElementById('mcContent');
    if (!container) return;
    const card = FLASHCARDS[currentFlashcard];
    container.innerHTML = `
        <h2 style="margin:0 0 24px;font-family:'Plus Jakarta Sans',sans-serif;">🃏 React Flashcards</h2>
        <div style="text-align:center;margin-bottom:16px;font-size:0.9rem;color:var(--text2);">${currentFlashcard + 1} / ${FLASHCARDS.length}</div>
        <div onclick="flashcardFlipped=!flashcardFlipped;renderFlashcard();"
            style="max-width:400px;margin:0 auto;min-height:220px;background:linear-gradient(135deg,var(--bg2),var(--bg3));border:1px solid var(--border);border-radius:20px;padding:40px;display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer;transition:0.3s;box-shadow:0 8px 30px rgba(0,0,0,0.2);"
            onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
            <div>
                <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:12px;">${flashcardFlipped ? 'Answer' : 'Concept'}</div>
                <div style="font-size:${flashcardFlipped ? '1rem' : '1.5rem'};font-weight:${flashcardFlipped ? '400' : '800'};color:var(--text);line-height:1.5;">${flashcardFlipped ? card.back : card.front}</div>
                <div style="margin-top:16px;font-size:0.8rem;color:var(--text2);opacity:0.6;">Click to ${flashcardFlipped ? 'see concept' : 'reveal answer'}</div>
            </div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:24px;">
            <button onclick="currentFlashcard=Math.max(0,currentFlashcard-1);flashcardFlipped=false;renderFlashcard();"
                style="padding:10px 20px;background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:8px;cursor:pointer;font-weight:bold;font-family:inherit;">← Previous</button>
            <button onclick="currentFlashcard=Math.min(FLASHCARDS.length-1,currentFlashcard+1);flashcardFlipped=false;renderFlashcard();"
                style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:bold;font-family:inherit;">Next →</button>
        </div>
    `;
}

// --- SIDEBAR RENDERING (Enhanced for new index.html) ---
function renderSidebar() {
    const nav = document.getElementById('sbNav');
    if (!nav) return;
    nav.innerHTML = '';

    const searchVal = (document.getElementById('sbSearch') || {}).value || '';
    const filterVal = (document.getElementById('sbFilter') || {}).value || 'ALL';
    const q = searchVal.toLowerCase().trim();

    let filtered = TAGS;
    if (q) {
        filtered = filtered.filter(t =>
            t.title.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q)
        );
    }
    if (filterVal && filterVal !== 'ALL') {
        if (filterVal === 'MASTERED') {
            filtered = filtered.filter(t => masteredTags.has(t.id));
        } else if (filterVal === 'UNMASTERED') {
            filtered = filtered.filter(t => !masteredTags.has(t.id));
        } else if (filterVal === 'FAVORITES') {
            filtered = filtered.filter(t => favoriteTags.has(t.id));
        } else {
            filtered = filtered.filter(t => t.category === filterVal);
        }
    }

    const categories = [...new Set(filtered.map(t => t.category))];
    categories.forEach(cat => {
        const catTags = filtered.filter(t => t.category === cat);
        if (catTags.length === 0) return;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = `${cat} (${catTags.length})`;
        header.style.cssText = 'padding:10px 16px;font-size:0.75rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);opacity:0.7;margin-top:8px;';
        nav.appendChild(header);

        catTags.forEach(tag => {
            const el = document.createElement('div');
            el.className = 'sb-tag' + (masteredTags.has(tag.id) ? ' mastered' : '') + (currentTag && currentTag.id === tag.id ? ' active' : '');
            el.dataset.id = tag.id;
            el.innerHTML = `
                <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${masteredTags.has(tag.id) ? '✅ ' : ''}${tag.title}</span>
                <span style="font-size:0.7rem;opacity:0.5;">${tag.xp}xp</span>
            `;
            el.style.cssText = 'display:flex;align-items:center;padding:10px 16px;cursor:pointer;font-size:0.88rem;color:var(--text);transition:all 0.2s;border-left:3px solid transparent;gap:8px;';
            if (currentTag && currentTag.id === tag.id) {
                el.style.background = 'color-mix(in srgb, var(--accent) 12%, transparent)';
                el.style.borderLeftColor = 'var(--accent)';
                el.style.color = 'var(--accent)';
                el.style.fontWeight = '700';
            }
            el.onmouseover = () => { if (!el.classList.contains('active')) { el.style.background = 'var(--bg3)'; el.style.paddingLeft = '20px'; } };
            el.onmouseout = () => { if (!el.classList.contains('active')) { el.style.background = 'transparent'; el.style.paddingLeft = '16px'; } };
            el.onclick = () => { loadTag(tag.id); toggleSidebar(); };
            nav.appendChild(el);
        });
    });

    if (filtered.length === 0) {
        nav.innerHTML = '<div style="padding:40px 16px;text-align:center;color:var(--text2);opacity:0.6;">No concepts found.</div>';
    }
}

function applyFilters() {
    renderSidebar();
}

function populateFilterDropdown() {
    const select = document.getElementById('sbFilter');
    if (!select) return;
    select.innerHTML = '<option value="ALL">All Categories</option>';
    select.innerHTML += '<option value="MASTERED">✅ Mastered</option>';
    select.innerHTML += '<option value="UNMASTERED">📝 Unmastered</option>';
    select.innerHTML += '<option value="FAVORITES">⭐ Favorites</option>';
    const cats = [...new Set(TAGS.map(t => t.category))];
    cats.forEach(c => {
        select.innerHTML += `<option value="${c}">${c}</option>`;
    });
}

// Initialize
function init() {
    loadProgress();
    try { xp = parseInt(localStorage.getItem('react_xp')) || 0; } catch (e) { xp = 0; }
    try {
        const savedFavs = localStorage.getItem('react-mastery-favorites');
        if (savedFavs) favoriteTags = new Set(JSON.parse(savedFavs));
    } catch (e) { }

    // Restore font size
    try {
        const fs = localStorage.getItem('reactMasteryFontSize');
        if (fs) document.documentElement.style.fontSize = fs + 'px';
    } catch (e) { }

    // Greeting
    updateGreeting();

    // Welcome modal
    try {
        if (!localStorage.getItem('reactMasteryWelcomed')) {
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

    // Content area - build it dynamically since new index.html uses #content div
    buildContentArea();

    // Init CodeMirror
    const codeEditorEl = document.getElementById('codeEditor');
    if (codeEditorEl) {
        editor = CodeMirror.fromTextArea(codeEditorEl, {
            mode: 'jsx',
            theme: 'dracula',
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true,
            autoCloseTags: true,
            matchTags: { bothTags: true },
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            styleActiveLine: true,
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
    loadTag(TAGS[0].id);
}

function buildContentArea() {
    const content = document.getElementById('content');
    if (!content) return;
    // Only build if content div is empty (new index.html uses this pattern)
    if (content.children.length > 0) return;

    content.innerHTML = `
        <section id="explanationPanel" class="explanation-panel" style="background:var(--bg2);border:1px solid var(--border);border-radius:16px;margin:0 0 20px;overflow:hidden;"></section>

        <div class="react-workbench-grid">
            <section class="editor-section" style="background:var(--bg2);border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;">
                <div class="editor-toolbar" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--bg3);border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <span style="font-weight:700;font-size:0.9rem;color:var(--text);">📝 Code Editor (JSX)</span>
                        <label style="display:flex;align-items:center;gap:6px;font-size:0.82rem;color:var(--text2);cursor:pointer;">
                            <input type="checkbox" id="auto-run" checked style="accent-color:var(--accent);cursor:pointer;"> Auto-Run
                        </label>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <button id="runBtn" style="background:var(--accent);color:#fff;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:bold;font-family:inherit;font-size:0.85rem;transition:0.2s;">▶ Run</button>
                        <button id="copyCodeBtn" style="background:var(--bg4);color:var(--text);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:0.85rem;">📋 Copy</button>
                        <button id="clearConsoleBtn" style="background:var(--bg4);color:var(--text);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:0.85rem;">🗑️ Clear</button>
                    </div>
                </div>
                <textarea id="codeEditor"></textarea>
            </section>

            <section class="preview-section" style="background:var(--bg2);border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;">
                <div style="padding:12px 16px;background:var(--bg3);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-weight:700;font-size:0.9rem;color:var(--text);">👁️ Live Preview</span>
                    <div style="display:flex;gap:6px;align-items:center;">
                        <span style="width:10px;height:10px;background:#ef4444;border-radius:50%;display:inline-block;"></span>
                        <span style="width:10px;height:10px;background:#f59e0b;border-radius:50%;display:inline-block;"></span>
                        <span style="width:10px;height:10px;background:#10b981;border-radius:50%;display:inline-block;"></span>
                    </div>
                </div>
                <div id="sandbox" style="min-height:220px;flex:1;background:var(--bg);"></div>
                <div id="consoleOutput" style="padding:12px 16px;background:var(--bg3);border-top:1px solid var(--border);font-family:'Fira Code',monospace;font-size:0.82rem;color:var(--text2);min-height:36px;max-height:160px;overflow-y:auto;"></div>
            </section>
        </div>

        <div style="display:flex;gap:12px;margin-top:20px;justify-content:center;flex-wrap:wrap;">
            <button id="markCompleteBtn" onclick="markCompleted()" style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:none;padding:14px 28px;border-radius:12px;cursor:pointer;font-weight:bold;font-size:1rem;font-family:inherit;transition:0.3s;box-shadow:0 4px 15px rgba(0,0,0,0.2);"
                onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'"
                onmouseout="this.style.transform='';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'">✅ Mark as Mastered</button>
        </div>

        <!-- Celebration Overlay -->
        <div id="celebrationOverlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);z-index:1000;align-items:center;justify-content:center;">
            <div style="background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:40px;text-align:center;max-width:400px;width:90%;">
                <div style="font-size:4rem;margin-bottom:16px;">🎉</div>
                <h2 style="color:var(--accent);margin-bottom:8px;font-family:'Plus Jakarta Sans',sans-serif;">Concept Mastered!</h2>
                <p style="color:var(--text2);margin-bottom:24px;">You've earned XP! Keep going!</p>
                <button id="nextConceptBtn" style="background:var(--accent);color:#fff;border:none;padding:14px 24px;border-radius:12px;cursor:pointer;font-weight:bold;font-size:1rem;font-family:inherit;">Next Concept ➔</button>
            </div>
        </div>
    `;
}

function renderTags(filter = '') {
    // For legacy support: also render sidebar
    renderSidebar();
}

function loadTag(id) {
    currentTag = TAGS.find(t => t.id === id);
    if (!currentTag) return;

    // Auto-close sidebar on smaller screens so the content is visible immediately
    if (window.innerWidth < 1024) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }

    // Update sidebar active state
    document.querySelectorAll('.sb-tag').forEach(el => {
        el.classList.remove('active');
        el.style.background = 'transparent';
        el.style.borderLeftColor = 'transparent';
        el.style.color = 'var(--text)';
        el.style.fontWeight = '400';
    });
    const activeEl = document.querySelector(`.sb-tag[data-id="${id}"]`);
    if (activeEl) {
        activeEl.classList.add('active');
        activeEl.style.background = 'color-mix(in srgb, var(--accent) 12%, transparent)';
        activeEl.style.borderLeftColor = 'var(--accent)';
        activeEl.style.color = 'var(--accent)';
        activeEl.style.fontWeight = '700';
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Also update old tagList if present
    document.querySelectorAll('.tag-item').forEach(el => el.classList.remove('active'));
    const oldActiveEl = document.querySelector(`.tag-item[data-id="${id}"]`);
    if (oldActiveEl) oldActiveEl.classList.add('active');

    const panel = document.getElementById('explanationPanel');
    if (panel) {
        panel.innerHTML = `
            <div style="padding: 24px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
                    <div style="flex:1;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <span style="font-size:0.75rem;padding:4px 10px;background:color-mix(in srgb, var(--accent) 15%, transparent);color:var(--accent);border-radius:20px;font-weight:700;">${currentTag.category}</span>
                            <span style="font-size:0.75rem;color:var(--accent2);font-weight:600;">+${currentTag.xp} XP</span>
                        </div>
                        <h2 style="margin:0;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:1.5rem;">${currentTag.title}</h2>
                    </div>
                    <button onclick="toggleFavorite('${currentTag.id}')" style="background:none;border:none;font-size:1.5rem;cursor:pointer;transition:0.2s;" title="Add to favorites">${favoriteTags.has(currentTag.id) ? '⭐' : '☆'}</button>
                </div>
                <p style="color:var(--text2);margin-bottom:20px;font-size:1.05rem;line-height:1.6;">${currentTag.description}</p>

                <div class="tabs" style="display:flex;gap:8px;margin-bottom:20px;border-bottom:1px solid var(--border);padding-bottom:10px;flex-wrap:wrap;">
                    <button class="tab-btn active" data-tab="theory" style="background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-family:inherit;font-size:0.85rem;">📖 Theory</button>
                    <button class="tab-btn" data-tab="syntax" style="background:transparent;color:var(--text2);border:1px solid transparent;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-family:inherit;font-size:0.85rem;">⌨️ Syntax</button>
                    <button class="tab-btn" data-tab="challenge" style="background:transparent;color:var(--text2);border:1px solid transparent;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-family:inherit;font-size:0.85rem;">🏆 Challenge</button>
                </div>

                <div class="tab-content theory active" style="line-height:1.7;font-size:0.95rem;color:var(--text);">${currentTag.content}</div>

                <div class="tab-content syntax" style="display:none;">
                    <pre style="background:var(--bg);padding:16px;border-radius:10px;overflow-x:auto;border:1px solid var(--border);"><code style="font-family:'Fira Code',monospace;color:var(--accent);font-size:0.9rem;">${currentTag.syntax.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                </div>

                <div class="tab-content challenge" style="display:none;">
                    <div style="padding:20px;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 8%,var(--bg)),color-mix(in srgb,var(--accent2) 8%,var(--bg)));border-left:4px solid var(--accent);border-radius:12px;color:var(--text);font-size:0.95rem;line-height:1.6;">
                        🎯 <strong>Challenge:</strong> ${currentTag.challenge}
                    </div>
                </div>
            </div>
        `;

        // Re-bind tab events
        panel.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                panel.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'transparent';
                    b.style.color = 'var(--text2)';
                    b.style.borderColor = 'transparent';
                });
                panel.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.remove('active');
                    c.style.display = 'none';
                });

                e.target.classList.add('active');
                e.target.style.background = 'var(--bg3)';
                e.target.style.color = 'var(--text)';
                e.target.style.borderColor = 'var(--border)';

                const tabClass = e.target.dataset.tab;
                const contentEl = panel.querySelector('.tab-content.' + tabClass);
                if (contentEl) {
                    contentEl.classList.add('active');
                    contentEl.style.display = 'block';
                }
            });
        });
    }

    if (editor) {
        editor.setValue(currentTag.example);
        runCode(true);
    }

    // Scroll to content on mobile
    if (window.innerWidth < 900) {
        const contentArea = document.getElementById('content');
        if (contentArea) contentArea.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleFavorite(id) {
    if (favoriteTags.has(id)) {
        favoriteTags.delete(id);
    } else {
        favoriteTags.add(id);
    }
    try { localStorage.setItem('react-mastery-favorites', JSON.stringify([...favoriteTags])); } catch (e) { }
    updateMasteryStats();
    // Re-render the current tag to update star
    if (currentTag && currentTag.id === id) loadTag(id);
}

function runCode(isAutoRun = false) {
    if (!editor) return;
    const code = editor.getValue();
    const sandbox = document.getElementById('sandbox');
    if (!sandbox) return;
    const iframe = document.createElement('iframe');
    iframe.id = 'pgFrame';
    iframe.className = 'pg-iframe';
    sandbox.innerHTML = '';
    sandbox.appendChild(iframe);
    
    const doc = iframe.contentWindow.document;
    doc.open();
    
    // Construct HTML for iframe
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { 
                margin: 0; 
                padding: 10px; 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: transparent;
            }
        </style>
        <script>
            // Capture console
            const methods = ['log', 'error', 'warn', 'info'];
            methods.forEach(method => {
                const original = console[method];
                console[method] = function(...args) {
                    const type = method === 'error' ? 'error' : 'console';
                    window.parent.postMessage({ type: type, message: args.join(' ') }, '*');
                    original.apply(console, args);
                };
            });
            window.onerror = function(msg, url, line) {
                window.parent.postMessage({ type: 'error', message: msg + ' at line ' + line }, '*');
            };
        </script>
        <!-- React & ReactDOM -->
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <!-- Babel for JSX -->
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel" data-presets="react,env">
            try {
                ${code}
            } catch(e) {
                console.error(e);
            }
        </script>
    </body>
    </html>
    `;
    
    doc.write(html);
    doc.close();
    
    document.getElementById('consoleOutput').innerHTML = '';
    
    // Mastery Logic
    if (!isAutoRun && currentTag && !masteredTags.has(currentTag.id)) {
        masteredTags.add(currentTag.id);
        saveProgress();
        updateProgressUI();
        triggerCelebration();
        const tagEl = document.querySelector(`[data-id="${currentTag.id}"]`);
        if (tagEl) tagEl.classList.add('mastered');
    }
}

// Listen for console messages from iframe
window.addEventListener('message', function(e) {
    if(e.data && e.data.type) {
        const out = document.getElementById('consoleOutput');
        const el = document.createElement('div');
        el.textContent = '> ' + e.data.message;
        if(e.data.type === 'error') {
            el.style.color = '#ff6b6b';
        } else {
            el.style.color = '#a9dc76';
        }
        out.appendChild(el);
        out.scrollTop = out.scrollHeight;
    }
});

function markCompleted() {
    if (!currentTag) return;
    try {
        let completed = JSON.parse(localStorage.getItem('react_completed')) || [];
        if (!completed.includes(currentTag.id)) {
            completed.push(currentTag.id);
            localStorage.setItem('react_completed', JSON.stringify(completed));
            
            // Add to mastered set
            masteredTags.add(currentTag.id);
            saveProgress();
            
            xp += currentTag.xp;
            localStorage.setItem('react_xp', xp);
            const xpEl = document.getElementById('xp-counter');
            if (xpEl) xpEl.textContent = `XP: ${xp}`;
            
            updateProgressUI();
            updateMasteryStats();
            renderSidebar();
            triggerCelebration();
            triggerConfetti();
        } else {
            alert('Already completed! 🎉');
        }
    } catch(e) {
        console.warn('Local storage disabled');
        triggerConfetti();
    }
}

function triggerConfetti() {
    const colors = ['#61dafb', '#ffffff', '#282c34'];
    for(let i=0; i<50; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 3000);
    }
}



function applyTheme(themeId) {
    let theme = PRESET_THEMES.find(t => t.id === themeId);
    if (!theme && typeof themeId === 'object') {
        theme = themeId;
    }
    if (!theme) theme = PRESET_THEMES[0];

    currentTheme = theme;
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--bg2', theme.bg2);
    root.style.setProperty('--bg3', theme.bg3);
    root.style.setProperty('--bg4', theme.bg4);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text2', theme.text2);
    root.style.setProperty('--text3', theme.text3);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent2', theme.accent2);
    root.style.setProperty('--accent3', theme.accent3);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--code-bg', theme.codeBg);
    root.style.setProperty('--sb-bg', theme.sbBg);
    root.style.setProperty('--hdr-bg', theme.hdrBg);
    
    // Save to local storage if it's a preset
    if (theme.id && theme.id !== 'custom') {
        try {
            localStorage.setItem('react_theme', theme.id);
        } catch(e){}
    }
}

function saveCustomTheme() {
    const bg = document.getElementById('ct-bg').value;
    const bg2 = document.getElementById('ct-bg2').value;
    const text = document.getElementById('ct-text').value;
    const accent = document.getElementById('ct-accent').value;
    const accent2 = document.getElementById('ct-accent2').value;
    
    const customTheme = {
        id: 'custom',
        name: 'My Custom Theme',
        bg: bg,
        bg2: bg2,
        bg3: bg,
        bg4: bg2,
        text: text,
        text2: text,
        text3: text,
        accent: accent,
        accent2: accent2,
        accent3: accent,
        border: bg2,
        card: bg2,
        codeBg: bg,
        sbBg: bg2,
        hdrBg: bg
    };
    
    applyTheme(customTheme);
    alert('Custom theme applied!');
    document.getElementById('themeModal').close();
}

function initThemes() {
    const grid = document.getElementById('themeGrid');
    if(!grid) return;
    grid.innerHTML = '';
    PRESET_THEMES.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'theme-btn';
        btn.style.background = t.bg;
        btn.style.border = `2px solid ${t.border}`;
        btn.innerHTML = `
            <div style="font-weight:bold;color:${t.text}">${t.name}</div>
            <div style="display:flex;gap:4px;justify-content:center;margin-top:8px;">
                <span style="width:12px;height:12px;border-radius:50%;background:${t.accent}"></span>
                <span style="width:12px;height:12px;border-radius:50%;background:${t.accent2}"></span>
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
                root.style.setProperty('--' + 
(id==='bg'?'bg':id==='bg2'?'bg-secondary':id==='text'?'text':id==='accent'?'accent':id), el.value);
            });
        }
    });
}

function setupEventListeners() {
    // Run Code
    const runBtn = document.getElementById('runBtn');
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const consoleOut = document.getElementById('consoleOutput');
            if (consoleOut) consoleOut.innerHTML = '';
            runCode();
        });
    }

    // Clear Console
    const clearBtn = document.getElementById('clearConsoleBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const consoleOut = document.getElementById('consoleOutput');
            if (consoleOut) consoleOut.innerHTML = '';
        });
    }

    // Copy Code
    const copyBtn = document.getElementById('copyCodeBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            if (editor) navigator.clipboard.writeText(editor.getValue());
            const orig = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copied!';
            setTimeout(() => copyBtn.innerHTML = orig, 2000);
        });
    }

    // Search Box (legacy)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderTags(e.target.value);
        });
    }

    // Filters (legacy)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            document.querySelectorAll('.tag-item').forEach(el => {
                if (filter === 'all') el.style.display = 'block';
                else if (filter === 'mastered') el.style.display = el.classList.contains('mastered') ? 'block' : 'none';
                else if (filter === 'unmastered') el.style.display = el.classList.contains('mastered') ? 'none' : 'block';
                else el.style.display = (el.dataset.category === filter) ? 'block' : 'none';
            });
            document.querySelectorAll('.category-header').forEach(header => {
                let hasVisibleTags = false;
                let sibling = header.nextElementSibling;
                while (sibling && sibling.classList.contains('tag-item')) {
                    if (sibling.style.display !== 'none') hasVisibleTags = true;
                    sibling = sibling.nextElementSibling;
                }
                header.style.display = hasVisibleTags ? 'block' : 'none';
            });
        });
    });

    // Next Concept
    const nextBtn = document.getElementById('nextConceptBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const overlay = document.getElementById('celebrationOverlay');
            if (overlay) overlay.style.display = 'none';
            const currentIndex = TAGS.findIndex(t => t.id === currentTag.id);
            if (currentIndex < TAGS.length - 1) {
                loadTag(TAGS[currentIndex + 1].id);
            }
        });
    }
}

function loadProgress() {
    let saved = null;
    try {
        saved = localStorage.getItem('react-mastery-progress');
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
        localStorage.setItem('react-mastery-progress', JSON.stringify([...masteredTags]));
    } catch(e) {
        console.warn('localStorage not available for saving progress');
    }
}

function updateProgressUI() {
    const total = TAGS.length;
    const mastered = masteredTags.size;
    const pct = total === 0 ? 0 : Math.round((mastered / total) * 100);
    
    const progressText = document.getElementById('progressText');
    if (progressText) progressText.textContent = `${mastered} / ${total} Concepts Mastered (${pct}%)`;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = `${pct}%`;
    updateMasteryStats();
}

function triggerCelebration() {
    const overlay = document.getElementById('celebrationOverlay');
    if(overlay) {
        overlay.classList.add('active');
        // If confetti exists globally (loaded via CDN), we can call it.
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899']
            });
        }
    }
}

// Initializer
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Code optimized and documented by Sanskar Developer
