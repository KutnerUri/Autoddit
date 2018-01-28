export default interface StoreState {
	links: {
		byId: {
			[index: string]: {
				title: string;
				imageUrl: string;
				submissionTime: string;
				userId: string;
			}
		},
		orderedIds: string[]
	};

	users: {
		[index: string]: {
			username: string
		}
	};

	comments: {
		byOwner: {
			[index: string]: string[]
		},
		byId: {}

	};

	votes: {
		[index: string]: { score: number }
	};
}