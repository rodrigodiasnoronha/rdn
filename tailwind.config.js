/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Or if using `src` directory:
    ],
    theme: {
        extend: {
            colors: {
                // lucy theme colors
                background1: '#0e0f15',
                background2: '#14161e',
                background3: '#1a1d27',
                background4: '#292c38',
                selection: '#413b4f',
                dim1: '#494c59',
                dim2: '#5e6173',
                dim3: '#88898f',
                dim4: '#c3b5d3',
                pure1: '#dfdfdf',
                pure2: '#d7d7d7',
                const: '#af98e6',
                accent1: '#51c7da',
                accent2: '#fdad5d',
                call: '#76c5a4',
                base1: '#fb7da7',
                base2: '#e3cf65',
                translucent: '#161821bf',
                translucent2: '#ffffff26',
                translucent3: '#ffffff0c',
                translucent4: '#76c5a40c',
                translucent5: '#76c5a426',
                translucent6: '#ff84ad0c',
                translucent7: '#ff84ad26',
                translucent8: '#00000000',
                translucent9: '#ffffff12',
            },
        },
    },
    plugins: [],
};
