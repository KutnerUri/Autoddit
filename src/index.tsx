import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { autoddit } from './reducers/index';
import StoreState from './types/storeState';
import { Provider } from 'react-redux';

const startingModel = {
	links: {
		byId: {
			1: {
				title: 'hello',
				imageUrl: 'https://www.visit-dorset.com/dbimgs/icon_instagram(1).png',
				submissionTime: 'Jan 22, 2017 08:43',
				userId: 5
			}
		},
		orderedIds: [1, 1]
	},
	users: {
		5: { username: 'bugatti' }
	},
	comments: {
		byLinkIdOrdered: {
			1: [6, 2]
		},
		byId: {
			6: {},
			2: {}
		}
	},
	votes: {
		links: {
			1: { score: 7 }
		}
	}
};

const store = createStore<StoreState>(autoddit, startingModel);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
