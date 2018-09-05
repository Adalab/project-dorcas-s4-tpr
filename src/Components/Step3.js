import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step3 extends Component {
    render() {
        console.log(this.props);
        const {title3, step3, dot1, dot2, dot3, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title3} step={step3}/>
                <form>
                </form>
                <Navigation 
                    dot1={dot1} 
                    dot2={dot2}
                    dot3={dot3}
                    previousStep={previousStep} 
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </Fragment>
        );
    }
}

export default Step3;