import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
// import './Main.css';

class Pages extends Component {
  render() {
    console.log('props PAGES', this.props);
    const { title1, title2, step1, step2, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep } = this.props;
    return (
      <Fragment>
        <Switch>
          <Route
            path='/step/1'
            render={props =>
              <Step1
                title1={title1}
                title2={title2}
                step1={step1}
                dot1={dot1}
                dot2={dot2}
                previousStep={previousStep}
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
              />}
          />
          <Route
            path='/step/2'
            render={props =>
              <Step2
                title1={title1}
                title2={title2}
                step2={step2}
                dot1={dot1}
                dot2={dot2}
                previousStep={previousStep}
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
              />}
          />
        </Switch>

      </Fragment>
    );
  }
}

export default Pages;
