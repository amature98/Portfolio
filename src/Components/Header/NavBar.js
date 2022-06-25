import {
	Box,
	Container,
	Drawer,
	IconButton,
	List,
	Toolbar,
	Typography
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { alpha } from '@mui/material/styles';
import React, { useState } from 'react';
import {
	Link,
	matchPath,
	useLocation
} from 'react-router-dom';
import NavItem from './NavItem';
import navPages from './NavConfig';
import Socials from '../SocialContacts/Socials.jsx';

function Navbar() {
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
			<Toolbar
				disableGutters
				sx={{
					display: 'flex',
					justifyContent: 'space-between'
				}}>
				<Typography
					variant='subtitle1'
					noWrap
					component={Link}
					to='/'
					sx={{
						mr: 2,
						display: 'flex',
						color: 'text.secondary'
					}}>
					PORTFOLIO
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
		</Container>
	);
}

export default Navbar;
