import { CreateLinkAction } from '../actions';
import StoreState, { Link } from '../types/storeState';
import { CREATE_LINK } from '../constants/index';

var idCounter = 20;

export default function LinkReducer(state: StoreState, action: CreateLinkAction): StoreState {
	switch (action.type) {
		case CREATE_LINK:
			var link = createLink();
			var id = genId();

			return {
				...state,
				links: {
					byId: { ...state.links.byId, [id]: link },
					orderedIds: [id, ...state.links.orderedIds]
				}
			};
		default:
			return state;
	}

	function createLink(): Link {
		var userId = state.loggedInUser.userId;

		return {
			title: action.title,
			imageUrl: action.imageUrl,
			submissionTime: (new Date()).toUTCString(),
			userId: userId
		};
	}

	function genId(): string {
		return 'link' + idCounter++;
	}
}