const idGen = () => {
	const id = Math.floor(Math.random() * 100);
	return id;
};
export const skills = [
	{ title: 'Web Development', id: idGen },
	{ title: 'Graphic Design', id: idGen },
	{ title: 'Art Enthusiast', id: idGen }
];

export const webDevSkills = [
	{
		title: 'HTML/CSS',
		level: 90,
		id: idGen
	},
	{
		title: 'Javascript',
		level: 80,
		id: idGen
	},
	{
		title: 'React Framework',
		level: 50,
		id: idGen
	},
	{
		title: 'Material UI',
		level: 90,
		id: idGen
	},
	{
		title: 'Node.js',
		level: 75,
		id: idGen
	},
	{
		title: 'MongoDB',
		level: 30,
		id: idGen
	},
	{
		title: 'Python',
		level: 25,
		id: idGen
	}
];
