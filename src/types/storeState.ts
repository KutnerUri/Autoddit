export interface Link {
	title: string;
	imageUrl: string;
	submissionTime: string;
	userId: string;
}

export default interface StoreState {
	loggedInUser?: {
		userId: string;
	};

	links: {
		byId: {
			[index: string]: Link;
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