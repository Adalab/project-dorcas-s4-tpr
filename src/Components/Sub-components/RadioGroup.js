import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class RadioGroup extends Component {
    render() {
        console.log(this.props.selected);
        const {
            onChange,
            values,
            selected, 
            type,
        } = this.props;
        return (
            <ul className='step4-row'>
                {values.map(radioButton => {
                    return (
                        <div className={`step4-radio ${selected === radioButton.value ? 'selected' : 'no-selected'}`}>
                            <input
                                className='radio-button'
                                type="radio"
                                name={type}
                                value={radioButton.value}
                                onChange={onChange}
                                checked={selected === radioButton.value}
                            />
                            <label className='step4-option'>
                                {radioButton.label}
                            </label>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

export default RadioGroup;