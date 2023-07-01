/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          100: '#161616',
          200: '#121212',
        },
        teal: '#588D7D',
      },
      fontFamily: {
        inter: 'Inter',
        crimson: 'Crimson Text',
      },
    },
  },
  plugins: [],
};
