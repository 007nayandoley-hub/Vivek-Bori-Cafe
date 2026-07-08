import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        surface: "#1E1E1E",
        surfaceHover: "#262626",
        gold: "#C9A227",
        amber: "#E8B45D",
        ivory: "#F5F1E8",
        stone: "#A8A29E",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "ring-stain": "radial-gradient(circle, transparent 55%, rgba(201,162,39,0.08) 56%, rgba(201,162,39,0.08) 62%, transparent 63%)",
      },
    },
  },
  plugins: [],
};
export default config;
