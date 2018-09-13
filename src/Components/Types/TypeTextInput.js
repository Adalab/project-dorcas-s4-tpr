import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputData;  

        const {
          onChange,
          toggleClass,
          inputText,
        } = this.props;
        console.log('adios', this.props.inputText);
        let className;
        if (inputText !== undefined && inputText.length > 0) {
          className ='label-located';
      } else {
          className = '';
      }
        return (
            <div className={`position-label ${toggleClass}`}>
              <input onChange={onChange}
                className='control-label marginSomeInputs'
                id={id} 
                type="text" 
                name={name}
                value={inputText}
              />
              <label className={`placeholder-label ${className}`} htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
  }  
}
 
export default TypeTextInput;