import { shallow } from 'enzyme';
import React from 'react';

import { RecentTemperaturesContainer } from './recent-temperatures';

describe('RecentTemperatures Container', () => {
	let wrapper;
	const getRecentTemperaturesSpy = jest.fn();
	const mockRecentTemperaturesProps = {
		readings: [
			{
				date: '2018-10-23',
				temperature: 42,
			},
		],
	};

	beforeEach(() => {
		wrapper = shallow(
			<RecentTemperaturesContainer
				recentTemperatures={mockRecentTemperaturesProps}
				getRecentTemperatures={getRecentTemperaturesSpy}
			/>,
		);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		expect(wrapper.getElements()).toMatchSnapshot();
	});

	it('should get the recent temperatures on load', () => {
		expect(getRecentTemperaturesSpy).toHaveBeenCalled();
	});

});
