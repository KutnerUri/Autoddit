import * as React from 'react';
import './App.css';
import AutodditLink from './containers/autodditLink';
import Login from './components/login';
import StoreState from './types/storeState';
import { connect } from 'react-redux';
import LinkCreator from './components/LinkCreator';

const logo = require('./logo.svg');

export interface Props {
	loggedInUser?: {
		userId: string;
	};
	links: string[];
}

class App extends React.Component<Props> {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				{this.props.loggedInUser ? this.renderLinks() : <Login />}
			</div>
		);
	}

	renderLinks() {
		return (
			<div className="App-intro">
				<LinkCreator />
				{this.props.links.map(linkId =>
					(<AutodditLink key={linkId} id={linkId} />))}
			</div>
		);
	}
}

export function mapStateToProps({ links, loggedInUser }: StoreState): Props {
	return {
		links: (links || { orderedIds: [] }).orderedIds,
		loggedInUser: loggedInUser
	};
}

export default connect(mapStateToProps)(App);
