import React, { Component, Fragment } from 'react';
// import TypeCheckboxInput from '../Types/TypeCheckboxInput';
import { FormattedMessage } from 'react-intl';

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
          {options.map(option => <input
            // type="radio"
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