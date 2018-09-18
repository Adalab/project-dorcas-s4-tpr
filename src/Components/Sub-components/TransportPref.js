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
            
            <div className={`step4-radio ${windowSel}`}>
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
                            // <div className={`step4-radio ${aisleSel}`}>
                            //     <input
                            //         className='radio-button'
                            //         type="radio"
                            //         name="place"
                            //         value="Aisle"
                            //         onChange={onChangePlainPreferences}
                            //     />
                            //     <span className='step4-option'>
                            //         {translationsPlainPreferences.aisle}
                            //     </span>
                            // </div>
                        
                    
                            <div className={`step4-radio ${firstSel}`}>
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
                            <div className={`step4-radio ${centerSel}`}>
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
                            <div className={`step4-radio ${lastSel}`}>
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