import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import DefaultLayout from './components/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

const history = createBrowserHistory();

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={HomePage} />
          <DefaultLayout component={AboutPage} />
          <DefaultLayout component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
