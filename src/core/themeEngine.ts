/**
 * LangSteps Theme Engine
 * Provides type-safe theme management, dynamic CSS variable injection,
 * and 25+ hand-crafted color palettes.
 * @author Sanskar <sanskarin@outlook.in>
 */

import { Theme } from '../types/index.js';

export const PRESET_THEMES: Theme[] = [
  { id: "dark", name: "Midnight Dark", bg: "#0a0e17", bg2: "#111827", bg3: "#1f2937", bg4: "#374151", text: "#f8fafc", text2: "#cbd5e1", text3: "#94a3b8", accent: "#3776ab", accent2: "#ffd43b", accent3: "#4ade80", border: "rgba(55, 118, 171, 0.25)", card: "#111827", codeBg: "#060913", sbBg: "#0f172a", hdrBg: "linear-gradient(135deg,#0b1120,#111827,#1e293b)" },
  { id: "light", name: "Clean Light", bg: "#f8fafc", bg2: "#ffffff", bg3: "#f1f5f9", bg4: "#e2e8f0", text: "#0f172a", text2: "#334155", text3: "#64748b", accent: "#2563eb", accent2: "#d97706", accent3: "#16a34a", border: "rgba(37, 99, 235, 0.2)", card: "#ffffff", codeBg: "#f1f5f9", sbBg: "#ffffff", hdrBg: "linear-gradient(135deg,#e2e8f0,#ffffff,#f8fafc)" },
  { id: "cyberpunk", name: "Cyberpunk Neon", bg: "#080812", bg2: "#0f0f24", bg3: "#0c0c1c", bg4: "#06060e", text: "#e0e0ff", text2: "#c0c0e0", text3: "#8080b0", accent: "#ff2a6d", accent2: "#05d9e8", accent3: "#f9c80e", border: "#ff2a6d33", card: "#0f0f24", codeBg: "#06060e", sbBg: "#0b0b1c", hdrBg: "linear-gradient(135deg,#1a0026,#001a2e,#000)" },
  { id: "synthwave", name: "Synthwave Sunset", bg: "#120824", bg2: "#1c0d38", bg3: "#160a2e", bg4: "#0e061c", text: "#e8d8f8", text2: "#c8b8dc", text3: "#9888ac", accent: "#f72585", accent2: "#7209b7", accent3: "#4cc9f0", border: "#f7258533", card: "#1c0d38", codeBg: "#0e061c", sbBg: "#160a2e", hdrBg: "linear-gradient(135deg,#2e0854,#180b38,#0b001a)" },
  { id: "dracula", name: "Dracula Classic", bg: "#1e1f29", bg2: "#282a36", bg3: "#222430", bg4: "#191a24", text: "#f8f8f2", text2: "#e0e0d8", text3: "#6272a4", accent: "#bd93f9", accent2: "#50fa7b", accent3: "#ff79c6", border: "#bd93f933", card: "#282a36", codeBg: "#191a24", sbBg: "#21222c", hdrBg: "linear-gradient(135deg,#282a36,#1e1f29,#14141d)" },
  { id: "nord", name: "Nordic Frost", bg: "#242933", bg2: "#2e3440", bg3: "#292e39", bg4: "#1d212a", text: "#eceff4", text2: "#d8dee9", text3: "#81a1c1", accent: "#88c0d0", accent2: "#a3be8c", accent3: "#ebcb8b", border: "#88c0d033", card: "#2e3440", codeBg: "#1d212a", sbBg: "#272c36", hdrBg: "linear-gradient(135deg,#2e3440,#1d212a,#181a20)" },
  { id: "monokai", name: "Monokai Pro", bg: "#221f22", bg2: "#2d2a2e", bg3: "#272427", bg4: "#1c191c", text: "#fcfcfa", text2: "#c1c0c0", text3: "#727072", accent: "#ffd866", accent2: "#a9dc76", accent3: "#ff6188", border: "#ffd86633", card: "#2d2a2e", codeBg: "#1c191c", sbBg: "#252225", hdrBg: "linear-gradient(135deg,#2d2a2e,#1c191c,#141214)" },
  { id: "github-dark", name: "GitHub Dark Dimmed", bg: "#1c2128", bg2: "#22272e", bg3: "#1e232a", bg4: "#161b22", text: "#adbac7", text2: "#909dab", text3: "#636e7b", accent: "#539bf5", accent2: "#57ab5a", accent3: "#c69026", border: "#539bf533", card: "#22272e", codeBg: "#161b22", sbBg: "#1e232a", hdrBg: "linear-gradient(135deg,#22272e,#161b22,#0f1317)" },
  { id: "ocean", name: "Deep Ocean", bg: "#0a192f", bg2: "#112240", bg3: "#0d1b33", bg4: "#0a1628", text: "#ccd6f6", text2: "#8892b0", text3: "#5a6a8a", accent: "#64ffda", accent2: "#57cbff", accent3: "#f5a623", border: "#64ffda33", card: "#112240", codeBg: "#0a1628", sbBg: "#0d1d38", hdrBg: "linear-gradient(135deg,#0a192f,#112240,#1a365d)" },
  { id: "gruvbox", name: "Gruvbox Dark", bg: "#282828", bg2: "#3c3836", bg3: "#32302f", bg4: "#1d2021", text: "#ebdbb2", text2: "#d5c4a1", text3: "#928374", accent: "#fabd2f", accent2: "#b8bb26", accent3: "#fe8019", border: "#fabd2f33", card: "#3c3836", codeBg: "#1d2021", sbBg: "#282828", hdrBg: "linear-gradient(135deg,#1d2021,#282828,#3c3836)" },
  { id: "tokyo", name: "Tokyo Night", bg: "#1a1b26", bg2: "#24283b", bg3: "#1f2231", bg4: "#16161e", text: "#c0caf5", text2: "#a9b1d6", text3: "#565f89", accent: "#7aa2f7", accent2: "#bb9af7", accent3: "#ff9e64", border: "#7aa2f733", card: "#24283b", codeBg: "#16161e", sbBg: "#1a1b26", hdrBg: "linear-gradient(135deg,#16161e,#1a1b26,#24283b)" },
  { id: "matrix", name: "The Matrix", bg: "#0d1112", bg2: "#131a18", bg3: "#101515", bg4: "#090c0c", text: "#d1f1e2", text2: "#a4debe", text3: "#4b7a63", accent: "#00ff41", accent2: "#008f11", accent3: "#003b00", border: "#00ff4133", card: "#131a18", codeBg: "#090c0c", sbBg: "#0d1112", hdrBg: "linear-gradient(135deg,#090c0c,#0d1112,#131a18)" },
  { id: "solarized", name: "Solarized Dark", bg: "#002b36", bg2: "#073642", bg3: "#04303c", bg4: "#001e26", text: "#839496", text2: "#93a1a1", text3: "#586e75", accent: "#b58900", accent2: "#2aa198", accent3: "#cb4b16", border: "#b5890033", card: "#073642", codeBg: "#001e26", sbBg: "#002b36", hdrBg: "linear-gradient(135deg,#001e26,#002b36,#073642)" },
  { id: "emerald", name: "Emerald Forest", bg: "#062016", bg2: "#0b2e21", bg3: "#08271c", bg4: "#041710", text: "#d1fae5", text2: "#a7f3d0", text3: "#6ee7b7", accent: "#10b981", accent2: "#34d399", accent3: "#fbbf24", border: "rgba(16,185,129,0.3)", card: "#0b2e21", codeBg: "#041710", sbBg: "#08271c", hdrBg: "linear-gradient(135deg,#041710,#0b2e21,#062016)" },
  { id: "rose", name: "Rosé Pine", bg: "#191724", bg2: "#1f1d2e", bg3: "#1c1a29", bg4: "#121019", text: "#e0def4", text2: "#908caa", text3: "#6e6a86", accent: "#ebbcba", accent2: "#31748f", accent3: "#f6c177", border: "#ebbcba33", card: "#1f1d2e", codeBg: "#121019", sbBg: "#191724", hdrBg: "linear-gradient(135deg,#121019,#191724,#1f1d2e)" },
  { id: "sunset", name: "Sunset Horizon", bg: "#1a0b18", bg2: "#291227", bg3: "#200e1f", bg4: "#120711", text: "#fde8f5", text2: "#f3bde0", text3: "#b870a0", accent: "#f43f5e", accent2: "#fb923c", accent3: "#facc15", border: "rgba(244,63,94,0.3)", card: "#291227", codeBg: "#120711", sbBg: "#200e1f", hdrBg: "linear-gradient(135deg,#120711,#291227,#f43f5e)" },
  { id: "coffee", name: "Espresso Roast", bg: "#1b1410", bg2: "#271d18", bg3: "#201813", bg4: "#130e0b", text: "#eedccd", text2: "#d5ba9f", text3: "#a6886c", accent: "#d97706", accent2: "#b45309", accent3: "#f59e0b", border: "rgba(217,119,6,0.3)", card: "#271d18", codeBg: "#130e0b", sbBg: "#201813", hdrBg: "linear-gradient(135deg,#130e0b,#271d18,#d97706)" },
  { id: "amethyst", name: "Amethyst Crystal", bg: "#150d24", bg2: "#201438", bg3: "#1a102e", bg4: "#0e0819", text: "#ede9fe", text2: "#c4b5fd", text3: "#8b5cf6", accent: "#a855f7", accent2: "#c084fc", accent3: "#e879f9", border: "rgba(168,85,247,0.3)", card: "#201438", codeBg: "#0e0819", sbBg: "#1a102e", hdrBg: "linear-gradient(135deg,#0e0819,#201438,#a855f7)" },
  { id: "cherry", name: "Cherry Blossom", bg: "#2a1e26", bg2: "#3d2833", bg3: "#33232c", bg4: "#21151c", text: "#ffeef6", text2: "#f4d1e2", text3: "#a37c96", accent: "#ffb3d9", accent2: "#e18bb3", accent3: "#ff7eb6", border: "#ffb3d933", card: "#3d2833", codeBg: "#21151c", sbBg: "#2a1e26", hdrBg: "linear-gradient(135deg,#21151c,#2a1e26,#3d2833)" },
  { id: "hacker", name: "Term Hacker", bg: "#000000", bg2: "#111111", bg3: "#080808", bg4: "#000000", text: "#33ff00", text2: "#2cbd00", text3: "#166000", accent: "#33ff00", accent2: "#ffffff", accent3: "#88ff88", border: "#33ff0033", card: "#111111", codeBg: "#000000", sbBg: "#000000", hdrBg: "linear-gradient(135deg,#000000,#080808,#111111)" },
  { id: "vue", name: "Vue Green", bg: "#34495e", bg2: "#41b883", bg3: "#3b7b62", bg4: "#2c3e50", text: "#ffffff", text2: "#e2f0e9", text3: "#a1ccb8", accent: "#41b883", accent2: "#34495e", accent3: "#f1c40f", border: "#41b88333", card: "#41b883", codeBg: "#2c3e50", sbBg: "#34495e", hdrBg: "linear-gradient(135deg,#2c3e50,#34495e,#41b883)" },
  { id: "blood", name: "Blood Moon", bg: "#1a0404", bg2: "#2b0a0a", bg3: "#210707", bg4: "#100202", text: "#ffd6d6", text2: "#d69c9c", text3: "#8f4e4e", accent: "#e62e2e", accent2: "#ff6b6b", accent3: "#facc15", border: "#e62e2e33", card: "#2b0a0a", codeBg: "#100202", sbBg: "#1a0404", hdrBg: "linear-gradient(135deg,#100202,#1a0404,#2b0a0a)" },
  { id: "ice", name: "Arctic Ice", bg: "#e0f2fe", bg2: "#ffffff", bg3: "#dcf0fd", bg4: "#cce6f8", text: "#082f49", text2: "#0c4a6e", text3: "#38bdf8", accent: "#0284c7", accent2: "#0284c7", accent3: "#fbbf24", border: "#0284c733", card: "#ffffff", codeBg: "#cce6f8", sbBg: "#e0f2fe", hdrBg: "linear-gradient(135deg,#cce6f8,#0284c7)" },
  { id: "discord", name: "Gamer Dark", bg: "#36393f", bg2: "#2f3136", bg3: "#32353b", bg4: "#202225", text: "#dcddde", text2: "#b9bbbe", text3: "#72767d", accent: "#5865F2", accent2: "#eb459f", accent3: "#fee75c", border: "#5865F233", card: "#2f3136", codeBg: "#202225", sbBg: "#36393f", hdrBg: "linear-gradient(135deg,#202225,#36393f,#5865F2)" },
  { id: "magma", name: "Magma Core", bg: "#180603", bg2: "#2c0c06", bg3: "#200804", bg4: "#100301", text: "#fed7aa", text2: "#fdba74", text3: "#ea580c", accent: "#f97316", accent2: "#ef4444", accent3: "#eab308", border: "rgba(249,115,22,0.3)", card: "#2c0c06", codeBg: "#100301", sbBg: "#200804", hdrBg: "linear-gradient(135deg,#100301,#2c0c06,#f97316)" }
];

export class ThemeEngine {
  private static STORAGE_KEY = 'langsteps-theme';
  private currentTheme: Theme;

  constructor() {
    const savedId = typeof localStorage !== 'undefined' ? localStorage.getItem(ThemeEngine.STORAGE_KEY) : null;
    this.currentTheme = this.findTheme(savedId || 'dark') || PRESET_THEMES[0]!;
  }

  public getAllThemes(): Theme[] {
    return [...PRESET_THEMES];
  }

  public getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  public findTheme(id: string): Theme | undefined {
    return PRESET_THEMES.find(t => t.id === id);
  }

  public applyTheme(idOrTheme: string | Theme): Theme {
    const theme = typeof idOrTheme === 'string' ? (this.findTheme(idOrTheme) || PRESET_THEMES[0]!) : idOrTheme;
    this.currentTheme = theme;

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ThemeEngine.STORAGE_KEY, theme.id);
    }

    if (typeof document !== 'undefined') {
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
      root.style.setProperty('--codeBg', theme.codeBg);
      root.style.setProperty('--sbBg', theme.sbBg);
      root.style.setProperty('--hdrBg', theme.hdrBg);

      window.dispatchEvent(new CustomEvent('langsteps:themechange', { detail: theme }));
    }

    return theme;
  }
}
