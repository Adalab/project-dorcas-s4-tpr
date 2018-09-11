import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Sub-components/Button';
import Icon from './Sub-components/Icon';
import { FormattedMessage } from 'react-intl';

const backButton = {
  textButton: <FormattedMessage
                id="Navigation.back"
                defaultMessage="Back"
              />,
  buttonClass: '',
  buttonClassHidden: 'hidden',
};

const nextButton = {
  textButton: <FormattedMessage
                id="Navigation.next"
                defaultMessage="Next"
              />,
  buttonClass: '',
  buttonClassHidden: '',
};

class Navigation extends Component {
    render() {
        console.log('props NAVIGATION', this.props);
        const {
          title1,
          title2,
          title3,
          title4,
          title5,
          currentStep,
          changingStep,
          handleUpdateNavigation,
          handleNextStepClass,
        } = this.props;

        const {
          changingStep1,
          changingStep2,
          changingStep3,
          changingStep4,
          changingStep5,
        } = changingStep;

      return (
        <div>
            <nav className='navigation-container'>
            <Link to={`/step/${currentStep-1}`}>
              <Button 
                buttonContent={backButton}
                currentStep={currentStep}
              />
            </Link>
              <ul className='list-steps'>
                <li>
                  <Icon
                    title={title1}
                    changingStep={changingStep1}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
                <li>
                  <Icon 
                    title={title2}
                    changingStep={changingStep2}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
                <li>
                  <Icon 
                    title={title3}
                    changingStep={changingStep3}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
                <li>
                  <Icon 
                    title={title4}
                    changingStep={changingStep4}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
                <li>
                  <Icon 
                    title={title5}
                    changingStep={changingStep5}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
              </ul>
              <Link to={`/step/${currentStep+1}`}>
                <Button 
                  buttonContent={nextButton}
                />      
              </Link>
              <Link to={`/step/${currentStep+1}`}><p className={handleNextStepClass}>Completar luego Saltar paso</p></Link>
            </nav>  
        </div>
      );
    }
  }

export default Navigation;