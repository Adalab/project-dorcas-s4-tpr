import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import TypeEmailInput from './TypeEmailInput';

const emailAdress = {
    id: 'email',
    name: 'email',
    disable: true
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
                    <label htmlFor='mobilePhone'></label>
                    <input id='mobilePhone' type='number' name='mobilePhone' placeholder='Teléfono móvil' value=''/>
                    <label htmlFor='landlinePhone'></label>
                    <input id='landlinePhone' type='number' name='landlinePhone' placeholder='Teléfono fijo' value=''/>
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