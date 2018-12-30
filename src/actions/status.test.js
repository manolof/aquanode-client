import { emit } from 'socket.io-client';
import { getStatusAction, StatusActions } from './status';

describe('status actions', () => {
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

	describe('getStatusAction', () => {
		it('should dispatch an action, if it receives a websocket message', () => {
			getStatusAction()(dispatch);

			emit('get', mockMessage);

			expect(dispatch).toHaveBeenCalledWith({
				type: StatusActions.GET,
				payload: mockMessage.data,
			});
		});
	});
});
