import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer/Footer";
import React from "react";
import Navbar from "../Components/Header/NavBar";
import BackToTopBtn from "../Components/Buttons/BackToTopBtn";
import Image from "../Images/TexturelabsPaper.jpg";

function Page({ children, title = "" }) {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				background: `url(${Image})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<Helmet>
				<title> {title} </title>
			</Helmet>
			<Navbar />
			{children}
			<BackToTopBtn />
			<Footer />
		</Box>
	);
}
Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};
export default Page;
