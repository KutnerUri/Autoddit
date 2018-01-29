import * as React from 'react';

export interface Props {
	createLink: (title: string, imageUrl: string) => void;
}
export interface State {
	text: string;
	imageUrl: string;
	collapsed: boolean;
}

export default class LinkCreator extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = this.createEmptyState();

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.hanldeSubmit = this.hanldeSubmit.bind(this);
		this.toggleCollapse = this.toggleCollapse.bind(this);
		this.renderContent = this.renderContent.bind(this);
	}

	handleTextChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({ text: event.currentTarget.value });
	}
	handleImageChange(event: React.FormEvent<HTMLInputElement>) {
		this.setState({ imageUrl: event.currentTarget.value });
	}
	toggleCollapse() {
		this.setState(prevState => ({ collapsed: !prevState.collapsed }));
	}

	hanldeSubmit() {
		this.props.createLink(this.state.text, this.state.imageUrl);
		this.setState(this.createEmptyState());
	}

	createEmptyState() {
		return { text: '', imageUrl: '', collapsed: true };
	}

	render() {
		return (
			<div>
				<div>
					<a onClick={this.toggleCollapse} href="javascript:;">
						{this.state.collapsed ? 'add link!' : 'collapse'}
					</a>
				</div>
				{!this.state.collapsed && this.renderContent()}
			</div>
		);
	}

	renderContent() {
		return (
			<div>
				(excitingly) add a new link!
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