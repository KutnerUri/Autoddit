import * as React from 'react';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';
import Comment from './comment';

export interface ComponentProps {
	commentIds: string[];
}

export interface Props {
	id: string;
}

interface State {
	collapsed: boolean;
}

export class CommentsList extends React.PureComponent<ComponentProps, State> {
	constructor(props: ComponentProps) {
		super(props);

		this.state = { collapsed: true };
		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse() {
		this.setState({ collapsed: !this.state.collapsed });
	}

	render() {
		const props = this.props;

		const commentsBlocks = this.state.collapsed ? '' : this.renderCommentsList();

		return (
			<div className="autoddit-comments-list">
				<a className="comments-collapse" onClick={this.toggleCollapse} href="javascript:;">
					{this.state.collapsed ? (props.commentIds.length + ' comments') : 'collapse'}
				</a>

				{commentsBlocks}
			</div>
		);
	}

	renderCommentsList() {
		return (
			<div className="autoddit-comments-container">
				{this.props.commentIds.map(id => <Comment key={id} id={id} /> )}
			</div>
		);
	}
}

export function mapStateToProps({ comments }: StoreState, { id }: Props): ComponentProps {
	return {
		commentIds: comments.byOwner[id] || []
	};
}

export default connect(mapStateToProps)(CommentsList);