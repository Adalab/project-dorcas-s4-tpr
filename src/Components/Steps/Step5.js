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
    disable: false
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
    constructor(props){
        super(props)
        this.state = {
            currentStep: 5
        }
    }
    componentDidMount(){
        this.props.handleCurrentStep(this.state.currentStep);
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
            <div className='stepBox'>
                <Title
                    title={title5}
                    step={step5}
                />
                <form className='form'>
                    <TypeCheckboxInput contentCheckbox={largeFamily} />
                    <TypeTextInput inputText={familyNumberInput} />

                    <TypeCheckboxInput contentCheckbox={residentOutside} />
                    <TypeSelect options={region} />
                    <TypeTextInput inputText={locality} />

                    <h2><FormattedMessage
                        id="Step5.emergencyContact"
                        defaultMessage="Emergency contact"
                    />
                    </h2>
                    <div className='emergencyContact-container'>
                        <TypeTextInput inputText={emergencyContactInput} />
                        <TypeEmailInput emailAdress={emailAddress} />
                        <TypePhoneInput phoneNumber={emergencyContactPhone} />
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
                    handleUpdateNavigation={handleUpdateNavigation}
                />
            </div>
        );
    }
}

export default Step5;