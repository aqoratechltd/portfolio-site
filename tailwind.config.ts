import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark palette
        void: "#030305",
        obsidian: "#0a0a0f",
        onyx: "#111118",
        graphite: "#1a1a24",
        // Accent — Electric Blue
        electric: {
          DEFAULT: "#0066FF",
          dim: "#0044BB",
          glow: "#3399FF",
          subtle: "rgba(0,102,255,0.12)",
        },
        // Text hierarchy
        ghost: "#f0f0f8",
        mist: "#a0a0b8",
        smoke: "#5a5a72",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "11xl": ["12rem", { lineHeight: "0.85" }],
        "12xl": ["14rem", { lineHeight: "0.82" }],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.04) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(circle, rgba(0,102,255,0.15) 1px, transparent 1px)",
        "electric-glow":
          "radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,102,255,0.2) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "60px 60px",
        dots: "24px 24px",
      },
      boxShadow: {
        electric: "0 0 40px rgba(0,102,255,0.3), 0 0 80px rgba(0,102,255,0.1)",
        "electric-sm": "0 0 20px rgba(0,102,255,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-lg":
          "0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        grain: "grain 0.8s steps(1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -1%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 1%)" },
          "80%": { transform: "translate(1%, -2%)" },
          "90%": { transform: "translate(-2%, 4%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
