import { shallow } from 'enzyme';
import React from 'react';

import { Schedule } from './schedule';

describe('Schedule Component', () => {
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

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		const wrapper = shallow(
			<Schedule schedule={mockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});

	it('should have functioning buttons that modify the schedule', () => {
		const wrapper = shallow(
			<Schedule schedule={mockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(resetScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.reset').simulate('click');
		expect(resetScheduleSpy).toHaveBeenCalled();

		expect(setScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.set-day').simulate('click');
		expect(setScheduleSpy).toHaveBeenCalledTimes(1);
		expect(setScheduleSpy).toHaveBeenCalledWith('day');

		wrapper.find('.set-night').simulate('click');
		expect(setScheduleSpy).toHaveBeenCalledTimes(2);
		expect(setScheduleSpy).toHaveBeenCalledWith('night');
	});

	it('should render in override mode', () => {
		const mockSchedulePropsOverride = {
			...mockScheduleProps,
			override: true,
		};

		const wrapper = shallow(
			<Schedule schedule={mockSchedulePropsOverride} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});

});
