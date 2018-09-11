import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputText;  

        const {
          onChange
        } = this.props;

        return (
            <div className='position-label'>
              <input onChange={onChange}
                className='control-label'
                id={id} 
                type="text" 
                name={name}
              />
              <label className='placeholder-label' htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
  }  
}
 
export default TypeTextInput;