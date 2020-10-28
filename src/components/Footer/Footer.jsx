import React from 'react';
import logo from '../../images/logo.svg';
import './style/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='footer__logo'>
					<div className='footer__imgContainer'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='footer__logoText'>TechCom</div>
				</div>
				<div className='footer__copyright'>
					<div className='footer__copyrightText'>
						COPYRIGHT 2020. ALL RIGHTS RESERVED.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
