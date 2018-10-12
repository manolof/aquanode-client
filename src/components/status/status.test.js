import { shallow } from 'enzyme';
import React from 'react';

import { Status } from './status';

describe('Status Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		const mockStatusProps = {
			time: '2018-10-23',
			entities: [
				{
					type: 'lights',
					status: 'night',
				},
			],
		};

		const wrapper = shallow(
			<Status status={mockStatusProps}/>,
		);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
