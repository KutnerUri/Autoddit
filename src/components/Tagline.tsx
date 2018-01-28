import * as React from 'react';
import Username from '../containers/username';

export interface Props {
	submissionTime: string;
	userId: string;
}

export default class Tagline extends React.PureComponent<Props, object> {
	render() {
		return (
			<p className="tagline">Submitted on {this.props.submissionTime} by <Username id={this.props.userId} /></p>
		);
	}
}