import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import { startAddExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h2>Expense</h2>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);