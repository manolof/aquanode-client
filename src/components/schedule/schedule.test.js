import { shallow } from 'enzyme';
import React from 'react';

import { Schedule } from './schedule';

describe('Schedule Component', () => {
	let wrapper;
	const resetScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();
	const mockScheduleProps = {
		override: false,
		items: [
			{
				job_name: 'night-17:0',
				job_next_run: '2018-08-23T15:00:00.000Z',
			},
			{
				job_name: 'day-7:0',
				job_next_run: '2018-08-23T07:00:00.000Z',
			},
		],
	};

	beforeEach(() => {
		wrapper = shallow(
			<Schedule schedule={mockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
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

});
