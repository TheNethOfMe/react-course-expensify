import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters.js';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END',
    endDate: moment(0)
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_AMOUNT'
  });
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_DATE'
  });
});

test('should generate setTextFilter action object', () => {
  let action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'test'
  });
  action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: ''
  });
});