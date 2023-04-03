/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit'],
      },
      colors: {
        VerydarkblueB: 'hsl(217, 54%, 11%)',
        VerydarkblueC: 'hsl(216, 50%, 16%)',
        VerydarkblueL: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)',
        Softblue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
      },
    },
  },
  plugins: [],
};
