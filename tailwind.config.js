/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#7B3020',
          dark: '#5C2810',
          light: '#9B4030',
        },
        amber: {
          brand: '#E89520',
          light: '#F0C040',
        },
        cream: {
          DEFAULT: '#F5EDD8',
          dark: '#EDE0C4',
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
