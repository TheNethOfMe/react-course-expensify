import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard.jsx';

test('should render the Expense Dashboard', () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});