import React, { Component } from 'react';

class TypeEmailInput extends Component {
    render() {
        const {
          labelContent,
          id,
          name,
          disabled
        } = this.props.emailAdress;  
        return (
            <div className='position-label'>
              <input
                className='control-label' 
                id={id} 
                type="email" 
                name={name}               
                placeholder='me@aboutjunior.com'
                disabled={disabled}
              />
              <label className='placeholder-label label-email' htmlFor="">
              {labelContent}
            </label>
            </div>
        );
    }
}

export default TypeEmailInput;