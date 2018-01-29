import * as React from 'react';
import InputWithEnter from './inputWithEnter';

export interface Props {
	login?: (username: string) => void;
}

export default class Login extends React.Component<Props, { username: string }> {
	constructor(props: Props) {
		super(props);

		this.handleSubmission = this.handleSubmission.bind(this);
	}

	handleSubmission(val: string) {
		this.props.login(val);
	}

	render() {
		return (
			<div>
				<h2>Please login:</h2>
				<span>username:</span>
				<InputWithEnter onSubmission={this.handleSubmission}>
					Submit
				</InputWithEnter>
			</div>
		);
	}
}