import React from "react";
import Page from "./Page";
import { Container, Typography } from "@mui/material";
function Blogs() {
	return (
		<Page title='Blogs'>
			<Container
				maxWidth='xl'
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Typography variant='h3'>THOUGHTS</Typography>
			</Container>
		</Page>
	);
}

export default Blogs;
