import vishesh from "vishesh-preset";

/** @type {import('vishesh-preset/types').VisheshPreset} */
export default {
  presets: [vishesh()],
  darkMode: "class",
  content: [
    "./pages/**/*.{jsx,mdx}",
    "./components/**/*.{mdx,jsx}",
    "./theme.config.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
      },
      container: {
        innerPadding: {
          zero: 24,
          xs: 24,
          sm: 24,
        },
      },
    },
  },
  plugins: [],
};
