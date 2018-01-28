import * as React from 'react';
import StoreState from '../types/storeState';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export interface ComponentProps {
	score: number;
	upVote?: () => void;
	downVote?: () => void;
}

export interface Props {
	id: number;
	type: string;
}

export class ItemVote extends React.PureComponent<ComponentProps, object> {
	render() {
		var props = this.props;

		return (
			<div className="votes">
				<button onClick={props.upVote}>up</button>
				{props.score}
				<button onClick={props.downVote}>down</button>
			</div>
		);
	}
}

export function mapStateToProps({ votes }: StoreState, { id, type }: Props): ComponentProps {
	var votesByType = votes[type];

	return votesByType[id];
}

export function mapDispatchToProps(dispatch: Dispatch<actions.VoteAction>, ownProps: Props) {
	return {
		upVote: () => dispatch(actions.upVote(ownProps.type, ownProps.id)),
		downVote: () => dispatch(actions.downVote(ownProps.type, ownProps.id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemVote);