import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step4 extends Component {
    render() {
        console.log(this.props);
        const {title4, step4, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title4} step={step4}/>
                <form>
                <p>holi</p>
                </form>
                <Navigation 
                    dot1={dot1} 
                    dot2={dot2}
                    dot3={dot3}
                    dot4={dot4}
                    dot5={dot5}
                    previousStep={previousStep} 
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </Fragment>
        );
    }
}

export default Step4;