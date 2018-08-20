import { combineReducers } from 'redux';

import status from './status';
import schedule from './schedule';

export default combineReducers({
	status,
	schedule,
});
