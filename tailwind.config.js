 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    },
  },
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')()
  ],
} 