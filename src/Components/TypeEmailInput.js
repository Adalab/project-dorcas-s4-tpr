import React, { Component, Fragment } from 'react';


class TypeEmailInput extends Component {
    render() {
        console.log('inputMAIL', this.props);
        const {
          id,
          name,
          disabled
        } = this.props.emailAdress;  
        return (
            <Fragment>
              <label htmlFor={id}>
                Email
              </label>
              <input 
                id={id} 
                type="email" 
                name={name}               
                placeholder='me@aboutjunior.com'
                disabled={disabled}
              />
            </Fragment>
        );
    }
}

export default TypeEmailInput;