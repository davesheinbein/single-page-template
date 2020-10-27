// Bar Icons
import foodPyramidIcon from '../../images/foodPyramidIcon.svg';
import appleIcon from '../../images/appleIcon.svg';
import berriesIcon from '../../images/berriesIcon.svg';
import fruitsIcon from '../../images/fruitsIcon.svg';
// Content imgInserts
import herbs from '../../images/contentImg01.jpg';
import smoothie from '../../images/contentImg02.png';
// Users
import userA from '../../images/user01.png';
import userB from '../../images/user02.png';
import userC from '../../images/user03.png';
import userD from '../../images/user04.png';

const icons = [
	foodPyramidIcon,
	appleIcon,
	berriesIcon,
	fruitsIcon,
];

const imgInserts = [herbs, smoothie];

const users = [userA, userB, userC, userD];

export const images = [
	{
		id: 1,
		img: users[0],
		name: 'John Doe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 2,
		img: users[1],
		name: 'Mariyam Mayo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 3,
		img: users[2],
		name: 'Leja Cherry',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 4,
		img: users[3],
		name: 'Lex Mccormick',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
];

const Constants = [
	{
		id: 'home',
		title: 'Frushley',
		subTitle: 'Fizzy refreshing aqua',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'content 0',
	},
	{
		id: 'about',
		title: 'About',
		subTitle: 'Check Us Out',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecA 1',
		img: imgInserts[1],
	},
	{
		id: 'product',
		title: 'Product',
		subTitle: 'Healthy Living',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecB 2',
		img: imgInserts[0],
	},
	{
		id: 'team',
		title: 'Team',
		subTitle: 'Making the dream come true',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecC 3',
	},
	{
		id: 'contact',
		title: 'Contact Us',
		subTitle: 'Get in Touch...',
		description:
			'How do you like to mix your fruity Frushley fizz. Send us your thoughts...',
		className: 'contentSecD 4',
	},
	{
		id: 'bar',
		title: 'Food Pyramid',
		subTitle: 'Analysis',
		description:
			'Remember to follow your personalized reommened diet and get healthier today!',
		className: 'bar 5',
		img: icons[0],
	},
	{
		id: 'barB',
		title: 'Fruit Fuel',
		subTitle: 'Empower yourself',
		description: `Eat Healthy, Drink a lot of water, and Live life to it's fullest with no regrets!`,
		className: 'bar 6',
		img: icons[1],
	},
	{
		id: 'barC',
		title: 'Health Food',
		subTitle: 'Analysis',
		description:
			'Avocados have twice the amount of potassium as bananas and are rich in monounsaturated fat that is burned easily as energy.',
		className: 'bar 7',
		img: icons[2],
	},
	{
		id: 'barD',
		title: 'Health Food',
		subTitle: 'Analysis',
		description: 'Get Healthier today...',
		className: 'bar 8',
		img: icons[3],
	},
];

export default Constants;
