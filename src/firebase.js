import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAU2z5MGcHOX2mhSpNrAxZ91LKD3CEubYM',
	authDomain: 'healthy-template.firebaseapp.com',
	databaseURL: 'https://healthy-template.firebaseio.com',
	projectId: 'healthy-template',
	storageBucket: 'healthy-template.appspot.com',
	messagingSenderId: '906788854789',
	appId: '1:906788854789:web:eeb7059df00d3895ced06c',
	measurementId: 'G-B1GP3V8DCP',
};

// Set up firebase configurations
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creates a db for file storage
const db = firebaseApp.firestore();

// allows for user authentication
const auth = firebase.auth();

export { db, auth };
