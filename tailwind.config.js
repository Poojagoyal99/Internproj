/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#6D2E00',
        customSkin: '#E2C8B5',
        customPeach: '#F26565',
        customLigthBrown: '#B16F3F'
      },
      boxShadow: {
        'left-right-bottom': '5px 5px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}

