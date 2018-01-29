import * as React from 'react';
import StoreState from '../types/storeState';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export interface Props {
	id: string;
}

export interface ComponentProps {
	score: number;
	canUserVote: boolean;
	upVote?: () => void;
	downVote?: () => void;
}

export class ItemVote extends React.PureComponent<ComponentProps, object> {
	render() {
		var props = this.props;

		return (
			<div className="votes">
				{this.props.canUserVote &&
					<button onClick={props.upVote}>up</button>
				}
				{props.score}
				{this.props.canUserVote &&
					<button onClick={props.downVote}>down</button>
				}
			</div>
		);
	}
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