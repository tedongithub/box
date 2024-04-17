import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./src/*.{jsx,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Nunito Sans',
					'Nunito Sans Fallback',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
}