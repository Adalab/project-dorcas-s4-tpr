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
        } = this.props;
        let className;
        if (inputText !== undefined && inputText.length > 0) {
          className ='label-located';
      } else {
          className = '';
      }
        return (
            <div className='position-label'>
              <input 
                value={inputText}
                onChange={onChange}
                className='control-label marginSomeInputs'
                id={id}
                type="tel" 
                name={name} 
                required={required}
              />
              <label className={`placeholder-label ${className}`} htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
    }
}

export default TypePhoneInput;