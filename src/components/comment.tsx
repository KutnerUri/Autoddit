import * as React from 'react';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';
import Tagline from './Tagline';
import CommentsList from './commentsList';
import Vote from './vote';
import CommentCreator from './commentCreator';

export interface ComponentProps {
	id: string;
	text: string;
	submissionTime: string;
	userId: string;
}

export interface Props {
	id: string;
}

export class Comment extends React.PureComponent<ComponentProps> {
	render() {
		const props = this.props;

		return (
			<div className="autoddit-comment">
				<Vote id={props.id} />
				<div>{props.text}</div>
				<Tagline submissionTime={props.submissionTime} userId={props.userId} />
				<CommentCreator ownerId={props.id}/>
				<CommentsList id={props.id} />
			</div>
		);
	}
}

export function mapStateToProps({ comments }: StoreState, { id }: Props): ComponentProps {
	var comment = comments.byId[id];

	return {
		id: id,
		text: comment.text,
		submissionTime: comment.submissionTime,
		userId: comment.userId
	};
}

export default connect(mapStateToProps)(Comment);