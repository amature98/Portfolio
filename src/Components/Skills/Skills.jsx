import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import TagIcon from '@mui/icons-material/Tag';
import DoneIcon from '@mui/icons-material/Done';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material';
import { skills as Skillz} from './Skills';

const SkillsRootStyle = styled('div')({
	display: 'flex',
	position: 'relative'
});
const SkillsHeaderStyle = styled('div')(({ theme }) => ({
	color: alpha(
		theme.palette.text.secondary,
		theme.palette.action.hoverOpacity
	),
	display: 'flex',
	alignItems: 'center',
  	zIndex: 1,
	[theme.breakpoints.down('md')]: {
		marginTop: 25
	}
}));
const ListStyle = styled('div')({
	zIndex: 2,
	position: 'absolute',
	top: '25%',
	left: '25%'
});

function Skills() {
	return (
		<SkillsRootStyle>
			<SkillsHeaderStyle>
				<TagIcon sx={{ fontSize: '75px' }} />
				<Typography variant='h1'>Skills</Typography>
			</SkillsHeaderStyle>
			<ListStyle>
				<List>
					{Skillz.map((skill) => (
						<ListItem key={skill.id}>
							<ListItemIcon sx={{color:'currentColor', minWidth: 0}}>
								<DoneIcon />
							</ListItemIcon>
							<ListItemText>
								<Typography variant='h3'>
									{skill.title}
								</Typography>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</ListStyle>
		</SkillsRootStyle>
	);
}

export default Skills;
