import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import TypeEmailInput from './TypeEmailInput';
import TypePhoneInput from './TypePhoneInput';

const emailAdress = {
    id: 'email',
    name: 'email',
    disable: true
};

const mobilePhoneNumber = {
    labelContent: 'Teléfono móvil',
    id: 'mobilePhone',
    name: 'mobilePhone',
    required: true
};

const landLineNumber = {
    labelContent: 'Teléfono fijo',
    id: 'landLinePhone',
    name: 'landLinePhone',
    required: false
};

class Step1 extends Component {
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
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep
        } = this.props;
        return (
            <Fragment>
                <Title 
                    title={title1} 
                    step={step1}
                />
                <form>
                    <label htmlFor='surname'></label>
                    <input id='surname' type='text' name='surname' placeholder='Apellidos' value=''/>
                    <label htmlFor='name'></label>
                    <input id='name' type="text" name='name' placeholder='Nombre' value=''/>
                    <TypePhoneInput phoneNumber={mobilePhoneNumber}/>
                    <TypePhoneInput phoneNumber={landLineNumber}/>
                    <TypeEmailInput emailAdress={emailAdress}/>
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
                    previousStep={previousStep} 
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </Fragment>
        );
    }
}

export default Step1;