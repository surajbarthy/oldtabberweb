/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#111113",
          raised: "#18181b",
          border: "#27272a",
        },
        ink: {
          DEFAULT: "#fafaf9",
          muted: "#a1a1aa",
          faint: "#71717a",
        },
        accent: {
          DEFAULT: "#d97706",
          soft: "rgba(217, 119, 6, 0.12)",
          hover: "#ea580c",
        },
        cream: "#f5f5f0",
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04), 0 12px 40px rgba(0,0,0,0.35)",
        soft: "0 2px 8px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
