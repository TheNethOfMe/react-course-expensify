import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound.jsx';

test('should render the not found page', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});