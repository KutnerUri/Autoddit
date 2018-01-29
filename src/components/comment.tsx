import * as React from 'react';
import Tagline from './Tagline';
import CommentsList from '../containers/commentsList';
import CommentCreator from '../containers/commentCreator';
import Vote from '../containers/itemVote';
import '../styles/comment.css';

export interface Props {
	id: string;
	text: string;
	submissionTime: string;
	userId: string;
}

export default class Comment extends React.PureComponent<Props> {
	render() {
		const props = this.props;

		return (
			<div className="autoddit-comment">
				<Vote id={props.id} />
				<div className="content">
					{props.text}
					<br/>
					<Tagline submissionTime={props.submissionTime} userId={props.userId} />
				<CommentCreator ownerId={props.id}/>
				<CommentsList id={props.id} />
				</div>
			</div>
		);
	}
}