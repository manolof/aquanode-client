import { createStore } from 'redux';

import { getScheduleStartAction } from '../actions/schedule';
import { getStatusStartAction } from '../actions/status';
import { rootReducer } from './root';
import { scheduleReducer } from './schedule';
import { statusReducer } from './status';

const store = createStore(rootReducer);

describe('rootReducer', () => {
	it(`should check that initial state of the root reducer matches
		what child reducers return given an empty action`, () => {
		expect(store.getState().status).toEqual(statusReducer(undefined, {}));
		expect(store.getState().schedule).toEqual(scheduleReducer(undefined, {}));
	});

	it(`should check that child reducers handle an action`, () => {
		const action1 = getStatusStartAction();
		store.dispatch(action1);
		expect(store.getState().status).toEqual(statusReducer(undefined, action1));

		const action2 = getScheduleStartAction();
		store.dispatch(action2);
		expect(store.getState().schedule).toEqual(scheduleReducer(undefined, action2));
	});
});
