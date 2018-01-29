import * as React from 'react';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';
import Comment from './comment';
import Collapser from './collapser';

export interface ComponentProps {
	commentIds: string[];
}

export interface Props {
	id: string;
}

export class CommentsList extends React.PureComponent<ComponentProps> {
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

export function mapStateToProps({ comments }: StoreState, { id }: Props): ComponentProps {
	return {
		commentIds: comments.byOwner[id] || []
	};
}

export default connect(mapStateToProps)(CommentsList);