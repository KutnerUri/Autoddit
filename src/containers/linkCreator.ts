import LinkCreator, { Props as ComponentProps } from '../components/linkCreator';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export function mapDispatchToProps(dispatch: Dispatch<actions.CreateLink>): ComponentProps {
	return {
		createLink: (title: string, imageUrl: string) => dispatch(actions.CreateLink(title, imageUrl))
	};
}

export default connect(undefined, mapDispatchToProps)(LinkCreator);