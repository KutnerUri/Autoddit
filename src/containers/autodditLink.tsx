import AutodditLink, { Props as ComponentProps } from '../components/autodditLink';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface Props {
	id: number;
}

export function mapStateToProps({ links, comments }: StoreState, { id }: Props): ComponentProps {
	var link = links.byId[id];
	var commentIds = comments.byLinkIdOrdered[id];

	return {
		id: id,
		title: link.title,
		imageUrl: link.imageUrl,
		submissionTime: link.submissionTime,
		userId: link.userId,
		commentCount: commentIds.length
	};
}

export default connect(mapStateToProps)(AutodditLink);