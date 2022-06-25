import {
	Box,
	Card,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	TextField,
	Typography
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';
import Page from './Page';
import Socials from '../Components/SocialContacts/Socials.jsx';
import { ContactsInfo as Contacts } from '../Components/SocialContacts/Socials';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ContactRootStyle = styled(Paper)(({ theme }) => ({
	width: '80vw',
	height: '80vh',
	margin: 'auto',
	zIndex: 1,
	backgroundColor: alpha(
		theme.palette.background.default,
		theme.palette.action.hoverOpacity
	)
}));

const ContactSideStyle = styled(Card)({
	position: 'absolute',
	top: '20%',
	width: '40%',
	height: '60vh',
	zIndex: 2,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
});
function Contact() {
	const contacMeValidationtSchema = Yup.object().shape({
		name: Yup.string("Your name, kind sir/ma'am")
			.required('Do enter your name.')
			.min(4, 'Your name must be atleast 3 characters')
			.max(10, 'Your name must be at most 10 characters'),
		email: Yup.string('Please enter your email address')
			.required('Your email address is required, kindly')
			.email('A valid email address required')
	});
	const formik = useFormik({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: contacMeValidationtSchema
	});
	return (
		<Page title='Reach Out'>
			<Container>
				<ContactRootStyle elevation={3}>
					<Grid container>
						<Grid item xs={6}></Grid>
						<Grid item xs={6}>
							<Box
								component='form'
								sx={{ mt: 8, width: '95%' }}
								noValidate>
								<Typography
									variant='h4'
									sx={{
										color: 'text.secondary',
										p: 2
									}}>
									Get In Touch
								</Typography>
								<Grid
									container
									spacing={2}
									direction='column'
									justifyContent='space-evenly'
									alignItems='stretch'>
									<Grid item xs>
										<TextField
											autoComplete='name'
											fullWidth
											required
											variant='outlined'
											id='name'
											label='Your Name'
											value={formik.values.name}
											onChange={formik.handleChange}
											helperText={
												formik.touched.name &&
												formik.errors.name
											}
											error={
												formik.touched.name &&
												Boolean(formik.errors.name)
											}
										/>
									</Grid>
									<Grid item>
										<TextField
											autoComplete='email-address'
											fullWidth
											required
											variant='outlined'
											id='email'
											label='Your Email Address'
											value={formik.values.email}
											onChange={formik.handleChange}
											helperText={
												formik.touched.email &&
												formik.errors.email
											}
											error={
												formik.touched.email &&
												Boolean(formik.errors.email)
											}
										/>
									</Grid>
									<Grid item>
										<TextField
											variant='outlined'
											label='Feel free to drop me a line'
											multiline
											rows={5}
											required
											id='textarea'
											fullWidth
										/>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</ContactRootStyle>
				<ContactSideStyle elevation={6}>
					<Typography
						variant='h4'
						sx={{
							color: 'text.secondary',
							pt: 2
						}}>
						Reach Out
					</Typography>
					<List>
						{Contacts.map((contact) => (
							<ListItem key={contact.title}>
								<ListItemIcon
									sx={{
										color: 'currentColor'
									}}>
									{' '}
									{contact.icon}{' '}
								</ListItemIcon>
								<ListItemText>
									<Typography variant='body2'>
										{' '}
										{contact.title}{' '}
									</Typography>
								</ListItemText>
							</ListItem>
						))}
					</List>
					<Socials />
				</ContactSideStyle>
			</Container>
		</Page>
	);
}

export default Contact;
