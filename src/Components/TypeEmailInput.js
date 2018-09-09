import React, { Component, Fragment } from 'react';

class TypeEmailInput extends Component {
    render() {
        const {
          labelContent,
          id,
          name,
          disabled
        } = this.props.emailAdress;  
        return (
            <Fragment>
              <label htmlFor="">
                {labelContent}
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