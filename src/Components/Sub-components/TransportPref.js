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
                    <h2>
                        <FormattedMessage
                            id="TransportPref.plainPreferences"
                            defaultMessage="Plain preferences"
                        />
                    </h2>
                    <form >
                        <span>
                            <FormattedMessage
                                id={translationsPlainPreferences.window.defaultMessage}
                            />
                        </span>
                        <input
                            type="radio"
                            name="place"
                            value="Window"
                            onChange={onChangePlainPreferences}
                        />
                        <span>
                            <FormattedMessage
                                id={translationsPlainPreferences.aisle.defaultMessage}
                            />
                        </span>
                        <input
                            type="radio"
                            name="place"
                            value="Aisle"
                            onChange={onChangePlainPreferences}
                        />
                    </form>
                    <form >
                        <span>
                            <FormattedMessage
                                id="TransportPref.front"
                                defaultMessage="Front"
                            />
                        </span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Front"
                            onChange={onChangePlainLocation}
                        />
                        <span>
                            <FormattedMessage
                                id="TransportPref.middle"
                                defaultMessage="Middle"
                            />
                        </span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Middle"
                            onChange={onChangePlainLocation}
                        />
                        <span>
                            <FormattedMessage
                                id="TransportPref.back"
                                defaultMessage="Back"
                            />
                        </span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Back"
                            onChange={onChangePlainLocation}
                        />
                    </form>
                    <h2>
                        <FormattedMessage
                            id="TransportPref.prefTrains"
                            defaultMessage="Preferences in trains"
                        />
                    </h2>
                    <form >
                        <span>
                            <FormattedMessage
                                id={translationsTrainPreferences.window.defaultMessage}
                            />
                        </span>
                        <input
                            type="radio"
                            name="window"
                            value="Window"
                            onChange={onChangeTrainPreferences}
                        />
                        <span>
                            <FormattedMessage
                                id={translationsTrainPreferences.aisle.defaultMessage}
                            />
                        </span>
                        <input
                            type="radio"
                            name="window"
                            value="Aisle"
                            onChange={onChangeTrainPreferences}
                        />
                    </form>
                </legend>
            </div>
        );
    }
}

export default TransportPref;