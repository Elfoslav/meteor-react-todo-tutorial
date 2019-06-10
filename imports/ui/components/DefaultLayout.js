import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';

export default DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <nav className="layout-header">
          <Navigation />
        </nav>
        <div className="container">
          <Component {...matchProps} />
        </div>
        <footer>&copy; 2019 <a href="https://www.meteor.com/tutorials/react">Meteor.js + React tutorial</a></footer>
      </div>
    )} />
  )
};
