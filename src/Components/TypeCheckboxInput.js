import React, { Component, Fragment } from 'react';


class TypeCheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

    render() {
        console.log('inputCHECKBOX', this.props);
        const {
          name,
          type,
          onChange,
          isChecked
        } = this.props;  
        return (
            <Fragment>
              <label htmlFor={name}>
                <input 
                  type="checkbox" 
                  name={name} 
                  value={name}
                  id={name}
                  required={true}
                  checked={isChecked}
                  onChange={()=>onChange(type,name)}
                />
                <span className="slider round"></span>
                {name}
              </label>
            </Fragment>
        );
    }
}

export default TypeCheckboxInput;