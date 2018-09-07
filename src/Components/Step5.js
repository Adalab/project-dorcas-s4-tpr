import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import TypeEmailInput from './TypeEmailInput';
import TypePhoneInput from './TypePhoneInput';
import { FormattedMessage } from 'react-intl';

const emailAdress = {
    id: 'emergencyContactEmail',
    name: 'emergencyContactName',
    disable: false
};

const emergencyContactPhone = {
    labelContent: 'Número de teléfono',
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
                        <label htmlFor='familyNumber'>
                            <FormattedMessage
                                id="Step5.numberMembers"
                                defaultMessage="Number of members"
                            />
                        </label>
                        <input id='familyNumber' type='text' name='familyNumber' value='' />

                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                                <FormattedMessage
                                    id="Step5.residentOutsidePeninsula"
                                    defaultMessage="Resident outside Iberian Peninsula"
                                />
                        </label>
                    <select>
                        <option>Selecciona lugar de residencia</option>
                    </select>

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
                            <label htmlFor='emergencyContactName'></label>
                            <input id='emergencyContactName' type='text' name='emergencyContactName' placeholder='Nombre y Apellidos' value='' />
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