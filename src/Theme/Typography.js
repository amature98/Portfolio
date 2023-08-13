function fluidTypo(value) {
	return `${value}vw`;
}

function responsiveFontSizes({ sm, md, lg }) {
	return {
		"@media (min-width:600px)": {
			fontSize: fluidTypo(sm),
		},
		"@media (min-width:900px)": {
			fontSize: fluidTypo(md),
		},
		"@media (min-width:1200px)": {
			fontSize: fluidTypo(lg),
		},
	};
}

const FONT_PRIMARY = "Raleway, sans-serif";
const FONT_SECONDARY = "Poiret One cursive";
const FONT_TERTIARY = "Major Mono Display, monospace";

const typography = {
	fontFamily: FONT_PRIMARY,
	h1: {
		fontFamily: FONT_PRIMARY,
		fontSize: fluidTypo(23.5),
		...responsiveFontSizes({ sm: 24.5, md: 25, lg: 16.0 }),
	},
	h2: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 300,
		lineHeight: 1.0,
		fontSize: fluidTypo(7.0),
		...responsiveFontSizes({ sm: 7.5, md: 6.5, lg: 4.5 }),
	},
	h3: {
		fontFamily: FONT_TERTIARY,
		lineHeight: 1,
		fontSize: fluidTypo(14),
		...responsiveFontSizes({ sm: 16.5, md: 14.5, lg: 16 }),
	},
	h4: {
		fontWeight: 300,
		lineHeight: 1.5,
		fontSize: fluidTypo(7.25),
		...responsiveFontSizes({ sm: 4, md: 3, lg: 2.25 }),
	},
	h5: {
		fontWeight: 100,
		lineHeight: 1.5,
		fontSize: fluidTypo(4.25),
		...responsiveFontSizes({ sm: 2.5, md: 1.75, lg: 2.25 }),
	},
	h6: {
		fontWeight: 100,
		lineHeight: 28 / 18,
		fontSize: fluidTypo(4.25),
		...responsiveFontSizes({ sm: 3, md: 2.5, lg: 2.5 }),
	},
	subtitle1: {
		fontWeight: 300,
		lineHeight: 1.5,
		fontSize: fluidTypo(2.0),
		...responsiveFontSizes({ sm: 2.75, md: 1.75, lg: 2.0 }),
		letterSpacing: ".3rem",
	},
	subtitle2: {
		fontWeight: 300,
		lineHeight: 22 / 14,
		fontSize: fluidTypo(4),
	},
	body1: {
		fontFamily: FONT_SECONDARY,
		lineHeight: 1.5,
		fontWeight: 100,
		fontSize: fluidTypo(3.0),
		...responsiveFontSizes({ sm: 2.5, md: 2.0, lg: 1.5 }),
	},
	body2: {
		fontFamily: FONT_SECONDARY,
		lineHeight: 22 / 14,
		fontWeight: 400,
		fontSize: fluidTypo(3.5),
		...responsiveFontSizes({ sm: 2, md: 1.5, lg: 1.25 }),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: fluidTypo(1.5),
		...responsiveFontSizes({ sm: 1.5, md: 1.5, lg: 1.0 }),
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: fluidTypo(12),
		letterSpacing: 1.1,
		textTransform: "uppercase",
	},
	button: {
		fontFamily: FONT_TERTIARY,
		fontWeight: 100,
		lineHeight: 24 / 14,
		fontSize: fluidTypo(2),
		textTransform: "uppercase",
		...responsiveFontSizes({ sm: 3.0, md: 1.0, lg: 1.5 }),
	},
};

export default typography;
