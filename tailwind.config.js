/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Arial": "arial,sans-serif;",
      },
      colors: {
        "blueDark": "#1a0dab",
        "grayLight" : "#f8f9fa",
        "blackLight" : "#3c4043",
        "grayMobile": "#70757a",
        "grayApp": "#5f6368"
      }
    },
  },
  plugins: [],
}
