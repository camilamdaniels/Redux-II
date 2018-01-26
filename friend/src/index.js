import React from 'react';
import ReactDOM from 'react-dom';
import friendsApp from './reducers/index';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(friendsApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);