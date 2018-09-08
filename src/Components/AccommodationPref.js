import React, { Component,Fragment } from 'react';
import TypeCheckboxInput from './TypeCheckboxInput';

class AccommodationPref extends Component {
    render() {
        console.log('propsACCOM', this.props);
        const{
          legendContent,
          option1,
          option2,
          option3,
          option4
        }=this.props.prefContent;

        const checkboxOption1 = {
          labelContent: option1,
          id: 'residentOutside',
          name: 'residentOutside',
          required: true
        };
        
        const checkboxOption2 = {
          labelContent: option2,
          id: 'residentOutside',
          name: 'residentOutside',
          required: true
        };
        
        const checkboxOption3 = {
          labelContent: option3,
          id: 'residentOutside',
          name: 'residentOutside',
          required: true
        };
        
        const checkboxOption4 = {
          labelContent: option4,
          id: 'residentOutside',
          name: 'residentOutside',
          required: true
        };

      return (
        <Fragment>
          <legend>
            {legendContent}
            <TypeCheckboxInput contentCheckbox={checkboxOption1}/>
            <TypeCheckboxInput contentCheckbox={checkboxOption2}/>
            <TypeCheckboxInput contentCheckbox={checkboxOption3}/>
            <TypeCheckboxInput contentCheckbox={checkboxOption4}/>
          </legend>
        </Fragment>
        
      );
    }
  }
  
  export default AccommodationPref;