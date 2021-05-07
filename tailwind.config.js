module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["disabled"],
    backgroundColor: ["checked", "dark"],
    borderColor: ["checked", "dark"],
    textOpacity: ["dark"],
  },
  plugins: [],
};
