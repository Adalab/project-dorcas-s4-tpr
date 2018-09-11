import React, { Component } from 'react';
import logo from '../images/img-logo-triporate.svg';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img className='logoTRP' src={logo} alt='Logo Triporate'/> 
        <img src=''/>
      </div>
    );
  }
}

export default Header;
