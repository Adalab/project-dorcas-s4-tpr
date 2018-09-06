import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from './TypeTextInput';

const countryIssueInput = {
    labelContent: 'País de emisión',
    id: 'countryIssue',
    name: 'countryIssue'
};

const birthPlaceInput = {
    labelContent: 'Lugar de nacimiento',
    id: 'birthPlace',
    name: 'birthPlace'
};

const numPassportInput = {
    labelContent: <FormattedMessage
                    id="Step2.userPassportNumber"
                    defaultMessage="Passport number"
                    />,
    id: 'numPassport',
    name: 'numPassport'
};

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

                        <TypeTextInput inputText={numPassportInput} />
                        <TypeTextInput inputText={countryIssueInput} />
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'>F.emisión</label>
                            <input id='dateIssue' type='number' name='dateIssue' value='' />
                            <label htmlFor='expirationDate'>F.expiración</label>
                            <input id='expirationDate' type='number' name='expirationDate' value='' />
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
                            <input id='dateIssue' type='number' name='dateIssue' value='' />
                            <label htmlFor='expirationDate'>F.expiración</label>
                            <input id='expirationDate' type='number' name='expirationDate' value='' />
                        </div>
                        <TypeTextInput inputText={birthPlaceInput} />
                
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