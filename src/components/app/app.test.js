import { shallow } from 'enzyme';
import React from 'react';

import App from './app';

describe('App Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render', () => {
		const wrapper = shallow(<App/>);

		expect(wrapper.getElements()).toMatchSnapshot();
	});
});
