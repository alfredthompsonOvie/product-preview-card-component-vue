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
				"btn-hover": "hsl(156, 42%, 18%)",
				"attribution": "hsl(228, 45%, 44%)"
			},
			fontFamily: {
				text: "'Montserrat', sans-serif",
				heading: "'Fraunces', serif;"
			},
			transitionProperty: {
				"duration": "4500ms"
			},
			gridTemplateRows: {
				"2": "15em auto",
				"1": "auto"
			},
			gridTemplateColumns: {
				"1": "1fr",
				"2": "1fr 1fr"
			}
		},
		screens: {
			md: "700px",
			"smallS": "344px"
		},
	},
	plugins: [],
};
