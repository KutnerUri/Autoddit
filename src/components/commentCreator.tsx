import * as React from 'react';
import Collapser from './collapser';
import InputWithEnter from './inputWithEnter';

export interface Props {
	ownerId: string;
	createComment?: (title: string, imageUrl: string) => void;
}

export default class CommentCreator extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.hanldeSubmit = this.hanldeSubmit.bind(this);
	}

	hanldeSubmit(value: string) {
		if (value === '') {
			return;
		}

		if (!this.props.createComment) { return; }

		this.props.createComment(value, this.props.ownerId);
	}

	render() {
		return (
			<Collapser label="add comment" alt="collapse">
				<InputWithEnter onSubmission={this.hanldeSubmit}>Add</InputWithEnter>
			</Collapser>
		);
	}
}