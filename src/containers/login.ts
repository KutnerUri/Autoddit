import Login, { Props as ComponentProps } from '../components/login';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export function mapDispatchToProps(dispatch: Dispatch<actions.Login>): ComponentProps {
	return {
		login: (username) => dispatch(actions.login(username)),
	};
}

export default connect(undefined, mapDispatchToProps)(Login);