import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import Image from "../Images/Pebble People - Avatar Backdrop.png";
import BgImg from "../Images/TexturelabsPaper.jpg";

function NotFound() {
	let navigate = useNavigate();
	const handleError404 = () => {
		navigate("/");
	};
	return (
		<Box
			sx={{
				display: "flex",
				height: '100%',
				pt: 6,
				alignItems: "center",
				flexDirection: "column",
				background: `url(${BgImg})`,
			}}>
			<Typography variant='h2' color='secondary' sx={{ textAlign: "center" }}>
				<span>
					OOOPS <br /> ERROR 404
				</span>
			</Typography>
			<img src={Image} alt='Error 404' />
			<Typography variant='body' sx={{ mt: 2 }}>
				Space to Earth: "Found a lost boogie"
			</Typography>
			<Button
				onClick={handleError404}
				sx={{ mt: 2 }}
				variant='contained'
				color='secondary'>
				Let's Go Home
			</Button>
		</Box>
	);
}

export default NotFound;
