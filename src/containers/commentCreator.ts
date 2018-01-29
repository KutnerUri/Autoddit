import CommentCreator, { Props as ComponentProps } from '../components/commentCreator';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';
import StoreState from '../types/storeState';

export interface Props {
	ownerId: string;
}

export function mapStateToProps(storeState: StoreState, ownProps: Props): ComponentProps {
	return ownProps;
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CreateComment>) {
	return {
		createComment: (title: string, ownerId: string) => dispatch(actions.CreateComment(title, ownerId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreator);
