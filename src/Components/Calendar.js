import React, { Component, Fragment } from 'react';
import { SingleDatePicker } from 'react-dates';

class Calendar extends Component {
    render() {
        console.log(this.props);
        const {date, focused, id, labelContent, numberOfMonths, onDateChange, onFocusChange, small} = this.props;
        return (
            <Fragment>
            <label htmlFor='dateIssue'>
               {labelContent} 
            </label>
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={onDateChange} // PropTypes.func.isRequired
                focused= {focused} // PropTypes.bool
                onFocusChange={onFocusChange} // PropTypes.func.isRequired
                id={id} // PropTypes.string.isRequired
                numberOfMonths={numberOfMonths}
                small={small}
                autocomplete="on"
        />
        </Fragment>
         );
    }
}

export default Calendar;