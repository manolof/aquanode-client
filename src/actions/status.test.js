import { getStatus } from '../services/status';
import {
	getStatusAction,
	getStatusFailAction,
	getStatusStartAction,
	getStatusSuccessAction,
	StatusActions,
} from './status';

jest.mock('../services/status');

describe('status actions', () => {
	const mockSuccessResponse = { data: { res: 'test' } };
	const mockErrorResponse = { error: 'Something went wrong' };

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should create GET Start action', () => {
		expect(getStatusStartAction()).toEqual({
			type: StatusActions.GET_START,
		});
	});

	it('should create GET Success action', () => {
		const payload = {};

		expect(getStatusSuccessAction(payload)).toEqual({
			type: StatusActions.GET_SUCCESS,
			payload,
		});
	});

	it('should create GET Fail action', () => {
		const error = {};

		expect(getStatusFailAction(error)).toEqual({
			type: StatusActions.GET_FAIL,
			error,
		});
	});

	describe('getStatusAction', () => {
		let dispatch;

		beforeAll(() => {
			dispatch = jest.fn();
		});

		afterEach(() => {
			jest.resetAllMocks();
		});

		afterAll(() => {
			jest.restoreAllMocks();
		});

		it('should dispatch a success action, if it successfully calls the service', async () => {
			getStatus.mockImplementation(() => Promise.resolve(mockSuccessResponse));
			await getStatusAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(getStatusStartAction());
			expect(dispatch).toHaveBeenCalledWith(getStatusSuccessAction(mockSuccessResponse));
		});

		it('should dispatch a fail action, if it fails to call the service', async () => {
			getStatus.mockImplementation(() => Promise.reject(mockErrorResponse));
			await getStatusAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(getStatusStartAction());
			expect(dispatch).toHaveBeenCalledWith(getStatusFailAction(mockErrorResponse));
		});
	});
});
