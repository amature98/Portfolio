import { Box, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState } from 'react';

function BackToTopBtn() {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) {
			setVisible(true);
		} else if (scrolled <= 200) {
			setVisible(false);
		}
	};
	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	window.addEventListener('scroll', toggleVisible);
	return (
		<Box
			component='div'
			sx={{
				position: 'fixed',
				left: '80%',
				bottom: 40,
				zIndex: 1
			}}>
			<IconButton
				color='secondary'
				onClick={backToTop}
				size='large'
				sx={{ display: visible ? 'inline' : 'none' }}>
				<KeyboardArrowUpIcon fontSize='inherit'/>
			</IconButton>
		</Box>
	);
}

export default BackToTopBtn;
