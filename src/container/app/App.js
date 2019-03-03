import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { routes } from '../../routes';

class App extends Component {
  render() {
    console.log(routes);
    return (
      <Router>
        <div className="app">
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact = {route.exact}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
