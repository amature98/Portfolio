import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	Toolbar,
	useScrollTrigger,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import CloseIcon from "@mui/icons-material/Close";
import { alpha } from "@mui/material/styles";
import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import { matchPath, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { navPages } from "./NavConfig";
import Socials from "../SocialContacts/Socials.jsx";

function ElevateOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
ElevateOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

function Navbar(props) {
	const [toggleDrawer, setToggleDrawer] = useState(false);
	const handleToggleDrawer = () => {
		setToggleDrawer(!toggleDrawer);
	};
	const { pathname } = useLocation();
	const match = (path) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;
	return (
		<Container maxWidth='xl'>
			<ElevateOnScroll {...props}>
				<AppBar>
					<Toolbar
						disableGutters
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							// backgroundColor: "transparent",
						}}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box>
								<IconButton
									color='secondary'
									aria-label='header menu'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleToggleDrawer}>
									<SortIcon fontSize='large' />
								</IconButton>
							</Box>
							<Drawer
								variant='temporary'
								anchor='right'
								open={toggleDrawer}
								onClose={handleToggleDrawer}
								ModalProps={{
									keepMounted: true,
								}}
								sx={{
									display: "flex",
									"& .MuiDrawer-paper": {
										backdropFilter: "blur(2.5px)",
										backgroundColor: (theme) =>
											alpha(theme.palette.background.default, 0.5),
										boxSizing: "border-box",
										width: "100vw",
										height: "100vh",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									},
								}}>
								<Button
									variant='contained'
									color='secondary'
									sx={{ borderRadius: "50%", mb: 3, p: "2vw" }}
									size='large'
									onClick={handleToggleDrawer}>
									<CloseIcon sx={{ fontSize: 40 }} />
								</Button>
								<List>
									{navPages.map((item) => (
										<NavItem key={item.title} item={item} active={match} />
									))}
								</List>
								<Socials />
							</Drawer>
						</Box>
					</Toolbar>
				</AppBar>
			</ElevateOnScroll>
			<Toolbar />
		</Container>
	);
}

export default Navbar;
