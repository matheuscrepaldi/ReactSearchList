import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';
import Menu from '../Menu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
