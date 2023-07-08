// your other imports
import vishesh from "vishesh-preset";

/** @type {import('vishesh-preset/types').VisheshPreset} */
export default {
  content: ["./index.html", "./style.css"],
  presets: [vishesh],
  theme: {
    extend: {
      container: {
        spacing: {
          md: 51,
        },
      },
    },
  },
  plugins: [],
};
