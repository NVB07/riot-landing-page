/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "blur-gradient": "radial-gradient(70.71% 70.71% at 50% 50%,#0bc4e233 0,rgba(10,10,10,0) 75%,rgba(10,10,10,0) 100%)",
            },
            height: {
                heightVideoBanner: "calc(100vh - 120px)",
            },
        },
    },
    plugins: [],
};
