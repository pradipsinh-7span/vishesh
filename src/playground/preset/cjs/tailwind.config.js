// your other imports

/** @type {import('vishesh-preset/types').VisheshPreset} */
module.exports = {
  content: ["./index.html", "./style.css"],
  presets: [require("vishesh-preset")],
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
