import { VoteAction } from '../actions';
import StoreState from '../types/storeState';
import { UP_VOTE, DOWN_VOTE } from '../constants/index';

export default function reducer(state: StoreState, action: VoteAction): StoreState {
	var newScore;

	switch (action.type) {
		case UP_VOTE:
			newScore = getScore(action.itemId) + 1;
			return genNewState(action.itemId, newScore);
		case DOWN_VOTE:
			newScore = getScore(action.itemId) - 1;
			return genNewState(action.itemId, newScore);
		default:
			return state;
	}

	function getScore(id: string): number {
		if (!state.votes[id]) {
			return 0;
		}

		return state.votes[id].score;
	}

	function genNewState(id: string, score: number): StoreState {
		var newState = { ...state };
		newState.votes[id] = { score: score };
		
		const actionUserId = state.loggedInUser.userId;
		const itemVotes = newState.userVotes[id] || {};
		itemVotes[actionUserId] = true;
		newState.userVotes[id] = itemVotes;

		return newState;
	}
}