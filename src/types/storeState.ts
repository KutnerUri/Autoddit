export default interface StoreState {
	loggedInUser?: {
		username: string;
	};

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
		byId: {
			[index: string]: {
				text: string;
				submissionTime: string;
				userId: string;
			}
		}
	};

	votes: {
		[index: string]: { score: number }
	};
}