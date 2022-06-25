import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const idGen = () => {
	const id = Math.floor(Math.random() * 100);
	return id;
};
 export const Socials = [
	{
		title: 'Twitter',
		id: idGen,
		link: 'https://twitter.com/Viktorkinyua98',
		icon: <TwitterIcon />
	},
	{
		title: 'LinkedIn',
		id: idGen,
		link: 'https://linkedIn.com/Viktorkinyua',
		icon: <LinkedInIcon />
	},
	{
		title: 'Instagram',
		id: idGen,
		link: 'https://instagram.com/kinyua_viktor',
		icon: <InstagramIcon />
	},
	{
		title: 'Github',
		id: idGen,
		link: 'https://github.com/amature98',
		icon: <GitHubIcon />
	}
];

export const ContactsInfo = [
	{
		title: 'Nairobi, Kenya',
		icon: <LocationOnOutlinedIcon />
	},
	{
		title: 'kinyuaviktor@gmail.com',
		icon: <EmailOutlinedIcon />
	},
	{
		title: '+2547 xx xxx xxx',
		icon: <CallOutlinedIcon />
	},
];
