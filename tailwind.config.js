/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Core palette: slate teal, pale mint, black */
        brand: {
          slate: "#546869",
          mint: "#D1ECE8",
          black: "#000000",
        },
        surface: {
          DEFAULT: "#000000",
          raised: "#0a1010",
          deep: "#050808",
          /** Muted teal derived from #546869 */
          border: "#2f3f3f",
        },
        ink: {
          DEFAULT: "#D1ECE8",
          muted: "#8da9a5",
          faint: "#5c706e",
        },
        /** Headlines / high-emphasis (same family as mint) */
        cream: "#D1ECE8",
        /** Monochromatic accent — brighter mint-teal for actions */
        accent: {
          DEFAULT: "#7ecfc0",
          hover: "#96ddd0",
          soft: "rgba(126, 207, 192, 0.14)",
        },
        /**
         * Split-complement warmth (teal ↔ muted coral-bisque).
         * Use sparingly: eyebrow, optional hover hints.
         */
        warmth: {
          DEFAULT: "#c4a99a",
          muted: "#9a8579",
        },
        /** Browser mockup chrome — all in the same cool family */
        mock: {
          outer: "#050808",
          bar: "#0c1313",
          well: "#080d0d",
          content: "#0a1111",
          url: "rgba(84, 104, 105, 0.25)",
        },
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
        card: "0 1px 0 rgba(209, 236, 232, 0.05), 0 16px 48px rgba(0, 0, 0, 0.55)",
        soft: "0 2px 12px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
