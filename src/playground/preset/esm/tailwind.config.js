// your other imports
import vishesh from "vishesh-preset";

/** @type {import('vishesh-preset/types').VisheshPreset} */
export default {
  content: ["./index.html", "./style.css"],
  presets: [vishesh],
  theme: {
    extend: {
      breakpoints: {
        md: 760,
      },
      container: {
        mode: "both",
        spacing: {
          zero: 16,
          xs: 32,
          md: 20,
          xl: 60,
          fluid: {
            xl: 100,
          },
          fixed: {
            xl: 100,
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
