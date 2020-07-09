import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './Header';
import Search from './Search';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
