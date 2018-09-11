import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';

class Step3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 3
        }
    }

    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
    }
    render() {
        console.log('propsSTEP3', this.props);
        const {
            title1, 
            title2, 
            title3, 
            title4, 
            title5, 
            step3,
            currentStep,
            changingStep,
            handleUpdateNavigation
        } = this.props;
        return (
            <div className='stepBox'>
                <Title title={title3} step={step3}/>
                <form className='form'>
                    <p>Paso 3</p>
                </form>
                <Navigation 
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                />
            </div>
        );
    }
}

export default Step3;