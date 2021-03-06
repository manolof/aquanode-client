import { initialState, statusReducer } from './status';
import { StatusActions } from '../actions/status';

const mockStatusPayload = {
	time: '2018-10-23',
	entities: [
		{
			type: 'lights',
			status: 'night',
		},
	],
};

describe('Status reducer', () => {
	it('should return the initial state', () => {
		expect(statusReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle GET_SUCCESS', () => {
		expect(
			statusReducer({}, {
				type: StatusActions.GET,
				payload: mockStatusPayload,
			}),
		).toEqual(mockStatusPayload);

		const mockStatusPayloadNew = {
			time: '2018-11-23',
		};

		expect(
			statusReducer(mockStatusPayload, {
				type: StatusActions.GET,
				payload: mockStatusPayloadNew,
			}),
		).toEqual({
			...mockStatusPayload,
			time: mockStatusPayloadNew.time,
		});
	});
});
