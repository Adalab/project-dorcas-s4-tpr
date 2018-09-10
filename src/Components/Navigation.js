import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Sub-components/Icon';
import { FormattedMessage } from 'react-intl';

class Navigation extends Component {
    render() {
        console.log('props NAVIGATION', this.props);
        const {
          title1,
          title2,
          title3,
          title4,
          title5,
          dot1,
          dot2,
          dot3, 
          dot4,
          dot5,
          previousStep,
          followingStep,
          handleClickPreviousStep,
          handleClickFollowingStep,
          handleNextStepClass
        } = this.props;
        
      return (
        <div>
            <nav className='navigation-container'>
            <Link to={`/step/${previousStep}`}><button className={handleClickPreviousStep} onClick={handleClickPreviousStep}>
            <FormattedMessage
              id="Navigation.back"
              defaultMessage="Back"
            />
            </button></Link>
              <ul className='list-steps'>
                <li>
                  <Icon state={dot1}/>
                  <p>{title1}</p>
                </li>
                <li>
                  <Icon state={dot2}/>
                  <p>{title2}</p>
                </li>
                <li>
                  <Icon state={dot3}/>
                  <p>{title3}</p>
                </li>
                <li>
                  <Icon state={dot4}/>
                  <p>{title4}</p>
                </li>
                <li>
                  <Icon state={dot5}/>
                  <p>{title5}</p>
                </li>
              </ul>
              <Link to={`/step/${followingStep}`}><button onClick={handleClickFollowingStep}>
              <FormattedMessage
                id="Navigation.next"
                defaultMessage="Next"
              />
              
              </button></Link>
              <Link to={`/step/${followingStep}`}><p className={handleNextStepClass}>Completar luego Saltar paso</p></Link>
            </nav>  
        </div>
      );
    }
  }

export default Navigation;