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
					<span className="fa fa-arrow-up" onClick={props.upVote}/>
				}
				<br/>
				{props.score}
				<br/>
				{this.props.canUserVote &&
					<span className="fa fa-arrow-down" onClick={props.downVote}/>
				}
			</div>
		);
	}
}