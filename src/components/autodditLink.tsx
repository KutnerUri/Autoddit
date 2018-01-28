import * as React from 'react';
import '../styles/autodditLink.css';
import ItemVote from './vote';
import CommentsList from './commentsList';
import Tagline from './Tagline';

export interface Props {
	id: string;
	title: string;
	imageUrl: string;
	submissionTime: string;
	userId: string;
}

class AutodditLink extends React.PureComponent<Props, object> {
	render() {
		const props = this.props;

		return (
			<div className="autoddit-link">
				<ItemVote id={props.id}/>
				<img className="link-img" src={props.imageUrl} />
				<div className="link-content">
					<p className="title">title</p>
					<Tagline submissionTime={props.submissionTime} userId={props.userId}/>
					<CommentsList id={props.id}/>
				</div>
			</div>
		);
	}
}

export default AutodditLink;