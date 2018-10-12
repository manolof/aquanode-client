import { createStore } from 'redux';

import { getStatusStartAction } from '../actions/status';
import { rootReducer } from './root';
import { scheduleReducer } from './schedule';
import { statusReducer } from './status';

const store = createStore(rootReducer);

describe('rootReducer', () => {
	it(`should check that initial state of the root reducer matches
		what child reducers return given an empty action`, () => {
		expect(store.getState().statusReducer).toEqual(statusReducer(undefined, {}));
		expect(store.getState().scheduleReducer).toEqual(scheduleReducer(undefined, {}));
	});

	it(`should check that child reducers handle an action`, () => {
		const action = getStatusStartAction();
		store.dispatch(action);
		expect(store.getState().statusReducer).toEqual(statusReducer(undefined, action));
		expect(store.getState().scheduleReducer).toEqual(scheduleReducer(undefined, action));
	});
});
