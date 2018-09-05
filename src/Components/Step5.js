import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step5 extends Component {
    render() {
        console.log(this.props);
        const {title1, title2, title3, title4, title5, step5, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title5} step={step5}/>
                <form>
                <p>holi</p>
                </form>
                <Navigation 
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
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

export default Step5;