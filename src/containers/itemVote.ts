import ItemVote, { Props as ComponentProps } from '../components/itemVote';
import StoreState from '../types/storeState';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export interface Props {
	id: string;
}

export function mapStateToProps({ votes, userVotes, loggedInUser }: StoreState, { id }: Props): ComponentProps {
	var vote = votes[id] || { score: 0 };
	var hasUserVoted = false;
	if (!!loggedInUser) {
		var userId = loggedInUser.userId;
		var itemVotes = userVotes[id] || {};
		hasUserVoted = !!itemVotes[userId];
	}

	return {
		score: vote.score,
		canUserVote: !hasUserVoted
	};
}

export function mapDispatchToProps(dispatch: Dispatch<actions.VoteAction>, ownProps: Props) {
	return {
		upVote: () => dispatch(actions.upVote(ownProps.id)),
		downVote: () => dispatch(actions.downVote(ownProps.id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemVote);