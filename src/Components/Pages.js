import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

class Pages extends Component {
  render() {
    console.log('holi', this.props);
    const { title1, title2, title3, title4, title5, step1,step2, step3, step4, step5, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep } = this.props.state;
    const {handleClickPreviousStep, handleClickFollowingStep} = this.props;
    return (
      <Fragment>
        <Switch>
          <Route
            path='/step/1'
            render={props =>
              <Step1
                title1={title1}
                step1={step1}
                dot1={dot1}
                dot2={dot2}
                dot3={dot3}
                dot4={dot4}
                dot5={dot5}
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
                title2={title2}
                step2={step2}
                dot1={dot1}
                dot2={dot2}
                dot3={dot3}
                dot4={dot4}
                dot5={dot5}
                previousStep={previousStep}
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
              />}
          />
          <Route
            path='/step/3'
            render={props =>
              <Step3
                title3={title3}
                step3={step3}
                dot1={dot1}
                dot2={dot2}
                dot3={dot3}
                dot4={dot4}
                dot5={dot5}
                previousStep={previousStep}
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
              />}
          />
          <Route
            path='/step/4'
            render={props =>
              <Step4
                title4={title4}
                step4={step4}
                dot1={dot1}
                dot2={dot2}
                dot3={dot3}
                dot4={dot4}
                dot5={dot5}
                previousStep={previousStep}
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
              />}
          />
          <Route
            path='/step/5'
            render={props =>
              <Step5
                title5={title5}
                step5={step5}
                dot1={dot1}
                dot2={dot2}
                dot3={dot3}
                dot4={dot4}
                dot5={dot5}
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
