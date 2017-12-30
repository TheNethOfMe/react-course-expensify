import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary.jsx';

test('should render with one expense viewed correctly', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={195} expenseCount={1} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render with multiple expenses viewed correctly', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={114195} expenseCount={3} />);
  expect(wrapper).toMatchSnapshot();
});