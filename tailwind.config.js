/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                tomato: "hsl(4, 100%, 67%)",
                darkSlateGrey: "hsl(234, 29%, 20%)",
                charcoalGrey: "hsl(235, 18%, 26%)",
                grey: "hsl(231, 7%, 60%)",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
