import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider,
	createTheme,
	StyledEngineProvider
} from '@mui/material/styles';
import palette from './Palette';
import typography from './Typography';

const ThemeConfig = ({ children }) => {
	const themeOptions = useMemo(
		() => ({
			palette,
			typography
		}),
		[]
	);

	const theme = createTheme(themeOptions);
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

ThemeConfig.propTypes = {
    children: PropTypes.node
}

export default ThemeConfig