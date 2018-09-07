import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import TypeEmailInput from './TypeEmailInput';
import TypePhoneInput from './TypePhoneInput';
import TypeTextInput from './TypeTextInput';
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

class Step5 extends Component {
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
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep
        } = this.props;
        return (
            <div className='stepBox'>
                <Title
                    title={title5}
                    step={step5}
                />
                <form className='form'>

                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                        <FormattedMessage
                            id="Step5.numerousFamily"
                            defaultMessage="Numerous Family"
                        />
                    </label>

                    <TypeTextInput inputText={familyNumberInput} />

                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                        <FormattedMessage
                            id="Step5.residentOutsidePeninsula"
                            defaultMessage="Resident outside Iberian Peninsula"
                        />
                    </label>

        {/*Falta por traducir*/}

                    <select>
                        <option>
                        <FormattedMessage
                            id="Step5.selectPlaceResidence"
                            defaultMessage="Select place of residence"
                        />
                        Selecciona lugar de residencia
                        </option>
                    </select>

        {/*Falta por traducir*/}

                    <h2><FormattedMessage
                            id="Step5.emergencyContact"
                            defaultMessage="Emergency contact"
                        />
                        Contacto en caso de emergencia</h2>
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
                    previousStep={previousStep}
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </div>
        );
    }
}

export default Step5;