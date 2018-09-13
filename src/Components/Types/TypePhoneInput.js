import React, { Component } from 'react';


class TypePhoneInput extends Component {
    render() {
        const {
          labelContent,
          id,
          name,
          required,
        } = this.props.phoneNumber;  

        const {
          onChange,
          inputText,
          phoneNumber
        } = this.props;
        console.log('phoneeeee', this.props);
        return (
            <div className='position-label'>
              <input 
                value={inputText}
                onChange={onChange}
                className='control-label marginSomeInputs'
                id={id}
                type="tel" 
                name={name} 
                pattern="[+][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}"
                maxLength="15"
                required={required}
                value={phoneNumber}
              />
              <label className='placeholder-label' htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
    }
}

export default TypePhoneInput;