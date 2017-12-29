
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.jsx';

import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisableExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 2000,
  createdAt: 5000
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 1000,
  createdAt: 50000
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 70000,
  createdAt: 100
}));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

