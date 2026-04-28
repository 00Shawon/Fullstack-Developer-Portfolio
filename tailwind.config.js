/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        bg: { DEFAULT: "#080808", 2: "#0f0f0f", 3: "#161616" },
        border: { DEFAULT: "#1e1e1e", 2: "#2a2a2a" },
        txt: { DEFAULT: "#f0ede6", 2: "#888888", 3: "#444444" },
        accent: { DEFAULT: "#e8ff5a", 2: "#c8e800" },
        teal: "#00c896",
        coral: "#ff5e3a",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        blink: "blink 1s step-end infinite",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
