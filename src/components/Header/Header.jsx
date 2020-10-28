import React from 'react';
import { Link } from 'react-router-dom';
// Component
import SidebarButton from '../SidebarButton/SidebarButton';
// Images
import logo from '../../images/logo.svg';
// Style
import './style/Header.css';

function Header(props) {
	return (
		<header className='header'>
			<nav className='header__navigation'>
				<div className='header__logo'>
					<Link to={'/'}>
						<img src={logo} alt='logo' />
						<div className='header__logoText'>TechCom</div>
					</Link>
				</div>
				<div className='header__navigationItems'>
					<ul>
						<li style={{ display: props.display }}>
							<a href='#about'>ABOUT</a>
						</li>
						<li style={{ display: props.display }}>
							<a href='#product'>PRODUCT</a>
						</li>
						<li style={{ display: props.display }}>
							<a href='#team'>TEAM</a>
						</li>
						<li style={{ display: props.display }}>
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
}

export default Header;
