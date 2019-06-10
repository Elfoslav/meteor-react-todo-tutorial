import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
        <a href="https://www.meteor.com/tutorials/react">How to build this app tutorial</a>
      </div>
    )
  }
}
