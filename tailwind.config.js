/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: 'hsl(223, 87%, 63%)',
        inputBorder: 'hsl(0deg 0% 59% / 30%)',
        iconBorder: 'hsl(0deg 0% 59% / 15%)',
      },
      boxShadow: {
        buttonShadow: '0px 4px 10px hsl(223, 100%, 88%)', // Custom shadow value
      },
      fontSize: {
        xxs: '0.625rem', // Adding custom font size (10px)
      },
    },
  },
  plugins: [],
}
