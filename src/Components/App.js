import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Header from 'Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
