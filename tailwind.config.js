/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem"
            }
        },
        extend: {
            colors: {
                // Add color schemes
                primary: "#5D5CD6",
                "primary-dark": "#151452",
                "primary-light": "#D6D6F5",
                secondary: "#FFB800",
                tertiary: "#28B567",
                light: "#F7F7FD",
                lighter: "#D2D4D7",
                warning: "#FEC658"
            },
            fontFamily: {
                // Add custom fonts
            }
        }
    },
    plugins: []
};
