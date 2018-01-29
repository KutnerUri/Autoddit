import * as React from 'react';
import InputWithEnter from './inputWithEnter';

export interface Props {
	ownerId: string;
	createComment?: (title: string, imageUrl: string) => void;
}

export default class CommentCreator extends React.Component<Props, { collapsed: boolean }> {
	constructor(props: Props) {
		super(props);

		this.state = this.createDefaultState();

		this.hanldeSubmit = this.hanldeSubmit.bind(this);
		this.toggleCollapse = this.toggleCollapse.bind(this);		
	}

	hanldeSubmit(value: string) {
		if (value === '') {
			return;
		}

		if (!this.props.createComment) { return; }

		this.props.createComment(value, this.props.ownerId);
		this.setState(this.createDefaultState());
	}

	createDefaultState() {
		return { collapsed: true };
	}

	toggleCollapse() {
		this.setState(prevState => ({ collapsed: !prevState.collapsed }));
	}

	render() {
		return (
			<div className="comment-creator">
				<a className="label" onClick={this.toggleCollapse} href="javascript:;">
					{this.state.collapsed ? 'add comment' : 'collapse'}
				</a>
				
				{!this.state.collapsed &&
					<InputWithEnter onSubmission={this.hanldeSubmit}>Add</InputWithEnter>
				}
			</div>
		);
	}
}