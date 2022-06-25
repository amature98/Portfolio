import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer(props) {
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 0,
				left: '50%'
			}}>
			<Typography
				variant='caption'
				color='text.secondary'
				{...props}>
				{'Copyright © '}
				{new Date().getFullYear()}
			</Typography>
		</Box>
	);
}

export default Footer;
