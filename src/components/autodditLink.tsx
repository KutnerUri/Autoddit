import * as React from 'react';
import '../styles/autodditLink.css';
import ItemVote from '../containers/itemVote';
import CommentsList from '../containers/commentsList';
import CommentCreator from '../containers/commentCreator';
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
				<ItemVote id={props.id} />
				{this.renderImage(props.imageUrl)}
				<div className="link-content">
					<div className="title">{props.title}</div>
					<Tagline submissionTime={props.submissionTime} userId={props.userId} />
					<CommentCreator ownerId={props.id} />
					<CommentsList id={props.id} />
				</div>
			</div>
		);
	}

	renderImage(imageUrl: string) {
		if (!!imageUrl) {
			return <img className="link-img" src={imageUrl} />;
		} else {
			// qu'est-ce que c'est?
			return <span className="link-img fa fa-4x fa-link" />;
		}
	}
}

export default AutodditLink;