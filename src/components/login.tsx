import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

interface Props {
	login?: (username: string) => void;
}

class Login extends React.Component<Props, { username: string }> {
	constructor(props: Props) {
		super(props);

		this.state = { username: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
	}

	handleChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({username: event.currentTarget.value});
	}

	handleSubmission() {
		this.props.login(this.state.username);
	}

	render() {
		return (
			<div>
				<h2>Please login:</h2>
				<span>username:</span>
				<input value={this.state.username} onChange={this.handleChange} />
				<button onClick={this.handleSubmission}>submit</button>
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