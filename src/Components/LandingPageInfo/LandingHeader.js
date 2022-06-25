import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

function LandingHeader() {
	return (
		<Container
			maxWidth='false'
			sx={{
				display: 'flex',
				alignItems: 'center'
			}}>
			<Grid>
				<Typography variant='h1'>Hello,</Typography>
				<Typography variant='h1'>I am Viktor</Typography>
			</Grid>
		</Container>
	);
}

export default LandingHeader;
