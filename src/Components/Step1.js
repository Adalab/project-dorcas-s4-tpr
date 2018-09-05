import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step1 extends Component {
    render() {
        console.log(this.props);
        const {title1, step1, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title1} step={step1}/>
                <p> Formulario 1 </p>
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

export default Step1;