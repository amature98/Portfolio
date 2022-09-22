import {
	Alert,
	Box,
	Button,
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
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { alpha, styled } from '@mui/material/styles';
import React, { useRef, useState } from 'react';
import Page from './Page';
import Socials from '../Components/SocialContacts/Socials.jsx';
import { ContactsInfo as Contacts } from '../Components/SocialContacts/Socials';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';

const ContactRootStyle = styled(Paper)(({ theme }) => ({
	width: '80vw',
	height: '100vh',
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
	height: '66.25vh',
	zIndex: 2,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
});
function Contact() {
	const form = useRef();
	const [alert, setAlert] = useState(false);
	const [error, setError] = useState(false);
	const handleSendEmail = (e) => {
		emailjs
			.sendForm(
				'service_9vihmou',
				'template_yv1z8en',
				form.current,
				'twUZoJlEKtjBYk6WV'
			)
			.then((response) => {
				if (response.status === 200) {
					const alertTimer = setInterval(() => {
						setAlert(!alert);
					}, 200);
					setTimeout(() => {
						clearInterval(alertTimer);
					}, 1000);
				} else {
					setError(error);
					const errorTimer = setInterval(() => {
						setError(!error);
					}, 200);
					setTimeout(() => {
						clearInterval(errorTimer);
					}, 1000);
				}
			});
	};
	const contactMeValidationtSchema = Yup.object().shape({
		name: Yup.string("Your name, kind sir/ma'am")
			.required('Do enter your name.')
			.min(3, 'Your name must be atleast 3 characters')
			.max(10, 'Your name must be at most 10 characters'),
		email: Yup.string('Please enter your email address')
			.required('Your email address is required, kindly')
			.email('A valid email address required'),
		message: Yup.string('Your message goes here').required(
			'Your message is missing'
		)
	});
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema: contactMeValidationtSchema,
		onSubmit: () => {
			handleSendEmail();
			formik.resetForm();
		}
	});

	return (
		<Page title='Reach Out'>
			<Container>
				<ContactRootStyle elevation={3}>
					<Grid container>
						<Grid item xs={6}></Grid>
						<Grid item xs={6}>
							<Box
								ref={form}
								component='form'
								onSubmit={formik.handleSubmit}
								sx={{ mt: 8, width: '95%' }}
								noValidate>
								{alert ? (
									<Alert
										variant='filled'
										severity='success'
										icon={<CheckIcon fontSize='inherit' />}>
										Ayee!! Email has been sent successfully.
									</Alert>
								) : (
									<></>
								)}
								{error ? (
									<Alert
										variant='filled'
										severity='error'
										icon={<CheckIcon fontSize='inherit' />}>
										Ooiii! Something is wrong. Try again
									</Alert>
								) : (
									<></>
								)}

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
											name='name'
											color='secondary'
											focused
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
											color='secondary'
											focused
											id='email'
											name='email'
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
											name='message'
											id='message'
											fullWidth
											color='secondary'
											focused
											value={formik.values.message}
											error={
												formik.touched.message &&
												Boolean(formik.errors.message)
											}
											onChange={formik.handleChange}
											helperText={
												formik.touched.message &&
												formik.errors.message
											}
										/>
									</Grid>
									<Grid item>
										<Button
											variant='outlined'
											type='submit'
											color='secondary'
											endIcon={<SendIcon />}>
											Send Email
										</Button>
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
									{contact.icon}
								</ListItemIcon>
								<ListItemText>
									<Typography variant='body2'>
										{contact.title}
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
