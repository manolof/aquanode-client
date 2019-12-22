import { shallow } from 'enzyme';
import React from 'react';

import { Schedule } from './schedule';

describe('Schedule Component', () => {
	const resetScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();
	const mockScheduleProps = {
		lights: {
			override: false,
			jobs: [
				{
					job_state: 'day-7:0',
					job_next_run: '2018-08-23T07:00:00.000Z',
				},
				{
					job_state: 'day-5:0',
					job_next_run: '2018-08-23T05:00:00.000Z',
				},
			],
		},
		relay: {
			override: false,
			jobs: [
				{
					job_state: 'day-7:0',
					job_next_run: '2018-08-23T07:00:00.000Z',
				},
				{
					job_state: 'day-9:0',
					job_next_run: '2018-08-23T09:00:00.000Z',
				},
			],
		},
	};

	it('should render', () => {
		const wrapper = shallow(
			<Schedule schedule={mockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});

	it('should render in override mode', () => {
		const overrideMockScheduleProps = {
			lights: {
				override: true,
				jobs: [],
			},
			relay: {
				override: true,
				jobs: [],
			},
		};

		const wrapper = shallow(
			<Schedule schedule={overrideMockScheduleProps} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
