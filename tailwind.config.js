const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "sans-cn": ["Noto Sans SC", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "project-overlay-small":
          "linear-gradient(16.24deg, rgba(15, 23, 42, 0.88) 2.27%, rgba(15, 23, 42, 0) 97.59%);",
        "project-overlay-large":
          "linear-gradient(90deg, #0F172A -40.04%, rgba(15, 23, 42, 0.37) 44.21%, rgba(15, 23, 42, 0) 100%);",
      },
    },
  },
  plugins: [],
};
