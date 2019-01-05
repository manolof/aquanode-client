import { combineReducers } from 'redux';

import { statusReducer } from './status';
import { scheduleReducer } from './schedule';
import { recentTemperaturesReducer } from './recent-temperatures';

const rootReducer = combineReducers({
	status: statusReducer,
	schedule: scheduleReducer,
	recentTemperatures: recentTemperaturesReducer,
});

export {
	rootReducer,
};
