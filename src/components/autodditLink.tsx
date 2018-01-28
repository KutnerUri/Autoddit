import * as React from 'react';
import '../styles/autodditLink.css';
import Username from '../containers/username';
import ItemVote from './vote';

export interface Props {
	id: number;
	title: string;
	imageUrl: string;
	submissionTime: string;
	userId: number;
	commentCount: number;
}

class AutodditLink extends React.PureComponent<Props, object> {
	render() {
		const props = this.props;

		return (
			<div className="autoddit-link">
				<ItemVote type="links" id={props.id}/>
				<img className="link-img" src={props.imageUrl} />
				<div className="link-content">
					<p className="title">title</p>
					<p className="tagline">Submitted on {props.submissionTime} by <Username id={props.userId} /></p>

					<div className="buttons">
						<div className="comments">{props.commentCount} comments</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AutodditLink;