import { VoteAction } from '../actions';
import StoreState from '../types/storeState';
import { UP_VOTE, DOWN_VOTE } from '../constants/index';

export function reducer(state: StoreState, action: VoteAction): StoreState {
	var newScore;

	switch (action.type) {
		case UP_VOTE:
			newScore = getScore(action.itemType, action.itemId) + 1;
			return { ...state, votes: { [action.itemType]: { [action.itemId]: { score: newScore } } } };
		case DOWN_VOTE:
			newScore = getScore(action.itemType, action.itemId) - 1;
			return { ...state, votes: { [action.itemType]: { [action.itemId]: { score: newScore } } } };
		default:
			return state;
	}

	function getScore(type: string, id: number) {
		return state.votes[type][id].score;
	}
}