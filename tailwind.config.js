/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        booktheme: {
          primary: 'yellow-400',
          secondary: 'rgb(76 5 25)',
          accent: 'rgb(136 19 55)',
          asthetic:'rgb(252 211 77)',
          'base-100': 'rgb(125 211 252)',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
