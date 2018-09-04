import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
