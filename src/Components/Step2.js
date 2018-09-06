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

                        <label htmlFor='countryIssue'>
                            <FormattedMessage
                                id="Step2.userPassCountryIssue"
                                defaultMessage="Country of issue"
                             />
                        </label>
                        <input id='countryIssue' type='text' name='countryIssue' value='' />
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'>
                                <FormattedMessage
                                    id="Step2.userPassDateIssue"
                                    defaultMessage="Date of issue"
                                />
                            </label>
                            <input id='dateIssue' type='text' name='dateIssue' value='' />

                            <label htmlFor='expirationDate'>
                                <FormattedMessage
                                    id="Step2.userPassExpirationDate"
                                    defaultMessage="Expiration date"
                                />
                            </label>
                            <input id='expirationDate' type='text' name='expirationDate' value='' />
                        </div>

                        <h2>
                            <FormattedMessage
                                id="Step2.visa"
                                defaultMessage="Visa (optional)"
                            />
                        </h2>

                        <div>
                            <FormattedMessage
                                id="Step2.addVisaDetails"
                                defaultMessage="Add visa details"
                            />
                        </div>

                        <h2>
                            <FormattedMessage
                                id="Step2.dniNie"
                                defaultMessage="Id"
                            />
                        </h2>

                        <div className='verticalDisplay'>
                            <label htmlFor='documentType'>
                            </label>
                            <select id='documentType' name='documentType' value=''>
                                <option value="">
                                    <FormattedMessage
                                        id="Step2.type"
                                        defaultMessage="Type"
                                    />
                                </option>

                            </select>

                            <label htmlFor='documentNumber'>
                                <FormattedMessage
                                    id="Step2.userDocumentNumber"
                                    defaultMessage="Document number"
                                />
                            </label>

                            <input id='documentNumber' type='text' name='documentNumber' value='' />
                        </div>
                        <div className='verticalDisplay'>
                            <label htmlFor='dateIssue'>
                                <FormattedMessage
                                    id="Step2.userDocDateIssue"
                                    defaultMessage="Date of issue"
                                />
                            </label>
                            <input id='dateIssue' type='text' name='dateIssue' value='' />
                            <label htmlFor='expirationDate'>
                                <FormattedMessage
                                    id="Step2.userDocExpirationDate"
                                    defaultMessage="Expiration date"
                                />
                            </label>
                            <input id='expirationDate' type='text' name='expirationDate' value='' />
                        </div>
                        <label htmlFor='birthDate'>
                            <FormattedMessage
                                id="Step2.userBirthPlace"
                                defaultMessage="Place of birth"
                            />
                        </label>
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