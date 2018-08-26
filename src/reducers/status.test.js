import reducer from './status';
import { StatusActions } from '../actions/status';

describe('Status reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			time: '',
			entities: [],
		});
	});

	it('should handle GET_SUCCESS', () => {
		const mockStatusPayload = {
			time: '2018-10-23',
			entities: [
				{
					type: 'lights',
					status: 'night',
				},
			],
		};

		expect(
			reducer({}, {
				type: StatusActions.GET_SUCCESS,
				payload: mockStatusPayload,
			}),
		).toEqual(mockStatusPayload);

		const mockStatusPayloadNew = {
			time: '2018-11-23',
		};

		expect(
			reducer(mockStatusPayload, {
				type: StatusActions.GET_SUCCESS,
				payload: mockStatusPayloadNew,
			}),
		).toEqual({
			...mockStatusPayload,
			time: mockStatusPayloadNew.time,
		});
	});
});
