import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="content">
        <h1>About</h1>
        <p>
          This is just a modified TODO list with React Router.
        </p>
        <p>
          Official tutorial can be found on this link:&nbsp;
          <a href="https://www.meteor.com/tutorials/react">
            https://www.meteor.com/tutorials/react
          </a>
        </p>
      </div>
    );
  }
}
