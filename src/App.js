import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import Sales from './Sales';
import Alert from './Alert';

export default function App() {
  return (
    <>
      <Header />
      <section className="container">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/search" />
            <Route path="/search">
              <Search />
            </Route>

            <Route path="/sales/create">
              <Sales />
            </Route>
          </Switch>
        </Router>
      </section>
      <Alert />
    </>
  );
}
