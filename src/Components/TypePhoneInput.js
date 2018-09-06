import React, { Component, Fragment } from 'react';


class TypePhoneInput extends Component {
    render() {
        console.log('inputPHONE', this.props);
        const {
          labelContent,
          id,
          name
        } = this.props.phoneNumber;  
        return (
            <Fragment>
              <label htmlFor="">
                {labelContent}
              </label>
              <input 
                id={id}
                type="tel" 
                name={name} 
                pattern="[+][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}"
                maxLength="15"
                placeholder='+34 789 987 781'
                required
              />
            </Fragment>
        );
    }
}

export default TypePhoneInput;