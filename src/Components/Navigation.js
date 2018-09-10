import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import '../scss/Navigation.css';
import Button from './Button';
import { FormattedMessage } from 'react-intl';

const backButton = {
  textButton: <FormattedMessage
                id="Navigation.back"
                defaultMessage="Back"
              />,
  buttonClass: ''
};

const nextButton = {
  textButton: <FormattedMessage
                id="Navigation.next"
                defaultMessage="Next"
              />,
  buttonClass: ''
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
          dot1,
          dot2,
          dot3, 
          dot4,
          dot5,
          currentStep,
          previousStep,
          followingStep,
          changingStep,
          handleClickPreviousStep,
          handleClickFollowingStep,
          handleNextStepClass
        } = this.props;

        const {
          changingStep1,
          changingStep2,
          changingStep3,
          changingStep4,
          changingStep5,
        } = changingStep;

        // const activeClass = 'stepActive';
        // const inactiveClass = 'stepInactive';
        // const completedClass = 'stepCompleted';

      return (
        <div>
            <nav className='navigation-container'>
            <Link to={`/step/${previousStep}`}>
              <Button 
                onClick={handleClickPreviousStep}
                buttonContent={backButton}
              />
            </Link>
              <ul className='list-steps'>
                <li>
                  <Icon 
                    active={dot1}
                    title={title1}
                    changingStep={changingStep1}
                    currentStep={currentStep}
                  />
                </li>
                <li>
                  <Icon 
                    active={dot2}
                    title={title2}
                    changingStep={changingStep2}
                    currentStep={currentStep}
                  />
                </li>
                <li>
                  <Icon 
                    active={dot3}
                    title={title3}
                    changingStep={changingStep3}
                    currentStep={currentStep}
                  />
                </li>
                <li>
                  <Icon 
                    active={dot4}
                    title={title4}
                    changingStep={changingStep4}
                    currentStep={currentStep}
                  />
                </li>
                <li>
                  <Icon 
                    active={dot5}
                    title={title5}
                    changingStep={changingStep5}
                    currentStep={currentStep}
                  />
                </li>
              </ul>
              <Link to={`/step/${followingStep}`}>
                <Button 
                  onClick={handleClickFollowingStep}
                  buttonContent={nextButton}
                />      
              </Link>
              <Link to={`/step/${followingStep}`}><p className={handleNextStepClass}>Completar luego Saltar paso</p></Link>
            </nav>  
        </div>
      );
    }
  }

export default Navigation;