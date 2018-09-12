import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
          className,
        } = this.props.inputData;  

        const {
          onChange,
          toggleClass,
          value,
        } = this.props;
        console.log('adios', this.props.inputText);
        return (
            <div className={`position-label ${toggleClass}`}>
              <input onChange={onChange}
                className='control-label marginSomeInputs'
                id={id} 
                type="text" 
                name={name}
                value={value}
              />
              <label className={`placeholder-label ${className}`} htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
  }  
}
 
export default TypeTextInput;