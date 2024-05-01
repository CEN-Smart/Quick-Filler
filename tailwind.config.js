/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        image: "url('/src/assets/about-pic.png')",
        picture: "url('/src/assets/layer.png')",
      },

    },
  },
  plugins: [],
};
