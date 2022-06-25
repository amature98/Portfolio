import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material';
import {
	useTheme,
	alpha,
	styled
} from '@mui/material/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItemStyle = styled(ListItemButton)(
	({ theme }) => ({
		textAlign: 'center',
		height: 60,
		textTransform: 'capitalize',
		color: theme.palette.text.secondary
	})
);

const NavItemIconStyle = styled(ListItemIcon)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
});

function NavItem({ item, active }) {
	const isActive = active(item.path);
	const { title, path, icon } = item;
	const theme = useTheme();
	const activeNavItemStyle = {
		color: 'text-secondary',
		bgColor: alpha(
			theme.palette.text.secondary,
			theme.palette.action.selectedOpacity
		),
		'&before': { display: 'block' }
	};
	return (
		<ListItem disablePadding>
			<NavItemStyle
				disableGutters
				component={Link}
				to={path}
				sx={{
					...(isActive && activeNavItemStyle)
				}}>
				{/* <NavItemIconStyle>{icon}</NavItemIconStyle> */}
				<ListItemText>
					<Typography variant='subtitle1'> {title} </Typography>
				</ListItemText>
			</NavItemStyle>
		</ListItem>
	);
}
NavItem.propTypes = {
	item: PropTypes.object,
	active: PropTypes.func
};

export default NavItem;
