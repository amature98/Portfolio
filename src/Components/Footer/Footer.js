import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
	return (
		<Box
			sx={{
				pb: 1.5,
				position: "absolute",
				bottom: 0,
				left: "50vw",
			}}>
			<Typography variant='caption' color='text.secondary'>
				{"VIKTOR © "}
				{new Date().getFullYear()}
			</Typography>
		</Box>
	);
}

export default Footer;
