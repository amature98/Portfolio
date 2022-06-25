import {
	Container,
	Grid,
	CircularProgress,
	Typography,
	Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import Page from './Page';
import { webDevSkills as skills } from '../Components/Skills/Skills';

function About() {
	return (
		<Page title='About Me'>
			<Container xl sx={{ textAlign: 'center' }}>
				<Container>
					<Typography
						variant='h2'
						sx={{ color: 'text.secondary' }}>
						I
					</Typography>
					<Typography variant='body2'>
						{new Date().getFullYear() - 1998} years |
						Nairobi | Kenya
					</Typography>
					<Typography variant='body1'>
						I am Fullstack Web developer and Tech enthusiast
						with a constant view of creating solutions
						through technolgy.
						<br />I am a student of the lives of Leornardo
						da Vinci and Steve Jobs who were believers of
						art and technology.
						<br />
						Art is broad and so I love exploring its
						different breadths and depths.
					</Typography>
					<Typography
						variant='h2'
						sx={{
							color: 'text.secondary'
						}}>
						My
					</Typography>
					<Typography
						variant='subtitle1'
						sx={{
							color: 'text.secondary'
						}}>
						Skills
					</Typography>
					<Grid container spacing={5} sx={{ margin: 0 }}>
						{skills.map((skill) => (
							<Grid
								item
								xs={12}
								md={6}
								key={skill.id}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
								<Typography variant='body2'>
									{skill.title}
								</Typography>
								<CircularProgress
									variant='determinate'
									value={skill.level}
									color='secondary'
									sx={{ ml: 2 }}
								/>
								<Typography
									variant='body2'
									color='text.secondary'
									component='div'
									sx={{ ml: 2 }}>
									{skill.level} %
								</Typography>
							</Grid>
						))}
					</Grid>
					<Button
						component='a'
						target='_blank'
						href='https://drive.google.com/file/d/1MqUAPcaO3YaNOfena4UufnbaQE8dvdvL/view?usp=sharing'
						variant='contained'
						color='secondary'
						sx={{ mt: 2 }}
						size='large'
						endIcon={<DownloadIcon />}>
						Resume
					</Button>
				</Container>
			</Container>
		</Page>
	);
}

export default About;
