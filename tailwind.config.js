/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'Light-red': 'hsl(356, 100%, 66%)',
      'Very-light-red': 'hsl(355, 100%, 74%)',
      'Very-dark-blue': 'hsl(208, 49%, 24%)',
      
      // ### Neutral
      
      'White': 'hsl(0, 0%, 100%)',
      'Grayish-blue': 'hsl(240, 2%, 79%)',
      'Very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
      'Very-dark-black-blue': 'hsl(240, 10%, 16%)',
      
      // ### Gradient
      
      // Background gradient - Intro/CTA mobile nav:
      
      'Very-light-red': 'hsl(13, 100%, 72%)',
      'Light-red': 'hsl(353, 100%, 62%)',
      
      // Background gradient - body:
      
      'Very-dark-gray-blue': 'hsl(237, 17%, 21%)',
      'Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
    },
    screens: {
      'xl': '1440px',
      'lg': '1024px',
      'md': '768px'
    },
    fontFamily: {
      'Overpass': ['Overpass', 'sans-serif'],
      'Ubuntu': ['Ubuntu','sans-serif'],
    },
  },
  plugins: [],
}