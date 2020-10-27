import React from 'react';
import './style/Card.css';

function Card({ id, image, name, description }) {
	return (
		<div key={id} className='card'>
			<img src={image} alt='team' />
			<div className='card__name'>{name}</div>
			<div className='card__description'>{description}</div>
		</div>
	);
}

export default Card;
