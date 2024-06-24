/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: { colors: {
      'plantilla1_gratis': {
        '50': '#ffffff',
        '100': '#d2ffc5',
        '200': '#a6ff92',
        '300': '#6eff53',
        '400': '#3cfb20',
        '500': '#1ae600',
        '600': '#0fb500',
        '700': '#0d8902',
        '800': '#0f6c08',
        '900': '#105b0c',
        '950': '#013300',
      },
    },},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'h1': {
          color: '#4a6870',
          fontWeight: 'bold',
          fontSize: '2em'
        },
        'h2': {
          color: '#567b84',
        },
        'h3': {
          color: '#71979f',
        },
        'h4': {
          color: '#8aacb2',
        },
        'h5': {
          color: '#c7d7da',
        },
        'h6': {
          color: '#71979f',
        },
        'p': {
          color: '#4a6870',
          fontSize: '1.2em'
        }
      });
    },
  ],
}
