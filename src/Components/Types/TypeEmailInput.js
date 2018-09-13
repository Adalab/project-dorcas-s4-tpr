import React, { Component } from 'react';

class TypeEmailInput extends Component {
  render() {
    console.log('inputMAIL', this.props);
    const {
      labelContent,
      id,
      name,
      disabled
    } = this.props.emailAddress;

    const {
      onChange,
      inputText,
    } = this.props;

    let className;
    if (inputText !== undefined && inputText.length > 0) {
      className ='label-located';
  } else {
      className = '';
  }
    
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
        <label className={`placeholder-label label-email ${className}`} htmlFor="">
          {labelContent}
        </label>
      </div>
    );
  }
}

export default TypeEmailInput;