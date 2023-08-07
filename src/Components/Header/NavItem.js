import {
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import { useTheme, alpha, styled } from "@mui/material/styles";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItemStyle = styled(ListItemButton)(({ theme }) => ({
	textTransform: "capitalize",
	color: theme.palette.text.secondary,
}));

function NavItem({ item, active }) {
	const isActive = active(item.path);
	const { title, path } = item;
	const theme = useTheme();
	const activeNavItemStyle = {
		color: "text-secondary",
		bgColor: alpha(
			theme.palette.text.secondary,
			theme.palette.action.selectedOpacity
		),
		"&before": { display: "block" },
	};
	return (
		<ListItem>
			<NavItemStyle
				alignItems='center'
				disableGutters
				component={Link}
				to={path}
				sx={{
					...(isActive && activeNavItemStyle),
				}}>
				<ListItemText>
					<Typography variant='h2' sx={{ textAlign: "center" }}>
						{" "}
						{title}{" "}
					</Typography>
				</ListItemText>
			</NavItemStyle>
		</ListItem>
	);
}
NavItem.propTypes = {
	item: PropTypes.object,
	active: PropTypes.func,
};

export default NavItem;
