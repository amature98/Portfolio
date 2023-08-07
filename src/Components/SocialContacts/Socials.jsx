import { Socials as Sites } from './Socials';
import { Grid, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const Item = styled('a')(({ theme }) => ({
	padding: theme.spacing(1),
	color:theme.palette.text.secondary,
	'&:hover': {
		color: theme.palette.text.primary,
	}
}));

function Socials() {
	return (
		<Grid
			container
			spacing={1}
			sx={{
				padding: 2,
				justifyContent: 'center'
			}}>
			{Sites.map((site) => (
				<Grid item key={site.title}>
					<Item
						href={site.link}
						target='_blank'
						elevation={3}>
						<Icon> {site.icon} </Icon>
					</Item>
				</Grid>
			))}
		</Grid>
	);
}

export default Socials;
