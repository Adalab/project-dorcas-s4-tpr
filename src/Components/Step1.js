import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step1 extends Component {
    render() {
        console.log(this.props);
        const { title1, step1, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep } = this.props;
        return (
            <div className='stepBox'>
                <Title title={title1} step={step1} />
                <form className='form'>
                    <label htmlFor='surname'>Apellidos</label>
                    <input id='surname' type='text' name='surname' value='' />
                    <label htmlFor='name'>Nombre</label>
                    <input id='name' type="text" name='name' value='' />
                    <div className='phones'>
                        <label htmlFor='mobilePhone'>Teléfono móvil</label>
                        <input id='mobilePhone' type='text' name='mobilePhone' value='' />
                        <label htmlFor='landlinePhone'>Teléfono fijo</label>
                        <input id='landlinePhone' type='text' name='landlinePhone' placeholder='opcional' value='' />
                    </div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' name='email' placeholder='me@aboutjunior.com' disabled />
                </form>
                <Navigation
                    dot1={dot1}
                    dot2={dot2}
                    previousStep={previousStep}
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </div>
        );
    }
}

export default Step1;