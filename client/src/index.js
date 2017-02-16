import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import auth from './auth.js';

import App from './components/app.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/login.jsx';
import NewProposal from './components/NewProposal.jsx';
import NotFound from './components/NotFound.jsx';
import ProposalList from './components/ProposalList.jsx';
import Signup from './components/Signup.jsx';


function requireAuth(nextState, replace) {
  console.log('loggedIn?', auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/home' component={Dashboard}>
        <IndexRoute component={ProposalList} />
        <Route path='/newproposal' component={NewProposal} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>, document.getElementById('app'));

