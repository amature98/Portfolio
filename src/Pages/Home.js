import LandingHeader from '../Components/LandingPageInfo/LandingHeader';
import ContactBtn from '../Components/Buttons/ContactBtn.jsx';
import Skills from '../Components/Skills/Skills.jsx'
import React from 'react';
import Page from './Page';
import { Grid } from '@mui/material';

function Home() {
	return (
		<Page title='Home'>
			<LandingHeader />
			<Grid container >
				<Grid item xs={4}>
					<ContactBtn />
				</Grid>
				<Grid item xs={6}>
					<Skills />
				</Grid>
			</Grid>
		</Page>
	);
}

export default Home;
