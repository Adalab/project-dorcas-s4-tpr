import React, { Component, Fragment } from 'react';


class TypeCheckboxInput extends Component {
    render() {
        console.log('inputCHECKBOX', this.props);
        const {
          labelContent,
          id,
          name,
          required
        } = this.props.contentCheckbox;  
        return (
            <Fragment>
              <label htmlFor={id}>
                <input 
                  type="checkbox" 
                  name={name} 
                  id={id}
                  required={required}
                />
                <span className="slider round"></span>
                {labelContent}
              </label>
            </Fragment>
        );
    }
}

export default TypeCheckboxInput;