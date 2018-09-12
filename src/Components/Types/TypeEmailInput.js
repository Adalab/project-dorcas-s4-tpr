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

    const {
      onChange,
      inputText
    } = this.props
    
    return (
      <div className='position-label'>
        <input
          value= {inputText}
          onChange={onChange}
          className='control-label marginSomeInputs'
          id={id}
          type="email"
          name={name}
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