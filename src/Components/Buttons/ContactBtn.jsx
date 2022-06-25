import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const ContactBtnStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	width: 250,
	height: 250,
	left: 200,
	borderRight: '1px solid transparent',
	borderLeft: '2.5px solid rgb(255,168,0)',
	borderBottom: '5px solid rgb(255,168,0)',
	borderTop: '1px solid rgb(255,168,0)',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
        marginTop: 25,
		left: 40,
	},
	[theme.breakpoints.down('sm')]: {
		left: 40,
		width: 150,
		height: 150
	}
}));
function ContactBtn() {
	return (
		<ContactBtnStyle>
			<Typography variant='h3' sx={{ textAlign: 'center' }}>
				<NavLink to='/contact-me'>Contact Me</NavLink>
			</Typography>
		</ContactBtnStyle>
	);
}

export default ContactBtn;
