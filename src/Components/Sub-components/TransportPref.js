import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class TransportPref extends Component {

    render() {

        const {
            onChangePlainPreferences,
            onChangePlainLocation,
            onChangeTrainPreferences,
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
                    <h2>Preferencias en vuelos</h2>
                    <form >
                        <span>Window</span>
                        <input
                            type="radio"
                            name="place"
                            value="Window"
                            onChange={onChangePlainPreferences}
                        />
                        <span>Aisle</span>
                        <input
                            type="radio"
                            name="place"
                            value="Aisle"
                            onChange={onChangePlainPreferences}
                        />
                    </form>
                    <form >
                        <span>Front</span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Front"
                            onChange={onChangeTrainPreferences}
                        />
                        <span>Middle</span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Middle"
                            onChange={onChangeTrainPreferences}
                        />
                        <span>Back</span>
                        <input
                            type="radio"
                            name="ubication"
                            value="Back"
                            onChange={onChangeTrainPreferences}
                        />
                    </form>
                    <h2>Preferencias en trenes</h2>
                    <form >
                        <span>Window</span>
                        <input
                            type="radio"
                            name="window"
                            value="Window"
                        />
                        <span>Aisle</span>
                        <input
                            type="radio"
                            name="aisle"
                            value="Aisle"
                        />
                    </form>
                </legend>
            </div>
        );
    }
}

export default TransportPref;