import { VoteAction } from '../actions';
import StoreState from '../types/storeState';
import { UP_VOTE, DOWN_VOTE } from '../constants/index';

export default function reducer(state: StoreState, action: VoteAction): StoreState {
	var newScore;

	switch (action.type) {
		case UP_VOTE:
			newScore = getScore(action.itemId) + 1;
			return { ...state, votes: { [action.itemId]: { score: newScore } } };
		case DOWN_VOTE:
			newScore = getScore(action.itemId) - 1;
			return { ...state, votes: { [action.itemId]: { score: newScore } } };
		default:
			return state;
	}

	function getScore(id: string) {
		return state.votes[id].score;
	}
}