// Bar Icons
import logo from '../../images/logo.svg';
import foodPyramidIcon from '../../images/foodPyramidIcon.svg';
// Content imgInserts
import imgA from '../../images/imgA.jpg';
import imgB from '../../images/imgB.jpg';
// Users
import userA from '../../images/user01.jpg';
import userB from '../../images/user02.jpg';
import userC from '../../images/user03.jpg';
import userD from '../../images/user04.jpg';

const icons = [logo, foodPyramidIcon];

const imgInserts = [imgA, imgB];

const users = [userA, userB, userC, userD];

export const images = [
	{
		id: 1,
		img: users[0],
		name: 'Alex Paine',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 2,
		img: users[1],
		name: 'Lacie Chandler',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 3,
		img: users[2],
		name: 'Ida Cummings',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 4,
		img: users[3],
		name: 'Ceri Rivera',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
];

const Constants = [
	{
		id: 'home',
		title: 'TechCom',
		subTitle: 'Fizzy refreshing aqua',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'content 0',
	},
	{
		id: 'about',
		title: 'About',
		subTitle: 'Technology...',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecA 1',
		img: imgInserts[0],
	},
	{
		id: 'product',
		title: 'Product',
		subTitle: 'Technichal Specifications',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecB 2',
		img: imgInserts[1],
	},
	{
		id: 'team',
		title: 'Team',
		subTitle: 'Demonstrating Excellence',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecC 3',
	},
	{
		id: 'contact',
		title: 'Contact Us',
		subTitle: 'Get in Touch...',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		className: 'contentSecD 4',
	},
	{
		id: 'bar',
		title: 'Lorem ipsum',
		subTitle: 'Lorem ipsum dolor',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non.',
		className: 'bar 5',
		img: icons[0],
	},
	{
		id: 'barB',
		title: 'Lorem ipsum',
		subTitle: 'Lorem ipsum dolor',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non.`,
		className: 'bar 6',
		img: icons[0],
	},
	{
		id: 'barC',
		title: 'Lorem ipsum',
		subTitle: 'Lorem ipsum dolor',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non.',
		className: 'bar 7',
		img: icons[0],
	},
	{
		id: 'barD',
		title: 'Lorem ipsum',
		subTitle: 'Lorem ipsum dolor',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non.',
		className: 'bar 8',
		img: icons[0],
	},
];

export default Constants;
