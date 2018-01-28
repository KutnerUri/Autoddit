export default interface StoreState {
	links: {
		byId: {
			[index: number]: {
				title: string;
				imageUrl: string;
				submissionTime: string;
				userId: string;
			}
		},
		orderedIds: number[]
	};

	users: {
		[index: string]: {
			username: string
		}
	};

	comments: {

	};
}