import {
	AppBar,
	Box,
	Container,
	Drawer,
	IconButton,
	List,
	Toolbar,
	Typography,
	useScrollTrigger
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { alpha } from '@mui/material/styles';
import React, { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import {
	Link,
	matchPath,
	useLocation
} from 'react-router-dom';
import NavItem from './NavItem';
import { navPages } from './NavConfig';
import Socials from '../SocialContacts/Socials.jsx';

function ElevateOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});
	return cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}
ElevateOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

function Navbar(props) {
	const [toggleDrawer, setToggleDrawer] = useState(false);
	const handleToggleDrawer = () => {
		setToggleDrawer(!toggleDrawer);
	};
	const { pathname } = useLocation();
	const match = (path) =>
		path
			? !!matchPath({ path, end: false }, pathname)
			: false;
	return (
		<Container maxWidth='xl'>
			<ElevateOnScroll {...props}>
				<AppBar>
					<Toolbar
						disableGutters
						sx={{
							ml: 4,
							mr: 4,
							display: 'flex',
							justifyContent: 'space-between',
							backgroundColor: 'transparent'
						}}>
						<Typography
							variant='subtitle1'
							noWrap
							component={Link}
							to='/'
							sx={{
								color: 'text.secondary'
							}}>
							VIK.TOR
						</Typography>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Box>
								<IconButton
									edge='start'
									size='large'
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
									keepMounted: true
								}}
								sx={{
									display: 'block',
									'& .MuiDrawer-paper': {
										backdropFilter: 'blur(2.5px)',
										backgroundColor: (theme) =>
											alpha(
												theme.palette.background.default,
												0.5
											),
										boxSizing: 'border-box',
										width: '50%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center'
									}
								}}>
								<List>
									{navPages.map((item) => (
										<NavItem
											key={item.title}
											item={item}
											active={match}
										/>
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
