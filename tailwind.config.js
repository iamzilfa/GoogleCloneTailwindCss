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
        "grayApp": "#5f6368",
        "grayButton" : "#dadce0",
        "grayIcon" : "rgba(60,64,67,.08)",
        "grayShadow" : "0 1px 1px rgb(0 0 0 / 10%)"
      },
      boxShadow:{
        searchshadow:"0 1px 6px rgb(32 33 36 / 28%)",
        buttonShadow:"0 1px 1px rgb(0 0 0 / 10%);"
      }
      
    },
  },
  plugins: [],
}
