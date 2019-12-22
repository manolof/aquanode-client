import { shallow } from 'enzyme';
import React from 'react';

import { RelaySchedule } from './relay-schedule';

describe('Relay Schedule Component', () => {
	const resetScheduleSpy = jest.fn();
	const setScheduleSpy = jest.fn();
	const mockSchedule = <p>Mock Schedule</p>;

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		const wrapper = shallow(
			<RelaySchedule schedule={mockSchedule} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});

	it(`should have functioning buttons that modify the relay' schedule`, () => {
		const wrapper = shallow(
			<RelaySchedule schedule={mockSchedule} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(resetScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.schedule__reset').simulate('click');
		expect(resetScheduleSpy).toHaveBeenCalledTimes(1);

		expect(setScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.schedule__set').at(0).simulate('click');
		expect(setScheduleSpy).toHaveBeenCalledTimes(1);
		expect(setScheduleSpy).toHaveBeenLastCalledWith('relay', 'on');

		wrapper.find('.schedule__set').at(1).simulate('click');
		expect(setScheduleSpy).toHaveBeenCalledTimes(2);
		expect(setScheduleSpy).toHaveBeenLastCalledWith('relay', 'off');
	});
});
