/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "30px",
      },
    },
    extend: {
      colors: {
        home: "#FFF8EE",
        subTitle: "#CC3333",
        title: "#2A435D",
      },
    },
  },
  plugins: [],
};
