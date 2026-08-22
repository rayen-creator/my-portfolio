/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        Poppins_Regular: "Poppins_Regular",
        Poppins_SemiBold: "Poppins_SemiBold",
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        accent: "#ffb454",
        ink: {
          950: "#07080a",
          900: "#0c0e12",
          800: "#12151b",
          700: "#1a1e26",
          600: "#262b35",
        },
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-cell": "40px 40px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--color-primary-rgb) / 0.25), 0 0 40px -8px rgb(var(--color-primary-rgb) / 0.35)",
        "glow-sm": "0 0 0 1px rgb(var(--color-primary-rgb) / 0.2), 0 0 20px -6px rgb(var(--color-primary-rgb) / 0.3)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
