import React from 'react';
import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilters.jsx';

const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;