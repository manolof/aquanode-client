import fetchMock from 'fetch-mock';

import { getStatus } from './status';

describe('status service', () => {
	const mockStatusPayload = {
		data: {
			time: '2018-10-23',
			entities: [
				{
					type: 'lights',
					status: 'night',
				},
			],
		},
	};

	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	describe('getStatus()', () => {
		it('should get the status', async() => {
			fetchMock.getOnce(
				'/status',
				mockStatusPayload,
			);

			expect(await getStatus()).toEqual(mockStatusPayload.data);
		});
	});
});
