import {
	Container,
	Grid,
	CircularProgress,
	Typography,
	Button,
	Card,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import Page from "./Page";
import { webDevSkills as skills } from "../Components/Skills/Skills";

function About() {
	return (
		<Page title='About Me'>
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					width: "100%",
					height: "100%",
				}}>
				<Container>
					<Typography variant='h1'>
						<span>ABOUT ME</span>
					</Typography>
					<Typography variant='body2'>
						{new Date().getFullYear() - 1998} years | Nairobi | Kenya
					</Typography>
					<Card>
						<Typography variant='body1'>
							I am Fullstack Web developer and Tech enthusiast with a constant
							view of creating solutions through technolgy.
							<br />I am a student of the lives of Leornardo da Vinci and Steve
							Jobs who were believers of art and technology.
							<br />
							Art is broad and so I love exploring its different breadths and
							depths.
						</Typography>
						<Typography
							variant='subtitle1'
							sx={{
								color: "text.secondary",
							}}>
							My Skills
						</Typography>
						<Grid container spacing={2}>
							{skills.map((skill) => (
								<Grid
									item
									xs={12}
									md={6}
									key={skill.id}
									sx={{}}>
									<Typography variant='body2'>{skill.title}</Typography>
								</Grid>
							))}
						</Grid>
					</Card>

					<Button
						component='a'
						target='_blank'
						href='https://drive.google.com/file/d/1_2gZ_wFWxRax5CK09ro6o_sGp-Ym4FM4/view?usp=sharing'
						variant='contained'
						color='secondary'
						sx={{ mt: 2, mb: 2 }}
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
