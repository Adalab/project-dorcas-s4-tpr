import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputText;  
        return (
            <div className='position-label'>
              <label className='placeholder-label' htmlFor={id}>
                {labelContent}
              </label>
              <input 
                className='control-label'
                id={id} 
                type="text" 
                name={name}
              />
            </div>
        );
    }
}
 
export default TypeTextInput;