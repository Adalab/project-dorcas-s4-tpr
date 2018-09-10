import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            focused: false,
        }
    }
    render() {
        console.log(this.props);
        const { id, labelContent, numberOfMonths, small } = this.props;
        return (
            <div className='position-calendar'>
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
                
                <label 
                className='placeholder-label'
                htmlFor='dateIssue'>
                {labelContent}
                </label>
            </div>
        );
    }
}

export default Calendar;