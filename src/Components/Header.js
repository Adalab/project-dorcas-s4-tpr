import React, { Component } from 'react';
import logo from '../Images/img-logo-triporate.svg';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <div>
        <p>
          <FormattedMessage
            id="Header.dayMessage"
            defaultMessage="It's a beautiful day outside."
          />
        </p>
        <img alt ='logo' src={logo}/>
      </div>
    );
  }
}

export default Header;
