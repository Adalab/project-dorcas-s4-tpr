import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.js';


class App extends Component {
  render() {
    return (
      <div>
        <p>It is a beautiful day outside.</p>
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
