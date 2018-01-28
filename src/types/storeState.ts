export default interface StoreState {
	links: {
		byId: {
			[index: number]: {
				title: string;
				imageUrl: string;
				submissionTime: string;
				userId: number;
			}
		},
		orderedIds: number[]
	};

	users: {
		[index: number]: {
			username: string
		}
	};

	comments: {
		byLinkIdOrdered: {
			[index: number]: number[]
		},
		byId: {

		}

	};

	votes: {
		[type: string]: {
			[index: number]: { score: number }
		}
	};
}