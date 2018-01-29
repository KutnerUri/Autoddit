import { LoginAction } from '../actions';
import StoreState from '../types/storeState';
import { LOGIN } from '../constants/index';

export default function reducer(state: StoreState, action: LoginAction): StoreState {
	if (action.type !== LOGIN) {
		return state;
	}

	if (action.username === '') {
		return state;
	}

	return {
		...state,
		loggedInUser: { userId: action.username },
		users: {
			...state.users,
			[action.username]: {
				username: action.username
			}
		}
	};
}