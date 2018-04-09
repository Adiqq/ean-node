/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './containers/App';
import LlsPage from './containers/LlsPage';
import PlsPage from './containers/PlsPage';
import Nav from './containers/Nav';

export default () => (
  <App>
    <Nav />
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/lls" />} />
      <Route path="/lls" component={LlsPage} />
      <Route path="/pls" component={PlsPage} />
    </Switch>
  </App>
);
