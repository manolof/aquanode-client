import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './header';

describe('Header Component', () => {
	it('should render', () => {
		const wrapper = shallow(<Header/>);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
