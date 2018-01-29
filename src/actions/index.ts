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

export interface Login {
	type: constants.LOGIN;
	username: string;
}

export type LoginAction = Login;

export function login(username: string): Login {
	return {
		type: constants.LOGIN,
		username: username
	};
}

export interface CreateLink {
	type: constants.CREATE_LINK;
	title: string;
	imageUrl: string;
}

export type CreateLinkAction = CreateLink;

export function CreateLink(title: string, imageUrl: string): CreateLinkAction {
	return {
		type: constants.CREATE_LINK,
		title: title,
		imageUrl: imageUrl
	};
}

export type AnyAction = LoginAction | CreateLinkAction | VoteAction;