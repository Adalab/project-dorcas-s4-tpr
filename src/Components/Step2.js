import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';

class Step2 extends Component {
    render() { 
        const {
            title1,
            title2,
            title3, 
            title4,
            title5,
            step2,
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
        console.log('props STEP2', this.props);
            return (
            <div className='stepBox'>
            <Title 
                title={title2} 
                step={step2}
            />
            <form className='form'>

                        <h2>
                            <FormattedMessage
                                id="Step2.passport"
                                defaultMessage="Passport"
                            />
                        </h2>

                        <label htmlFor='numPassport'>
                            <FormattedMessage
                                id="Step2.userPassportNumber"
                                defaultMessage="Passport number"
                             />
                        </label>
                        <input id='numPassport' type='text' name='numPassport' value=''/>
                        <label htmlFor='countryIssue'>País de emisión</label>
                        <input id='countryIssue' type='text' name='countryIssue' value='' />
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'>F.emisión</label>
                            <input id='dateIssue' type='text' name='dateIssue' value='' />
                            <label htmlFor='expirationDate'>F.expiración</label>
                            <input id='expirationDate' type='text' name='expirationDate' value='' />
                        </div>

                        <h2>Visado (opcional)</h2>

                        <div>Agregar detalles del visado</div>

                        <h2>Dni/Nie</h2>

                        <div className='verticalDisplay'>
                            <label htmlFor='documentType'>Número de pasaporte</label>
                            <select id='documentType' name='documentType' value=''>
                                <option value="">Tipo</option>

                            </select>

                            <label htmlFor='documentNumber'>Número de documento</label>
                            <input id='documentNumber' type='text' name='documentNumber' value='' />
                        </div>
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'>F.emisión</label>
                            <input id='dateIssue' type='text' name='dateIssue' value='' />
                            <label htmlFor='expirationDate'>F.expiración</label>
                            <input id='expirationDate' type='text' name='expirationDate' value='' />
                        </div>
                        <label htmlFor='birthDate'>Lugar de nacimiento</label>
                        <input id='birthDate' type='text' name='birthDate' value='' />
                
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

export default Step2;