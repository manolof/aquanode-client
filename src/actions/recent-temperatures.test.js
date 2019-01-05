import { emit } from 'socket.io-client';
import { getRecentTemperaturesAction, RecentTemperaturesActions } from './recent-temperatures';

describe('recent-temperatures actions', () => {
	const mockMessage = { data: [{}] };
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

	describe('getRecentTemperaturesAction', () => {
		it('should dispatch an action, if it receives a websocket message', () => {
			getRecentTemperaturesAction()(dispatch);

			emit('get', mockMessage);

			expect(dispatch).toHaveBeenCalledWith({
				type: RecentTemperaturesActions.GET,
				payload: mockMessage.data,
			});
		});
	});
});
