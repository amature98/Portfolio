import React from 'react';
import { GlobalStyles as GlobalThemeStyles} from '@mui/material';

function GlobalStyles() {
	return (
		<GlobalThemeStyles
			styles={{
				'*': {
					margin: 0,
					padding: 0,
					boxSizing: 'border-box'
				},
				html: {
					width: '100%',
					height: '100%'
				},
				body: {
					width: '100%',
					height: '100%'
				},
				'#root': {
					width: '100%',
					height: '100%'
				},
				a: {
					color: 'inherit',
					textDecoration: 'none',
					cursor: 'crosshair'
				},
			}}
		/>
	);
}

export default GlobalStyles;
