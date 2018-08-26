import { shallow } from 'enzyme';
import React from 'react';

import { ScheduleContainer } from './schedule';

describe('Schedule Container', () => {
	let wrapper;
	const getScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();
	const resetScheduleSpy = jest.fn();
	const mockScheduleProps = [
		{
			job_name: 'night-17:0',
			job_next_run: '2018-08-23T15:00:00.000Z',
		},
	];

	beforeEach(() => {
		wrapper = shallow(
			<ScheduleContainer
				schedule={mockScheduleProps}
				getSchedule={getScheduleSpy}
				setSchedule={setScheduleSpy}
				resetSchedule={resetScheduleSpy}
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

	it('should get the schedule on load', () => {
		expect(getScheduleSpy).toHaveBeenCalled();
	});

	it('should dispatch actions based on sub-component triggers', () => {
		const scheduleComponentProps = wrapper.find('Schedule').props();

		scheduleComponentProps.resetSchedule();
		expect(resetScheduleSpy).toHaveBeenCalled();

		scheduleComponentProps.setSchedule('day');
		expect(setScheduleSpy).toHaveBeenCalledWith('day');
	});

});
