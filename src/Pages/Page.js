import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Footer from '../Components/Footer/Footer';
import React from 'react';
import Navbar from '../Components/Header/NavBar';
import BackToTopBtn from '../Components/Buttons/BackToTopBtn';

function Page({ children, title = '' }) {
	return (
		<Box sx={{ maxHeight: '100vh' }}>
			<Helmet>
				<title> {title} </title>
			</Helmet>
			<Navbar />
			{children}
			<BackToTopBtn />
			<Footer sx={{ pt: 4 }} />
		</Box>
	);
}
Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string
};
export default Page;
