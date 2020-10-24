import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SidebarBackdrop from '../../components/SidebarBackdrop/SidebarBackdrop';
import Section from '../../components/Section/Section';
import './stlye/App.css';

class App extends Component {
	/*--- State ---*/
	state = {
		sidebarOpen: false,
	};

	/*--- Handle Methods ---*/
	sidebarClickHandler = () => {
		this.setState((prevState) => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};

	sidebarBackdropClickHandler = () => {
		this.setState({ sidebarOpen: false });
	};
	/*--- Lifecycle Methods ---*/
	render() {
		let sidebarBackdrop;

		if (this.state.sidebarOpen) {
			sidebarBackdrop = (
				<SidebarBackdrop
					sidebarBackdropClickHandler={
						this.sidebarBackdropClickHandler
					}
				/>
			);
		}

		return (
			<div className='app'>
				<Header
					sidebarClickHandler={this.sidebarClickHandler}
				/>
				<Section>Hi</Section>
			</div>
		);
	}
}
export default App;
