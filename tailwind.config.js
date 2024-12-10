/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./characters.html", "Kentai_Radiquum.html"],
  theme: {
    extend: {
      colors: {
        "bg-pink": "#FF478B",
        "bg-blue": "#92cff5",
        "bg-black": "#121b2c",
        "bg-gray": "#262626",
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
