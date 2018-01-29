import * as React from 'react';

export interface Props {
	score: number;
	canUserVote: boolean;
	upVote?: () => void;
	downVote?: () => void;
}

export default class ItemVote extends React.PureComponent<Props, object> {
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