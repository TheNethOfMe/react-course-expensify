import selectTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectTotal([]);
  expect(result).toBe(0);
});

test('should display amount from single expense', () => {
  const result = selectTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const result = selectTotal(expenses);
  expect(result).toBe(114195);
});