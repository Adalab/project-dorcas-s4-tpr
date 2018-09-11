import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            plainPreferences,
            trainPreferences,
            name,
            type,
            onChange,
            isChecked
        } = this.props;

        return (
            <div>
                <legend>
                    <h2>Preferencias en aviones</h2>
                    {plainPreferences.map(plainPreference => <input
                        type="checkbox"
                        value={name}
                        id={name}
                        required={true}
                        checked={isChecked}
                        // onChange={() => onChange(type, name)}
                    />)}
                    <h2>Preferencias en trenes</h2>
                    {trainPreferences.map(trainPreference => <input
                        type="checkbox"
                        value={name}
                        id={name}
                        required={true}
                        checked={isChecked}
                    />)}
                </legend>
            </div>

        );
    }
}

export default TransportPref;