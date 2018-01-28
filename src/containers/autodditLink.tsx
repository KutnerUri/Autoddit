import AutodditLink from '../components/autodditLink';
import StoreState from '../types/storeState';
import { connect } from 'react-redux';

export interface Props {
	id: number;
}

export function mapStateToProps({ links }: StoreState, { id }: Props) {
	return links.byId[id];
}

export default connect(mapStateToProps)(AutodditLink);