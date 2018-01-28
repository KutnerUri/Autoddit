import reducer from '../../reducers/index';
import * as constants from '../../constants/index';
import generateMockState from '../mocks/stateMock';

const voteItemId = 'someItem5';

it('UP_VOTE should increment score, when it exists', function () {
	var state = generateMockState();
	state.votes = { [voteItemId]: { score: 1 } };

	var result = reducer(state, {
		type: constants.UP_VOTE,
		itemId: voteItemId
	});

	var expectedState = {...state};
	expectedState.votes[voteItemId].score = 2;
	expect(result).toEqual(expectedState);
});

it('DOWN_VOTE should dencrement score, when it exists', function () {
	var state = generateMockState();
	state.votes = { [voteItemId]: { score: 2 } };

	var result = reducer(state, {
		type: constants.DOWN_VOTE,
		itemId: voteItemId
	});

	var expectedState = {...state};
	expectedState.votes[voteItemId].score = 1;
	expect(result).toEqual(expectedState);
});