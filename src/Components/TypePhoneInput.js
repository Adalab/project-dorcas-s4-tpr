import React, { Component, Fragment } from 'react';


class TypePhoneInput extends Component {
    render() {
        const {
          labelContent,
          id,
          name,
          required
        } = this.props.phoneNumber;  
        return (
            <Fragment>
              <label htmlFor={id}>
                {labelContent}
              </label>
              <input 
                id={id}
                type="tel" 
                name={name} 
                pattern="[+][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}"
                maxLength="15"
                placeholder='+34 789 987 781'
                required={required}
              />
            </Fragment>
        );
    }
}

export default TypePhoneInput;