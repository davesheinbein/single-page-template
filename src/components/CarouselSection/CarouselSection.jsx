import React from 'react';
import Carousel from 'react-elastic-carousel';
import carouselA from '../../images/carouselA.svg';
import carouselB from '../../images/carouselB.svg';
import carouselC from '../../images/carouselC.svg';
import carouselD from '../../images/carouselD.svg';
import carouselE from '../../images/carouselE.svg';
import carouselF from '../../images/carouselF.svg';
import carouselG from '../../images/carouselG.svg';
import carouselH from '../../images/carouselH.svg';
import carouselI from '../../images/carouselI.svg';
import carouselJ from '../../images/carouselJ.svg';
import carouselK from '../../images/carouselK.svg';
import carouselL from '../../images/carouselL.svg';
import './style/CarouselSection.css';

const itemImgs = [
	carouselA,
	carouselB,
	carouselC,
	carouselD,
	carouselE,
	carouselF,
	carouselG,
	carouselH,
	carouselI,
	carouselJ,
	carouselK,
	carouselL,
];

function CarouselSection({ id, title, image }) {
	const items = [
		{
			id: 1,
			title: 'Strawberry',
			src: carouselA,
		},
		{
			id: 2,
			title: 'Hamburger',
			src: carouselB,
		},
		{
			id: 3,
			title: 'Pizza',
			src: carouselC,
		},
		{
			id: 4,
			title: 'Grapes',
			src: carouselD,
		},
		{
			id: 5,
			title: 'Hotdog',
			src: carouselE,
		},
		{
			id: 6,
			title: 'Pizza',
			src: carouselF,
		},
		{
			id: 7,
			title: 'Mushrooms',
			src: carouselG,
		},
		{
			id: 8,
			title: 'Cheese',
			src: carouselH,
		},
		{
			id: 9,
			title: 'Bananas',
			src: carouselI,
		},
		{
			id: 10,
			title: 'Tomatoes',
			src: carouselJ,
		},
		{
			id: 11,
			title: 'Pear',
			src: carouselK,
		},
		{
			id: 12,
			title: 'Blueberries',
			src: carouselL,
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
					</>
				))}
			</Carousel>
		</div>
	);
}

export default CarouselSection;
