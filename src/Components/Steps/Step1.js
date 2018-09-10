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
    }
    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
    }
    
    handleNextStepClass(){
        if(this.props.currentStep===1){
            return 'hidden'
        }
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
            dot1,
            dot2,
            dot3,
            dot4,
            dot5,
            currentStep,
            changingStep,
            handleUpdateNavigation
        } = this.props;
        return (
            <div className='stepBox'>
                <Title
                    title={title1}
                    step={step1}
                />
                <form className='form'>
                    <TypeTextInput inputText={surnameInput} />
                    <TypeTextInput inputText={nameInput} />
                    <div className='phones'>
                        <TypePhoneInput phoneNumber={mobilePhoneNumber} />
                        <TypePhoneInput phoneNumber={landLineNumber} />
                    </div>
                    <TypeEmailInput emailAdress={emailAdress} />
                </form>
                <Navigation
                    dot1={dot1}
                    dot2={dot2}
                    dot3={dot3}
                    dot4={dot4}
                    dot5={dot5}
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    currentStep={currentStep}
                    changingStep={changingStep}
                    handleUpdateNavigation={handleUpdateNavigation}
                    handleNextStepClass={this.handleNextStepClass()}
                />
            </div>
        );
    }
}

export default Step1;