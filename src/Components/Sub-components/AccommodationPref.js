import React, { Component, Fragment } from 'react';
import TypeCheckboxInput from '../Types/TypeCheckboxInput';

class AccommodationPref extends Component {

  render() {
 
    const {
      optionSelected,
      onChange,
      prefContent
    } = this.props;
    const {
      legendContent,
      options,
      name
    } = prefContent;


    return (
      <Fragment>
        <legend>
          {legendContent}
          {options.map(option => <TypeCheckboxInput
            type={name}
            onChange={onChange}
            isChecked={optionSelected === option}
            name={option} />
          )
          }
        </legend>
      </Fragment>

    );
  }
}

export default AccommodationPref;