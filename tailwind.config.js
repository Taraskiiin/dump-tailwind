/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			xl: { min: '1279px' },
			lg: { min: '1023px' },
			md: { min: '767px' },
			sm: { min: '639px' },
		},
	},
	plugins: [],
};
