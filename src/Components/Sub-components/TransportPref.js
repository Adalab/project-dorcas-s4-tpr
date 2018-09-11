import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            plainPreferences,
            name,
            type,
            onChange,
            isChecked
          } = this.props; 

        return (
            <div>
                <legend>
                    {plainPreferences.map(plainPreference => <input
                        type="checkbox"
                        value={name}
                        id={name}
                        required={true}
                        checked={isChecked}
                        onChange={() => onChange(type, name)}
                    />)}
                </legend>
            </div>

        );
    }
}

export default TransportPref;