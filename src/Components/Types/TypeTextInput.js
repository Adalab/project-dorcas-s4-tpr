import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name
        } = this.props.inputData;  

        const {
          onChange,
          toggleClass,
          value,
        } = this.props;

        return (
            <div className={`position-label ${toggleClass}`}>
              <input onChange={onChange}
                className='control-label marginSomeInputs'
                id={id} 
                type="text" 
                name={name}
                value={value}
              />
              <label className='placeholder-label' htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
  }  
}
 
export default TypeTextInput;