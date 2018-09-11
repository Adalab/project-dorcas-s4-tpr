import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            plainPreferences,
            trainPreferences,
            nombre,
            tipo,
            onChange,
            isChecked
        } = this.props;

        return (
            <div>
                <legend>
                    <h2>Preferencias en aviones</h2>
                    <form >
                        <input type="radio" name="window" value="Window" />
                        <input type="radio" name="aisle" value="Aisle" />
                    </form>
                    <form >
                        <input type="radio" name="Front" value="Front" />
                        <input type="radio" name="Middle" value="Middle" />
                        <input type="radio" name="Back" value="Back" />
                    </form>
                    <h2>Preferencias en trenes</h2>
                    <form >
                        <input type="radio" name="window" value="Window" />
                        <input type="radio" name="aisle" value="Aisle" />
                    </form>
                </legend>
            </div>
        );
    }
}

export default TransportPref;