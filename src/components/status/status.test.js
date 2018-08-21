import { shallow } from 'enzyme';
import React from 'react';

import Status from './status';

describe('Status', () => {
	it('should render', () => {
		const mockProps = { time: '2018-10-23', entities: [{ type: 'lights', status: 'night' }] };

		const wrapper = shallow(<Status status={mockProps}/>);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
