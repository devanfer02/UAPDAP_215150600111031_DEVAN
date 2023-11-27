/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        'my-orange': '#FF782D',
        'my-lightgray': '#E5CFC2',
        'my-white': '#E2E2E2',
        'my-navy': '#060E1F',
        'berry': '#C83F49'
      },
      backgroundImage: {
        network: 'url(../assets/images/network-white.png)',
        network2: 'url(../assets/images/network2.png)'
      },
      screens: {
        '2xl': '1320px'
      },
      
    },
  },
  plugins: [],
}

