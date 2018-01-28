import AutodditLink, { Props as ComponentProps } from '../components/username';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface Props {
	id: number;
}

export function mapStateToProps({ users }: StoreState, { id }: Props): ComponentProps {
	var user = users[id];

	return {
		username: user.username
	};
}

export default connect(mapStateToProps)(AutodditLink);