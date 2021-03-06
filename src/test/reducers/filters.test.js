import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT', text: 'test' });
  expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START', startDate: '5' });
  expect(state.startDate).toBe('5')
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END', endDate: '-5' });
  expect(state.endDate).toBe('-5')
});