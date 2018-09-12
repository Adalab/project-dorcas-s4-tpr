import React, { Component } from 'react';

class TypeTextInput extends Component {
    render() {
        const {
          labelContent,  
          id,
          name,
          inputText
        } = this.props.inputText;  

        const {
          onChange,
          toggleClass
        } = this.props;
        
        return (
            <div className={`position-label ${toggleClass}`}>
              <input onChange={onChange}
                className='control-label'
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