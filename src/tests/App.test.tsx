import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StoreState from '../types/storeState';
import reducer from '../reducers/index';
import App from '../App';

it('renders without crashing', () => {
	const div = document.createElement('div');

	var startingModel = getMockModel();
	const store = createStore<StoreState>(reducer, startingModel);

	const dom = (
		<Provider store={store}>
			<App />
		</Provider>
	);

	ReactDOM.render(dom, div);
});

function getMockModel(): StoreState {
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
			orderedIds: ['link1']
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