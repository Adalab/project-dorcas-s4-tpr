import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputText;  

        const {
          onChange,
          toggleClass
        } = this.props;
        console.log('adios', this.props.inputText);
        return (
            <div className={`position-label ${toggleClass}`}>
              <input onChange={onChange}
                className='control-label marginSomeInputs'
                id={id} 
                type="text" 
                name={name}
                value={this.props.inputText}
              />
              <label className='placeholder-label' htmlFor={id}>
              {labelContent}
            </label>
            </div>
        );
  }  
}
 
export default TypeTextInput;