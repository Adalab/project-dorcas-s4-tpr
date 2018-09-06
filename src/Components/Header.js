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
        <img src={logo}></img>
        <img src='' ></img>
      </div>
    );
  }
}

export default Header;
