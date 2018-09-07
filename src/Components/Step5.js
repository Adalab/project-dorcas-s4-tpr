import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import TypeEmailInput from './TypeEmailInput';
import TypePhoneInput from './TypePhoneInput';
import TypeTextInput from './TypeTextInput';
import { FormattedMessage } from 'react-intl';
import TypeSelect from './TypeSelect';

const familyNumberInput = {
    labelContent: 'MESSAGE TRANSLATE FAMILY',
    id: 'familyNumber',
    name: 'familyNumber'
};

const emergencyContactInput = {
    labelContent: 'MESSAGE TRANSLATE EMERGENCY CONTACT',
    id: 'emergencyContactName',
    name: 'emergencyContactName'
};

const emailAdress = {
    id: 'emergencyContactEmail',
    name: 'emergencyContactEmail',
    disable: false
};

const emergencyContactPhone = {
    labelContent: 'Número de teléfono',
    id: 'emergencyContactPhone',
    name: 'emergencyContactPhone',
    required: true
};

const options = ['Canarias', 'Baleares', 'Ceuta', 'Melilla']

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


                   <TypeSelect options={options} />

                    <h2>Contacto en caso de emergencia</h2>
                    <div className='emergencyContact-step5'>
                        <select className='select-step5'>
                            <option>Parentesco</option>
                            <option>Padre/Madre</option>
                            <option>Hermano</option>
                            <option>Pareja</option>
                            <option>Otro</option>
                        </select>
                        <div className='emergencyContact-container'>
                            <TypeTextInput inputText={emergencyContactInput} />
                            <TypeEmailInput emailAdress={emailAdress} />
                            <TypePhoneInput phoneNumber={emergencyContactPhone} />
                        </div>
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