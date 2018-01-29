import * as React from 'react';

export interface Props {
	onSubmission: (val: string) => void;
}

export default class InputWithEnter extends React.Component<Props, { val: string }> {
	constructor(props: Props) {
		super(props);
		this.state = { val: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({ val: event.currentTarget.value });
	}

	handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key !== 'Enter') { return; }

		this.handleSubmit();
	}

	handleSubmit() {
		this.props.onSubmission(this.state.val);
		this.setState({val: ''});
	}

	render() {
		return (
			<span>
				<input value={this.state.val} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
				<button onClick={this.handleSubmit}>{this.props.children}</button>
			</span>
		);
	}
}