import * as React from 'react';
import Collapser from './collapser';

export interface Props {
	createLink: (title: string, imageUrl: string) => void;
}

export default class LinkCreator extends React.Component<Props, { text: string, imageUrl: string }> {
	constructor(props: Props) {
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