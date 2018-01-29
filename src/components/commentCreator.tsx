import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Collapser from './collapser';
import * as actions from '../actions/index';
import InputWithEnter from './inputWithEnter';
import StoreState from '../types/storeState';

export interface ComponentProps {
	ownerId: string;
	createComment?: (title: string, imageUrl: string) => void;
}

export class CommentCreator extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
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

export interface Props {
	ownerId: string;
}

export function mapStateToProps(storeState: StoreState, ownProps: Props): ComponentProps {
	return ownProps;
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CreateComment>) {
	return {
		createComment: (title: string, ownerId: string) => dispatch(actions.CreateComment(title, ownerId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreator);