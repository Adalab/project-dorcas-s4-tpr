import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step3 extends Component {
    render() {
        console.log(this.props);
        const {title1, title2, title3, title4, title5, step3, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <div className='stepBox'>
                <Title title={title3} step={step3}/>
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

export default Step3;