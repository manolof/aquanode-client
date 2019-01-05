import { shallow } from 'enzyme';
import React from 'react';

import { StatusContainer } from './status';

describe('Status Container', () => {
	let wrapper;
	const getStatusSpy = jest.fn();
	const mockStatusProps = {
		time: '2018-10-23',
		entities: {
			lights: 'day',
			relay: 'on',
		},
	};

	beforeEach(() => {
		wrapper = shallow(
			<StatusContainer
				status={mockStatusProps}
				getStatus={getStatusSpy}
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

	it('should get the status on load', () => {
		expect(getStatusSpy).toHaveBeenCalled();
	});

});
