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
            transportStateSelections
        } = this.props;
        
        const {   
            windowSel,
            aisleSel,
            firstSel,
            centerSel,
            lastSel,
            trainWindowSel,
            trainAisleSel,
        } = this.props.transportStateSelections;
        console.log(windowSel);
        return (
            
            
                    
                        

                            <div className={`step4-radio ${trainWindowSel}`}>
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
                            <div className={`step4-radio ${trainAisleSel}`}>
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
                        
        );
    }
}

export default TransportPref;