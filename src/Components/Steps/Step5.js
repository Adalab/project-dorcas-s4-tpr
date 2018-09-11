import React, { Component } from 'react';
import Title from '../Sub-components/Title';
import Navigation from '../Navigation';
import TypeEmailInput from '../Types/TypeEmailInput';
import TypePhoneInput from '../Types/TypePhoneInput';
import TypeTextInput from '../Types/TypeTextInput';
import TypeSelect from '../Types/TypeSelect';
import TypeCheckboxInput from '../Types/TypeCheckboxInput';
import { FormattedMessage } from 'react-intl';

const familyNumberInput = {
    labelContent: <FormattedMessage
        id="Step5.numberMembers"
        defaultMessage="Number of members"
    />,
    id: 'familyNumber',
    name: 'familyNumber'
};

const emergencyContactInput = {
    labelContent: <FormattedMessage
        id="Step5.nameAndSurname"
        defaultMessage="Name and Surname"
    />,
    id: 'emergencyContactName',
    name: 'emergencyContactName'
};

const emailAddress = {
    labelContent: <FormattedMessage
        id="Step5.email"
        defaultMessage="Email"
    />,
    id: 'emergencyContactEmail',
    name: 'emergencyContactEmail',
    disabled: false
};

const emergencyContactPhone = {
    labelContent: <FormattedMessage
        id="Step5.phoneNumber"
        defaultMessage="Phone number"
    />,
    id: 'emergencyContactPhone',
    name: 'emergencyContactPhone',
    required: true
};
const locality = {
    labelContent: <FormattedMessage
        id="Step5.locality"
        defaultMessage="Locality"
    />,
    id: 'Locality',
    name: 'Locality',
    required: true
};

const region = [
    <FormattedMessage
        id="Step5.canaryIslands"
        defaultMessage="Canary Islands"
    />,
    <FormattedMessage
        id="Step5.balearicIslands"
        defaultMessage="Balearic Islands"
    />,
    'Ceuta',
    'Melilla'
];

const classOfSelect = {
    className: 'select-step5'
}

const largeFamily = {
    labelContent: <FormattedMessage
        id="Step5.numerousFamily"
        defaultMessage="Numerous Family"
    />,
    id: 'largeFamily',
    name: 'largeFamily',
    required: true
};

const residentOutside = {
    labelContent: <FormattedMessage
        id="Step5.residentOutsidePeninsula"
        defaultMessage="Resident outside Iberian Peninsula"
    />,
    id: 'residentOutside',
    name: 'residentOutside',
    required: true
};

class Step5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 5
        }
        this.handleFamilyNumber = this.handleFamilyNumber.bind(this)
        this.handleLocality = this.handleLocality.bind(this)
        this.handleEmergencyContact = this.handleEmergencyContact.bind(this)
        this.handleEmailAddress = this.handleEmailAddress.bind(this)
        this.handleEmergencyContact = this.handleEmergencyContact.bind(this)

    }
    componentDidMount() {
        this.props.handleCurrentStep(this.state.currentStep);
    }

    handleFamilyNumber() {
        console.log('click family number')
    }

    handleLocality() {
        console.log('click locality')
    }

    handleEmergencyContact(){
        console.log('click emergency contact')
    }

    handleEmailAddress(){
        console.log('click email address')
    }

    handleEmergencyContact(){
        console.log('click emergency contact')
    }

    render() {
        console.log('STEP5', this.props);
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step5,
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
            <div className='stepBox step5'>
                <Title
                    title={title5}
                    step={step5}
                />
                <form className='form'>
                    <TypeCheckboxInput contentCheckbox={largeFamily} />
                    <TypeTextInput
                        onChange={this.handleFamilyNumber}
                        inputText={familyNumberInput}
                    />

                    <TypeCheckboxInput contentCheckbox={residentOutside} />
                    <TypeSelect
                    classOfSelect={classOfSelect} 
                    options={region} />
                    <TypeTextInput
                        onChange={this.handleLocality}
                        inputText={locality}
                    />

                    <h2><FormattedMessage
                        id="Step5.emergencyContact"
                        defaultMessage="Emergency contact"
                    />
                    </h2>
                    <div className='emergencyContact-container'>
                        <TypeTextInput
                            onChange={this.handleEmergencyContact}
                            inputText={emergencyContactInput}
                        />
                        <TypeEmailInput
                            onChange={this.handleEmailAddress}
                            emailAdress={emailAddress}
                        />
                        <TypePhoneInput
                            onChange={this.handleEmergencyContact}
                            phoneNumber={emergencyContactPhone}
                        />
                    </div>
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
                    currentStep={currentStep}
                    changingStep={changingStep}
                />
            </div>
        );
    }
}

export default Step5;