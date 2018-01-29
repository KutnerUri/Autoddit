import * as React from 'react';
import Collapser from './collapser';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export interface ComponentProps {
	createLink: (title: string, imageUrl: string) => void;
}

export class LinkCreator extends React.Component<ComponentProps, { text: string, imageUrl: string }> {
	constructor(props: ComponentProps) {
		super(props);

		this.state = {
			text: '',
			imageUrl: ''
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.hanldeSubmit = this.hanldeSubmit.bind(this);
	}

	handleTextChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({ text: event.currentTarget.value });
	}
	handleImageChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({ imageUrl: event.currentTarget.value });
	}

	hanldeSubmit() {
		this.props.createLink(this.state.text, this.state.imageUrl);
	}

	render() {
		return (
			<Collapser label="add link!" alt="collapse">
				<div>
					<div>
						(excitingly) add a new link!
					</div>

					<div>
						text:
						<input value={this.state.text} onChange={this.handleTextChange} />
					</div>
					<div>
						image link:
						<input value={this.state.imageUrl} onChange={this.handleImageChange} />
					</div>

					{LinkPreview(this.state.text, this.state.imageUrl)}

					<button onClick={this.hanldeSubmit}>add</button>
				</div>
			</Collapser>
		);
	}
}

function LinkPreview(text: string, imageUrl: string) {
	return (
		<div>
			<img src={imageUrl} />
			<div>{text}</div>
		</div>
	);
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CreateLink>): ComponentProps {
	return {
		createLink: (title: string, imageUrl: string) => dispatch(actions.CreateLink(title, imageUrl))
	};
}

export default connect(undefined, mapDispatchToProps)(LinkCreator);