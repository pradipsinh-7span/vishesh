// your other imports
import vishesh from "@mrjadeja/vishesh-preset";

/** @type {import('@mrjadeja/vishesh-preset/types').VisheshPreset} */
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
