import React from 'react';
// Component
import SidebarButton from '../SidebarButton/SidebarButton';
// Images
import logo from '../../images/flowerLogo.png';
// Style
import './style/Header.css';

const Header = (props) => (
	<header className='header'>
		<nav className='header__navigation'>
			<div className='header__logo'>
				<a href='https://github.com/davesheinbein/healthy-template'>
					<img src={logo} alt='logo' />
					<div className='header__logoText'>FRUSHLEY</div>
				</a>
			</div>
			<div className='header__navigationItems'>
				<ul>
					<li>
						<a href='#about'>ABOUT</a>
					</li>
					<li>
						<a href='#product'>PRODUCT</a>
					</li>
					<li>
						<a href='#team'>TEAM</a>
					</li>
					<li>
						<a href='#contact'>CONTACT</a>
					</li>
				</ul>
			</div>
			<div className='header__toggleButton'>
				<SidebarButton
					sidebarClickHandler={props.sidebarClickHandler}
				/>
			</div>
		</nav>
	</header>
);

export default Header;
