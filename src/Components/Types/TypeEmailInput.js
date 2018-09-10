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
      onChange
    } = this.props
    
    return (
      <div className='position-label'>
        <input
          onChange={onChange}
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