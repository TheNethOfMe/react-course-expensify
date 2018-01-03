import { login, logout } from '../../actions/auth';

test('should setup login action', () => {
  const action = login('test');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'test'
  });
});

test('should setup logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});