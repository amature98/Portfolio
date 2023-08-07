import { Box, Container, Typography } from "@mui/material";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import Image from "../../Images/bgImg.jpg";

function LandingHeader() {
	useEffect(() => {
		const t1 = gsap.timeline();
		t1.from(".text ", {
			y: 150,
			opacity: 0,
			ease: "power1.inout",
			delay: 0.5,
			duration: 2.5,
			stagger: {
				amount: 0.2,
			},
		});
	});
	return (
		<Container
			maxWidth='xl'
			sx={{
				backgroundImage: Image,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<Box sx={{ overflow: "hidden" }}>
				<Typography className='text' variant='h1'>
					<span>V</span>I<span>K</span>TO<span>R</span>
				</Typography>
				<Typography className='text' variant='body1' component='div'>
					I am a Kenyan born and avid
					<br /> web developer and tech enthusiast with a
					<br />
					keen sense of all forms of Art.
					<br />
					<Typography variant='body2'>
						"Art is a way of visualising the world . . .
						<br /> Tech is a way of living the world"
					</Typography>
				</Typography>
			</Box>
			<Box></Box>
		</Container>
	);
}

export default LandingHeader;
