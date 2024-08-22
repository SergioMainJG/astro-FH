/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			//! DEFAULT
			"white"			 : "#f0f9ff",
			"aliceBlue"	     : "#E3F2FD",
			"uranianBlue"    : "#BBDEFB",
			"lightSkyBlue"   : "#90CAF9",
			"argentinianBlue": "#42A5F5",
			"dodgerBlue"  	 : "#2196F3",
			"bleuDeFrance"	 : "#1E88E5",
			"frenchBlue"	 : "#1976D2",
			"greenBlue" 	 : "#1565C0",
			"cobaltBlue"	 : "#0D47A1",
			//! DARK MODE
			"charcoal-250"    : "#485265",
			"charcoal-500"    : "#364156",
			"charcoal-750"    : "#343F54",
			"charcoal-1000"   : "#313C51",
			"prussianBlue-300": "#364156",
			"prussianBlue-600": "#343F54",
			"prussianBlue-900": "#313C51",
			"raisinBlack-300" : "#2C374B",
			"raisinBlack-600" : "#273246",
			"raisinBlack-900" : "#212D40",
			"richBlack-300"   : "#19212E",
			"richBlack-600"   : "#151B25",
			"richBlack-900"   : "#11151C",
		}
	},
	plugins: [],
}
