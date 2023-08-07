import React from 'react';
import { GlobalStyles as GlobalThemeStyles} from '@mui/material';

function GlobalStyles() {
	return (
		<GlobalThemeStyles
			styles={{
				"*": {
					margin: 0,
					padding: 0,
					boxSizing: "border-box",
				},
				html: {
					width: "100%",
					height: "100%",
					scrollBehavior: 'smooth'
				},
				body: {
					width: "100%",
					height: "100%",
				},
				"#root": {
					width: "100%",
					height: "100%",
				},
				a: {
					color: "inherit",
					textDecoration: "none",
				},
				span: {
					fontFamily: "Major Mono Display, monospace",
				},
			}}
		/>
	);
}

export default GlobalStyles;
