/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'camel': ['The Year of The Camel', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        extraBold: 800,
        light: 300,
        extraLight: 200,
        medium: 500,
        thin: 100,
      },

      colors: {
        primary: '#294E4A', //  Green
        primaryBurnt: '#223a39', // Dark Green
        secondary: '#B88444', // Light Gold
        tertiary: '#9A6A38', // Dark Gold
        accent: '#FBF9F6', // Off White
      
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #2B4745, #223A39)', // Dark Green gradient
      
      },
      spacing: {
        // 'base-p': '',  Customize your default padding
        'base-m': '0rem 4rem 0rem 4rem', // Customize your default margin
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatDiagonal: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, -20px)' }, // Adjust for 130-degree direction
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatDiagonal: 'floatDiagonal 8s ease-in infinite', // Slower motion

      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      screens: {
        'max-xs': { max: '395px'},
        'max-md': { max: '767px'},
        'h812': { raw: '(max-height: 812px)' },
      },
      
      
    },
  },
  plugins: [],
}

