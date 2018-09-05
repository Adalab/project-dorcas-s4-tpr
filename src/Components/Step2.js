import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step2 extends Component {
    render() { 
        const {title2, step2, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return ( 
            <Fragment>
            <Title title={title2} step={step2}/>
            <p>Estupendamente</p>
            <Navigation 
                dot1={dot1} 
                dot2={dot2}
                previousStep={previousStep} 
                followingStep={followingStep}
                handleClickPreviousStep={handleClickPreviousStep}
                handleClickFollowingStep={handleClickFollowingStep}
            />
            </Fragment>
         );
    }
}
 
export default Step2;