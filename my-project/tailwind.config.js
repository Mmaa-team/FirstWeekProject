/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                BabyPowder: '#FDFAF4',
                Alabaster: '#E9E5DE',
                PaleDogwood: '#E7CCC1',
                Liver: '#705650',
                VanDyke: '#382E29',
            },
        },
    },
    plugins: [],
})
