/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'primary-text': '#dbb62a',  // Replace with your desired primary text color
        'secondary-text': '#000', // Replace with your desired secondary text color
      },
      fontSize:{
        'title':'52px',
        'title-sm': '48px', // Small screens
        'title-md': '52px', // Medium screens
        'title-lg': '56px',
      }
      
    },
  },
  plugins: [],
};
