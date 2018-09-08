import React, { Component, Fragment } from 'react';
import { SingleDatePicker } from 'react-dates';

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
                date: "",
                focused: false,
        }
    }
    render() {
        console.log(this.props);
        const { id, labelContent, numberOfMonths, small} = this.props;
        return (
            <Fragment>
            <label htmlFor='dateIssue'>
               {labelContent} 
            </label>
            <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
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