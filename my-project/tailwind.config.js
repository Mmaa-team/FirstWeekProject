/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BabyPowder: "#FDFAF4",
        Alabaster: "#E9E5DE",
        PaleDogwood: "#E7CCC1",
        Liver: "#705650",
        VanDyke: "#382E29"
      },
    },
  },
  plugins: [],
};
