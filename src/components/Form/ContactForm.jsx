import React, { Component } from 'react';
import './style/ContactForm.css';

class ContactForm extends Component {
	state = {
		email: {
			recipient: '',
			sender: '',
			subject: '',
			text: '',
		},
	};

	sendEmail = () => {
		const { email } = this.state;
		fetch(
			`http://192.168.7.162:3001/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`
		).catch((err) => console.error(err, '< error'));
	};

	render() {
		const { email } = this.state;
		return (
			<div className='contact__form'>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label>Name</label>
						<input
							type='text'
							className='form-control'
							value={email?.recipient}
							onChange={(e) =>
								this.setState({
									email: {
										...email,
										recipient: e.target.value,
									},
								})
							}
						/>
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label>Email</label>
						<input
							type='text'
							className='form-control'
							value={email?.sender}
							onChange={(e) =>
								this.setState({
									email: {
										...email,
										sender: e.target.value,
									},
								})
							}
						/>
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label>Subject</label>
						<input
							type='text'
							className='form-control'
							value={email?.subject}
							onChange={(e) =>
								this.setState({
									email: {
										...email,
										subject: e.target.value,
									},
								})
							}
						/>
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<div className='input-block'>
						<label>Message</label>
						<textarea
							rows='3'
							type='text'
							className='form-control textarea'
							value={email?.text}
							onChange={(e) =>
								this.setState({
									email: {
										...email,
										text: e.target.value,
									},
								})
							}></textarea>
					</div>
				</div>
				<div className='contactForm__inputSection'>
					<button
						className='contactForm__btn'
						onClick={this.sendEmail}>
						Send
					</button>
				</div>
			</div>
		);
	}
}
export default ContactForm;
