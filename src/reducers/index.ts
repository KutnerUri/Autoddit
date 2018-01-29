import voteReducer from './voteReducer';
import loginReducer from './loginReducer';
import linkReducer from './LinkReducer';

import StoreState from '../types/storeState';
import { AnyAction } from '../actions/index';
import { UP_VOTE, DOWN_VOTE, LOGIN, CREATE_LINK } from '../constants/index';

export default function reducer(state: StoreState, action: AnyAction): StoreState {
	switch (action.type) {
		case UP_VOTE:
		case DOWN_VOTE:
			return voteReducer(state, action);
		case LOGIN:
			return loginReducer(state, action);
		case CREATE_LINK:
			return linkReducer(state, action);
		default:
			return state;
	}
}