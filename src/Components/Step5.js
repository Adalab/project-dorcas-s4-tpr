import React, { Component, Fragment } from 'react';
import Title from './Title';
import Navigation from './Navigation';

class Step5 extends Component {
    render() {
        console.log(this.props);
        const {title1, title2, title3, title4, title5, step5, dot1, dot2, dot3, dot4, dot5, previousStep, followingStep, handleClickPreviousStep, handleClickFollowingStep} = this.props;
        return (
            <Fragment>
                <Title title={title5} step={step5}/>
                <form>

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
            </Fragment>
        );
    }
}

export default Step5;