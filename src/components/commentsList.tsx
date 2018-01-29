import * as React from 'react';
import Collapser from './collapser';
import Comment from '../containers/comment';

export interface Props {
	commentIds: string[];
}

export default class CommentsList extends React.PureComponent<Props> {
	render() {
		const props = this.props;

		return (
			<Collapser className="autoddit-comments-list" label={props.commentIds.length + ' comments'} alt="collapse">
				<div className="autoddit-comments-container">
					{this.props.commentIds.map(id => <Comment key={id} id={id} /> )}
				</div>
			</Collapser>
		);
	}
}