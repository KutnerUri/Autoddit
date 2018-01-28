import * as React from 'react';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface ComponentProps {
	commentIds: number[];
}

export interface Props {
	type: number;
	id: number;
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

		return (
			<div className="autoddit-comments-list">
				<a className="comments-collapse" onClick={this.toggleCollapse} href="javascript:;">
					{this.state.collapsed ? (props.commentIds.length + ' comments') : 'collapse'}
				</a>
			</div>
		);
	}
}

export function mapStateToProps({ comments }: StoreState, { id, type }: Props): ComponentProps {
	var commentsByType = comments.byOwner[type] || {};

	return {
		commentIds: commentsByType[id]
	};
}

export default connect(mapStateToProps)(CommentsList);