module.exports = {
  important:true,
  theme: {
    extend: {
      colors: {
        'regal-blue': '#4A4A4A',
      }
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  }
}