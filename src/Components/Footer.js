import React, { Component } from 'react';
import Button from './Button.js';
import '../scss/layout/Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className='footer'>
        <Button />
        <ul>
          <li>
            <span>1</span>
            <p>Datos personales</p>
          </li>
          <li>
            <span>2</span>
            <p>Documentos de viaje</p>
          </li>
          <li>
            <span>3</span>
            <p>Método de pago</p>
          </li>
          <li>
            <span>4</span>
            <p>Preferencias de viaje</p>
          </li>
          <li>
            <span>5</span>
            <p>Extras</p>
          </li>
        </ul>
        <Button />
      </nav>
    );
  }
}

export default Footer;
