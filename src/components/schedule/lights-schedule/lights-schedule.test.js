import { shallow } from 'enzyme';
import React from 'react';

import { LightsSchedule } from './lights-schedule';

describe('Lights Schedule Component', () => {
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
			<LightsSchedule schedule={mockSchedule} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});

	it(`should have functioning buttons that modify the lights' schedule`, () => {
		const wrapper = shallow(
			<LightsSchedule schedule={mockSchedule} resetSchedule={resetScheduleSpy} setSchedule={setScheduleSpy}/>,
		);

		expect(resetScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.schedule__reset').simulate('click');
		expect(resetScheduleSpy).toHaveBeenCalledTimes(1);

		wrapper.find('input[name="red"]').simulate('change', { target: { value: '199', name: 'red' }, persist: jest.fn() });
		expect(wrapper.state().red).toBe('199');

		expect(setScheduleSpy).not.toHaveBeenCalled();
		wrapper.find('.schedule__set').simulate('click');
		expect(setScheduleSpy).toHaveBeenCalledTimes(1);
		expect(setScheduleSpy).toHaveBeenLastCalledWith('lights', { blue: '', green: '', red: '199' });
	});
});
