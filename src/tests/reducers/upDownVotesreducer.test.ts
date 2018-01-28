import reducer from '../../reducers/index';
import * as constants from '../../constants/index';
import generateMockState from '../mocks/stateMock';

const voteCategory = "voteCategory";
const voteItemId = 5;

it("UP_VOTE should increment score, when it exists", function () {
	var state = generateMockState();
	state.votes[voteCategory] = { [voteItemId]: { score: 1 } };

	var result = reducer(state, {
		type: constants.UP_VOTE,
		itemType: voteCategory,
		itemId: voteItemId
	});

	var expectedState = {...state};
	expectedState.votes[voteCategory][voteItemId].score = 2;
	expect(result).toEqual(expectedState);
});

it("DOWN_VOTE should dencrement score, when it exists", function () {
	var state = generateMockState();
	state.votes[voteCategory] = { [voteItemId]: { score: 2 } };

	var result = reducer(state, {
		type: constants.DOWN_VOTE,
		itemType: voteCategory,
		itemId: voteItemId
	});

	var expectedState = {...state};
	expectedState.votes[voteCategory][voteItemId].score = 1;
	expect(result).toEqual(expectedState);
});