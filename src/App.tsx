import * as React from 'react';
import './App.css';
import AutodditLink from './containers/autodditLink';
import StoreState from './types/storeState';
import { connect } from 'react-redux';

const logo = require('./logo.svg');

export interface Props {
	links: number[];
}

class App extends React.Component<Props> {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					{this.props.links.map(linkId =>
						(<AutodditLink id={linkId} />))}
				</p>
			</div>
		);
	}
}

export function mapStateToProps({ links }: StoreState): Props {
	return {
		links: links.orderedIds
	};
}

export default connect(mapStateToProps)(App);