import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Image from '../Images/Pebble People - Avatar Backdrop.png';

function NotFound() {
	let navigate = useNavigate()
	const handleError404 = () => {
		navigate('/')
	}
	return (
		<Box
			sx={{
				display: 'flex',
				pt: 6,
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}>
			<Typography variant='h2' color='secondary'>
				Ooops Error 404
			</Typography>
			<img src={Image} alt='Error 404' />
			<Typography variant='body' sx={{ mt: 2 }}>
				Okay this is awkward, but I think you might be lost
			</Typography>
			<Button
				onClick={handleError404}
				sx={{ mt: 2 }}
				variant='contained'
				color='secondary'>
				Let's Go Home
			</Button>
		</Box>
	);
}

export default NotFound;
