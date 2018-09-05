import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step1 extends Component {
    render() {
        console.log(this.props);
        const {title1, step1, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title1} step={step1}/>
                <form>
                    <label htmlFor='surname'></label>
                    <input id='surname' type='text' name='surname' placeholder='Apellidos' value=''/>
                    <label htmlFor='name'></label>
                    <input id='name' type="text" name='name' placeholder='Nombre' value=''/>
                    <label htmlFor='mobilePhone'></label>
                    <input id='mobilePhone' type='number' name='mobilePhone' placeholder='Teléfono móvil' value=''/>
                    <label htmlFor='landlinePhone'></label>
                    <input id='landlinePhone' type='number' name='landlinePhone' placeholder='Teléfono fijo' value=''/>
                    <label htmlFor='email'></label>
                    <input id='email' type='text' name='email' placeholder='me@aboutjunior.com' disabled/>
                </form>
                <Navigation 
                    dot1={dot1} 
                    dot2={dot2} 
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