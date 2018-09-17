import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

class Pages extends Component {
  render() {
    const {
      currentStep,
      steps,
      changingStep,
      titles,
    } = this.props.stateObject;

    const{
      personalInformation,
      contactInformation,
      extras,
      emergencyContact,
      travelDocuments
    } = this.props.stateDataObject;

    const {
      title1,
      title2,
      title3,
      title4,
      title5
    } = titles;
    const {
      step1,
      step2,
      step3,
      step4,
      step5
    } = steps;
    const { 
      handleCurrentStep,
      handleStep1,
      handleStep2, 
      handleStep5,
      dataVisa,
      stateAccommodationObject,
      handleStep4,
      handleIdRoute,
      handleNextStep,
    } = this.props;

    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (<Redirect to='/step/1/:id' />)}
          />
          <Route
            name='step1'
            handler={step1}
            exact
            path='/step/1/:id'
            render={props =>
              <Step1
                {...props}
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
                step1={step1}
                currentStep={currentStep}
                changingStep={changingStep}
                handleCurrentStep={handleCurrentStep}
                handleStep1={handleStep1}
                personalInformation={personalInformation}
                contactInformation= {contactInformation}
                handleIdRoute={handleIdRoute}
                handleNextStep={handleNextStep}
              />}
          />
          <Route
            path='/step/2/:id'
            render={props =>
              <Step2
                {...props}
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
                step2={step2}
                currentStep={currentStep}
                changingStep={changingStep}
                handleCurrentStep={handleCurrentStep}
                handleStep2={handleStep2}
                travelDocuments= {travelDocuments}
                dataVisa={dataVisa}
                handleIdRoute={handleIdRoute}
              />}
          />
          <Route
            path='/step/3/:id'
            render={props =>
              <Step3
                {...props}
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
                step3={step3}
                changingStep={changingStep}
                handleCurrentStep={handleCurrentStep}
                currentStep={currentStep}
                handleIdRoute={handleIdRoute}
              />}
          />
          <Route
            path='/step/4/:id'
            render={props =>
              <Step4
                {...props}
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
                step4={step4}
                currentStep={currentStep}
                changingStep={changingStep}
                handleCurrentStep={handleCurrentStep}
                stateAccommodationObject={stateAccommodationObject}
                handleStep4={handleStep4}
                handleIdRoute={handleIdRoute}
              />}
          />
          <Route
            path='/step/5/:id'
            render={props =>
              <Step5
                {...props}
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
                step5={step5}
                currentStep={currentStep}
                changingStep={changingStep}
                handleCurrentStep={handleCurrentStep}
                extras={extras}
                emergencyContact={emergencyContact}
                handleStep5={handleStep5}
                handleIdRoute={handleIdRoute}
              />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Pages;
