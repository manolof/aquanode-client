import { fetchSchedule } from '../services/schedule';
import {
	createGetScheduleAction,
	createGetScheduleFailAction,
	createGetScheduleStartAction,
	createGetScheduleSuccessAction,
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
		expect(createGetScheduleStartAction()).toEqual({
			type: ScheduleActions.GET_START,
		});
	});

	it('should create GET Success action', () => {
		const payload = {};

		expect(createGetScheduleSuccessAction(payload)).toEqual({
			type: ScheduleActions.GET_SUCCESS,
			payload,
		});
	});

	it('should create GET Fail action', () => {
		const error = {};

		expect(createGetScheduleFailAction(error)).toEqual({
			type: ScheduleActions.GET_FAIL,
			error,
		});
	});

	describe('createGetScheduleAction', () => {
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

		it('should fetch the schedule', async() => {
			await createGetScheduleAction()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toHaveBeenCalledWith(createGetScheduleStartAction());
			expect(dispatch).toHaveBeenCalledWith(createGetScheduleSuccessAction(mockResponse));
		});
	});
});
