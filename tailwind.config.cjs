/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // colors:{
        //     // foreground:'#020100',
        //     // background:'#EDEFFC',
        //     // accent1:'#ED1C24',
        //     // accent2:'#235789',
        //     // accent3:'#E1D302',
        // },
        extend: {
            transitionProperty: {
                'height': 'height'
            }
        },
    },
    plugins: [],
}
