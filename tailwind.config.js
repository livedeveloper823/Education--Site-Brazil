/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
    colors:{
      current: 'currentColor',
      'white':'#ffffff',
      'basicColor':'#2C4D3C',
      'hoverColor':'#458d68',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
