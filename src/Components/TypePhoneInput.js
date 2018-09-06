import React, { Component, Fragment } from 'react';


class TypePhoneInput extends Component {
    render() {
        console.log('inputPHONE', this.props);
        const {
          labelContent,
          id,
          name
        } = this.props.phoneNumber;  
        return (
            <Fragment>
              <label htmlFor="">
                {labelContent}
              </label>
              <input type="tel" name="" id=""/>
            </Fragment>
        );
    }
}

export default TypePhoneInput;