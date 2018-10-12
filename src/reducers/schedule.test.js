import { initialState, scheduleReducer } from './schedule';
import { ScheduleActions } from '../actions/schedule';

const mockSchedulePayload = [
	{
		job_name: 'night-17:0',
		job_next_run: '2018-08-23T15:00:00.000Z',
	},
];

describe('Schedule reducer', () => {
	it('should return the initial state', () => {
		expect(scheduleReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle GET_SUCCESS, RESET_SUCCESS', () => {
		expect(
			scheduleReducer(initialState, {
				type: ScheduleActions.GET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual({
			...initialState,
			items: mockSchedulePayload,
		});

		expect(
			scheduleReducer(initialState, {
				type: ScheduleActions.RESET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual({
			...initialState,
			items: mockSchedulePayload,
		});
	});

	it('should handle SET_SUCCESS', () => {
		expect(
			scheduleReducer(initialState, {
				type: ScheduleActions.SET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual({
			...initialState,
			override: true,
		});
	});
});
