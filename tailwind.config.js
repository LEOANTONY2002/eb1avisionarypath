/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.2s ease-in-out forwards",
        "slide-out": "slide-out 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
