import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import TypeEmailInput from '../Types/TypeEmailInput';
import TypePhoneInput from '../Types/TypePhoneInput';
import TypeTextInput from '../Types/TypeTextInput';

const surnameInput = {
    labelContent: <FormattedMessage
        id="Step1.userSurname"
        defaultMessage="Surname"
    />,
    id: 'surname',
    name: 'surname'
};

const nameInput = {
    labelContent: <FormattedMessage
        id="Step1.userName"
        defaultMessage="Name"
    />,
    id: 'name',
    name: 'name'
};

const emailAdress = {
    labelContent: <FormattedMessage
        id="Step1.email"
        defaultMessage="Email"
    />,
    id: 'email',
    name: 'email',
    disabled: true
};

const mobilePhoneNumber = {
    labelContent: <FormattedMessage
        id="Step1.mobilePhone"
        defaultMessage="Mobile Phone"
    />,
    id: 'mobilePhone',
    name: 'mobilePhone',
    required: true
};

const landLineNumber = {
    labelContent: <FormattedMessage
        id="Step1.landLinePhoneNumber"
        defaultMessage="Landline phone number"
    />,
    id: 'landLinePhone',
    name: 'landLinePhone',
    required: false
};

class Step1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 1
        }

        this.handleSurnameInput = this.handleSurnameInput.bind(this)
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
        this.handleLineNumber = this.handleLineNumber.bind(this)
    }
    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
    }
    
    handleNextStepClass(){
        if(this.props.currentStep===1){
            return 'hidden'
        }
    }

    handleSurnameInput(){
        console.log('click surname')
    }

    handleNameInput(){
        console.log('click name')
    }

    handlePhoneNumber(){
        console.log('click phone')
    }

    handleLineNumber(){
        console.log('click line numb')
    }

    render() {
        console.log('props STEP1', this.props);
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step1,
            currentStep,
            changingStep,
        } = this.props;
        return (
            <div className='stepBox'>
                <Title
                    title={title1}
                    step={step1}
                />
                <form className='form'>
                    <TypeTextInput inputText={surnameInput} onChange={this.handleSurnameInput} />
                    <TypeTextInput inputText={nameInput} onChange={this.handleNameInput}/>
                    <div className='phones'>
                        <TypePhoneInput onChange={this.handlePhoneNumber} phoneNumber={mobilePhoneNumber} />
                        <TypePhoneInput onChange={this.handleLineNumber} phoneNumber={landLineNumber} />
                    </div>
                    <TypeEmailInput emailAdress={emailAdress} />
                </form>
                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                    handleNextStepClass={this.handleNextStepClass()}
                />
            </div>
        );
    }
}

export default Step1;