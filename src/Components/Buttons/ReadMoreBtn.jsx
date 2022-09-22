import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';
import { Link } from 'react-router-dom';

function ReadMoreBtn() {
	return (
		<Button
			component={Link}
            to='/blog/:id'
			color='secondary'
			sx={{ mt: 2 }}
			endIcon={<ArrowRightAltIcon />}>
			Read More
		</Button>
	);
}

export default ReadMoreBtn;