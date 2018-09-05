import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

class Navigation extends Component {
    render() {
        console.log('props NAVIGATION', this.props);
        const {
          title1,
          title2,
          dot1,
          dot2,
          previousStep,
          followingStep,
          handleClickPreviousStep,
          handleClickFollowingStep
        } = this.props;
      return (
        <div>
            <nav>
              <ul>
                <li>
                  <Icon state={dot1}/>
                  <p>{title1}</p>
                </li>
                <li>
                  <Icon state={dot2}/>
                  <p>{title2}</p>
                </li>
                <li>
                  {/* <Icon /> */}
                  <p></p>
                </li>
                <li>
                  {/* <Icon /> */}
                  <p></p>
                </li>
                <li>
                  {/* <Icon /> */}
                  <p></p>
                </li>
              </ul>
            </nav>
            
            
            <Link to={`/step/${previousStep}`}><button onClick={handleClickPreviousStep}>Anterior</button></Link>
            <Link to={`/step/${followingStep}`}><button onClick={handleClickFollowingStep}>Siguiente</button></Link>
        </div>
      );
    }
  }

export default Navigation;