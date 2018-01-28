import IStoreState from '../../types/storeState'

export default function getMockedStoreState(): IStoreState {
	return {
		links: {
			byId: {},
			orderedIds: []
		},
		users: {},
		comments: {
			byLinkIdOrdered: {},
			byId: {}
		},
		votes: {
		}
	}
}