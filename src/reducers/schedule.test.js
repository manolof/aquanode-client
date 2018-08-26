import reducer from './schedule';
import { ScheduleActions } from '../actions/schedule';

describe('Schedule reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});

	it('should handle GET_SUCCESS, RESET_SUCCESS, SET_SUCCESS', () => {
		const mockSchedulePayload = [
			{
				job_name: 'night-17:0',
				job_next_run: '2018-08-23T15:00:00.000Z',
			},
		];

		expect(
			reducer([], {
				type: ScheduleActions.GET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual(mockSchedulePayload);

		expect(
			reducer([], {
				type: ScheduleActions.RESET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual(mockSchedulePayload);

		expect(
			reducer([], {
				type: ScheduleActions.SET_SUCCESS,
				payload: mockSchedulePayload,
			}),
		).toEqual(mockSchedulePayload);
	});
});
