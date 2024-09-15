/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bg-pink': '#FF478B',
        'bg-blue': '#298FF5',
        'bg-black': '#1E1E1E',
        'bg-gray': '#484848'
      },
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        '2xl': '1760px',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}