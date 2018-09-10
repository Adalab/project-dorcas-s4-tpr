import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            focused: false,
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ date }, () => { console.log(this.state) });
    }

    onFocusChange({ focused }) {
        this.setState({ focused }, () => { console.log(this.state) });
    }

    render() {
        console.log(this.props);
        const { focused, date } = this.state;
        const { id, labelContent } = this.props;
        return (
            <div className='position-calendar'>
                <SingleDatePicker
                    date={date} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={focused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    id={id} // PropTypes.string.isRequired
                    placeholder={date}
                    showDefaultInputIcon={true}
                    inputIconPosition="after"
                    numberOfMonths={1}
                    small={true}
                />
                <label
                    className='placeholder-label_calendar'
                    htmlFor='dateIssue'>
                    {labelContent}
                </label>
            </div>
        );
    }
}

export default Calendar;