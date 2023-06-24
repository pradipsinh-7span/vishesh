// your other imports

/** @type {import('@mrjadeja/vishesh-preset/types').VisheshPreset} */
module.exports = {
  content: ["./index.html", "./style.css"],
  presets: [require("@mrjadeja/vishesh-preset")],
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
