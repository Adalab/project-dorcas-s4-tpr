import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class RadioGroup extends Component {
    render() {
        console.log(this.props.selected);
        const {
            onChange,
            values,
            selected
        } = this.props;
        return (
            <ul className='step4-row'>
                {values.map(radioButton => {
                    return (
                        <div className='step4-radio'>
                            <input
                                className='radio-button'
                                type="radio"
                                name="place"
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