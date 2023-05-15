/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		extend: {
			fontFamily: { 
        [`sans`]: [`Inter`, `sans-serif`] ,
        [`kufam`]:[`Kufam`,`serif`]
      },
			boxShadow: {
				innerShadow: "inset 0px -20px 800px 150px #09090B;",
			},
			textColor: {
				"light-green": "#33E29A",
        'white-200': '#BAACAC',
        'dark': '#121212',
        'dark-200': '#262626',
        'gray': '#414141' 
			},
			backgroundColor: {
				'shadow-grey': 'rgba(255, 255, 255, 0.16);'
			}
		},
	},
	plugins: [],
};
