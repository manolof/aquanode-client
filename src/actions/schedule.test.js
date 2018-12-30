import { emit, on } from 'socket.io-client';
import { getScheduleAction, resetScheduleAction, ScheduleActions, setScheduleAction } from './schedule';

describe('schedule actions', () => {
	const mockMessage = { data: { res: 'test' } };
	let dispatch;

	afterEach(() => {
		jest.resetAllMocks();
	});

	beforeAll(() => {
		dispatch = jest.fn();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	describe('getScheduleAction', () => {
		it('should dispatch an action, if it receives a websocket message', () => {
			getScheduleAction()(dispatch);

			emit('get', mockMessage);

			expect(dispatch).toHaveBeenCalledWith({
				type: ScheduleActions.GET,
				payload: mockMessage.data,
			});
		});
	});

	describe('resetScheduleAction', () => {
		it('should reset the schedule, and dispatch an action', () => {
			const mockFn = jest.fn();
			on('reset', mockFn);

			expect(mockFn).not.toHaveBeenCalled();

			resetScheduleAction()(dispatch);

			expect(mockFn).toHaveBeenCalled();
			expect(dispatch).toHaveBeenCalledWith({
				type: ScheduleActions.RESET,
			});
		});
	});

	describe('setScheduleAction', () => {
		it('should reset the schedule, and dispatch an action', () => {
			const mockFn = jest.fn();
			on('set', mockFn);

			expect(mockFn).not.toHaveBeenCalled();

			setScheduleAction()(dispatch);

			expect(mockFn).toHaveBeenCalled();
			expect(dispatch).toHaveBeenCalledWith({
				type: ScheduleActions.SET,
			});
		});
	});
});
