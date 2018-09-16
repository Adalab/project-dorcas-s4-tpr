import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            translationsPlainPreferences,
            translationsTrainPreferences,
            onChangePlainPreferences,
            onChangePlainLocation,
            onChangeTrainPreferences,
        } = this.props;
        console.log(translationsPlainPreferences)
        console.log(translationsPlainPreferences.window)
        return (
            <div>
                <legend>
                    <h2 className='preference-title'>
                        <FormattedMessage
                            id="TransportPref.plainPreferences"
                            defaultMessage="Plain preferences"
                        />
                    </h2>
                    <form className='step4-box'>
                        <div className='step4-row'>
                            <div className='step4-radio selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="place"
                                    value="Window"
                                    onChange={onChangePlainPreferences}
                                />
                                <span className='step4-option'>
                                    {translationsPlainPreferences.window}
                                </span>
                            </div>
                            <div className='step4-radio no-selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="place"
                                    value="Aisle"
                                    onChange={onChangePlainPreferences}
                                />
                                <span className='step4-option'>
                                    {translationsPlainPreferences.aisle}
                                </span>
                            </div>
                        </div>
                    </form>
                    <form className='step4-box'>
                        <div className='step4-row'>
                            <div className='step4-radio selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="ubication"
                                    value="Front"
                                    onChange={onChangePlainLocation}
                                />
                                <span className='step4-option'>
                                    <FormattedMessage
                                        id="TransportPref.front"
                                        defaultMessage="Front"
                                    />
                                </span>
                            </div>
                            <div className='step4-radio no-selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="ubication"
                                    value="Middle"
                                    onChange={onChangePlainLocation}
                                />
                                <span className='step4-option'>
                                    <FormattedMessage
                                        id="TransportPref.middle"
                                        defaultMessage="Middle"
                                    />
                                </span>
                            </div>
                            <div className='step4-radio no-selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="ubication"
                                    value="Back"
                                    onChange={onChangePlainLocation}
                                />
                                <span className='step4-option'>
                                    <FormattedMessage
                                        id="TransportPref.back"
                                        defaultMessage="Back"
                                    />
                                </span>
                            </div>
                        </div>
                    </form>
                    <h2 className='preference-title'>
                        <FormattedMessage
                            id="TransportPref.prefTrains"
                            defaultMessage="Preferences in trains"
                        />
                    </h2>
                    <form className='step4-box'>
                        <div className='step4-row'>
                            <div className='step4-radio selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="window"
                                    value="Window"
                                    onChange={onChangeTrainPreferences}
                                />
                                <span className='step4-option'>
                                    {translationsTrainPreferences.window}
                                </span>
                            </div>
                            <div className='step4-radio no-selected'>
                                <input
                                    className='radio-button'
                                    type="radio"
                                    name="window"
                                    value="Aisle"
                                    onChange={onChangeTrainPreferences}
                                />
                                <span className='step4-option'>
                                    {translationsTrainPreferences.aisle}
                                </span>
                            </div>
                        </div>
                    </form>
                </legend>
            </div>
        );
    }
}

export default TransportPref;