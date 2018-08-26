import fetchMock from 'fetch-mock';

import { getSchedule, resetSchedule, setSchedule } from './schedule';

describe('schedule service', () => {
	const mockSchedulePayload = {
		data: [
			{
				job_name: 'night-17:0',
				job_next_run: '2018-08-23T15:00:00.000Z',
			},
		],
	};

	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	describe('getSchedule()', () => {
		it('should get the schedule', async () => {
			fetchMock.getOnce(
				'/schedule',
				mockSchedulePayload,
			);

			expect(await getSchedule()).toEqual(mockSchedulePayload.data);
		});
	});

	describe('resetSchedule()', () => {
		it('should reset the schedule', async () => {
			fetchMock.postOnce(
				'/schedule/reset',
				mockSchedulePayload,
			);

			expect(await resetSchedule()).toEqual(mockSchedulePayload.data);
		});
	});

	describe('setSchedule()', () => {
		it('should reset the schedule', async () => {
			fetchMock.postOnce(
				'/schedule',
				{ data: [] },
			);

			expect(await setSchedule('day')).toEqual([]);
		});
	});
});
