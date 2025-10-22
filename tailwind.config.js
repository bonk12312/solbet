/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf7',
          100: '#fffaed',
          200: '#fff4d1',
          300: '#ffe9a8',
          400: '#ffd76f',
          500: '#ffc43d',
          600: '#f5a623',
          700: '#d48806',
          800: '#ad6800',
          900: '#8a5500',
          950: '#4d2f00',
        },
      },
    },
  },
  plugins: [],
};
