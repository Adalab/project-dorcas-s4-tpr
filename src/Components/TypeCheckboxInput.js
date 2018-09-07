import React, { Component, Fragment } from 'react';


class TypeCheckboxInput extends Component {
    render() {
        console.log('inputMAIL', this.props);
        const {
          labelContent
          id,
          name,
          
        } = this.props.contentCheckbox;  
        return (
            <Fragment>
              <label htmlFor="">
                <input type="checkbox" name="" id=""/>
                <span className="slider round"></span>
              </label>
            </Fragment>
        );
    }
}

export default TypeCheckboxInput;