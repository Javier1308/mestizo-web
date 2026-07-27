/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#3d504a',
          dark: '#2d3c37',
          light: '#4d6460',
        },
        amber: {
          brand: '#93c01f',
          light: '#a8d42a',
        },
        'lime-mestizo': '#93c01f',
        'sage-mestizo': '#99a690',
        copper: '#bb7f53',
        cream: {
          DEFAULT: '#d7cbbe',
          dark: '#c5b8a8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
