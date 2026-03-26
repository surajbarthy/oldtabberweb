/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#546869",
          mint: "#D1ECE8",
          void: "#0a0a0a",
        },
        /** Neutral grey surfaces (page + panels) */
        surface: {
          DEFAULT: "#26262b",
          raised: "#303036",
          deep: "#1a1a1e",
          sunken: "#161618",
          border: "#3f3f46",
        },
        ink: {
          DEFAULT: "#D1ECE8",
          muted: "#a1a1aa",
          faint: "#71717a",
        },
        cream: "#D1ECE8",
        accent: {
          DEFAULT: "#7ecfc0",
          hover: "#96ddd0",
          soft: "rgba(126, 207, 192, 0.14)",
        },
        cta: {
          DEFAULT: "#2dd4bf",
          hover: "#5eead4",
          glow: "rgba(45, 212, 191, 0.22)",
        },
        warmth: {
          DEFAULT: "#c4a99a",
          muted: "#9a8579",
        },
        mock: {
          outer: "#1a1a1e",
          bar: "#242429",
          well: "#1f1f23",
          content: "#26262b",
          url: "rgba(63, 63, 70, 0.55)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card:
          "0 1px 0 rgba(255, 255, 255, 0.04), 0 16px 48px rgba(0, 0, 0, 0.4)",
        soft: "0 2px 12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
