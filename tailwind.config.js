// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
    theme: {
        extend: {
            colors: {
                bborange: {
                    lighter: '#FFC226',
                    default: '#FFC226',
                    darker: '#FF8D00'
                }
            },
            fontFamily: {
                'hand': ['Indie\\ Flower', 'cursive']
            }
        }
    },
    variants: {},
    plugins: [
        function ({
            addUtilities
        }) {
            const newUtilities = {
                '.skew-10deg': {
                    transform: 'skewY(-10deg)',
                },
                '.skew-15deg': {
                    transform: 'skewY(-15deg)',
                },
            }

            addUtilities(newUtilities)
        }
    ]
}
