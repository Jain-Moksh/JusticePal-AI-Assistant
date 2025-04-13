export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['"Abhaya Libre"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
