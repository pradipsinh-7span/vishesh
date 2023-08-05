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
        mode: "both",
        spacing: {
          zero: 16,
          xs: 32,
          md: 20,
          fluid: {
            // zero: 32,
          },
        },
        innerPadding: {
          zero: 16,
          sm: 10,
          lg: 24,
          xl: "2rem",
        },
      },
    },
  },
  plugins: [],
};
