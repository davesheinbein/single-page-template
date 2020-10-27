import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App/App';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import { StateProvider } from './components/StateProvider/StateProvider';
import reducer, { initialState } from './reducer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<StateProvider
				initialState={initialState}
				reducer={reducer}>
				<Route
					render={({ history }) => (
						<App history={history} />
					)}
				/>
			</StateProvider>
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
