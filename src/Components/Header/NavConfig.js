import React from 'react';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const navPages = [
	{
		title: 'Home',
		path: '/',
		icon: <CottageOutlinedIcon />
	},
	{
		title: 'About Me',
		path: '/about-me',
		icon: <PersonOutlinedIcon />
	},
	{
		title: 'Contact Me',
		path: '/contact-me',
		icon: <CallOutlinedIcon />
	}
];

export default navPages;
