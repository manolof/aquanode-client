import { combineReducers } from 'redux';

import { statusReducer } from './status';
import { scheduleReducer } from './schedule';

const rootReducer = combineReducers({
	statusReducer,
	scheduleReducer,
});

export {
	rootReducer,
};
