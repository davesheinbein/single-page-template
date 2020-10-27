const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const app = express();

require('dotenv').config({ path: '.sendgrid.env' });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
	favicon(path.join(__dirname, 'build', 'favicon.ico'))
);
app.use(express.static(path.join(__dirname, 'build')));
// SendGrid Key
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;
const sendGridKey = process.env.SENDGRID_API_KEY;
// console.log(sendGridKey, '<< api key');
sgMail.setApiKey(sendGridKey);
// Welcome page of the express server:
app.get('/', (req, res) => {
	res.send('Welcome to the Sendgrid Emailing Server');
});
// Email Config
app.get('/send-email', (req, res) => {
	// Get Variable query string
	const { recipient, sender, topic, text } = req.query;
	const msg = {
		to: toEmail,
		from: fromEmail,
		subject: sender + ' : ' + topic + ' : ' + recipient,
		text:
			'Name: ' +
			recipient +
			'From: ' +
			sender +
			'Message: ' +
			text,
	};
	// send Email
	sgMail
		.send(msg)
		.then(() =>
			console.log(msg, '<<< msg', text, '<<< text')
		)
		.catch((error) =>
			console.log(error.response.body.errors)
		);
});
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Express app listening on port ${port}`);
});
