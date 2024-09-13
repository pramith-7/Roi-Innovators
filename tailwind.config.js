/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
// default is dark mode
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      iceblue: "#38B6FF",
      yellow: "#FBB040",
      gradientbutton : "bg-gradient-to-r from-cyan-200 to-blue-700",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },

    backgroundImage: {
        'gradient-black-blue': 'linear-gradient(13deg, rgba(0,11,39,1) 0%, rgba(0,34,70,1) 50%, rgba(0,11,39,1) 100%)',
        'gradient-button' : 'linear-gradient(13deg, rgba(0,226,244,1) 0%, rgba(0,56,200,1) 100%)', 
        'gradientbutton' : 'linear-gradient(13deg, rgba(0,226,244,1) 0%, rgba(0,56,200,1) 100%)' 
      },
    },
  },
  plugins: [],
};
