import React, { Component,Fragment } from 'react';
import TypeCheckboxInput from './TypeCheckboxInput';
import { FormattedMessage } from 'react-intl';

class AccommodationPref extends Component {
    render() {
        console.log('propsACCOM', this.props);
        const{
          legendContent,
          option1,
          option2,
          option3,
          option4,
          name
        }=this.props.prefContent;
        
        const checkboxOption1 = {
          labelContent: option1,
          id: name+'1',
          name: name+'1',
          required: true
        };
        
        const checkboxOption2 = {
          labelContent: option2,
          id: name+'2',
          name: name+'2',
          required: true
        };
        
        const checkboxOption3 = {
          labelContent: option3,
          id: name+'3',
          name: name+'3',
          required: true
        };
        
        const checkboxOption4 = {
          labelContent: option4,
          id: name+'4',
          name: name+'4',
          required: true
        };

      return (
        <Fragment>
          <legend>
            <div>{legendContent} hola</div>
            
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