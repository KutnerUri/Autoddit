import CommentsList, { Props as ComponentProps } from '../components/commentsList';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface Props {
	id: string;
}

export function mapStateToProps({ comments }: StoreState, { id }: Props): ComponentProps {
	return {
		commentIds: comments.byOwner[id] || []
	};
}

export default connect(mapStateToProps)(CommentsList);