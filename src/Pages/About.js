import { Container, Grid, Typography, Button, Card } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import React, { useEffect, useState } from "react";
import Page from "./Page";
import moment from "moment-timezone";
import { webDevSkills as skills } from "../Components/Skills/Skills";

const StyledCard = styled(Card)(({ theme }) => ({
	margin: " 8vh 0vw",
	padding: "4vw",
	borderRadius: "70px",
	backgroundColor: alpha(
		theme.palette.text.tertiary,
		theme.palette.action.hoverOpacity
	),
	backdropFilter: "blur(10px)",
	boxShadow: "10px -10px 40px #9d5a0b,-10px 10px 40px #ffae12",
}));

function About() {
	const [currentTime, setCurrentTime] = useState(moment().tz("Africa/Nairobi"));
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(moment().tz("Africa/Nairobi"));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
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
					<Typography variant='body1'>
						{currentTime.format("HH:mm:ss")} | Nairobi | Kenya
					</Typography>
					<StyledCard>
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
								<Grid item xs={12} key={skill.id}>
									<Typography variant='body2'>{skill.title}</Typography>
								</Grid>
							))}
						</Grid>
					</StyledCard>

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
