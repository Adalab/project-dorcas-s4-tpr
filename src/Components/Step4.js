import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step4 extends Component {
    render() {
        console.log(this.props);
        const {title1, title2, title3, title4, title5, step4, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <div className='stepBox'>
                <Title title={title4} step={step4}/>
                <form className='form'>
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
            </div>
        );
    }
}

export default Step4;