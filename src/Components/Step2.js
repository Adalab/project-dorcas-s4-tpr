import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step2 extends Component {
    render() { 
        const {
            title1,
            title2,
            step2,
            dot1,
            dot2,
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep
        } = this.props;
        console.log('props STEP2', this.props);
        return ( 
            <Fragment>
            <Title 
                title={title2} 
                step={step2}
            />
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

                    <h1>STEP 5</h1>

                        <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                        Familia numerosa</label>
                        <label htmlFor='familyNumber'></label>
                        <input id='familyNumber' type='text' name='familyNumber' placeholder='Número de integrantes' value='' />

                        <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                        Residente fuera de la península</label>

                        <select>
                            <option>Selecciona lugar de residencia</option>
                        </select>

                        <h2>Contacto en caso de emergencia</h2>
                            <select>
                                <option>Parentesco</option>
                                <option>Padre/Madre</option>
                                <option>Hermano</option>
                                <option>Pareja</option>
                                <option>Otro</option>
                            </select>
                            <label htmlFor='emergencyContactName'></label>
                            <input id='emergencyContactName' type='text' name='emergencyContactName' placeholder='Nombre y Apellidos' value='' />
                            <label htmlFor='emergencyContactEmail'></label>
                            <input id='emergencyContactEmail' type='text' name='emergencyContactEmail' placeholder='Email' value='' />
                            <label htmlFor='emergencyContactPhone'></label>
                            <input id='emergencyContactPhone' type='text' name='emergencyContactPhone' placeholder='Número de teléfono' value='' />

                </form>
            <Navigation 
                title1={title1}
                title2={title2}
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