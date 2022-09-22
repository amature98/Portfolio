import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export default function Router() {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about-me', element: <About /> },
		{ path: '/contact-me', element: <Contact /> },
		{ path: '404', element: <NotFound /> },
		{ path: '*', element: <Navigate to='/404' /> },
	]);
}
