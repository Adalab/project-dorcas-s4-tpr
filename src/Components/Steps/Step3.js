import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';

class Step3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 3,
            idRoute:'',
        }
    }

    componentDidMount(){
        const idRoute = this.props.match.params.id;
        this.props.handleCurrentStep(this.state.currentStep);
        this.props.handleIdRoute(idRoute);
        this.setState({
            idRoute: idRoute,
        })
    }
    render() {
        const {
            title1, 
            title2, 
            title3, 
            title4, 
            title5, 
            step3,
            currentStep,
            changingStep,
            handleNextStep,
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
                    idRoute={this.state.idRoute}
                    handleNextStep={handleNextStep}
                />
            </div>
        );
    }
}

export default Step3;