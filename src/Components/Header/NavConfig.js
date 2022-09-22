import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
export const navPages = [
	{
		title: 'Home',
		path: '/',
		icon: <HouseIcon />
	},
	{
		title: 'About Me',
		path: '/about-me',
		icon: <InfoIcon />
	},
	{
		title: 'Contact Me',
		path: '/contact-me',
		icon: <RingVolumeIcon />
	},
];
