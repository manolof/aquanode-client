import { shallow } from 'enzyme';
import React from 'react';

import Schedule from './schedule';

describe('Schedule', () => {
	const resetScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should render', () => {
		const mockScheduleProps = [
			{
				job_name: 'night-17:0',
				job_next_run: '2018-08-23T15:00:00.000Z',
			},
		];

		const wrapper = shallow(
			<Schedule schedule={mockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
