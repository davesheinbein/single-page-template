import React from 'react';
import './style/Bar.css';

function Bar({
	id,
	title,
	subTitle,
	description,
	className,
	img,
}) {
	return (
		<div className={className} id={id}>
			<div className='bar__logo'>
				<img
					src={img}
					className='bar__logoImg'
					alt='icon'
				/>

				<div className='bar__logoTextContainer'>
					<div className='bar__logoText'>{title}</div>
					<div className='bar__logoSubText'>{subTitle}</div>
				</div>
			</div>
			<div className='bar__description'>
				<div className='bar__descriptionText'>
					{description}
				</div>
			</div>
		</div>
	);
}

export default Bar;
