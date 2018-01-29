import { CreateCommentAction } from '../actions';
import StoreState, { Comment } from '../types/storeState';
import { CREATE_COMMENT } from '../constants/index';

var idCounter = 20;

export default function CommentReducer(state: StoreState, action: CreateCommentAction): StoreState {
	switch (action.type) {
		case CREATE_COMMENT:
			var newComment = createComment();
			var id = genId();

			// jesus, why didn't I juse use Immutables.js?
			var existingCommentsOrder = state.comments.byOwner[action.ownerId] || [];
			var newCommentsOrder = [id].concat(existingCommentsOrder);

			return {
				...state,
				comments: {
					byId: { ...state.comments.byId, [id]: newComment },
					byOwner: {
						...state.comments.byOwner,
						[action.ownerId]: newCommentsOrder
					},
				}
			};
		default:
			return state;
	}

	function createComment(): Comment {
		var userId = state.loggedInUser.userId;

		return {
			text: action.title,
			submissionTime: (new Date()).toUTCString(),
			userId: userId
		};
	}

	function genId(): string {
		return 'comment' + idCounter++;
	}
}