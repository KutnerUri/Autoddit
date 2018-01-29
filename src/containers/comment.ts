import Comment, { Props as ComponentProps } from '../components/comment';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface Props {
	id: string;
}

export function mapStateToProps({ comments }: StoreState, { id }: Props): ComponentProps {
	var comment = comments.byId[id];

	return {
		id: id,
		text: comment.text,
		submissionTime: comment.submissionTime,
		userId: comment.userId
	};
}

export default connect(mapStateToProps)(Comment);