/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"dark-cyan": "hsl(158, 36%, 37%)",
				"cream": "hsl(30, 38%, 92%)",
				"very-dark-blue": " hsl(212, 21%, 14%)",
				"dark-grayish-blue": "hsl(228, 12%, 48%)",
				"white": "hsl(0, 0%, 100%)",
			},
			fontFamily: {
				text: "'Montserrat', sans-serif",
				heading: "'Fraunces', serif;"
			}
		},
		screens: {
			sm: "700px",
		},
	},
	plugins: [],
};
