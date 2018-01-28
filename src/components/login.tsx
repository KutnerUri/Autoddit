import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';
import InputWithEnter from './inputWithEnter';

interface Props {
	login?: (username: string) => void;
}

class Login extends React.Component<Props, { username: string }> {
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

export function mapDispatchToProps(dispatch: Dispatch<actions.Login>) {
	return {
		login: (username) => dispatch(actions.login(username)),
	};
}

export default connect(undefined, mapDispatchToProps)(Login);