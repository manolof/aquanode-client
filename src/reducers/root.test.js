import { createStore } from 'redux';

import { ScheduleActions } from '../actions/schedule';
import { StatusActions } from '../actions/status';
import { rootReducer } from './root';
import { scheduleReducer } from './schedule';
import { statusReducer } from './status';
import { recentTemperaturesReducer } from './recent-temperatures';
import { RecentTemperaturesActions } from '../actions/recent-temperatures';

const store = createStore(rootReducer);

describe('rootReducer', () => {
	it(`should check that initial state of the root reducer matches
		what child reducers return given an empty action`, () => {
		expect(store.getState().status).toEqual(statusReducer(undefined, {}));
		expect(store.getState().schedule).toEqual(scheduleReducer(undefined, {}));
		expect(store.getState().recentTemperatures).toEqual(recentTemperaturesReducer(undefined, {}));
	});

	it(`should check that child reducers handle an action`, () => {
		const action1 = {
			type: StatusActions.GET,
			payload: {},
		};
		store.dispatch(action1);
		expect(store.getState().status).toEqual(statusReducer(undefined, action1));

		const action2 = {
			type: ScheduleActions.GET,
			payload: {},
		};
		store.dispatch(action2);
		expect(store.getState().schedule).toEqual(scheduleReducer(undefined, action2));

		const action3 = {
			type: RecentTemperaturesActions.GET,
			payload: [],
		};
		store.dispatch(action2);
		expect(store.getState().recentTemperatures).toEqual(recentTemperaturesReducer(undefined, action3));
	});
});
