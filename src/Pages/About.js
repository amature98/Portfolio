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
		0.05
	),
	backdropFilter: "blur(8px)",
	boxShadow: "0px 0px 40px #ffae12",
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
						<Typography
							variant='body2'
							sx={{
								color: "text.secondary",
							}}>
							Bio
						</Typography>
						<Typography variant='body2'>
							Viktor Kinyua is a Web developer and Tech enthusiast based in
							Nairobi, Kenya with a constant view of creating solutions through
							technology.
							I am a passionate about the arts with great inspiration from
							the lives of Leornardo da Vinci and Steve Jobs who were believers
							of art and technology.
							I am currently open to full time / freelance opportunities
							in the creative web development and art. I am also exploring the 
							field of Data Science. 
						</Typography>
						<Typography
							variant='body2'
							sx={{
								color: "text.secondary",
							}}>
							Skills
						</Typography>
						<Grid container spacing={1}>
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
