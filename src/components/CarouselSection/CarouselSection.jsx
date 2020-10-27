import React from 'react';
import Carousel from 'react-elastic-carousel';
import carouselA from '../../images/food00.svg';
import carouselB from '../../images/food01.svg';
import carouselC from '../../images/food02.svg';
import carouselD from '../../images/food03.svg';
import carouselE from '../../images/food04.svg';
import carouselF from '../../images/food05.svg';
import carouselG from '../../images/food06.svg';
import carouselH from '../../images/food07.svg';
import carouselI from '../../images/food08.svg';
import carouselJ from '../../images/food09.svg';
import carouselK from '../../images/food10.svg';
import carouselL from '../../images/food11.svg';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/CarouselSection.css';

function CarouselSection({ id, title, image, price }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		// this is where dispatch is called
		dispatch({
			// this is were the action type is connected to the reducer
			type: 'ADD_TO_BASKET',
			// here is where the action.item is defined
			// the id, title, image, price, rating are being passed down through props
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
			},
		});
	};

	const items = [
		{
			id: 1,
			title: 'Strawberry',
			src: carouselA,
			price: '$3.99',
		},
		{
			id: 2,
			title: 'Hamburger',
			src: carouselB,
			price: '$10.99',
		},
		{
			id: 3,
			title: 'Pizza',
			src: carouselC,
			price: '$2.99',
		},
		{
			id: 4,
			title: 'Grapes',
			src: carouselD,
			price: '$1.98',
		},
		{
			id: 5,
			title: 'Hotdog',
			src: carouselE,
			price: '$2.50',
		},
		{
			id: 6,
			title: 'Pizza',
			src: carouselF,
			price: '$14.99',
		},
		{
			id: 7,
			title: 'Mushrooms',
			src: carouselG,
			price: '$1.97',
		},
		{
			id: 8,
			title: 'Cheese',
			src: carouselH,
			price: '$4.98',
		},
		{
			id: 9,
			title: 'Bananas',
			src: carouselI,
			price: '$3.45',
		},
		{
			id: 10,
			title: 'Tomatoes',
			src: carouselJ,
			price: '$2.95',
		},
		{
			id: 11,
			title: 'Pear',
			src: carouselK,
			price: '$2.95',
		},
		{
			id: 12,
			title: 'Blueberries',
			src: carouselL,
			price: '$1.99',
		},
	];

	return (
		<div className='CarouselSection'>
			<Carousel
				itemsToScroll={4}
				itemsToShow={4}
				enableAutoPlay={true}
				autoPlaySpeed={10000}
				showArrows={false}>
				{items.map((item) => (
					<>
						<img
							key={item.id}
							src={item.src}
							alt={item.title}
						/>
						<div className='CarouselSection__price'>
							{item.price}
						</div>
						<button onClick={addToBasket}>
							Add to Cart
						</button>
					</>
				))}
			</Carousel>
		</div>
	);
}

export default CarouselSection;
