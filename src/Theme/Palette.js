const GREY = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: '#919EAB',
	600: '#637381',
	700: '#454F5B',
	800: '#212B36',
	900: '#161C24'
};
const PRIMARY = {
	main: '#26282B',
	dark: '#353941'
};

const SECONDARY = {
	main: '#FCA311',
	dark: '9D5A0B'
};

const INFO = {
	main: '#0EF6BE',
	dark: '#3A504B'
};

const ERROR = {
	main: '#5B0203',
	dark: '#3D0007'
};

const palette = {
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	error: { ...ERROR },
	background: {
		default: PRIMARY.main,
		paper: PRIMARY.main
	},
	text: {
		primary: '#E5E5E5',
		secondary: SECONDARY.main,
		disabled: GREY[500]
	},
	action: {
		active: GREY[900],
		hover: GREY[800],
		selected: '#FCA311',
		disabled: GREY[500],
		disabledBackground: GREY[500],
		focus: GREY[500],
		hoverOpacity: 0.15,
		disabledOpacity: 0.48
	}
};
export default palette;
