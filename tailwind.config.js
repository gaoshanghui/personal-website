const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "sans-cn": ["Noto Sans SC", ...defaultTheme.fontFamily.sans],
      },
      height: {
        line: "2px",
      },
      backgroundImage: {
        "project-cover-to-t":
          "linear-gradient(14.83deg, rgba(15, 23, 42, 0.51) 2.1%, rgba(15, 23, 42, 0) 67.27%);",
        "project-cover-to-r":
          "linear-gradient(90deg, rgba(15, 23, 42, 0.590984) -0.06%, rgba(15, 23, 42, 0) 58.99%);",
      },
      inset: {
        "1/10": "10%",
        "1/5": "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
