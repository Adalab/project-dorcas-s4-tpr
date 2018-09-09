import React, { Component, Fragment } from 'react';
import TypeCheckboxInput from '../Types/TypeCheckboxInput';
import { FormattedMessage } from 'react-intl';

class AccommodationPref extends Component {

  render() {
    console.log('propsACCOM', this.props);
    
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