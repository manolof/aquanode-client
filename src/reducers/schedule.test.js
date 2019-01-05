import { initialState, scheduleReducer } from './schedule';
import { ScheduleActions } from '../actions/schedule';

const mockSchedulePayload = {
	lights: [],
	relay: [],
};

describe('Schedule reducer', () => {
	it('should return the initial state', () => {
		expect(scheduleReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle GET', () => {
		expect(
			scheduleReducer(initialState, {
				type: ScheduleActions.GET,
				payload: mockSchedulePayload,
			}),
		).toEqual({
			lights: {
				override: true,
				jobs: [],
			},
			relay: {
				override: true,
				jobs: [],
			},
		});

		expect(
			scheduleReducer(initialState, {
				type: ScheduleActions.GET,
				payload: {
					...mockSchedulePayload,
					relay: [{}],
				},
			}),
		).toEqual({
			lights: {
				override: true,
				jobs: [],
			},
			relay: {
				override: false,
				jobs: [{}],
			},
		});
	});
});
