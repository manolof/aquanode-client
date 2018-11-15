import { combineReducers } from 'redux';

import { statusReducer } from './status';
import { scheduleReducer } from './schedule';

const rootReducer = combineReducers({
	status: statusReducer,
	schedule: scheduleReducer,
});

export {
	rootReducer,
};
