/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(25,23,17,0.6)",
      },
      animation: {
        Blob: "Blob 7s infinite",
      },
      keyframes: {
        Blob: {
          "0%": {
            transform: "translate(0px , 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px , 20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px , -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px , 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
