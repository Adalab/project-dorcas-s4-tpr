import React, { Component, Fragment } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
        } = this.props.inputText;  
        return (
            <Fragment>
              <label htmlFor={id}>
                {labelContent}
              </label>
              <input 
                id={id} 
                type="text" 
                name={name}
              />
            </Fragment>
        );
    }
}
 
export default TypeTextInput;