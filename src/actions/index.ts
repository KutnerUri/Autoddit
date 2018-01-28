import * as constants from '../constants/index';

export interface UpVote {
	type: constants.UP_VOTE;
	itemType: string;
	itemId: number;
}

export interface DownVote {
	type: constants.DOWN_VOTE;
	itemType: string;
	itemId: number;
}

export type VoteAction = UpVote | DownVote;

export function upVote(type: string, id: number): UpVote {
	return {
		type: constants.UP_VOTE,
		itemType: type,
		itemId: id
	};
}

export function downVote(type: string, id: number): DownVote {
	return {
		type: constants.DOWN_VOTE,
		itemType: type,
		itemId: id
	};
}