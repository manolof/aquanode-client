import { shallow } from 'enzyme';
import React from 'react';

import { RecentTemperatures } from './recent-temperatures';

describe('RecentTemperatures Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		const mockRecentTemperaturesProps = {
			readings: [
				{
					date: '2018-10-23',
					temperature: 42,
				},
			],
		};

		const wrapper = shallow(
			<RecentTemperatures recentTemperatures={mockRecentTemperaturesProps}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
