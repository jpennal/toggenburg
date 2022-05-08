module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'mooLahLah': ['Moo Lah Lah', 'cursive'],
                'pressStart2P': [`'Press Start 2P'`, 'cursive'],
                'schoolbell': [`'Schoolbell'`, 'cursive'],
                'robotoMono': [`'Roboto Mono'`, 'monospace']
            },
        },
    },
    plugins: [],
}
