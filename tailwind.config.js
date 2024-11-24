/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "bg-pink": "#FF478B",
        "bg-blue": "#298FF5",
        "bg-black": "#202020",
        "bg-gray": "#292929",
      },
      screens: {
        xs: "370px",
      },
      container: {
        center: true,
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
