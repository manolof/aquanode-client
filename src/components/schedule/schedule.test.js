import { shallow } from 'enzyme';
import React from 'react';

import Schedule from './schedule';

describe('Schedule Component', () => {
	let wrapper;
	const resetScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();
	const mockScheduleProps = [
		{
			job_name: 'night-17:0',
			job_next_run: '2018-08-23T15:00:00.000Z',
		},
	];

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

	it('should set to override mode on load, when the schedule is empty', () => {
		wrapper.setProps({ schedule: [] });

		expect(wrapper.state('overrideMode')).toBe(true);
	});

	it('should not set to override mode on load, when the schedule is present', () => {
		wrapper.setProps({ schedule: [{}] });

		expect(wrapper.state('overrideMode')).toBe(false);
	});

	it('should set or reset the schedule on button click', () => {
		wrapper.find('.reset').simulate('click');

		expect(resetScheduleSpy).toHaveBeenCalled();
		expect(wrapper.state('overrideMode')).toBe(false);

		wrapper.find('.set-day').simulate('click');

		expect(setScheduleSpy).toHaveBeenCalledWith('day');
		expect(wrapper.state('overrideMode')).toBe(true);

		wrapper.find('.set-night').simulate('click');

		expect(setScheduleSpy).toHaveBeenCalledWith('night');
		expect(wrapper.state('overrideMode')).toBe(true);
	});

});
