import React, { Component } from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import trLocale from 'moment/locale/tr';
import moment from 'moment';



class Datepicker extends Component {
    constructor(props){
        super(props);
        this.state ={
            startDate:null,
            endDate: null,
            startDate: moment(),
      endDate: moment().subtract(-1, 'day'),
        }
    }
    render() {
     

        moment.locale('tr', trLocale);
        return (
           
                 <DateRangePicker
                 numberOfMonths={1}
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
            
        )
    }
}
export default Datepicker;