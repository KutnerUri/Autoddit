import * as React from 'react';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface ComponentProps {
	score: number;
}

export interface Props {
	id: number;
	type: string;
}

export class ItemVote extends React.PureComponent<ComponentProps, object> {
	render() {
		var props = this.props;

		return (
			<div className="votes">{props.score}</div>
		);
	}
}

export function mapStateToProps({ votes }: StoreState, { id, type }: Props): ComponentProps {
	var votesByType = votes[type];

	return votesByType[id];
}

export default connect(mapStateToProps)(ItemVote);