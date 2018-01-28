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

function getMockModel(){
	return {
		links: {
			byId: {
				1: {
					title: 'hello',
					imageUrl: 'https://www.visit-dorset.com/dbimgs/icon_instagram(1).png',
					submissionTime: 'Jan 22, 2017 08:43',
					userId: 5
				}
			},
			orderedIds: [1]
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
}