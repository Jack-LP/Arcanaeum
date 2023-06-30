/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#161616',
      },
      fontFamily: {
        inter: 'Inter',
        crimson: 'Crimson Text',
      },
    },
  },
  plugins: [],
};
