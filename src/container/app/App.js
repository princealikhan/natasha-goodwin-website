import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg'
import './App.scss';

import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo}></img>
      <Button color="primary"> 
          Default
        </Button>
      </div>
    );
  }
}

export default App;
