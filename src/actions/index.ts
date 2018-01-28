import * as constants from '../constants/index';

export interface UpVote {
	type: constants.UP_VOTE;
	itemId: string;
}

export interface DownVote {
	type: constants.DOWN_VOTE;
	itemId: string;
}

export type VoteAction = UpVote | DownVote;

export function upVote(id: string): UpVote {
	return {
		type: constants.UP_VOTE,
		itemId: id
	};
}

export function downVote(id: string): DownVote {
	return {
		type: constants.DOWN_VOTE,
		itemId: id
	};
}