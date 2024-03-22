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
      'gray-300':'#d1d5db',
      'gray-700':'#374151',
      'green-800':'#166534',
      'blue-600':'#2563eb',
      'blue-300':'#93c5fd',
      'lime-600':'#65a30d',
      'lime-300':'#bef264',
      'red-600':'#dc2626',
      'red-300':'#fca5a5',
      'sky-800':'#0284c7',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
