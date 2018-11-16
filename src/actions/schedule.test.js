import { getSchedule, resetSchedule, setSchedule } from '../services/schedule';
import {
	getScheduleAction,
	getScheduleFailAction,
	getScheduleStartAction,
	getScheduleSuccessAction,
	resetScheduleAction,
	resetScheduleFailAction,
	resetScheduleStartAction,
	resetScheduleSuccessAction,
	ScheduleActions,
	setScheduleAction,
	setScheduleFailAction,
	setScheduleStartAction,
	setScheduleSuccessAction,
} from './schedule';
import { getStatusAction } from './status';

jest.mock('../services/schedule');
jest.mock('./status', () => ({
	getStatusAction: jest.fn(),
}));

describe('schedule actions', () => {
	const mockSuccessResponse = { data: { res: 'test' } };
	const mockErrorResponse = { error: 'Something went wrong' };

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should create GET Start action', () => {
		expect(getScheduleStartAction()).toEqual({
			type: ScheduleActions.GET_START,
		});
	});

	it('should create GET Success action', () => {
		const payload = {};

		expect(getScheduleSuccessAction(payload)).toEqual({
			type: ScheduleActions.GET_SUCCESS,
			payload,
		});
	});

	it('should create GET Fail action', () => {
		const error = {};

		expect(getScheduleFailAction(error)).toEqual({
			type: ScheduleActions.GET_FAIL,
			error,
		});
	});

	it('should create RESET Start action', () => {
		expect(resetScheduleStartAction()).toEqual({
			type: ScheduleActions.RESET_START,
		});
	});

	it('should create RESET Success action', () => {
		const payload = {};

		expect(resetScheduleSuccessAction(payload)).toEqual({
			type: ScheduleActions.RESET_SUCCESS,
			payload,
		});
	});

	it('should create RESET Fail action', () => {
		const error = {};

		expect(resetScheduleFailAction(error)).toEqual({
			type: ScheduleActions.RESET_FAIL,
			error,
		});
	});

	it('should create SET Start action', () => {
		expect(setScheduleStartAction()).toEqual({
			type: ScheduleActions.SET_START,
		});
	});

	it('should create SET Success action', () => {
		const payload = {};

		expect(setScheduleSuccessAction(payload)).toEqual({
			type: ScheduleActions.SET_SUCCESS,
			payload,
		});
	});

	it('should create SET Fail action', () => {
		const error = {};

		expect(setScheduleFailAction(error)).toEqual({
			type: ScheduleActions.SET_FAIL,
			error,
		});
	});

	describe('getScheduleAction', () => {
		let dispatch;

		beforeAll(() => {
			dispatch = jest.fn();
		});

		it('should dispatch a success action, if it successfully calls the service', async() => {
			getSchedule.mockImplementation(() => Promise.resolve(mockSuccessResponse));
			await getScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(getScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(getScheduleSuccessAction(mockSuccessResponse));
		});

		it('should dispatch a fail action, if it fails to call the service', async() => {
			getSchedule.mockImplementation(() => Promise.reject(mockErrorResponse));
			await getScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(getScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(getScheduleFailAction(mockErrorResponse));
		});
	});

	describe('resetScheduleAction', () => {
		let dispatch;

		beforeAll(() => {
			dispatch = jest.fn();
		});

		it('should dispatch a success action, if it successfully calls the service', async() => {
			resetSchedule.mockImplementation(() => Promise.resolve(mockSuccessResponse));
			await resetScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(3);
			expect(dispatch).toHaveBeenCalledWith(resetScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(resetScheduleSuccessAction(mockSuccessResponse));
			expect(dispatch).toHaveBeenCalledWith(getStatusAction());
		});

		it('should dispatch a fail action, if it fails to call the service', async() => {
			resetSchedule.mockImplementation(() => Promise.reject(mockErrorResponse));
			await resetScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(resetScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(resetScheduleFailAction(mockErrorResponse));
		});
	});

	describe('setScheduleAction', () => {
		let dispatch;

		beforeAll(() => {
			dispatch = jest.fn();
		});

		it('should dispatch a success action, if it successfully calls the service', async() => {
			setSchedule.mockImplementation(() => Promise.resolve(mockSuccessResponse));
			await setScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(3);
			expect(dispatch).toHaveBeenCalledWith(setScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(setScheduleSuccessAction(mockSuccessResponse));
			expect(dispatch).toHaveBeenCalledWith(getStatusAction());
		});

		it('should dispatch a fail action, if it fails to call the service', async() => {
			setSchedule.mockImplementation(() => Promise.reject(mockErrorResponse));
			await setScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(setScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(setScheduleFailAction(mockErrorResponse));
		});
	});
});
