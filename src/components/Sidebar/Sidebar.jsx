import React from 'react';
// icons
import logo from '../../images/logo.svg';
import './style/Sidebar.css';

const Sidebar = (props) => {
	let sidebarClasses = ['sidebar'];
	if (props.show) {
		sidebarClasses = ['sidebar open'];
	}
	return (
		<nav className={sidebarClasses}>
			<div className='sidebar__logo'>
				<a href='https://github.com/davesheinbein/healthy-template'>
					<img src={logo} alt='logo' />
					<div className='sidebar__logoText'>TechCom</div>
				</a>
			</div>
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
		</nav>
	);
};

export default Sidebar;
