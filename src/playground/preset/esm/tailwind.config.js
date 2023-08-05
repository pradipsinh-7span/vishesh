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
          xs: 51,
          md: 20,
        },
        innerPadding: {
          sm: 10,
          lg: 24,
          xl: "2rem",
        },
      },
    },
  },
  plugins: [],
};
