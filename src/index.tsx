import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import reducer from './reducers/index';
import StoreState from './types/storeState';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(reducer, genDefaultModel());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();

function genDefaultModel(): StoreState {
	return {
		links: {
			byId: {
				'link1': {
					title: 'hello',
					imageUrl: 'https://www.visit-dorset.com/dbimgs/icon_instagram(1).png',
					submissionTime: 'Jan 22, 2017 08:43',
					userId: 'user5'
				}
			},
			orderedIds: ['link1', 'link1']
		},
		users: {
			'user5': { username: 'bugatti' }
		},
		comments: {
			byOwner: {
				'link1': ['comment6', 'comment2']
			},
			byId: {
				'comment6': {
					text: 'great link',
					submissionTime: 'Jan 22, 2017 08:43',
					userId: 'user5'
				},
				'comment2': {
					text: 'really, I mean it',
					submissionTime: 'Jan 22, 2017 08:43',
					userId: 'user5'
				}
			}
		},
		votes: {
			'link1': { score: 7 }
		}
	};
}