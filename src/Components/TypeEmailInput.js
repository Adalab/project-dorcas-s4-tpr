import React, { Component, Fragment } from 'react';

class TypeEmailInput extends Component {
    render() {
        console.log('inputMAIL', this.props);
        const {
          labelContent,
          id,
          name
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
              />
            </Fragment>
        );
    }
}

export default TypeEmailInput;