// your other imports
import vishesh from "vishesh-preset";

/** @type {import('vishesh-preset/types').VisheshPreset} */
export default {
  content: ["./index.html", "./style.css"],
  presets: [vishesh],
  theme: {
    extend: {
      breakpoints: {
        zero: undefined,
        md: 750,
      },
      container: {
        mode: "fluid",
        spacing: {
          zero: 16,
          md: 51,
        },
        innerPadding: {
          sm: 10,
          xl: 24,
        },
      },
    },
  },
  plugins: [],
};
