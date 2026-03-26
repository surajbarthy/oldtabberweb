/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Core: slate teal + pale mint (no pure black UI) */
        brand: {
          slate: "#546869",
          mint: "#D1ECE8",
          /** Near-black with teal bias — text on accent buttons */
          void: "#0c1213",
        },
        surface: {
          /** Page background — deep harmonious teal-charcoal */
          DEFAULT: "#161f21",
          raised: "#1e2c2e",
          deep: "#121a1c",
          sunken: "#0f1618",
          /** Muted line; sits between deep base and #546869 */
          border: "#33494a",
        },
        ink: {
          DEFAULT: "#D1ECE8",
          muted: "#8da9a5",
          faint: "#5c706e",
        },
        cream: "#D1ECE8",
        accent: {
          DEFAULT: "#7ecfc0",
          hover: "#96ddd0",
          soft: "rgba(126, 207, 192, 0.14)",
        },
        warmth: {
          DEFAULT: "#c4a99a",
          muted: "#9a8579",
        },
        mock: {
          outer: "#121a1c",
          bar: "#1a2527",
          well: "#141d1f",
          content: "#161f21",
          url: "rgba(84, 104, 105, 0.28)",
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
          "0 1px 0 rgba(209, 236, 232, 0.06), 0 16px 48px rgba(8, 14, 15, 0.45)",
        soft: "0 2px 12px rgba(8, 14, 15, 0.28)",
      },
    },
  },
  plugins: [],
};
