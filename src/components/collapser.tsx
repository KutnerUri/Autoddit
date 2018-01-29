import * as React from 'react';

export interface Props {
	label: string;
	alt: string;
	className?: string; 
}

export default class Collapser extends React.Component<Props, { collapsed: boolean }> {
	constructor(props: Props) {
		super(props);
		this.state = { collapsed: true };

		this.toggleCollapse = this.toggleCollapse.bind(this);
	}
	toggleCollapse() {
		this.setState(prevState => ({ collapsed: !prevState.collapsed }));
	}

	render() {
		return (
			<div className={this.props.className}>
				<a onClick={this.toggleCollapse} href="javascript:;">
					{this.state.collapsed ? this.props.label : this.props.alt}
				</a>
				{this.state.collapsed ? '' : this.props.children}
			</div>
		);
	}
}