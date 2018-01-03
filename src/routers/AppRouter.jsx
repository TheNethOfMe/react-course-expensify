import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/Login.jsx';
import ExpenseDashboard from '../components/ExpenseDashboard.jsx';
import AddExpense from '../components/AddExpense.jsx';
import EditExpense from '../components/EditExpense.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFound from '../components/NotFound.jsx';
import PrivateRoute from './PrivateRoute.jsx';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

