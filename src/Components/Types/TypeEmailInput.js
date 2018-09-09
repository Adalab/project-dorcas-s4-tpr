import React, { Component } from 'react';

class TypeEmailInput extends Component {
    render() {
        console.log('inputMAIL', this.props);
        const {
          labelContent,
          id,
          name,
          disabled
        } = this.props.emailAdress;  
        return (
            <div className='position-label'>
              <label className='placeholder-label' htmlFor="">
                {labelContent}
              </label>
              <input
                className='control-label' 
                id={id} 
                type="email" 
                name={name}               
                placeholder='me@aboutjunior.com'
                disabled={disabled}
              />
            </div>
        );
    }
}

export default TypeEmailInput;