import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpenseDashboard from '../components/ExpenseDashboard.jsx';
import AddExpense from '../components/AddExpense.jsx';
import EditExpense from '../components/EditExpense.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFound from '../components/NotFound.jsx';
import Header from '../components/Header.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

