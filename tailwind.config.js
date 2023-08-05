/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#010205",
				secondary: "#EBEBEB",
				text: "#656565",
				accent: "#669C30",
				mainbg: "#fafafa",
			},
		},
	},
	plugins: [],
};
