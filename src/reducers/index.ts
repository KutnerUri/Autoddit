import voteReducer from './voteReducer';
import loginReducer from './loginReducer';
import StoreState from '../types/storeState';
import { AnyAction } from '../actions/index';
import { UP_VOTE, DOWN_VOTE, LOGIN } from '../constants/index';

export default function reducer(state: StoreState, action: AnyAction): StoreState {
	switch (action.type) {
		case UP_VOTE:
			return voteReducer(state, action);
		case DOWN_VOTE:
			return voteReducer(state, action);
		case LOGIN:
			return loginReducer(state, action);
		default:
			return state;
	}
}