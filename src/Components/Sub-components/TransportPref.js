import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            plainPreferences
        } = this.props;
        


        return (
            <div>
                <legend>
                    {plainPreferences.map(plainPreference => <TransportPref
                        plainPreference={plainPreference}
                    />)}
                </legend>
            </div>

        );
    }
}

export default TransportPref;