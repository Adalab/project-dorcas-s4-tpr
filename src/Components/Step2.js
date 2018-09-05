import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step2 extends Component {
    render() { 
        const {title2, step2, dot1, dot2, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return ( 
            <Fragment>
            <Title title={title2} step={step2}/>
            <form>
                    <fieldset>

                        <h2>Pasaporte</h2>

                        <label htmlFor='numPassport'></label>
                        <input id='numPassport' type='text' name='numPassport' placeholder='Número de pasaporte' value='' />
                        <label htmlFor='countryIssue'></label>
                        <input id='countryIssue' type='text' name='countryIssue' placeholder='País de emisión' value='' />
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'></label>
                            <input id='dateIssue' type='text' name='dateIssue' placeholder='F.emisión' value='' />
                            <label htmlFor='expirationDate'></label>
                            <input id='expirationDate' type='text' name='expirationDate' placeholder='F.expiración' value='' />
                        </div>

                        <h2>Visado (opcional)</h2>

                        <div>Agregar detalles del visado</div>

                        <h2>Dni/Nie</h2>

                        <div className='verticalDisplay'>
                            <label htmlFor='documentType'></label>
                            <select id='documentType' name='documentType' placeholder='Número de pasaporte' value=''>
                                <option value="">Tipo</option>

                            </select>

                            <label htmlFor='documentNumber'></label>
                            <input id='documentNumber' type='text' name='documentNumber' placeholder='Número de documento' value='' />
                        </div>
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'></label>
                            <input id='dateIssue' type='text' name='dateIssue' placeholder='F.emisión' value='' />
                            <label htmlFor='expirationDate'></label>
                            <input id='expirationDate' type='text' name='expirationDate' placeholder='F.expiración' value='' />
                        </div>
                        <label htmlFor='birthDate'></label>
                        <input id='birthDate' type='text' name='birthDate' placeholder='Lugar de nacimiento' value='' />
                    </fieldset>
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
 
export default Step2;