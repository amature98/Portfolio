import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				pb: 2,
				pt: 2
			}}>
			<Typography variant='caption' color='text.secondary'>
				{'Copyright © '}
				{new Date().getFullYear()}
			</Typography>
		</Box>
	);
}

export default Footer;
