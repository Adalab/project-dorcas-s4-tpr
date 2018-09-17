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
  buttonClass: 'back-button',
  buttonClassHidden: 'hidden',
};

const nextButton = {
  textButton: <FormattedMessage
    id="Navigation.next"
    defaultMessage="Next"
  />,
  buttonClass: 'next-button',
  buttonClassHidden: '',
};

class Navigation extends Component {
  render() {
    // console.log('props NAVIGATION', this.props);
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
      idRoute,
      handleNextStep,
    } = this.props;

    const {
      changingStep1,
      changingStep2,
      changingStep3,
      changingStep4,
      changingStep5,
    } = changingStep;


    return (
      
        <nav className='navigation-container'>
          <Link 
            className='back-button-link'
            to={`/step/${currentStep - 1}/${idRoute}`}
          >
            <Button
              buttonContent={backButton}
              currentStep={currentStep}
            />
          </Link>
          <ul className='list-steps'>
            <Link to={'/step/1/:id'}>
              <li className='nav-steps'>
                <Icon
                  title={title1}
                  changingStep={changingStep1}
                  currentStep={currentStep}
                  handleUpdateNavigation={handleUpdateNavigation}
                />
              </li>
            </Link>
            <Link to={'/step/2/:id'}>
              <li className='nav-steps'>
                <Icon
                  title={title2}
                  changingStep={changingStep2}
                  currentStep={currentStep}
                  handleUpdateNavigation={handleUpdateNavigation}
                />
              </li>
            </Link>
            <Link to={'/step/3/:id'}>
              <li className='nav-steps'>
                <Icon
                  title={title3}
                  changingStep={changingStep3}
                  currentStep={currentStep}
                  handleUpdateNavigation={handleUpdateNavigation}
                />
              </li>
            </Link>
            <Link to={'/step/4/:id'}>
              <li className='nav-steps'>
                <Icon
                  title={title4}
                  changingStep={changingStep4}
                  currentStep={currentStep}
                  handleUpdateNavigation={handleUpdateNavigation}
                />
              </li>
              </Link>
              <Link to={'/step/5/:id'}>
                <li className='nav-steps'>
                  <Icon
                    title={title5}
                    changingStep={changingStep5}
                    currentStep={currentStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                  />
                </li>
              </Link>
          </ul>
            <div className='container-nexts'>
              <Link to={`/step/${currentStep + 1}/${idRoute}`}>
                <Button
                  buttonContent={nextButton}
                  onClick={handleNextStep}
                />
              </Link>
              <Link 
                className='jumpLink' 
                to={`/step/${currentStep + 1}/${idRoute}`}
              >
                <div className={handleNextStepClass}>Completar luego,
              <span className='jumpLink-colorText'> saltar paso</span>
                </div>
              </Link>
            </div>
        </nav>
      
        );
      }
    }
    
export default Navigation;