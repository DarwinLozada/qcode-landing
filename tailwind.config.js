module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navyBlue: "#03045E",
        starCommandBlue: "#0077B6",
        ceruleanCrayola: "#00B4D8",
        skyBlueCrayola: "#90E0EF",
        powderBlue: "#CAF0F8",
        whiteBlue: "#E6FBFF",
        brandWhite: "#F8FEFF",
      },

      borderRadius: {
        brand: "4px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
