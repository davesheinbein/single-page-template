import React from 'react';
import './style/Card.css';

function Card({ key, image, name, description }) {
	return (
		<div className='card'>
			<img key={key} src={image} alt='team' />
			<div className='card__name'>{name}</div>
			<div className='card__description'>{description}</div>
		</div>
	);
}

export default Card;
