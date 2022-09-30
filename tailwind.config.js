/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/partials/*.ejs', './views/*.ejs'],

  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {},
  },
  plugins: [

  ],
}
