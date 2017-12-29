import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters.jsx';
import { defaultFilters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Testing';
  wrapper.find('input').simulate('change', { target: {value} });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date changes', () => {
  const newStart = moment(0).add(2, 'days');
  const newEnd = moment(0).add(7, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: newStart, endDate: newEnd });
  expect(setStartDate).toHaveBeenLastCalledWith(newStart);
  expect(setEndDate).toHaveBeenLastCalledWith(newEnd);
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' }});
  expect(sortByAmount).toHaveBeenCalled();
  expect(sortByDate).not.toHaveBeenCalled();
});

test('should sort by date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' }});
  expect(sortByAmount).not.toHaveBeenCalled();
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle date focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
  expect(wrapper.state('calendarFocused')).toEqual('startDate');
});