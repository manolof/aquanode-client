import { fetchSchedule } from '../services/schedule';
import {
	getScheduleAction,
	getScheduleFailAction,
	getScheduleStartAction,
	getScheduleSuccessAction,
	ScheduleActions,
} from './schedule';

jest.mock('../services/schedule');

describe('schedule actions', () => {
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

	describe('getScheduleAction', () => {
		let dispatch;
		const mockResponse = { data: { res: 'test' } };

		beforeAll(() => {
			dispatch = jest.fn();
			fetchSchedule.mockImplementation(() => Promise.resolve(mockResponse));
		});

		afterEach(() => {
			jest.resetAllMocks();
		});

		afterAll(() => {
			jest.restoreAllMocks();
		});

		it('should fetch the schedule', async () => {
			await getScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(getScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(getScheduleSuccessAction(mockResponse));
		});
	});
});
