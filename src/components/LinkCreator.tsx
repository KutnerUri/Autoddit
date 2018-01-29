import * as React from 'react';
import '../styles/linkCreator.css';

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
						{this.state.collapsed ? 'add a link!' : 'collapse'}
					</a>
				</div>
				{!this.state.collapsed && this.renderContent()}
			</div>
		);
	}

	renderContent() {
		return (
			<div className="link-creator">
				(excitingly) add a new link!
				<div className="input-area">
					<span className="label">text: </span>
					<input value={this.state.text} onChange={this.handleTextChange} />
					<br/>
					<span className="label">image link: </span>
					<input value={this.state.imageUrl} onChange={this.handleImageChange} />
					<br/>
					<button onClick={this.hanldeSubmit}>
						<i className="fa fa-plus-circle" aria-hidden="true"/>
						add 
					</button>
					
					{LinkPreview(this.state.text, this.state.imageUrl)}
				</div>

			</div>
		);
	}
}

function LinkPreview(text: string, imageUrl: string) {
	return (
		<div className="preview-area">
			<img className="link-img" src={imageUrl} />
			<span>{text}</span>
		</div>
	);
}